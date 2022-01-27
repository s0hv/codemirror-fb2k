import {parser} from "./foobar2000.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@codemirror/highlight"

export const Foobar2000QueryLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        ParenthesizedExpression: delimitedIndent({closing: ")", align: false})
      }),
      foldNodeProp.add({
        ParenthesizedExpression: foldInside
      }),
      styleTags({
        MetadataField: t.variableName,
        String: t.string,
        Comparator: t.compareOperator,
        BinaryToken: t.operatorKeyword,
        Number: t.number,
        Function: t.function(t.variableName),
        "( )": t.paren,
        "[ ]": t.squareBracket,
        "NOT": t.operatorKeyword,
        Comment: t.lineComment,
        PlainText: t.string
      })
    ]
  }),
  languageData: {
    closeBrackets: {
      brackets: ['(', '[', '%', '"']
    },
    commentTokens: {
      line: '//'
    }
  }
})

export function Foobar2000Query() {
  return new LanguageSupport(Foobar2000QueryLanguage)
}
