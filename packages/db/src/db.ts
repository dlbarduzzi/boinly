import postgres from "postgres"

import { env } from "./env"
import { drizzle } from "drizzle-orm/postgres-js"

import * as authSchema from "./schemas/auth"

const connect = drizzle({
  client: postgres(env.DATABASE_URL),
  schema: { ...authSchema },
  casing: "snake_case",
})

export const db = connect
export type DB = typeof db
