import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { readFileSync } from 'node:fs'
import { z } from 'zod'
import { getMobiFile } from '../mobi'

export function addLoadChapterTool(server: McpServer) {
  server.tool(
    'load chapter',
    'load the chapter of the initialized mobi file',
    {
      chapterId: z.string(),
    },
    ({ chapterId }: { chapterId: string }) => {
      try {
        const mobi = getMobiFile()
        const chapter = mobi?.loadChapter(chapterId)
        if (!chapter) {
          return {
            content: [{
              type: 'text',
              text: `Chapter ${chapterId} not found`,
            }],
          }
        }
        const { css, html } = chapter
        return {
          content: [
            ...css.map(item => ({
              type: 'resource' as const,
              resource: {
                text: readFileSync(item.href, 'utf-8'),
                uri: item.href,
                mimeType: 'text/css',
              },
            })),
            {
              type: 'text' as const,
              text: html,
            },
          ],
        }
      }
      catch (e) {
        return {
          content: [{
            type: 'text',
            text: `Error loading chapter ${chapterId}: ${e}`,
          }],
        }
      }
    },
  )
}
