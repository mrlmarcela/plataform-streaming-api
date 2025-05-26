import { FastifyInstance } from "fastify";
import { prisma } from "../../../lib/prisma";
import { z } from "zod";

export async function createPlaylist(app: FastifyInstance) {
  app.post("/playlists", async (request, reply) => {
    const createPlaylistBody = z.object({
      name: z.string().min(3, "Name is required"),
    });

    const { name } = createPlaylistBody.parse(request.body);

    try {
      const playlist = await prisma.playlist.create({
        data: {
          name,
        },
      });

      return reply.status(201).send(playlist);
    } catch (error) {
      console.error("Error creating playlist:", error);
      return reply.status(500).send({ error: "Internal server error." });
    }
  });
}
