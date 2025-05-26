import { FastifyInstance } from 'fastify';
import { prisma } from "../../../lib/prisma";

export async function getItem(app: FastifyInstance) {
  app.get('/items', async () => {
    return await prisma.item.findMany();
  });

  app.get('/items/:id', async (request) => {
    const { id } = request.params as { id: string };

    return await prisma.item.findUnique({
      where: { id },
    });
  });
}
