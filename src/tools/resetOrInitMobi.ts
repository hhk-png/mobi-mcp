import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { initMobiFile } from '@lingo-reader/mobi-parser'
import { z } from 'zod'
import { destroyMobiFile, existsMobiFile, setMobiFile } from '../mobi'

export function addResetOrInitMobiTool(server: McpServer) {
  server.tool(
    'reset or init mobi',
    'Initialize or reset the mobi file. This tool must be called before any other tool that uses the mobi file.',
    {
      filePath: z.string(),
    },
    async ({ filePath }) => {
      try {
        if (existsMobiFile()) {
          destroyMobiFile()
        }
        const mobi = await initMobiFile(filePath, './images')
        setMobiFile(mobi)
        return {
          content: [{
            type: 'text',
            text: `Mobi file successfully initialized from ${filePath}`,
          }],
        }
      }
      catch (e) {
        return {
          content: [{
            type: 'text',
            text: `Error initializing mobi file: ${filePath} \nwith error: ${e}`,
          }],
        }
      }
    },
  )
}
