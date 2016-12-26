"use strict";

var lwip2 = require("../lib");

lwip2.open("foo", function (err) {
    console.log(err);
    // In case the lwip package was not installed or failed to be compiled.
    // =>
    // { [Error: Failed to load lwip. Use GraphicsMagick instead.]
    //   reason: { [Error: Cannot find module 'lwip'] code: 'MODULE_NOT_FOUND' },
    //   code: 'CANNOT_LOAD_LWIP' }
});