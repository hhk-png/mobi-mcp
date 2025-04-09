import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { addGetCoverImageTool } from './getCoverImage'
import { addGetFileInfoTool } from './getFileInfo'
import { addGetMetadataTool } from './getMetadata'
import { addGetSpineTool } from './getSpine'
import { addGetTocTool } from './getToc'
import { addLoadChapterTool } from './loadChapter'
import { addResetOrInitMobiTool } from './resetOrInitMobi'
import { addResolveHrefTool } from './resolveHref'

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
