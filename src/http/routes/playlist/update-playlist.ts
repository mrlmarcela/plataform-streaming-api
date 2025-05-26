import { FastifyInstance } from 'fastify';
import { prisma } from '../../../lib/prisma';
import { z } from 'zod';

export async function updatePlaylist(app: FastifyInstance) {
  app.put('/playlists/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().cuid(),
    });

    const bodySchema = z.object({
      name: z.string().optional(),
      addItemIds: z.array(z.string().cuid()).optional(),
      removeItemIds: z.array(z.string().cuid()).optional(),
    });

    const { id } = paramsSchema.parse(request.params);
    const { name, addItemIds, removeItemIds } = bodySchema.parse(request.body);

    const data: any = {};

    if (name) {
      data.name = name;
    }

    if (addItemIds || removeItemIds) {
      data.items = {};
      if (addItemIds) data.items.connect = addItemIds.map(id => ({ id }));
      if (removeItemIds) data.items.disconnect = removeItemIds.map(id => ({ id }));
    }

    try {
      const updatedPlaylist = await prisma.playlist.update({
        where: { id },
        data,
        include: { items: true },
      });

      return reply.code(200).send(updatedPlaylist);
    } catch (error) {
      console.error('Erro ao atualizar playlist:', error);
      return reply.code(500).send({ message: 'Erro ao atualizar playlist' });
    }
  });
}
