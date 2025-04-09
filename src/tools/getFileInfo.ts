import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { getMobiFile } from '../mobi'

export function addGetFileInfoTool(server: McpServer) {
  server.tool(
    'get file info',
    'Get the file info of the initialized mobi file, which includes the file name',
    {},
    () => {
      const mobi = getMobiFile()
      const fileInfo = mobi?.getFileInfo()
      if (!fileInfo) {
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
          text: JSON.stringify(fileInfo),
        }],
      }
    },
  )
}
