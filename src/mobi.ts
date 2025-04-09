import { Mobi } from "@lingo-reader/mobi-parser";

let mobi: Mobi | undefined

export function getMobiFile() {
  return mobi
}

export function setMobiFile(file: Mobi) {
  mobi = file
}

export function existsMobiFile() {
  return mobi !== undefined
}

export function destroyMobiFile() {
  mobi?.destroy()
  mobi = undefined
}
