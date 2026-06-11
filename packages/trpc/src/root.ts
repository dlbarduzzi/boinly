import { createRouter } from "./trpc"

import { authRouter } from "./routers/auth"
import { usersRouter } from "./routers/users"
import { healthRouter } from "./routers/health"

const appRouter = createRouter({
  auth: authRouter,
  users: usersRouter,
  health: healthRouter,
})

export { appRouter }
