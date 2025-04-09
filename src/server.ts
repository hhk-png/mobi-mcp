import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { addTools } from './tools/index'
import { destroyMobiFile } from './mobi'
// import { addResources } from './resources'

// Create an MCP server
const mcpServer = new McpServer({
  name: 'Read content from mobi file.',
  version: '0.0.2',
})

mcpServer.close = async () => {
  destroyMobiFile()
}

// Add tools to the server
addTools(mcpServer)
// Add resources to the server
// addResources(mcpServer)

export default mcpServer
