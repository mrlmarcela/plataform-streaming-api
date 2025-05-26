import { FastifyInstance } from "fastify";
import { prisma } from "../../../lib/prisma";
import { z } from "zod";

export async function createItem(app: FastifyInstance) {
  app.post("/items", async (request, reply) => {
    const createItem = z.object({
      title: z.string().min(3, "Title is required"),
      category: z.string().min(3, "Category is required"),
      description: z.string().optional(),
      url: z.string().min(10, "URL is required"),
    });

    const { title, description, url, category } = createItem.parse(
      request.body
    );

    try {
      const item = await prisma.item.create({
        data: {
          title,
          description,
          url,
          category,
        },
      });

      return reply.status(201).send(item);
    } catch (error) {
      console.error("Error creating item:", error);
      return reply.status(500).send({ error: "Internal server error." });
    }
  });
}
