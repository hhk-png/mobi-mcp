import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { readFile } from 'node:fs/promises'
import { getMobiFile } from '../mobi'

function getImageMimeType(suffix: string) {
  switch (suffix) {
    case 'jpg':
      return 'image/jpeg'
    case 'png':
      return 'image/png'
    case 'gif':
      return 'image/gif'
    default:
      return 'application/octet-stream'
  }
}

export function addGetCoverImageTool(server: McpServer) {
  server.tool(
    'get cover image',
    'Get the cover image of the mobi file.',
    {},
    async () => {
      const mobi = getMobiFile()
      const imageUri = mobi?.getCoverImage()
      if (!imageUri) {
        return {
          content: [{
            type: 'text',
            text: 'No cover image found.',
          }],
        }
      }
      const image = await readFile(imageUri)
      const mimetype = getImageMimeType(imageUri.split('.').pop() || '')
      const base64Image = image.toString('base64')
      return {
        content: [{
          type: 'image',
          data: `data:${mimetype};base64,${base64Image}`,
          mimeType: mimetype,
        }],
      }
    },
  )
}
