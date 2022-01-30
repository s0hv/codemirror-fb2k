# CodeMirror 6 foobar2000 query and formatting language support

Basic support for foobar2000 query and formatting language. 
This should cover the most prominent features of the language. 
If something is missing open an [issue](issues). 

### Known problems
Support for unquoted text is wonky at best due to its ambiguity. 
This might cause some values to be recognized as text when they should not be.
Only characters that match this regex are counted as unquoted text 
if no other match is made `[%&*-Za-z]`.
