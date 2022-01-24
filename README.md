# CodeMirror 6 foobar2000 query and formatting language support

Basic support for foobar2000 query and formatting language. 
This should cover the most prominent features of the language. 
If something is missing open an [issue](issues). 

### Known problems
Support for unquoted text is wonky at best due to its ambiguity. 
For example in the text `test text1` the 1 would be highlighted as a number
rather than being highlighted as a string.
