import { createRouter, protectedProcedure } from "../trpc"

const usersRouter = createRouter({
  get: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.query.user.findFirst()
    return user
  }),
})

export { usersRouter }
