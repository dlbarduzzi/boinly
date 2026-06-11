import { createRouter, publicProcedure } from "../trpc"

const healthRouter = createRouter({
  get: publicProcedure.query(() => {
    return "TRPC is healthy."
  }),
})

export { healthRouter }
