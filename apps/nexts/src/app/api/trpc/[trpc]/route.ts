import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

import { appRouter } from "@boinly/trpc/root"
import { createContext } from "@boinly/trpc/main"

import { auth } from "@/auth/server"

function setCorsHeaders(res: Response) {
  res.headers.set("Access-Control-Allow-Origin", "*")
  res.headers.set("Access-Control-Allow-Headers", "*")
  res.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST")
  res.headers.set("Access-Control-Request-Method", "*")
}

export function OPTIONS() {
  const resp = new Response(null, { status: 204 })
  setCorsHeaders(resp)
  return resp
}

async function handler(req: Request) {
  const resp = await fetchRequestHandler({
    req,
    router: appRouter,
    endpoint: "/api/trpc",
    createContext: () => {
      return createContext(auth, req.headers)
    },
    onError({ error, path }) {
      console.error(`>>> tRPC Error on '${path}'`, error)
    },
  })
  setCorsHeaders(resp)
  return resp
}

export { handler as GET, handler as POST }
