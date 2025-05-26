import fastify from 'fastify';
import { createPlaylist } from './routes/playlist/create-playlist';
import { getPlaylist } from './routes/playlist/get-playlist';
import { updatePlaylist } from './routes/playlist/update-playlist';
import { deletePlaylist } from './routes/playlist/delete-playlist';

import { createItem } from './routes/item/create-item';
import { getItem } from './routes/item/get-item';
import { updateItem } from './routes/item/update-item';
import { deleteItem } from './routes/item/delete-item';

const app = fastify();

app.register(createPlaylist);
app.register(getPlaylist);
app.register(updatePlaylist);
app.register(deletePlaylist);

app.register(createItem);
app.register(getItem);
app.register(updateItem);
app.register(deleteItem);

app.get('/', async (request, reply) => {
  return { message: 'Hello, World!' };
});

app.listen({ port: 3000 }).then(() => {
  console.log('Servidor rodando na porta 3000...');
});