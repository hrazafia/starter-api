import express from 'express';
import http from 'http';
import { Server as IOServer } from 'socket.io';
import cors from 'cors';
import routes from './routes/index.js';
import requireApiKey from './middlewars/requireApiKey.js';
import rateLimiterMock from './middlewars/rateLimiterMock.js';

const app = express();
const server = http.createServer(app);
const io = new IOServer(server, {
  path: '/socket.io',
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());
app.use(requireApiKey);        // applique x-api-key globalement pour /api/*
app.use(rateLimiterMock);     // middleware mock de rate-limiting
app.use('/api', routes.default);   // routes REST
app.use('/auth', routes.auth); // auth séparé

// Socket.io: presence & game events
io.use((socket, next) => {
  // on attend un token et apiKey dans handshake.auth
  const { token, apiKey } = socket.handshake.auth || {};
  console.log('[WS] handshake auth token:', !!token, 'apiKey:', apiKey ? 'present' : 'missing');
  // ici tu vérifieras token/apiKey pour production
  return next();
});

io.on('connection', (socket) => {
  console.log('[WS] client connected', socket.id);

  socket.on('join_room', ({ gameId, role }) => {
    console.log(`[WS] join_room: socket=${socket.id} gameId=${gameId} role=${role}`);
    socket.join(gameId);
    // broadcast minimal
    socket.to(gameId).emit('player_joined', { socketId: socket.id, gameId, role });
  });

  socket.on('player_move', (payload) => {
    console.log('[WS] player_move', payload);
    // validation + broadcast
    io.to(payload.gameId).emit('game_update', { gameId: payload.gameId, move: payload });
  });

  socket.on('presence_ping', (payload) => {
    console.log('[WS] presence_ping', payload);
    // inform friends via room "user:{friendId}" etc.
  });

  socket.on('disconnect', (reason) => {
    console.log('[WS] disconnect', socket.id, reason);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
