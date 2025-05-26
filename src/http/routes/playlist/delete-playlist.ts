import { FastifyInstance } from 'fastify';
import { prisma } from "../../../lib/prisma";

export async function deletePlaylist(app: FastifyInstance) {
  app.delete('/playlists/:id', async (request) => {
    const { id } = request.params as { id: string };

    return await prisma.playlist.delete({
      where: { id },
    });
  });
}
