/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";


module.metadata = {
  "stability": "experimental"
};

let { registerTool } = require("dev/tool");
let { scratch } = require("./scratch");

let evaluate = scratch({})

registerTool({
  id: "addon-pad",
  icon: "./icon.png",
  url: "./index.html",
  label: "Addon pad",
  tooltip: "Addon authoring tool",
  onRequest: function(data) {
    evaluate(data.code)
    //console.log(JSON.stringify(data.code))
  }
})
