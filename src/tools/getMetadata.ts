import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { getMobiFile } from '../mobi'

export function addGetMetadataTool(server: McpServer) {
  server.tool(
    'get metadata',
    'get the metadata of the initialized mobi file',
    {},
    () => {
      const mobi = getMobiFile()
      const metadata = mobi?.getMetadata()
      if (!metadata) {
        return {
          content: [{
            type: 'text',
            text: 'Mobi file not initialized',
          }],
        }
      }
      return {
        content: [{
          type: 'text',
          text: JSON.stringify(metadata),
        }],
      }
    },
  )
}
