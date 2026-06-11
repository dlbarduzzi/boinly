import { createJiti } from "jiti"
import { fileURLToPath } from "node:url"

const jiti = createJiti(fileURLToPath(import.meta.url))

// Import env files to validate at build time.
await jiti.import("./src/lib/env.ts")

/** @type {import("next").NextConfig} */
const nextConfig = {
  // Enables hot reloading for local packages without a build step.
  transpilePackages: [
    "@/boinly/auth",
    "@/boinly/db",
    "@/boinly/trpc",
  ],
}

export default nextConfig
