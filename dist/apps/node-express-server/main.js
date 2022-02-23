/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/node-express-server/src/app/controllers/authController.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// an auth service
exports.auth = function (req, res) {
    const fs = __webpack_require__("fs");
    // "root" directory:
    console.log(process.cwd());
    // check payload for password
    // if incorrect
    // res.sendStatus(401)
    // else
    fs.readFile('./secrets/topSecret2.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(`{"token":"` + data + `"}`);
    });
};


/***/ }),

/***/ "./apps/node-express-server/src/app/controllers/nasaController.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// a service that fetches weather data from mars
exports.nasaFetch = function (req, res) {
    const https = __webpack_require__("https");
    const options = {
        hostname: 'api.nasa.gov',
        path: '/DONKI/CME?start_date=2021-08-01&end_date=2021-08-01&api_key=3GHkYstXAVVX0LNoNMVibp2gh1guVXKduRxlDdtd',
        method: 'GET'
    };
    const req2 = https.request(options, res2 => {
        console.log(`statusCode: ${res.statusCode}`);
        res2.setEncoding('utf8');
        let output = '';
        res2.on('data', d => {
            output += d;
        });
        res2.on('end', () => {
            let obj = JSON.parse(output);
            res.send(obj);
        });
    });
    req2.on('error', error => {
        console.error(error);
    });
    req2.end();
};


/***/ }),

/***/ "./apps/node-express-server/src/app/utility/utility.js":
/***/ ((module) => {

// Authentication Middle Wear:
function requireLogin(req, res, next) {
    req.get("Authorization") === "PASSWORD123" ? next() : res.sendStatus(401);
}
module.exports = { requireLogin };


/***/ }),

/***/ "cors":
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "fs":
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "https":
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const express = __webpack_require__("express");
const cors = __webpack_require__("cors");
const utility = __webpack_require__("./apps/node-express-server/src/app/utility/utility.js");
const nasa_controller = __webpack_require__("./apps/node-express-server/src/app/controllers/nasaController.js");
const auth_controller = __webpack_require__("./apps/node-express-server/src/app/controllers/authController.js");
const app = express();
const port = 3000;
app.use(cors());
app.get('/bingo', (req, res) => {
    res.send('{"content":"Hello to one and all in the BINGO world!"}');
});
app.get('/', (req, res) => {
    res.send('{"content":" : ) "}');
});
app.get('/nasa', utility.requireLogin, nasa_controller.nasaFetch);
app.get('/auth', auth_controller.auth);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.on('error', console.error);

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map