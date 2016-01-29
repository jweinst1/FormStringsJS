#FormStringsJS

A simple addon for Node to make easy Template Strings in JavaScript.

##Installation

To Install FormStringsJS, simply type in your shell:

`npm install formstringsjs`

##Usage

To use the package, you have to require it, then use the FormString() function to transform your strings.

This function takes two arguments, the first, is the string you wish to format. The second, is a JavaScript object that contains the
mappings of keys to values that will be replaced in your format string. Here is an example:

You have the string `"I love {fruit} so much."`, and you can format that string with the object `{"fruit":"apples"}`.

The result will be `"I love apples so much."`. Please note though, you cannot have multiple bracket names in the same string, or else an error will be returned.