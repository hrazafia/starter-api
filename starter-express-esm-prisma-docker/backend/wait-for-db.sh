#!/bin/bash
set -e

host="db"
port=5432
echo "Waiting for ${host}:${port}..."

# boucle jusqu'à ce que le port soit ouvert
while ! bash -c "cat < /dev/tcp/${host}/${port}" >/dev/null 2>&1; do
  printf '.'
  sleep 1
done

echo "Database reachable at ${host}:${port}"
