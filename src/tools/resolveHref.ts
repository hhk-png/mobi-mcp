import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"
import { getMobiFile } from "../mobi"

export function addResolveHrefTool(server: McpServer) {
  server.tool(
    'resolve href',
    'Resolve inner link in the mobi. `id` in returned result is chapter id '
    + 'and `selector` is dom selector, using querySelector can get the exact '
    + ' dom element in browser env',
    {
      innerHref: z.string()
    },
    ({ innerHref }: { innerHref: string }) => {
      const mobi = getMobiFile()
      const resolvedHref = mobi?.resolveHref(innerHref)
      if (!resolvedHref) {
        return {
          content: [{
            type: 'text',
            text: 'Mobi file is not initialized.'
          }]
        }
      }

      return {
        content: [{
          type: 'text',
          text: JSON.stringify(resolvedHref)
        }]
      }
    }
  )
}
