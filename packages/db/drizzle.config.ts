import { env } from "./src/env"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
  out: "./src/migrations",
  schema: "./src/schemas/",
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: { url: env.DATABASE_URL },
  casing: "snake_case",
})
