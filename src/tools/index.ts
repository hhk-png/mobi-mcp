import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { addResetOrInitMobiTool } from './resetOrInitMobi'
import { addGetFileInfoTool } from './getFileInfo'
import { addGetSpineTool } from './getSpine'
import { addGetMetadataTool } from './getMetadata'
import { addResolveHrefTool } from './resolveHref'
import { addGetCoverImageTool } from './getCoverImage'
import { addGetTocTool } from './getToc'
import { addLoadChapterTool } from './loadChapter'

export function addTools(server: McpServer) {
  addResetOrInitMobiTool(server)
  addGetSpineTool(server)
  addGetTocTool(server)
  addLoadChapterTool(server)
  addGetCoverImageTool(server)
  addGetFileInfoTool(server)
  addGetMetadataTool(server)
  addResolveHrefTool(server)
}
