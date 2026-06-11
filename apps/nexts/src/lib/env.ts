import z from "zod"

import { authEnv } from "@boinly/auth/env"
import { createEnv } from "@t3-oss/env-nextjs"

export const env = createEnv({
  extends: [authEnv()],
  server: {
    NODE_ENV: z.enum(["test", "development", "production"]).default("development"),
    LOG_LEVEL: z.enum(["debug", "info", "warn", "error", "silent"]),
    DATABASE_URL: z.url(),
  },
  onValidationError: issues => {
    console.error(
      "❌ NEXTJS - Missing Environment Variables ❌",
      JSON.stringify(issues, null, 2),
    )
    // eslint-disable-next-line node/no-process-exit
    process.exit(1)
  },
  runtimeEnv: {
    /* eslint-disable node/no-process-env */
    NODE_ENV: process.env.NODE_ENV,
    LOG_LEVEL: process.env.LOG_LEVEL,
    DATABASE_URL: process.env.DATABASE_URL,
    /* eslint-enable node/no-process-env */
  },
  emptyStringAsUndefined: true,
  /* eslint-disable node/no-process-env */
  skipValidation:
    !!process.env.CI ||
    process.env.SKIP_ENV_VALIDATION === "true" ||
    process.env.npm_lifecycle_event === "lint",
  /* eslint-enable node/no-process-env */
})
