import type { Context } from "./trpc"
import type { appRouter } from "./root"

export type AppRouter = typeof appRouter
export type AppContext = Context
