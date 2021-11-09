#!/usr/bin/env node

"use strict";

const gmInstalled = require("gm-installed")
    , childProcess = require("child_process")
    ;

if (gmInstalled()) {
    console.log("Detected GraphicsMagick. Using it. :)");
    process.exit(0);
}

console.log("Installing lwip. If this fails, just install GraphicsMagick (http://www.graphicsmagick.org/).");
let npmCmd = /^win/.test(process.platform) ? "npm.cmd" : "npm";
let proc = childProcess.spawn(npmCmd, ["i", "lwip@2.1.2"], { cwd: `${__dirname}/..` });

proc.stdout.pipe(process.stdout);
proc.stderr.pipe(process.stderr);

proc.on("close", code => {
    if (code) {
        console.log("It seems like lwip failed to be intalled. Please check the errors.");
        process.exit(code);
    }
});
