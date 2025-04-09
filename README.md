<h2 style="text-align:center"><a href="./README-zh.md">中文文档</a></h2>

This project is an MCP related to mobi files, providing an MCP tool for reading mobi file contents.

## Tools:

### **reset or init epub（initEpubFile）**

**Parameters：**

- `filePath`:  The absolute path of the file in the file system.

**Returns**：

- void

### **get spine-（get spine）**

### get table of contents-（getToc）

### load chapter-（loadChapter）**

### get cover image-（getCoverImage）

### **get file info-（getFileInfo）**

### **get metadata-（getMetadata）**

### resolve href-（resolveHref）

For detailed explanation of the above tools, please refer to: [https://github.com/hhk-png/lingo-reader/blob/main/README.md](https://github.com/hhk-png/lingo-reader/blob/main/README.md) 和 [https://github.com/hhk-png/lingo-reader/blob/main/packages/mobi-parser/README.md](https://github.com/hhk-png/lingo-reader/blob/main/packages/mobi-parser/README.md). This MCP simply calls the api of `@lingo-reader/mobi-parser`.
