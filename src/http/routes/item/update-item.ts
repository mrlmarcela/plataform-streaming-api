import { FastifyInstance } from 'fastify';
import { prisma } from "../../../lib/prisma";

export async function updateItem(app: FastifyInstance) {
  app.put('/items/:id', async (request) => {
    const { id } = request.params as { id: string };
    const { title, description, category, url, playlistId } = request.body as {
      title?: string;
      description?: string;
      category?: string;
      url?: string;
      playlistId?: string | null;
    };

    return await prisma.item.update({
      where: { id },
      data: {
        title,
        description,
        category,
        url,
        playlistId,
      },
    });
  });
}
