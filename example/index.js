"use strict";

const lwip2 = require("../lib");

lwip2.open("foo", err => {
    console.log(err);
    // In case the lwip package failed to be compiled
    // =>
    // { [Error: Failed to load lwip.]
    //   reason: { [Error: Cannot find module 'lwip'] code: 'MODULE_NOT_FOUND' },
    //   code: 'CANNOT_LOAD_LWIP' }
});
