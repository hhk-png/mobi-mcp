import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { getMobiFile } from '../mobi'
import { flatToc } from '../utils'

export function addGetTocTool(server: McpServer) {
  server.tool(
    'get table of contents',
    'Get the table of contents of the initialized mobi file. The href in toc item is the inner link,'
    + 'which can be parsed through the `resolve href` tool',
    {},
    () => {
      const mobi = getMobiFile()
      const toc = mobi?.getToc()
      if (!toc) {
        return {
          content: [{
            type: 'text',
            text: 'Mobi file maybe not initialized',
          }],
        }
      }

      const flattedToc = flatToc(toc)
      return {
        content: flattedToc.map(item => ({
          type: 'text',
          text: JSON.stringify(item),
        })),
      }
    },
  )
}
