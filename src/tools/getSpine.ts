import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { getMobiFile } from '../mobi'

export function addGetSpineTool(server: McpServer) {
  server.tool(
    'get spine',
    'Get the spine of the initialized mobi file. In MobiSpineItem, `id` is the chapter id, '
    + '`text` is the original html text without resource path replacement, the `start` and `end` '
    + 'are the start and end byte offsets of the chapter in the mobi file, and `size` is the size '
    + 'of the chapter in bytes.',
    {},
    () => {
      const mobi = getMobiFile()
      const spine = mobi?.getSpine()

      if (!spine) {
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
          text: JSON.stringify(spine),
        }],
      }
    },
  )
}
