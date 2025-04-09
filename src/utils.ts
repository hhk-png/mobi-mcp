import type { MobiToc } from '@lingo-reader/mobi-parser'

export function flatToc(toc: MobiToc): MobiToc {
  const flat: MobiToc = []
  function flatten(toc: MobiToc) {
    toc.forEach((item) => {
      flat.push(item)
      if (item.children) {
        flatten(item.children)
      }
    })
  }
  flatten(toc)
  return flat
}
