"use strict";

var Editor = require("codemirror-embed")
var style = require("codemirror-embed/theme").style
var jsmode = require("codemirror/mode/javascript/javascript")
var htmlmode = require("codemirror/mode/htmlmixed/htmlmixed")
var cssmode = require("codemirror/mode/css/css")

//var solarized = require("codemirror-embed/theme/solarized.css.js")
var baseStyle = require("codemirror-embed/theme/codemirror.css.js")

//var matchbrackets = require("codemirror/addon/edit/matchbrackets")

style(document, baseStyle)
//style(document, solarized)

function send(data) {
  var event = document.createEvent("CustomEvent")
  event.initCustomEvent("request", false, true, data)
  window.dispatchEvent(event)
}

var editor = Editor(document.body, {
  matchBrackets: true,
  electricChars: true,
  autofocus: true,
  //theme: "solarized dark",
  value: "// Addon pad\n",
  lineNumbers: true,
  mode: "javascript",
  onChange: function(editor, change) {
    send({ change: change, code: editor.getValue() })
  },
  extraKeys: {
    "Tab": function indent(editor) {
      if (!editor.getOption("indentWithTabs")) {
        var size = editor.getOption("indentUnit")
        var indentation = Array(size + 1).join(" ")
        editor.replaceSelection(indentation, "end")
      }
    }
  }
})

global.editor = editor
module.exports = editor
