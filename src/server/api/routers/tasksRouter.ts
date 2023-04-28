import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const tasksRouter = createTRPCRouter({
  createTask: publicProcedure
    .input(
      z.object({
        task: z.string(),
        description: z.string(),
        date: z.string(),
        type: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const task = await ctx.prisma.task.create({
        data: {
          ...input,
        },
      });

      return task;
    }),
  getTasks: publicProcedure.query(async ({ ctx }) => {
    const tasks = await ctx.prisma.task.findMany();
    return tasks;
  }),
  updateTask: publicProcedure
    .input(
      z.object({
        id: z.string(),
        task: z.string(),
        description: z.string(),
        date: z.string(),
        type: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const updatedTask = await ctx.prisma.task.update({
        where: { id: input.id },
        data: {
          task: input.task,
          description: input.description,
          date: input.date,
          type: input.type,
        },
      });

      return updatedTask;
    }),
});
