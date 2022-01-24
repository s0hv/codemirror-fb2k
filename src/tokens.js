import {ExternalTokenizer} from "@lezer/lr"
import {
  newline as newlineToken, eof, newlineEmpty
} from "./parser.terms.js"

const newline = 10, carriageReturn = 13, space = 32, tab = 9, hash = 35

// Taken from https://github.com/lezer-parser/python/blob/main/src/tokens.js
export const newlines = new ExternalTokenizer((input, stack) => {
  if (input.next < 0) {
    input.acceptToken(eof)
  } else if (input.next !== newline && input.next !== carriageReturn) {
  } else if (stack.context.depth < 0) {
  } else {
    input.advance()
    let spaces = 0
    while (input.next === space || input.next === tab) { input.advance(); spaces++ }
    let empty = input.next === newline || input.next === carriageReturn || input.next === hash
    input.acceptToken(empty ? newlineEmpty : newlineToken, -spaces)
  }
}, {contextual: true, fallback: true})
