import "server-only"

import { env } from "@/lib/env"
import { initAuth } from "@boinly/auth/main"

const trustedOrigins = env.NODE_ENV === "development"
  ? ["exp://", "exp://**", "exp://192.168.*.*:*/**"]
  : []

const auth = initAuth({
  baseUrl: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
  githubClientId: env.GITHUB_CLIENT_ID,
  githubClientSecret: env.GITHUB_CLIENT_SECRET,
  googleClientId: env.GOOGLE_CLIENT_ID,
  googleClientSecret: env.GOOGLE_CLIENT_SECRET,
  trustedOrigins,
})

export { auth }
