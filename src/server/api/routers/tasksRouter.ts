import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const tasksRouter = createTRPCRouter({
  createTask: publicProcedure
    .input(z.object({ task: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const task = await ctx.prisma.task.create({
        data: {
          ...input,
        },
      });

      return task;
    }),
});
