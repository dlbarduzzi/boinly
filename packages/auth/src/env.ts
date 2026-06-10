import z from "zod"
import { createEnv } from "@t3-oss/env-core"

export function authEnv() {
  return createEnv({
    server: {
      BETTER_AUTH_URL: z.url(),
      BETTER_AUTH_SECRET: z.string().min(1),
      GITHUB_CLIENT_ID: z.string().min(1),
      GITHUB_CLIENT_SECRET: z.string().min(1),
      GOOGLE_CLIENT_ID: z.string().min(1),
      GOOGLE_CLIENT_SECRET: z.string().min(1),
    },
    onValidationError: issues => {
      console.error(
        "❌ AUTH - Missing Environment Variables ❌",
        JSON.stringify(issues, null, 2),
      )
      // eslint-disable-next-line node/no-process-exit
      process.exit(1)
    },
    // eslint-disable-next-line node/no-process-env
    runtimeEnv: process.env,
    emptyStringAsUndefined: true,
    /* eslint-disable node/no-process-env */
    skipValidation:
      !!process.env.CI ||
      process.env.SKIP_ENV_VALIDATION === "true" ||
      process.env.npm_lifecycle_event === "lint",
    /* eslint-enable node/no-process-env */
  })
}
