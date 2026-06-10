import postgres from "postgres"

import { env } from "../lib/env"
import { drizzle } from "drizzle-orm/postgres-js"

import * as authSchema from "./schemas/auth"

const schema = { ...authSchema }
const client = postgres(env.DATABASE_URL)
const connect = drizzle({ client, schema, casing: "snake_case" })

export const db = connect
export type DB = typeof db
