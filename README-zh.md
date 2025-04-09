本项目是一个mobi文件相关的mcp，提供了读取mobi文件内容的 mcp tool：

### tools:

#### **reset or init mobi（initMobiFile）**

**参数：**

- `filePath`: 文件在文件系统中的绝对路径

**返回值**：

- void

#### **get spine-（get spine）**

#### **get table of contents-（getToc）**

#### **load chapter-（loadChapter）**

#### get cover image-（getCoverImage）

#### **get file info-（getFileInfo）**

#### **get metadata-（getMetadata）**

#### resolve href-（resolveHref）

以上各tool的详细解释可以查看：[https://github.com/hhk-png/lingo-reader/blob/main/README-zh.md](https://github.com/hhk-png/lingo-reader/blob/main/README-zh.md) 和 [https://github.com/hhk-png/lingo-reader/blob/main/packages/mobi-parser/README-zh.md](https://github.com/hhk-png/lingo-reader/blob/main/packages/mobi-parser/README-zh.md)，本mcp只是简单的调用了一下 `@lingo-reader/mobi-parser` 的api。
