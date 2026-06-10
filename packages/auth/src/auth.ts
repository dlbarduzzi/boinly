import { db } from "@boinly/db/client"
import { expo } from "@better-auth/expo"
import { betterAuth } from "better-auth"
import { oAuthProxy } from "better-auth/plugins"
import { drizzleAdapter } from "better-auth/adapters/drizzle"

type AuthOptions = {
  appName: string
  baseUrl: string
  basePath: string
  secret: string
  cookiePrefix: string
  productionUrl: string
  githubClientId: string
  githubClientSecret: string
  googleClientId: string
  googleClientSecret: string
}

export function initAuth({
  basePath = "/api/auth",
  ...opts
}: AuthOptions) {
  return betterAuth({
    appName: opts.appName,
    basePath,
    baseURL: opts.baseUrl,
    database: drizzleAdapter(db, {
      provider: "pg",
    }),
    secret: opts.secret,
    plugins: [
      oAuthProxy({
        productionURL: opts.productionUrl,
      }),
      expo(),
    ],
    trustedOrigins: ["expo://"],
    advanced: {
      cookiePrefix: opts.cookiePrefix,
    },
    session: {
      cookieCache: {
        enabled: true,
        maxAge: 60 * 5, // 5 minutes
        version: "1",
      },
    },
    socialProviders: {
      github: {
        enabled: true,
        clientId: opts.githubClientId,
        clientSecret: opts.githubClientSecret,
        redirectURI: `${opts.productionUrl}/api/auth/callback/github`,
      },
      google: {
        enabled: true,
        clientId: opts.googleClientId,
        clientSecret: opts.googleClientSecret,
        redirectURI: `${opts.productionUrl}/api/auth/callback/google`,
      },
    },
  })
}

export type Auth = ReturnType<typeof initAuth>
export type Session = Auth["$Infer"]["Session"]
