import { FastifyInstance } from 'fastify';
import { prisma } from "../../../lib/prisma";

export async function getPlaylist(app: FastifyInstance) {
  app.get('/playlists', async () => {
    return await prisma.playlist.findMany({
      include: { items: true },
    });
  });

  app.get('/playlists/:id', async (request) => {
    const { id } = request.params as { id: string };

    return await prisma.playlist.findUnique({
      where: { id },
      include: { items: true },
    });
  });
}
