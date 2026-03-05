import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'name required'),
    email: z.string().email('invalid email')
  })
});
