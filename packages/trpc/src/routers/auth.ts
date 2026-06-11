import { createRouter, protectedProcedure, publicProcedure } from "../trpc"

export const authRouter = createRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "You can see this secret message!"
  }),
})
