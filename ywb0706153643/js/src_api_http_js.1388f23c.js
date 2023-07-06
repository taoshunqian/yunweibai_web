(self["webpackChunkyunweibao_ad"] = self["webpackChunkyunweibao_ad"] || []).push([["src_api_http_js"],{

/***/ "./node_modules/_@protobufjs_aspromise@1.1.2@@protobufjs/aspromise/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_@protobufjs_aspromise@1.1.2@@protobufjs/aspromise/index.js ***!
  \**********************************************************************************/
/***/ (function(module) {

"use strict";


module.exports = asPromise;
/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */

function asPromise(fn, ctx
/*, varargs */
) {
  var params = new Array(arguments.length - 1),
      offset = 0,
      index = 2,
      pending = true;

  while (index < arguments.length) params[offset++] = arguments[index++];

  return new Promise(function executor(resolve, reject) {
    params[offset] = function callback(err
    /*, varargs */
    ) {
      if (pending) {
        pending = false;
        if (err) reject(err);else {
          var params = new Array(arguments.length - 1),
              offset = 0;

          while (offset < params.length) params[offset++] = arguments[offset];

          resolve.apply(null, params);
        }
      }
    };

    try {
      fn.apply(ctx || null, params);
    } catch (err) {
      if (pending) {
        pending = false;
        reject(err);
      }
    }
  });
}

/***/ }),

/***/ "./node_modules/_@protobufjs_base64@1.1.2@@protobufjs/base64/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_@protobufjs_base64@1.1.2@@protobufjs/base64/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

var base64 = exports;
/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */

base64.length = function length(string) {
  var p = string.length;
  if (!p) return 0;
  var n = 0;

  while (--p % 4 > 1 && string.charAt(p) === "=") ++n;

  return Math.ceil(string.length * 3) / 4 - n;
}; // Base64 encoding table


var b64 = new Array(64); // Base64 decoding table

var s64 = new Array(123); // 65..90, 97..122, 48..57, 43, 47

for (var i = 0; i < 64;) s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */


base64.encode = function encode(buffer, start, end) {
  var parts = null,
      chunk = [];
  var i = 0,
      // output index
  j = 0,
      // goto index
  t; // temporary

  while (start < end) {
    var b = buffer[start++];

    switch (j) {
      case 0:
        chunk[i++] = b64[b >> 2];
        t = (b & 3) << 4;
        j = 1;
        break;

      case 1:
        chunk[i++] = b64[t | b >> 4];
        t = (b & 15) << 2;
        j = 2;
        break;

      case 2:
        chunk[i++] = b64[t | b >> 6];
        chunk[i++] = b64[b & 63];
        j = 0;
        break;
    }

    if (i > 8191) {
      (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
      i = 0;
    }
  }

  if (j) {
    chunk[i++] = b64[t];
    chunk[i++] = 61;
    if (j === 1) chunk[i++] = 61;
  }

  if (parts) {
    if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
    return parts.join("");
  }

  return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";
/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */

base64.decode = function decode(string, buffer, offset) {
  var start = offset;
  var j = 0,
      // goto index
  t; // temporary

  for (var i = 0; i < string.length;) {
    var c = string.charCodeAt(i++);
    if (c === 61 && j > 1) break;
    if ((c = s64[c]) === undefined) throw Error(invalidEncoding);

    switch (j) {
      case 0:
        t = c;
        j = 1;
        break;

      case 1:
        buffer[offset++] = t << 2 | (c & 48) >> 4;
        t = c;
        j = 2;
        break;

      case 2:
        buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
        t = c;
        j = 3;
        break;

      case 3:
        buffer[offset++] = (t & 3) << 6 | c;
        j = 0;
        break;
    }
  }

  if (j === 1) throw Error(invalidEncoding);
  return offset - start;
};
/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */


base64.test = function test(string) {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};

/***/ }),

/***/ "./node_modules/_@protobufjs_codegen@2.0.4@@protobufjs/codegen/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_@protobufjs_codegen@2.0.4@@protobufjs/codegen/index.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = codegen;
/**
 * Begins generating a function.
 * @memberof util
 * @param {string[]} functionParams Function parameter names
 * @param {string} [functionName] Function name if not anonymous
 * @returns {Codegen} Appender that appends code to the function's body
 */

function codegen(functionParams, functionName) {
  /* istanbul ignore if */
  if (typeof functionParams === "string") {
    functionName = functionParams;
    functionParams = undefined;
  }

  var body = [];
  /**
   * Appends code to the function's body or finishes generation.
   * @typedef Codegen
   * @type {function}
   * @param {string|Object.<string,*>} [formatStringOrScope] Format string or, to finish the function, an object of additional scope variables, if any
   * @param {...*} [formatParams] Format parameters
   * @returns {Codegen|Function} Itself or the generated function if finished
   * @throws {Error} If format parameter counts do not match
   */

  function Codegen(formatStringOrScope) {
    // note that explicit array handling below makes this ~50% faster
    // finish the function
    if (typeof formatStringOrScope !== "string") {
      var source = toString();
      if (codegen.verbose) console.log("codegen: " + source); // eslint-disable-line no-console

      source = "return " + source;

      if (formatStringOrScope) {
        var scopeKeys = Object.keys(formatStringOrScope),
            scopeParams = new Array(scopeKeys.length + 1),
            scopeValues = new Array(scopeKeys.length),
            scopeOffset = 0;

        while (scopeOffset < scopeKeys.length) {
          scopeParams[scopeOffset] = scopeKeys[scopeOffset];
          scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
        }

        scopeParams[scopeOffset] = source;
        return Function.apply(null, scopeParams).apply(null, scopeValues); // eslint-disable-line no-new-func
      }

      return Function(source)(); // eslint-disable-line no-new-func
    } // otherwise append to body


    var formatParams = new Array(arguments.length - 1),
        formatOffset = 0;

    while (formatOffset < formatParams.length) formatParams[formatOffset] = arguments[++formatOffset];

    formatOffset = 0;
    formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
      var value = formatParams[formatOffset++];

      switch ($1) {
        case "d":
        case "f":
          return String(Number(value));

        case "i":
          return String(Math.floor(value));

        case "j":
          return JSON.stringify(value);

        case "s":
          return String(value);
      }

      return "%";
    });
    if (formatOffset !== formatParams.length) throw Error("parameter count mismatch");
    body.push(formatStringOrScope);
    return Codegen;
  }

  function toString(functionNameOverride) {
    return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
  }

  Codegen.toString = toString;
  return Codegen;
}
/**
 * Begins generating a function.
 * @memberof util
 * @function codegen
 * @param {string} [functionName] Function name if not anonymous
 * @returns {Codegen} Appender that appends code to the function's body
 * @variation 2
 */

/**
 * When set to `true`, codegen will log generated code to console. Useful for debugging.
 * @name util.codegen.verbose
 * @type {boolean}
 */


codegen.verbose = false;

/***/ }),

/***/ "./node_modules/_@protobufjs_eventemitter@1.1.0@@protobufjs/eventemitter/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@protobufjs_eventemitter@1.1.0@@protobufjs/eventemitter/index.js ***!
  \****************************************************************************************/
/***/ (function(module) {

"use strict";


module.exports = EventEmitter;
/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */

function EventEmitter() {
  /**
   * Registered listeners.
   * @type {Object.<string,*>}
   * @private
   */
  this._listeners = {};
}
/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */


EventEmitter.prototype.on = function on(evt, fn, ctx) {
  (this._listeners[evt] || (this._listeners[evt] = [])).push({
    fn: fn,
    ctx: ctx || this
  });
  return this;
};
/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */


EventEmitter.prototype.off = function off(evt, fn) {
  if (evt === undefined) this._listeners = {};else {
    if (fn === undefined) this._listeners[evt] = [];else {
      var listeners = this._listeners[evt];

      for (var i = 0; i < listeners.length;) if (listeners[i].fn === fn) listeners.splice(i, 1);else ++i;
    }
  }
  return this;
};
/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */


EventEmitter.prototype.emit = function emit(evt) {
  var listeners = this._listeners[evt];

  if (listeners) {
    var args = [],
        i = 1;

    for (; i < arguments.length;) args.push(arguments[i++]);

    for (i = 0; i < listeners.length;) listeners[i].fn.apply(listeners[i++].ctx, args);
  }

  return this;
};

/***/ }),

/***/ "./node_modules/_@protobufjs_fetch@1.1.0@@protobufjs/fetch/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_@protobufjs_fetch@1.1.0@@protobufjs/fetch/index.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

module.exports = fetch;

var asPromise = __webpack_require__(/*! @protobufjs/aspromise */ "./node_modules/_@protobufjs_aspromise@1.1.2@@protobufjs/aspromise/index.js"),
    inquire = __webpack_require__(/*! @protobufjs/inquire */ "./node_modules/_@protobufjs_inquire@1.1.0@@protobufjs/inquire/index.js");

var fs = inquire("fs");
/**
 * Node-style callback as used by {@link util.fetch}.
 * @typedef FetchCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {string} [contents] File contents, if there hasn't been an error
 * @returns {undefined}
 */

/**
 * Options as used by {@link util.fetch}.
 * @typedef FetchOptions
 * @type {Object}
 * @property {boolean} [binary=false] Whether expecting a binary response
 * @property {boolean} [xhr=false] If `true`, forces the use of XMLHttpRequest
 */

/**
 * Fetches the contents of a file.
 * @memberof util
 * @param {string} filename File path or url
 * @param {FetchOptions} options Fetch options
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 */

function fetch(filename, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = {};
  } else if (!options) options = {};

  if (!callback) return asPromise(fetch, this, filename, options); // eslint-disable-line no-invalid-this
  // if a node-like filesystem is present, try it first but fall back to XHR if nothing is found.

  if (!options.xhr && fs && fs.readFile) return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
    return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
  }); // use the XHR version otherwise.

  return fetch.xhr(filename, options, callback);
}
/**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */

/**
 * Fetches the contents of a file.
 * @name util.fetch
 * @function
 * @param {string} path File path or url
 * @param {FetchOptions} [options] Fetch options
 * @returns {Promise<string|Uint8Array>} Promise
 * @variation 3
 */

/**/


fetch.xhr = function fetch_xhr(filename, options, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange
  /* works everywhere */
  = function fetchOnReadyStateChange() {
    if (xhr.readyState !== 4) return undefined; // local cors security errors return status 0 / empty string, too. afaik this cannot be
    // reliably distinguished from an actually empty file for security reasons. feel free
    // to send a pull request if you are aware of a solution.

    if (xhr.status !== 0 && xhr.status !== 200) return callback(Error("status " + xhr.status)); // if binary data is expected, make sure that some sort of array is returned, even if
    // ArrayBuffers are not supported. the binary string fallback, however, is unsafe.

    if (options.binary) {
      var buffer = xhr.response;

      if (!buffer) {
        buffer = [];

        for (var i = 0; i < xhr.responseText.length; ++i) buffer.push(xhr.responseText.charCodeAt(i) & 255);
      }

      return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
    }

    return callback(null, xhr.responseText);
  };

  if (options.binary) {
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data#Receiving_binary_data_in_older_browsers
    if ("overrideMimeType" in xhr) xhr.overrideMimeType("text/plain; charset=x-user-defined");
    xhr.responseType = "arraybuffer";
  }

  xhr.open("GET", filename);
  xhr.send();
};

/***/ }),

/***/ "./node_modules/_@protobufjs_float@1.0.2@@protobufjs/float/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_@protobufjs_float@1.0.2@@protobufjs/float/index.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

module.exports = factory(factory);
/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */
// Factory function for the purpose of node-based testing in modified global environments

function factory(exports) {
  // float: typed array
  if (typeof Float32Array !== "undefined") (function () {
    var f32 = new Float32Array([-0]),
        f8b = new Uint8Array(f32.buffer),
        le = f8b[3] === 128;

    function writeFloat_f32_cpy(val, buf, pos) {
      f32[0] = val;
      buf[pos] = f8b[0];
      buf[pos + 1] = f8b[1];
      buf[pos + 2] = f8b[2];
      buf[pos + 3] = f8b[3];
    }

    function writeFloat_f32_rev(val, buf, pos) {
      f32[0] = val;
      buf[pos] = f8b[3];
      buf[pos + 1] = f8b[2];
      buf[pos + 2] = f8b[1];
      buf[pos + 3] = f8b[0];
    }
    /* istanbul ignore next */


    exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
    /* istanbul ignore next */

    exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

    function readFloat_f32_cpy(buf, pos) {
      f8b[0] = buf[pos];
      f8b[1] = buf[pos + 1];
      f8b[2] = buf[pos + 2];
      f8b[3] = buf[pos + 3];
      return f32[0];
    }

    function readFloat_f32_rev(buf, pos) {
      f8b[3] = buf[pos];
      f8b[2] = buf[pos + 1];
      f8b[1] = buf[pos + 2];
      f8b[0] = buf[pos + 3];
      return f32[0];
    }
    /* istanbul ignore next */


    exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
    /* istanbul ignore next */

    exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy; // float: ieee754
  })();else (function () {
    function writeFloat_ieee754(writeUint, val, buf, pos) {
      var sign = val < 0 ? 1 : 0;
      if (sign) val = -val;
      if (val === 0) writeUint(1 / val > 0 ?
      /* positive */
      0 :
      /* negative 0 */
      2147483648, buf, pos);else if (isNaN(val)) writeUint(2143289344, buf, pos);else if (val > 3.4028234663852886e+38) // +-Infinity
        writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);else if (val < 1.1754943508222875e-38) // denormal
        writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);else {
        var exponent = Math.floor(Math.log(val) / Math.LN2),
            mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
        writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
      }
    }

    exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
    exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

    function readFloat_ieee754(readUint, buf, pos) {
      var uint = readUint(buf, pos),
          sign = (uint >> 31) * 2 + 1,
          exponent = uint >>> 23 & 255,
          mantissa = uint & 8388607;
      return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
      ? sign * 1.401298464324817e-45 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
    }

    exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
    exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
  })(); // double: typed array

  if (typeof Float64Array !== "undefined") (function () {
    var f64 = new Float64Array([-0]),
        f8b = new Uint8Array(f64.buffer),
        le = f8b[7] === 128;

    function writeDouble_f64_cpy(val, buf, pos) {
      f64[0] = val;
      buf[pos] = f8b[0];
      buf[pos + 1] = f8b[1];
      buf[pos + 2] = f8b[2];
      buf[pos + 3] = f8b[3];
      buf[pos + 4] = f8b[4];
      buf[pos + 5] = f8b[5];
      buf[pos + 6] = f8b[6];
      buf[pos + 7] = f8b[7];
    }

    function writeDouble_f64_rev(val, buf, pos) {
      f64[0] = val;
      buf[pos] = f8b[7];
      buf[pos + 1] = f8b[6];
      buf[pos + 2] = f8b[5];
      buf[pos + 3] = f8b[4];
      buf[pos + 4] = f8b[3];
      buf[pos + 5] = f8b[2];
      buf[pos + 6] = f8b[1];
      buf[pos + 7] = f8b[0];
    }
    /* istanbul ignore next */


    exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
    /* istanbul ignore next */

    exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

    function readDouble_f64_cpy(buf, pos) {
      f8b[0] = buf[pos];
      f8b[1] = buf[pos + 1];
      f8b[2] = buf[pos + 2];
      f8b[3] = buf[pos + 3];
      f8b[4] = buf[pos + 4];
      f8b[5] = buf[pos + 5];
      f8b[6] = buf[pos + 6];
      f8b[7] = buf[pos + 7];
      return f64[0];
    }

    function readDouble_f64_rev(buf, pos) {
      f8b[7] = buf[pos];
      f8b[6] = buf[pos + 1];
      f8b[5] = buf[pos + 2];
      f8b[4] = buf[pos + 3];
      f8b[3] = buf[pos + 4];
      f8b[2] = buf[pos + 5];
      f8b[1] = buf[pos + 6];
      f8b[0] = buf[pos + 7];
      return f64[0];
    }
    /* istanbul ignore next */


    exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
    /* istanbul ignore next */

    exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy; // double: ieee754
  })();else (function () {
    function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
      var sign = val < 0 ? 1 : 0;
      if (sign) val = -val;

      if (val === 0) {
        writeUint(0, buf, pos + off0);
        writeUint(1 / val > 0 ?
        /* positive */
        0 :
        /* negative 0 */
        2147483648, buf, pos + off1);
      } else if (isNaN(val)) {
        writeUint(0, buf, pos + off0);
        writeUint(2146959360, buf, pos + off1);
      } else if (val > 1.7976931348623157e+308) {
        // +-Infinity
        writeUint(0, buf, pos + off0);
        writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
      } else {
        var mantissa;

        if (val < 2.2250738585072014e-308) {
          // denormal
          mantissa = val / 5e-324;
          writeUint(mantissa >>> 0, buf, pos + off0);
          writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
        } else {
          var exponent = Math.floor(Math.log(val) / Math.LN2);
          if (exponent === 1024) exponent = 1023;
          mantissa = val * Math.pow(2, -exponent);
          writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
          writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
        }
      }
    }

    exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
    exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

    function readDouble_ieee754(readUint, off0, off1, buf, pos) {
      var lo = readUint(buf, pos + off0),
          hi = readUint(buf, pos + off1);
      var sign = (hi >> 31) * 2 + 1,
          exponent = hi >>> 20 & 2047,
          mantissa = 4294967296 * (hi & 1048575) + lo;
      return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
      ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
    }

    exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
    exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
  })();
  return exports;
} // uint helpers


function writeUintLE(val, buf, pos) {
  buf[pos] = val & 255;
  buf[pos + 1] = val >>> 8 & 255;
  buf[pos + 2] = val >>> 16 & 255;
  buf[pos + 3] = val >>> 24;
}

function writeUintBE(val, buf, pos) {
  buf[pos] = val >>> 24;
  buf[pos + 1] = val >>> 16 & 255;
  buf[pos + 2] = val >>> 8 & 255;
  buf[pos + 3] = val & 255;
}

function readUintLE(buf, pos) {
  return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
  return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
}

/***/ }),

/***/ "./node_modules/_@protobufjs_inquire@1.1.0@@protobufjs/inquire/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_@protobufjs_inquire@1.1.0@@protobufjs/inquire/index.js ***!
  \******************************************************************************/
/***/ (function(module) {

"use strict";


module.exports = inquire;
/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */

function inquire(moduleName) {
  try {
    var mod = eval("quire".replace(/^/, "re"))(moduleName); // eslint-disable-line no-eval

    if (mod && (mod.length || Object.keys(mod).length)) return mod;
  } catch (e) {} // eslint-disable-line no-empty


  return null;
}

/***/ }),

/***/ "./node_modules/_@protobufjs_path@1.1.2@@protobufjs/path/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_@protobufjs_path@1.1.2@@protobufjs/path/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

/**
 * A minimal path module to resolve Unix, Windows and URL paths alike.
 * @memberof util
 * @namespace
 */

var path = exports;

var isAbsolute =
/**
 * Tests if the specified path is absolute.
 * @param {string} path Path to test
 * @returns {boolean} `true` if path is absolute
 */
path.isAbsolute = function isAbsolute(path) {
  return /^(?:\/|\w+:)/.test(path);
};

var normalize =
/**
 * Normalizes the specified path.
 * @param {string} path Path to normalize
 * @returns {string} Normalized path
 */
path.normalize = function normalize(path) {
  path = path.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
  var parts = path.split("/"),
      absolute = isAbsolute(path),
      prefix = "";
  if (absolute) prefix = parts.shift() + "/";

  for (var i = 0; i < parts.length;) {
    if (parts[i] === "..") {
      if (i > 0 && parts[i - 1] !== "..") parts.splice(--i, 2);else if (absolute) parts.splice(i, 1);else ++i;
    } else if (parts[i] === ".") parts.splice(i, 1);else ++i;
  }

  return prefix + parts.join("/");
};
/**
 * Resolves the specified include path against the specified origin path.
 * @param {string} originPath Path to the origin file
 * @param {string} includePath Include path relative to origin path
 * @param {boolean} [alreadyNormalized=false] `true` if both paths are already known to be normalized
 * @returns {string} Path to the include file
 */


path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
  if (!alreadyNormalized) includePath = normalize(includePath);
  if (isAbsolute(includePath)) return includePath;
  if (!alreadyNormalized) originPath = normalize(originPath);
  return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
};

/***/ }),

/***/ "./node_modules/_@protobufjs_pool@1.1.0@@protobufjs/pool/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_@protobufjs_pool@1.1.0@@protobufjs/pool/index.js ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";


module.exports = pool;
/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */

function pool(alloc, slice, size) {
  var SIZE = size || 8192;
  var MAX = SIZE >>> 1;
  var slab = null;
  var offset = SIZE;
  return function pool_alloc(size) {
    if (size < 1 || size > MAX) return alloc(size);

    if (offset + size > SIZE) {
      slab = alloc(SIZE);
      offset = 0;
    }

    var buf = slice.call(slab, offset, offset += size);
    if (offset & 7) // align to 32 bit
      offset = (offset | 7) + 1;
    return buf;
  };
}

/***/ }),

/***/ "./node_modules/_@protobufjs_utf8@1.1.0@@protobufjs/utf8/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_@protobufjs_utf8@1.1.0@@protobufjs/utf8/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */

var utf8 = exports;
/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */

utf8.length = function utf8_length(string) {
  var len = 0,
      c = 0;

  for (var i = 0; i < string.length; ++i) {
    c = string.charCodeAt(i);
    if (c < 128) len += 1;else if (c < 2048) len += 2;else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
      ++i;
      len += 4;
    } else len += 3;
  }

  return len;
};
/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */


utf8.read = function utf8_read(buffer, start, end) {
  var len = end - start;
  if (len < 1) return "";
  var parts = null,
      chunk = [],
      i = 0,
      // char offset
  t; // temporary

  while (start < end) {
    t = buffer[start++];
    if (t < 128) chunk[i++] = t;else if (t > 191 && t < 224) chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;else if (t > 239 && t < 365) {
      t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
      chunk[i++] = 0xD800 + (t >> 10);
      chunk[i++] = 0xDC00 + (t & 1023);
    } else chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;

    if (i > 8191) {
      (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
      i = 0;
    }
  }

  if (parts) {
    if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
    return parts.join("");
  }

  return String.fromCharCode.apply(String, chunk.slice(0, i));
};
/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */


utf8.write = function utf8_write(string, buffer, offset) {
  var start = offset,
      c1,
      // character 1
  c2; // character 2

  for (var i = 0; i < string.length; ++i) {
    c1 = string.charCodeAt(i);

    if (c1 < 128) {
      buffer[offset++] = c1;
    } else if (c1 < 2048) {
      buffer[offset++] = c1 >> 6 | 192;
      buffer[offset++] = c1 & 63 | 128;
    } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
      c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
      ++i;
      buffer[offset++] = c1 >> 18 | 240;
      buffer[offset++] = c1 >> 12 & 63 | 128;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    } else {
      buffer[offset++] = c1 >> 12 | 224;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    }
  }

  return offset - start;
};

/***/ }),

/***/ "./node_modules/_pbjs@0.0.14@pbjs/generate.js":
/*!****************************************************!*\
  !*** ./node_modules/_pbjs@0.0.14@pbjs/generate.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function quote(value) {
  return JSON.stringify(value, null, 2);
}

function generate(schema, options) {
  options = options || {};
  let pkg = 'exports';
  const typescript = !!options.typescript;
  const es6 = typescript || !!options.es6;
  const varOrLet = es6 ? 'let' : 'var';
  const prefix = es6 ? '' : pkg + '.';
  const enums = {};
  const lines = [];
  const packableTypes = {
    'bool': true,
    'double': true,
    'fixed32': true,
    'fixed64': true,
    'float': true,
    'int32': true,
    'int64': true,
    'sfixed32': true,
    'sfixed64': true,
    'sint32': true,
    'sint64': true,
    'uint32': true,
    'uint64': true
  };

  function ts(code) {
    return typescript ? ': ' + code : '';
  }

  const TYPE_VAR_INT = 0;
  const TYPE_SIZE_8 = 1;
  const TYPE_SIZE_N = 2;
  const TYPE_SIZE_4 = 5;

  function codeForEnumExport(name) {
    return es6 ? `export const ${name}` : `${pkg}.${name}`;
  }

  for (const def of schema.enums) {
    const prefix = def.name + '_';
    const items = [];
    const encode = [];
    const decode = [];

    for (let key in def.values) {
      const value = def.values[key]; // Protocol buffers made the stupid decision to use C-style enum scoping
      // rules. Attempt to fix this by stripping the "EnumType_" prefix if present.

      if (key.slice(0, prefix.length) === prefix) {
        key = key.slice(prefix.length);
      }

      items.push(`  ${key} = ${quote(key)},`);
      encode.push(`  ${key}: ${value.value},`);
      decode.push(`  ${value.value}: ${typescript ? `${def.name}.${key}` : quote(key)},`);
    }

    if (typescript) {
      lines.push(`export const enum ${def.name} {`);
      lines.push.apply(lines, items);
      lines.push(`}`);
      lines.push(``);
    }

    lines.push(`${codeForEnumExport('encode' + def.name)}${ts(`{ [key: string]: number }`)} = {`);
    lines.push.apply(lines, encode);
    lines.push(`};`);
    lines.push('');
    lines.push(`${codeForEnumExport('decode' + def.name)}${ts(`{ [key: number]: ${def.name} }`)} = {`);
    lines.push.apply(lines, decode);
    lines.push(`};`);
    lines.push('');
    enums[def.name] = true;
    packableTypes[def.name] = true;
  } // Validate the "packed" option once


  for (const def of schema.messages) {
    for (const field of def.fields) {
      if (field.options.packed === 'true' && (!field.repeated || !(field.type in packableTypes))) {
        throw new Error(field.name + ': [packed = true] can only be specified for repeated primitive fields');
      }
    }
  }

  function codeForFunctionExport(name) {
    return es6 ? `export function ${name}` : `${pkg}.${name} = function `;
  }

  const protoToType = {
    bool: 'boolean',
    bytes: 'Uint8Array',
    double: 'number',
    fixed32: 'number',
    float: 'number',
    int32: 'number',
    sfixed32: 'number',
    sint32: 'number',
    uint32: 'number',
    fixed64: 'Long',
    int64: 'Long',
    sfixed64: 'Long',
    sint64: 'Long',
    uint64: 'Long'
  };

  for (const def of schema.messages) {
    if (typescript) {
      lines.push(`export interface ${def.name} {`);

      for (const field of def.fields) {
        let type = protoToType[field.type] || field.type;

        if (field.map !== null) {
          let {
            from,
            to
          } = field.map;
          if (from === 'bool' || from === 'string') from = 'string';else if (protoToType[from] === 'number') from = 'number';else if (protoToType[from] === 'Long') from = 'string';else throw new Error(`The type ${from} cannot be used as a map key`);
          type = `{ [key: ${from}]: ${protoToType[to] || to} }`;
        }

        const required = field.required ? '' : '?';
        const repeated = field.repeated ? '[]' : '';
        lines.push(`  ${field.name}${required}: ${type}${repeated};`);
      }

      lines.push(`}`);
      lines.push(``);
    }

    lines.push(`${codeForFunctionExport('encode' + def.name)}(message${ts(def.name)})${ts('Uint8Array')} {`);
    lines.push(`  ${varOrLet} bb = popByteBuffer();`);
    lines.push(`  _encode${def.name}(message, bb);`);
    lines.push(`  return toUint8Array(bb);`);
    lines.push(`}`);
    lines.push(``);
    lines.push(`function _encode${def.name}(message${ts(def.name)}, bb${ts('ByteBuffer')})${ts('void')} {`);

    function encodeValue(name, buffer, value, nested = 'nested') {
      let type;
      let write;

      switch (name) {
        case 'bool':
          type = TYPE_VAR_INT;
          write = [`writeByte(${buffer}, ${value} ? 1 : 0)`];
          break;

        case 'bytes':
          type = TYPE_SIZE_N;
          write = [`writeVarint32(${buffer}, ${value}.length), writeBytes(${buffer}, ${value})`];
          break;

        case 'double':
          type = TYPE_SIZE_8;
          write = [`writeDouble(${buffer}, ${value})`];
          break;

        case 'fixed32':
          type = TYPE_SIZE_4;
          write = [`writeInt32(${buffer}, ${value})`];
          break;

        case 'fixed64':
          type = TYPE_SIZE_8;
          write = [`writeInt64(${buffer}, ${value})`];
          break;

        case 'float':
          type = TYPE_SIZE_4;
          write = [`writeFloat(${buffer}, ${value})`];
          break;

        case 'int32':
          type = TYPE_VAR_INT;
          write = [`writeVarint64(${buffer}, intToLong(${value}))`];
          break;

        case 'int64':
          type = TYPE_VAR_INT;
          write = [`writeVarint64(${buffer}, ${value})`];
          break;

        case 'sfixed32':
          type = TYPE_SIZE_4;
          write = [`writeInt32(${buffer}, ${value})`];
          break;

        case 'sfixed64':
          type = TYPE_SIZE_8;
          write = [`writeInt64(${buffer}, ${value})`];
          break;

        case 'sint32':
          type = TYPE_VAR_INT;
          write = [`writeVarint32ZigZag(${buffer}, ${value})`];
          break;

        case 'sint64':
          type = TYPE_VAR_INT;
          write = [`writeVarint64ZigZag(${buffer}, ${value})`];
          break;

        case 'uint32':
          type = TYPE_VAR_INT;
          write = [`writeVarint32(${buffer}, ${value})`];
          break;

        case 'uint64':
          type = TYPE_VAR_INT;
          write = [`writeVarint64(${buffer}, ${value})`];
          break;

        case 'string':
          type = TYPE_SIZE_N;
          write = [`writeString(${buffer}, ${value})`];
          break;

        default:
          {
            if (name in enums) {
              type = TYPE_VAR_INT;
              write = [`writeVarint32(${buffer}, ${prefix}encode${name}[${value}])`];
            } else {
              type = TYPE_SIZE_N;
              write = [`${varOrLet} ${nested} = popByteBuffer()`, `_encode${name}(${value}, ${nested})`, `writeVarint32(${buffer}, ${nested}.limit)`, `writeByteBuffer(${buffer}, ${nested})`, `pushByteBuffer(${nested})`];
            }

            break;
          }
      }

      return {
        type,
        write
      };
    }

    for (const field of def.fields) {
      const isPacked = field.repeated && field.options.packed !== 'false' && field.type in packableTypes;
      const modifier = field.repeated ? 'repeated ' : field.required ? 'required ' : 'optional ';
      let humanType = field.type;
      if (field.map !== null) humanType += `<${field.map.from}, ${field.map.to}>`;
      lines.push(`  // ${modifier}${humanType} ${field.name} = ${field.tag};`);

      if (field.repeated || field.map !== null) {
        const collection = `${field.repeated ? 'array' : 'map'}$${field.name}`;
        lines.push(`  ${varOrLet} ${collection} = message.${field.name};`);
        lines.push(`  if (${collection} !== undefined) {`);

        if (field.map !== null) {
          let {
            from,
            to
          } = field.map;
          let keyValue = 'key';
          if (from === 'bool') keyValue = 'key === "true"';else if (protoToType[from] === 'number') keyValue = '+key';else if (protoToType[from] === 'Long') keyValue = 'stringToLong(key)';
          const key = encodeValue(from, 'nested', keyValue, 'nestedKey');
          const value = encodeValue(to, 'nested', 'value', 'nestedValue');
          lines.push(`    for (${varOrLet} key in ${collection}) {`);
          lines.push(`      ${varOrLet} nested = popByteBuffer();`);
          lines.push(`      ${varOrLet} value = ${collection}[key];`);
          lines.push(`      writeVarint32(nested, ${1 << 3 | key.type});`);

          for (const line of key.write) lines.push(`      ${line};`);

          lines.push(`      writeVarint32(nested, ${2 << 3 | value.type});`);

          for (const line of value.write) lines.push(`      ${line};`);

          lines.push(`      writeVarint32(bb, ${field.tag << 3 | TYPE_SIZE_N});`);
          lines.push(`      writeVarint32(bb, nested.offset);`);
          lines.push(`      writeByteBuffer(bb, nested);`);
          lines.push(`      pushByteBuffer(nested);`);
          lines.push(`    }`);
        } else if (isPacked) {
          const {
            write
          } = encodeValue(field.type, 'packed', 'value');
          lines.push(`    ${varOrLet} packed = popByteBuffer();`);

          if (es6) {
            lines.push(`    for (let value of ${collection}) {`);
          } else {
            lines.push(`    for (var i = 0; i < ${collection}.length; i++) {`);
            lines.push(`      var value = ${collection}[i];`);
          }

          for (const line of write) lines.push(`      ${line};`);

          lines.push(`    }`);
          lines.push(`    writeVarint32(bb, ${field.tag << 3 | TYPE_SIZE_N});`);
          lines.push(`    writeVarint32(bb, packed.offset);`);
          lines.push(`    writeByteBuffer(bb, packed);`);
          lines.push(`    pushByteBuffer(packed);`);
        } else {
          const {
            type,
            write
          } = encodeValue(field.type, 'bb', 'value');

          if (es6) {
            lines.push(`    for (let value of ${collection}) {`);
          } else {
            lines.push(`    for (var i = 0; i < ${collection}.length; i++) {`);
            lines.push(`      var value = ${collection}[i];`);
          }

          lines.push(`      writeVarint32(bb, ${field.tag << 3 | type});`);

          for (const line of write) lines.push(`      ${line};`);

          lines.push(`    }`);
        }

        lines.push(`  }`);
        lines.push(``);
      } else {
        const value = `$${field.name}`;
        const {
          type,
          write
        } = encodeValue(field.type, 'bb', value);
        lines.push(`  ${varOrLet} ${value} = message.${field.name};`);
        lines.push(`  if (${value} !== undefined) {`);
        lines.push(`    writeVarint32(bb, ${field.tag << 3 | type});`);

        for (const line of write) lines.push(`    ${line};`);

        lines.push(`  }`);
        lines.push(``);
      }
    }

    if (def.fields.length > 0) {
      lines.pop();
    }

    lines.push(es6 ? '}' : '};');
    lines.push(``);
    lines.push(`${codeForFunctionExport('decode' + def.name)}(binary${ts('Uint8Array')})${ts(def.name)} {`);
    lines.push(`  return _decode${def.name}(wrapByteBuffer(binary));`);
    lines.push(`}`);
    lines.push(``);
    lines.push(`function _decode${def.name}(bb${ts('ByteBuffer')})${ts(def.name)} {`);
    lines.push(`  ${varOrLet} message${ts(def.name)} = {}${typescript ? ' as any' : ''};`);
    lines.push(``);
    lines.push(`  end_of_message: while (!isAtEnd(bb)) {`);
    lines.push(`    ${varOrLet} tag = readVarint32(bb);`);
    lines.push(``);
    lines.push(`    switch (tag >>> 3) {`);
    lines.push(`      case 0:`);
    lines.push(`        break end_of_message;`);
    lines.push(``);

    function decodeValue(name, limit = 'limit') {
      let read;
      let before = null;
      let after = null;

      switch (name) {
        case 'bool':
          read = `!!readByte(bb)`;
          break;

        case 'bytes':
          read = `readBytes(bb, readVarint32(bb))`;
          break;

        case 'double':
          read = `readDouble(bb)`;
          break;

        case 'fixed32':
          read = `readInt32(bb) >>> 0`;
          break;

        case 'fixed64':
          read = `readInt64(bb, /* unsigned */ true)`;
          break;

        case 'float':
          read = `readFloat(bb)`;
          break;

        case 'int32':
          read = `readVarint32(bb)`;
          break;

        case 'int64':
          read = `readVarint64(bb, /* unsigned */ false)`;
          break;

        case 'sfixed32':
          read = `readInt32(bb)`;
          break;

        case 'sfixed64':
          read = `readInt64(bb, /* unsigned */ false)`;
          break;

        case 'sint32':
          read = `readVarint32ZigZag(bb)`;
          break;

        case 'sint64':
          read = `readVarint64ZigZag(bb)`;
          break;

        case 'string':
          read = `readString(bb, readVarint32(bb))`;
          break;

        case 'uint32':
          read = `readVarint32(bb) >>> 0`;
          break;

        case 'uint64':
          read = `readVarint64(bb, /* unsigned */ true)`;
          break;

        default:
          {
            if (name in enums) {
              read = `${prefix}decode${name}[readVarint32(bb)]`;
            } else {
              before = `${varOrLet} ${limit} = pushTemporaryLength(bb)`;
              read = `_decode${name}(bb)`;
              after = `bb.limit = ${limit}`;
            }

            break;
          }
      }

      return {
        read,
        before,
        after
      };
    }

    for (const field of def.fields) {
      const modifier = field.repeated ? 'repeated ' : field.required ? 'required ' : 'optional ';
      let humanType = field.type;
      if (field.map !== null) humanType += `<${field.map.from}, ${field.map.to}>`;
      lines.push(`      // ${modifier}${humanType} ${field.name} = ${field.tag};`);
      lines.push(`      case ${field.tag}: {`);

      if (field.map !== null) {
        const {
          from,
          to
        } = field.map;
        const key = decodeValue(from, 'keyLimit');
        const value = decodeValue(to, 'valueLimit');
        lines.push(`        ${varOrLet} values = message.${field.name} || (message.${field.name} = {});`);
        lines.push(`        ${varOrLet} outerLimit = pushTemporaryLength(bb);`);
        lines.push(`        ${varOrLet} key${ts(`${protoToType[from] || from} | undefined`)};`);
        lines.push(`        ${varOrLet} value${ts(`${protoToType[to] || to} | undefined`)};`);
        lines.push(`        end_of_entry: while (!isAtEnd(bb)) {`);
        lines.push(`          ${varOrLet} tag = readVarint32(bb);`);
        lines.push(`          switch (tag >>> 3) {`);
        lines.push(`            case 0:`);
        lines.push(`              break end_of_entry;`);
        lines.push(`            case 1: {`);
        if (key.before) lines.push(`              ${key.before};`);
        lines.push(`              key = ${key.read};`);
        if (key.after) lines.push(`              ${key.after};`);
        lines.push(`              break;`);
        lines.push(`            }`);
        lines.push(`            case 2: {`);
        if (value.before) lines.push(`              ${value.before};`);
        lines.push(`              value = ${value.read};`);
        if (value.after) lines.push(`              ${value.after};`);
        lines.push(`              break;`);
        lines.push(`            }`);
        lines.push(`            default:`);
        lines.push(`              skipUnknownField(bb, tag & 7);`);
        lines.push(`          }`);
        lines.push(`        }`);
        lines.push(`        if (key === undefined || value === undefined)`);
        lines.push(`          throw new Error(${quote(`Invalid data for map: ${field.name}`)});`);
        if (from === 'bool') lines.push(`        values[key + ''] = value;`);else if (protoToType[from] === 'Long') lines.push(`        values[longToString(key)] = value;`);else lines.push(`        values[key] = value;`);
        lines.push(`        bb.limit = outerLimit;`);
      } else if (field.repeated) {
        const {
          read,
          before,
          after
        } = decodeValue(field.type);
        if (before) lines.push(`        ${before};`);
        lines.push(`        ${varOrLet} values = message.${field.name} || (message.${field.name} = []);`); // Support both packed and unpacked encodings for primitive types

        if (field.type in packableTypes) {
          lines.push(`        if ((tag & 7) === ${TYPE_SIZE_N}) {`);
          lines.push(`          ${varOrLet} outerLimit = pushTemporaryLength(bb);`);
          lines.push(`          while (!isAtEnd(bb)) {`);
          lines.push(`            values.push(${read});`);
          if (after) lines.push(`            ${after};`);
          lines.push(`          }`);
          lines.push(`          bb.limit = outerLimit;`);
          lines.push(`        } else {`);
          lines.push(`          values.push(${read});`);
          if (after) lines.push(`          ${after};`);
          lines.push(`        }`);
        } else {
          lines.push(`        values.push(${read});`);
          if (after) lines.push(`        ${after};`);
        }
      } else {
        const {
          read,
          before,
          after
        } = decodeValue(field.type);
        if (before) lines.push(`        ${before};`);
        lines.push(`        message.${field.name} = ${read};`);
        if (after) lines.push(`        ${after};`);
      }

      lines.push(`        break;`);
      lines.push(`      }`);
      lines.push(``);
    }

    lines.push(`      default:`);
    lines.push(`        skipUnknownField(bb, tag & 7);`);
    lines.push(`    }`);
    lines.push(`  }`);
    lines.push(``);

    for (const field of def.fields) {
      if (field.required) {
        lines.push(`  if (message.${field.name} === undefined)`);
        lines.push(`    throw new Error(${quote(`Missing required field: ${field.name}`)});`);
        lines.push(``);
      }
    }

    lines.push(`  return message;`);
    lines.push(es6 ? '}' : '};');
    lines.push(``);
  }

  if (typescript) {
    lines.push(`export interface Long {`);
    lines.push(`  low: number;`);
    lines.push(`  high: number;`);
    lines.push(`  unsigned: boolean;`);
    lines.push(`}`);
    lines.push(``);
    lines.push(`interface ByteBuffer {`);
    lines.push(`  bytes: Uint8Array;`);
    lines.push(`  offset: number;`);
    lines.push(`  limit: number;`);
    lines.push(`}`);
    lines.push(``);
  }

  lines.push(`function pushTemporaryLength(bb${ts('ByteBuffer')})${ts('number')} {`);
  lines.push(`  ${varOrLet} length = readVarint32(bb);`);
  lines.push(`  ${varOrLet} limit = bb.limit;`);
  lines.push(`  bb.limit = bb.offset + length;`);
  lines.push(`  return limit;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function skipUnknownField(bb${ts('ByteBuffer')}, type${ts('number')})${ts('void')} {`);
  lines.push(`  switch (type) {`);
  lines.push(`    case ${TYPE_VAR_INT}: while (readByte(bb) & 0x80) { } break;`);
  lines.push(`    case ${TYPE_SIZE_N}: skip(bb, readVarint32(bb)); break;`);
  lines.push(`    case ${TYPE_SIZE_4}: skip(bb, 4); break;`);
  lines.push(`    case ${TYPE_SIZE_8}: skip(bb, 8); break;`);
  lines.push(`    default: throw new Error("Unimplemented type: " + type);`);
  lines.push(`  }`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function stringToLong(value${ts('string')})${ts('Long')} {`);
  lines.push(`  return {`);
  lines.push(`    low: value.charCodeAt(0) | (value.charCodeAt(1) << 16),`);
  lines.push(`    high: value.charCodeAt(2) | (value.charCodeAt(3) << 16),`);
  lines.push(`    unsigned: false,`);
  lines.push(`  };`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function longToString(value${ts('Long')})${ts('string')} {`);
  lines.push(`  ${varOrLet} low = value.low;`);
  lines.push(`  ${varOrLet} high = value.high;`);
  lines.push(`  return String.fromCharCode(`);
  lines.push(`    low & 0xFFFF,`);
  lines.push(`    low >>> 16,`);
  lines.push(`    high & 0xFFFF,`);
  lines.push(`    high >>> 16);`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`// The code below was modified from https://github.com/protobufjs/bytebuffer.js`);
  lines.push(`// which is under the Apache License 2.0.`);
  lines.push(``);
  lines.push(`${varOrLet} f32 = new Float32Array(1);`);
  lines.push(`${varOrLet} f32_u8 = new Uint8Array(f32.buffer);`);
  lines.push(``);
  lines.push(`${varOrLet} f64 = new Float64Array(1);`);
  lines.push(`${varOrLet} f64_u8 = new Uint8Array(f64.buffer);`);
  lines.push(``);
  lines.push(`function intToLong(value${ts('number')})${ts('Long')} {`);
  lines.push(`  value |= 0;`);
  lines.push(`  return {`);
  lines.push(`    low: value,`);
  lines.push(`    high: value >> 31,`);
  lines.push(`    unsigned: value >= 0,`);
  lines.push(`  };`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`${varOrLet} bbStack${ts('ByteBuffer[]')} = [];`);
  lines.push(``);
  lines.push(`function popByteBuffer()${ts('ByteBuffer')} {`);
  lines.push(`  const bb = bbStack.pop();`);
  lines.push(`  if (!bb) return { bytes: new Uint8Array(64), offset: 0, limit: 0 };`);
  lines.push(`  bb.offset = bb.limit = 0;`);
  lines.push(`  return bb;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function pushByteBuffer(bb${ts('ByteBuffer')})${ts('void')} {`);
  lines.push(`  bbStack.push(bb);`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function wrapByteBuffer(bytes${typescript ? ': Uint8Array' : ''})${ts('ByteBuffer')} {`);
  lines.push(`  return { bytes, offset: 0, limit: bytes.length };`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function toUint8Array(bb${ts('ByteBuffer')})${ts('Uint8Array')} {`);
  lines.push(`  ${varOrLet} bytes = bb.bytes;`);
  lines.push(`  ${varOrLet} limit = bb.limit;`);
  lines.push(`  return bytes.length === limit ? bytes : bytes.subarray(0, limit);`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function skip(bb${ts('ByteBuffer')}, offset${ts('number')})${ts('void')} {`);
  lines.push(`  if (bb.offset + offset > bb.limit) {`);
  lines.push(`    throw new Error('Skip past limit');`);
  lines.push(`  }`);
  lines.push(`  bb.offset += offset;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function isAtEnd(bb${ts('ByteBuffer')})${ts('boolean')} {`);
  lines.push(`  return bb.offset >= bb.limit;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function grow(bb${ts('ByteBuffer')}, count${ts('number')})${ts('number')} {`);
  lines.push(`  ${varOrLet} bytes = bb.bytes;`);
  lines.push(`  ${varOrLet} offset = bb.offset;`);
  lines.push(`  ${varOrLet} limit = bb.limit;`);
  lines.push(`  ${varOrLet} finalOffset = offset + count;`);
  lines.push(`  if (finalOffset > bytes.length) {`);
  lines.push(`    ${varOrLet} newBytes = new Uint8Array(finalOffset * 2);`);
  lines.push(`    newBytes.set(bytes);`);
  lines.push(`    bb.bytes = newBytes;`);
  lines.push(`  }`);
  lines.push(`  bb.offset = finalOffset;`);
  lines.push(`  if (finalOffset > limit) {`);
  lines.push(`    bb.limit = finalOffset;`);
  lines.push(`  }`);
  lines.push(`  return offset;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function advance(bb${ts('ByteBuffer')}, count${ts('number')})${ts('number')} {`);
  lines.push(`  ${varOrLet} offset = bb.offset;`);
  lines.push(`  if (offset + count > bb.limit) {`);
  lines.push(`    throw new Error('Read past limit');`);
  lines.push(`  }`);
  lines.push(`  bb.offset += count;`);
  lines.push(`  return offset;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function readBytes(bb${ts('ByteBuffer')}, count${ts('number')})${ts('Uint8Array')} {`);
  lines.push(`  ${varOrLet} offset = advance(bb, count);`);
  lines.push(`  return bb.bytes.subarray(offset, offset + count);`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeBytes(bb${ts('ByteBuffer')}, buffer${ts('Uint8Array')})${ts('void')} {`);
  lines.push(`  ${varOrLet} offset = grow(bb, buffer.length);`);
  lines.push(`  bb.bytes.set(buffer, offset);`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function readString(bb${ts('ByteBuffer')}, count${ts('number')})${ts('string')} {`);
  lines.push(`  // Sadly a hand-coded UTF8 decoder is much faster than subarray+TextDecoder in V8`);
  lines.push(`  ${varOrLet} offset = advance(bb, count);`);
  lines.push(`  ${varOrLet} fromCharCode = String.fromCharCode;`);
  lines.push(`  ${varOrLet} bytes = bb.bytes;`);
  lines.push(`  ${varOrLet} invalid = '\\uFFFD';`);
  lines.push(`  ${varOrLet} text = '';`);
  lines.push(``);
  lines.push(`  for (${varOrLet} i = 0; i < count; i++) {`);
  lines.push(`    ${varOrLet} c1 = bytes[i + offset], c2${ts('number')}, c3${ts('number')}, c4${ts('number')}, c${ts('number')};`);
  lines.push(``);
  lines.push(`    // 1 byte`);
  lines.push(`    if ((c1 & 0x80) === 0) {`);
  lines.push(`      text += fromCharCode(c1);`);
  lines.push(`    }`);
  lines.push(``);
  lines.push(`    // 2 bytes`);
  lines.push(`    else if ((c1 & 0xE0) === 0xC0) {`);
  lines.push(`      if (i + 1 >= count) text += invalid;`);
  lines.push(`      else {`);
  lines.push(`        c2 = bytes[i + offset + 1];`);
  lines.push(`        if ((c2 & 0xC0) !== 0x80) text += invalid;`);
  lines.push(`        else {`);
  lines.push(`          c = ((c1 & 0x1F) << 6) | (c2 & 0x3F);`);
  lines.push(`          if (c < 0x80) text += invalid;`);
  lines.push(`          else {`);
  lines.push(`            text += fromCharCode(c);`);
  lines.push(`            i++;`);
  lines.push(`          }`);
  lines.push(`        }`);
  lines.push(`      }`);
  lines.push(`    }`);
  lines.push(``);
  lines.push(`    // 3 bytes`);
  lines.push(`    else if ((c1 & 0xF0) == 0xE0) {`);
  lines.push(`      if (i + 2 >= count) text += invalid;`);
  lines.push(`      else {`);
  lines.push(`        c2 = bytes[i + offset + 1];`);
  lines.push(`        c3 = bytes[i + offset + 2];`);
  lines.push(`        if (((c2 | (c3 << 8)) & 0xC0C0) !== 0x8080) text += invalid;`);
  lines.push(`        else {`);
  lines.push(`          c = ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);`);
  lines.push(`          if (c < 0x0800 || (c >= 0xD800 && c <= 0xDFFF)) text += invalid;`);
  lines.push(`          else {`);
  lines.push(`            text += fromCharCode(c);`);
  lines.push(`            i += 2;`);
  lines.push(`          }`);
  lines.push(`        }`);
  lines.push(`      }`);
  lines.push(`    }`);
  lines.push(``);
  lines.push(`    // 4 bytes`);
  lines.push(`    else if ((c1 & 0xF8) == 0xF0) {`);
  lines.push(`      if (i + 3 >= count) text += invalid;`);
  lines.push(`      else {`);
  lines.push(`        c2 = bytes[i + offset + 1];`);
  lines.push(`        c3 = bytes[i + offset + 2];`);
  lines.push(`        c4 = bytes[i + offset + 3];`);
  lines.push(`        if (((c2 | (c3 << 8) | (c4 << 16)) & 0xC0C0C0) !== 0x808080) text += invalid;`);
  lines.push(`        else {`);
  lines.push(`          c = ((c1 & 0x07) << 0x12) | ((c2 & 0x3F) << 0x0C) | ((c3 & 0x3F) << 0x06) | (c4 & 0x3F);`);
  lines.push(`          if (c < 0x10000 || c > 0x10FFFF) text += invalid;`);
  lines.push(`          else {`);
  lines.push(`            c -= 0x10000;`);
  lines.push(`            text += fromCharCode((c >> 10) + 0xD800, (c & 0x3FF) + 0xDC00);`);
  lines.push(`            i += 3;`);
  lines.push(`          }`);
  lines.push(`        }`);
  lines.push(`      }`);
  lines.push(`    }`);
  lines.push(``);
  lines.push(`    else text += invalid;`);
  lines.push(`  }`);
  lines.push(``);
  lines.push(`  return text;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeString(bb${ts('ByteBuffer')}, text${ts('string')})${ts('void')} {`);
  lines.push(`  // Sadly a hand-coded UTF8 encoder is much faster than TextEncoder+set in V8`);
  lines.push(`  ${varOrLet} n = text.length;`);
  lines.push(`  ${varOrLet} byteCount = 0;`);
  lines.push(``);
  lines.push(`  // Write the byte count first`);
  lines.push(`  for (${varOrLet} i = 0; i < n; i++) {`);
  lines.push(`    ${varOrLet} c = text.charCodeAt(i);`);
  lines.push(`    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {`);
  lines.push(`      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;`);
  lines.push(`    }`);
  lines.push(`    byteCount += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;`);
  lines.push(`  }`);
  lines.push(`  writeVarint32(bb, byteCount);`);
  lines.push(``);
  lines.push(`  ${varOrLet} offset = grow(bb, byteCount);`);
  lines.push(`  ${varOrLet} bytes = bb.bytes;`);
  lines.push(``);
  lines.push(`  // Then write the bytes`);
  lines.push(`  for (${varOrLet} i = 0; i < n; i++) {`);
  lines.push(`    ${varOrLet} c = text.charCodeAt(i);`);
  lines.push(`    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {`);
  lines.push(`      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;`);
  lines.push(`    }`);
  lines.push(`    if (c < 0x80) {`);
  lines.push(`      bytes[offset++] = c;`);
  lines.push(`    } else {`);
  lines.push(`      if (c < 0x800) {`);
  lines.push(`        bytes[offset++] = ((c >> 6) & 0x1F) | 0xC0;`);
  lines.push(`      } else {`);
  lines.push(`        if (c < 0x10000) {`);
  lines.push(`          bytes[offset++] = ((c >> 12) & 0x0F) | 0xE0;`);
  lines.push(`        } else {`);
  lines.push(`          bytes[offset++] = ((c >> 18) & 0x07) | 0xF0;`);
  lines.push(`          bytes[offset++] = ((c >> 12) & 0x3F) | 0x80;`);
  lines.push(`        }`);
  lines.push(`        bytes[offset++] = ((c >> 6) & 0x3F) | 0x80;`);
  lines.push(`      }`);
  lines.push(`      bytes[offset++] = (c & 0x3F) | 0x80;`);
  lines.push(`    }`);
  lines.push(`  }`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeByteBuffer(bb${ts('ByteBuffer')}, buffer${ts('ByteBuffer')})${ts('void')} {`);
  lines.push(`  ${varOrLet} offset = grow(bb, buffer.limit);`);
  lines.push(`  ${varOrLet} from = bb.bytes;`);
  lines.push(`  ${varOrLet} to = buffer.bytes;`);
  lines.push(``);
  lines.push(`  // This for loop is much faster than subarray+set on V8`);
  lines.push(`  for (${varOrLet} i = 0, n = buffer.limit; i < n; i++) {`);
  lines.push(`    from[i + offset] = to[i];`);
  lines.push(`  }`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function readByte(bb${ts('ByteBuffer')})${ts('number')} {`);
  lines.push(`  return bb.bytes[advance(bb, 1)];`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeByte(bb${ts('ByteBuffer')}, value${ts('number')})${ts('void')} {`);
  lines.push(`  ${varOrLet} offset = grow(bb, 1);`);
  lines.push(`  bb.bytes[offset] = value;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function readFloat(bb${ts('ByteBuffer')})${ts('number')} {`);
  lines.push(`  ${varOrLet} offset = advance(bb, 4);`);
  lines.push(`  ${varOrLet} bytes = bb.bytes;`);
  lines.push(``);
  lines.push(`  // Manual copying is much faster than subarray+set in V8`);
  lines.push(`  f32_u8[0] = bytes[offset++];`);
  lines.push(`  f32_u8[1] = bytes[offset++];`);
  lines.push(`  f32_u8[2] = bytes[offset++];`);
  lines.push(`  f32_u8[3] = bytes[offset++];`);
  lines.push(`  return f32[0];`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeFloat(bb${ts('ByteBuffer')}, value${ts('number')})${ts('void')} {`);
  lines.push(`  ${varOrLet} offset = grow(bb, 4);`);
  lines.push(`  ${varOrLet} bytes = bb.bytes;`);
  lines.push(`  f32[0] = value;`);
  lines.push(``);
  lines.push(`  // Manual copying is much faster than subarray+set in V8`);
  lines.push(`  bytes[offset++] = f32_u8[0];`);
  lines.push(`  bytes[offset++] = f32_u8[1];`);
  lines.push(`  bytes[offset++] = f32_u8[2];`);
  lines.push(`  bytes[offset++] = f32_u8[3];`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function readDouble(bb${ts('ByteBuffer')})${ts('number')} {`);
  lines.push(`  ${varOrLet} offset = advance(bb, 8);`);
  lines.push(`  ${varOrLet} bytes = bb.bytes;`);
  lines.push(``);
  lines.push(`  // Manual copying is much faster than subarray+set in V8`);
  lines.push(`  f64_u8[0] = bytes[offset++];`);
  lines.push(`  f64_u8[1] = bytes[offset++];`);
  lines.push(`  f64_u8[2] = bytes[offset++];`);
  lines.push(`  f64_u8[3] = bytes[offset++];`);
  lines.push(`  f64_u8[4] = bytes[offset++];`);
  lines.push(`  f64_u8[5] = bytes[offset++];`);
  lines.push(`  f64_u8[6] = bytes[offset++];`);
  lines.push(`  f64_u8[7] = bytes[offset++];`);
  lines.push(`  return f64[0];`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeDouble(bb${ts('ByteBuffer')}, value${ts('number')})${ts('void')} {`);
  lines.push(`  ${varOrLet} offset = grow(bb, 8);`);
  lines.push(`  ${varOrLet} bytes = bb.bytes;`);
  lines.push(`  f64[0] = value;`);
  lines.push(``);
  lines.push(`  // Manual copying is much faster than subarray+set in V8`);
  lines.push(`  bytes[offset++] = f64_u8[0];`);
  lines.push(`  bytes[offset++] = f64_u8[1];`);
  lines.push(`  bytes[offset++] = f64_u8[2];`);
  lines.push(`  bytes[offset++] = f64_u8[3];`);
  lines.push(`  bytes[offset++] = f64_u8[4];`);
  lines.push(`  bytes[offset++] = f64_u8[5];`);
  lines.push(`  bytes[offset++] = f64_u8[6];`);
  lines.push(`  bytes[offset++] = f64_u8[7];`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function readInt32(bb${ts('ByteBuffer')})${ts('number')} {`);
  lines.push(`  ${varOrLet} offset = advance(bb, 4);`);
  lines.push(`  ${varOrLet} bytes = bb.bytes;`);
  lines.push(`  return (`);
  lines.push(`    bytes[offset] |`);
  lines.push(`    (bytes[offset + 1] << 8) |`);
  lines.push(`    (bytes[offset + 2] << 16) |`);
  lines.push(`    (bytes[offset + 3] << 24)`);
  lines.push(`  );`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeInt32(bb${ts('ByteBuffer')}, value${ts('number')})${ts('void')} {`);
  lines.push(`  ${varOrLet} offset = grow(bb, 4);`);
  lines.push(`  ${varOrLet} bytes = bb.bytes;`);
  lines.push(`  bytes[offset] = value;`);
  lines.push(`  bytes[offset + 1] = value >> 8;`);
  lines.push(`  bytes[offset + 2] = value >> 16;`);
  lines.push(`  bytes[offset + 3] = value >> 24;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function readInt64(bb${ts('ByteBuffer')}, unsigned${ts('boolean')})${ts('Long')} {`);
  lines.push(`  return {`);
  lines.push(`    low: readInt32(bb),`);
  lines.push(`    high: readInt32(bb),`);
  lines.push(`    unsigned,`);
  lines.push(`  };`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeInt64(bb${ts('ByteBuffer')}, value${ts('Long')})${ts('void')} {`);
  lines.push(`  writeInt32(bb, value.low);`);
  lines.push(`  writeInt32(bb, value.high);`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function readVarint32(bb${ts('ByteBuffer')})${ts('number')} {`);
  lines.push(`  ${varOrLet} c = 0;`);
  lines.push(`  ${varOrLet} value = 0;`);
  lines.push(`  ${varOrLet} b${ts('number')};`);
  lines.push(`  do {`);
  lines.push(`    b = readByte(bb);`);
  lines.push(`    if (c < 32) value |= (b & 0x7F) << c;`);
  lines.push(`    c += 7;`);
  lines.push(`  } while (b & 0x80);`);
  lines.push(`  return value;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeVarint32(bb${ts('ByteBuffer')}, value${ts('number')})${ts('void')} {`);
  lines.push(`  value >>>= 0;`);
  lines.push(`  while (value >= 0x80) {`);
  lines.push(`    writeByte(bb, (value & 0x7f) | 0x80);`);
  lines.push(`    value >>>= 7;`);
  lines.push(`  }`);
  lines.push(`  writeByte(bb, value);`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function readVarint64(bb${ts('ByteBuffer')}, unsigned${ts('boolean')})${ts('Long')} {`);
  lines.push(`  ${varOrLet} part0 = 0;`);
  lines.push(`  ${varOrLet} part1 = 0;`);
  lines.push(`  ${varOrLet} part2 = 0;`);
  lines.push(`  ${varOrLet} b${ts('number')};`);
  lines.push(``);
  lines.push(`  b = readByte(bb); part0 = (b & 0x7F); if (b & 0x80) {`);
  lines.push(`    b = readByte(bb); part0 |= (b & 0x7F) << 7; if (b & 0x80) {`);
  lines.push(`      b = readByte(bb); part0 |= (b & 0x7F) << 14; if (b & 0x80) {`);
  lines.push(`        b = readByte(bb); part0 |= (b & 0x7F) << 21; if (b & 0x80) {`);
  lines.push(``);
  lines.push(`          b = readByte(bb); part1 = (b & 0x7F); if (b & 0x80) {`);
  lines.push(`            b = readByte(bb); part1 |= (b & 0x7F) << 7; if (b & 0x80) {`);
  lines.push(`              b = readByte(bb); part1 |= (b & 0x7F) << 14; if (b & 0x80) {`);
  lines.push(`                b = readByte(bb); part1 |= (b & 0x7F) << 21; if (b & 0x80) {`);
  lines.push(``);
  lines.push(`                  b = readByte(bb); part2 = (b & 0x7F); if (b & 0x80) {`);
  lines.push(`                    b = readByte(bb); part2 |= (b & 0x7F) << 7;`);
  lines.push(`                  }`);
  lines.push(`                }`);
  lines.push(`              }`);
  lines.push(`            }`);
  lines.push(`          }`);
  lines.push(`        }`);
  lines.push(`      }`);
  lines.push(`    }`);
  lines.push(`  }`);
  lines.push(``);
  lines.push(`  return {`);
  lines.push(`    low: part0 | (part1 << 28),`);
  lines.push(`    high: (part1 >>> 4) | (part2 << 24),`);
  lines.push(`    unsigned,`);
  lines.push(`  };`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeVarint64(bb${ts('ByteBuffer')}, value${ts('Long')})${ts('void')} {`);
  lines.push(`  ${varOrLet} part0 = value.low >>> 0;`);
  lines.push(`  ${varOrLet} part1 = ((value.low >>> 28) | (value.high << 4)) >>> 0;`);
  lines.push(`  ${varOrLet} part2 = value.high >>> 24;`);
  lines.push(``);
  lines.push(`  // ref: src/google/protobuf/io/coded_stream.cc`);
  lines.push(`  ${varOrLet} size =`);
  lines.push(`    part2 === 0 ?`);
  lines.push(`      part1 === 0 ?`);
  lines.push(`        part0 < 1 << 14 ?`);
  lines.push(`          part0 < 1 << 7 ? 1 : 2 :`);
  lines.push(`          part0 < 1 << 21 ? 3 : 4 :`);
  lines.push(`        part1 < 1 << 14 ?`);
  lines.push(`          part1 < 1 << 7 ? 5 : 6 :`);
  lines.push(`          part1 < 1 << 21 ? 7 : 8 :`);
  lines.push(`      part2 < 1 << 7 ? 9 : 10;`);
  lines.push(``);
  lines.push(`  ${varOrLet} offset = grow(bb, size);`);
  lines.push(`  ${varOrLet} bytes = bb.bytes;`);
  lines.push(``);
  lines.push(`  switch (size) {`);
  lines.push(`    case 10: bytes[offset + 9] = (part2 >>> 7) & 0x01;`);
  lines.push(`    case 9: bytes[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;`);
  lines.push(`    case 8: bytes[offset + 7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;`);
  lines.push(`    case 7: bytes[offset + 6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;`);
  lines.push(`    case 6: bytes[offset + 5] = size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F;`);
  lines.push(`    case 5: bytes[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;`);
  lines.push(`    case 4: bytes[offset + 3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;`);
  lines.push(`    case 3: bytes[offset + 2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;`);
  lines.push(`    case 2: bytes[offset + 1] = size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F;`);
  lines.push(`    case 1: bytes[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;`);
  lines.push(`  }`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function readVarint32ZigZag(bb${ts('ByteBuffer')})${ts('number')} {`);
  lines.push(`  ${varOrLet} value = readVarint32(bb);`);
  lines.push(``);
  lines.push(`  // ref: src/google/protobuf/wire_format_lite.h`);
  lines.push(`  return (value >>> 1) ^ -(value & 1);`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeVarint32ZigZag(bb${ts('ByteBuffer')}, value${ts('number')})${ts('void')} {`);
  lines.push(`  // ref: src/google/protobuf/wire_format_lite.h`);
  lines.push(`  writeVarint32(bb, (value << 1) ^ (value >> 31));`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function readVarint64ZigZag(bb${ts('ByteBuffer')})${ts('Long')} {`);
  lines.push(`  ${varOrLet} value = readVarint64(bb, /* unsigned */ false);`);
  lines.push(`  ${varOrLet} low = value.low;`);
  lines.push(`  ${varOrLet} high = value.high;`);
  lines.push(`  ${varOrLet} flip = -(low & 1);`);
  lines.push(``);
  lines.push(`  // ref: src/google/protobuf/wire_format_lite.h`);
  lines.push(`  return {`);
  lines.push(`    low: ((low >>> 1) | (high << 31)) ^ flip,`);
  lines.push(`    high: (high >>> 1) ^ flip,`);
  lines.push(`    unsigned: false,`);
  lines.push(`  };`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`function writeVarint64ZigZag(bb${ts('ByteBuffer')}, value${ts('Long')})${ts('void')} {`);
  lines.push(`  ${varOrLet} low = value.low;`);
  lines.push(`  ${varOrLet} high = value.high;`);
  lines.push(`  ${varOrLet} flip = high >> 31;`);
  lines.push(``);
  lines.push(`  // ref: src/google/protobuf/wire_format_lite.h`);
  lines.push(`  writeVarint64(bb, {`);
  lines.push(`    low: (low << 1) ^ flip,`);
  lines.push(`    high: ((high << 1) | (low >>> 31)) ^ flip,`);
  lines.push(`    unsigned: false,`);
  lines.push(`  });`);
  lines.push(`}`);
  lines.push(``);
  return lines.join('\n');
}

exports.generate = generate;

/***/ }),

/***/ "./node_modules/_pbjs@0.0.14@pbjs/index.js":
/*!*************************************************!*\
  !*** ./node_modules/_pbjs@0.0.14@pbjs/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const parser = __webpack_require__(/*! protocol-buffers-schema */ "./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/index.js");

const generate_1 = __webpack_require__(/*! ./generate */ "./node_modules/_pbjs@0.0.14@pbjs/generate.js");

function parseSchema(contents) {
  const schema = parser.parse(contents);
  return {
    compile() {
      const result = {};
      new Function('exports', generate_1.generate(schema))(result);
      return result;
    },

    toJavaScript({
      es6
    } = {}) {
      return generate_1.generate(schema, {
        es6
      });
    },

    toTypeScript() {
      return generate_1.generate(schema, {
        typescript: true
      });
    }

  };
}

exports.parseSchema = parseSchema;
;

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/light.js":
/*!************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/light.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// light library entry point.


module.exports = __webpack_require__(/*! ./src/index-light */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/index-light.js");

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/converter.js":
/*!********************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/converter.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Runtime message from/to plain object converters.
 * @namespace
 */

var converter = exports;

var Enum = __webpack_require__(/*! ./enum */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/enum.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");
/**
 * Generates a partial value fromObject conveter.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} prop Property reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */


function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
  var defaultAlreadyEmitted = false;
  /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */

  if (field.resolvedType) {
    if (field.resolvedType instanceof Enum) {
      gen("switch(d%s){", prop);

      for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
        // enum unknown values passthrough
        if (values[keys[i]] === field.typeDefault && !defaultAlreadyEmitted) {
          gen("default:")("if(typeof(d%s)===\"number\"){m%s=d%s;break}", prop, prop, prop);
          if (!field.repeated) gen // fallback to default value only for
          // arrays, to avoid leaving holes.
          ("break"); // for non-repeated fields, just ignore

          defaultAlreadyEmitted = true;
        }

        gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
      }

      gen("}");
    } else gen("if(typeof d%s!==\"object\")", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
  } else {
    var isUnsigned = false;

    switch (field.type) {
      case "double":
      case "float":
        gen("m%s=Number(d%s)", prop, prop); // also catches "NaN", "Infinity"

        break;

      case "uint32":
      case "fixed32":
        gen("m%s=d%s>>>0", prop, prop);
        break;

      case "int32":
      case "sint32":
      case "sfixed32":
        gen("m%s=d%s|0", prop, prop);
        break;

      case "uint64":
        isUnsigned = true;
      // eslint-disable-line no-fallthrough

      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)("else if(typeof d%s===\"string\")", prop)("m%s=parseInt(d%s,10)", prop, prop)("else if(typeof d%s===\"number\")", prop)("m%s=d%s", prop, prop)("else if(typeof d%s===\"object\")", prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
        break;

      case "bytes":
        gen("if(typeof d%s===\"string\")", prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length >= 0)", prop)("m%s=d%s", prop, prop);
        break;

      case "string":
        gen("m%s=String(d%s)", prop, prop);
        break;

      case "bool":
        gen("m%s=Boolean(d%s)", prop, prop);
        break;

      /* default: gen
          ("m%s=d%s", prop, prop);
          break; */
    }
  }

  return gen;
  /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}
/**
 * Generates a plain object to runtime message converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */


converter.fromObject = function fromObject(mtype) {
  /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
  var fields = mtype.fieldsArray;
  var gen = util.codegen(["d"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
  if (!fields.length) return gen("return new this.ctor");
  gen("var m=new this.ctor");

  for (var i = 0; i < fields.length; ++i) {
    var field = fields[i].resolve(),
        prop = util.safeProp(field.name); // Map fields

    if (field.map) {
      gen("if(d%s){", prop)("if(typeof d%s!==\"object\")", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
      genValuePartial_fromObject(gen, field,
      /* not sorted */
      i, prop + "[ks[i]]")("}")("}"); // Repeated fields
    } else if (field.repeated) {
      gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
      genValuePartial_fromObject(gen, field,
      /* not sorted */
      i, prop + "[i]")("}")("}"); // Non-repeated fields
    } else {
      if (!(field.resolvedType instanceof Enum)) gen // no need to test for null/undefined if an enum (uses switch)
      ("if(d%s!=null){", prop); // !== undefined && !== null

      genValuePartial_fromObject(gen, field,
      /* not sorted */
      i, prop);
      if (!(field.resolvedType instanceof Enum)) gen("}");
    }
  }

  return gen("return m");
  /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};
/**
 * Generates a partial value toObject converter.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} prop Property reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */


function genValuePartial_toObject(gen, field, fieldIndex, prop) {
  /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
  if (field.resolvedType) {
    if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", prop, fieldIndex, prop, prop, fieldIndex, prop, prop);else gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
  } else {
    var isUnsigned = false;

    switch (field.type) {
      case "double":
      case "float":
        gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
        break;

      case "uint64":
        isUnsigned = true;
      // eslint-disable-line no-fallthrough

      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        gen("if(typeof m%s===\"number\")", prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else") // Long-like
        ("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
        break;

      case "bytes":
        gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
        break;

      default:
        gen("d%s=m%s", prop, prop);
        break;
    }
  }

  return gen;
  /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}
/**
 * Generates a runtime message to plain object converter specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */


converter.toObject = function toObject(mtype) {
  /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
  var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
  if (!fields.length) return util.codegen()("return {}");
  var gen = util.codegen(["m", "o"], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
  var repeatedFields = [],
      mapFields = [],
      normalFields = [],
      i = 0;

  for (; i < fields.length; ++i) if (!fields[i].partOf) (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);

  if (repeatedFields.length) {
    gen("if(o.arrays||o.defaults){");

    for (i = 0; i < repeatedFields.length; ++i) gen("d%s=[]", util.safeProp(repeatedFields[i].name));

    gen("}");
  }

  if (mapFields.length) {
    gen("if(o.objects||o.defaults){");

    for (i = 0; i < mapFields.length; ++i) gen("d%s={}", util.safeProp(mapFields[i].name));

    gen("}");
  }

  if (normalFields.length) {
    gen("if(o.defaults){");

    for (i = 0; i < normalFields.length; ++i) {
      var field = normalFields[i],
          prop = util.safeProp(field.name);
      if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);else if (field.long) gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field.typeDefault.toString(), field.typeDefault.toNumber());else if (field.bytes) {
        var arrayDefault = "[" + Array.prototype.slice.call(field.typeDefault).join(",") + "]";
        gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
      } else gen("d%s=%j", prop, field.typeDefault); // also messages (=null)
    }

    gen("}");
  }

  var hasKs2 = false;

  for (i = 0; i < fields.length; ++i) {
    var field = fields[i],
        index = mtype._fieldsArray.indexOf(field),
        prop = util.safeProp(field.name);

    if (field.map) {
      if (!hasKs2) {
        hasKs2 = true;
        gen("var ks2");
      }

      gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
      genValuePartial_toObject(gen, field,
      /* sorted */
      index, prop + "[ks2[j]]")("}");
    } else if (field.repeated) {
      gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
      genValuePartial_toObject(gen, field,
      /* sorted */
      index, prop + "[j]")("}");
    } else {
      gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field.name); // !== undefined && !== null

      genValuePartial_toObject(gen, field,
      /* sorted */
      index, prop);
      if (field.partOf) gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
    }

    gen("}");
  }

  return gen("return d");
  /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/decoder.js":
/*!******************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/decoder.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = decoder;

var Enum = __webpack_require__(/*! ./enum */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/enum.js"),
    types = __webpack_require__(/*! ./types */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/types.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");

function missing(field) {
  return "missing required '" + field.name + "'";
}
/**
 * Generates a decoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */


function decoder(mtype) {
  /* eslint-disable no-unexpected-multiline */
  var gen = util.codegen(["r", "l"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function (field) {
    return field.map;
  }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
  if (mtype.group) gen("if((t&7)===4)")("break");
  gen("switch(t>>>3){");
  var i = 0;

  for (; i <
  /* initializes */
  mtype.fieldsArray.length; ++i) {
    var field = mtype._fieldsArray[i].resolve(),
        type = field.resolvedType instanceof Enum ? "int32" : field.type,
        ref = "m" + util.safeProp(field.name);

    gen("case %i: {", field.id); // Map fields

    if (field.map) {
      gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
      if (types.defaults[field.keyType] !== undefined) gen("k=%j", types.defaults[field.keyType]);else gen("k=null");
      if (types.defaults[type] !== undefined) gen("value=%j", types.defaults[type]);else gen("value=null");
      gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
      if (types.basic[type] === undefined) gen("value=types[%i].decode(r,r.uint32())", i); // can't be groups
      else gen("value=r.%s()", type);
      gen("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
      if (types.long[field.keyType] !== undefined) gen("%s[typeof k===\"object\"?util.longToHash(k):k]=value", ref);else gen("%s[k]=value", ref); // Repeated fields
    } else if (field.repeated) {
      gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref); // Packable (always check for forward and backward compatiblity)

      if (types.packed[type] !== undefined) gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else"); // Non-packed

      if (types.basic[type] === undefined) gen(field.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);else gen("%s.push(r.%s())", ref, type); // Non-repeated
    } else if (types.basic[type] === undefined) gen(field.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", ref, i);else gen("%s=r.%s()", ref, type);

    gen("break")("}"); // Unknown fields
  }

  gen("default:")("r.skipType(t&7)")("break")("}")("}"); // Field presence

  for (i = 0; i < mtype._fieldsArray.length; ++i) {
    var rfield = mtype._fieldsArray[i];
    if (rfield.required) gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
  }

  return gen("return m");
  /* eslint-enable no-unexpected-multiline */
}

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/encoder.js":
/*!******************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/encoder.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = encoder;

var Enum = __webpack_require__(/*! ./enum */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/enum.js"),
    types = __webpack_require__(/*! ./types */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/types.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");
/**
 * Generates a partial message type encoder.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */


function genTypePartial(gen, field, fieldIndex, ref) {
  return field.resolvedType.group ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
}
/**
 * Generates an encoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */


function encoder(mtype) {
  /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
  var gen = util.codegen(["m", "w"], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
  var i, ref; // "when a message is serialized its known fields should be written sequentially by field number"

  var fields =
  /* initializes */
  mtype.fieldsArray.slice().sort(util.compareFieldsById);

  for (var i = 0; i < fields.length; ++i) {
    var field = fields[i].resolve(),
        index = mtype._fieldsArray.indexOf(field),
        type = field.resolvedType instanceof Enum ? "int32" : field.type,
        wireType = types.basic[type];

    ref = "m" + util.safeProp(field.name); // Map fields

    if (field.map) {
      gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name) // !== undefined && !== null
      ("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
      if (wireType === undefined) gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref); // can't be groups
      else gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
      gen("}")("}"); // Repeated fields
    } else if (field.repeated) {
      gen("if(%s!=null&&%s.length){", ref, ref); // !== undefined && !== null
      // Packed repeated

      if (field.packed && types.packed[type] !== undefined) {
        gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()"); // Non-packed
      } else {
        gen("for(var i=0;i<%s.length;++i)", ref);
        if (wireType === undefined) genTypePartial(gen, field, index, ref + "[i]");else gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
      }

      gen("}"); // Non-repeated
    } else {
      if (field.optional) gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name); // !== undefined && !== null

      if (wireType === undefined) genTypePartial(gen, field, index, ref);else gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
    }
  }

  return gen("return w");
  /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/enum.js":
/*!***************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/enum.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = Enum; // extends ReflectionObject

var ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/object.js");

((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";

var Namespace = __webpack_require__(/*! ./namespace */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/namespace.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");
/**
 * Constructs a new enum instance.
 * @classdesc Reflected enum.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {Object.<string,number>} [values] Enum values as an object, by name
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] The comment for this enum
 * @param {Object.<string,string>} [comments] The value comments for this enum
 * @param {Object.<string,Object<string,*>>|undefined} [valuesOptions] The value options for this enum
 */


function Enum(name, values, options, comment, comments, valuesOptions) {
  ReflectionObject.call(this, name, options);
  if (values && typeof values !== "object") throw TypeError("values must be an object");
  /**
   * Enum values by id.
   * @type {Object.<number,string>}
   */

  this.valuesById = {};
  /**
   * Enum values by name.
   * @type {Object.<string,number>}
   */

  this.values = Object.create(this.valuesById); // toJSON, marker

  /**
   * Enum comment text.
   * @type {string|null}
   */

  this.comment = comment;
  /**
   * Value comment texts, if any.
   * @type {Object.<string,string>}
   */

  this.comments = comments || {};
  /**
   * Values options, if any
   * @type {Object<string, Object<string, *>>|undefined}
   */

  this.valuesOptions = valuesOptions;
  /**
   * Reserved ranges, if any.
   * @type {Array.<number[]|string>}
   */

  this.reserved = undefined; // toJSON
  // Note that values inherit valuesById on their prototype which makes them a TypeScript-
  // compatible enum. This is used by pbts to write actual enum definitions that work for
  // static and reflection code alike instead of emitting generic object definitions.

  if (values) for (var keys = Object.keys(values), i = 0; i < keys.length; ++i) if (typeof values[keys[i]] === "number") // use forward entries only
    this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
}
/**
 * Enum descriptor.
 * @interface IEnum
 * @property {Object.<string,number>} values Enum values
 * @property {Object.<string,*>} [options] Enum options
 */

/**
 * Constructs an enum from an enum descriptor.
 * @param {string} name Enum name
 * @param {IEnum} json Enum descriptor
 * @returns {Enum} Created enum
 * @throws {TypeError} If arguments are invalid
 */


Enum.fromJSON = function fromJSON(name, json) {
  var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
  enm.reserved = json.reserved;
  return enm;
};
/**
 * Converts this enum to an enum descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IEnum} Enum descriptor
 */


Enum.prototype.toJSON = function toJSON(toJSONOptions) {
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", keepComments ? this.comment : undefined, "comments", keepComments ? this.comments : undefined]);
};
/**
 * Adds a value to this enum.
 * @param {string} name Value name
 * @param {number} id Value id
 * @param {string} [comment] Comment, if any
 * @param {Object.<string, *>|undefined} [options] Options, if any
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a value with this name or id
 */


Enum.prototype.add = function add(name, id, comment, options) {
  // utilized by the parser but not by .fromJSON
  if (!util.isString(name)) throw TypeError("name must be a string");
  if (!util.isInteger(id)) throw TypeError("id must be an integer");
  if (this.values[name] !== undefined) throw Error("duplicate name '" + name + "' in " + this);
  if (this.isReservedId(id)) throw Error("id " + id + " is reserved in " + this);
  if (this.isReservedName(name)) throw Error("name '" + name + "' is reserved in " + this);

  if (this.valuesById[id] !== undefined) {
    if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + id + " in " + this);
    this.values[name] = id;
  } else this.valuesById[this.values[name] = id] = name;

  if (options) {
    if (this.valuesOptions === undefined) this.valuesOptions = {};
    this.valuesOptions[name] = options || null;
  }

  this.comments[name] = comment || null;
  return this;
};
/**
 * Removes a value from this enum
 * @param {string} name Value name
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `name` is not a name of this enum
 */


Enum.prototype.remove = function remove(name) {
  if (!util.isString(name)) throw TypeError("name must be a string");
  var val = this.values[name];
  if (val == null) throw Error("name '" + name + "' does not exist in " + this);
  delete this.valuesById[val];
  delete this.values[name];
  delete this.comments[name];
  if (this.valuesOptions) delete this.valuesOptions[name];
  return this;
};
/**
 * Tests if the specified id is reserved.
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */


Enum.prototype.isReservedId = function isReservedId(id) {
  return Namespace.isReservedId(this.reserved, id);
};
/**
 * Tests if the specified name is reserved.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */


Enum.prototype.isReservedName = function isReservedName(name) {
  return Namespace.isReservedName(this.reserved, name);
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/field.js":
/*!****************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/field.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = Field; // extends ReflectionObject

var ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/object.js");

((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";

var Enum = __webpack_require__(/*! ./enum */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/enum.js"),
    types = __webpack_require__(/*! ./types */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/types.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");

var Type; // cyclic

var ruleRe = /^required|optional|repeated$/;
/**
 * Constructs a new message field instance. Note that {@link MapField|map fields} have their own class.
 * @name Field
 * @classdesc Reflected message field.
 * @extends FieldBase
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 */

/**
 * Constructs a field from a field descriptor.
 * @param {string} name Field name
 * @param {IField} json Field descriptor
 * @returns {Field} Created field
 * @throws {TypeError} If arguments are invalid
 */

Field.fromJSON = function fromJSON(name, json) {
  return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
};
/**
 * Not an actual constructor. Use {@link Field} instead.
 * @classdesc Base class of all reflected message fields. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports FieldBase
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */


function Field(name, id, type, rule, extend, options, comment) {
  if (util.isObject(rule)) {
    comment = extend;
    options = rule;
    rule = extend = undefined;
  } else if (util.isObject(extend)) {
    comment = options;
    options = extend;
    extend = undefined;
  }

  ReflectionObject.call(this, name, options);
  if (!util.isInteger(id) || id < 0) throw TypeError("id must be a non-negative integer");
  if (!util.isString(type)) throw TypeError("type must be a string");
  if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase())) throw TypeError("rule must be a string rule");
  if (extend !== undefined && !util.isString(extend)) throw TypeError("extend must be a string");
  /**
   * Field rule, if any.
   * @type {string|undefined}
   */

  if (rule === "proto3_optional") {
    rule = "optional";
  }

  this.rule = rule && rule !== "optional" ? rule : undefined; // toJSON

  /**
   * Field type.
   * @type {string}
   */

  this.type = type; // toJSON

  /**
   * Unique field id.
   * @type {number}
   */

  this.id = id; // toJSON, marker

  /**
   * Extended type if different from parent.
   * @type {string|undefined}
   */

  this.extend = extend || undefined; // toJSON

  /**
   * Whether this field is required.
   * @type {boolean}
   */

  this.required = rule === "required";
  /**
   * Whether this field is optional.
   * @type {boolean}
   */

  this.optional = !this.required;
  /**
   * Whether this field is repeated.
   * @type {boolean}
   */

  this.repeated = rule === "repeated";
  /**
   * Whether this field is a map or not.
   * @type {boolean}
   */

  this.map = false;
  /**
   * Message this field belongs to.
   * @type {Type|null}
   */

  this.message = null;
  /**
   * OneOf this field belongs to, if any,
   * @type {OneOf|null}
   */

  this.partOf = null;
  /**
   * The field type's default value.
   * @type {*}
   */

  this.typeDefault = null;
  /**
   * The field's default value on prototypes.
   * @type {*}
   */

  this.defaultValue = null;
  /**
   * Whether this field's value should be treated as a long.
   * @type {boolean}
   */

  this.long = util.Long ? types.long[type] !== undefined :
  /* istanbul ignore next */
  false;
  /**
   * Whether this field's value is a buffer.
   * @type {boolean}
   */

  this.bytes = type === "bytes";
  /**
   * Resolved type if not a basic type.
   * @type {Type|Enum|null}
   */

  this.resolvedType = null;
  /**
   * Sister-field within the extended type if a declaring extension field.
   * @type {Field|null}
   */

  this.extensionField = null;
  /**
   * Sister-field within the declaring namespace if an extended field.
   * @type {Field|null}
   */

  this.declaringField = null;
  /**
   * Internally remembers whether this field is packed.
   * @type {boolean|null}
   * @private
   */

  this._packed = null;
  /**
   * Comment for this field.
   * @type {string|null}
   */

  this.comment = comment;
}
/**
 * Determines whether this field is packed. Only relevant when repeated and working with proto2.
 * @name Field#packed
 * @type {boolean}
 * @readonly
 */


Object.defineProperty(Field.prototype, "packed", {
  get: function () {
    // defaults to packed=true if not explicity set to false
    if (this._packed === null) this._packed = this.getOption("packed") !== false;
    return this._packed;
  }
});
/**
 * @override
 */

Field.prototype.setOption = function setOption(name, value, ifNotSet) {
  if (name === "packed") // clear cached before setting
    this._packed = null;
  return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
};
/**
 * Field descriptor.
 * @interface IField
 * @property {string} [rule="optional"] Field rule
 * @property {string} type Field type
 * @property {number} id Field id
 * @property {Object.<string,*>} [options] Field options
 */

/**
 * Extension field descriptor.
 * @interface IExtensionField
 * @extends IField
 * @property {string} extend Extended type
 */

/**
 * Converts this field to a field descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IField} Field descriptor
 */


Field.prototype.toJSON = function toJSON(toJSONOptions) {
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["rule", this.rule !== "optional" && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined]);
};
/**
 * Resolves this field's type references.
 * @returns {Field} `this`
 * @throws {Error} If any reference cannot be resolved
 */


Field.prototype.resolve = function resolve() {
  if (this.resolved) return this;

  if ((this.typeDefault = types.defaults[this.type]) === undefined) {
    // if not a basic type, resolve it
    this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
    if (this.resolvedType instanceof Type) this.typeDefault = null;else // instanceof Enum
      this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]; // first defined
  } else if (this.options && this.options.proto3_optional) {
    // proto3 scalar value marked optional; should default to null
    this.typeDefault = null;
  } // use explicitly set default value if present


  if (this.options && this.options["default"] != null) {
    this.typeDefault = this.options["default"];
    if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string") this.typeDefault = this.resolvedType.values[this.typeDefault];
  } // remove unnecessary options


  if (this.options) {
    if (this.options.packed === true || this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum)) delete this.options.packed;
    if (!Object.keys(this.options).length) this.options = undefined;
  } // convert to internal data type if necesssary


  if (this.long) {
    this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
    /* istanbul ignore else */

    if (Object.freeze) Object.freeze(this.typeDefault); // long instances are meant to be immutable anyway (i.e. use small int cache that even requires it)
  } else if (this.bytes && typeof this.typeDefault === "string") {
    var buf;
    if (util.base64.test(this.typeDefault)) util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);else util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
    this.typeDefault = buf;
  } // take special care of maps and repeated fields


  if (this.map) this.defaultValue = util.emptyObject;else if (this.repeated) this.defaultValue = util.emptyArray;else this.defaultValue = this.typeDefault; // ensure proper value on prototype

  if (this.parent instanceof Type) this.parent.ctor.prototype[this.name] = this.defaultValue;
  return ReflectionObject.prototype.resolve.call(this);
};
/**
 * Decorator function as returned by {@link Field.d} and {@link MapField.d} (TypeScript).
 * @typedef FieldDecorator
 * @type {function}
 * @param {Object} prototype Target prototype
 * @param {string} fieldName Field name
 * @returns {undefined}
 */

/**
 * Field decorator (TypeScript).
 * @name Field.d
 * @function
 * @param {number} fieldId Field id
 * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"string"|"bool"|"bytes"|Object} fieldType Field type
 * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
 * @param {T} [defaultValue] Default value
 * @returns {FieldDecorator} Decorator function
 * @template T extends number | number[] | Long | Long[] | string | string[] | boolean | boolean[] | Uint8Array | Uint8Array[] | Buffer | Buffer[]
 */


Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
  // submessage: decorate the submessage and use its name as the type
  if (typeof fieldType === "function") fieldType = util.decorateType(fieldType).name; // enum reference: create a reflected copy of the enum and keep reuseing it
  else if (fieldType && typeof fieldType === "object") fieldType = util.decorateEnum(fieldType).name;
  return function fieldDecorator(prototype, fieldName) {
    util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, {
      "default": defaultValue
    }));
  };
};
/**
 * Field decorator (TypeScript).
 * @name Field.d
 * @function
 * @param {number} fieldId Field id
 * @param {Constructor<T>|string} fieldType Field type
 * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
 * @returns {FieldDecorator} Decorator function
 * @template T extends Message<T>
 * @variation 2
 */
// like Field.d but without a default value
// Sets up cyclic dependencies (called in index-light)


Field._configure = function configure(Type_) {
  Type = Type_;
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/index-light.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/index-light.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var protobuf = module.exports = __webpack_require__(/*! ./index-minimal */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/index-minimal.js");

protobuf.build = "light";
/**
 * A node-style callback as used by {@link load} and {@link Root#load}.
 * @typedef LoadCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Root} [root] Root, if there hasn't been an error
 * @returns {undefined}
 */

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} root Root namespace, defaults to create a new one if omitted.
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 */

function load(filename, root, callback) {
  if (typeof root === "function") {
    callback = root;
    root = new protobuf.Root();
  } else if (!root) root = new protobuf.Root();

  return root.load(filename, callback);
}
/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 * @variation 2
 */
// function load(filename:string, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and returns a promise.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Promise<Root>} Promise
 * @see {@link Root#load}
 * @variation 3
 */
// function load(filename:string, [root:Root]):Promise<Root>


protobuf.load = load;
/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into a common root namespace (node only).
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 * @see {@link Root#loadSync}
 */

function loadSync(filename, root) {
  if (!root) root = new protobuf.Root();
  return root.loadSync(filename);
}

protobuf.loadSync = loadSync; // Serialization

protobuf.encoder = __webpack_require__(/*! ./encoder */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/encoder.js");
protobuf.decoder = __webpack_require__(/*! ./decoder */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/decoder.js");
protobuf.verifier = __webpack_require__(/*! ./verifier */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/verifier.js");
protobuf.converter = __webpack_require__(/*! ./converter */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/converter.js"); // Reflection

protobuf.ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/object.js");
protobuf.Namespace = __webpack_require__(/*! ./namespace */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/namespace.js");
protobuf.Root = __webpack_require__(/*! ./root */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/root.js");
protobuf.Enum = __webpack_require__(/*! ./enum */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/enum.js");
protobuf.Type = __webpack_require__(/*! ./type */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/type.js");
protobuf.Field = __webpack_require__(/*! ./field */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/field.js");
protobuf.OneOf = __webpack_require__(/*! ./oneof */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/oneof.js");
protobuf.MapField = __webpack_require__(/*! ./mapfield */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/mapfield.js");
protobuf.Service = __webpack_require__(/*! ./service */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/service.js");
protobuf.Method = __webpack_require__(/*! ./method */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/method.js"); // Runtime

protobuf.Message = __webpack_require__(/*! ./message */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/message.js");
protobuf.wrappers = __webpack_require__(/*! ./wrappers */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/wrappers.js"); // Utility

protobuf.types = __webpack_require__(/*! ./types */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/types.js");
protobuf.util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js"); // Set up possibly cyclic reflection dependencies

protobuf.ReflectionObject._configure(protobuf.Root);

protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);

protobuf.Root._configure(protobuf.Type);

protobuf.Field._configure(protobuf.Type);

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/index-minimal.js":
/*!************************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/index-minimal.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var protobuf = exports;
/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */

protobuf.build = "minimal"; // Serialization

protobuf.Writer = __webpack_require__(/*! ./writer */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/writer.js");
protobuf.BufferWriter = __webpack_require__(/*! ./writer_buffer */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/writer_buffer.js");
protobuf.Reader = __webpack_require__(/*! ./reader */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/reader.js");
protobuf.BufferReader = __webpack_require__(/*! ./reader_buffer */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/reader_buffer.js"); // Utility

protobuf.util = __webpack_require__(/*! ./util/minimal */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/minimal.js");
protobuf.rpc = __webpack_require__(/*! ./rpc */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/rpc.js");
protobuf.roots = __webpack_require__(/*! ./roots */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/roots.js");
protobuf.configure = configure;
/* istanbul ignore next */

/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */

function configure() {
  protobuf.util._configure();

  protobuf.Writer._configure(protobuf.BufferWriter);

  protobuf.Reader._configure(protobuf.BufferReader);
} // Set up buffer utility according to the environment


configure();

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/mapfield.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/mapfield.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = MapField; // extends Field

var Field = __webpack_require__(/*! ./field */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/field.js");

((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";

var types = __webpack_require__(/*! ./types */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/types.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");
/**
 * Constructs a new map field instance.
 * @classdesc Reflected map field.
 * @extends FieldBase
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} keyType Key type
 * @param {string} type Value type
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */


function MapField(name, id, keyType, type, options, comment) {
  Field.call(this, name, id, type, undefined, undefined, options, comment);
  /* istanbul ignore if */

  if (!util.isString(keyType)) throw TypeError("keyType must be a string");
  /**
   * Key type.
   * @type {string}
   */

  this.keyType = keyType; // toJSON, marker

  /**
   * Resolved key type if not a basic type.
   * @type {ReflectionObject|null}
   */

  this.resolvedKeyType = null; // Overrides Field#map

  this.map = true;
}
/**
 * Map field descriptor.
 * @interface IMapField
 * @extends {IField}
 * @property {string} keyType Key type
 */

/**
 * Extension map field descriptor.
 * @interface IExtensionMapField
 * @extends IMapField
 * @property {string} extend Extended type
 */

/**
 * Constructs a map field from a map field descriptor.
 * @param {string} name Field name
 * @param {IMapField} json Map field descriptor
 * @returns {MapField} Created map field
 * @throws {TypeError} If arguments are invalid
 */


MapField.fromJSON = function fromJSON(name, json) {
  return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
};
/**
 * Converts this map field to a map field descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IMapField} Map field descriptor
 */


MapField.prototype.toJSON = function toJSON(toJSONOptions) {
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined]);
};
/**
 * @override
 */


MapField.prototype.resolve = function resolve() {
  if (this.resolved) return this; // Besides a value type, map fields have a key type that may be "any scalar type except for floating point types and bytes"

  if (types.mapKey[this.keyType] === undefined) throw Error("invalid key type: " + this.keyType);
  return Field.prototype.resolve.call(this);
};
/**
 * Map field decorator (TypeScript).
 * @name MapField.d
 * @function
 * @param {number} fieldId Field id
 * @param {"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"} fieldKeyType Field key type
 * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"|"bytes"|Object|Constructor<{}>} fieldValueType Field value type
 * @returns {FieldDecorator} Decorator function
 * @template T extends { [key: string]: number | Long | string | boolean | Uint8Array | Buffer | number[] | Message<{}> }
 */


MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
  // submessage value: decorate the submessage and use its name as the type
  if (typeof fieldValueType === "function") fieldValueType = util.decorateType(fieldValueType).name; // enum reference value: create a reflected copy of the enum and keep reuseing it
  else if (fieldValueType && typeof fieldValueType === "object") fieldValueType = util.decorateEnum(fieldValueType).name;
  return function mapFieldDecorator(prototype, fieldName) {
    util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
  };
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/message.js":
/*!******************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/message.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = Message;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/minimal.js");
/**
 * Constructs a new message instance.
 * @classdesc Abstract runtime message.
 * @constructor
 * @param {Properties<T>} [properties] Properties to set
 * @template T extends object = object
 */


function Message(properties) {
  // not used internally
  if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) this[keys[i]] = properties[keys[i]];
}
/**
 * Reference to the reflected type.
 * @name Message.$type
 * @type {Type}
 * @readonly
 */

/**
 * Reference to the reflected type.
 * @name Message#$type
 * @type {Type}
 * @readonly
 */

/*eslint-disable valid-jsdoc*/

/**
 * Creates a new message of this type using the specified properties.
 * @param {Object.<string,*>} [properties] Properties to set
 * @returns {Message<T>} Message instance
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.create = function create(properties) {
  return this.$type.create(properties);
};
/**
 * Encodes a message of this type.
 * @param {T|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.encode = function encode(message, writer) {
  return this.$type.encode(message, writer);
};
/**
 * Encodes a message of this type preceeded by its length as a varint.
 * @param {T|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.encodeDelimited = function encodeDelimited(message, writer) {
  return this.$type.encodeDelimited(message, writer);
};
/**
 * Decodes a message of this type.
 * @name Message.decode
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {T} Decoded message
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.decode = function decode(reader) {
  return this.$type.decode(reader);
};
/**
 * Decodes a message of this type preceeded by its length as a varint.
 * @name Message.decodeDelimited
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {T} Decoded message
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.decodeDelimited = function decodeDelimited(reader) {
  return this.$type.decodeDelimited(reader);
};
/**
 * Verifies a message of this type.
 * @name Message.verify
 * @function
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {string|null} `null` if valid, otherwise the reason why it is not
 */


Message.verify = function verify(message) {
  return this.$type.verify(message);
};
/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object
 * @returns {T} Message instance
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.fromObject = function fromObject(object) {
  return this.$type.fromObject(object);
};
/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {T} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.toObject = function toObject(message, options) {
  return this.$type.toObject(message, options);
};
/**
 * Converts this message to JSON.
 * @returns {Object.<string,*>} JSON object
 */


Message.prototype.toJSON = function toJSON() {
  return this.$type.toObject(this, util.toJSONOptions);
};
/*eslint-enable valid-jsdoc*/

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/method.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/method.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = Method; // extends ReflectionObject

var ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/object.js");

((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";

var util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");
/**
 * Constructs a new service method instance.
 * @classdesc Reflected service method.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Method name
 * @param {string|undefined} type Method type, usually `"rpc"`
 * @param {string} requestType Request message type
 * @param {string} responseType Response message type
 * @param {boolean|Object.<string,*>} [requestStream] Whether the request is streamed
 * @param {boolean|Object.<string,*>} [responseStream] Whether the response is streamed
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] The comment for this method
 * @param {Object.<string,*>} [parsedOptions] Declared options, properly parsed into an object
 */


function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
  /* istanbul ignore next */
  if (util.isObject(requestStream)) {
    options = requestStream;
    requestStream = responseStream = undefined;
  } else if (util.isObject(responseStream)) {
    options = responseStream;
    responseStream = undefined;
  }
  /* istanbul ignore if */


  if (!(type === undefined || util.isString(type))) throw TypeError("type must be a string");
  /* istanbul ignore if */

  if (!util.isString(requestType)) throw TypeError("requestType must be a string");
  /* istanbul ignore if */

  if (!util.isString(responseType)) throw TypeError("responseType must be a string");
  ReflectionObject.call(this, name, options);
  /**
   * Method type.
   * @type {string}
   */

  this.type = type || "rpc"; // toJSON

  /**
   * Request type.
   * @type {string}
   */

  this.requestType = requestType; // toJSON, marker

  /**
   * Whether requests are streamed or not.
   * @type {boolean|undefined}
   */

  this.requestStream = requestStream ? true : undefined; // toJSON

  /**
   * Response type.
   * @type {string}
   */

  this.responseType = responseType; // toJSON

  /**
   * Whether responses are streamed or not.
   * @type {boolean|undefined}
   */

  this.responseStream = responseStream ? true : undefined; // toJSON

  /**
   * Resolved request type.
   * @type {Type|null}
   */

  this.resolvedRequestType = null;
  /**
   * Resolved response type.
   * @type {Type|null}
   */

  this.resolvedResponseType = null;
  /**
   * Comment for this method
   * @type {string|null}
   */

  this.comment = comment;
  /**
   * Options properly parsed into an object
   */

  this.parsedOptions = parsedOptions;
}
/**
 * Method descriptor.
 * @interface IMethod
 * @property {string} [type="rpc"] Method type
 * @property {string} requestType Request type
 * @property {string} responseType Response type
 * @property {boolean} [requestStream=false] Whether requests are streamed
 * @property {boolean} [responseStream=false] Whether responses are streamed
 * @property {Object.<string,*>} [options] Method options
 * @property {string} comment Method comments
 * @property {Object.<string,*>} [parsedOptions] Method options properly parsed into an object
 */

/**
 * Constructs a method from a method descriptor.
 * @param {string} name Method name
 * @param {IMethod} json Method descriptor
 * @returns {Method} Created method
 * @throws {TypeError} If arguments are invalid
 */


Method.fromJSON = function fromJSON(name, json) {
  return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
};
/**
 * Converts this method to a method descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IMethod} Method descriptor
 */


Method.prototype.toJSON = function toJSON(toJSONOptions) {
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["type", this.type !== "rpc" &&
  /* istanbul ignore next */
  this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", keepComments ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
};
/**
 * @override
 */


Method.prototype.resolve = function resolve() {
  /* istanbul ignore if */
  if (this.resolved) return this;
  this.resolvedRequestType = this.parent.lookupType(this.requestType);
  this.resolvedResponseType = this.parent.lookupType(this.responseType);
  return ReflectionObject.prototype.resolve.call(this);
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/namespace.js":
/*!********************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/namespace.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = Namespace; // extends ReflectionObject

var ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/object.js");

((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";

var Field = __webpack_require__(/*! ./field */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/field.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js"),
    OneOf = __webpack_require__(/*! ./oneof */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/oneof.js");

var Type, // cyclic
Service, Enum;
/**
 * Constructs a new namespace instance.
 * @name Namespace
 * @classdesc Reflected namespace.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 */

/**
 * Constructs a namespace from JSON.
 * @memberof Namespace
 * @function
 * @param {string} name Namespace name
 * @param {Object.<string,*>} json JSON object
 * @returns {Namespace} Created namespace
 * @throws {TypeError} If arguments are invalid
 */

Namespace.fromJSON = function fromJSON(name, json) {
  return new Namespace(name, json.options).addJSON(json.nested);
};
/**
 * Converts an array of reflection objects to JSON.
 * @memberof Namespace
 * @param {ReflectionObject[]} array Object array
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {Object.<string,*>|undefined} JSON object or `undefined` when array is empty
 */


function arrayToJSON(array, toJSONOptions) {
  if (!(array && array.length)) return undefined;
  var obj = {};

  for (var i = 0; i < array.length; ++i) obj[array[i].name] = array[i].toJSON(toJSONOptions);

  return obj;
}

Namespace.arrayToJSON = arrayToJSON;
/**
 * Tests if the specified id is reserved.
 * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */

Namespace.isReservedId = function isReservedId(reserved, id) {
  if (reserved) for (var i = 0; i < reserved.length; ++i) if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] > id) return true;
  return false;
};
/**
 * Tests if the specified name is reserved.
 * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */


Namespace.isReservedName = function isReservedName(reserved, name) {
  if (reserved) for (var i = 0; i < reserved.length; ++i) if (reserved[i] === name) return true;
  return false;
};
/**
 * Not an actual constructor. Use {@link Namespace} instead.
 * @classdesc Base class of all reflection objects containing nested objects. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports NamespaceBase
 * @extends ReflectionObject
 * @abstract
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 * @see {@link Namespace}
 */


function Namespace(name, options) {
  ReflectionObject.call(this, name, options);
  /**
   * Nested objects by name.
   * @type {Object.<string,ReflectionObject>|undefined}
   */

  this.nested = undefined; // toJSON

  /**
   * Cached nested objects as an array.
   * @type {ReflectionObject[]|null}
   * @private
   */

  this._nestedArray = null;
}

function clearCache(namespace) {
  namespace._nestedArray = null;
  return namespace;
}
/**
 * Nested objects of this namespace as an array for iteration.
 * @name NamespaceBase#nestedArray
 * @type {ReflectionObject[]}
 * @readonly
 */


Object.defineProperty(Namespace.prototype, "nestedArray", {
  get: function () {
    return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
  }
});
/**
 * Namespace descriptor.
 * @interface INamespace
 * @property {Object.<string,*>} [options] Namespace options
 * @property {Object.<string,AnyNestedObject>} [nested] Nested object descriptors
 */

/**
 * Any extension field descriptor.
 * @typedef AnyExtensionField
 * @type {IExtensionField|IExtensionMapField}
 */

/**
 * Any nested object descriptor.
 * @typedef AnyNestedObject
 * @type {IEnum|IType|IService|AnyExtensionField|INamespace|IOneOf}
 */

/**
 * Converts this namespace to a namespace descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {INamespace} Namespace descriptor
 */

Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
  return util.toObject(["options", this.options, "nested", arrayToJSON(this.nestedArray, toJSONOptions)]);
};
/**
 * Adds nested objects to this namespace from nested object descriptors.
 * @param {Object.<string,AnyNestedObject>} nestedJson Any nested object descriptors
 * @returns {Namespace} `this`
 */


Namespace.prototype.addJSON = function addJSON(nestedJson) {
  var ns = this;
  /* istanbul ignore else */

  if (nestedJson) {
    for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
      nested = nestedJson[names[i]];
      ns.add( // most to least likely
      (nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : nested.id !== undefined ? Field.fromJSON : Namespace.fromJSON)(names[i], nested));
    }
  }

  return this;
};
/**
 * Gets the nested object of the specified name.
 * @param {string} name Nested object name
 * @returns {ReflectionObject|null} The reflection object or `null` if it doesn't exist
 */


Namespace.prototype.get = function get(name) {
  return this.nested && this.nested[name] || null;
};
/**
 * Gets the values of the nested {@link Enum|enum} of the specified name.
 * This methods differs from {@link Namespace#get|get} in that it returns an enum's values directly and throws instead of returning `null`.
 * @param {string} name Nested enum name
 * @returns {Object.<string,number>} Enum values
 * @throws {Error} If there is no such enum
 */


Namespace.prototype.getEnum = function getEnum(name) {
  if (this.nested && this.nested[name] instanceof Enum) return this.nested[name].values;
  throw Error("no such enum: " + name);
};
/**
 * Adds a nested object to this namespace.
 * @param {ReflectionObject} object Nested object to add
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a nested object with this name
 */


Namespace.prototype.add = function add(object) {
  if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof OneOf || object instanceof Enum || object instanceof Service || object instanceof Namespace)) throw TypeError("object must be a valid nested object");
  if (!this.nested) this.nested = {};else {
    var prev = this.get(object.name);

    if (prev) {
      if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
        // replace plain namespace but keep existing nested elements and options
        var nested = prev.nestedArray;

        for (var i = 0; i < nested.length; ++i) object.add(nested[i]);

        this.remove(prev);
        if (!this.nested) this.nested = {};
        object.setOptions(prev.options, true);
      } else throw Error("duplicate name '" + object.name + "' in " + this);
    }
  }
  this.nested[object.name] = object;
  object.onAdd(this);
  return clearCache(this);
};
/**
 * Removes a nested object from this namespace.
 * @param {ReflectionObject} object Nested object to remove
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `object` is not a member of this namespace
 */


Namespace.prototype.remove = function remove(object) {
  if (!(object instanceof ReflectionObject)) throw TypeError("object must be a ReflectionObject");
  if (object.parent !== this) throw Error(object + " is not a member of " + this);
  delete this.nested[object.name];
  if (!Object.keys(this.nested).length) this.nested = undefined;
  object.onRemove(this);
  return clearCache(this);
};
/**
 * Defines additial namespaces within this one if not yet existing.
 * @param {string|string[]} path Path to create
 * @param {*} [json] Nested types to create from JSON
 * @returns {Namespace} Pointer to the last namespace created or `this` if path is empty
 */


Namespace.prototype.define = function define(path, json) {
  if (util.isString(path)) path = path.split(".");else if (!Array.isArray(path)) throw TypeError("illegal path");
  if (path && path.length && path[0] === "") throw Error("path must be relative");
  var ptr = this;

  while (path.length > 0) {
    var part = path.shift();

    if (ptr.nested && ptr.nested[part]) {
      ptr = ptr.nested[part];
      if (!(ptr instanceof Namespace)) throw Error("path conflicts with non-namespace objects");
    } else ptr.add(ptr = new Namespace(part));
  }

  if (json) ptr.addJSON(json);
  return ptr;
};
/**
 * Resolves this namespace's and all its nested objects' type references. Useful to validate a reflection tree, but comes at a cost.
 * @returns {Namespace} `this`
 */


Namespace.prototype.resolveAll = function resolveAll() {
  var nested = this.nestedArray,
      i = 0;

  while (i < nested.length) if (nested[i] instanceof Namespace) nested[i++].resolveAll();else nested[i++].resolve();

  return this.resolve();
};
/**
 * Recursively looks up the reflection object matching the specified path in the scope of this namespace.
 * @param {string|string[]} path Path to look up
 * @param {*|Array.<*>} filterTypes Filter types, any combination of the constructors of `protobuf.Type`, `protobuf.Enum`, `protobuf.Service` etc.
 * @param {boolean} [parentAlreadyChecked=false] If known, whether the parent has already been checked
 * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
 */


Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
  /* istanbul ignore next */
  if (typeof filterTypes === "boolean") {
    parentAlreadyChecked = filterTypes;
    filterTypes = undefined;
  } else if (filterTypes && !Array.isArray(filterTypes)) filterTypes = [filterTypes];

  if (util.isString(path) && path.length) {
    if (path === ".") return this.root;
    path = path.split(".");
  } else if (!path.length) return this; // Start at root if path is absolute


  if (path[0] === "") return this.root.lookup(path.slice(1), filterTypes); // Test if the first part matches any nested object, and if so, traverse if path contains more

  var found = this.get(path[0]);

  if (found) {
    if (path.length === 1) {
      if (!filterTypes || filterTypes.indexOf(found.constructor) > -1) return found;
    } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true))) return found; // Otherwise try each nested namespace

  } else for (var i = 0; i < this.nestedArray.length; ++i) if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true))) return found; // If there hasn't been a match, try again at the parent


  if (this.parent === null || parentAlreadyChecked) return null;
  return this.parent.lookup(path, filterTypes);
};
/**
 * Looks up the reflection object at the specified path, relative to this namespace.
 * @name NamespaceBase#lookup
 * @function
 * @param {string|string[]} path Path to look up
 * @param {boolean} [parentAlreadyChecked=false] Whether the parent has already been checked
 * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
 * @variation 2
 */
// lookup(path: string, [parentAlreadyChecked: boolean])

/**
 * Looks up the {@link Type|type} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type
 * @throws {Error} If `path` does not point to a type
 */


Namespace.prototype.lookupType = function lookupType(path) {
  var found = this.lookup(path, [Type]);
  if (!found) throw Error("no such type: " + path);
  return found;
};
/**
 * Looks up the values of the {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Enum} Looked up enum
 * @throws {Error} If `path` does not point to an enum
 */


Namespace.prototype.lookupEnum = function lookupEnum(path) {
  var found = this.lookup(path, [Enum]);
  if (!found) throw Error("no such Enum '" + path + "' in " + this);
  return found;
};
/**
 * Looks up the {@link Type|type} or {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type or enum
 * @throws {Error} If `path` does not point to a type or enum
 */


Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
  var found = this.lookup(path, [Type, Enum]);
  if (!found) throw Error("no such Type or Enum '" + path + "' in " + this);
  return found;
};
/**
 * Looks up the {@link Service|service} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Service} Looked up service
 * @throws {Error} If `path` does not point to a service
 */


Namespace.prototype.lookupService = function lookupService(path) {
  var found = this.lookup(path, [Service]);
  if (!found) throw Error("no such Service '" + path + "' in " + this);
  return found;
}; // Sets up cyclic dependencies (called in index-light)


Namespace._configure = function (Type_, Service_, Enum_) {
  Type = Type_;
  Service = Service_;
  Enum = Enum_;
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/object.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/object.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = ReflectionObject;
ReflectionObject.className = "ReflectionObject";

var util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");

var Root; // cyclic

/**
 * Constructs a new reflection object instance.
 * @classdesc Base class of all reflection objects.
 * @constructor
 * @param {string} name Object name
 * @param {Object.<string,*>} [options] Declared options
 * @abstract
 */

function ReflectionObject(name, options) {
  if (!util.isString(name)) throw TypeError("name must be a string");
  if (options && !util.isObject(options)) throw TypeError("options must be an object");
  /**
   * Options.
   * @type {Object.<string,*>|undefined}
   */

  this.options = options; // toJSON

  /**
   * Parsed Options.
   * @type {Array.<Object.<string,*>>|undefined}
   */

  this.parsedOptions = null;
  /**
   * Unique name within its namespace.
   * @type {string}
   */

  this.name = name;
  /**
   * Parent namespace.
   * @type {Namespace|null}
   */

  this.parent = null;
  /**
   * Whether already resolved or not.
   * @type {boolean}
   */

  this.resolved = false;
  /**
   * Comment text, if any.
   * @type {string|null}
   */

  this.comment = null;
  /**
   * Defining file name.
   * @type {string|null}
   */

  this.filename = null;
}

Object.defineProperties(ReflectionObject.prototype, {
  /**
   * Reference to the root namespace.
   * @name ReflectionObject#root
   * @type {Root}
   * @readonly
   */
  root: {
    get: function () {
      var ptr = this;

      while (ptr.parent !== null) ptr = ptr.parent;

      return ptr;
    }
  },

  /**
   * Full name including leading dot.
   * @name ReflectionObject#fullName
   * @type {string}
   * @readonly
   */
  fullName: {
    get: function () {
      var path = [this.name],
          ptr = this.parent;

      while (ptr) {
        path.unshift(ptr.name);
        ptr = ptr.parent;
      }

      return path.join(".");
    }
  }
});
/**
 * Converts this reflection object to its descriptor representation.
 * @returns {Object.<string,*>} Descriptor
 * @abstract
 */

ReflectionObject.prototype.toJSON =
/* istanbul ignore next */
function toJSON() {
  throw Error(); // not implemented, shouldn't happen
};
/**
 * Called when this object is added to a parent.
 * @param {ReflectionObject} parent Parent added to
 * @returns {undefined}
 */


ReflectionObject.prototype.onAdd = function onAdd(parent) {
  if (this.parent && this.parent !== parent) this.parent.remove(this);
  this.parent = parent;
  this.resolved = false;
  var root = parent.root;
  if (root instanceof Root) root._handleAdd(this);
};
/**
 * Called when this object is removed from a parent.
 * @param {ReflectionObject} parent Parent removed from
 * @returns {undefined}
 */


ReflectionObject.prototype.onRemove = function onRemove(parent) {
  var root = parent.root;
  if (root instanceof Root) root._handleRemove(this);
  this.parent = null;
  this.resolved = false;
};
/**
 * Resolves this objects type references.
 * @returns {ReflectionObject} `this`
 */


ReflectionObject.prototype.resolve = function resolve() {
  if (this.resolved) return this;
  if (this.root instanceof Root) this.resolved = true; // only if part of a root

  return this;
};
/**
 * Gets an option value.
 * @param {string} name Option name
 * @returns {*} Option value or `undefined` if not set
 */


ReflectionObject.prototype.getOption = function getOption(name) {
  if (this.options) return this.options[name];
  return undefined;
};
/**
 * Sets an option.
 * @param {string} name Option name
 * @param {*} value Option value
 * @param {boolean} [ifNotSet] Sets the option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */


ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
  if (!ifNotSet || !this.options || this.options[name] === undefined) (this.options || (this.options = {}))[name] = value;
  return this;
};
/**
 * Sets a parsed option.
 * @param {string} name parsed Option name
 * @param {*} value Option value
 * @param {string} propName dot '.' delimited full path of property within the option to set. if undefined\empty, will add a new option with that value
 * @returns {ReflectionObject} `this`
 */


ReflectionObject.prototype.setParsedOption = function setParsedOption(name, value, propName) {
  if (!this.parsedOptions) {
    this.parsedOptions = [];
  }

  var parsedOptions = this.parsedOptions;

  if (propName) {
    // If setting a sub property of an option then try to merge it
    // with an existing option
    var opt = parsedOptions.find(function (opt) {
      return Object.prototype.hasOwnProperty.call(opt, name);
    });

    if (opt) {
      // If we found an existing option - just merge the property value
      var newValue = opt[name];
      util.setProperty(newValue, propName, value);
    } else {
      // otherwise, create a new option, set it's property and add it to the list
      opt = {};
      opt[name] = util.setProperty({}, propName, value);
      parsedOptions.push(opt);
    }
  } else {
    // Always create a new option when setting the value of the option itself
    var newOpt = {};
    newOpt[name] = value;
    parsedOptions.push(newOpt);
  }

  return this;
};
/**
 * Sets multiple options.
 * @param {Object.<string,*>} options Options to set
 * @param {boolean} [ifNotSet] Sets an option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */


ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
  if (options) for (var keys = Object.keys(options), i = 0; i < keys.length; ++i) this.setOption(keys[i], options[keys[i]], ifNotSet);
  return this;
};
/**
 * Converts this instance to its string representation.
 * @returns {string} Class name[, space, full name]
 */


ReflectionObject.prototype.toString = function toString() {
  var className = this.constructor.className,
      fullName = this.fullName;
  if (fullName.length) return className + " " + fullName;
  return className;
}; // Sets up cyclic dependencies (called in index-light)


ReflectionObject._configure = function (Root_) {
  Root = Root_;
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/oneof.js":
/*!****************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/oneof.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = OneOf; // extends ReflectionObject

var ReflectionObject = __webpack_require__(/*! ./object */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/object.js");

((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";

var Field = __webpack_require__(/*! ./field */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/field.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");
/**
 * Constructs a new oneof instance.
 * @classdesc Reflected oneof.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Oneof name
 * @param {string[]|Object.<string,*>} [fieldNames] Field names
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */


function OneOf(name, fieldNames, options, comment) {
  if (!Array.isArray(fieldNames)) {
    options = fieldNames;
    fieldNames = undefined;
  }

  ReflectionObject.call(this, name, options);
  /* istanbul ignore if */

  if (!(fieldNames === undefined || Array.isArray(fieldNames))) throw TypeError("fieldNames must be an Array");
  /**
   * Field names that belong to this oneof.
   * @type {string[]}
   */

  this.oneof = fieldNames || []; // toJSON, marker

  /**
   * Fields that belong to this oneof as an array for iteration.
   * @type {Field[]}
   * @readonly
   */

  this.fieldsArray = []; // declared readonly for conformance, possibly not yet added to parent

  /**
   * Comment for this field.
   * @type {string|null}
   */

  this.comment = comment;
}
/**
 * Oneof descriptor.
 * @interface IOneOf
 * @property {Array.<string>} oneof Oneof field names
 * @property {Object.<string,*>} [options] Oneof options
 */

/**
 * Constructs a oneof from a oneof descriptor.
 * @param {string} name Oneof name
 * @param {IOneOf} json Oneof descriptor
 * @returns {OneOf} Created oneof
 * @throws {TypeError} If arguments are invalid
 */


OneOf.fromJSON = function fromJSON(name, json) {
  return new OneOf(name, json.oneof, json.options, json.comment);
};
/**
 * Converts this oneof to a oneof descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IOneOf} Oneof descriptor
 */


OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["options", this.options, "oneof", this.oneof, "comment", keepComments ? this.comment : undefined]);
};
/**
 * Adds the fields of the specified oneof to the parent if not already done so.
 * @param {OneOf} oneof The oneof
 * @returns {undefined}
 * @inner
 * @ignore
 */


function addFieldsToParent(oneof) {
  if (oneof.parent) for (var i = 0; i < oneof.fieldsArray.length; ++i) if (!oneof.fieldsArray[i].parent) oneof.parent.add(oneof.fieldsArray[i]);
}
/**
 * Adds a field to this oneof and removes it from its current parent, if any.
 * @param {Field} field Field to add
 * @returns {OneOf} `this`
 */


OneOf.prototype.add = function add(field) {
  /* istanbul ignore if */
  if (!(field instanceof Field)) throw TypeError("field must be a Field");
  if (field.parent && field.parent !== this.parent) field.parent.remove(field);
  this.oneof.push(field.name);
  this.fieldsArray.push(field);
  field.partOf = this; // field.parent remains null

  addFieldsToParent(this);
  return this;
};
/**
 * Removes a field from this oneof and puts it back to the oneof's parent.
 * @param {Field} field Field to remove
 * @returns {OneOf} `this`
 */


OneOf.prototype.remove = function remove(field) {
  /* istanbul ignore if */
  if (!(field instanceof Field)) throw TypeError("field must be a Field");
  var index = this.fieldsArray.indexOf(field);
  /* istanbul ignore if */

  if (index < 0) throw Error(field + " is not a member of " + this);
  this.fieldsArray.splice(index, 1);
  index = this.oneof.indexOf(field.name);
  /* istanbul ignore else */

  if (index > -1) // theoretical
    this.oneof.splice(index, 1);
  field.partOf = null;
  return this;
};
/**
 * @override
 */


OneOf.prototype.onAdd = function onAdd(parent) {
  ReflectionObject.prototype.onAdd.call(this, parent);
  var self = this; // Collect present fields

  for (var i = 0; i < this.oneof.length; ++i) {
    var field = parent.get(this.oneof[i]);

    if (field && !field.partOf) {
      field.partOf = self;
      self.fieldsArray.push(field);
    }
  } // Add not yet present fields


  addFieldsToParent(this);
};
/**
 * @override
 */


OneOf.prototype.onRemove = function onRemove(parent) {
  for (var i = 0, field; i < this.fieldsArray.length; ++i) if ((field = this.fieldsArray[i]).parent) field.parent.remove(field);

  ReflectionObject.prototype.onRemove.call(this, parent);
};
/**
 * Decorator function as returned by {@link OneOf.d} (TypeScript).
 * @typedef OneOfDecorator
 * @type {function}
 * @param {Object} prototype Target prototype
 * @param {string} oneofName OneOf name
 * @returns {undefined}
 */

/**
 * OneOf decorator (TypeScript).
 * @function
 * @param {...string} fieldNames Field names
 * @returns {OneOfDecorator} Decorator function
 * @template T extends string
 */


OneOf.d = function decorateOneOf() {
  var fieldNames = new Array(arguments.length),
      index = 0;

  while (index < arguments.length) fieldNames[index] = arguments[index++];

  return function oneOfDecorator(prototype, oneofName) {
    util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
    Object.defineProperty(prototype, oneofName, {
      get: util.oneOfGetter(fieldNames),
      set: util.oneOfSetter(fieldNames)
    });
  };
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/reader.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/reader.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

module.exports = Reader;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/minimal.js");

var BufferReader; // cyclic

var LongBits = util.LongBits,
    utf8 = util.utf8;
/* istanbul ignore next */

function indexOutOfRange(reader, writeLength) {
  return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}
/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */


function Reader(buffer) {
  /**
   * Read buffer.
   * @type {Uint8Array}
   */
  this.buf = buffer;
  /**
   * Read buffer position.
   * @type {number}
   */

  this.pos = 0;
  /**
   * Read buffer length.
   * @type {number}
   */

  this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
  if (buffer instanceof Uint8Array || Array.isArray(buffer)) return new Reader(buffer);
  throw Error("illegal buffer");
}
/* istanbul ignore next */
: function create_array(buffer) {
  if (Array.isArray(buffer)) return new Reader(buffer);
  throw Error("illegal buffer");
};

var create = function create() {
  return util.Buffer ? function create_buffer_setup(buffer) {
    return (Reader.create = function create_buffer(buffer) {
      return util.Buffer.isBuffer(buffer) ? new BufferReader(buffer)
      /* istanbul ignore next */
      : create_array(buffer);
    })(buffer);
  }
  /* istanbul ignore next */
  : create_array;
};
/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */


Reader.create = create();
Reader.prototype._slice = util.Array.prototype.subarray ||
/* istanbul ignore next */
util.Array.prototype.slice;
/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */

Reader.prototype.uint32 = function read_uint32_setup() {
  var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)

  return function read_uint32() {
    value = (this.buf[this.pos] & 127) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    /* istanbul ignore if */

    if ((this.pos += 5) > this.len) {
      this.pos = this.len;
      throw indexOutOfRange(this, 10);
    }

    return value;
  };
}();
/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */


Reader.prototype.int32 = function read_int32() {
  return this.uint32() | 0;
};
/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */


Reader.prototype.sint32 = function read_sint32() {
  var value = this.uint32();
  return value >>> 1 ^ -(value & 1) | 0;
};
/* eslint-disable no-invalid-this */


function readLongVarint() {
  // tends to deopt with local vars for octet etc.
  var bits = new LongBits(0, 0);
  var i = 0;

  if (this.len - this.pos > 4) {
    // fast route (lo)
    for (; i < 4; ++i) {
      // 1st..4th
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    } // 5th


    bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
    bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
    if (this.buf[this.pos++] < 128) return bits;
    i = 0;
  } else {
    for (; i < 3; ++i) {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this); // 1st..3th

      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    } // 4th


    bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
    return bits;
  }

  if (this.len - this.pos > 4) {
    // fast route (hi)
    for (; i < 5; ++i) {
      // 6th..10th
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    }
  } else {
    for (; i < 5; ++i) {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this); // 6th..10th

      bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    }
  }
  /* istanbul ignore next */


  throw Error("invalid varint encoding");
}
/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */


Reader.prototype.bool = function read_bool() {
  return this.uint32() !== 0;
};

function readFixed32_end(buf, end) {
  // note that this uses `end`, not `pos`
  return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
}
/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */


Reader.prototype.fixed32 = function read_fixed32() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4);
};
/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */


Reader.prototype.sfixed32 = function read_sfixed32() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4) | 0;
};
/* eslint-disable no-invalid-this */


function
  /* this: Reader */
readFixed64() {
  /* istanbul ignore if */
  if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
  return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}
/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */


Reader.prototype.float = function read_float() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  var value = util.float.readFloatLE(this.buf, this.pos);
  this.pos += 4;
  return value;
};
/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */


Reader.prototype.double = function read_double() {
  /* istanbul ignore if */
  if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
  var value = util.float.readDoubleLE(this.buf, this.pos);
  this.pos += 8;
  return value;
};
/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */


Reader.prototype.bytes = function read_bytes() {
  var length = this.uint32(),
      start = this.pos,
      end = this.pos + length;
  /* istanbul ignore if */

  if (end > this.len) throw indexOutOfRange(this, length);
  this.pos += length;
  if (Array.isArray(this.buf)) // plain array
    return this.buf.slice(start, end);
  return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
  ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
};
/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */


Reader.prototype.string = function read_string() {
  var bytes = this.bytes();
  return utf8.read(bytes, 0, bytes.length);
};
/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */


Reader.prototype.skip = function skip(length) {
  if (typeof length === "number") {
    /* istanbul ignore if */
    if (this.pos + length > this.len) throw indexOutOfRange(this, length);
    this.pos += length;
  } else {
    do {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this);
    } while (this.buf[this.pos++] & 128);
  }

  return this;
};
/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */


Reader.prototype.skipType = function (wireType) {
  switch (wireType) {
    case 0:
      this.skip();
      break;

    case 1:
      this.skip(8);
      break;

    case 2:
      this.skip(this.uint32());
      break;

    case 3:
      while ((wireType = this.uint32() & 7) !== 4) {
        this.skipType(wireType);
      }

      break;

    case 5:
      this.skip(4);
      break;

    /* istanbul ignore next */

    default:
      throw Error("invalid wire type " + wireType + " at offset " + this.pos);
  }

  return this;
};

Reader._configure = function (BufferReader_) {
  BufferReader = BufferReader_;
  Reader.create = create();

  BufferReader._configure();

  var fn = util.Long ? "toLong" :
  /* istanbul ignore next */
  "toNumber";
  util.merge(Reader.prototype, {
    int64: function read_int64() {
      return readLongVarint.call(this)[fn](false);
    },
    uint64: function read_uint64() {
      return readLongVarint.call(this)[fn](true);
    },
    sint64: function read_sint64() {
      return readLongVarint.call(this).zzDecode()[fn](false);
    },
    fixed64: function read_fixed64() {
      return readFixed64.call(this)[fn](true);
    },
    sfixed64: function read_sfixed64() {
      return readFixed64.call(this)[fn](false);
    }
  });
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/reader_buffer.js":
/*!************************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/reader_buffer.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = BufferReader; // extends Reader

var Reader = __webpack_require__(/*! ./reader */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/reader.js");

(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/minimal.js");
/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */


function BufferReader(buffer) {
  Reader.call(this, buffer);
  /**
   * Read buffer.
   * @name BufferReader#buf
   * @type {Buffer}
   */
}

BufferReader._configure = function () {
  /* istanbul ignore else */
  if (util.Buffer) BufferReader.prototype._slice = util.Buffer.prototype.slice;
};
/**
 * @override
 */


BufferReader.prototype.string = function read_string_buffer() {
  var len = this.uint32(); // modifies pos

  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};
/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */


BufferReader._configure();

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/root.js":
/*!***************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/root.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = Root; // extends Namespace

var Namespace = __webpack_require__(/*! ./namespace */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/namespace.js");

((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";

var Field = __webpack_require__(/*! ./field */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/field.js"),
    Enum = __webpack_require__(/*! ./enum */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/enum.js"),
    OneOf = __webpack_require__(/*! ./oneof */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/oneof.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");

var Type, // cyclic
parse, // might be excluded
common; // "

/**
 * Constructs a new root namespace instance.
 * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
 * @extends NamespaceBase
 * @constructor
 * @param {Object.<string,*>} [options] Top level options
 */

function Root(options) {
  Namespace.call(this, "", options);
  /**
   * Deferred extension fields.
   * @type {Field[]}
   */

  this.deferred = [];
  /**
   * Resolved file names of loaded files.
   * @type {string[]}
   */

  this.files = [];
}
/**
 * Loads a namespace descriptor into a root namespace.
 * @param {INamespace} json Nameespace descriptor
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted
 * @returns {Root} Root namespace
 */


Root.fromJSON = function fromJSON(json, root) {
  if (!root) root = new Root();
  if (json.options) root.setOptions(json.options);
  return root.addJSON(json.nested);
};
/**
 * Resolves the path of an imported file, relative to the importing origin.
 * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
 * @function
 * @param {string} origin The file name of the importing file
 * @param {string} target The file name being imported
 * @returns {string|null} Resolved path to `target` or `null` to skip the file
 */


Root.prototype.resolvePath = util.path.resolve;
/**
 * Fetch content from file path or url
 * This method exists so you can override it with your own logic.
 * @function
 * @param {string} path File path or url
 * @param {FetchCallback} callback Callback function
 * @returns {undefined}
 */

Root.prototype.fetch = util.fetch; // A symbol-like function to safely signal synchronous loading

/* istanbul ignore next */

function SYNC() {} // eslint-disable-line no-empty-function

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} options Parse options
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 */


Root.prototype.load = function load(filename, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = undefined;
  }

  var self = this;
  if (!callback) return util.asPromise(load, self, filename, options);
  var sync = callback === SYNC; // undocumented
  // Finishes loading by calling the callback (exactly once)

  function finish(err, root) {
    /* istanbul ignore if */
    if (!callback) return;
    var cb = callback;
    callback = null;
    if (sync) throw err;
    cb(err, root);
  } // Bundled definition existence checking


  function getBundledFileName(filename) {
    var idx = filename.lastIndexOf("google/protobuf/");

    if (idx > -1) {
      var altname = filename.substring(idx);
      if (altname in common) return altname;
    }

    return null;
  } // Processes a single file


  function process(filename, source) {
    try {
      if (util.isString(source) && source.charAt(0) === "{") source = JSON.parse(source);
      if (!util.isString(source)) self.setOptions(source.options).addJSON(source.nested);else {
        parse.filename = filename;
        var parsed = parse(source, self, options),
            resolved,
            i = 0;
        if (parsed.imports) for (; i < parsed.imports.length; ++i) if (resolved = getBundledFileName(parsed.imports[i]) || self.resolvePath(filename, parsed.imports[i])) fetch(resolved);
        if (parsed.weakImports) for (i = 0; i < parsed.weakImports.length; ++i) if (resolved = getBundledFileName(parsed.weakImports[i]) || self.resolvePath(filename, parsed.weakImports[i])) fetch(resolved, true);
      }
    } catch (err) {
      finish(err);
    }

    if (!sync && !queued) finish(null, self); // only once anyway
  } // Fetches a single file


  function fetch(filename, weak) {
    // Skip if already loaded / attempted
    if (self.files.indexOf(filename) > -1) return;
    self.files.push(filename); // Shortcut bundled definitions

    if (filename in common) {
      if (sync) process(filename, common[filename]);else {
        ++queued;
        setTimeout(function () {
          --queued;
          process(filename, common[filename]);
        });
      }
      return;
    } // Otherwise fetch from disk or network


    if (sync) {
      var source;

      try {
        source = util.fs.readFileSync(filename).toString("utf8");
      } catch (err) {
        if (!weak) finish(err);
        return;
      }

      process(filename, source);
    } else {
      ++queued;
      self.fetch(filename, function (err, source) {
        --queued;
        /* istanbul ignore if */

        if (!callback) return; // terminated meanwhile

        if (err) {
          /* istanbul ignore else */
          if (!weak) finish(err);else if (!queued) // can't be covered reliably
            finish(null, self);
          return;
        }

        process(filename, source);
      });
    }
  }

  var queued = 0; // Assembling the root namespace doesn't require working type
  // references anymore, so we can load everything in parallel

  if (util.isString(filename)) filename = [filename];

  for (var i = 0, resolved; i < filename.length; ++i) if (resolved = self.resolvePath("", filename[i])) fetch(resolved);

  if (sync) return self;
  if (!queued) finish(null, self);
  return undefined;
}; // function load(filename:string, options:IParseOptions, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @function Root#load
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */
// function load(filename:string, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and returns a promise.
 * @function Root#load
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Promise<Root>} Promise
 * @variation 3
 */
// function load(filename:string, [options:IParseOptions]):Promise<Root>

/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into this root namespace (node only).
 * @function Root#loadSync
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 */


Root.prototype.loadSync = function loadSync(filename, options) {
  if (!util.isNode) throw Error("not supported");
  return this.load(filename, options, SYNC);
};
/**
 * @override
 */


Root.prototype.resolveAll = function resolveAll() {
  if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function (field) {
    return "'extend " + field.extend + "' in " + field.parent.fullName;
  }).join(", "));
  return Namespace.prototype.resolveAll.call(this);
}; // only uppercased (and thus conflict-free) children are exposed, see below


var exposeRe = /^[A-Z]/;
/**
 * Handles a deferred declaring extension field by creating a sister field to represent it within its extended type.
 * @param {Root} root Root instance
 * @param {Field} field Declaring extension field witin the declaring type
 * @returns {boolean} `true` if successfully added to the extended type, `false` otherwise
 * @inner
 * @ignore
 */

function tryHandleExtension(root, field) {
  var extendedType = field.parent.lookup(field.extend);

  if (extendedType) {
    var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
    sisterField.declaringField = field;
    field.extensionField = sisterField;
    extendedType.add(sisterField);
    return true;
  }

  return false;
}
/**
 * Called when any object is added to this root or its sub-namespaces.
 * @param {ReflectionObject} object Object added
 * @returns {undefined}
 * @private
 */


Root.prototype._handleAdd = function _handleAdd(object) {
  if (object instanceof Field) {
    if (
    /* an extension field (implies not part of a oneof) */
    object.extend !== undefined &&
    /* not already handled */
    !object.extensionField) if (!tryHandleExtension(this, object)) this.deferred.push(object);
  } else if (object instanceof Enum) {
    if (exposeRe.test(object.name)) object.parent[object.name] = object.values; // expose enum values as property of its parent
  } else if (!(object instanceof OneOf))
    /* everything else is a namespace */
    {
      if (object instanceof Type) // Try to handle any deferred extensions
        for (var i = 0; i < this.deferred.length;) if (tryHandleExtension(this, this.deferred[i])) this.deferred.splice(i, 1);else ++i;

      for (var j = 0; j <
      /* initializes */
      object.nestedArray.length; ++j) // recurse into the namespace
      this._handleAdd(object._nestedArray[j]);

      if (exposeRe.test(object.name)) object.parent[object.name] = object; // expose namespace as property of its parent
    } // The above also adds uppercased (and thus conflict-free) nested types, services and enums as
  // properties of namespaces just like static code does. This allows using a .d.ts generated for
  // a static module with reflection-based solutions where the condition is met.

};
/**
 * Called when any object is removed from this root or its sub-namespaces.
 * @param {ReflectionObject} object Object removed
 * @returns {undefined}
 * @private
 */


Root.prototype._handleRemove = function _handleRemove(object) {
  if (object instanceof Field) {
    if (
    /* an extension field */
    object.extend !== undefined) {
      if (
      /* already handled */
      object.extensionField) {
        // remove its sister field
        object.extensionField.parent.remove(object.extensionField);
        object.extensionField = null;
      } else {
        // cancel the extension
        var index = this.deferred.indexOf(object);
        /* istanbul ignore else */

        if (index > -1) this.deferred.splice(index, 1);
      }
    }
  } else if (object instanceof Enum) {
    if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose enum values
  } else if (object instanceof Namespace) {
    for (var i = 0; i <
    /* initializes */
    object.nestedArray.length; ++i) // recurse into the namespace
    this._handleRemove(object._nestedArray[i]);

    if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose namespaces
  }
}; // Sets up cyclic dependencies (called in index-light)


Root._configure = function (Type_, parse_, common_) {
  Type = Type_;
  parse = parse_;
  common = common_;
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/roots.js":
/*!****************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/roots.js ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";


module.exports = {};
/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available across modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/rpc.js":
/*!**************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/rpc.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Streaming RPC helpers.
 * @namespace
 */

var rpc = exports;
/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(/*! ./rpc/service */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/rpc/service.js");

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/rpc/service.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/rpc/service.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = Service;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/minimal.js"); // Extends EventEmitter


(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */

function Service(rpcImpl, requestDelimited, responseDelimited) {
  if (typeof rpcImpl !== "function") throw TypeError("rpcImpl must be a function");
  util.EventEmitter.call(this);
  /**
   * RPC implementation. Becomes `null` once the service is ended.
   * @type {RPCImpl|null}
   */

  this.rpcImpl = rpcImpl;
  /**
   * Whether requests are length-delimited.
   * @type {boolean}
   */

  this.requestDelimited = Boolean(requestDelimited);
  /**
   * Whether responses are length-delimited.
   * @type {boolean}
   */

  this.responseDelimited = Boolean(responseDelimited);
}
/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */


Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
  if (!request) throw TypeError("request must be specified");
  var self = this;
  if (!callback) return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

  if (!self.rpcImpl) {
    setTimeout(function () {
      callback(Error("already ended"));
    }, 0);
    return undefined;
  }

  try {
    return self.rpcImpl(method, requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
      if (err) {
        self.emit("error", err, method);
        return callback(err);
      }

      if (response === null) {
        self.end(
        /* endedByRPC */
        true);
        return undefined;
      }

      if (!(response instanceof responseCtor)) {
        try {
          response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
        } catch (err) {
          self.emit("error", err, method);
          return callback(err);
        }
      }

      self.emit("data", response, method);
      return callback(null, response);
    });
  } catch (err) {
    self.emit("error", err, method);
    setTimeout(function () {
      callback(err);
    }, 0);
    return undefined;
  }
};
/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */


Service.prototype.end = function end(endedByRPC) {
  if (this.rpcImpl) {
    if (!endedByRPC) // signal end to rpcImpl
      this.rpcImpl(null, null, null);
    this.rpcImpl = null;
    this.emit("end").off();
  }

  return this;
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/service.js":
/*!******************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/service.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = Service; // extends Namespace

var Namespace = __webpack_require__(/*! ./namespace */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/namespace.js");

((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";

var Method = __webpack_require__(/*! ./method */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/method.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js"),
    rpc = __webpack_require__(/*! ./rpc */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/rpc.js");
/**
 * Constructs a new service instance.
 * @classdesc Reflected service.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Service name
 * @param {Object.<string,*>} [options] Service options
 * @throws {TypeError} If arguments are invalid
 */


function Service(name, options) {
  Namespace.call(this, name, options);
  /**
   * Service methods.
   * @type {Object.<string,Method>}
   */

  this.methods = {}; // toJSON, marker

  /**
   * Cached methods as an array.
   * @type {Method[]|null}
   * @private
   */

  this._methodsArray = null;
}
/**
 * Service descriptor.
 * @interface IService
 * @extends INamespace
 * @property {Object.<string,IMethod>} methods Method descriptors
 */

/**
 * Constructs a service from a service descriptor.
 * @param {string} name Service name
 * @param {IService} json Service descriptor
 * @returns {Service} Created service
 * @throws {TypeError} If arguments are invalid
 */


Service.fromJSON = function fromJSON(name, json) {
  var service = new Service(name, json.options);
  /* istanbul ignore else */

  if (json.methods) for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i) service.add(Method.fromJSON(names[i], json.methods[names[i]]));
  if (json.nested) service.addJSON(json.nested);
  service.comment = json.comment;
  return service;
};
/**
 * Converts this service to a service descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IService} Service descriptor
 */


Service.prototype.toJSON = function toJSON(toJSONOptions) {
  var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["options", inherited && inherited.options || undefined, "methods", Namespace.arrayToJSON(this.methodsArray, toJSONOptions) ||
  /* istanbul ignore next */
  {}, "nested", inherited && inherited.nested || undefined, "comment", keepComments ? this.comment : undefined]);
};
/**
 * Methods of this service as an array for iteration.
 * @name Service#methodsArray
 * @type {Method[]}
 * @readonly
 */


Object.defineProperty(Service.prototype, "methodsArray", {
  get: function () {
    return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
  }
});

function clearCache(service) {
  service._methodsArray = null;
  return service;
}
/**
 * @override
 */


Service.prototype.get = function get(name) {
  return this.methods[name] || Namespace.prototype.get.call(this, name);
};
/**
 * @override
 */


Service.prototype.resolveAll = function resolveAll() {
  var methods = this.methodsArray;

  for (var i = 0; i < methods.length; ++i) methods[i].resolve();

  return Namespace.prototype.resolve.call(this);
};
/**
 * @override
 */


Service.prototype.add = function add(object) {
  /* istanbul ignore if */
  if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);

  if (object instanceof Method) {
    this.methods[object.name] = object;
    object.parent = this;
    return clearCache(this);
  }

  return Namespace.prototype.add.call(this, object);
};
/**
 * @override
 */


Service.prototype.remove = function remove(object) {
  if (object instanceof Method) {
    /* istanbul ignore if */
    if (this.methods[object.name] !== object) throw Error(object + " is not a member of " + this);
    delete this.methods[object.name];
    object.parent = null;
    return clearCache(this);
  }

  return Namespace.prototype.remove.call(this, object);
};
/**
 * Creates a runtime service using the specified rpc implementation.
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
 */


Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
  var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);

  for (var i = 0, method; i <
  /* initializes */
  this.methodsArray.length; ++i) {
    var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
    rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
      m: method,
      q: method.resolvedRequestType.ctor,
      s: method.resolvedResponseType.ctor
    });
  }

  return rpcService;
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/type.js":
/*!***************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/type.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = Type; // extends Namespace

var Namespace = __webpack_require__(/*! ./namespace */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/namespace.js");

((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";

var Enum = __webpack_require__(/*! ./enum */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/enum.js"),
    OneOf = __webpack_require__(/*! ./oneof */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/oneof.js"),
    Field = __webpack_require__(/*! ./field */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/field.js"),
    MapField = __webpack_require__(/*! ./mapfield */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/mapfield.js"),
    Service = __webpack_require__(/*! ./service */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/service.js"),
    Message = __webpack_require__(/*! ./message */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/message.js"),
    Reader = __webpack_require__(/*! ./reader */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/reader.js"),
    Writer = __webpack_require__(/*! ./writer */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/writer.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js"),
    encoder = __webpack_require__(/*! ./encoder */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/encoder.js"),
    decoder = __webpack_require__(/*! ./decoder */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/decoder.js"),
    verifier = __webpack_require__(/*! ./verifier */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/verifier.js"),
    converter = __webpack_require__(/*! ./converter */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/converter.js"),
    wrappers = __webpack_require__(/*! ./wrappers */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/wrappers.js");
/**
 * Constructs a new reflected message type instance.
 * @classdesc Reflected message type.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Message name
 * @param {Object.<string,*>} [options] Declared options
 */


function Type(name, options) {
  Namespace.call(this, name, options);
  /**
   * Message fields.
   * @type {Object.<string,Field>}
   */

  this.fields = {}; // toJSON, marker

  /**
   * Oneofs declared within this namespace, if any.
   * @type {Object.<string,OneOf>}
   */

  this.oneofs = undefined; // toJSON

  /**
   * Extension ranges, if any.
   * @type {number[][]}
   */

  this.extensions = undefined; // toJSON

  /**
   * Reserved ranges, if any.
   * @type {Array.<number[]|string>}
   */

  this.reserved = undefined; // toJSON

  /*?
   * Whether this type is a legacy group.
   * @type {boolean|undefined}
   */

  this.group = undefined; // toJSON

  /**
   * Cached fields by id.
   * @type {Object.<number,Field>|null}
   * @private
   */

  this._fieldsById = null;
  /**
   * Cached fields as an array.
   * @type {Field[]|null}
   * @private
   */

  this._fieldsArray = null;
  /**
   * Cached oneofs as an array.
   * @type {OneOf[]|null}
   * @private
   */

  this._oneofsArray = null;
  /**
   * Cached constructor.
   * @type {Constructor<{}>}
   * @private
   */

  this._ctor = null;
}

Object.defineProperties(Type.prototype, {
  /**
   * Message fields by id.
   * @name Type#fieldsById
   * @type {Object.<number,Field>}
   * @readonly
   */
  fieldsById: {
    get: function () {
      /* istanbul ignore if */
      if (this._fieldsById) return this._fieldsById;
      this._fieldsById = {};

      for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
        var field = this.fields[names[i]],
            id = field.id;
        /* istanbul ignore if */

        if (this._fieldsById[id]) throw Error("duplicate id " + id + " in " + this);
        this._fieldsById[id] = field;
      }

      return this._fieldsById;
    }
  },

  /**
   * Fields of this message as an array for iteration.
   * @name Type#fieldsArray
   * @type {Field[]}
   * @readonly
   */
  fieldsArray: {
    get: function () {
      return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
    }
  },

  /**
   * Oneofs of this message as an array for iteration.
   * @name Type#oneofsArray
   * @type {OneOf[]}
   * @readonly
   */
  oneofsArray: {
    get: function () {
      return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
    }
  },

  /**
   * The registered constructor, if any registered, otherwise a generic constructor.
   * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
   * @name Type#ctor
   * @type {Constructor<{}>}
   */
  ctor: {
    get: function () {
      return this._ctor || (this.ctor = Type.generateConstructor(this)());
    },
    set: function (ctor) {
      // Ensure proper prototype
      var prototype = ctor.prototype;

      if (!(prototype instanceof Message)) {
        (ctor.prototype = new Message()).constructor = ctor;
        util.merge(ctor.prototype, prototype);
      } // Classes and messages reference their reflected type


      ctor.$type = ctor.prototype.$type = this; // Mix in static methods

      util.merge(ctor, Message, true);
      this._ctor = ctor; // Messages have non-enumerable default values on their prototype

      var i = 0;

      for (; i <
      /* initializes */
      this.fieldsArray.length; ++i) this._fieldsArray[i].resolve(); // ensures a proper value
      // Messages have non-enumerable getters and setters for each virtual oneof field


      var ctorProperties = {};

      for (i = 0; i <
      /* initializes */
      this.oneofsArray.length; ++i) ctorProperties[this._oneofsArray[i].resolve().name] = {
        get: util.oneOfGetter(this._oneofsArray[i].oneof),
        set: util.oneOfSetter(this._oneofsArray[i].oneof)
      };

      if (i) Object.defineProperties(ctor.prototype, ctorProperties);
    }
  }
});
/**
 * Generates a constructor function for the specified type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */

Type.generateConstructor = function generateConstructor(mtype) {
  /* eslint-disable no-unexpected-multiline */
  var gen = util.codegen(["p"], mtype.name); // explicitly initialize mutable object/array fields so that these aren't just inherited from the prototype

  for (var i = 0, field; i < mtype.fieldsArray.length; ++i) if ((field = mtype._fieldsArray[i]).map) gen("this%s={}", util.safeProp(field.name));else if (field.repeated) gen("this%s=[]", util.safeProp(field.name));

  return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)") // omit undefined or null
  ("this[ks[i]]=p[ks[i]]");
  /* eslint-enable no-unexpected-multiline */
};

function clearCache(type) {
  type._fieldsById = type._fieldsArray = type._oneofsArray = null;
  delete type.encode;
  delete type.decode;
  delete type.verify;
  return type;
}
/**
 * Message type descriptor.
 * @interface IType
 * @extends INamespace
 * @property {Object.<string,IOneOf>} [oneofs] Oneof descriptors
 * @property {Object.<string,IField>} fields Field descriptors
 * @property {number[][]} [extensions] Extension ranges
 * @property {number[][]} [reserved] Reserved ranges
 * @property {boolean} [group=false] Whether a legacy group or not
 */

/**
 * Creates a message type from a message type descriptor.
 * @param {string} name Message name
 * @param {IType} json Message type descriptor
 * @returns {Type} Created message type
 */


Type.fromJSON = function fromJSON(name, json) {
  var type = new Type(name, json.options);
  type.extensions = json.extensions;
  type.reserved = json.reserved;
  var names = Object.keys(json.fields),
      i = 0;

  for (; i < names.length; ++i) type.add((typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]]));

  if (json.oneofs) for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i) type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
  if (json.nested) for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
    var nested = json.nested[names[i]];
    type.add( // most to least likely
    (nested.id !== undefined ? Field.fromJSON : nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : Namespace.fromJSON)(names[i], nested));
  }
  if (json.extensions && json.extensions.length) type.extensions = json.extensions;
  if (json.reserved && json.reserved.length) type.reserved = json.reserved;
  if (json.group) type.group = true;
  if (json.comment) type.comment = json.comment;
  return type;
};
/**
 * Converts this message type to a message type descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IType} Message type descriptor
 */


Type.prototype.toJSON = function toJSON(toJSONOptions) {
  var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["options", inherited && inherited.options || undefined, "oneofs", Namespace.arrayToJSON(this.oneofsArray, toJSONOptions), "fields", Namespace.arrayToJSON(this.fieldsArray.filter(function (obj) {
    return !obj.declaringField;
  }), toJSONOptions) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", inherited && inherited.nested || undefined, "comment", keepComments ? this.comment : undefined]);
};
/**
 * @override
 */


Type.prototype.resolveAll = function resolveAll() {
  var fields = this.fieldsArray,
      i = 0;

  while (i < fields.length) fields[i++].resolve();

  var oneofs = this.oneofsArray;
  i = 0;

  while (i < oneofs.length) oneofs[i++].resolve();

  return Namespace.prototype.resolveAll.call(this);
};
/**
 * @override
 */


Type.prototype.get = function get(name) {
  return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
};
/**
 * Adds a nested object to this type.
 * @param {ReflectionObject} object Nested object to add
 * @returns {Type} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a nested object with this name or, if a field, when there is already a field with this id
 */


Type.prototype.add = function add(object) {
  if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);

  if (object instanceof Field && object.extend === undefined) {
    // NOTE: Extension fields aren't actual fields on the declaring type, but nested objects.
    // The root object takes care of adding distinct sister-fields to the respective extended
    // type instead.
    // avoids calling the getter if not absolutely necessary because it's called quite frequently
    if (this._fieldsById ?
    /* istanbul ignore next */
    this._fieldsById[object.id] : this.fieldsById[object.id]) throw Error("duplicate id " + object.id + " in " + this);
    if (this.isReservedId(object.id)) throw Error("id " + object.id + " is reserved in " + this);
    if (this.isReservedName(object.name)) throw Error("name '" + object.name + "' is reserved in " + this);
    if (object.parent) object.parent.remove(object);
    this.fields[object.name] = object;
    object.message = this;
    object.onAdd(this);
    return clearCache(this);
  }

  if (object instanceof OneOf) {
    if (!this.oneofs) this.oneofs = {};
    this.oneofs[object.name] = object;
    object.onAdd(this);
    return clearCache(this);
  }

  return Namespace.prototype.add.call(this, object);
};
/**
 * Removes a nested object from this type.
 * @param {ReflectionObject} object Nested object to remove
 * @returns {Type} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `object` is not a member of this type
 */


Type.prototype.remove = function remove(object) {
  if (object instanceof Field && object.extend === undefined) {
    // See Type#add for the reason why extension fields are excluded here.

    /* istanbul ignore if */
    if (!this.fields || this.fields[object.name] !== object) throw Error(object + " is not a member of " + this);
    delete this.fields[object.name];
    object.parent = null;
    object.onRemove(this);
    return clearCache(this);
  }

  if (object instanceof OneOf) {
    /* istanbul ignore if */
    if (!this.oneofs || this.oneofs[object.name] !== object) throw Error(object + " is not a member of " + this);
    delete this.oneofs[object.name];
    object.parent = null;
    object.onRemove(this);
    return clearCache(this);
  }

  return Namespace.prototype.remove.call(this, object);
};
/**
 * Tests if the specified id is reserved.
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */


Type.prototype.isReservedId = function isReservedId(id) {
  return Namespace.isReservedId(this.reserved, id);
};
/**
 * Tests if the specified name is reserved.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */


Type.prototype.isReservedName = function isReservedName(name) {
  return Namespace.isReservedName(this.reserved, name);
};
/**
 * Creates a new message of this type using the specified properties.
 * @param {Object.<string,*>} [properties] Properties to set
 * @returns {Message<{}>} Message instance
 */


Type.prototype.create = function create(properties) {
  return new this.ctor(properties);
};
/**
 * Sets up {@link Type#encode|encode}, {@link Type#decode|decode} and {@link Type#verify|verify}.
 * @returns {Type} `this`
 */


Type.prototype.setup = function setup() {
  // Sets up everything at once so that the prototype chain does not have to be re-evaluated
  // multiple times (V8, soft-deopt prototype-check).
  var fullName = this.fullName,
      types = [];

  for (var i = 0; i <
  /* initializes */
  this.fieldsArray.length; ++i) types.push(this._fieldsArray[i].resolve().resolvedType); // Replace setup methods with type-specific generated functions


  this.encode = encoder(this)({
    Writer: Writer,
    types: types,
    util: util
  });
  this.decode = decoder(this)({
    Reader: Reader,
    types: types,
    util: util
  });
  this.verify = verifier(this)({
    types: types,
    util: util
  });
  this.fromObject = converter.fromObject(this)({
    types: types,
    util: util
  });
  this.toObject = converter.toObject(this)({
    types: types,
    util: util
  }); // Inject custom wrappers for common types

  var wrapper = wrappers[fullName];

  if (wrapper) {
    var originalThis = Object.create(this); // if (wrapper.fromObject) {

    originalThis.fromObject = this.fromObject;
    this.fromObject = wrapper.fromObject.bind(originalThis); // }
    // if (wrapper.toObject) {

    originalThis.toObject = this.toObject;
    this.toObject = wrapper.toObject.bind(originalThis); // }
  }

  return this;
};
/**
 * Encodes a message of this type. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */


Type.prototype.encode = function encode_setup(message, writer) {
  return this.setup().encode(message, writer); // overrides this method
};
/**
 * Encodes a message of this type preceeded by its byte length as a varint. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */


Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
  return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
};
/**
 * Decodes a message of this type.
 * @param {Reader|Uint8Array} reader Reader or buffer to decode from
 * @param {number} [length] Length of the message, if known beforehand
 * @returns {Message<{}>} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {util.ProtocolError<{}>} If required fields are missing
 */


Type.prototype.decode = function decode_setup(reader, length) {
  return this.setup().decode(reader, length); // overrides this method
};
/**
 * Decodes a message of this type preceeded by its byte length as a varint.
 * @param {Reader|Uint8Array} reader Reader or buffer to decode from
 * @returns {Message<{}>} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {util.ProtocolError} If required fields are missing
 */


Type.prototype.decodeDelimited = function decodeDelimited(reader) {
  if (!(reader instanceof Reader)) reader = Reader.create(reader);
  return this.decode(reader, reader.uint32());
};
/**
 * Verifies that field values are valid and that required fields are present.
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {null|string} `null` if valid, otherwise the reason why it is not
 */


Type.prototype.verify = function verify_setup(message) {
  return this.setup().verify(message); // overrides this method
};
/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object to convert
 * @returns {Message<{}>} Message instance
 */


Type.prototype.fromObject = function fromObject(object) {
  return this.setup().fromObject(object);
};
/**
 * Conversion options as used by {@link Type#toObject} and {@link Message.toObject}.
 * @interface IConversionOptions
 * @property {Function} [longs] Long conversion type.
 * Valid values are `String` and `Number` (the global types).
 * Defaults to copy the present value, which is a possibly unsafe number without and a {@link Long} with a long library.
 * @property {Function} [enums] Enum value conversion type.
 * Only valid value is `String` (the global type).
 * Defaults to copy the present value, which is the numeric id.
 * @property {Function} [bytes] Bytes value conversion type.
 * Valid values are `Array` and (a base64 encoded) `String` (the global types).
 * Defaults to copy the present value, which usually is a Buffer under node and an Uint8Array in the browser.
 * @property {boolean} [defaults=false] Also sets default values on the resulting object
 * @property {boolean} [arrays=false] Sets empty arrays for missing repeated fields even if `defaults=false`
 * @property {boolean} [objects=false] Sets empty objects for missing map fields even if `defaults=false`
 * @property {boolean} [oneofs=false] Includes virtual oneof properties set to the present field's name, if any
 * @property {boolean} [json=false] Performs additional JSON compatibility conversions, i.e. NaN and Infinity to strings
 */

/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {Message<{}>} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 */


Type.prototype.toObject = function toObject(message, options) {
  return this.setup().toObject(message, options);
};
/**
 * Decorator function as returned by {@link Type.d} (TypeScript).
 * @typedef TypeDecorator
 * @type {function}
 * @param {Constructor<T>} target Target constructor
 * @returns {undefined}
 * @template T extends Message<T>
 */

/**
 * Type decorator (TypeScript).
 * @param {string} [typeName] Type name, defaults to the constructor's name
 * @returns {TypeDecorator<T>} Decorator function
 * @template T extends Message<T>
 */


Type.d = function decorateType(typeName) {
  return function typeDecorator(target) {
    util.decorateType(target, typeName);
  };
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/types.js":
/*!****************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/types.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Common type constants.
 * @namespace
 */

var types = exports;

var util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");

var s = ["double", // 0
"float", // 1
"int32", // 2
"uint32", // 3
"sint32", // 4
"fixed32", // 5
"sfixed32", // 6
"int64", // 7
"uint64", // 8
"sint64", // 9
"fixed64", // 10
"sfixed64", // 11
"bool", // 12
"string", // 13
"bytes" // 14
];

function bake(values, offset) {
  var i = 0,
      o = {};
  offset |= 0;

  while (i < values.length) o[s[i + offset]] = values[i++];

  return o;
}
/**
 * Basic type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 * @property {number} bytes=2 Ldelim wire type
 */


types.basic = bake([
/* double   */
1,
/* float    */
5,
/* int32    */
0,
/* uint32   */
0,
/* sint32   */
0,
/* fixed32  */
5,
/* sfixed32 */
5,
/* int64    */
0,
/* uint64   */
0,
/* sint64   */
0,
/* fixed64  */
1,
/* sfixed64 */
1,
/* bool     */
0,
/* string   */
2,
/* bytes    */
2]);
/**
 * Basic type defaults.
 * @type {Object.<string,*>}
 * @const
 * @property {number} double=0 Double default
 * @property {number} float=0 Float default
 * @property {number} int32=0 Int32 default
 * @property {number} uint32=0 Uint32 default
 * @property {number} sint32=0 Sint32 default
 * @property {number} fixed32=0 Fixed32 default
 * @property {number} sfixed32=0 Sfixed32 default
 * @property {number} int64=0 Int64 default
 * @property {number} uint64=0 Uint64 default
 * @property {number} sint64=0 Sint32 default
 * @property {number} fixed64=0 Fixed64 default
 * @property {number} sfixed64=0 Sfixed64 default
 * @property {boolean} bool=false Bool default
 * @property {string} string="" String default
 * @property {Array.<number>} bytes=Array(0) Bytes default
 * @property {null} message=null Message default
 */

types.defaults = bake([
/* double   */
0,
/* float    */
0,
/* int32    */
0,
/* uint32   */
0,
/* sint32   */
0,
/* fixed32  */
0,
/* sfixed32 */
0,
/* int64    */
0,
/* uint64   */
0,
/* sint64   */
0,
/* fixed64  */
0,
/* sfixed64 */
0,
/* bool     */
false,
/* string   */
"",
/* bytes    */
util.emptyArray,
/* message  */
null]);
/**
 * Basic long type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 */

types.long = bake([
/* int64    */
0,
/* uint64   */
0,
/* sint64   */
0,
/* fixed64  */
1,
/* sfixed64 */
1], 7);
/**
 * Allowed types for map keys with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 */

types.mapKey = bake([
/* int32    */
0,
/* uint32   */
0,
/* sint32   */
0,
/* fixed32  */
5,
/* sfixed32 */
5,
/* int64    */
0,
/* uint64   */
0,
/* sint64   */
0,
/* fixed64  */
1,
/* sfixed64 */
1,
/* bool     */
0,
/* string   */
2], 2);
/**
 * Allowed types for packed repeated fields with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 */

types.packed = bake([
/* double   */
1,
/* float    */
5,
/* int32    */
0,
/* uint32   */
0,
/* sint32   */
0,
/* fixed32  */
5,
/* sfixed32 */
5,
/* int64    */
0,
/* uint64   */
0,
/* sint64   */
0,
/* fixed64  */
1,
/* sfixed64 */
1,
/* bool     */
0]);

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js":
/*!***************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/**
 * Various utility functions.
 * @namespace
 */

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

var util = module.exports = __webpack_require__(/*! ./util/minimal */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/minimal.js");

var roots = __webpack_require__(/*! ./roots */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/roots.js");

var Type, // cyclic
Enum;
util.codegen = __webpack_require__(/*! @protobufjs/codegen */ "./node_modules/_@protobufjs_codegen@2.0.4@@protobufjs/codegen/index.js");
util.fetch = __webpack_require__(/*! @protobufjs/fetch */ "./node_modules/_@protobufjs_fetch@1.1.0@@protobufjs/fetch/index.js");
util.path = __webpack_require__(/*! @protobufjs/path */ "./node_modules/_@protobufjs_path@1.1.2@@protobufjs/path/index.js");
/**
 * Node's fs module if available.
 * @type {Object.<string,*>}
 */

util.fs = util.inquire("fs");
/**
 * Converts an object's values to an array.
 * @param {Object.<string,*>} object Object to convert
 * @returns {Array.<*>} Converted array
 */

util.toArray = function toArray(object) {
  if (object) {
    var keys = Object.keys(object),
        array = new Array(keys.length),
        index = 0;

    while (index < keys.length) array[index] = object[keys[index++]];

    return array;
  }

  return [];
};
/**
 * Converts an array of keys immediately followed by their respective value to an object, omitting undefined values.
 * @param {Array.<*>} array Array to convert
 * @returns {Object.<string,*>} Converted object
 */


util.toObject = function toObject(array) {
  var object = {},
      index = 0;

  while (index < array.length) {
    var key = array[index++],
        val = array[index++];
    if (val !== undefined) object[key] = val;
  }

  return object;
};

var safePropBackslashRe = /\\/g,
    safePropQuoteRe = /"/g;
/**
 * Tests whether the specified name is a reserved word in JS.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */

util.isReserved = function isReserved(name) {
  return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
};
/**
 * Returns a safe property accessor for the specified property name.
 * @param {string} prop Property name
 * @returns {string} Safe accessor
 */


util.safeProp = function safeProp(prop) {
  if (!/^[$\w_]+$/.test(prop) || util.isReserved(prop)) return "[\"" + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, "\\\"") + "\"]";
  return "." + prop;
};
/**
 * Converts the first character of a string to upper case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */


util.ucFirst = function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
};

var camelCaseRe = /_([a-z])/g;
/**
 * Converts a string to camel case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */

util.camelCase = function camelCase(str) {
  return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function ($0, $1) {
    return $1.toUpperCase();
  });
};
/**
 * Compares reflected fields by id.
 * @param {Field} a First field
 * @param {Field} b Second field
 * @returns {number} Comparison value
 */


util.compareFieldsById = function compareFieldsById(a, b) {
  return a.id - b.id;
};
/**
 * Decorator helper for types (TypeScript).
 * @param {Constructor<T>} ctor Constructor function
 * @param {string} [typeName] Type name, defaults to the constructor's name
 * @returns {Type} Reflected type
 * @template T extends Message<T>
 * @property {Root} root Decorators root
 */


util.decorateType = function decorateType(ctor, typeName) {
  /* istanbul ignore if */
  if (ctor.$type) {
    if (typeName && ctor.$type.name !== typeName) {
      util.decorateRoot.remove(ctor.$type);
      ctor.$type.name = typeName;
      util.decorateRoot.add(ctor.$type);
    }

    return ctor.$type;
  }
  /* istanbul ignore next */


  if (!Type) Type = __webpack_require__(/*! ./type */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/type.js");
  var type = new Type(typeName || ctor.name);
  util.decorateRoot.add(type);
  type.ctor = ctor; // sets up .encode, .decode etc.

  Object.defineProperty(ctor, "$type", {
    value: type,
    enumerable: false
  });
  Object.defineProperty(ctor.prototype, "$type", {
    value: type,
    enumerable: false
  });
  return type;
};

var decorateEnumIndex = 0;
/**
 * Decorator helper for enums (TypeScript).
 * @param {Object} object Enum object
 * @returns {Enum} Reflected enum
 */

util.decorateEnum = function decorateEnum(object) {
  /* istanbul ignore if */
  if (object.$type) return object.$type;
  /* istanbul ignore next */

  if (!Enum) Enum = __webpack_require__(/*! ./enum */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/enum.js");
  var enm = new Enum("Enum" + decorateEnumIndex++, object);
  util.decorateRoot.add(enm);
  Object.defineProperty(object, "$type", {
    value: enm,
    enumerable: false
  });
  return enm;
};
/**
 * Sets the value of a property by property path. If a value already exists, it is turned to an array
 * @param {Object.<string,*>} dst Destination object
 * @param {string} path dot '.' delimited path of the property to set
 * @param {Object} value the value to set
 * @returns {Object.<string,*>} Destination object
 */


util.setProperty = function setProperty(dst, path, value) {
  function setProp(dst, path, value) {
    var part = path.shift();

    if (part === "__proto__") {
      return dst;
    }

    if (path.length > 0) {
      dst[part] = setProp(dst[part] || {}, path, value);
    } else {
      var prevValue = dst[part];
      if (prevValue) value = [].concat(prevValue).concat(value);
      dst[part] = value;
    }

    return dst;
  }

  if (typeof dst !== "object") throw TypeError("dst must be an object");
  if (!path) throw TypeError("path must be specified");
  path = path.split(".");
  return setProp(dst, path, value);
};
/**
 * Decorator root (TypeScript).
 * @name util.decorateRoot
 * @type {Root}
 * @readonly
 */


Object.defineProperty(util, "decorateRoot", {
  get: function () {
    return roots["decorated"] || (roots["decorated"] = new (__webpack_require__(/*! ./root */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/root.js"))());
  }
});

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/longbits.js":
/*!************************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/util/longbits.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = LongBits;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/minimal.js");
/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */


function LongBits(lo, hi) {
  // note that the casts below are theoretically unnecessary as of today, but older statically
  // generated converter code might still call the ctor with signed 32bits. kept for compat.

  /**
   * Low bits.
   * @type {number}
   */
  this.lo = lo >>> 0;
  /**
   * High bits.
   * @type {number}
   */

  this.hi = hi >>> 0;
}
/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */


var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function () {
  return 0;
};

zero.zzEncode = zero.zzDecode = function () {
  return this;
};

zero.length = function () {
  return 1;
};
/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */


var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */

LongBits.fromNumber = function fromNumber(value) {
  if (value === 0) return zero;
  var sign = value < 0;
  if (sign) value = -value;
  var lo = value >>> 0,
      hi = (value - lo) / 4294967296 >>> 0;

  if (sign) {
    hi = ~hi >>> 0;
    lo = ~lo >>> 0;

    if (++lo > 4294967295) {
      lo = 0;
      if (++hi > 4294967295) hi = 0;
    }
  }

  return new LongBits(lo, hi);
};
/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */


LongBits.from = function from(value) {
  if (typeof value === "number") return LongBits.fromNumber(value);

  if (util.isString(value)) {
    /* istanbul ignore else */
    if (util.Long) value = util.Long.fromString(value);else return LongBits.fromNumber(parseInt(value, 10));
  }

  return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};
/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */


LongBits.prototype.toNumber = function toNumber(unsigned) {
  if (!unsigned && this.hi >>> 31) {
    var lo = ~this.lo + 1 >>> 0,
        hi = ~this.hi >>> 0;
    if (!lo) hi = hi + 1 >>> 0;
    return -(lo + hi * 4294967296);
  }

  return this.lo + this.hi * 4294967296;
};
/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */


LongBits.prototype.toLong = function toLong(unsigned) {
  return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
  /* istanbul ignore next */
  : {
    low: this.lo | 0,
    high: this.hi | 0,
    unsigned: Boolean(unsigned)
  };
};

var charCodeAt = String.prototype.charCodeAt;
/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */

LongBits.fromHash = function fromHash(hash) {
  if (hash === zeroHash) return zero;
  return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
};
/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */


LongBits.prototype.toHash = function toHash() {
  return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
};
/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */


LongBits.prototype.zzEncode = function zzEncode() {
  var mask = this.hi >> 31;
  this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
  this.lo = (this.lo << 1 ^ mask) >>> 0;
  return this;
};
/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */


LongBits.prototype.zzDecode = function zzDecode() {
  var mask = -(this.lo & 1);
  this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
  this.hi = (this.hi >>> 1 ^ mask) >>> 0;
  return this;
};
/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */


LongBits.prototype.length = function length() {
  var part0 = this.lo,
      part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
      part2 = this.hi >>> 24;
  return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/minimal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/util/minimal.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

var util = exports; // used to return a Promise where callback is omitted

util.asPromise = __webpack_require__(/*! @protobufjs/aspromise */ "./node_modules/_@protobufjs_aspromise@1.1.2@@protobufjs/aspromise/index.js"); // converts to / from base64 encoded strings

util.base64 = __webpack_require__(/*! @protobufjs/base64 */ "./node_modules/_@protobufjs_base64@1.1.2@@protobufjs/base64/index.js"); // base class of rpc.Service

util.EventEmitter = __webpack_require__(/*! @protobufjs/eventemitter */ "./node_modules/_@protobufjs_eventemitter@1.1.0@@protobufjs/eventemitter/index.js"); // float handling accross browsers

util.float = __webpack_require__(/*! @protobufjs/float */ "./node_modules/_@protobufjs_float@1.0.2@@protobufjs/float/index.js"); // requires modules optionally and hides the call from bundlers

util.inquire = __webpack_require__(/*! @protobufjs/inquire */ "./node_modules/_@protobufjs_inquire@1.1.0@@protobufjs/inquire/index.js"); // converts to / from utf8 encoded strings

util.utf8 = __webpack_require__(/*! @protobufjs/utf8 */ "./node_modules/_@protobufjs_utf8@1.1.0@@protobufjs/utf8/index.js"); // provides a node-like buffer pool in the browser

util.pool = __webpack_require__(/*! @protobufjs/pool */ "./node_modules/_@protobufjs_pool@1.1.0@@protobufjs/pool/index.js"); // utility to work with the low and high bits of a 64 bit value

util.LongBits = __webpack_require__(/*! ./longbits */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/longbits.js");
/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 */

util.isNode = Boolean(typeof __webpack_require__.g !== "undefined" && __webpack_require__.g && __webpack_require__.g.process && __webpack_require__.g.process.versions && __webpack_require__.g.process.versions.node);
/**
 * Global object reference.
 * @memberof util
 * @type {Object}
 */

util.global = util.isNode && __webpack_require__.g || typeof window !== "undefined" && window || typeof self !== "undefined" && self || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */

util.emptyArray = Object.freeze ? Object.freeze([]) :
/* istanbul ignore next */
[]; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */

util.emptyObject = Object.freeze ? Object.freeze({}) :
/* istanbul ignore next */
{}; // used on prototypes

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */

util.isInteger = Number.isInteger ||
/* istanbul ignore next */
function isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};
/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */


util.isString = function isString(value) {
  return typeof value === "string" || value instanceof String;
};
/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */


util.isObject = function isObject(value) {
  return value && typeof value === "object";
};
/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */


util.isset =
/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
  var value = obj[prop];
  if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
    return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
  return false;
};
/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */


util.Buffer = function () {
  try {
    var Buffer = util.inquire("buffer").Buffer; // refuse to use non-node buffers if not explicitly assigned (perf reasons):

    return Buffer.prototype.utf8Write ? Buffer :
    /* istanbul ignore next */
    null;
  } catch (e) {
    /* istanbul ignore next */
    return null;
  }
}(); // Internal alias of or polyfull for Buffer.from.


util._Buffer_from = null; // Internal alias of or polyfill for Buffer.allocUnsafe.

util._Buffer_allocUnsafe = null;
/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */

util.newBuffer = function newBuffer(sizeOrArray) {
  /* istanbul ignore next */
  return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
};
/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */


util.Array = typeof Uint8Array !== "undefined" ? Uint8Array
/* istanbul ignore next */
: Array;
/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */

util.Long =
/* istanbul ignore next */
util.global.dcodeIO &&
/* istanbul ignore next */
util.global.dcodeIO.Long ||
/* istanbul ignore next */
util.global.Long || util.inquire("long");
/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */

util.key2Re = /^true|false|0|1$/;
/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */

util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */

util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */

util.longToHash = function longToHash(value) {
  return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
};
/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */


util.longFromHash = function longFromHash(hash, unsigned) {
  var bits = util.LongBits.fromHash(hash);
  if (util.Long) return util.Long.fromBits(bits.lo, bits.hi, unsigned);
  return bits.toNumber(Boolean(unsigned));
};
/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */


function merge(dst, src, ifNotSet) {
  // used by converters
  for (var keys = Object.keys(src), i = 0; i < keys.length; ++i) if (dst[keys[i]] === undefined || !ifNotSet) dst[keys[i]] = src[keys[i]];

  return dst;
}

util.merge = merge;
/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */

util.lcFirst = function lcFirst(str) {
  return str.charAt(0).toLowerCase() + str.substring(1);
};
/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */


function newError(name) {
  function CustomError(message, properties) {
    if (!(this instanceof CustomError)) return new CustomError(message, properties); // Error.call(this, message);
    // ^ just returns a new error instance because the ctor can be called as a function

    Object.defineProperty(this, "message", {
      get: function () {
        return message;
      }
    });
    /* istanbul ignore next */

    if (Error.captureStackTrace) // node
      Error.captureStackTrace(this, CustomError);else Object.defineProperty(this, "stack", {
      value: new Error().stack || ""
    });
    if (properties) merge(this, properties);
  }

  CustomError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: CustomError,
      writable: true,
      enumerable: false,
      configurable: true
    },
    name: {
      get() {
        return name;
      },

      set: undefined,
      enumerable: false,
      // configurable: false would accurately preserve the behavior of
      // the original, but I'm guessing that was not intentional.
      // For an actual error subclass, this property would
      // be configurable.
      configurable: true
    },
    toString: {
      value() {
        return this.name + ": " + this.message;
      },

      writable: true,
      enumerable: false,
      configurable: true
    }
  });
  return CustomError;
}

util.newError = newError;
/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */

util.ProtocolError = newError("ProtocolError");
/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */

util.oneOfGetter = function getOneOf(fieldNames) {
  var fieldMap = {};

  for (var i = 0; i < fieldNames.length; ++i) fieldMap[fieldNames[i]] = 1;
  /**
   * @returns {string|undefined} Set field name, if any
   * @this Object
   * @ignore
   */


  return function () {
    // eslint-disable-line consistent-return
    for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null) return keys[i];
  };
};
/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */


util.oneOfSetter = function setOneOf(fieldNames) {
  /**
   * @param {string} name Field name
   * @returns {undefined}
   * @this Object
   * @ignore
   */
  return function (name) {
    for (var i = 0; i < fieldNames.length; ++i) if (fieldNames[i] !== name) delete this[fieldNames[i]];
  };
};
/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */


util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true
}; // Sets up buffer utility according to the environment (called in index-minimal)

util._configure = function () {
  var Buffer = util.Buffer;
  /* istanbul ignore if */

  if (!Buffer) {
    util._Buffer_from = util._Buffer_allocUnsafe = null;
    return;
  } // because node 4.x buffers are incompatible & immutable
  // see: https://github.com/dcodeIO/protobuf.js/pull/665


  util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
  /* istanbul ignore next */
  function Buffer_from(value, encoding) {
    return new Buffer(value, encoding);
  };

  util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
  /* istanbul ignore next */
  function Buffer_allocUnsafe(size) {
    return new Buffer(size);
  };
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/verifier.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/verifier.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = verifier;

var Enum = __webpack_require__(/*! ./enum */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/enum.js"),
    util = __webpack_require__(/*! ./util */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util.js");

function invalid(field, expected) {
  return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
}
/**
 * Generates a partial value verifier.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {number} fieldIndex Field index
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */


function genVerifyValue(gen, field, fieldIndex, ref) {
  /* eslint-disable no-unexpected-multiline */
  if (field.resolvedType) {
    if (field.resolvedType instanceof Enum) {
      gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));

      for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen("case %i:", field.resolvedType.values[keys[j]]);

      gen("break")("}");
    } else {
      gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
    }
  } else {
    switch (field.type) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
        break;

      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
        break;

      case "float":
      case "double":
        gen("if(typeof %s!==\"number\")", ref)("return%j", invalid(field, "number"));
        break;

      case "bool":
        gen("if(typeof %s!==\"boolean\")", ref)("return%j", invalid(field, "boolean"));
        break;

      case "string":
        gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
        break;

      case "bytes":
        gen("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", ref, ref, ref)("return%j", invalid(field, "buffer"));
        break;
    }
  }

  return gen;
  /* eslint-enable no-unexpected-multiline */
}
/**
 * Generates a partial key verifier.
 * @param {Codegen} gen Codegen instance
 * @param {Field} field Reflected field
 * @param {string} ref Variable reference
 * @returns {Codegen} Codegen instance
 * @ignore
 */


function genVerifyKey(gen, field, ref) {
  /* eslint-disable no-unexpected-multiline */
  switch (field.keyType) {
    case "int32":
    case "uint32":
    case "sint32":
    case "fixed32":
    case "sfixed32":
      gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
      break;

    case "int64":
    case "uint64":
    case "sint64":
    case "fixed64":
    case "sfixed64":
      gen("if(!util.key64Re.test(%s))", ref) // see comment above: x is ok, d is not
      ("return%j", invalid(field, "integer|Long key"));
      break;

    case "bool":
      gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
      break;
  }

  return gen;
  /* eslint-enable no-unexpected-multiline */
}
/**
 * Generates a verifier specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */


function verifier(mtype) {
  /* eslint-disable no-unexpected-multiline */
  var gen = util.codegen(["m"], mtype.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
  var oneofs = mtype.oneofsArray,
      seenFirstField = {};
  if (oneofs.length) gen("var p={}");

  for (var i = 0; i <
  /* initializes */
  mtype.fieldsArray.length; ++i) {
    var field = mtype._fieldsArray[i].resolve(),
        ref = "m" + util.safeProp(field.name);

    if (field.optional) gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field.name); // !== undefined && !== null
    // map fields

    if (field.map) {
      gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
      genVerifyKey(gen, field, "k[i]");
      genVerifyValue(gen, field, i, ref + "[k[i]]")("}"); // repeated fields
    } else if (field.repeated) {
      gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
      genVerifyValue(gen, field, i, ref + "[i]")("}"); // required or present fields
    } else {
      if (field.partOf) {
        var oneofProp = util.safeProp(field.partOf.name);
        if (seenFirstField[field.partOf.name] === 1) gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
        seenFirstField[field.partOf.name] = 1;
        gen("p%s=1", oneofProp);
      }

      genVerifyValue(gen, field, i, ref);
    }

    if (field.optional) gen("}");
  }

  return gen("return null");
  /* eslint-enable no-unexpected-multiline */
}

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/wrappers.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/wrappers.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Wrappers for common types.
 * @type {Object.<string,IWrapper>}
 * @const
 */

var wrappers = exports;

var Message = __webpack_require__(/*! ./message */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/message.js");
/**
 * From object converter part of an {@link IWrapper}.
 * @typedef WrapperFromObjectConverter
 * @type {function}
 * @param {Object.<string,*>} object Plain object
 * @returns {Message<{}>} Message instance
 * @this Type
 */

/**
 * To object converter part of an {@link IWrapper}.
 * @typedef WrapperToObjectConverter
 * @type {function}
 * @param {Message<{}>} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 * @this Type
 */

/**
 * Common type wrapper part of {@link wrappers}.
 * @interface IWrapper
 * @property {WrapperFromObjectConverter} [fromObject] From object converter
 * @property {WrapperToObjectConverter} [toObject] To object converter
 */
// Custom wrapper for Any


wrappers[".google.protobuf.Any"] = {
  fromObject: function (object) {
    // unwrap value type if mapped
    if (object && object["@type"]) {
      // Only use fully qualified type name after the last '/'
      var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
      var type = this.lookup(name);
      /* istanbul ignore else */

      if (type) {
        // type_url does not accept leading "."
        var type_url = object["@type"].charAt(0) === "." ? object["@type"].slice(1) : object["@type"]; // type_url prefix is optional, but path seperator is required

        if (type_url.indexOf("/") === -1) {
          type_url = "/" + type_url;
        }

        return this.create({
          type_url: type_url,
          value: type.encode(type.fromObject(object)).finish()
        });
      }
    }

    return this.fromObject(object);
  },
  toObject: function (message, options) {
    // Default prefix
    var googleApi = "type.googleapis.com/";
    var prefix = "";
    var name = ""; // decode value if requested and unmapped

    if (options && options.json && message.type_url && message.value) {
      // Only use fully qualified type name after the last '/'
      name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1); // Separate the prefix used

      prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
      var type = this.lookup(name);
      /* istanbul ignore else */

      if (type) message = type.decode(message.value);
    } // wrap value if unmapped


    if (!(message instanceof this.ctor) && message instanceof Message) {
      var object = message.$type.toObject(message, options);
      var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.slice(1) : message.$type.fullName; // Default to type.googleapis.com prefix if no prefix is used

      if (prefix === "") {
        prefix = googleApi;
      }

      name = prefix + messageName;
      object["@type"] = name;
      return object;
    }

    return this.toObject(message, options);
  }
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/writer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/writer.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = Writer;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/minimal.js");

var BufferWriter; // cyclic

var LongBits = util.LongBits,
    base64 = util.base64,
    utf8 = util.utf8;
/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */

function Op(fn, len, val) {
  /**
   * Function to call.
   * @type {function(Uint8Array, number, *)}
   */
  this.fn = fn;
  /**
   * Value byte length.
   * @type {number}
   */

  this.len = len;
  /**
   * Next operation.
   * @type {Writer.Op|undefined}
   */

  this.next = undefined;
  /**
   * Value to write.
   * @type {*}
   */

  this.val = val; // type varies
}
/* istanbul ignore next */


function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */


function State(writer) {
  /**
   * Current head.
   * @type {Writer.Op}
   */
  this.head = writer.head;
  /**
   * Current tail.
   * @type {Writer.Op}
   */

  this.tail = writer.tail;
  /**
   * Current buffer length.
   * @type {number}
   */

  this.len = writer.len;
  /**
   * Next state.
   * @type {State|null}
   */

  this.next = writer.states;
}
/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */


function Writer() {
  /**
   * Current length.
   * @type {number}
   */
  this.len = 0;
  /**
   * Operations head.
   * @type {Object}
   */

  this.head = new Op(noop, 0, 0);
  /**
   * Operations tail
   * @type {Object}
   */

  this.tail = this.head;
  /**
   * Linked forked states.
   * @type {Object|null}
   */

  this.states = null; // When a value is written, the writer calculates its byte length and puts it into a linked
  // list of operations to perform when finish() is called. This both allows us to allocate
  // buffers of the exact required size and reduces the amount of work we have to do compared
  // to first calculating over objects and then encoding over objects. In our case, the encoding
  // part is just a linked list walk calling operations with already prepared values.
}

var create = function create() {
  return util.Buffer ? function create_buffer_setup() {
    return (Writer.create = function create_buffer() {
      return new BufferWriter();
    })();
  }
  /* istanbul ignore next */
  : function create_array() {
    return new Writer();
  };
};
/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */


Writer.create = create();
/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

Writer.alloc = function alloc(size) {
  return new util.Array(size);
}; // Use Uint8Array buffer pool in the browser, just like node does with buffers

/* istanbul ignore else */


if (util.Array !== Array) Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */

Writer.prototype._push = function push(fn, len, val) {
  this.tail = this.tail.next = new Op(fn, len, val);
  this.len += len;
  return this;
};

function writeByte(val, buf, pos) {
  buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
  while (val > 127) {
    buf[pos++] = val & 127 | 128;
    val >>>= 7;
  }

  buf[pos] = val;
}
/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */


function VarintOp(len, val) {
  this.len = len;
  this.next = undefined;
  this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;
/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */

Writer.prototype.uint32 = function write_uint32(value) {
  // here, the call to this.push has been inlined and a varint specific Op subclass is used.
  // uint32 is by far the most frequently used operation and benefits significantly from this.
  this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
  return this;
};
/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.int32 = function write_int32(value) {
  return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
  : this.uint32(value);
};
/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.sint32 = function write_sint32(value) {
  return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
  while (val.hi) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
    val.hi >>>= 7;
  }

  while (val.lo > 127) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = val.lo >>> 7;
  }

  buf[pos++] = val.lo;
}
/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.uint64 = function write_uint64(value) {
  var bits = LongBits.from(value);
  return this._push(writeVarint64, bits.length(), bits);
};
/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.int64 = Writer.prototype.uint64;
/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */

Writer.prototype.sint64 = function write_sint64(value) {
  var bits = LongBits.from(value).zzEncode();
  return this._push(writeVarint64, bits.length(), bits);
};
/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.bool = function write_bool(value) {
  return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
  buf[pos] = val & 255;
  buf[pos + 1] = val >>> 8 & 255;
  buf[pos + 2] = val >>> 16 & 255;
  buf[pos + 3] = val >>> 24;
}
/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.fixed32 = function write_fixed32(value) {
  return this._push(writeFixed32, 4, value >>> 0);
};
/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.sfixed32 = Writer.prototype.fixed32;
/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */

Writer.prototype.fixed64 = function write_fixed64(value) {
  var bits = LongBits.from(value);
  return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};
/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.sfixed64 = Writer.prototype.fixed64;
/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */

Writer.prototype.float = function write_float(value) {
  return this._push(util.float.writeFloatLE, 4, value);
};
/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.double = function write_double(value) {
  return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
  buf.set(val, pos); // also works for plain array values
}
/* istanbul ignore next */
: function writeBytes_for(val, buf, pos) {
  for (var i = 0; i < val.length; ++i) buf[pos + i] = val[i];
};
/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */

Writer.prototype.bytes = function write_bytes(value) {
  var len = value.length >>> 0;
  if (!len) return this._push(writeByte, 1, 0);

  if (util.isString(value)) {
    var buf = Writer.alloc(len = base64.length(value));
    base64.decode(value, buf, 0);
    value = buf;
  }

  return this.uint32(len)._push(writeBytes, len, value);
};
/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.string = function write_string(value) {
  var len = utf8.length(value);
  return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
};
/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */


Writer.prototype.fork = function fork() {
  this.states = new State(this);
  this.head = this.tail = new Op(noop, 0, 0);
  this.len = 0;
  return this;
};
/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */


Writer.prototype.reset = function reset() {
  if (this.states) {
    this.head = this.states.head;
    this.tail = this.states.tail;
    this.len = this.states.len;
    this.states = this.states.next;
  } else {
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
  }

  return this;
};
/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */


Writer.prototype.ldelim = function ldelim() {
  var head = this.head,
      tail = this.tail,
      len = this.len;
  this.reset().uint32(len);

  if (len) {
    this.tail.next = head.next; // skip noop

    this.tail = tail;
    this.len += len;
  }

  return this;
};
/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */


Writer.prototype.finish = function finish() {
  var head = this.head.next,
      // skip noop
  buf = this.constructor.alloc(this.len),
      pos = 0;

  while (head) {
    head.fn(head.val, buf, pos);
    pos += head.len;
    head = head.next;
  } // this.head = this.tail = null;


  return buf;
};

Writer._configure = function (BufferWriter_) {
  BufferWriter = BufferWriter_;
  Writer.create = create();

  BufferWriter._configure();
};

/***/ }),

/***/ "./node_modules/_protobufjs@7.1.2@protobufjs/src/writer_buffer.js":
/*!************************************************************************!*\
  !*** ./node_modules/_protobufjs@7.1.2@protobufjs/src/writer_buffer.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

module.exports = BufferWriter; // extends Writer

var Writer = __webpack_require__(/*! ./writer */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/writer.js");

(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/_protobufjs@7.1.2@protobufjs/src/util/minimal.js");
/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */


function BufferWriter() {
  Writer.call(this);
}

BufferWriter._configure = function () {
  /**
   * Allocates a buffer of the specified size.
   * @function
   * @param {number} size Buffer size
   * @returns {Buffer} Buffer
   */
  BufferWriter.alloc = util._Buffer_allocUnsafe;
  BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
    buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
    // also works for plain array values
  }
  /* istanbul ignore next */
  : function writeBytesBuffer_copy(val, buf, pos) {
    if (val.copy) // Buffer values
      val.copy(buf, pos, 0, val.length);else for (var i = 0; i < val.length;) // plain array values
    buf[pos++] = val[i++];
  };
};
/**
 * @override
 */


BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
  if (util.isString(value)) value = util._Buffer_from(value, "base64");
  var len = value.length >>> 0;
  this.uint32(len);
  if (len) this._push(BufferWriter.writeBytesBuffer, len, value);
  return this;
};

function writeStringBuffer(val, buf, pos) {
  if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
    util.utf8.write(val, buf, pos);else if (buf.utf8Write) buf.utf8Write(val, pos);else buf.write(val, pos);
}
/**
 * @override
 */


BufferWriter.prototype.string = function write_string_buffer(value) {
  var len = util.Buffer.byteLength(value);
  this.uint32(len);
  if (len) this._push(writeStringBuffer, len, value);
  return this;
};
/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */


BufferWriter._configure();

/***/ }),

/***/ "./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/index.js ***!
  \**************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parse = __webpack_require__(/*! ./parse */ "./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/parse.js");

var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/stringify.js");

module.exports = parse;
module.exports.parse = parse;
module.exports.stringify = stringify;

/***/ }),

/***/ "./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/parse.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/parse.js ***!
  \**************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

var tokenize = __webpack_require__(/*! ./tokenize */ "./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/tokenize.js");

var MAX_RANGE = 0x1FFFFFFF;

var onfieldoptions = function (tokens) {
  var opts = {};

  while (tokens.length) {
    switch (tokens[0]) {
      case '[':
      case ',':
        tokens.shift();
        var name = tokens.shift();

        if (name === '(') {
          // handling [(A) = B]
          name = tokens.shift();
          tokens.shift(); // remove the end of bracket
        }

        if (tokens[0] !== '=') throw new Error('Unexpected token in field options: ' + tokens[0]);
        tokens.shift();
        if (tokens[0] === ']') throw new Error('Unexpected ] in field option');
        opts[name] = tokens.shift();
        break;

      case ']':
        tokens.shift();
        return opts;

      default:
        throw new Error('Unexpected token in field options: ' + tokens[0]);
    }
  }

  throw new Error('No closing tag for field options');
};

var onfield = function (tokens) {
  var field = {
    name: null,
    type: null,
    tag: 0,
    map: null,
    oneof: null,
    required: false,
    repeated: false,
    options: {}
  };

  while (tokens.length) {
    switch (tokens[0]) {
      case '=':
        tokens.shift();
        field.tag = Number(tokens.shift());
        break;

      case 'map':
        field.type = 'map';
        field.map = {
          from: null,
          to: null
        };
        tokens.shift();
        if (tokens[0] !== '<') throw new Error('Unexpected token in map type: ' + tokens[0]);
        tokens.shift();
        field.map.from = tokens.shift();
        if (tokens[0] !== ',') throw new Error('Unexpected token in map type: ' + tokens[0]);
        tokens.shift();
        field.map.to = tokens.shift();
        if (tokens[0] !== '>') throw new Error('Unexpected token in map type: ' + tokens[0]);
        tokens.shift();
        field.name = tokens.shift();
        break;

      case 'repeated':
      case 'required':
      case 'optional':
        var t = tokens.shift();
        field.required = t === 'required';
        field.repeated = t === 'repeated';
        field.type = tokens.shift();
        field.name = tokens.shift();
        break;

      case '[':
        field.options = onfieldoptions(tokens);
        break;

      case ';':
        tokens.shift();
        return field;

      default:
        throw new Error('Unexpected token in message field: ' + tokens[0]);
    }
  }

  throw new Error('No ; found for message field');
};

var onmessagebody = function (tokens) {
  var body = {
    enums: [],
    messages: [],
    fields: [],
    extends: [],
    extensions: null
  };

  while (tokens.length) {
    switch (tokens[0]) {
      case 'map':
      case 'repeated':
      case 'optional':
      case 'required':
        body.fields.push(onfield(tokens));
        break;

      case 'enum':
        body.enums.push(onenum(tokens));
        break;

      case 'message':
        body.messages.push(onmessage(tokens));
        break;

      case 'extensions':
        body.extensions = onextensions(tokens);
        break;

      case 'oneof':
        tokens.shift();
        var name = tokens.shift();
        if (tokens[0] !== '{') throw new Error('Unexpected token in oneof: ' + tokens[0]);
        tokens.shift();

        while (tokens[0] !== '}') {
          tokens.unshift('optional');
          var field = onfield(tokens);
          field.oneof = name;
          body.fields.push(field);
        }

        tokens.shift();
        break;

      case 'extend':
        body.extends.push(onextend(tokens));
        break;

      case ';':
        tokens.shift();
        break;

      default:
        // proto3 does not require the use of optional/required, assumed as optional
        // "singular: a well-formed message can have zero or one of this field (but not more than one)."
        // https://developers.google.com/protocol-buffers/docs/proto3#specifying-field-rules
        tokens.unshift('optional');
        body.fields.push(onfield(tokens));
    }
  }

  return body;
};

var onextend = function (tokens) {
  var out = {
    name: tokens[1],
    message: onmessage(tokens)
  };
  return out;
};

var onextensions = function (tokens) {
  tokens.shift();
  var from = Number(tokens.shift());
  if (isNaN(from)) throw new Error('Invalid from in extensions definition');
  if (tokens.shift() !== 'to') throw new Error("Expected keyword 'to' in extensions definition");
  var to = tokens.shift();
  if (to === 'max') to = MAX_RANGE;
  to = Number(to);
  if (isNaN(to)) throw new Error('Invalid to in extensions definition');
  if (tokens.shift() !== ';') throw new Error('Missing ; in extensions definition');
  return {
    from: from,
    to: to
  };
};

var onmessage = function (tokens) {
  tokens.shift();
  var lvl = 1;
  var body = [];
  var msg = {
    name: tokens.shift(),
    enums: [],
    extends: [],
    messages: [],
    fields: []
  };
  if (tokens[0] !== '{') throw new Error('Expected { but found ' + tokens[0]);
  tokens.shift();

  while (tokens.length) {
    if (tokens[0] === '{') lvl++;else if (tokens[0] === '}') lvl--;

    if (!lvl) {
      tokens.shift();
      body = onmessagebody(body);
      msg.enums = body.enums;
      msg.messages = body.messages;
      msg.fields = body.fields;
      msg.extends = body.extends;
      msg.extensions = body.extensions;
      return msg;
    }

    body.push(tokens.shift());
  }

  if (lvl) throw new Error('No closing tag for message');
};

var onpackagename = function (tokens) {
  tokens.shift();
  var name = tokens.shift();
  if (tokens[0] !== ';') throw new Error('Expected ; but found ' + tokens[0]);
  tokens.shift();
  return name;
};

var onsyntaxversion = function (tokens) {
  tokens.shift();
  if (tokens[0] !== '=') throw new Error('Expected = but found ' + tokens[0]);
  tokens.shift();
  var version = tokens.shift();

  switch (version) {
    case '"proto2"':
      version = 2;
      break;

    case '"proto3"':
      version = 3;
      break;

    default:
      throw new Error('Expected protobuf syntax version but found ' + version);
  }

  if (tokens[0] !== ';') throw new Error('Expected ; but found ' + tokens[0]);
  tokens.shift();
  return version;
};

var onenumvalue = function (tokens) {
  if (tokens.length < 4) throw new Error('Invalid enum value: ' + tokens.slice(0, 3).join(' '));
  if (tokens[1] !== '=') throw new Error('Expected = but found ' + tokens[1]);
  if (tokens[3] !== ';' && tokens[3] !== '[') throw new Error('Expected ; or [ but found ' + tokens[1]);
  var name = tokens.shift();
  tokens.shift();
  var val = {
    value: null,
    options: {}
  };
  val.value = Number(tokens.shift());

  if (tokens[0] === '[') {
    val.options = onfieldoptions(tokens);
  }

  tokens.shift(); // expecting the semicolon here

  return {
    name: name,
    val: val
  };
};

var onenum = function (tokens) {
  tokens.shift();
  var options = {};
  var e = {
    name: tokens.shift(),
    values: {},
    options: {}
  };
  if (tokens[0] !== '{') throw new Error('Expected { but found ' + tokens[0]);
  tokens.shift();

  while (tokens.length) {
    if (tokens[0] === '}') {
      tokens.shift(); // there goes optional semicolon after the enclosing "}"

      if (tokens[0] === ';') tokens.shift();
      return e;
    }

    if (tokens[0] === 'option') {
      options = onoption(tokens);
      e.options[options.name] = options.value;
      continue;
    }

    var val = onenumvalue(tokens);
    e.values[val.name] = val.val;
  }

  throw new Error('No closing tag for enum');
};

var onoption = function (tokens) {
  var name = null;
  var value = null;

  var parse = function (value) {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value.replace(/^"+|"+$/gm, '');
  };

  while (tokens.length) {
    if (tokens[0] === ';') {
      tokens.shift();
      return {
        name: name,
        value: value
      };
    }

    switch (tokens[0]) {
      case 'option':
        tokens.shift();
        var hasBracket = tokens[0] === '(';
        if (hasBracket) tokens.shift();
        name = tokens.shift();

        if (hasBracket) {
          if (tokens[0] !== ')') throw new Error('Expected ) but found ' + tokens[0]);
          tokens.shift();
        }

        break;

      case '=':
        tokens.shift();
        if (name === null) throw new Error('Expected key for option with value: ' + tokens[0]);
        value = parse(tokens.shift());

        if (name === 'optimize_for' && !/^(SPEED|CODE_SIZE|LITE_RUNTIME)$/.test(value)) {
          throw new Error('Unexpected value for option optimize_for: ' + value);
        } else if (value === '{') {
          // option foo = {bar: baz}
          value = onoptionMap(tokens);
        }

        break;

      default:
        throw new Error('Unexpected token in option: ' + tokens[0]);
    }
  }
};

var onoptionMap = function (tokens) {
  var parse = function (value) {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value.replace(/^"+|"+$/gm, '');
  };

  var map = {};

  while (tokens.length) {
    if (tokens[0] === '}') {
      tokens.shift();
      return map;
    }

    var hasBracket = tokens[0] === '(';
    if (hasBracket) tokens.shift();
    var key = tokens.shift();

    if (hasBracket) {
      if (tokens[0] !== ')') throw new Error('Expected ) but found ' + tokens[0]);
      tokens.shift();
    }

    var value = null;

    switch (tokens[0]) {
      case ':':
        if (map[key] !== undefined) throw new Error('Duplicate option map key ' + key);
        tokens.shift();
        value = parse(tokens.shift());

        if (value === '{') {
          // option foo = {bar: baz}
          value = onoptionMap(tokens);
        }

        map[key] = value;
        break;

      case '{':
        tokens.shift();
        value = onoptionMap(tokens);
        if (map[key] === undefined) map[key] = [];
        if (!Array.isArray(map[key])) throw new Error('Duplicate option map key ' + key);
        map[key].push(value);
        break;

      default:
        throw new Error('Unexpected token in option map: ' + tokens[0]);
    }
  }

  throw new Error('No closing tag for option map');
};

var onimport = function (tokens) {
  tokens.shift();
  var file = tokens.shift().replace(/^"+|"+$/gm, '');
  if (tokens[0] !== ';') throw new Error('Unexpected token: ' + tokens[0] + '. Expected ";"');
  tokens.shift();
  return file;
};

var onservice = function (tokens) {
  tokens.shift();
  var service = {
    name: tokens.shift(),
    methods: [],
    options: {}
  };
  if (tokens[0] !== '{') throw new Error('Expected { but found ' + tokens[0]);
  tokens.shift();

  while (tokens.length) {
    if (tokens[0] === '}') {
      tokens.shift(); // there goes optional semicolon after the enclosing "}"

      if (tokens[0] === ';') tokens.shift();
      return service;
    }

    switch (tokens[0]) {
      case 'option':
        var opt = onoption(tokens);
        if (service.options[opt.name] !== undefined) throw new Error('Duplicate option ' + opt.name);
        service.options[opt.name] = opt.value;
        break;

      case 'rpc':
        service.methods.push(onrpc(tokens));
        break;

      default:
        throw new Error('Unexpected token in service: ' + tokens[0]);
    }
  }

  throw new Error('No closing tag for service');
};

var onrpc = function (tokens) {
  tokens.shift();
  var rpc = {
    name: tokens.shift(),
    input_type: null,
    output_type: null,
    client_streaming: false,
    server_streaming: false,
    options: {}
  };
  if (tokens[0] !== '(') throw new Error('Expected ( but found ' + tokens[0]);
  tokens.shift();

  if (tokens[0] === 'stream') {
    tokens.shift();
    rpc.client_streaming = true;
  }

  rpc.input_type = tokens.shift();
  if (tokens[0] !== ')') throw new Error('Expected ) but found ' + tokens[0]);
  tokens.shift();
  if (tokens[0] !== 'returns') throw new Error('Expected returns but found ' + tokens[0]);
  tokens.shift();
  if (tokens[0] !== '(') throw new Error('Expected ( but found ' + tokens[0]);
  tokens.shift();

  if (tokens[0] === 'stream') {
    tokens.shift();
    rpc.server_streaming = true;
  }

  rpc.output_type = tokens.shift();
  if (tokens[0] !== ')') throw new Error('Expected ) but found ' + tokens[0]);
  tokens.shift();

  if (tokens[0] === ';') {
    tokens.shift();
    return rpc;
  }

  if (tokens[0] !== '{') throw new Error('Expected { but found ' + tokens[0]);
  tokens.shift();

  while (tokens.length) {
    if (tokens[0] === '}') {
      tokens.shift(); // there goes optional semicolon after the enclosing "}"

      if (tokens[0] === ';') tokens.shift();
      return rpc;
    }

    if (tokens[0] === 'option') {
      var opt = onoption(tokens);
      if (rpc.options[opt.name] !== undefined) throw new Error('Duplicate option ' + opt.name);
      rpc.options[opt.name] = opt.value;
    } else {
      throw new Error('Unexpected token in rpc options: ' + tokens[0]);
    }
  }

  throw new Error('No closing tag for rpc');
};

var parse = function (buf) {
  var tokens = tokenize(buf.toString()); // check for isolated strings in tokens by looking for opening quote

  for (var i = 0; i < tokens.length; i++) {
    if (/^(\"|\')([^\'\"]*)$/.test(tokens[i])) {
      var j;

      if (tokens[i].length === 1) {
        j = i + 1;
      } else {
        j = i;
      } // look ahead for the closing quote and collapse all
      // in-between tokens into a single token


      for (j; j < tokens.length; j++) {
        if (/^([^\'\"]*)(\"|\')$/.test(tokens[j])) {
          tokens = tokens.slice(0, i).concat(tokens.slice(i, j + 1).join('')).concat(tokens.slice(j + 1));
          break;
        }
      }
    }
  }

  var schema = {
    syntax: 3,
    package: null,
    imports: [],
    enums: [],
    messages: [],
    options: {},
    extends: []
  };
  var firstline = true;

  while (tokens.length) {
    switch (tokens[0]) {
      case 'package':
        schema.package = onpackagename(tokens);
        break;

      case 'syntax':
        if (!firstline) throw new Error('Protobuf syntax version should be first thing in file');
        schema.syntax = onsyntaxversion(tokens);
        break;

      case 'message':
        schema.messages.push(onmessage(tokens));
        break;

      case 'enum':
        schema.enums.push(onenum(tokens));
        break;

      case 'option':
        var opt = onoption(tokens);
        if (schema.options[opt.name]) throw new Error('Duplicate option ' + opt.name);
        schema.options[opt.name] = opt.value;
        break;

      case 'import':
        schema.imports.push(onimport(tokens));
        break;

      case 'extend':
        schema.extends.push(onextend(tokens));
        break;

      case 'service':
        if (!schema.services) schema.services = [];
        schema.services.push(onservice(tokens));
        break;

      default:
        throw new Error('Unexpected token: ' + tokens[0]);
    }

    firstline = false;
  } // now iterate over messages and propagate extends


  schema.extends.forEach(function (ext) {
    schema.messages.forEach(function (msg) {
      if (msg.name === ext.name) {
        ext.message.fields.forEach(function (field) {
          if (!msg.extensions || field.tag < msg.extensions.from || field.tag > msg.extensions.to) {
            throw new Error(msg.name + ' does not declare ' + field.tag + ' as an extension number');
          }

          msg.fields.push(field);
        });
      }
    });
  });
  return schema;
};

module.exports = parse;

/***/ }),

/***/ "./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/stringify.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/stringify.js ***!
  \******************************************************************************************/
/***/ (function(module) {

var onfield = function (f, result) {
  var prefix = f.repeated ? 'repeated' : f.required ? 'required' : 'optional';
  if (f.type === 'map') prefix = 'map<' + f.map.from + ',' + f.map.to + '>';
  if (f.oneof) prefix = '';
  var opts = Object.keys(f.options || {}).map(function (key) {
    return key + ' = ' + f.options[key];
  }).join(',');
  if (opts) opts = ' [' + opts + ']';
  result.push((prefix ? prefix + ' ' : '') + (f.map === 'map' ? '' : f.type + ' ') + f.name + ' = ' + f.tag + opts + ';');
  return result;
};

var onmessage = function (m, result) {
  result.push('message ' + m.name + ' {');
  if (!m.enums) m.enums = [];
  m.enums.forEach(function (e) {
    result.push(onenum(e, []));
  });
  if (!m.messages) m.messages = [];
  m.messages.forEach(function (m) {
    result.push(onmessage(m, []));
  });
  var oneofs = {};
  if (!m.fields) m.fields = [];
  m.fields.forEach(function (f) {
    if (f.oneof) {
      if (!oneofs[f.oneof]) oneofs[f.oneof] = [];
      oneofs[f.oneof].push(onfield(f, []));
    } else {
      result.push(onfield(f, []));
    }
  });
  Object.keys(oneofs).forEach(function (n) {
    oneofs[n].unshift('oneof ' + n + ' {');
    oneofs[n].push('}');
    result.push(oneofs[n]);
  });
  result.push('}', '');
  return result;
};

var onenum = function (e, result) {
  result.push('enum ' + e.name + ' {');
  if (!e.options) e.options = {};
  var options = onoption(e.options, []);

  if (options.length > 1) {
    result.push(options.slice(0, -1));
  }

  Object.keys(e.values).map(function (v) {
    var val = onenumvalue(e.values[v]);
    result.push([v + ' = ' + val + ';']);
  });
  result.push('}', '');
  return result;
};

var onenumvalue = function (v, result) {
  var opts = Object.keys(v.options || {}).map(function (key) {
    return key + ' = ' + v.options[key];
  }).join(',');
  if (opts) opts = ' [' + opts + ']';
  var val = v.value + opts;
  return val;
};

var onoption = function (o, result) {
  var keys = Object.keys(o);
  keys.forEach(function (option) {
    var v = o[option];
    if (~option.indexOf('.')) option = '(' + option + ')';
    var type = typeof v;

    if (type === 'object') {
      v = onoptionMap(v, []);
      if (v.length) result.push('option ' + option + ' = {', v, '};');
    } else {
      if (type === 'string' && option !== 'optimize_for') v = '"' + v + '"';
      result.push('option ' + option + ' = ' + v + ';');
    }
  });

  if (keys.length > 0) {
    result.push('');
  }

  return result;
};

var onoptionMap = function (o, result) {
  var keys = Object.keys(o);
  keys.forEach(function (k) {
    var v = o[k];
    var type = typeof v;

    if (type === 'object') {
      if (Array.isArray(v)) {
        v.forEach(function (v) {
          v = onoptionMap(v, []);
          if (v.length) result.push(k + ' {', v, '}');
        });
      } else {
        v = onoptionMap(v, []);
        if (v.length) result.push(k + ' {', v, '}');
      }
    } else {
      if (type === 'string') v = '"' + v + '"';
      result.push(k + ': ' + v);
    }
  });
  return result;
};

var onservices = function (s, result) {
  result.push('service ' + s.name + ' {');
  if (!s.options) s.options = {};
  onoption(s.options, result);
  if (!s.methods) s.methods = [];
  s.methods.forEach(function (m) {
    result.push(onrpc(m, []));
  });
  result.push('}', '');
  return result;
};

var onrpc = function (rpc, result) {
  var def = 'rpc ' + rpc.name + '(';
  if (rpc.client_streaming) def += 'stream ';
  def += rpc.input_type + ') returns (';
  if (rpc.server_streaming) def += 'stream ';
  def += rpc.output_type + ')';
  if (!rpc.options) rpc.options = {};
  var options = onoption(rpc.options, []);

  if (options.length > 1) {
    result.push(def + ' {', options.slice(0, -1), '}');
  } else {
    result.push(def + ';');
  }

  return result;
};

var indent = function (lvl) {
  return function (line) {
    if (Array.isArray(line)) return line.map(indent(lvl + '  ')).join('\n');
    return lvl + line;
  };
};

module.exports = function (schema) {
  var result = [];
  result.push('syntax = "proto' + schema.syntax + '";', '');
  if (schema.package) result.push('package ' + schema.package + ';', '');
  if (!schema.options) schema.options = {};
  onoption(schema.options, result);
  if (!schema.enums) schema.enums = [];
  schema.enums.forEach(function (e) {
    onenum(e, result);
  });
  if (!schema.messages) schema.messages = [];
  schema.messages.forEach(function (m) {
    onmessage(m, result);
  });

  if (schema.services) {
    schema.services.forEach(function (s) {
      onservices(s, result);
    });
  }

  return result.map(indent('')).join('\n');
};

/***/ }),

/***/ "./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/tokenize.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_protocol-buffers-schema@3.1.0@protocol-buffers-schema/tokenize.js ***!
  \*****************************************************************************************/
/***/ (function(module) {

module.exports = function (sch) {
  var noComments = function (line) {
    var i = line.indexOf('//');
    return i > -1 ? line.slice(0, i) : line;
  };

  var noMultilineComments = function () {
    var inside = false;
    return function (token) {
      if (token === '/*') {
        inside = true;
        return false;
      }

      if (token === '*/') {
        inside = false;
        return false;
      }

      return !inside;
    };
  };

  var trim = function (line) {
    return line.trim();
  };

  return sch.replace(/([;,{}\(\)=\:\[\]<>]|\/\*|\*\/)/g, ' $1 ').split(/\n/).map(trim).filter(Boolean).map(noComments).map(trim).filter(Boolean).join('\n').split(/\s+|\n+/gm).filter(noMultilineComments());
};

/***/ }),

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": function() { return /* binding */ Api; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/createClass.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! axios */ "./node_modules/_axios@1.3.6@axios/lib/axios.js");
/* harmony import */ var _proto_proto__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../proto/proto */ "./src/proto/proto.js");
/* harmony import */ var _proto_proto__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_proto_proto__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _proto_TLFtpUpload__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../proto/TLFtpUpload */ "./src/proto/TLFtpUpload.js");
/* harmony import */ var _proto_TLFtpUpload__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_proto_TLFtpUpload__WEBPACK_IMPORTED_MODULE_37__);









































 // const pbjs = require('pbjs');

var GeneralResponse = _proto_proto__WEBPACK_IMPORTED_MODULE_36___default().lookup('TLBluetooth.GeneralResponse');
var WebResponse = _proto_proto__WEBPACK_IMPORTED_MODULE_36___default().lookup('TLBluetooth.WebResponse');
var MOCK = false;
axios__WEBPACK_IMPORTED_MODULE_38__["default"].defaults.headers.post["Content-Type"] = "application/x-protobuf";

var Api = /*#__PURE__*/function () {
  function Api() {
    (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Api);
  }

  (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Api, null, [{
    key: "_freeQequest",
    value: function _freeQequest(url, requestBuffer) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "arraybuffer";
      var promise = new Promise(function (resolve) {
        var baseUrl = url;
        axios__WEBPACK_IMPORTED_MODULE_38__["default"].request({
          baseURL: baseUrl,
          method: "POST",
          data: requestBuffer,
          responseType: type,
          // arraybuffer json
          timeout: 15 * 1000
        }).then(function (res) {
          resolve(res);
        })["catch"](function (error) {
          console.log(error);
          var buf = new Uint8Array(error.response.data);
          var deMessage = GeneralResponse.decode(buf);
          console.log(deMessage);
          resolve([deMessage, error.response.status]);
        });
      });
      return promise;
    } // 公共发送请求体

  }, {
    key: "_request",
    value: function _request(url, requestBuffer) {
      var resMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WebResponse;
      var promise = new Promise(function (resolve) {
        var baseUrl = url;
        axios__WEBPACK_IMPORTED_MODULE_38__["default"].request({
          baseURL: baseUrl,
          method: "POST",
          data: requestBuffer,
          responseType: MOCK ? "json" : 'arraybuffer',
          timeout: 5 * 1000
        }).then(function (res) {
          var buf = new Uint8Array(res.data);
          var deMessage = null;

          if (res.status === 200) {
            // var proto: any = protoRoot.lookup(resMode);
            deMessage = resMode.decode(buf);
          } else {
            deMessage = GeneralResponse.decode(buf);
          }

          resolve(deMessage);
        })["catch"](function (error) {});
      });
      return promise;
    } // 序列化数据

  }, {
    key: "getUnit8Data",
    value: function () {
      var _getUnit8Data = (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/(0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee(payload, proto, operation) {
        var protobuf, httpUserInfo, message, buffer, requestBuffer;
        return (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                protobuf = _proto_TLFtpUpload__WEBPACK_IMPORTED_MODULE_37___default().lookup(proto);
                httpUserInfo = {
                  userName: "superman",
                  userGuid: "8e2d5151-5415-495e-af14-4bdcef941e06"
                };
                payload['userInfo'] = httpUserInfo;
                console.warn("未编译前数据 --->", payload);
                message = protobuf.create(payload);
                buffer = protobuf.encode(message).finish();

                if (!(operation === true)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", buffer);

              case 8:
                requestBuffer = new Uint8Array((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(buffer)).buffer;
                return _context.abrupt("return", requestBuffer);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getUnit8Data(_x, _x2, _x3) {
        return _getUnit8Data.apply(this, arguments);
      }

      return getUnit8Data;
    }() // 序列化数据 2

  }, {
    key: "getUnit8Data2",
    value: function getUnit8Data2(payload, protobuf) {
      payload.userInfo = {
        userName: "superman",
        userGuid: "26ad5932-f192-49a4-8242-b5772f307cbd",
        lang: "zh"
      };
      var message = protobuf.create(payload);
      var buffer = protobuf.encode(message).finish();
      var requestBuffer = new Uint8Array((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(buffer)).buffer;
      return requestBuffer;
    }
  }]);

  return Api;
}();


/*
const pbjs = require('pbjs');

export const schema = pbjs.parseSchema(`

        enum PlatformType{
            PlatformUnknown             = 0;
            WebBrowser                  = 1; //Web Browser
            Android                     = 2; //Android
            IOS                         = 3; //Ios
        }

        message VerifyCodeMessage{
            string                    verifyId       = 1;//
            string                    base64Blob     = 2;//When for Verify the result, no need Write base64Blob
            string                    verifyValue    = 3;//When Request,represent user write code,When response,success or fail
        }

        message UserLogInRequest{
            string                   userName       = 1;
            string                   userPwd        = 2;//Use Md5 Encryption
            PlatformType             platformType      = 3;//Platform Type
            VerifyCodeMessage        verifyMessage  = 4;//Verify Code
            string                   wechatid        = 5;//wechatid
        }
`).compile();


const buffer = schema.encodeUserLogInRequest({userName: "111", userPwd: "1111", platformType: "1", verifyMessage: {}, wechatid: "111"});

console.log(buffer);
const message = schema.decodeUserLogInRequest(buffer);
console.log(message);

*/

/***/ }),

/***/ "./src/api/configApiBase.js":
/*!**********************************!*\
  !*** ./src/api/configApiBase.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ configApiBase; }
/* harmony export */ });
function configApiBase() {
  var modelApi = true;
  var apiBase = {
    url: "",
    url2: "",
    userName: "superman",
    userGuid: "8e2d5151-5415-495e-af14-4bdcef941e06"
  };

  function baseFn() {
    if (modelApi) {
      apiBase.url = "";
      apiBase.url2 = "http://116.247.83.156:9341";
    } else {
      apiBase.url = "";
      apiBase.url2 = "http://116.247.83.156:9341";
    }
  }

  baseFn();
  return {
    apiBase: apiBase
  };
}

/***/ }),

/***/ "./src/api/http.js":
/*!*************************!*\
  !*** ./src/api/http.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetDevicePictureUploadStrategy": function() { return /* binding */ GetDevicePictureUploadStrategy; },
/* harmony export */   "GetFileContent": function() { return /* binding */ GetFileContent; },
/* harmony export */   "Login": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/typeof.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.array-buffer.constructor.js */ "./node_modules/core-js/modules/es.array-buffer.constructor.js");
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @/api/api.js */ "./src/api/api.js");
/* harmony import */ var _api_configApiBase__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @/api/configApiBase */ "./src/api/configApiBase.js");
/* harmony import */ var _api_proto__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @/api/proto */ "./src/api/proto.js");














































/* eslint-disable no-redeclare */

/* eslint-disable no-unused-vars */





var pbjs = __webpack_require__(/*! pbjs */ "./node_modules/_pbjs@0.0.14@pbjs/index.js");

var _configApiBase = (0,_api_configApiBase__WEBPACK_IMPORTED_MODULE_44__["default"])(),
    apiBase = _configApiBase.apiBase;

var protobuf = __webpack_require__(/*! @/weichatPb/protobuf.js */ "./src/weichatPb/protobuf.js");

var TLFtpUpload = __webpack_require__(/*! @/proto/TLFtpUpload.js */ "./src/proto/TLFtpUpload.js");

var tlcsprotobufRoot = protobuf.Root.fromJSON(TLFtpUpload);
var GetDevicePictureUploadStrategyRequest = tlcsprotobufRoot.lookupType("GetDevicePictureUploadStrategyRequest");
var GetDevicePictureUploadStrategyResponse = tlcsprotobufRoot.lookupType("GetDevicePictureUploadStrategyResponse");
var msgArr = [];
var match = /message (\S*) {/; // 控制如果生成相同的message 名称，不进行再次添加

var filterMessage = function filterMessage(data, str) {
  var bool = false;
  data.filter(function (value) {
    var message = value.match(match)[1];

    if (message == str) {
      bool = true;
    }
  });
  return bool;
}; // 数组内使用 message时，动态生成 message 名称


function randCode() {
  var str = "";

  for (var i = 0; i < 10; i++) {
    str += String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt(0));
  }

  return str.slice(0, 1).toUpperCase() + str.slice(1);
} // 处理 数组结构


var filterArr = function filterArr(data, callBack) {
  var type = "string";
  var strMsg = "";
  var isFirst = true;

  if (data.length > 0) {
    data.forEach(function (item, index) {
      if ((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_6__["default"])(item) == "object") {
        if (isFirst) {
          var random = "Ass".concat(randCode());
          strMsg = "message ".concat(random, " {").concat(encodeMessage(item, callBack), "}");
          callBack(strMsg);
          type = random;
          isFirst = true;
        }
      } else {
        type = typeof item == "number" ? "uint32" : "string";
      }
    });
  }

  return type;
}; // 区分值生成不同的 key value


function encodeMessage(data, callBack) {
  var strProto = "";
  var num = 1;

  for (var i in data) {
    if ((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_6__["default"])(data[i]) == "object") {
      if (data[i] instanceof Array) {
        strProto += "repeated ".concat(filterArr(data[i], callBack), " ").concat(i, " = ").concat(num, ";");
      } else {
        var strMsg = "";
        var UpperCaseStr = i.slice(0, 1).toUpperCase() + i.slice(1);
        strMsg += "message ".concat(UpperCaseStr, " {").concat(encodeMessage(data[i], callBack), "}");

        if (!filterMessage(msgArr, UpperCaseStr)) {
          callBack(strMsg);
        }

        strProto += "".concat(UpperCaseStr, " ").concat(i, " = ").concat(num, ";");
      }
    } else if (typeof data[i] == "number") {
      strProto += "uint32 ".concat(i, " = ").concat(num, ";");
    } else if (typeof data[i] == "string") {
      strProto += "string ".concat(i, " = ").concat(num, ";");
    } else if (typeof data[i] == "boolean") {
      strProto += "bool ".concat(i, " = ").concat(num, ";");
    }

    num++;
  }

  return strProto;
} // 动态生成 message


function encodeMsg(data) {
  var msgArr = [];
  var message = encodeMessage(data, function (msg) {
    msgArr.push(msg);
  });
  return {
    msgArr: msgArr,
    message: message
  };
}

function Login(_x, _x2, _x3) {
  return _Login.apply(this, arguments);
}

function _Login() {
  _Login = (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/(0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee2(url2, reqData, resData) {
    var url, data, decodeData, encode, strProto, schema, buffer, res, decode, decodeStrProto, decodeSchema, buf, decodeBuffer;
    return (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = url2;
            data = (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, reqData);
            decodeData = (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__["default"])({}, resData); // 序列化

            encode = encodeMsg(data);
            strProto = "".concat(encode.msgArr.join(" "), " message Demo { ").concat(encode.message, "}"); // console.log(pbjs)

            schema = pbjs.parseSchema("".concat(strProto)).compile();
            buffer = new Uint8Array(schema.encodeDemo(data)).buffer;
            _context2.next = 9;
            return _api_api_js__WEBPACK_IMPORTED_MODULE_43__.Api._freeQequest(url, buffer);

          case 9:
            res = _context2.sent;
            console.log(res.data);

            if (!(res.data instanceof ArrayBuffer)) {
              _context2.next = 25;
              break;
            } // 反序列化


            decode = encodeMsg(decodeData);
            decodeStrProto = " ".concat(decode.msgArr.join(" "), " message Demo { ").concat(decode.message, "}");
            decodeSchema = pbjs.parseSchema("".concat(decodeStrProto)).compile();

            if (!(res.status == 200)) {
              _context2.next = 22;
              break;
            }

            buf = new Uint8Array(res.data);
            decodeBuffer = decodeSchema.decodeDemo(buf);
            console.log(decodeBuffer);
            return _context2.abrupt("return", {
              decodeBuffer: decodeBuffer,
              status: res.status
            });

          case 22:
            return _context2.abrupt("return", {
              decodeBuffer: res[0],
              status: res[1]
            });

          case 23:
            _context2.next = 26;
            break;

          case 25:
            return _context2.abrupt("return", {
              decodeBuffer: res[0],
              status: res[1]
            });

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _Login.apply(this, arguments);
}

function GetFileContent(_x4) {
  return _GetFileContent.apply(this, arguments);
}

function _GetFileContent() {
  _GetFileContent = (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/(0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee3(data) {
    var url, requestBuffer, res;
    return (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = apiBase.url + "/api/protobuf";
            _context3.next = 3;
            return _api_api_js__WEBPACK_IMPORTED_MODULE_43__.Api.getUnit8Data(data, 'TLBluetooth.DeviceFileContentRequest');

          case 3:
            requestBuffer = _context3.sent;
            _context3.next = 6;
            return _api_api_js__WEBPACK_IMPORTED_MODULE_43__.Api._request(url, requestBuffer, 'TLBluetooth.webresponse');

          case 6:
            res = _context3.sent;
            console.log(res);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _GetFileContent.apply(this, arguments);
}

var GetDevicePictureUploadStrategy = /*#__PURE__*/function () {
  var _ref = (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/(0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee(data) {
    var url, requestBuffer, res;
    return (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "http://192.168.100.50:9337/GetDevicePictureUploadStrategy";
            _context.next = 3;
            return _api_api_js__WEBPACK_IMPORTED_MODULE_43__.Api.getUnit8Data2(data, GetDevicePictureUploadStrategyRequest);

          case 3:
            requestBuffer = _context.sent;
            _context.next = 6;
            return _api_api_js__WEBPACK_IMPORTED_MODULE_43__.Api._request(url, requestBuffer, GetDevicePictureUploadStrategyResponse);

          case 6:
            res = _context.sent;
            console.log(res);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function GetDevicePictureUploadStrategy(_x5) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/api/proto.js":
/*!**************************!*\
  !*** ./src/api/proto.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var _typeof = (__webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js")["default"]);

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js"); // export const proto = ``;


var msgArr = [];
var match = /message (\\S*) {/; // 控制如果生成相同的message 名称，不进行再次添加

var filterMessage = function filterMessage(data, str) {
  var bool = false;
  data.filter(function (value) {
    var message = value.match(match)[1];

    if (message == str) {
      bool = true;
    }
  });
  return bool;
}; // 数组内使用 message时，动态生成 message 名称


function randCode() {
  var str = "";

  for (var i = 0; i < 10; i++) {
    str += String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt(0));
  }

  return str.slice(0, 1).toUpperCase() + str.slice(1);
} // 处理 数组结构


var filterArr = function filterArr(data, callBack) {
  var type = "string";
  var strMsg = "";
  var isFirst = true;

  if (data.length > 0) {
    data.forEach(function (item) {
      if (_typeof(item) == "object") {
        if (isFirst) {
          var random = 'Ass' + randCode();
          strMsg = 'message ' + random + ' {' + encodeMessage(item, callBack) + '}';
          callBack(strMsg);
          type = random;
          isFirst = true;
        }
      } else {
        type = typeof item == "number" ? "uint32" : "string";
      }
    });
  }

  return type;
}; // 区分值生成不同的key value


function encodeMessage(data, callBack) {
  var strProto = "";
  var num = 1;

  for (var i in data) {
    if (_typeof(data[i]) == "object") {
      if (data[i] instanceof Array) {
        strProto += 'repeated ' + filterArr(data[i], callBack) + ' ' + i + ' = ' + num + ';';
      } else {
        var strMsg = "";
        var UpperCaseStr = i.slice(0, 1).toUpperCase() + i.slice(1);
        strMsg += 'message ' + UpperCaseStr + ' { ' + encodeMessage(data[i], callBack) + '}';

        if (!filterMessage(msgArr, UpperCaseStr)) {
          callBack(strMsg);
        }

        strProto += UpperCaseStr + '  ' + i + '  ' + num + ';';
      }
    } else if (typeof data[i] == "number") {
      strProto += 'uint32 ' + i + ' = ' + num + ';';
    } else if (typeof data[i] == "string") {
      strProto += 'string ' + i + ' = ' + num + ';';
    } else if (typeof data[i] == "boolean") {
      strProto += 'bool ' + i + ' = ' + num + ';';
    }

    num++;
  }

  return strProto;
} // 动态生成 message


exports.encodeMsg = function (data) {
  var msgArr = [];
  var message = encodeMessage(data, function (msg) {
    msgArr.push(msg);
  });
  var strProto = msgArr.join(" ") + ' message  Demo { ' + message + '}';
  return {
    msgArr: msgArr,
    message: message,
    strProto: strProto
  };
};

/***/ }),

/***/ "./src/proto/TLFtpUpload.js":
/*!**********************************!*\
  !*** ./src/proto/TLFtpUpload.js ***!
  \**********************************/
/***/ (function(module) {

module.exports = {
  "nested": {
    "TLFtpUpload": {
      "nested": {
        "ProtoCmdId": {
          "values": {
            "ProtoCmdBase": 0,
            "UserLogin": 30000,
            "PictureUpload": 30001,
            "SearchPictureUploadResult": 30002,
            "SearchPictureUploadDevices": 30003,
            "GetUserDevices": 30004,
            "FtpServerInfo": 30005,
            "FtpUploadPriority": 30006,
            "SearchFtpPicture": 30007
          }
        },
        "UserLoginRequest": {
          "fields": {
            "userName": {
              "type": "string",
              "id": 1
            },
            "userPwd": {
              "type": "string",
              "id": 2
            },
            "language": {
              "type": "string",
              "id": 3
            }
          }
        },
        "UserLoginResponse": {
          "fields": {
            "sessionId": {
              "type": "string",
              "id": 1
            },
            "userType": {
              "type": "uint32",
              "id": 2
            },
            "serverTimestamp": {
              "type": "uint64",
              "id": 3
            },
            "formatTimestamp": {
              "type": "string",
              "id": 4
            },
            "userName": {
              "type": "string",
              "id": 5
            },
            "companyName": {
              "type": "string",
              "id": 6
            }
          }
        },
        "GeneralResponse": {
          "fields": {
            "errType": {
              "type": "uint32",
              "id": 1
            },
            "requestCmdId": {
              "type": "uint32",
              "id": 2
            },
            "errTime": {
              "type": "string",
              "id": 3
            },
            "appType": {
              "type": "string",
              "id": 4
            },
            "errDes": {
              "type": "string",
              "id": 5
            },
            "errCode": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "DataResponse": {
          "fields": {
            "data": {
              "type": "string",
              "id": 1
            }
          }
        },
        "HttpUserInfo": {
          "fields": {
            "userName": {
              "type": "string",
              "id": 1
            },
            "userGuid": {
              "type": "string",
              "id": 2
            }
          }
        },
        "UploadPriority": {
          "values": {
            "PriorityHistory": 0,
            "PriorityCurrentTime": 1
          }
        },
        "OperatorAction": {
          "values": {
            "ActionUnknown": 0,
            "ActionAdd": 1,
            "ActionModify": 2,
            "ActionDelete": 3
          }
        },
        "PictureType": {
          "values": {
            "PictureIO": 0,
            "PictureAI": 1,
            "PictureOverSpeeding": 2,
            "PictureFatigueDriving": 3
          }
        },
        "NetworkType": {
          "values": {
            "UnknownType": 0,
            "WiFiType": 1,
            "Ethernet": 2,
            "ThreeFourG": 3
          }
        },
        "SetOperatorState": {
          "values": {
            "Success": 0,
            "Fail": 1,
            "NotReplay": 999
          }
        },
        "DayTimeRange": {
          "fields": {
            "startDay": {
              "type": "string",
              "id": 1
            },
            "endDay": {
              "type": "string",
              "id": 2
            }
          }
        },
        "HourTimeRange": {
          "fields": {
            "startHour": {
              "type": "string",
              "id": 1
            },
            "endHour": {
              "type": "string",
              "id": 2
            }
          }
        },
        "TimeRange": {
          "fields": {
            "dayTime": {
              "type": "DayTimeRange",
              "id": 1
            },
            "hourTime": {
              "type": "HourTimeRange",
              "id": 2
            }
          }
        },
        "OnePictureStrategy": {
          "fields": {
            "serverIp": {
              "type": "string",
              "id": 1
            },
            "serverPort": {
              "type": "uint32",
              "id": 2
            },
            "pictureType": {
              "type": "PictureType",
              "id": 3
            },
            "uploadPriority": {
              "type": "UploadPriority",
              "id": 4
            },
            "chnArray": {
              "rule": "repeated",
              "type": "uint32",
              "id": 5
            },
            "ioNumberArray": {
              "rule": "repeated",
              "type": "uint32",
              "id": 6
            },
            "pictureTime": {
              "type": "TimeRange",
              "id": 7
            },
            "uploadTime": {
              "type": "HourTimeRange",
              "id": 8
            },
            "networkTypeArray": {
              "rule": "repeated",
              "type": "NetworkType",
              "id": 9
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 10
            }
          }
        },
        "GetDevicePictureUploadStrategyRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            }
          }
        },
        "GetOnlineDeviceFtpConfigResponse": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "pictureStrategyArray": {
              "rule": "repeated",
              "type": "OnePictureStrategy",
              "id": 2
            }
          }
        },
        "DevicePictureUploadStrategy": {
          "fields": {
            "pictureStrategyArray": {
              "rule": "repeated",
              "type": "OnePictureStrategy",
              "id": 1
            },
            "uploadStrategyName": {
              "type": "string",
              "id": 2
            }
          }
        },
        "GetDevicePictureUploadStrategyResponse": {
          "fields": {
            "devPictureUploadStrategy": {
              "rule": "repeated",
              "type": "DevicePictureUploadStrategy",
              "id": 1
            }
          }
        },
        "SetDevicePictureUploadStrategyRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "pictureStrategyArray": {
              "rule": "repeated",
              "type": "OnePictureStrategy",
              "id": 2
            },
            "DeviceIdArray": {
              "rule": "repeated",
              "type": "string",
              "id": 3
            },
            "uploadStrategyName": {
              "type": "string",
              "id": 4
            },
            "action": {
              "type": "OperatorAction",
              "id": 5
            }
          }
        },
        "SearchSetDeviceUploadRecordRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "startTime": {
              "type": "string",
              "id": 3
            },
            "endTime": {
              "type": "string",
              "id": 4
            }
          }
        },
        "OneSetDeviceUploadRecordInfo": {
          "fields": {
            "setRecordName": {
              "type": "string",
              "id": 1
            },
            "operator": {
              "type": "string",
              "id": 2
            },
            "operatorTime": {
              "type": "string",
              "id": 3
            },
            "operatorIp": {
              "type": "string",
              "id": 4
            },
            "operatorContent": {
              "type": "SetDevicePictureUploadStrategyRequest",
              "id": 5
            },
            "totalDevNumber": {
              "type": "uint32",
              "id": 6
            },
            "successDevNumber": {
              "type": "uint32",
              "id": 7
            },
            "failDevNumber": {
              "type": "uint32",
              "id": 8
            },
            "notReturnDevNumber": {
              "type": "uint32",
              "id": 9
            },
            "serialNumber": {
              "type": "uint32",
              "id": 10
            }
          }
        },
        "SearchSetDeviceUploadRecordResponse": {
          "fields": {
            "setDevUploadRecordArray": {
              "rule": "repeated",
              "type": "OneSetDeviceUploadRecordInfo",
              "id": 1
            }
          }
        },
        "SearchSetResultDevicesRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "setRecordName": {
              "type": "string",
              "id": 2
            },
            "serialNumber": {
              "type": "uint32",
              "id": 3
            },
            "resultArray": {
              "rule": "repeated",
              "type": "SetOperatorState",
              "id": 4
            }
          }
        },
        "OneDeviceInfo": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "deviceName": {
              "type": "string",
              "id": 2
            },
            "devReturnTime": {
              "type": "string",
              "id": 3
            },
            "setState": {
              "type": "SetOperatorState",
              "id": 4
            }
          }
        },
        "SearchSetResultDevicesResponse": {
          "fields": {
            "deviceIdArray": {
              "rule": "repeated",
              "type": "OneDeviceInfo",
              "id": 1
            }
          }
        },
        "GetUserDevicesForTL": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            }
          }
        },
        "TLMainServerFtpServerInfo": {
          "fields": {
            "enableDomain": {
              "type": "uint32",
              "id": 1
            },
            "ipAddress": {
              "type": "string",
              "id": 2
            },
            "port": {
              "type": "uint32",
              "id": 3
            },
            "domainName": {
              "type": "string",
              "id": 4
            },
            "userName": {
              "type": "string",
              "id": 5
            },
            "userPassword": {
              "type": "string",
              "id": 6
            },
            "intranetIp": {
              "type": "string",
              "id": 7
            },
            "intranetPort": {
              "type": "uint32",
              "id": 8
            }
          }
        },
        "OneFtpServerInfo": {
          "fields": {
            "serverId": {
              "type": "uint32",
              "id": 1
            },
            "serverIp": {
              "type": "string",
              "id": 2
            },
            "serverPort": {
              "type": "uint32",
              "id": 3
            },
            "userName": {
              "type": "string",
              "id": 4
            },
            "userPassword": {
              "type": "string",
              "id": 5
            },
            "bUploadServer": {
              "type": "uint32",
              "id": 6
            },
            "ftpServerAlias": {
              "type": "string",
              "id": 7
            }
          }
        },
        "SearchFtpServerInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            }
          }
        },
        "SearchFtpServerInfoResponse": {
          "fields": {
            "ftpServerArray": {
              "rule": "repeated",
              "type": "OneFtpServerInfo",
              "id": 1
            }
          }
        },
        "FtpServerCurdRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "action": {
              "type": "OperatorAction",
              "id": 2
            },
            "ftpServer": {
              "type": "OneFtpServerInfo",
              "id": 3
            }
          }
        },
        "GetUploadBaseConfigRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            }
          }
        },
        "GetUploadBaseConfigResponse": {
          "fields": {
            "uploadPriorityId": {
              "type": "uint32",
              "id": 1
            },
            "uploadPriorityState": {
              "type": "UploadPriority",
              "id": 2
            }
          }
        },
        "SetUploadBaseConfigRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "uploadPriorityId": {
              "type": "uint32",
              "id": 2
            },
            "uploadPriorityState": {
              "type": "UploadPriority",
              "id": 3
            }
          }
        },
        "GetUploadFtpPictureDaysRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "ioNumber": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "searchTime": {
              "type": "string",
              "id": 4
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "GetUploadFtpPictureDaysResponse": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "pictureDays": {
              "rule": "repeated",
              "type": "string",
              "id": 2
            }
          }
        },
        "GetFtpOneDayPicturesRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "ioNumber": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "searchTime": {
              "type": "string",
              "id": 4
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "OneFileInfo": {
          "fields": {
            "fileName": {
              "type": "string",
              "id": 1
            },
            "startTime": {
              "type": "string",
              "id": 2
            },
            "endTime": {
              "type": "string",
              "id": 3
            },
            "IONumber": {
              "type": "uint32",
              "id": 4
            },
            "AVChannel": {
              "type": "uint32",
              "id": 5
            },
            "fileSize": {
              "type": "uint32",
              "id": 6
            },
            "filePath": {
              "type": "string",
              "id": 7
            },
            "fileContent": {
              "type": "string",
              "id": 8
            },
            "IOTime": {
              "type": "string",
              "id": 9
            },
            "IOEventType": {
              "type": "uint32",
              "id": 10
            },
            "PictureNo": {
              "type": "uint32",
              "id": 11
            }
          }
        },
        "GetFtpOneDayPicturesResponse": {
          "fields": {
            "picturesArray": {
              "rule": "repeated",
              "type": "OneFileInfo",
              "id": 1
            }
          }
        },
        "GetPictureContentsByTimeStampRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "ioNumber": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "startTime": {
              "type": "string",
              "id": 4
            },
            "endTime": {
              "type": "string",
              "id": 5
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "OneChannelPictureContents": {
          "fields": {
            "avChannel": {
              "type": "uint32",
              "id": 1
            },
            "picturesArray": {
              "rule": "repeated",
              "type": "OneFileInfo",
              "id": 2
            }
          }
        },
        "GetPictureContentsByTimeStampResponse": {
          "fields": {
            "picturesArray": {
              "rule": "repeated",
              "type": "OneChannelPictureContents",
              "id": 1
            }
          }
        },
        "SearchTimeRangePictureListRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "ioNumberArray": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "operator": {
              "type": "string",
              "id": 4
            },
            "startTime": {
              "type": "string",
              "id": 5
            },
            "endTime": {
              "type": "string",
              "id": 6
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 7
            }
          }
        },
        "SearchTimeRangePictureListResponse": {
          "fields": {
            "picturesArray": {
              "rule": "repeated",
              "type": "OneFileInfo",
              "id": 1
            }
          }
        },
        "TLDeviceInfo": {
          "fields": {
            "DeviceId": {
              "type": "string",
              "id": 1
            },
            "DeviceName": {
              "type": "string",
              "id": 2
            },
            "DeviceParent": {
              "type": "string",
              "id": 3
            },
            "DeviceChnNum": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "SearchDeviceInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "deviceName": {
              "type": "string",
              "id": 3
            }
          }
        },
        "SearchDeviceInfoResponse": {
          "fields": {
            "deviceInfoArray": {
              "rule": "repeated",
              "type": "TLDeviceInfo",
              "id": 1
            }
          }
        },
        "SearchTreeNodeDeviceInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "searchValue": {
              "type": "string",
              "id": 2
            }
          }
        },
        "DownloadFileParam": {
          "fields": {
            "fileName": {
              "type": "string",
              "id": 1
            },
            "filePath": {
              "type": "string",
              "id": 2
            }
          }
        },
        "DownloadMultiFtpServerPictureRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "downloadFileArray": {
              "rule": "repeated",
              "type": "DownloadFileParam",
              "id": 2
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "DownloadMultiFtpServerPictureResponse": {
          "fields": {
            "dirPath": {
              "type": "string",
              "id": 1
            },
            "fileName": {
              "type": "string",
              "id": 2
            }
          }
        },
        "TLMessageTransferRequest": {
          "fields": {
            "messageContent": {
              "type": "string",
              "id": 1
            },
            "messageCnt": {
              "type": "uint32",
              "id": 2
            },
            "deviceId": {
              "type": "string",
              "id": 3
            }
          }
        },
        "TLMessageTransferResponse": {
          "fields": {
            "errCode": {
              "type": "uint32",
              "id": 1
            },
            "responseContent": {
              "type": "string",
              "id": 2
            },
            "responseCnt": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "SearchType": {
          "values": {
            "SearchTypeUnknown": 0,
            "SearchTypeRecordFile": 1,
            "SearchTypePictureFile": 2,
            "SearchTypeUpgradeFile": 3
          }
        },
        "TLMessageGetFtpServerDevicesRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "serverId": {
              "type": "uint32",
              "id": 2
            },
            "searchFileType": {
              "type": "SearchType",
              "id": 3
            }
          }
        },
        "UploadDeviceInfo": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "deviceName": {
              "type": "string",
              "id": 2
            },
            "fileDays": {
              "rule": "repeated",
              "type": "string",
              "id": 3
            }
          }
        },
        "TLMessageGetFtpServerDevicesResponse": {
          "fields": {
            "devicesArray": {
              "rule": "repeated",
              "type": "UploadDeviceInfo",
              "id": 1
            },
            "searchFileType": {
              "type": "SearchType",
              "id": 2
            }
          }
        },
        "TLMessageGetUserFtpServerStorageInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "serverId": {
              "type": "uint32",
              "id": 2
            },
            "ftpServerInfo": {
              "type": "OneFtpServerInfo",
              "id": 3
            }
          }
        },
        "TLMessageFtpServerFileInfo": {
          "fields": {
            "fileName": {
              "type": "string",
              "id": 1
            },
            "fileSize": {
              "type": "uint64",
              "id": 2
            },
            "createTime": {
              "type": "string",
              "id": 3
            },
            "filePath": {
              "type": "string",
              "id": 4
            },
            "fileType": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "TLMessageGetFtpDirectoryFilesInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "serverId": {
              "type": "uint32",
              "id": 2
            },
            "fileName": {
              "type": "string",
              "id": 3
            },
            "filePath": {
              "type": "string",
              "id": 5
            },
            "searchFileType": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "TLMessageFilesInfoResponse": {
          "fields": {
            "filesArray": {
              "rule": "repeated",
              "type": "TLMessageFtpServerFileInfo",
              "id": 1
            },
            "totalSize": {
              "type": "uint64",
              "id": 2
            }
          }
        },
        "TLMessageDeleteFtpDirectoryFilesInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "serverId": {
              "type": "uint32",
              "id": 2
            },
            "filesArray": {
              "rule": "repeated",
              "type": "TLMessageFtpServerFileInfo",
              "id": 3
            }
          }
        },
        "SetDeleteFtpFileConfig": {
          "fields": {
            "enableAutoDeleteFile": {
              "type": "uint32",
              "id": 1
            },
            "deleteDayBefore": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "TLMessageSetDeleteFtpFileConfigRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "setDelFtpConfig": {
              "type": "SetDeleteFtpFileConfig",
              "id": 2
            }
          }
        },
        "TlcsGetDeviceWithChnTestResponse": {
          "fields": {
            "id": {
              "type": "uint64",
              "id": 1
            },
            "text": {
              "type": "string",
              "id": 2
            },
            "state": {
              "type": "string",
              "id": 3
            },
            "iconSkin": {
              "type": "string",
              "id": 4
            },
            "groupType": {
              "type": "uint32",
              "id": 5
            },
            "deviceName": {
              "type": "string",
              "id": 6
            },
            "deviceId": {
              "type": "string",
              "id": 7
            },
            "deviceMaxChn": {
              "type": "uint32",
              "id": 8
            },
            "devType": {
              "type": "uint32",
              "id": 9
            },
            "devState": {
              "type": "uint32",
              "id": 10
            },
            "chnNum": {
              "type": "uint32",
              "id": 11
            },
            "name": {
              "type": "string",
              "id": 12
            },
            "pId": {
              "type": "uint32",
              "id": 13
            },
            "attachDevId": {
              "type": "string",
              "id": 14
            }
          }
        },
        "DevicesAndGroupsMessage": {
          "fields": {
            "children": {
              "rule": "repeated",
              "type": "TlcsGetDeviceWithChnTestResponse",
              "id": 1
            }
          }
        },
        "DownloadMediaType": {
          "values": {
            "DownloadMediaTypeAVData": 0,
            "DownloadMediaTypeAudio": 1,
            "DownloadMediaTypeVideo": 2,
            "DownloadMediaTypeKeyFrame": 3,
            "DownloadMediaTypeAVGData": 4,
            "DownloadMediaTypePicture": 5,
            "DownloadMediaTypeGps": 6,
            "DownloadMediaTypeRawData": 7,
            "DownloadMediaTypeOther": 8
          }
        },
        "MediaFileSearchType": {
          "values": {
            "SearchDevice": 0,
            "DownloadServer": 1,
            "StoreServer": 2
          }
        },
        "GetMediaFilelistRequest": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "logicalChannel": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            },
            "startTime": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "endTime": {
              "rule": "repeated",
              "type": "uint32",
              "id": 4
            },
            "alarmType": {
              "rule": "repeated",
              "type": "uint32",
              "id": 5
            },
            "avType": {
              "type": "uint32",
              "id": 6
            },
            "streamType": {
              "type": "uint32",
              "id": 7
            },
            "storeType": {
              "type": "uint32",
              "id": 8
            },
            "searchFileType": {
              "type": "MediaFileSearchType",
              "id": 9
            },
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 10
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 11
            }
          }
        },
        "MediaFileInfo": {
          "fields": {
            "logicalChannel": {
              "type": "uint32",
              "id": 1
            },
            "startTime": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            },
            "endTime": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "alarmType": {
              "rule": "repeated",
              "type": "uint32",
              "id": 4
            },
            "avType": {
              "type": "uint32",
              "id": 5
            },
            "streamType": {
              "type": "uint32",
              "id": 6
            },
            "storeType": {
              "type": "uint32",
              "id": 7
            },
            "fileSize": {
              "type": "uint32",
              "id": 8
            },
            "filePath": {
              "type": "string",
              "id": 9
            },
            "fileName": {
              "type": "string",
              "id": 10
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 11
            }
          }
        },
        "GetMediaFilelistResponse": {
          "fields": {
            "devIdNum": {
              "type": "uint64",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "totalFileCount": {
              "type": "uint32",
              "id": 3
            },
            "mediaFileLists": {
              "rule": "repeated",
              "type": "MediaFileInfo",
              "id": 4
            },
            "totalPacketNum": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "DownloadMediaFileType": {
          "values": {
            "DownloadMediaFileTypeMp4": 0,
            "DownloadMediaFileTypeAvi": 1,
            "DownloadMediaFileTypeWav": 2,
            "DownloadMediaFileTypeMp3": 3,
            "DownloadMediaFileTypeGps": 4,
            "DownloadMediaFileTypeJpg": 5,
            "DownloadMediaFileTypePng": 6,
            "DownloadMediaFileTypeRaw": 7
          }
        },
        "DownloadMediaInfoRequest": {
          "fields": {
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "startTime": {
              "type": "string",
              "id": 2
            },
            "endTime": {
              "type": "string",
              "id": 3
            },
            "downloadType": {
              "type": "DownloadMediaType",
              "id": 4
            },
            "channel": {
              "type": "uint32",
              "id": 5
            },
            "streamType": {
              "type": "uint32",
              "id": 6
            },
            "storeType": {
              "type": "uint32",
              "id": 7
            },
            "downloadFileFormat": {
              "type": "DownloadMediaFileType",
              "id": 8
            },
            "deviceId": {
              "type": "string",
              "id": 9
            }
          }
        },
        "DownloadMediaInfoResponse": {
          "fields": {
            "fileName": {
              "type": "string",
              "id": 1
            },
            "filePath": {
              "type": "string",
              "id": 2
            },
            "uniqueSerial": {
              "type": "uint32",
              "id": 3
            },
            "deviceId": {
              "type": "string",
              "id": 4
            }
          }
        },
        "TLDownloadMediaInfoProgressRequest": {
          "fields": {
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "fileName": {
              "type": "string",
              "id": 3
            },
            "filePath": {
              "type": "string",
              "id": 4
            },
            "uniqueSerial": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "TLDownloadMediaInfoProgressResponse": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "fileName": {
              "type": "string",
              "id": 2
            },
            "progress": {
              "type": "uint32",
              "id": 3
            },
            "bStop": {
              "type": "uint32",
              "id": 4
            },
            "recvTotalLen": {
              "type": "uint64",
              "id": 5
            }
          }
        },
        "StopDownloadMediaInfoRequest": {
          "fields": {
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "channel": {
              "type": "uint32",
              "id": 2
            },
            "deviceId": {
              "type": "string",
              "id": 3
            }
          }
        },
        "CurdResponse": {
          "fields": {
            "errType": {
              "type": "uint32",
              "id": 1
            },
            "requestCmdId": {
              "type": "uint32",
              "id": 2
            },
            "errTime": {
              "type": "string",
              "id": 3
            },
            "appType": {
              "type": "string",
              "id": 4
            },
            "errDes": {
              "type": "string",
              "id": 5
            },
            "errCode": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "FtpManageServerInfo": {
          "fields": {
            "enableDomain": {
              "type": "uint32",
              "id": 1
            },
            "domainServer": {
              "type": "string",
              "id": 2
            },
            "serverIp": {
              "type": "string",
              "id": 3
            },
            "serverPort": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "GetDeviceFtpManageResponse": {
          "fields": {
            "serverInfo": {
              "type": "FtpManageServerInfo",
              "id": 1
            }
          }
        },
        "GeneralACKResultType": {
          "values": {
            "Success": 0,
            "Fail": 1,
            "MessageError": 2,
            "NotSupport": 3,
            "AlarmConfig": 4,
            "TimeOutError": 20,
            "NoAuthority": 30,
            "NotOnline": 999
          }
        },
        "SetDeviceFtpManageRequest": {
          "fields": {
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "rule": "repeated",
              "type": "string",
              "id": 2
            },
            "serverInfo": {
              "type": "FtpManageServerInfo",
              "id": 3
            }
          }
        },
        "SetGeneralResponse": {
          "fields": {
            "setResult": {
              "type": "uint32",
              "id": 1
            },
            "resultType": {
              "type": "GeneralACKResultType",
              "id": 2
            }
          }
        },
        "GetOnlineDeviceInfoRequest": {
          "fields": {
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            }
          }
        }
      }
    }
  }
};

/***/ }),

/***/ "./src/proto/proto.js":
/*!****************************!*\
  !*** ./src/proto/proto.js ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/


var $protobuf = __webpack_require__(/*! protobufjs/light */ "./node_modules/_protobufjs@7.1.2@protobufjs/light.js");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root())).addJSON({
  TLBluetooth: {
    nested: {
      ProtoCmdId: {
        values: {
          ProtoCmdBase: 0,
          HeatBeat: 200,
          ParseDeviceFile: 10000,
          CollectingRecorder: 10001,
          CollectingSpecifiedFile: 10002,
          ParameterSetting: 10003,
          GPSLocationInfoTest: 10004,
          DataSummary: 10005,
          ConnectCom: 11000,
          DisConnectCom: 11001,
          ScanCanConnectDevice: 11002
        }
      },
      ProtoCmdIdResp: {
        values: {
          ProtoCmdRespBase: 0,
          ProtoCmdRespErrResponse: 500,
          CollectingRecorderResp: 20001,
          CollectingSpecifiedFileResp: 20002,
          ParameterSettingResp: 20003,
          GPSLocationInfoTestResp: 20004,
          DataSummaryResp: 20005,
          DeviceCloseResp: 20006,
          ConnectComResp: 21000,
          DisConnectComResp: 21001,
          ScanCanConnectDeviceResp: 21002
        }
      },
      GeneralResponse: {
        fields: {
          errType: {
            type: "uint32",
            id: 1
          },
          requestCmdId: {
            type: "uint32",
            id: 2
          },
          errTime: {
            type: "string",
            id: 3
          },
          appType: {
            type: "string",
            id: 4
          },
          errDes: {
            type: "string",
            id: 5
          },
          errCode: {
            type: "uint32",
            id: 6
          }
        }
      },
      WebResponse: {
        fields: {
          code: {
            type: "uint32",
            id: 1
          },
          message: {
            type: "string",
            id: 2
          },
          returnData: {
            type: "string",
            id: 3
          }
        }
      },
      DataResponse: {
        fields: {
          data: {
            type: "string",
            id: 1
          }
        }
      },
      HttpUserInfo: {
        fields: {
          userName: {
            type: "string",
            id: 1
          },
          userGuid: {
            type: "string",
            id: 2
          }
        }
      },
      DeviceFileContentRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          fileUid: {
            type: "string",
            id: 2
          }
        }
      },
      OneKeyValueInfo: {
        fields: {
          key: {
            type: "string",
            id: 1
          },
          value: {
            type: "string",
            id: 2
          }
        }
      },
      OneBlockContent: {
        fields: {
          blockType: {
            type: "uint32",
            id: 1
          },
          blockDescribe: {
            type: "string",
            id: 2
          },
          blockMsgDataArray: {
            rule: "repeated",
            type: "OneKeyValueInfo",
            id: 3
          }
        }
      },
      DeviceFileContentResponse: {
        fields: {
          fileDescribe: {
            type: "string",
            id: 1
          },
          deviceName: {
            type: "string",
            id: 2
          },
          fileBlockDescribe: {
            type: "string",
            id: 3
          },
          blockContArray: {
            rule: "repeated",
            type: "OneBlockContent",
            id: 4
          },
          fileName: {
            type: "string",
            id: 5
          }
        }
      },
      CollectingRecorderRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          executiveStandardYear: {
            type: "string",
            id: 2
          }
        }
      },
      CollectingRecorderResponse: {
        fields: {
          executiveStandardYear: {
            type: "string",
            id: 1
          },
          execChangeOrderNumber: {
            type: "string",
            id: 2
          },
          recorderTime: {
            type: "string",
            id: 4
          },
          manufactureCertifiCode: {
            type: "string",
            id: 5
          },
          certifiedProductModel: {
            type: "string",
            id: 6
          },
          createYMD: {
            type: "string",
            id: 7
          },
          productSerialNumber: {
            type: "string",
            id: 8
          },
          manufactureAbbr: {
            type: "string",
            id: 9
          },
          productModeAbbr: {
            type: "string",
            id: 10
          },
          deviceNumber: {
            type: "string",
            id: 11
          },
          deviceNumberClassify: {
            type: "string",
            id: 12
          },
          VIN: {
            type: "string",
            id: 13
          },
          serialNumber: {
            type: "string",
            id: 14
          },
          pulseFactor: {
            type: "uint32",
            id: 15
          },
          firstInstallTime: {
            type: "string",
            id: 16
          },
          checkCode: {
            type: "string",
            id: 17
          }
        }
      },
      DeviceRecordFileType: {
        values: {
          DeviceRecordFileType_Base: 0,
          DeviceRecordFileType_TransportCondition: 33,
          DeviceRecordFileType_AccidentSuspects: 34,
          DeviceRecordFileType_TimeoutDriving: 35,
          DeviceRecordFileType_DrivingInformation: 36,
          DeviceRecordFileType_LogFile: 37
        }
      },
      FileInfoRequest: {
        fields: {
          fileType: {
            type: "DeviceRecordFileType",
            id: 1
          },
          startTime: {
            type: "string",
            id: 2
          },
          endTime: {
            type: "string",
            id: 3
          }
        }
      },
      CollectingSpecifiedFileRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          fileInfoArray: {
            rule: "repeated",
            type: "FileInfoRequest",
            id: 2
          }
        }
      },
      OneRespFileInfo: {
        fields: {
          fileType: {
            type: "DeviceRecordFileType",
            id: 1
          },
          fileSize: {
            type: "uint32",
            id: 2
          },
          fileContent: {
            type: "string",
            id: 3
          }
        }
      },
      GPSInfo: {
        fields: {
          longitude: {
            type: "uint32",
            id: 1
          },
          latitude: {
            type: "uint32",
            id: 2
          },
          height: {
            type: "uint32",
            id: 3
          }
        }
      },
      OnOffSignInfo: {
        fields: {
          ignition: {
            type: "uint32",
            id: 1
          },
          brake: {
            type: "uint32",
            id: 2
          },
          leftSteering: {
            type: "uint32",
            id: 3
          },
          rightSteering: {
            type: "uint32",
            id: 4
          },
          distance: {
            type: "uint32",
            id: 5
          },
          passingLight: {
            type: "uint32",
            id: 6
          },
          rearFogLamp: {
            type: "uint32",
            id: 7
          },
          backOffCar: {
            type: "uint32",
            id: 8
          },
          carDoor: {
            type: "uint32",
            id: 9
          },
          driverSeatBelt: {
            type: "uint32",
            id: 10
          },
          notUsed5: {
            type: "uint32",
            id: 11
          },
          notUsed4: {
            type: "uint32",
            id: 12
          },
          notUsed3: {
            type: "uint32",
            id: 13
          },
          notUsed2: {
            type: "uint32",
            id: 14
          },
          notUsed1: {
            type: "uint32",
            id: 15
          },
          notUsed0: {
            type: "uint32",
            id: 16
          }
        }
      },
      DrivingConditionBlockInfo: {
        fields: {
          createTime: {
            type: "string",
            id: 1
          },
          gpsInfo: {
            type: "GPSInfo",
            id: 2
          },
          direction: {
            type: "uint32",
            id: 3
          },
          canSpeed: {
            type: "uint32",
            id: 4
          },
          onOffSignInfo: {
            type: "OnOffSignInfo",
            id: 5
          },
          satelliteSpeed: {
            type: "uint32",
            id: 6
          },
          dataStateBit: {
            rule: "repeated",
            type: "uint32",
            id: 7
          },
          calibrationCode: {
            type: "string",
            id: 8
          }
        }
      },
      AccidentSuspectBlockInfo: {
        fields: {
          endTime: {
            type: "string",
            id: 1
          },
          motorVehicleDrivNo: {
            type: "string",
            id: 2
          },
          gpsInfo: {
            type: "GPSInfo",
            id: 3
          },
          canSpeedArray: {
            rule: "repeated",
            type: "uint32",
            id: 4
          },
          onOffSignArray: {
            rule: "repeated",
            type: "OnOffSignInfo",
            id: 5
          },
          calibrationCode: {
            type: "string",
            id: 6
          }
        }
      },
      DrivingTimeoutBlockInfo: {
        fields: {
          motorVehicleDrivNo: {
            type: "string",
            id: 1
          },
          startTime: {
            type: "string",
            id: 2
          },
          startGps: {
            type: "GPSInfo",
            id: 3
          },
          endTime: {
            type: "string",
            id: 4
          },
          endGps: {
            type: "GPSInfo",
            id: 5
          },
          calibrationCode: {
            type: "string",
            id: 6
          }
        }
      },
      DrivingInformationBlockInfo: {
        fields: {
          currentTime: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          MotorVehicleDrivNo: {
            type: "string",
            id: 3
          },
          DriverPicture: {
            type: "string",
            id: 4
          }
        }
      },
      LogFileType: {
        values: {
          logFileTypeUnknown: 0,
          powerOn: 17,
          powerOff: 18,
          setUpVehiclePlate: 33,
          setUpVehiclePlateClassify: 34,
          setVin: 35,
          setSerialNumber: 36,
          setPulseCoefficient: 37,
          firstInstallTime: 38,
          setUniqueNumber: 39,
          satelliteCorrection: 40,
          selfCheckNormal: 49,
          selfCheckNotComplate: 50,
          installSettingExceltion: 51,
          speedException: 52,
          satelliteSignalExceltion: 53,
          onOffSignalException: 54,
          selfTestNormal: 65,
          selfTestException: 66,
          memoryException: 67,
          satelliteModuleException: 68,
          communicateModuleException: 69,
          signalInputError: 70,
          speedStateNormal: 81,
          speedStateException: 82,
          usbDataExport: 97,
          blueToothExport: 98
        }
      },
      LogFileBlockInfo: {
        fields: {
          createTime: {
            type: "string",
            id: 1
          },
          logType: {
            type: "LogFileType",
            id: 2
          },
          logDescribe: {
            type: "string",
            id: 3
          },
          calibrationCode: {
            type: "string",
            id: 4
          }
        }
      },
      CollectingSpecifiedFileResponse: {
        fields: {
          fileInfoArray: {
            rule: "repeated",
            type: "OneRespFileInfo",
            id: 1
          }
        }
      },
      ParameterSettingRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          manufactureCertifiCode: {
            type: "string",
            id: 2
          },
          certifiedProductModel: {
            type: "string",
            id: 3
          },
          createYMD: {
            type: "string",
            id: 4
          },
          productSerialNumber: {
            type: "string",
            id: 5
          },
          manufactureAbbr: {
            type: "string",
            id: 6
          },
          productModeAbbr: {
            type: "string",
            id: 7
          },
          deviceNumber: {
            type: "string",
            id: 8
          },
          deviceNumberClassify: {
            type: "string",
            id: 9
          },
          VIN: {
            type: "string",
            id: 10
          },
          serialNumber: {
            type: "string",
            id: 11
          },
          pulseFactor: {
            type: "uint32",
            id: 15
          },
          firstInstallTime: {
            type: "string",
            id: 16
          },
          dataSummary: {
            type: "string",
            id: 17
          }
        }
      },
      GPSLocationInfoTestRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          sendDataDuring: {
            type: "uint32",
            id: 2
          },
          operatorType: {
            type: "uint32",
            id: 3
          }
        }
      },
      GGAData: {
        fields: {
          time: {
            type: "string",
            id: 1
          },
          locationState: {
            type: "uint32",
            id: 2
          },
          latitude: {
            type: "string",
            id: 3
          },
          latitudeDimension: {
            type: "string",
            id: 4
          },
          longitude: {
            type: "string",
            id: 5
          },
          longitudeDimension: {
            type: "string",
            id: 6
          },
          floorSpeed: {
            type: "string",
            id: 7
          },
          direction: {
            type: "string",
            id: 8
          },
          magnetic: {
            type: "string",
            id: 9
          },
          declination: {
            type: "string",
            id: 10
          },
          modeIndicator: {
            type: "string",
            id: 11
          },
          checkCode: {
            type: "string",
            id: 12
          }
        }
      },
      RMCData: {
        fields: {
          time: {
            type: "string",
            id: 1
          },
          locationState: {
            type: "uint32",
            id: 2
          },
          latitude: {
            type: "string",
            id: 3
          },
          latitudeDimension: {
            type: "string",
            id: 4
          },
          longitude: {
            type: "string",
            id: 5
          },
          longitudeDimension: {
            type: "string",
            id: 6
          },
          satellitesNumber: {
            type: "uint32",
            id: 7
          },
          horizontalAccuracy: {
            type: "string",
            id: 8
          },
          antennaHeight: {
            type: "string",
            id: 9
          },
          height: {
            type: "string",
            id: 10
          },
          rTCMNumber: {
            type: "string",
            id: 11
          },
          diffBaseStateNumber: {
            type: "string",
            id: 12
          },
          checkCode: {
            type: "string",
            id: 13
          }
        }
      },
      GPSLocationInfoTestResponse: {
        fields: {
          GGADataArray: {
            rule: "repeated",
            type: "GGAData",
            id: 1
          },
          RMCDataArray: {
            rule: "repeated",
            type: "RMCData",
            id: 2
          }
        }
      },
      DataSummaryRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          communicationDevTime: {
            type: "string",
            id: 2
          }
        }
      },
      DataSummaryResponse: {
        fields: {
          recorderTime: {
            type: "string",
            id: 1
          },
          manufactureCertifiCode: {
            type: "string",
            id: 2
          },
          certifiedProductModel: {
            type: "string",
            id: 3
          },
          createYMD: {
            type: "string",
            id: 4
          },
          productSerialNumber: {
            type: "string",
            id: 5
          },
          manufactureAbbr: {
            type: "string",
            id: 6
          },
          productModeAbbr: {
            type: "string",
            id: 7
          },
          deviceNumber: {
            type: "string",
            id: 8
          },
          deviceNumberClassify: {
            type: "string",
            id: 9
          },
          VIN: {
            type: "string",
            id: 10
          },
          serialNumber: {
            type: "string",
            id: 11
          },
          pulseFactor: {
            type: "uint32",
            id: 12
          },
          firstInstallTime: {
            type: "string",
            id: 13
          },
          dataSummary: {
            type: "string",
            id: 14
          }
        }
      },
      ConnectComRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          comNumber: {
            type: "uint32",
            id: 2
          },
          computeUniqueSession: {
            type: "string",
            id: 3
          },
          comBaudRate: {
            type: "uint32",
            id: 4
          }
        }
      },
      DisComRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          }
        }
      },
      ScanCanConnectDeviceRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          }
        }
      },
      SerialPortDeviceInfo: {
        fields: {
          computeName: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          computeUniqueSession: {
            type: "string",
            id: 3
          }
        }
      },
      ScanCanConnectDeviceResponse: {
        fields: {
          serialPortArray: {
            rule: "repeated",
            type: "SerialPortDeviceInfo",
            id: 1
          }
        }
      },
      UserLogInRequest: {
        fields: {
          userName: {
            type: "string",
            id: 1
          },
          userPassword: {
            type: "string",
            id: 2
          },
          lang: {
            type: "string",
            id: 3
          },
          appType: {
            type: "string",
            id: 4
          }
        }
      },
      UserLogInResponse: {
        fields: {
          sessionId: {
            type: "string",
            id: 1
          },
          userType: {
            type: "uint32",
            id: 2
          }
        }
      },
      SendCustomMessageToDeviceRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          sendCont: {
            type: "string",
            id: 2
          },
          sendHex: {
            type: "uint32",
            id: 3
          }
        }
      },
      SendCustomMessageToDeviceResponse: {
        fields: {
          recvCont: {
            type: "string",
            id: 1
          },
          sendHex: {
            type: "uint32",
            id: 2
          }
        }
      }
    }
  }
});
module.exports = $root;

/***/ }),

/***/ "./src/weichatPb/protobuf.js":
/*!***********************************!*\
  !*** ./src/weichatPb/protobuf.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Created by zhangmiao on 2018/3/13.
 */
(function (protobufFactory) {
  //if (typeof define === 'function')//这里会不会定义重复呢?怎么去掉呢
  //    define('protobuf', protobufFactory);
  //else
  module.exports = protobufFactory();
})(function () {
  var protobuf = {}; //app.globalData.protobuf = protobuf;

  /**
   * Build type, one of `"full"`, `"light"` or `"minimal"`.
   * @name build
   * @type {string}
   * @const
   */

  protobuf.build = "minimal"; // Serialization

  protobuf.Writer = __webpack_require__(/*! ./src/writer */ "./src/weichatPb/src/writer.js");
  protobuf.encoder = __webpack_require__(/*! ./src/encoder */ "./src/weichatPb/src/encoder.js");
  protobuf.Reader = __webpack_require__(/*! ./src/reader */ "./src/weichatPb/src/reader.js"); // Utility

  protobuf.util = __webpack_require__(/*! ./src/util */ "./src/weichatPb/src/util.js");
  protobuf.rpc = __webpack_require__(/*! ./src/rpc/service */ "./src/weichatPb/src/rpc/service.js");
  protobuf.roots = __webpack_require__(/*! ./src/roots */ "./src/weichatPb/src/roots.js");
  protobuf.verifier = __webpack_require__(/*! ./src/verifier */ "./src/weichatPb/src/verifier.js");
  protobuf.tokenize = __webpack_require__(/*! ./src/tokenize */ "./src/weichatPb/src/tokenize.js");
  protobuf.parse = __webpack_require__(/*! ./src/parse */ "./src/weichatPb/src/parse.js");
  protobuf.common = __webpack_require__(/*! ./src/common */ "./src/weichatPb/src/common.js");
  protobuf.ReflectionObject = __webpack_require__(/*! ./src/object */ "./src/weichatPb/src/object.js");
  protobuf.Namespace = __webpack_require__(/*! ./src/namespace */ "./src/weichatPb/src/namespace.js");
  protobuf.Root = __webpack_require__(/*! ./src/root */ "./src/weichatPb/src/root.js");
  protobuf.Enum = __webpack_require__(/*! ./src/enum */ "./src/weichatPb/src/enum.js");
  protobuf.Type = __webpack_require__(/*! ./src/type */ "./src/weichatPb/src/type.js");
  protobuf.Field = __webpack_require__(/*! ./src/field */ "./src/weichatPb/src/field.js");
  protobuf.OneOf = __webpack_require__(/*! ./src/oneof */ "./src/weichatPb/src/oneof.js");
  protobuf.MapField = __webpack_require__(/*! ./src/mapField */ "./src/weichatPb/src/mapField.js");
  protobuf.Service = __webpack_require__(/*! ./src/service */ "./src/weichatPb/src/service.js");
  protobuf.Method = __webpack_require__(/*! ./src/method */ "./src/weichatPb/src/method.js");
  protobuf.converter = __webpack_require__(/*! ./src/converter */ "./src/weichatPb/src/converter.js");
  protobuf.decoder = __webpack_require__(/*! ./src/decoder */ "./src/weichatPb/src/decoder.js"); // Runtime

  protobuf.Message = __webpack_require__(/*! ./src/message */ "./src/weichatPb/src/message.js");
  protobuf.wrappers = __webpack_require__(/*! ./src/wrappers */ "./src/weichatPb/src/wrappers.js"); // Utility

  protobuf.types = __webpack_require__(/*! ./src/types */ "./src/weichatPb/src/types.js");
  protobuf.util = __webpack_require__(/*! ./src/util */ "./src/weichatPb/src/util.js");
  protobuf.configure = configure;

  function load(filename, root, callback) {
    if (typeof root === "function") {
      callback = root;
      root = new protobuf.Root();
    } else if (!root) root = new protobuf.Root();

    return root.load(filename, callback);
  }

  protobuf.load = load;

  function loadSync(filename, root) {
    if (!root) root = new protobuf.Root();
    return root.loadSync(filename);
  }

  protobuf.loadSync = loadSync; //新增weichat支持的解析pbConfig接口

  function parseFromPbString(pbString, root, callback) {
    if (typeof root === "function") {
      callback = root;
      root = new protobuf.Root();
    } else if (!root) root = new protobuf.Root();

    return root.parseFromPbString(pbString, callback);
  }

  protobuf.parseFromPbString = parseFromPbString;
  /**
   * Reconfigures the library according to the environment.
   * @returns {undefined}
   */

  function configure() {
    protobuf.converter._configure();

    protobuf.decoder._configure();

    protobuf.encoder._configure();

    protobuf.Field._configure();

    protobuf.MapField._configure();

    protobuf.Message._configure();

    protobuf.Namespace._configure();

    protobuf.Method._configure();

    protobuf.ReflectionObject._configure();

    protobuf.OneOf._configure();

    protobuf.parse._configure();

    protobuf.Reader._configure();

    protobuf.Root._configure();

    protobuf.Service._configure();

    protobuf.verifier._configure();

    protobuf.Type._configure();

    protobuf.types._configure();

    protobuf.wrappers._configure();

    protobuf.Writer._configure();
  }

  configure();

  if (arguments && arguments.length) {
    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments[i];

      if (argument.hasOwnProperty("exports")) {
        argument.exports = protobuf;
        return;
      }
    }
  }

  return protobuf;
});

/***/ }),

/***/ "./src/weichatPb/src/EventEmitter.js":
/*!*******************************************!*\
  !*** ./src/weichatPb/src/EventEmitter.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

module.exports = EventEmitter;
/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */

function EventEmitter() {
  /**
   * Registered listeners.
   * @type {Object.<string,*>}
   * @private
   */
  this._listeners = {};
}
/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */


EventEmitter.prototype.on = function on(evt, fn, ctx) {
  (this._listeners[evt] || (this._listeners[evt] = [])).push({
    fn: fn,
    ctx: ctx || this
  });
  return this;
};
/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */


EventEmitter.prototype.off = function off(evt, fn) {
  if (evt === undefined) this._listeners = {};else {
    if (fn === undefined) this._listeners[evt] = [];else {
      var listeners = this._listeners[evt];

      for (var i = 0; i < listeners.length;) {
        if (listeners[i].fn === fn) listeners.splice(i, 1);else ++i;
      }
    }
  }
  return this;
};
/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */


EventEmitter.prototype.emit = function emit(evt) {
  var listeners = this._listeners[evt];

  if (listeners) {
    var args = [],
        i = 1;

    for (; i < arguments.length;) {
      args.push(arguments[i++]);
    }

    for (i = 0; i < listeners.length;) {
      listeners[i].fn.apply(listeners[i++].ctx, args);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/weichatPb/src/asPromise.js":
/*!****************************************!*\
  !*** ./src/weichatPb/src/asPromise.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

module.exports = asPromise;
/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */

function asPromise(fn, ctx
/*, varargs */
) {
  var params = new Array(arguments.length - 1),
      offset = 0,
      index = 2,
      pending = true;

  while (index < arguments.length) {
    params[offset++] = arguments[index++];
  }

  return new Promise(function executor(resolve, reject) {
    params[offset] = function callback(err
    /*, varargs */
    ) {
      if (pending) {
        pending = false;
        if (err) reject(err);else {
          var params = new Array(arguments.length - 1),
              offset = 0;

          while (offset < params.length) {
            params[offset++] = arguments[offset];
          }

          resolve.apply(null, params);
        }
      }
    };

    try {
      fn.apply(ctx || null, params);
    } catch (err) {
      if (pending) {
        pending = false;
        reject(err);
      }
    }
  });
}

/***/ }),

/***/ "./src/weichatPb/src/base64.js":
/*!*************************************!*\
  !*** ./src/weichatPb/src/base64.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

var base64 = module.exports;
/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */

base64.length = function length(string) {
  var p = string.length;
  if (!p) return 0;
  var n = 0;

  while (--p % 4 > 1 && string.charAt(p) === "=") {
    ++n;
  }

  return Math.ceil(string.length * 3) / 4 - n;
}; // Base64 encoding table


var b64 = new Array(64); // Base64 decoding table

var s64 = new Array(123); // 65..90, 97..122, 48..57, 43, 47

for (var i = 0; i < 64;) {
  s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
}
/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */


base64.encode = function encode(buffer, start, end) {
  var parts = null,
      chunk = [];
  var i = 0,
      // output index
  j = 0,
      // goto index
  t; // temporary

  while (start < end) {
    var b = buffer[start++];

    switch (j) {
      case 0:
        chunk[i++] = b64[b >> 2];
        t = (b & 3) << 4;
        j = 1;
        break;

      case 1:
        chunk[i++] = b64[t | b >> 4];
        t = (b & 15) << 2;
        j = 2;
        break;

      case 2:
        chunk[i++] = b64[t | b >> 6];
        chunk[i++] = b64[b & 63];
        j = 0;
        break;
    }

    if (i > 8191) {
      (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
      i = 0;
    }
  }

  if (j) {
    chunk[i++] = b64[t];
    chunk[i++] = 61;
    if (j === 1) chunk[i++] = 61;
  }

  if (parts) {
    if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
    return parts.join("");
  }

  return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";
/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */

base64.decode = function decode(string, buffer, offset) {
  var start = offset;
  var j = 0,
      // goto index
  t; // temporary

  for (var i = 0; i < string.length;) {
    var c = string.charCodeAt(i++);
    if (c === 61 && j > 1) break;
    if ((c = s64[c]) === undefined) throw Error(invalidEncoding);

    switch (j) {
      case 0:
        t = c;
        j = 1;
        break;

      case 1:
        buffer[offset++] = t << 2 | (c & 48) >> 4;
        t = c;
        j = 2;
        break;

      case 2:
        buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
        t = c;
        j = 3;
        break;

      case 3:
        buffer[offset++] = (t & 3) << 6 | c;
        j = 0;
        break;
    }
  }

  if (j === 1) throw Error(invalidEncoding);
  return offset - start;
};
/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */


base64.test = function test(string) {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};

/***/ }),

/***/ "./src/weichatPb/src/common.js":
/*!*************************************!*\
  !*** ./src/weichatPb/src/common.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

module.exports = common;
var commonRe = /\/|\./;
/**
 * Provides common type definitions.
 * Can also be used to provide additional google types or your own custom types.
 * @param {string} name Short name as in `google/protobuf/[name].proto` or full file name
 * @param {Object.<string,*>} json JSON definition within `google.protobuf` if a short name, otherwise the file's root definition
 * @returns {undefined}
 * @property {INamespace} google/protobuf/any.proto Any
 * @property {INamespace} google/protobuf/duration.proto Duration
 * @property {INamespace} google/protobuf/empty.proto Empty
 * @property {INamespace} google/protobuf/field_mask.proto FieldMask
 * @property {INamespace} google/protobuf/struct.proto Struct, Value, NullValue and ListValue
 * @property {INamespace} google/protobuf/timestamp.proto Timestamp
 * @property {INamespace} google/protobuf/wrappers.proto Wrappers
 * @example
 * // manually provides descriptor.proto (assumes google/protobuf/ namespace and .proto extension)
 * protobuf.common("descriptor", descriptorJson);
 *
 * // manually provides a custom definition (uses my.foo namespace)
 * protobuf.common("my/foo/bar.proto", myFooBarJson);
 */

function common(name, json) {
  if (!commonRe.test(name)) {
    name = "google/protobuf/" + name + ".proto";
    json = {
      nested: {
        google: {
          nested: {
            protobuf: {
              nested: json
            }
          }
        }
      }
    };
  }

  common[name] = json;
} // Not provided because of limited use (feel free to discuss or to provide yourself):
//
// google/protobuf/descriptor.proto
// google/protobuf/source_context.proto
// google/protobuf/type.proto
//
// Stripped and pre-parsed versions of these non-bundled files are instead available as part of
// the repository or package within the google/protobuf directory.


common("any", {
  /**
   * Properties of a google.protobuf.Any message.
   * @interface IAny
   * @type {Object}
   * @property {string} [typeUrl]
   * @property {Uint8Array} [bytes]
   * @memberof common
   */
  Any: {
    fields: {
      type_url: {
        type: "string",
        id: 1
      },
      value: {
        type: "bytes",
        id: 2
      }
    }
  }
});
var timeType;
common("duration", {
  /**
   * Properties of a google.protobuf.Duration message.
   * @interface IDuration
   * @type {Object}
   * @property {number|Long} [seconds]
   * @property {number} [nanos]
   * @memberof common
   */
  Duration: timeType = {
    fields: {
      seconds: {
        type: "int64",
        id: 1
      },
      nanos: {
        type: "int32",
        id: 2
      }
    }
  }
});
common("timestamp", {
  /**
   * Properties of a google.protobuf.Timestamp message.
   * @interface ITimestamp
   * @type {Object}
   * @property {number|Long} [seconds]
   * @property {number} [nanos]
   * @memberof common
   */
  Timestamp: timeType
});
common("empty", {
  /**
   * Properties of a google.protobuf.Empty message.
   * @interface IEmpty
   * @memberof common
   */
  Empty: {
    fields: {}
  }
});
common("struct", {
  /**
   * Properties of a google.protobuf.Struct message.
   * @interface IStruct
   * @type {Object}
   * @property {Object.<string,IValue>} [fields]
   * @memberof common
   */
  Struct: {
    fields: {
      fields: {
        keyType: "string",
        type: "Value",
        id: 1
      }
    }
  },

  /**
   * Properties of a google.protobuf.Value message.
   * @interface IValue
   * @type {Object}
   * @property {string} [kind]
   * @property {0} [nullValue]
   * @property {number} [numberValue]
   * @property {string} [stringValue]
   * @property {boolean} [boolValue]
   * @property {IStruct} [structValue]
   * @property {IListValue} [listValue]
   * @memberof common
   */
  Value: {
    oneofs: {
      kind: {
        oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
      }
    },
    fields: {
      nullValue: {
        type: "NullValue",
        id: 1
      },
      numberValue: {
        type: "double",
        id: 2
      },
      stringValue: {
        type: "string",
        id: 3
      },
      boolValue: {
        type: "bool",
        id: 4
      },
      structValue: {
        type: "Struct",
        id: 5
      },
      listValue: {
        type: "ListValue",
        id: 6
      }
    }
  },
  NullValue: {
    values: {
      NULL_VALUE: 0
    }
  },

  /**
   * Properties of a google.protobuf.ListValue message.
   * @interface IListValue
   * @type {Object}
   * @property {Array.<IValue>} [values]
   * @memberof common
   */
  ListValue: {
    fields: {
      values: {
        rule: "repeated",
        type: "Value",
        id: 1
      }
    }
  }
});
common("wrappers", {
  /**
   * Properties of a google.protobuf.DoubleValue message.
   * @interface IDoubleValue
   * @type {Object}
   * @property {number} [value]
   * @memberof common
   */
  DoubleValue: {
    fields: {
      value: {
        type: "double",
        id: 1
      }
    }
  },

  /**
   * Properties of a google.protobuf.FloatValue message.
   * @interface IFloatValue
   * @type {Object}
   * @property {number} [value]
   * @memberof common
   */
  FloatValue: {
    fields: {
      value: {
        type: "float",
        id: 1
      }
    }
  },

  /**
   * Properties of a google.protobuf.Int64Value message.
   * @interface IInt64Value
   * @type {Object}
   * @property {number|Long} [value]
   * @memberof common
   */
  Int64Value: {
    fields: {
      value: {
        type: "int64",
        id: 1
      }
    }
  },

  /**
   * Properties of a google.protobuf.UInt64Value message.
   * @interface IUInt64Value
   * @type {Object}
   * @property {number|Long} [value]
   * @memberof common
   */
  UInt64Value: {
    fields: {
      value: {
        type: "uint64",
        id: 1
      }
    }
  },

  /**
   * Properties of a google.protobuf.Int32Value message.
   * @interface IInt32Value
   * @type {Object}
   * @property {number} [value]
   * @memberof common
   */
  Int32Value: {
    fields: {
      value: {
        type: "int32",
        id: 1
      }
    }
  },

  /**
   * Properties of a google.protobuf.UInt32Value message.
   * @interface IUInt32Value
   * @type {Object}
   * @property {number} [value]
   * @memberof common
   */
  UInt32Value: {
    fields: {
      value: {
        type: "uint32",
        id: 1
      }
    }
  },

  /**
   * Properties of a google.protobuf.BoolValue message.
   * @interface IBoolValue
   * @type {Object}
   * @property {boolean} [value]
   * @memberof common
   */
  BoolValue: {
    fields: {
      value: {
        type: "bool",
        id: 1
      }
    }
  },

  /**
   * Properties of a google.protobuf.StringValue message.
   * @interface IStringValue
   * @type {Object}
   * @property {string} [value]
   * @memberof common
   */
  StringValue: {
    fields: {
      value: {
        type: "string",
        id: 1
      }
    }
  },

  /**
   * Properties of a google.protobuf.BytesValue message.
   * @interface IBytesValue
   * @type {Object}
   * @property {Uint8Array} [value]
   * @memberof common
   */
  BytesValue: {
    fields: {
      value: {
        type: "bytes",
        id: 1
      }
    }
  }
});
common("field_mask", {
  /**
   * Properties of a google.protobuf.FieldMask message.
   * @interface IDoubleValue
   * @type {Object}
   * @property {number} [value]
   * @memberof common
   */
  FieldMask: {
    fields: {
      paths: {
        rule: "repeated",
        type: "string",
        id: 1
      }
    }
  }
});
/**
 * Gets the root definition of the specified common proto file.
 *
 * Bundled definitions are:
 * - google/protobuf/any.proto
 * - google/protobuf/duration.proto
 * - google/protobuf/empty.proto
 * - google/protobuf/field_mask.proto
 * - google/protobuf/struct.proto
 * - google/protobuf/timestamp.proto
 * - google/protobuf/wrappers.proto
 *
 * @param {string} file Proto file name
 * @returns {INamespace|null} Root definition or `null` if not defined
 */

common.get = function get(file) {
  return common[file] || null;
};

/***/ }),

/***/ "./src/weichatPb/src/converter.js":
/*!****************************************!*\
  !*** ./src/weichatPb/src/converter.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

var _typeof = (__webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js")["default"]);

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/**
 * Created by zhangmiao on 2018/3/14.
 * 写这个,有点难;有错误请指出 ,微信中不能Function.Apply 和evl,所以去掉其中所有的gen()
 */


var converter = module.exports;
var Enum, util;

converter._configure = function () {
  Enum = __webpack_require__(/*! ./enum */ "./src/weichatPb/src/enum.js");
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

function valuePartial_fromObject(field, fieldIndex, propName, options) {
  var m = options['m'];
  var d = options['d'];
  var _types = options['types'];
  var ksi = options['ksi'];
  var ksiFlag = typeof ksi != 'undefined';

  if (field.resolvedType) {
    if (field.resolvedType instanceof Enum) {
      var prop = ksiFlag ? d[propName][ksi] : d[propName];
      var values = field.resolvedType.values,
          keys = Object.keys(values);

      for (var i = 0; i < keys.length; i++) {
        if (field.repeated && values[keys[i]] === field.typeDefault) {
          continue;
        }

        if (keys[i] == prop || values[keys[i]] == prop) {
          ksiFlag ? m[propName][ksi] = values[keys[i]] : m[propName] = values[keys[i]];
          break;
        }
      }
    } else {
      if (_typeof(ksiFlag ? d[propName][ksi] : d[propName]) !== 'object') throw TypeError(field.fullName + ": object expected");
      ksiFlag ? m[propName][ksi] = _types[fieldIndex].fromObject(d[propName][ksi]) : m[propName] = _types[fieldIndex].fromObject(d[propName]);
    }
  } else {
    var isUnsigned = false;

    switch (field.type) {
      case "double":
      case "float":
        ksiFlag ? m[propName][ksi] = Number(d[propName][ksi]) : m[propName] = Number(d[propName]);
        break;

      case "uint32":
      case "fixed32":
        ksiFlag ? m[propName][ksi] = d[propName][ksi] >>> 0 : m[propName] = d[propName] >>> 0;
        break;

      case "int32":
      case "sint32":
      case "sfixed32":
        ksiFlag ? m[propName][ksi] = d[propName][ksi] | 0 : m[propName] = d[propName] | 0;
        break;

      case "uint64":
        isUnsigned = true;
      // eslint-disable-line no-fallthrough

      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        if (util.Long) ksiFlag ? m[propName][ksi] = util.Long.fromValue(d[propName][ksi]).unsigned = isUnsigned : m[propName] = util.Long.fromValue(d[propName]).unsigned = isUnsigned;else if (typeof (ksiFlag ? d[propName][ksi] : d[propName]) === 'string') ksiFlag ? m[propName][ksi] = parseInt(d[propName][ksi], 10) : m[propName] = parseInt(d[propName], 10);else if (typeof (ksiFlag ? d[propName][ksi] : d[propName]) === 'number') ksiFlag ? m[propName][ksi] = d[propName][ksi] : m[propName] = d[propName];else if (_typeof(ksiFlag ? d[propName][ksi] : d[propName]) === 'object') ksiFlag ? m[propName][ksi] = new util.LongBits(d[propName][ksi].low >>> 0, d[propName][ksi].high >>> 0).toNumber(isUnsigned) : m[propName] = new util.LongBits(d[propName].low >>> 0, d[propName].high >>> 0).toNumber(isUnsigned);
        break;

      case "bytes":
        if (typeof (ksiFlag ? d[propName][ksi] : d[propName]) === "string") ksiFlag ? util.base64.decode(d[propName][ksi], m[propName][ksi] = util.newBuffer(util.base64.length(d[propName][ksi])), 0) : util.base64.decode(d[propName], m[propName] = util.newBuffer(util.base64.length(d[propName])), 0);else if ((ksiFlag ? d[propName][ksi] : d[propName]).length) ksiFlag ? m[propName][ksi] = d[propName][ksi] : m[propName] = d[propName];
        break;

      case "string":
        ksiFlag ? m[propName][ksi] = String(d[propName][ksi]) : m[propName] = String(d[propName]);
        break;

      case "bool":
        ksiFlag ? m[propName][ksi] = Boolean(d[propName][ksi]) : m[propName] = Boolean(d[propName]);
        break;
    }
  }
}
/*
* @param {Type} mtype Message type
* @returns {Function} Function instance
*/


converter.fromObject = function fromObject(mtype) {
  var fields = mtype.fieldsArray;
  return function (options) {
    return function (d) {
      if (d instanceof this.ctor) return d;
      if (!fields.length) return new this.ctor();
      var m = new this.ctor();

      for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve();
        var propName = field.name;

        var _i;

        if (field.map) {
          if (d[propName]) {
            if (_typeof(d[propName]) !== 'object') throw TypeError(field.fullName + ": object expected");
            m[propName] = {};
          }

          var ks = Object.keys(d[propName]);

          for (_i = 0; _i < ks.length; ++_i) {
            valuePartial_fromObject(field, i, propName, util.merge(util.copy(options), {
              m: m,
              d: d,
              ksi: ks[_i]
            }));
          }
        } else if (field.repeated) {
          if (d[propName]) {
            if (!Array.isArray(d[propName])) throw TypeError(field.fullName + ": array expected");
            m[propName] = [];

            for (_i = 0; _i < d[propName].length; ++_i) {
              valuePartial_fromObject(field, i, propName, util.merge(util.copy(options), {
                m: m,
                d: d,
                ksi: _i
              }));
            }
          }
        } else {
          if (field.resolvedType instanceof Enum || d[propName] != null) {
            valuePartial_fromObject(field, i, propName, util.merge(util.copy(options), {
              m: m,
              d: d
            }));
          }
        }
      }

      return m;
    };
  };
};

function valuePartial_toObject(field, fieldIndex, propName, options) {
  var m = options['m'];
  var d = options['d'];
  var _types = options['types'];
  var ksi = options['ksi'];
  var o = options['o'];
  var ksiFlag = typeof ksi != 'undefined';

  if (field.resolvedType) {
    if (field.resolvedType instanceof Enum) ksiFlag ? d[propName][ksi] = o.enums === String ? _types[fieldIndex].values[m[propName][ksi]] : m[propName][ksi] : d[propName] = o.enums === String ? _types[fieldIndex].values[m[propName]] : m[propName];else ksiFlag ? d[propName][ksi] = _types[fieldIndex].toObject(m[propName][ksi], o) : d[propName] = _types[fieldIndex].toObject(m[propName], o);
  } else {
    var isUnsigned = false;

    switch (field.type) {
      case "double":
      case "float":
        ksiFlag ? d[propName][ksi] = o.json && !isFinite(m[propName][ksi]) ? String(m[propName][ksi]) : m[propName][ksi] : d[propName] = o.json && !isFinite(m[propName]) ? String(m[propName]) : m[propName];
        break;

      case "uint64":
        isUnsigned = true;
      // eslint-disable-line no-fallthrough

      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        if (typeof m[propName][ksi] === 'number') ksiFlag ? d[propName][ksi] = o.longs === String ? String(m[propName][ksi]) : m[propName][ksi] : d[propName] = o.longs === String ? String(m[propName]) : m[propName];else ksiFlag ? d[propName][ksi] = o.longs === String ? util.Long.prototype.toString.call(m[propName][ksi]) : o.longs === Number ? new util.LongBits(m[propName][ksi].low >>> 0, m[propName][ksi].high >>> 0).toNumber(isUnsigned) : m[propName][ksi] : d[propName] = o.longs === String ? util.Long.prototype.toString.call(m[propName]) : o.longs === Number ? new util.LongBits(m[propName].low >>> 0, m[propName].high >>> 0).toNumber(isUnsigned) : m[propName];
        break;

      case "bytes":
        ksiFlag ? d[propName][ksi] = o.bytes === String ? util.base64.encode(m[propName][ksi], 0, m[propName][ksi].length) : o.bytes === Array ? Array.prototype.slice.call(m[propName][ksi]) : m[propName][ksi] : d[propName] = o.bytes === String ? util.base64.encode(m[propName], 0, m[propName].length) : o.bytes === Array ? Array.prototype.slice.call(m[propName]) : m[propName];
        break;

      default:
        ksiFlag ? d[propName][ksi] = m[propName][ksi] : d[propName] = m[propName];
        break;
    }
  }
}

converter.toObject = function toObject(mtype) {
  var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
  return function (options) {
    if (!fields.length) return function () {
      return {};
    };
    return function (m, o) {
      o = o || {};
      var d = {};
      var repeatedFields = [],
          mapFields = [],
          normalFields = [],
          field,
          propName,
          i = 0;

      for (; i < fields.length; ++i) {
        if (!fields[i].partOf) (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
      }

      if (repeatedFields.length) {
        if (o.arrays || o.defaults) {
          for (i = 0; i < repeatedFields.length; ++i) {
            d[repeatedFields[i].name] = [];
          }
        }
      }

      if (mapFields.length) {
        if (o.objects || o.defaults) {
          for (i = 0; i < mapFields.length; ++i) {
            d[mapFields[i].name] = {};
          }
        }
      }

      if (normalFields.length) {
        if (o.defaults) {
          for (i = 0; i < normalFields.length; ++i) {
            field = normalFields[i], propName = field.name;
            if (field.resolvedType instanceof Enum) d[propName] = o.enums = String ? field.resolvedType.valuesById[field.typeDefault] : field.typeDefault;else if (field["long"]) {
              if (util.Long) {
                var n = new util.Long(field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned);
                d[propName] = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
              } else {
                d[propName] = o.longs === String ? field.typeDefault.toString() : field.typeDefault.toNumber();
              }
            } else if (field.bytes) {
              d[propName] = o.bytes === String ? String.fromCharCode.apply(String, field.typeDefault) : Array.prototype.slice.call(field.typeDefault).join('*..*').split("*..*");
            } else {
              d[propName] = field.typeDefault;
            }
          }
        }
      }

      var hasKs2 = false;

      for (i = 0; i < fields.length; ++i) {
        field = fields[i];
        propName = field.name;

        var index = mtype._fieldsArray.indexOf(field);

        var ks2;
        var j;

        if (field.map) {
          if (!hasKs2) {
            hasKs2 = true;
          }

          if (m[propName] && (ks2 = Object.keys(m[propName]).length)) {
            d[propName] = {};

            for (j = 0; j < ks2.length; ++j) {
              valuePartial_toObject(field, index, propName, util.merge(util.copy(options), {
                m: m,
                d: d,
                ksi: ks2[j],
                o: o
              }));
            }
          }
        } else if (field.repeated) {
          if (m[propName] && m[propName].length) {
            d[propName] = [];

            for (j = 0; j < m[propName].length; ++j) {
              valuePartial_toObject(field, index, propName, util.merge(util.copy(options), {
                m: m,
                d: d,
                ksi: j,
                o: o
              }));
            }
          }
        } else {
          if (m[propName] != null && m.hasOwnProperty(propName)
          /*|| field.partOf*/
          ) {
            valuePartial_toObject(field, index, propName, util.merge(util.copy(options), {
              m: m,
              d: d,
              o: o
            }));
          }

          if (field.partOf) {
            if (o.oneofs) d[field.partOf.name] = propName;
          }
        }
      }

      return d;
    };
  };
};

/***/ }),

/***/ "./src/weichatPb/src/decoder.js":
/*!**************************************!*\
  !*** ./src/weichatPb/src/decoder.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js")["default"]);

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/**
 * Created by zhangmiao on 2018/3/13.
 */


var Enum, types, util;

function missing(field) {
  return "missing required '" + field.name + "'";
}

function decoder(mtype) {
  return function (options) {
    var Reader = options.Reader;
    var _types = options.types;
    var _util = options.util;
    return function (r, l) {
      if (!(r instanceof Reader)) r = Reader.create(r);
      var c = l === undefined ? r.len : r.pos + l,
          m = new this.ctor();
      var k;

      while (r.pos < c) {
        var t = r.uint32();

        if (mtype.group) {
          if ((t & 7) === 4) break;
        }

        var fieldId = t >>> 3;
        var i = 0;
        var find = false;

        for (; i < mtype.fieldsArray.length; ++i) {
          var field = mtype._fieldsArray[i].resolve(),
              name = field.name,
              type = field.resolvedType instanceof Enum ? "int32" : field.type; //ref   = m[field.name];


          if (fieldId != field.id) continue;
          find = true;

          if (field.map) {
            r.skip().pos++;
            if (m[name] === _util.emptyObject) m[name] = {};
            k = r[field.keyType]();
            r.pos++;

            if (types["long"][field.keyType] != undefined) {
              if (types.basic[type] == undefined) {
                m[name][_typeof(k) === 'object' ? _util.longToHash(k) : k] = _types[i].decode(r, r.uint32());
              } else {
                m[name][_typeof(k) === 'object' ? _util.longToHash(k) : k] = r[type]();
              }
            } else {
              if (types.basic[type] == undefined) {
                m[name] = _types[i].decode(r, r.uint32());
              } else {
                m[name] = r[type]();
              }
            }
          } else if (field.repeated) {
            if (!(m[name] && m[name].length)) {
              m[name] = [];
            }

            if (types.packed[type] != undefined && (t & 7) === 2) {
              var c2 = r.uint32() + r.pos;

              while (r.pos < c2) {
                m[name].push(r[type]());
              }
            } else {
              if (types.basic[type] == undefined) {
                field.resolvedType.group ? m[name].push(_types[i].decode(r)) : m[name].push(_types[i].decode(r, r.uint32()));
              } else {
                m[name].push(r[type]());
              }
            }
          } else if (types.basic[type] == undefined) {
            if (field.resolvedType.group) {
              m[name] = _types[i].decode(r);
            } else {
              m[name] = _types[i].decode(r, r.uint32());
            }
          } else {
            //console.log("m",JSON.stringify(m),"type",type,"field",field);
            m[name] = r[type]();
          }

          break;
        }

        if (!find) {
          console.log("t", t);
          r.skipType(t & 7);
        }
      }

      for (i = 0; i < mtype._fieldsArray.length; ++i) {
        var rfield = mtype._fieldsArray[i];

        if (rfield.required) {
          if (!m.hasOwnProperty(rfield.name)) {
            throw util.ProtocolError(missing(rfield), {
              instance: m
            });
          }
        }
      } //mtype.fieldsArray.filter(function(field) { return field.map; }).length


      return m;
    };
  };
}

module.exports = decoder;

decoder._configure = function () {
  Enum = __webpack_require__(/*! ./enum */ "./src/weichatPb/src/enum.js");
  types = __webpack_require__(/*! ./types */ "./src/weichatPb/src/types.js");
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

/***/ }),

/***/ "./src/weichatPb/src/encoder.js":
/*!**************************************!*\
  !*** ./src/weichatPb/src/encoder.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/**
 * Created by zhangmiao on 2018/3/13.
 * 改写原来的googleProtocolBuffer的encode,请不要告我侵犯版权;/(ㄒoㄒ)/~~
 */


var Enum;
var types; //得到一个编码过程

function encoder(mtype) {
  return function (options) {
    var Writer = options.Writer;
    var _types = options.types;
    var util = options.util;
    return function (message, writer) {
      writer = writer || Writer.create();
      var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);

      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];

        var index = mtype._fieldsArray.indexOf(field);

        var type = field.resolvedType instanceof Enum ? 'uint32' : field.type;
        var wireType = types.basic[type];
        var ref = message[field.name]; //此处增加枚举型替换,有可能外界传入的枚举是string,转换成number

        if (field.resolvedType instanceof Enum && typeof ref === 'string') {
          ref = _types[index]['values'][ref];
        } //正式进行序列化


        if (field.map) {
          //有待验证
          if (ref != null && message.hasOwnProperty(field.name)) {
            for (var ks = Object.keys(ref), l = 0; l < ks.length; ++l) {
              writer.uint32((field.id << 3 | 2) >>> 0).fork().uint32(8 | types.mapKey[field.keyType])[field.keyType](ks[l]);

              if (wireType === undefined) {
                _types[index].encode(ref[ks[l]], writer.uint32(18).fork()).ldelim().ldelim();
              } else {
                writer.uint32(16 | wireType)[type](ref[ks[l]]).ldelim();
              }
            }
          }
        } else if (field.repeated) {
          if (ref && ref.length) {
            if (field.packed && types.packed[type] !== undefined) {
              //如果数据可以被packed的话
              writer.uint32((field.id << 3 | 2) >>> 0).fork();

              for (var j = 0; j < ref.length; j++) {
                writer[type](ref[j]);
              }

              writer.ldelim();
            } else {
              //数据不能packed的话
              for (var k = 0; k < ref.length; k++) {
                if (wireType === undefined) {
                  //如果是一个自定义的数据类型
                  if (field.resolvedType.group) {
                    _types[index].encode(ref[k], writer.uint32((field.id << 3 | 3) >>> 0)).uint32((field.id << 3 | 4) >>> 0);
                  } else {
                    _types[index].encode(ref[k], writer.uint32((field.id << 3 | 2) >>> 0).fork()).ldelim();
                  }
                } else {
                  //如果是string 或者 bytes
                  writer.uint32((field.id << 3 | wireType) >>> 0)[type](ref[k]);
                }
              }
            }
          }
        } else {
          if (!field.optional || ref != null && message.hasOwnProperty(field.name)
          /*|| field.partOf*/
          ) {
            if (!field.optional && (ref == null || !message.hasOwnProperty(field.name))) {
              console.warn('注意啦!!!很大概率会报错 类型:', message.$type ? message.$type.name : "不晓得", '没有设置对应的属性:', field.name, '检查是不是proto文件属性设置为了required');
            }

            if (wireType === undefined) {
              if (field.resolvedType.group) {
                _types[index].encode(ref, writer.uint32((field.id << 3 | 3) >>> 0)).uint32((field.id << 3 | 4) >>> 0);
              } else {
                _types[index].encode(ref, writer.uint32((field.id << 3 | 2) >>> 0).fork()).ldelim();
              }
            } else {
              writer.uint32((field.id << 3 | wireType) >>> 0)[type](ref);
            }
          }
        }
      }

      return writer;
    };
  };
}

module.exports = encoder;

encoder._configure = function () {
  Enum = __webpack_require__(/*! ./enum */ "./src/weichatPb/src/enum.js");
  types = __webpack_require__(/*! ./types */ "./src/weichatPb/src/types.js");
};

/***/ }),

/***/ "./src/weichatPb/src/enum.js":
/*!***********************************!*\
  !*** ./src/weichatPb/src/enum.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

var _typeof = (__webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js")["default"]);

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");

__webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/**
 * Created by zhangmiao on 2018/3/12.
 */


module.exports = Enum;

var ReflectionObject = __webpack_require__(/*! ./object */ "./src/weichatPb/src/object.js");

((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";

var Namespace = __webpack_require__(/*! ./namespace */ "./src/weichatPb/src/namespace.js");

function Enum(name, values, options, comment, comments) {
  ReflectionObject.call(this, name, options);
  if (values && _typeof(values) !== "object") throw TypeError("values must be an object");
  /**
   * Enum values by id.
   * @type {Object.<number,string>}
   */

  this.valuesById = {};
  /**
   * Enum values by name.
   * @type {Object.<string,number>}
   */

  this.values = Object.create(this.valuesById); // toJSON, marker

  /**
   * Enum comment text.
   * @type {string|null}
   */

  this.comment = comment;
  /**
   * Value comment texts, if any.
   * @type {Object.<string,string>}
   */

  this.comments = comments || {};
  /**
   * Reserved ranges, if any.
   * @type {Array.<number[]|string>}
   */

  this.reserved = undefined; // toJSON
  // Note that values inherit valuesById on their prototype which makes them a TypeScript-
  // compatible enum. This is used by pbts to write actual enum definitions that work for
  // static and reflection code alike instead of emitting generic object definitions.

  if (values) for (var keys = Object.keys(values), i = 0; i < keys.length; ++i) {
    if (typeof values[keys[i]] === "number") // use forward entries only
      this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
  }
}
/**
 * Enum descriptor.
 * @interface IEnum
 * @property {Object.<string,number>} values Enum values
 * @property {Object.<string,*>} [options] Enum options
 */

/**
 * Constructs an enum from an enum descriptor.
 * @param {string} name Enum name
 * @param {IEnum} json Enum descriptor
 * @returns {Enum} Created enum
 * @throws {TypeError} If arguments are invalid
 */


Enum.fromJSON = function fromJSON(name, json) {
  var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
  enm.reserved = json.reserved;
  return enm;
};
/**
 * Converts this enum to an enum descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IEnum} Enum descriptor
 */


Enum.prototype.toJSON = function toJSON(toJSONOptions) {
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", keepComments ? this.comment : undefined, "comments", keepComments ? this.comments : undefined]);
};
/**
 * Adds a value to this enum.
 * @param {string} name Value name
 * @param {number} id Value id
 * @param {string} [comment] Comment, if any
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a value with this name or id
 */


Enum.prototype.add = function add(name, id, comment) {
  // utilized by the parser but not by .fromJSON
  if (!util.isString(name)) throw TypeError("name must be a string");
  if (!util.isInteger(id)) throw TypeError("id must be an integer");
  if (this.values[name] !== undefined) throw Error("duplicate name '" + name + "' in " + this);
  if (this.isReservedId(id)) throw Error("id " + id + " is reserved in " + this);
  if (this.isReservedName(name)) throw Error("name '" + name + "' is reserved in " + this);

  if (this.valuesById[id] !== undefined) {
    if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + id + " in " + this);
    this.values[name] = id;
  } else this.valuesById[this.values[name] = id] = name;

  this.comments[name] = comment || null;
  return this;
};
/**
 * Removes a value from this enum
 * @param {string} name Value name
 * @returns {Enum} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `name` is not a name of this enum
 */


Enum.prototype.remove = function remove(name) {
  if (!util.isString(name)) throw TypeError("name must be a string");
  var val = this.values[name];
  if (val == null) throw Error("name '" + name + "' does not exist in " + this);
  delete this.valuesById[val];
  delete this.values[name];
  delete this.comments[name];
  return this;
};
/**
 * Tests if the specified id is reserved.
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */


Enum.prototype.isReservedId = function isReservedId(id) {
  return Namespace.isReservedId(this.reserved, id);
};
/**
 * Tests if the specified name is reserved.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */


Enum.prototype.isReservedName = function isReservedName(name) {
  return Namespace.isReservedName(this.reserved, name);
};

/***/ }),

/***/ "./src/weichatPb/src/field.js":
/*!************************************!*\
  !*** ./src/weichatPb/src/field.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

var _typeof = (__webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js")["default"]);

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");

__webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/**
 * Created by zhangmiao on 2018/3/12.
 */


module.exports = Field; // extends ReflectionObject

var ReflectionObject = __webpack_require__(/*! ./object */ "./src/weichatPb/src/object.js");

((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
var Enum, types, util;
var Type; // cyclic

var ruleRe = /^required|optional|repeated$/;
/**
 * Constructs a new message field instance. Note that {@link MapField|map fields} have their own class.
 * @name Field
 * @classdesc Reflected message field.
 * @extends FieldBase
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 */

/**
 * Constructs a field from a field descriptor.
 * @param {string} name Field name
 * @param {IField} json Field descriptor
 * @returns {Field} Created field
 * @throws {TypeError} If arguments are invalid
 */

Field.fromJSON = function fromJSON(name, json) {
  return new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
};
/**
 * Not an actual constructor. Use {@link Field} instead.
 * @classdesc Base class of all reflected message fields. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports FieldBase
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */


function Field(name, id, type, rule, extend, options, comment) {
  if (util.isObject(rule)) {
    comment = extend;
    options = rule;
    rule = extend = undefined;
  } else if (util.isObject(extend)) {
    comment = options;
    options = extend;
    extend = undefined;
  }

  ReflectionObject.call(this, name, options);
  if (!util.isInteger(id) || id < 0) throw TypeError("id must be a non-negative integer");
  if (!util.isString(type)) throw TypeError("type must be a string");
  if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase())) throw TypeError("rule must be a string rule");
  if (extend !== undefined && !util.isString(extend)) throw TypeError("extend must be a string");
  /**
   * Field rule, if any.
   * @type {string|undefined}
   */

  this.rule = rule && rule !== "optional" ? rule : undefined; // toJSON

  /**
   * Field type.
   * @type {string}
   */

  this.type = type; // toJSON

  /**
   * Unique field id.
   * @type {number}
   */

  this.id = id; // toJSON, marker

  /**
   * Extended type if different from parent.
   * @type {string|undefined}
   */

  this.extend = extend || undefined; // toJSON

  /**
   * Whether this field is required.
   * @type {boolean}
   */

  this.required = rule === "required";
  /**
   * Whether this field is optional.
   * @type {boolean}
   */

  this.optional = !this.required;
  /**
   * Whether this field is repeated.
   * @type {boolean}
   */

  this.repeated = rule === "repeated";
  /**
   * Whether this field is a map or not.
   * @type {boolean}
   */

  this.map = false;
  /**
   * Message this field belongs to.
   * @type {Type|null}
   */

  this.message = null;
  /**
   * OneOf this field belongs to, if any,
   * @type {OneOf|null}
   */

  this.partOf = null;
  /**
   * The field type's default value.
   * @type {*}
   */

  this.typeDefault = null;
  /**
   * The field's default value on prototypes.
   * @type {*}
   */

  this.defaultValue = null;
  /**
   * Whether this field's value should be treated as a long.
   * @type {boolean}
   */

  this["long"] = util.Long ? types["long"][type] !== undefined :
  /* istanbul ignore next */
  false;
  /**
   * Whether this field's value is a buffer.
   * @type {boolean}
   */

  this.bytes = type === "bytes";
  /**
   * Resolved type if not a basic type.
   * @type {Type|Enum|null}
   */

  this.resolvedType = null;
  /**
   * Sister-field within the extended type if a declaring extension field.
   * @type {Field|null}
   */

  this.extensionField = null;
  /**
   * Sister-field within the declaring namespace if an extended field.
   * @type {Field|null}
   */

  this.declaringField = null;
  /**
   * Internally remembers whether this field is packed.
   * @type {boolean|null}
   * @private
   */

  this._packed = null;
  /**
   * Comment for this field.
   * @type {string|null}
   */

  this.comment = comment;
}
/**
 * Determines whether this field is packed. Only relevant when repeated and working with proto2.
 * @name Field#packed
 * @type {boolean}
 * @readonly
 */


Object.defineProperty(Field.prototype, "packed", {
  get: function get() {
    // defaults to packed=true if not explicity set to false
    if (this._packed === null) this._packed = this.getOption("packed") !== false;
    return this._packed;
  }
});
/**
 * @override
 */

Field.prototype.setOption = function setOption(name, value, ifNotSet) {
  if (name === "packed") // clear cached before setting
    this._packed = null;
  return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
};
/**
 * Field descriptor.
 * @interface IField
 * @property {string} [rule="optional"] Field rule
 * @property {string} type Field type
 * @property {number} id Field id
 * @property {Object.<string,*>} [options] Field options
 */

/**
 * Extension field descriptor.
 * @interface IExtensionField
 * @extends IField
 * @property {string} extend Extended type
 */

/**
 * Converts this field to a field descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IField} Field descriptor
 */


Field.prototype.toJSON = function toJSON(toJSONOptions) {
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["rule", this.rule !== "optional" && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined]);
};
/**
 * Resolves this field's type references.
 * @returns {Field} `this`
 * @throws {Error} If any reference cannot be resolved
 */


Field.prototype.resolve = function resolve() {
  if (this.resolved) return this;

  if ((this.typeDefault = types.defaults[this.type]) === undefined) {
    // if not a basic type, resolve it
    this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
    if (this.resolvedType instanceof Type) this.typeDefault = null;else // instanceof Enum
      this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]; // first defined
  } // use explicitly set default value if present


  if (this.options && this.options["default"] != null) {
    this.typeDefault = this.options["default"];
    if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string") this.typeDefault = this.resolvedType.values[this.typeDefault];
  } // remove unnecessary options


  if (this.options) {
    if (this.options.packed === true || this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum)) delete this.options.packed;
    if (!Object.keys(this.options).length) this.options = undefined;
  } // convert to internal data type if necesssary


  if (this["long"]) {
    this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
    /* istanbul ignore else */

    if (Object.freeze) Object.freeze(this.typeDefault); // long instances are meant to be immutable anyway (i.e. use small int cache that even requires it)
  } else if (this.bytes && typeof this.typeDefault === "string") {
    var buf; //if (util.base64.test(this.typeDefault))
    //    util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
    //else

    util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
    this.typeDefault = buf;
  } // take special care of maps and repeated fields


  if (this.map) this.defaultValue = util.emptyObject;else if (this.repeated) this.defaultValue = util.emptyArray;else this.defaultValue = this.typeDefault; // ensure proper value on prototype

  if (this.parent instanceof Type) {
    this.parent.ctor.prototype[this.name] = this.defaultValue;
  }

  return ReflectionObject.prototype.resolve.call(this);
};
/**
 * Decorator function as returned by {@link Field.d} and {@link MapField.d} (TypeScript).
 * @typedef FieldDecorator
 * @type {function}
 * @param {Object} prototype Target prototype
 * @param {string} fieldName Field name
 * @returns {undefined}
 */

/**
 * Field decorator (TypeScript).
 * @name Field.d
 * @function
 * @param {number} fieldId Field id
 * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"string"|"bool"|"bytes"|Object} fieldType Field type
 * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
 * @param {T} [defaultValue] Default value
 * @returns {FieldDecorator} Decorator function
 * @template T extends number | number[] | Long | Long[] | string | string[] | boolean | boolean[] | Uint8Array | Uint8Array[] | Buffer | Buffer[]
 */


Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
  // submessage: decorate the submessage and use its name as the type
  if (typeof fieldType === "function") fieldType = util.decorateType(fieldType).name; // enum reference: create a reflected copy of the enum and keep reuseing it
  else if (fieldType && _typeof(fieldType) === "object") fieldType = util.decorateEnum(fieldType).name;
  return function fieldDecorator(prototype, fieldName) {
    util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, {
      "default": defaultValue
    }));
  };
};
/**
 * Field decorator (TypeScript).
 * @name Field.d
 * @function
 * @param {number} fieldId Field id
 * @param {Constructor<T>|string} fieldType Field type
 * @param {"optional"|"required"|"repeated"} [fieldRule="optional"] Field rule
 * @returns {FieldDecorator} Decorator function
 * @template T extends Message<T>
 * @variation 2
 */
// like Field.d but without a default value


Field._configure = function configure() {
  Type = __webpack_require__(/*! ./type */ "./src/weichatPb/src/type.js");
  Enum = __webpack_require__(/*! ./enum */ "./src/weichatPb/src/enum.js");
  types = __webpack_require__(/*! ./types */ "./src/weichatPb/src/types.js");
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

/***/ }),

/***/ "./src/weichatPb/src/float.js":
/*!************************************!*\
  !*** ./src/weichatPb/src/float.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.typed-array.float32-array.js */ "./node_modules/core-js/modules/es.typed-array.float32-array.js");

__webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");

__webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");

__webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");

__webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");

__webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");

__webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");

__webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");

__webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");

__webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");

__webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");

__webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");

__webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");

__webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");

__webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");

__webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.typed-array.float64-array.js */ "./node_modules/core-js/modules/es.typed-array.float64-array.js");

module.exports = factory(factory);
/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */
// Factory function for the purpose of node-based testing in modified global environments

function factory(exports) {
  // float: typed array
  if (typeof Float32Array !== "undefined") (function () {
    var f32 = new Float32Array([-0]),
        f8b = new Uint8Array(f32.buffer),
        le = f8b[3] === 128;

    function writeFloat_f32_cpy(val, buf, pos) {
      f32[0] = val;
      buf[pos] = f8b[0];
      buf[pos + 1] = f8b[1];
      buf[pos + 2] = f8b[2];
      buf[pos + 3] = f8b[3];
    }

    function writeFloat_f32_rev(val, buf, pos) {
      f32[0] = val;
      buf[pos] = f8b[3];
      buf[pos + 1] = f8b[2];
      buf[pos + 2] = f8b[1];
      buf[pos + 3] = f8b[0];
    }
    /* istanbul ignore next */


    exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
    /* istanbul ignore next */

    exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

    function readFloat_f32_cpy(buf, pos) {
      f8b[0] = buf[pos];
      f8b[1] = buf[pos + 1];
      f8b[2] = buf[pos + 2];
      f8b[3] = buf[pos + 3];
      return f32[0];
    }

    function readFloat_f32_rev(buf, pos) {
      f8b[3] = buf[pos];
      f8b[2] = buf[pos + 1];
      f8b[1] = buf[pos + 2];
      f8b[0] = buf[pos + 3];
      return f32[0];
    }
    /* istanbul ignore next */


    exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
    /* istanbul ignore next */

    exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy; // float: ieee754
  })();else (function () {
    function writeFloat_ieee754(writeUint, val, buf, pos) {
      var sign = val < 0 ? 1 : 0;
      if (sign) val = -val;
      if (val === 0) writeUint(1 / val > 0 ?
      /* positive */
      0 :
      /* negative 0 */
      2147483648, buf, pos);else if (isNaN(val)) writeUint(2143289344, buf, pos);else if (val > 3.4028234663852886e+38) // +-Infinity
        writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);else if (val < 1.1754943508222875e-38) // denormal
        writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);else {
        var exponent = Math.floor(Math.log(val) / Math.LN2),
            mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
        writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
      }
    }

    exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
    exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

    function readFloat_ieee754(readUint, buf, pos) {
      var uint = readUint(buf, pos),
          sign = (uint >> 31) * 2 + 1,
          exponent = uint >>> 23 & 255,
          mantissa = uint & 8388607;
      return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
      ? sign * 1.401298464324817e-45 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
    }

    exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
    exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
  })(); // double: typed array

  if (typeof Float64Array !== "undefined") (function () {
    var f64 = new Float64Array([-0]),
        f8b = new Uint8Array(f64.buffer),
        le = f8b[7] === 128;

    function writeDouble_f64_cpy(val, buf, pos) {
      f64[0] = val;
      buf[pos] = f8b[0];
      buf[pos + 1] = f8b[1];
      buf[pos + 2] = f8b[2];
      buf[pos + 3] = f8b[3];
      buf[pos + 4] = f8b[4];
      buf[pos + 5] = f8b[5];
      buf[pos + 6] = f8b[6];
      buf[pos + 7] = f8b[7];
    }

    function writeDouble_f64_rev(val, buf, pos) {
      f64[0] = val;
      buf[pos] = f8b[7];
      buf[pos + 1] = f8b[6];
      buf[pos + 2] = f8b[5];
      buf[pos + 3] = f8b[4];
      buf[pos + 4] = f8b[3];
      buf[pos + 5] = f8b[2];
      buf[pos + 6] = f8b[1];
      buf[pos + 7] = f8b[0];
    }
    /* istanbul ignore next */


    exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
    /* istanbul ignore next */

    exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

    function readDouble_f64_cpy(buf, pos) {
      f8b[0] = buf[pos];
      f8b[1] = buf[pos + 1];
      f8b[2] = buf[pos + 2];
      f8b[3] = buf[pos + 3];
      f8b[4] = buf[pos + 4];
      f8b[5] = buf[pos + 5];
      f8b[6] = buf[pos + 6];
      f8b[7] = buf[pos + 7];
      return f64[0];
    }

    function readDouble_f64_rev(buf, pos) {
      f8b[7] = buf[pos];
      f8b[6] = buf[pos + 1];
      f8b[5] = buf[pos + 2];
      f8b[4] = buf[pos + 3];
      f8b[3] = buf[pos + 4];
      f8b[2] = buf[pos + 5];
      f8b[1] = buf[pos + 6];
      f8b[0] = buf[pos + 7];
      return f64[0];
    }
    /* istanbul ignore next */


    exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
    /* istanbul ignore next */

    exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy; // double: ieee754
  })();else (function () {
    function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
      var sign = val < 0 ? 1 : 0;
      if (sign) val = -val;

      if (val === 0) {
        writeUint(0, buf, pos + off0);
        writeUint(1 / val > 0 ?
        /* positive */
        0 :
        /* negative 0 */
        2147483648, buf, pos + off1);
      } else if (isNaN(val)) {
        writeUint(0, buf, pos + off0);
        writeUint(2146959360, buf, pos + off1);
      } else if (val > 1.7976931348623157e+308) {
        // +-Infinity
        writeUint(0, buf, pos + off0);
        writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
      } else {
        var mantissa;

        if (val < 2.2250738585072014e-308) {
          // denormal
          mantissa = val / 5e-324;
          writeUint(mantissa >>> 0, buf, pos + off0);
          writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
        } else {
          var exponent = Math.floor(Math.log(val) / Math.LN2);
          if (exponent === 1024) exponent = 1023;
          mantissa = val * Math.pow(2, -exponent);
          writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
          writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
        }
      }
    }

    exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
    exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

    function readDouble_ieee754(readUint, off0, off1, buf, pos) {
      var lo = readUint(buf, pos + off0),
          hi = readUint(buf, pos + off1);
      var sign = (hi >> 31) * 2 + 1,
          exponent = hi >>> 20 & 2047,
          mantissa = 4294967296 * (hi & 1048575) + lo;
      return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 // denormal
      ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
    }

    exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
    exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
  })();
  return exports;
} // uint helpers


function writeUintLE(val, buf, pos) {
  buf[pos] = val & 255;
  buf[pos + 1] = val >>> 8 & 255;
  buf[pos + 2] = val >>> 16 & 255;
  buf[pos + 3] = val >>> 24;
}

function writeUintBE(val, buf, pos) {
  buf[pos] = val >>> 24;
  buf[pos + 1] = val >>> 16 & 255;
  buf[pos + 2] = val >>> 8 & 255;
  buf[pos + 3] = val & 255;
}

function readUintLE(buf, pos) {
  return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
  return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
}

/***/ }),

/***/ "./src/weichatPb/src/long.js":
/*!***********************************!*\
  !*** ./src/weichatPb/src/long.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");

__webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");

__webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");

__webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");

__webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");

__webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");

__webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");

__webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");

__webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");

__webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");

__webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");

__webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");

__webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");

__webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");

__webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.sub.js */ "./node_modules/core-js/modules/es.string.sub.js");

module.exports = Long;
/**
 * wasm optimizations, to do native i64 multiplication and divide
 */

var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
} catch (e) {// no wasm support :(
}
/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */


function Long(low, high, unsigned) {
  /**
   * The low 32 bits as a signed value.
   * @type {number}
   */
  this.low = low | 0;
  /**
   * The high 32 bits as a signed value.
   * @type {number}
   */

  this.high = high | 0;
  /**
   * Whether unsigned or not.
   * @type {boolean}
   */

  this.unsigned = !!unsigned;
} // The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */


Long.prototype.__isLong__;
Object.defineProperty(Long.prototype, "__isLong__", {
  value: true
});
/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */

function isLong(obj) {
  return (obj && obj["__isLong__"]) === true;
}
/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */


Long.isLong = isLong;
/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */

var INT_CACHE = {};
/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */

var UINT_CACHE = {};
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromInt(value, unsigned) {
  var obj, cachedObj, cache;

  if (unsigned) {
    value >>>= 0;

    if (cache = 0 <= value && value < 256) {
      cachedObj = UINT_CACHE[value];
      if (cachedObj) return cachedObj;
    }

    obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
    if (cache) UINT_CACHE[value] = obj;
    return obj;
  } else {
    value |= 0;

    if (cache = -128 <= value && value < 128) {
      cachedObj = INT_CACHE[value];
      if (cachedObj) return cachedObj;
    }

    obj = fromBits(value, value < 0 ? -1 : 0, false);
    if (cache) INT_CACHE[value] = obj;
    return obj;
  }
}
/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */


Long.fromInt = fromInt;
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromNumber(value, unsigned) {
  if (isNaN(value)) return unsigned ? UZERO : ZERO;

  if (unsigned) {
    if (value < 0) return UZERO;
    if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
  } else {
    if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
    if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
  }

  if (value < 0) return fromNumber(-value, unsigned).neg();
  return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
}
/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */


Long.fromNumber = fromNumber;
/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromBits(lowBits, highBits, unsigned) {
  return new Long(lowBits, highBits, unsigned);
}
/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */


Long.fromBits = fromBits;
/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */

var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */

function fromString(str, unsigned, radix) {
  if (str.length === 0) throw Error('empty string');
  if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return ZERO;

  if (typeof unsigned === 'number') {
    // For goog.math.long compatibility
    radix = unsigned, unsigned = false;
  } else {
    unsigned = !!unsigned;
  }

  radix = radix || 10;
  if (radix < 2 || 36 < radix) throw RangeError('radix');
  var p;
  if ((p = str.indexOf('-')) > 0) throw Error('interior hyphen');else if (p === 0) {
    return fromString(str.substring(1), unsigned, radix).neg();
  } // Do several (8) digits each time through the loop, so as to
  // minimize the calls to the very expensive emulated div.

  var radixToPower = fromNumber(pow_dbl(radix, 8));
  var result = ZERO;

  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i),
        value = parseInt(str.substring(i, i + size), radix);

    if (size < 8) {
      var power = fromNumber(pow_dbl(radix, size));
      result = result.mul(power).add(fromNumber(value));
    } else {
      result = result.mul(radixToPower);
      result = result.add(fromNumber(value));
    }
  }

  result.unsigned = unsigned;
  return result;
}
/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */


Long.fromString = fromString;
/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */

function fromValue(val, unsigned) {
  if (typeof val === 'number') return fromNumber(val, unsigned);
  if (typeof val === 'string') return fromString(val, unsigned); // Throws for non-objects, converts non-instanceof Long:

  return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}
/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */


Long.fromValue = fromValue; // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_16_DBL = 1 << 16;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_24_DBL = 1 << 24;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */

var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
/**
 * @type {!Long}
 * @const
 * @inner
 */

var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
/**
 * @type {!Long}
 * @inner
 */

var ZERO = fromInt(0);
/**
 * Signed zero.
 * @type {!Long}
 */

Long.ZERO = ZERO;
/**
 * @type {!Long}
 * @inner
 */

var UZERO = fromInt(0, true);
/**
 * Unsigned zero.
 * @type {!Long}
 */

Long.UZERO = UZERO;
/**
 * @type {!Long}
 * @inner
 */

var ONE = fromInt(1);
/**
 * Signed one.
 * @type {!Long}
 */

Long.ONE = ONE;
/**
 * @type {!Long}
 * @inner
 */

var UONE = fromInt(1, true);
/**
 * Unsigned one.
 * @type {!Long}
 */

Long.UONE = UONE;
/**
 * @type {!Long}
 * @inner
 */

var NEG_ONE = fromInt(-1);
/**
 * Signed negative one.
 * @type {!Long}
 */

Long.NEG_ONE = NEG_ONE;
/**
 * @type {!Long}
 * @inner
 */

var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
/**
 * Maximum signed value.
 * @type {!Long}
 */

Long.MAX_VALUE = MAX_VALUE;
/**
 * @type {!Long}
 * @inner
 */

var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
/**
 * Maximum unsigned value.
 * @type {!Long}
 */

Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
/**
 * @type {!Long}
 * @inner
 */

var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
/**
 * Minimum signed value.
 * @type {!Long}
 */

Long.MIN_VALUE = MIN_VALUE;
/**
 * @alias Long.prototype
 * @inner
 */

var LongPrototype = Long.prototype;
/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @returns {number}
 */

LongPrototype.toInt = function toInt() {
  return this.unsigned ? this.low >>> 0 : this.low;
};
/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @returns {number}
 */


LongPrototype.toNumber = function toNumber() {
  if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
  return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};
/**
 * Converts the Long to a string written in the specified radix.
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */


LongPrototype.toString = function toString(radix) {
  radix = radix || 10;
  if (radix < 2 || 36 < radix) throw RangeError('radix');
  if (this.isZero()) return '0';

  if (this.isNegative()) {
    // Unsigned Longs are never negative
    if (this.eq(MIN_VALUE)) {
      // We need to change the Long value before it can be negated, so we remove
      // the bottom-most digit in this base and then recurse to do the rest.
      var radixLong = fromNumber(radix),
          div = this.div(radixLong),
          rem1 = div.mul(radixLong).sub(this);
      return div.toString(radix) + rem1.toInt().toString(radix);
    } else return '-' + this.neg().toString(radix);
  } // Do several (6) digits each time through the loop, so as to
  // minimize the calls to the very expensive emulated div.


  var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
      rem = this;
  var result = '';

  while (true) {
    var remDiv = rem.div(radixToPower),
        intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
        digits = intval.toString(radix);
    rem = remDiv;
    if (rem.isZero()) return digits + result;else {
      while (digits.length < 6) {
        digits = '0' + digits;
      }

      result = '' + digits + result;
    }
  }
};
/**
 * Gets the high 32 bits as a signed integer.
 * @returns {number} Signed high bits
 */


LongPrototype.getHighBits = function getHighBits() {
  return this.high;
};
/**
 * Gets the high 32 bits as an unsigned integer.
 * @returns {number} Unsigned high bits
 */


LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
  return this.high >>> 0;
};
/**
 * Gets the low 32 bits as a signed integer.
 * @returns {number} Signed low bits
 */


LongPrototype.getLowBits = function getLowBits() {
  return this.low;
};
/**
 * Gets the low 32 bits as an unsigned integer.
 * @returns {number} Unsigned low bits
 */


LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
  return this.low >>> 0;
};
/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @returns {number}
 */


LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
  if (this.isNegative()) // Unsigned Longs are never negative
    return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
  var val = this.high != 0 ? this.high : this.low;

  for (var bit = 31; bit > 0; bit--) {
    if ((val & 1 << bit) != 0) break;
  }

  return this.high != 0 ? bit + 33 : bit + 1;
};
/**
 * Tests if this Long's value equals zero.
 * @returns {boolean}
 */


LongPrototype.isZero = function isZero() {
  return this.high === 0 && this.low === 0;
};
/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */


LongPrototype.eqz = LongPrototype.isZero;
/**
 * Tests if this Long's value is negative.
 * @returns {boolean}
 */

LongPrototype.isNegative = function isNegative() {
  return !this.unsigned && this.high < 0;
};
/**
 * Tests if this Long's value is positive.
 * @returns {boolean}
 */


LongPrototype.isPositive = function isPositive() {
  return this.unsigned || this.high >= 0;
};
/**
 * Tests if this Long's value is odd.
 * @returns {boolean}
 */


LongPrototype.isOdd = function isOdd() {
  return (this.low & 1) === 1;
};
/**
 * Tests if this Long's value is even.
 * @returns {boolean}
 */


LongPrototype.isEven = function isEven() {
  return (this.low & 1) === 0;
};
/**
 * Tests if this Long's value equals the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.equals = function equals(other) {
  if (!isLong(other)) other = fromValue(other);
  if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
  return this.high === other.high && this.low === other.low;
};
/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.eq = LongPrototype.equals;
/**
 * Tests if this Long's value differs from the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.notEquals = function notEquals(other) {
  return !this.eq(
  /* validates */
  other);
};
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.neq = LongPrototype.notEquals;
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.ne = LongPrototype.notEquals;
/**
 * Tests if this Long's value is less than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.lessThan = function lessThan(other) {
  return this.comp(
  /* validates */
  other) < 0;
};
/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.lt = LongPrototype.lessThan;
/**
 * Tests if this Long's value is less than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
  return this.comp(
  /* validates */
  other) <= 0;
};
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.lte = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.le = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is greater than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.greaterThan = function greaterThan(other) {
  return this.comp(
  /* validates */
  other) > 0;
};
/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.gt = LongPrototype.greaterThan;
/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
  return this.comp(
  /* validates */
  other) >= 0;
};
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */


LongPrototype.gte = LongPrototype.greaterThanOrEqual;
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */

LongPrototype.ge = LongPrototype.greaterThanOrEqual;
/**
 * Compares this Long's value with the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */

LongPrototype.compare = function compare(other) {
  if (!isLong(other)) other = fromValue(other);
  if (this.eq(other)) return 0;
  var thisNeg = this.isNegative(),
      otherNeg = other.isNegative();
  if (thisNeg && !otherNeg) return -1;
  if (!thisNeg && otherNeg) return 1; // At this point the sign bits are the same

  if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1; // Both are positive if at least one is unsigned

  return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
};
/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */


LongPrototype.comp = LongPrototype.compare;
/**
 * Negates this Long's value.
 * @returns {!Long} Negated Long
 */

LongPrototype.negate = function negate() {
  if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
  return this.not().add(ONE);
};
/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */


LongPrototype.neg = LongPrototype.negate;
/**
 * Returns the sum of this and the specified Long.
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */

LongPrototype.add = function add(addend) {
  if (!isLong(addend)) addend = fromValue(addend); // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

  var a48 = this.high >>> 16;
  var a32 = this.high & 0xFFFF;
  var a16 = this.low >>> 16;
  var a00 = this.low & 0xFFFF;
  var b48 = addend.high >>> 16;
  var b32 = addend.high & 0xFFFF;
  var b16 = addend.low >>> 16;
  var b00 = addend.low & 0xFFFF;
  var c48 = 0,
      c32 = 0,
      c16 = 0,
      c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 + b48;
  c48 &= 0xFFFF;
  return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
};
/**
 * Returns the difference of this and the specified Long.
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */


LongPrototype.subtract = function subtract(subtrahend) {
  if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
  return this.add(subtrahend.neg());
};
/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */


LongPrototype.sub = LongPrototype.subtract;
/**
 * Returns the product of this and the specified Long.
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */

LongPrototype.multiply = function multiply(multiplier) {
  if (this.isZero()) return ZERO;
  if (!isLong(multiplier)) multiplier = fromValue(multiplier); // use wasm support if present

  if (wasm) {
    var low = wasm.mul(this.low, this.high, multiplier.low, multiplier.high);
    return fromBits(low, wasm.get_high(), this.unsigned);
  }

  if (multiplier.isZero()) return ZERO;
  if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
  if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;

  if (this.isNegative()) {
    if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());else return this.neg().mul(multiplier).neg();
  } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg(); // If both longs are small, use float multiplication


  if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned); // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
  // We can skip products that would overflow.

  var a48 = this.high >>> 16;
  var a32 = this.high & 0xFFFF;
  var a16 = this.low >>> 16;
  var a00 = this.low & 0xFFFF;
  var b48 = multiplier.high >>> 16;
  var b32 = multiplier.high & 0xFFFF;
  var b16 = multiplier.low >>> 16;
  var b00 = multiplier.low & 0xFFFF;
  var c48 = 0,
      c32 = 0,
      c16 = 0,
      c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 0xFFFF;
  return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
};
/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */


LongPrototype.mul = LongPrototype.multiply;
/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */

LongPrototype.divide = function divide(divisor) {
  if (!isLong(divisor)) divisor = fromValue(divisor);
  if (divisor.isZero()) throw Error('division by zero'); // use wasm support if present

  if (wasm) {
    // guard against signed division overflow: the largest
    // negative number / -1 would be 1 larger than the largest
    // positive number, due to two's complement.
    if (!this.unsigned && this.high === -0x80000000 && divisor.low === -1 && divisor.high === -1) {
      // be consistent with non-wasm code path
      return this;
    }

    var low = (this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, divisor.low, divisor.high);
    return fromBits(low, wasm.get_high(), this.unsigned);
  }

  if (this.isZero()) return this.unsigned ? UZERO : ZERO;
  var approx, rem, res;

  if (!this.unsigned) {
    // This section is only relevant for signed longs and is derived from the
    // closure library as a whole.
    if (this.eq(MIN_VALUE)) {
      if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
      else if (divisor.eq(MIN_VALUE)) return ONE;else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shr(1);
        approx = halfThis.div(divisor).shl(1);

        if (approx.eq(ZERO)) {
          return divisor.isNegative() ? ONE : NEG_ONE;
        } else {
          rem = this.sub(divisor.mul(approx));
          res = approx.add(rem.div(divisor));
          return res;
        }
      }
    } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;

    if (this.isNegative()) {
      if (divisor.isNegative()) return this.neg().div(divisor.neg());
      return this.neg().div(divisor).neg();
    } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();

    res = ZERO;
  } else {
    // The algorithm below has not been made for unsigned longs. It's therefore
    // required to take special care of the MSB prior to running it.
    if (!divisor.unsigned) divisor = divisor.toUnsigned();
    if (divisor.gt(this)) return UZERO;
    if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
      return UONE;
    res = UZERO;
  } // Repeat the following until the remainder is less than other:  find a
  // floating-point that approximates remainder / other *from below*, add this
  // into the result, and subtract it from the remainder.  It is critical that
  // the approximate value is less than or equal to the real value so that the
  // remainder never becomes negative.


  rem = this;

  while (rem.gte(divisor)) {
    // Approximate the result of division. This may be a little greater or
    // smaller than the actual value.
    approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber())); // We will tweak the approximate result by changing it in the 48-th digit or
    // the smallest non-fractional digit, whichever is larger.

    var log2 = Math.ceil(Math.log(approx) / Math.LN2),
        delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48),
        // Decrease the approximation until it is smaller than the remainder.  Note
    // that if it is too large, the product overflows and is negative.
    approxRes = fromNumber(approx),
        approxRem = approxRes.mul(divisor);

    while (approxRem.isNegative() || approxRem.gt(rem)) {
      approx -= delta;
      approxRes = fromNumber(approx, this.unsigned);
      approxRem = approxRes.mul(divisor);
    } // We know the answer can't be zero... and actually, zero would cause
    // infinite recursion since we would make no progress.


    if (approxRes.isZero()) approxRes = ONE;
    res = res.add(approxRes);
    rem = rem.sub(approxRem);
  }

  return res;
};
/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */


LongPrototype.div = LongPrototype.divide;
/**
 * Returns this Long modulo the specified.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */

LongPrototype.modulo = function modulo(divisor) {
  if (!isLong(divisor)) divisor = fromValue(divisor); // use wasm support if present

  if (wasm) {
    var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, divisor.low, divisor.high);
    return fromBits(low, wasm.get_high(), this.unsigned);
  }

  return this.sub(this.div(divisor).mul(divisor));
};
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */


LongPrototype.mod = LongPrototype.modulo;
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */

LongPrototype.rem = LongPrototype.modulo;
/**
 * Returns the bitwise NOT of this Long.
 * @returns {!Long}
 */

LongPrototype.not = function not() {
  return fromBits(~this.low, ~this.high, this.unsigned);
};
/**
 * Returns the bitwise AND of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */


LongPrototype.and = function and(other) {
  if (!isLong(other)) other = fromValue(other);
  return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};
/**
 * Returns the bitwise OR of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */


LongPrototype.or = function or(other) {
  if (!isLong(other)) other = fromValue(other);
  return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};
/**
 * Returns the bitwise XOR of this Long and the given one.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */


LongPrototype.xor = function xor(other) {
  if (!isLong(other)) other = fromValue(other);
  return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};
/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */


LongPrototype.shiftLeft = function shiftLeft(numBits) {
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);else return fromBits(0, this.low << numBits - 32, this.unsigned);
};
/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */


LongPrototype.shl = LongPrototype.shiftLeft;
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */

LongPrototype.shiftRight = function shiftRight(numBits) {
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
};
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */


LongPrototype.shr = LongPrototype.shiftRight;
/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */

LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
  if (isLong(numBits)) numBits = numBits.toInt();
  numBits &= 63;
  if (numBits === 0) return this;else {
    var high = this.high;

    if (numBits < 32) {
      var low = this.low;
      return fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
    } else if (numBits === 32) return fromBits(high, 0, this.unsigned);else return fromBits(high >>> numBits - 32, 0, this.unsigned);
  }
};
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */


LongPrototype.shru = LongPrototype.shiftRightUnsigned;
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */

LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
/**
 * Converts this Long to signed.
 * @returns {!Long} Signed long
 */

LongPrototype.toSigned = function toSigned() {
  if (!this.unsigned) return this;
  return fromBits(this.low, this.high, false);
};
/**
 * Converts this Long to unsigned.
 * @returns {!Long} Unsigned long
 */


LongPrototype.toUnsigned = function toUnsigned() {
  if (this.unsigned) return this;
  return fromBits(this.low, this.high, true);
};
/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {!Array.<number>} Byte representation
 */


LongPrototype.toBytes = function toBytes(le) {
  return le ? this.toBytesLE() : this.toBytesBE();
};
/**
 * Converts this Long to its little endian byte representation.
 * @returns {!Array.<number>} Little endian byte representation
 */


LongPrototype.toBytesLE = function toBytesLE() {
  var hi = this.high,
      lo = this.low;
  return [lo & 0xff, lo >>> 8 & 0xff, lo >>> 16 & 0xff, lo >>> 24, hi & 0xff, hi >>> 8 & 0xff, hi >>> 16 & 0xff, hi >>> 24];
};
/**
 * Converts this Long to its big endian byte representation.
 * @returns {!Array.<number>} Big endian byte representation
 */


LongPrototype.toBytesBE = function toBytesBE() {
  var hi = this.high,
      lo = this.low;
  return [hi >>> 24, hi >>> 16 & 0xff, hi >>> 8 & 0xff, hi & 0xff, lo >>> 24, lo >>> 16 & 0xff, lo >>> 8 & 0xff, lo & 0xff];
};
/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */


Long.fromBytes = function fromBytes(bytes, unsigned, le) {
  return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};
/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */


Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
  return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
};
/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */


Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
  return new Long(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
};

/***/ }),

/***/ "./src/weichatPb/src/longBits.js":
/*!***************************************!*\
  !*** ./src/weichatPb/src/longBits.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

module.exports = LongBits;

function LongBits(lo, hi) {
  this.lo = lo >>> 0;
  this.hi = hi >>> 0;
}

var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function () {
  return 0;
};

zero.zzEncode = zero.zzDecode = function () {
  return this;
};

zero.length = function () {
  return 1;
};

var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

LongBits.fromNumber = function fromNumber(value) {
  if (value === 0) return zero;
  var sign = value < 0; //如果sign为 1 ,表示为负数

  if (sign) value = -value;
  var lo = value >>> 0,
      //取出底32位
  hi = (value - lo) / 4294967296 >>> 0; //取出高32位

  if (sign) {
    //负数
    hi = ~hi >>> 0; //求取高32位的反码

    lo = ~lo >>> 0; //求取低32位的反码

    if (++lo > 4294967295) {
      //低32位大于Math.pow(2,31)-1
      lo = 0;
      if (++hi > 4294967295) //高32位大于Math.pow(2,31)-1
        hi = 0;
    }
  }

  return new LongBits(lo, hi);
};

LongBits.from = function from(value) {
  if (typeof value === "number") return LongBits.fromNumber(value);

  if (typeof value === "string" || value instanceof String) {
    return LongBits.fromNumber(parseInt(value, 10));
  }

  return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

LongBits.prototype.toNumber = function toNumber(unsigned) {
  if (!unsigned && this.hi >>> 31) {
    var lo = ~this.lo + 1 >>> 0,
        hi = ~this.hi >>> 0;
    if (!lo) hi = hi + 1 >>> 0;
    return -(lo + hi * 4294967296);
  }

  return this.lo + this.hi * 4294967296;
};

LongBits.prototype.toLong = function toLong(unsigned) {
  //return util.Long
  //    ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
  //    /* istanbul ignore next */
  //    : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
  return {
    low: this.lo | 0,
    high: this.hi | 0,
    unsigned: Boolean(unsigned)
  };
};

var charCodeAt = String.prototype.charCodeAt;

LongBits.fromHash = function fromHash(hash) {
  if (hash === zeroHash) return zero;
  return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
};

LongBits.prototype.toHash = function toHash() {
  return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
};

LongBits.prototype.zzEncode = function zzEncode() {
  var mask = this.hi >> 31;
  this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
  this.lo = (this.lo << 1 ^ mask) >>> 0;
  return this;
};

LongBits.prototype.zzDecode = function zzDecode() {
  var mask = -(this.lo & 1);
  this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
  this.hi = (this.hi >>> 1 ^ mask) >>> 0;
  return this;
};

LongBits.prototype.length = function length() {
  var part0 = this.lo,
      part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
      part2 = this.hi >>> 24;
  return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
};

/***/ }),

/***/ "./src/weichatPb/src/mapField.js":
/*!***************************************!*\
  !*** ./src/weichatPb/src/mapField.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

var _typeof = (__webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js")["default"]);

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");

__webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

module.exports = MapField; // extends Field

var Field = __webpack_require__(/*! ./field */ "./src/weichatPb/src/field.js");

((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
var types, util;
/**
 * Constructs a new map field instance.
 * @classdesc Reflected map field.
 * @extends FieldBase
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} keyType Key type
 * @param {string} type Value type
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */

function MapField(name, id, keyType, type, options, comment) {
  Field.call(this, name, id, type, undefined, undefined, options, comment);
  /* istanbul ignore if */

  if (!util.isString(keyType)) throw TypeError("keyType must be a string");
  /**
   * Key type.
   * @type {string}
   */

  this.keyType = keyType; // toJSON, marker

  /**
   * Resolved key type if not a basic type.
   * @type {ReflectionObject|null}
   */

  this.resolvedKeyType = null; // Overrides Field#map

  this.map = true;
}
/**
 * Map field descriptor.
 * @interface IMapField
 * @extends {IField}
 * @property {string} keyType Key type
 */

/**
 * Extension map field descriptor.
 * @interface IExtensionMapField
 * @extends IMapField
 * @property {string} extend Extended type
 */

/**
 * Constructs a map field from a map field descriptor.
 * @param {string} name Field name
 * @param {IMapField} json Map field descriptor
 * @returns {MapField} Created map field
 * @throws {TypeError} If arguments are invalid
 */


MapField.fromJSON = function fromJSON(name, json) {
  return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
};
/**
 * Converts this map field to a map field descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IMapField} Map field descriptor
 */


MapField.prototype.toJSON = function toJSON(toJSONOptions) {
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", keepComments ? this.comment : undefined]);
};
/**
 * @override
 */


MapField.prototype.resolve = function resolve() {
  if (this.resolved) return this; // Besides a value type, map fields have a key type that may be "any scalar type except for floating point types and bytes"

  if (types.mapKey[this.keyType] === undefined) throw Error("invalid key type: " + this.keyType);
  return Field.prototype.resolve.call(this);
};
/**
 * Map field decorator (TypeScript).
 * @name MapField.d
 * @function
 * @param {number} fieldId Field id
 * @param {"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"} fieldKeyType Field key type
 * @param {"double"|"float"|"int32"|"uint32"|"sint32"|"fixed32"|"sfixed32"|"int64"|"uint64"|"sint64"|"fixed64"|"sfixed64"|"bool"|"string"|"bytes"|Object|Constructor<{}>} fieldValueType Field value type
 * @returns {FieldDecorator} Decorator function
 * @template T extends { [key: string]: number | Long | string | boolean | Uint8Array | Buffer | number[] | Message<{}> }
 */


MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
  // submessage value: decorate the submessage and use its name as the type
  if (typeof fieldValueType === "function") fieldValueType = util.decorateType(fieldValueType).name; // enum reference value: create a reflected copy of the enum and keep reuseing it
  else if (fieldValueType && _typeof(fieldValueType) === "object") fieldValueType = util.decorateEnum(fieldValueType).name;
  return function mapFieldDecorator(prototype, fieldName) {
    util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
  };
};

MapField._configure = function () {
  types = __webpack_require__(/*! ./types */ "./src/weichatPb/src/types.js");
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

/***/ }),

/***/ "./src/weichatPb/src/message.js":
/*!**************************************!*\
  !*** ./src/weichatPb/src/message.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");

__webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");

module.exports = Message;
var util;
/**
 * Constructs a new message instance.
 * @classdesc Abstract runtime message.
 * @constructor
 * @param {Properties<T>} [properties] Properties to set
 * @template T extends object
 */

function Message(properties) {
  // not used internally
  if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
    this[keys[i]] = properties[keys[i]];
  }
}
/**
 * Reference to the reflected type.
 * @name Message.$type
 * @type {Type}
 * @readonly
 */

/**
 * Reference to the reflected type.
 * @name Message#$type
 * @type {Type}
 * @readonly
 */

/*eslint-disable valid-jsdoc*/

/**
 * Creates a new message of this type using the specified properties.
 * @param {Object.<string,*>} [properties] Properties to set
 * @returns {Message<T>} Message instance
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.create = function create(properties) {
  return this.$type.create(properties);
};
/**
 * Encodes a message of this type.
 * @param {T|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.encode = function encode(message, writer) {
  if (!arguments.length) {
    return this.$type.encode(this);
  } else if (arguments.length == 1) {
    return this.$type.encode(arguments[0]);
  } else {
    return this.$type.encode(arguments[0], arguments[1]);
  } //return this.$type.encode(message, writer);

};
/**
 * Encodes a message of this type preceeded by its length as a varint.
 * @param {T|Object.<string,*>} message Message to encode
 * @param {Writer} [writer] Writer to use
 * @returns {Writer} Writer
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.encodeDelimited = function encodeDelimited(message, writer) {
  return this.$type.encodeDelimited(message, writer);
};
/**
 * Decodes a message of this type.
 * @name Message.decode
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {T} Decoded message
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.decode = function decode(reader) {
  return this.$type.decode(reader);
};
/**
 * Decodes a message of this type preceeded by its length as a varint.
 * @name Message.decodeDelimited
 * @function
 * @param {Reader|Uint8Array} reader Reader or buffer to decode
 * @returns {T} Decoded message
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.decodeDelimited = function decodeDelimited(reader) {
  return this.$type.decodeDelimited(reader);
};
/**
 * Verifies a message of this type.
 * @name Message.verify
 * @function
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {string|null} `null` if valid, otherwise the reason why it is not
 */


Message.verify = function verify(message) {
  return this.$type.verify(message);
};
/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object
 * @returns {T} Message instance
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.fromObject = function fromObject(object) {
  return this.$type.fromObject(object);
};
/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {T} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 * @template T extends Message<T>
 * @this Constructor<T>
 */


Message.toObject = function toObject(message, options) {
  message = message || this;
  return this.$type.toObject(message, options);
};
/**
 * Converts this message to JSON.
 * @returns {Object.<string,*>} JSON object
 */


Message.prototype.toJSON = function toJSON() {
  return this.$type.toObject(this, util.toJSONOptions);
};

Message.set = function (key, value) {
  Message[key] = value;
};

Message.get = function (key) {
  return Message[key];
};
/*eslint-enable valid-jsdoc*/


Message._configure = function () {
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

/***/ }),

/***/ "./src/weichatPb/src/method.js":
/*!*************************************!*\
  !*** ./src/weichatPb/src/method.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");

__webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");

module.exports = Method; // extends ReflectionObject

var ReflectionObject = __webpack_require__(/*! ./object */ "./src/weichatPb/src/object.js");

((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
var util;
/**
 * Constructs a new service method instance.
 * @classdesc Reflected service method.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Method name
 * @param {string|undefined} type Method type, usually `"rpc"`
 * @param {string} requestType Request message type
 * @param {string} responseType Response message type
 * @param {boolean|Object.<string,*>} [requestStream] Whether the request is streamed
 * @param {boolean|Object.<string,*>} [responseStream] Whether the response is streamed
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] The comment for this method
 */

function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment) {
  /* istanbul ignore next */
  if (util.isObject(requestStream)) {
    options = requestStream;
    requestStream = responseStream = undefined;
  } else if (util.isObject(responseStream)) {
    options = responseStream;
    responseStream = undefined;
  }
  /* istanbul ignore if */


  if (!(type === undefined || util.isString(type))) throw TypeError("type must be a string");
  /* istanbul ignore if */

  if (!util.isString(requestType)) throw TypeError("requestType must be a string");
  /* istanbul ignore if */

  if (!util.isString(responseType)) throw TypeError("responseType must be a string");
  ReflectionObject.call(this, name, options);
  /**
   * Method type.
   * @type {string}
   */

  this.type = type || "rpc"; // toJSON

  /**
   * Request type.
   * @type {string}
   */

  this.requestType = requestType; // toJSON, marker

  /**
   * Whether requests are streamed or not.
   * @type {boolean|undefined}
   */

  this.requestStream = requestStream ? true : undefined; // toJSON

  /**
   * Response type.
   * @type {string}
   */

  this.responseType = responseType; // toJSON

  /**
   * Whether responses are streamed or not.
   * @type {boolean|undefined}
   */

  this.responseStream = responseStream ? true : undefined; // toJSON

  /**
   * Resolved request type.
   * @type {Type|null}
   */

  this.resolvedRequestType = null;
  /**
   * Resolved response type.
   * @type {Type|null}
   */

  this.resolvedResponseType = null;
  /**
   * Comment for this method
   * @type {string|null}
   */

  this.comment = comment;
}
/**
 * Method descriptor.
 * @interface IMethod
 * @property {string} [type="rpc"] Method type
 * @property {string} requestType Request type
 * @property {string} responseType Response type
 * @property {boolean} [requestStream=false] Whether requests are streamed
 * @property {boolean} [responseStream=false] Whether responses are streamed
 * @property {Object.<string,*>} [options] Method options
 */

/**
 * Constructs a method from a method descriptor.
 * @param {string} name Method name
 * @param {IMethod} json Method descriptor
 * @returns {Method} Created method
 * @throws {TypeError} If arguments are invalid
 */


Method.fromJSON = function fromJSON(name, json) {
  return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment);
};
/**
 * Converts this method to a method descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IMethod} Method descriptor
 */


Method.prototype.toJSON = function toJSON(toJSONOptions) {
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["type", this.type !== "rpc" &&
  /* istanbul ignore next */
  this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", keepComments ? this.comment : undefined]);
};
/**
 * @override
 */


Method.prototype.resolve = function resolve() {
  /* istanbul ignore if */
  if (this.resolved) return this;
  this.resolvedRequestType = this.parent.lookupType(this.requestType);
  this.resolvedResponseType = this.parent.lookupType(this.responseType);
  return ReflectionObject.prototype.resolve.call(this);
};

Method._configure = function () {
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

/***/ }),

/***/ "./src/weichatPb/src/namespace.js":
/*!****************************************!*\
  !*** ./src/weichatPb/src/namespace.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");

__webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

module.exports = Namespace; // extends ReflectionObject

var ReflectionObject = __webpack_require__(/*! ./object */ "./src/weichatPb/src/object.js");

((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
var Enum, Field, util;
var Type; // cyclic

var Service;
/**
 * Constructs a new namespace instance.
 * @name Namespace
 * @classdesc Reflected namespace.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 */

/**
 * Constructs a namespace from JSON.
 * @memberof Namespace
 * @function
 * @param {string} name Namespace name
 * @param {Object.<string,*>} json JSON object
 * @returns {Namespace} Created namespace
 * @throws {TypeError} If arguments are invalid
 */

Namespace.fromJSON = function fromJSON(name, json) {
  return new Namespace(name, json.options).addJSON(json.nested);
};
/**
 * Converts an array of reflection objects to JSON.
 * @memberof Namespace
 * @param {ReflectionObject[]} array Object array
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {Object.<string,*>|undefined} JSON object or `undefined` when array is empty
 */


function arrayToJSON(array, toJSONOptions) {
  if (!(array && array.length)) return undefined;
  var obj = {};

  for (var i = 0; i < array.length; ++i) {
    obj[array[i].name] = array[i].toJSON(toJSONOptions);
  }

  return obj;
}

Namespace.arrayToJSON = arrayToJSON;
/**
 * Tests if the specified id is reserved.
 * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
 * @param {number} id Id to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */

Namespace.isReservedId = function isReservedId(reserved, id) {
  if (reserved) for (var i = 0; i < reserved.length; ++i) {
    if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] >= id) return true;
  }
  return false;
};
/**
 * Tests if the specified name is reserved.
 * @param {Array.<number[]|string>|undefined} reserved Array of reserved ranges and names
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */


Namespace.isReservedName = function isReservedName(reserved, name) {
  if (reserved) for (var i = 0; i < reserved.length; ++i) {
    if (reserved[i] === name) return true;
  }
  return false;
};
/**
 * Not an actual constructor. Use {@link Namespace} instead.
 * @classdesc Base class of all reflection objects containing nested objects. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports NamespaceBase
 * @extends ReflectionObject
 * @abstract
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 * @see {@link Namespace}
 */


function Namespace(name, options) {
  ReflectionObject.call(this, name, options);
  /**
   * Nested objects by name.
   * @type {Object.<string,ReflectionObject>|undefined}
   */

  this.nested = undefined; // toJSON

  /**
   * Cached nested objects as an array.
   * @type {ReflectionObject[]|null}
   * @private
   */

  this._nestedArray = null;
}

function clearCache(namespace) {
  namespace._nestedArray = null;
  return namespace;
}
/**
 * Nested objects of this namespace as an array for iteration.
 * @name NamespaceBase#nestedArray
 * @type {ReflectionObject[]}
 * @readonly
 */


Object.defineProperty(Namespace.prototype, "nestedArray", {
  get: function get() {
    return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
  }
});
/**
 * Namespace descriptor.
 * @interface INamespace
 * @property {Object.<string,*>} [options] Namespace options
 * @property {Object.<string,AnyNestedObject>} [nested] Nested object descriptors
 */

/**
 * Any extension field descriptor.
 * @typedef AnyExtensionField
 * @type {IExtensionField|IExtensionMapField}
 */

/**
 * Any nested object descriptor.
 * @typedef AnyNestedObject
 * @type {IEnum|IType|IService|AnyExtensionField|INamespace}
 */
// ^ BEWARE: VSCode hangs forever when using more than 5 types (that's why AnyExtensionField exists in the first place)

/**
 * Converts this namespace to a namespace descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {INamespace} Namespace descriptor
 */

Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
  return util.toObject(["options", this.options, "nested", arrayToJSON(this.nestedArray, toJSONOptions)]);
};
/**
 * Adds nested objects to this namespace from nested object descriptors.
 * @param {Object.<string,AnyNestedObject>} nestedJson Any nested object descriptors
 * @returns {Namespace} `this`
 */


Namespace.prototype.addJSON = function addJSON(nestedJson) {
  var ns = this;
  /* istanbul ignore else */

  if (nestedJson) {
    for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
      nested = nestedJson[names[i]];
      ns.add( // most to least likely
      (nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : nested.id !== undefined ? Field.fromJSON : Namespace.fromJSON)(names[i], nested));
    }
  }

  return this;
};
/**
 * Gets the nested object of the specified name.
 * @param {string} name Nested object name
 * @returns {ReflectionObject|null} The reflection object or `null` if it doesn't exist
 */


Namespace.prototype.get = function get(name) {
  return this.nested && this.nested[name] || null;
};
/**
 * Gets the values of the nested {@link Enum|enum} of the specified name.
 * This methods differs from {@link Namespace#get|get} in that it returns an enum's values directly and throws instead of returning `null`.
 * @param {string} name Nested enum name
 * @returns {Object.<string,number>} Enum values
 * @throws {Error} If there is no such enum
 */


Namespace.prototype.getEnum = function getEnum(name) {
  if (this.nested && this.nested[name] instanceof Enum) return this.nested[name].values;
  throw Error("no such enum: " + name);
};
/**
 * Adds a nested object to this namespace.
 * @param {ReflectionObject} object Nested object to add
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If there is already a nested object with this name
 */


Namespace.prototype.add = function add(object) {
  if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof Enum || object instanceof Service || object instanceof Namespace)) throw TypeError("object must be a valid nested object");
  if (!this.nested) this.nested = {};else {
    var prev = this.get(object.name);

    if (prev) {
      if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
        // replace plain namespace but keep existing nested elements and options
        var nested = prev.nestedArray;

        for (var i = 0; i < nested.length; ++i) {
          object.add(nested[i]);
        }

        this.remove(prev);
        if (!this.nested) this.nested = {};
        object.setOptions(prev.options, true);
      } else throw Error("duplicate name '" + object.name + "' in " + this);
    }
  }
  this.nested[object.name] = object;
  object.onAdd(this);
  return clearCache(this);
};
/**
 * Removes a nested object from this namespace.
 * @param {ReflectionObject} object Nested object to remove
 * @returns {Namespace} `this`
 * @throws {TypeError} If arguments are invalid
 * @throws {Error} If `object` is not a member of this namespace
 */


Namespace.prototype.remove = function remove(object) {
  if (!(object instanceof ReflectionObject)) throw TypeError("object must be a ReflectionObject");
  if (object.parent !== this) throw Error(object + " is not a member of " + this);
  delete this.nested[object.name];
  if (!Object.keys(this.nested).length) this.nested = undefined;
  object.onRemove(this);
  return clearCache(this);
};
/**
 * Defines additial namespaces within this one if not yet existing.
 * @param {string|string[]} path Path to create
 * @param {*} [json] Nested types to create from JSON
 * @returns {Namespace} Pointer to the last namespace created or `this` if path is empty
 */


Namespace.prototype.define = function define(path, json) {
  if (util.isString(path)) path = path.split(".");else if (!Array.isArray(path)) throw TypeError("illegal path");
  if (path && path.length && path[0] === "") throw Error("path must be relative");
  var ptr = this;

  while (path.length > 0) {
    var part = path.shift();

    if (ptr.nested && ptr.nested[part]) {
      ptr = ptr.nested[part];
      if (!(ptr instanceof Namespace)) throw Error("path conflicts with non-namespace objects");
    } else ptr.add(ptr = new Namespace(part));
  }

  if (json) ptr.addJSON(json);
  return ptr;
};
/**
 * Resolves this namespace's and all its nested objects' type references. Useful to validate a reflection tree, but comes at a cost.
 * @returns {Namespace} `this`
 */


Namespace.prototype.resolveAll = function resolveAll() {
  var nested = this.nestedArray,
      i = 0;

  while (i < nested.length) {
    if (nested[i] instanceof Namespace) nested[i++].resolveAll();else nested[i++].resolve();
  }

  return this.resolve();
};
/**
 * Recursively looks up the reflection object matching the specified path in the scope of this namespace.
 * @param {string|string[]} path Path to look up
 * @param {*|Array.<*>} filterTypes Filter types, any combination of the constructors of `protobuf.Type`, `protobuf.Enum`, `protobuf.Service` etc.
 * @param {boolean} [parentAlreadyChecked=false] If known, whether the parent has already been checked
 * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
 */


Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
  /* istanbul ignore next */
  if (typeof filterTypes === "boolean") {
    parentAlreadyChecked = filterTypes;
    filterTypes = undefined;
  } else if (filterTypes && !Array.isArray(filterTypes)) filterTypes = [filterTypes];

  if (util.isString(path) && path.length) {
    if (path === ".") return this.root;
    path = path.split(".");
  } else if (!path.length) return this; // Start at root if path is absolute


  if (path[0] === "") return this.root.lookup(path.slice(1), filterTypes); // Test if the first part matches any nested object, and if so, traverse if path contains more

  var found = this.get(path[0]);

  if (found) {
    if (path.length === 1) {
      if (!filterTypes || filterTypes.indexOf(found.constructor) > -1) return found;
    } else if (found instanceof Namespace && (found = found.lookup(path.slice(1), filterTypes, true))) return found; // Otherwise try each nested namespace

  } else for (var i = 0; i < this.nestedArray.length; ++i) {
    if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path, filterTypes, true))) return found;
  } // If there hasn't been a match, try again at the parent


  if (this.parent === null || parentAlreadyChecked) return null;
  return this.parent.lookup(path, filterTypes);
};
/**
 * Looks up the reflection object at the specified path, relative to this namespace.
 * @name NamespaceBase#lookup
 * @function
 * @param {string|string[]} path Path to look up
 * @param {boolean} [parentAlreadyChecked=false] Whether the parent has already been checked
 * @returns {ReflectionObject|null} Looked up object or `null` if none could be found
 * @variation 2
 */
// lookup(path: string, [parentAlreadyChecked: boolean])

/**
 * Looks up the {@link Type|type} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type
 * @throws {Error} If `path` does not point to a type
 */


Namespace.prototype.lookupType = function lookupType(path) {
  var found = this.lookup(path, [Type]);
  if (!found) throw Error("no such type: " + path);
  return found;
};
/**
 * Looks up the values of the {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Enum} Looked up enum
 * @throws {Error} If `path` does not point to an enum
 */


Namespace.prototype.lookupEnum = function lookupEnum(path) {
  var found = this.lookup(path, [Enum]);
  if (!found) throw Error("no such Enum '" + path + "' in " + this);
  return found;
};
/**
 * Looks up the {@link Type|type} or {@link Enum|enum} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Type} Looked up type or enum
 * @throws {Error} If `path` does not point to a type or enum
 */


Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
  var found = this.lookup(path, [Type, Enum]);
  if (!found) throw Error("no such Type or Enum '" + path + "' in " + this);
  return found;
};
/**
 * Looks up the {@link Service|service} at the specified path, relative to this namespace.
 * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
 * @param {string|string[]} path Path to look up
 * @returns {Service} Looked up service
 * @throws {Error} If `path` does not point to a service
 */


Namespace.prototype.lookupService = function lookupService(path) {
  var found = this.lookup(path, [Service]);
  if (!found) throw Error("no such Service '" + path + "' in " + this);
  return found;
};

Namespace._configure = function () {
  Enum = __webpack_require__(/*! ./enum */ "./src/weichatPb/src/enum.js");
  Field = __webpack_require__(/*! ./field */ "./src/weichatPb/src/field.js");
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
  Type = __webpack_require__(/*! ./type */ "./src/weichatPb/src/type.js"); // cyclic

  Service = __webpack_require__(/*! ./service */ "./src/weichatPb/src/service.js");
};

/***/ }),

/***/ "./src/weichatPb/src/object.js":
/*!*************************************!*\
  !*** ./src/weichatPb/src/object.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");

__webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = ReflectionObject;
ReflectionObject.className = "ReflectionObject";
var util;
var Root; // cyclic

/**
 * Constructs a new reflection object instance.
 * @classdesc Base class of all reflection objects.
 * @constructor
 * @param {string} name Object name
 * @param {Object.<string,*>} [options] Declared options
 * @abstract
 */

function ReflectionObject(name, options) {
  if (!util.isString(name)) throw TypeError("name must be a string");
  if (options && !util.isObject(options)) throw TypeError("options must be an object");
  /**
   * Options.
   * @type {Object.<string,*>|undefined}
   */

  this.options = options; // toJSON

  /**
   * Unique name within its namespace.
   * @type {string}
   */

  this.name = name;
  /**
   * Parent namespace.
   * @type {Namespace|null}
   */

  this.parent = null;
  /**
   * Whether already resolved or not.
   * @type {boolean}
   */

  this.resolved = false;
  /**
   * Comment text, if any.
   * @type {string|null}
   */

  this.comment = null;
  /**
   * Defining file name.
   * @type {string|null}
   */

  this.filename = null;
}

Object.defineProperties(ReflectionObject.prototype, {
  /**
   * Reference to the root namespace.
   * @name ReflectionObject#root
   * @type {Root}
   * @readonly
   */
  root: {
    get: function get() {
      var ptr = this;

      while (ptr.parent !== null) {
        ptr = ptr.parent;
      }

      return ptr;
    }
  },

  /**
   * Full name including leading dot.
   * @name ReflectionObject#fullName
   * @type {string}
   * @readonly
   */
  fullName: {
    get: function get() {
      var path = [this.name],
          ptr = this.parent;

      while (ptr) {
        path.unshift(ptr.name);
        ptr = ptr.parent;
      }

      return path.join(".");
    }
  }
});
/**
 * Converts this reflection object to its descriptor representation.
 * @returns {Object.<string,*>} Descriptor
 * @abstract
 */

ReflectionObject.prototype.toJSON =
/* istanbul ignore next */
function toJSON() {
  throw Error(); // not implemented, shouldn't happen
};
/**
 * Called when this object is added to a parent.
 * @param {ReflectionObject} parent Parent added to
 * @returns {undefined}
 */


ReflectionObject.prototype.onAdd = function onAdd(parent) {
  if (this.parent && this.parent !== parent) this.parent.remove(this);
  this.parent = parent;
  this.resolved = false;
  var root = parent.root;
  if (root instanceof Root) root._handleAdd(this);
};
/**
 * Called when this object is removed from a parent.
 * @param {ReflectionObject} parent Parent removed from
 * @returns {undefined}
 */


ReflectionObject.prototype.onRemove = function onRemove(parent) {
  var root = parent.root;
  if (root instanceof Root) root._handleRemove(this);
  this.parent = null;
  this.resolved = false;
};
/**
 * Resolves this objects type references.
 * @returns {ReflectionObject} `this`
 */


ReflectionObject.prototype.resolve = function resolve() {
  if (this.resolved) return this;
  if (this.root instanceof Root) this.resolved = true; // only if part of a root

  return this;
};
/**
 * Gets an option value.
 * @param {string} name Option name
 * @returns {*} Option value or `undefined` if not set
 */


ReflectionObject.prototype.getOption = function getOption(name) {
  if (this.options) return this.options[name];
  return undefined;
};
/**
 * Sets an option.
 * @param {string} name Option name
 * @param {*} value Option value
 * @param {boolean} [ifNotSet] Sets the option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */


ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
  if (!ifNotSet || !this.options || this.options[name] === undefined) (this.options || (this.options = {}))[name] = value;
  return this;
};
/**
 * Sets multiple options.
 * @param {Object.<string,*>} options Options to set
 * @param {boolean} [ifNotSet] Sets an option only if it isn't currently set
 * @returns {ReflectionObject} `this`
 */


ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
  if (options) for (var keys = Object.keys(options), i = 0; i < keys.length; ++i) {
    this.setOption(keys[i], options[keys[i]], ifNotSet);
  }
  return this;
};
/**
 * Converts this instance to its string representation.
 * @returns {string} Class name[, space, full name]
 */


ReflectionObject.prototype.toString = function toString() {
  var className = this.constructor.className,
      fullName = this.fullName;
  if (fullName.length) return className + " " + fullName;
  return className;
};

ReflectionObject._configure = function (Root_) {
  Root = __webpack_require__(/*! ./root */ "./src/weichatPb/src/root.js");
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

/***/ }),

/***/ "./src/weichatPb/src/oneof.js":
/*!************************************!*\
  !*** ./src/weichatPb/src/oneof.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");

__webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

module.exports = OneOf; // extends ReflectionObject

var ReflectionObject = __webpack_require__(/*! ./object */ "./src/weichatPb/src/object.js");

((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
var Field;
var util;
/**
 * Constructs a new oneof instance.
 * @classdesc Reflected oneof.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Oneof name
 * @param {string[]|Object.<string,*>} [fieldNames] Field names
 * @param {Object.<string,*>} [options] Declared options
 * @param {string} [comment] Comment associated with this field
 */

function OneOf(name, fieldNames, options, comment) {
  if (!Array.isArray(fieldNames)) {
    options = fieldNames;
    fieldNames = undefined;
  }

  ReflectionObject.call(this, name, options);
  /* istanbul ignore if */

  if (!(fieldNames === undefined || Array.isArray(fieldNames))) throw TypeError("fieldNames must be an Array");
  /**
   * Field names that belong to this oneof.
   * @type {string[]}
   */

  this.oneof = fieldNames || []; // toJSON, marker

  /**
   * Fields that belong to this oneof as an array for iteration.
   * @type {Field[]}
   * @readonly
   */

  this.fieldsArray = []; // declared readonly for conformance, possibly not yet added to parent

  /**
   * Comment for this field.
   * @type {string|null}
   */

  this.comment = comment;
}
/**
 * Oneof descriptor.
 * @interface IOneOf
 * @property {Array.<string>} oneof Oneof field names
 * @property {Object.<string,*>} [options] Oneof options
 */

/**
 * Constructs a oneof from a oneof descriptor.
 * @param {string} name Oneof name
 * @param {IOneOf} json Oneof descriptor
 * @returns {OneOf} Created oneof
 * @throws {TypeError} If arguments are invalid
 */


OneOf.fromJSON = function fromJSON(name, json) {
  return new OneOf(name, json.oneof, json.options, json.comment);
};
/**
 * Converts this oneof to a oneof descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IOneOf} Oneof descriptor
 */


OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["options", this.options, "oneof", this.oneof, "comment", keepComments ? this.comment : undefined]);
};
/**
 * Adds the fields of the specified oneof to the parent if not already done so.
 * @param {OneOf} oneof The oneof
 * @returns {undefined}
 * @inner
 * @ignore
 */


function addFieldsToParent(oneof) {
  if (oneof.parent) for (var i = 0; i < oneof.fieldsArray.length; ++i) {
    if (!oneof.fieldsArray[i].parent) oneof.parent.add(oneof.fieldsArray[i]);
  }
}
/**
 * Adds a field to this oneof and removes it from its current parent, if any.
 * @param {Field} field Field to add
 * @returns {OneOf} `this`
 */


OneOf.prototype.add = function add(field) {
  /* istanbul ignore if */
  if (!(field instanceof Field)) throw TypeError("field must be a Field");
  if (field.parent && field.parent !== this.parent) field.parent.remove(field);
  this.oneof.push(field.name);
  this.fieldsArray.push(field);
  field.partOf = this; // field.parent remains null

  addFieldsToParent(this);
  return this;
};
/**
 * Removes a field from this oneof and puts it back to the oneof's parent.
 * @param {Field} field Field to remove
 * @returns {OneOf} `this`
 */


OneOf.prototype.remove = function remove(field) {
  /* istanbul ignore if */
  if (!(field instanceof Field)) throw TypeError("field must be a Field");
  var index = this.fieldsArray.indexOf(field);
  /* istanbul ignore if */

  if (index < 0) throw Error(field + " is not a member of " + this);
  this.fieldsArray.splice(index, 1);
  index = this.oneof.indexOf(field.name);
  /* istanbul ignore else */

  if (index > -1) // theoretical
    this.oneof.splice(index, 1);
  field.partOf = null;
  return this;
};
/**
 * @override
 */


OneOf.prototype.onAdd = function onAdd(parent) {
  ReflectionObject.prototype.onAdd.call(this, parent);
  var self = this; // Collect present fields

  for (var i = 0; i < this.oneof.length; ++i) {
    var field = parent.get(this.oneof[i]);

    if (field && !field.partOf) {
      field.partOf = self;
      self.fieldsArray.push(field);
    }
  } // Add not yet present fields


  addFieldsToParent(this);
};
/**
 * @override
 */


OneOf.prototype.onRemove = function onRemove(parent) {
  for (var i = 0, field; i < this.fieldsArray.length; ++i) {
    if ((field = this.fieldsArray[i]).parent) field.parent.remove(field);
  }

  ReflectionObject.prototype.onRemove.call(this, parent);
};
/**
 * Decorator function as returned by {@link OneOf.d} (TypeScript).
 * @typedef OneOfDecorator
 * @type {function}
 * @param {Object} prototype Target prototype
 * @param {string} oneofName OneOf name
 * @returns {undefined}
 */

/**
 * OneOf decorator (TypeScript).
 * @function
 * @param {...string} fieldNames Field names
 * @returns {OneOfDecorator} Decorator function
 * @template T extends string
 */


OneOf.d = function decorateOneOf() {
  var fieldNames = new Array(arguments.length),
      index = 0;

  while (index < arguments.length) {
    fieldNames[index] = arguments[index++];
  }

  return function oneOfDecorator(prototype, oneofName) {
    util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
    Object.defineProperty(prototype, oneofName, {
      get: util.oneOfGetter(fieldNames),
      set: util.oneOfSetter(fieldNames)
    });
  };
};

OneOf._configure = function () {
  Field = __webpack_require__(/*! ./field */ "./src/weichatPb/src/field.js");
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

/***/ }),

/***/ "./src/weichatPb/src/parse.js":
/*!************************************!*\
  !*** ./src/weichatPb/src/parse.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

module.exports = parse;
parse.filename = null;
parse.defaults = {
  keepCase: false
};
var tokenize, Root, Type, Field, MapField, OneOf, Enum, Service, Method, types, util;
var base10Re = /^[1-9][0-9]*$/,
    base10NegRe = /^-?[1-9][0-9]*$/,
    base16Re = /^0[x][0-9a-fA-F]+$/,
    base16NegRe = /^-?0[x][0-9a-fA-F]+$/,
    base8Re = /^0[0-7]+$/,
    base8NegRe = /^-?0[0-7]+$/,
    numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
    nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
    typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/,
    fqTypeRefRe = /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/;
/**
 * Result object returned from {@link parse}.
 * @interface IParserResult
 * @property {string|undefined} package Package name, if declared
 * @property {string[]|undefined} imports Imports, if any
 * @property {string[]|undefined} weakImports Weak imports, if any
 * @property {string|undefined} syntax Syntax, if specified (either `"proto2"` or `"proto3"`)
 * @property {Root} root Populated root instance
 */

/**
 * Options modifying the behavior of {@link parse}.
 * @interface IParseOptions
 * @property {boolean} [keepCase=false] Keeps field casing instead of converting to camel case
 * @property {boolean} [alternateCommentMode=false] Recognize double-slash comments in addition to doc-block comments.
 */

/**
 * Options modifying the behavior of JSON serialization.
 * @interface IToJSONOptions
 * @property {boolean} [keepComments=false] Serializes comments.
 */

/**
 * Parses the given .proto source and returns an object with the parsed contents.
 * @param {string} source Source contents
 * @param {Root} root Root to populate
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {IParserResult} Parser result
 * @property {string} filename=null Currently processing file name for error reporting, if known
 * @property {IParseOptions} defaults Default {@link IParseOptions}
 */

function parse(source, root, options) {
  /* eslint-disable callback-return */
  if (!(root instanceof Root)) {
    options = root;
    root = new Root();
  }

  if (!options) options = parse.defaults;
  var tn = tokenize(source, options.alternateCommentMode || false),
      next = tn.next,
      push = tn.push,
      peek = tn.peek,
      skip = tn.skip,
      cmnt = tn.cmnt;
  var head = true,
      pkg,
      imports,
      weakImports,
      syntax,
      isProto3 = false;
  var ptr = root;
  var applyCase = options.keepCase ? function (name) {
    return name;
  } : util.camelCase;
  /* istanbul ignore next */

  function illegal(token, name, insideTryCatch) {
    var filename = parse.filename;
    if (!insideTryCatch) parse.filename = null;
    return Error("illegal " + (name || "token") + " '" + token + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
  }

  function readString() {
    var values = [],
        token;

    do {
      /* istanbul ignore if */
      if ((token = next()) !== "\"" && token !== "'") throw illegal(token);
      values.push(next());
      skip(token);
      token = peek();
    } while (token === "\"" || token === "'");

    return values.join("");
  }

  function readValue(acceptTypeRef) {
    var token = next();

    switch (token) {
      case "'":
      case "\"":
        push(token);
        return readString();

      case "true":
      case "TRUE":
        return true;

      case "false":
      case "FALSE":
        return false;
    }

    try {
      return parseNumber(token,
      /* insideTryCatch */
      true);
    } catch (e) {
      /* istanbul ignore else */
      if (acceptTypeRef && typeRefRe.test(token)) return token;
      /* istanbul ignore next */

      throw illegal(token, "value");
    }
  }

  function readRanges(target, acceptStrings) {
    var token, start;

    do {
      if (acceptStrings && ((token = peek()) === "\"" || token === "'")) target.push(readString());else target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
    } while (skip(",", true));

    skip(";");
  }

  function parseNumber(token, insideTryCatch) {
    var sign = 1;

    if (token.charAt(0) === "-") {
      sign = -1;
      token = token.substring(1);
    }

    switch (token) {
      case "inf":
      case "INF":
      case "Inf":
        return sign * Infinity;

      case "nan":
      case "NAN":
      case "Nan":
      case "NaN":
        return NaN;

      case "0":
        return 0;
    }

    if (base10Re.test(token)) return sign * parseInt(token, 10);
    if (base16Re.test(token)) return sign * parseInt(token, 16);
    if (base8Re.test(token)) return sign * parseInt(token, 8);
    /* istanbul ignore else */

    if (numberRe.test(token)) return sign * parseFloat(token);
    /* istanbul ignore next */

    throw illegal(token, "number", insideTryCatch);
  }

  function parseId(token, acceptNegative) {
    switch (token) {
      case "max":
      case "MAX":
      case "Max":
        return 536870911;

      case "0":
        return 0;
    }
    /* istanbul ignore if */


    if (!acceptNegative && token.charAt(0) === "-") throw illegal(token, "id");
    if (base10NegRe.test(token)) return parseInt(token, 10);
    if (base16NegRe.test(token)) return parseInt(token, 16);
    /* istanbul ignore else */

    if (base8NegRe.test(token)) return parseInt(token, 8);
    /* istanbul ignore next */

    throw illegal(token, "id");
  }

  function parsePackage() {
    /* istanbul ignore if */
    if (pkg !== undefined) throw illegal("package");
    pkg = next();
    /* istanbul ignore if */

    if (!typeRefRe.test(pkg)) throw illegal(pkg, "name");
    ptr = ptr.define(pkg);
    skip(";");
  }

  function parseImport() {
    var token = peek();
    var whichImports;

    switch (token) {
      case "weak":
        whichImports = weakImports || (weakImports = []);
        next();
        break;

      case "public":
        next();
      // eslint-disable-line no-fallthrough

      default:
        whichImports = imports || (imports = []);
        break;
    }

    token = readString();
    skip(";");
    whichImports.push(token);
  }

  function parseSyntax() {
    skip("=");
    syntax = readString();
    isProto3 = syntax === "proto3";
    /* istanbul ignore if */

    if (!isProto3 && syntax !== "proto2") throw illegal(syntax, "syntax");
    skip(";");
  }

  function parseCommon(parent, token) {
    switch (token) {
      case "option":
        parseOption(parent, token);
        skip(";");
        return true;

      case "message":
        parseType(parent, token);
        return true;

      case "enum":
        parseEnum(parent, token);
        return true;

      case "service":
        parseService(parent, token);
        return true;

      case "extend":
        parseExtension(parent, token);
        return true;
    }

    return false;
  }

  function ifBlock(obj, fnIf, fnElse) {
    var trailingLine = tn.line;

    if (obj) {
      obj.comment = cmnt(); // try block-type comment

      obj.filename = parse.filename;
    }

    if (skip("{", true)) {
      var token;

      while ((token = next()) !== "}") {
        fnIf(token);
      }

      skip(";", true);
    } else {
      if (fnElse) fnElse();
      skip(";");
      if (obj && typeof obj.comment !== "string") obj.comment = cmnt(trailingLine); // try line-type comment if no block
    }
  }

  function parseType(parent, token) {
    /* istanbul ignore if */
    if (!nameRe.test(token = next())) throw illegal(token, "type name");
    var type = new Type(token);
    ifBlock(type, function parseType_block(token) {
      if (parseCommon(type, token)) return;

      switch (token) {
        case "map":
          parseMapField(type, token);
          break;

        case "required":
        case "optional":
        case "repeated":
          parseField(type, token);
          break;

        case "oneof":
          parseOneOf(type, token);
          break;

        case "extensions":
          readRanges(type.extensions || (type.extensions = []));
          break;

        case "reserved":
          readRanges(type.reserved || (type.reserved = []), true);
          break;

        default:
          /* istanbul ignore if */
          if (!isProto3 || !typeRefRe.test(token)) throw illegal(token);
          push(token);
          parseField(type, "optional");
          break;
      }
    });
    parent.add(type);
  }

  function parseField(parent, rule, extend) {
    var type = next();

    if (type === "group") {
      parseGroup(parent, rule);
      return;
    }
    /* istanbul ignore if */


    if (!typeRefRe.test(type)) throw illegal(type, "type");
    var name = next();
    /* istanbul ignore if */

    if (!nameRe.test(name)) throw illegal(name, "name");
    name = applyCase(name);
    skip("=");
    var field = new Field(name, parseId(next()), type, rule, extend);
    ifBlock(field, function parseField_block(token) {
      /* istanbul ignore else */
      if (token === "option") {
        parseOption(field, token);
        skip(";");
      } else throw illegal(token);
    }, function parseField_line() {
      parseInlineOptions(field);
    });
    parent.add(field); // JSON defaults to packed=true if not set so we have to set packed=false explicity when
    // parsing proto2 descriptors without the option, where applicable. This must be done for
    // all known packable types and anything that could be an enum (= is not a basic type).

    if (!isProto3 && field.repeated && (types.packed[type] !== undefined || types.basic[type] === undefined)) field.setOption("packed", false,
    /* ifNotSet */
    true);
  }

  function parseGroup(parent, rule) {
    var name = next();
    /* istanbul ignore if */

    if (!nameRe.test(name)) throw illegal(name, "name");
    var fieldName = util.lcFirst(name);
    if (name === fieldName) name = util.ucFirst(name);
    skip("=");
    var id = parseId(next());
    var type = new Type(name);
    type.group = true;
    var field = new Field(fieldName, id, name, rule);
    field.filename = parse.filename;
    ifBlock(type, function parseGroup_block(token) {
      switch (token) {
        case "option":
          parseOption(type, token);
          skip(";");
          break;

        case "required":
        case "optional":
        case "repeated":
          parseField(type, token);
          break;

        /* istanbul ignore next */

        default:
          throw illegal(token);
        // there are no groups with proto3 semantics
      }
    });
    parent.add(type).add(field);
  }

  function parseMapField(parent) {
    skip("<");
    var keyType = next();
    /* istanbul ignore if */

    if (types.mapKey[keyType] === undefined) throw illegal(keyType, "type");
    skip(",");
    var valueType = next();
    /* istanbul ignore if */

    if (!typeRefRe.test(valueType)) throw illegal(valueType, "type");
    skip(">");
    var name = next();
    /* istanbul ignore if */

    if (!nameRe.test(name)) throw illegal(name, "name");
    skip("=");
    var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
    ifBlock(field, function parseMapField_block(token) {
      /* istanbul ignore else */
      if (token === "option") {
        parseOption(field, token);
        skip(";");
      } else throw illegal(token);
    }, function parseMapField_line() {
      parseInlineOptions(field);
    });
    parent.add(field);
  }

  function parseOneOf(parent, token) {
    /* istanbul ignore if */
    if (!nameRe.test(token = next())) throw illegal(token, "name");
    var oneof = new OneOf(applyCase(token));
    ifBlock(oneof, function parseOneOf_block(token) {
      if (token === "option") {
        parseOption(oneof, token);
        skip(";");
      } else {
        push(token);
        parseField(oneof, "optional");
      }
    });
    parent.add(oneof);
  }

  function parseEnum(parent, token) {
    /* istanbul ignore if */
    if (!nameRe.test(token = next())) throw illegal(token, "name");
    var enm = new Enum(token);
    ifBlock(enm, function parseEnum_block(token) {
      switch (token) {
        case "option":
          parseOption(enm, token);
          skip(";");
          break;

        case "reserved":
          readRanges(enm.reserved || (enm.reserved = []), true);
          break;

        default:
          parseEnumValue(enm, token);
      }
    });
    parent.add(enm);
  }

  function parseEnumValue(parent, token) {
    /* istanbul ignore if */
    if (!nameRe.test(token)) throw illegal(token, "name");
    skip("=");
    var value = parseId(next(), true),
        dummy = {};
    ifBlock(dummy, function parseEnumValue_block(token) {
      /* istanbul ignore else */
      if (token === "option") {
        parseOption(dummy, token); // skip

        skip(";");
      } else throw illegal(token);
    }, function parseEnumValue_line() {
      parseInlineOptions(dummy); // skip
    });
    parent.add(token, value, dummy.comment);
  }

  function parseOption(parent, token) {
    var isCustom = skip("(", true);
    /* istanbul ignore if */

    if (!typeRefRe.test(token = next())) throw illegal(token, "name");
    var name = token;

    if (isCustom) {
      skip(")");
      name = "(" + name + ")";
      token = peek();

      if (fqTypeRefRe.test(token)) {
        name += token;
        next();
      }
    }

    skip("=");
    parseOptionValue(parent, name);
  }

  function parseOptionValue(parent, name) {
    if (skip("{", true)) {
      // { a: "foo" b { c: "bar" } }
      do {
        /* istanbul ignore if */
        if (!nameRe.test(token = next())) throw illegal(token, "name");
        if (peek() === "{") parseOptionValue(parent, name + "." + token);else {
          skip(":");
          if (peek() === "{") parseOptionValue(parent, name + "." + token);else setOption(parent, name + "." + token, readValue(true));
        }
      } while (!skip("}", true));
    } else setOption(parent, name, readValue(true)); // Does not enforce a delimiter to be universal

  }

  function setOption(parent, name, value) {
    if (parent.setOption) parent.setOption(name, value);
  }

  function parseInlineOptions(parent) {
    if (skip("[", true)) {
      do {
        parseOption(parent, "option");
      } while (skip(",", true));

      skip("]");
    }

    return parent;
  }

  function parseService(parent, token) {
    /* istanbul ignore if */
    if (!nameRe.test(token = next())) throw illegal(token, "service name");
    var service = new Service(token);
    ifBlock(service, function parseService_block(token) {
      if (parseCommon(service, token)) return;
      /* istanbul ignore else */

      if (token === "rpc") parseMethod(service, token);else throw illegal(token);
    });
    parent.add(service);
  }

  function parseMethod(parent, token) {
    var type = token;
    /* istanbul ignore if */

    if (!nameRe.test(token = next())) throw illegal(token, "name");
    var name = token,
        requestType,
        requestStream,
        responseType,
        responseStream;
    skip("(");
    if (skip("stream", true)) requestStream = true;
    /* istanbul ignore if */

    if (!typeRefRe.test(token = next())) throw illegal(token);
    requestType = token;
    skip(")");
    skip("returns");
    skip("(");
    if (skip("stream", true)) responseStream = true;
    /* istanbul ignore if */

    if (!typeRefRe.test(token = next())) throw illegal(token);
    responseType = token;
    skip(")");
    var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
    ifBlock(method, function parseMethod_block(token) {
      /* istanbul ignore else */
      if (token === "option") {
        parseOption(method, token);
        skip(";");
      } else throw illegal(token);
    });
    parent.add(method);
  }

  function parseExtension(parent, token) {
    /* istanbul ignore if */
    if (!typeRefRe.test(token = next())) throw illegal(token, "reference");
    var reference = token;
    ifBlock(null, function parseExtension_block(token) {
      switch (token) {
        case "required":
        case "repeated":
        case "optional":
          parseField(parent, token, reference);
          break;

        default:
          /* istanbul ignore if */
          if (!isProto3 || !typeRefRe.test(token)) throw illegal(token);
          push(token);
          parseField(parent, "optional", reference);
          break;
      }
    });
  }

  var token;

  while ((token = next()) !== null) {
    switch (token) {
      case "package":
        /* istanbul ignore if */
        if (!head) throw illegal(token);
        parsePackage();
        break;

      case "import":
        /* istanbul ignore if */
        if (!head) throw illegal(token);
        parseImport();
        break;

      case "syntax":
        /* istanbul ignore if */
        if (!head) throw illegal(token);
        parseSyntax();
        break;

      case "option":
        /* istanbul ignore if */
        if (!head) throw illegal(token);
        parseOption(ptr, token);
        skip(";");
        break;

      default:
        /* istanbul ignore else */
        if (parseCommon(ptr, token)) {
          head = false;
          continue;
        }
        /* istanbul ignore next */


        throw illegal(token);
    }
  }

  parse.filename = null;
  return {
    "package": pkg,
    "imports": imports,
    weakImports: weakImports,
    syntax: syntax,
    root: root
  };
}
/**
 * Parses the given .proto source and returns an object with the parsed contents.
 * @name parse
 * @function
 * @param {string} source Source contents
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {IParserResult} Parser result
 * @property {string} filename=null Currently processing file name for error reporting, if known
 * @property {IParseOptions} defaults Default {@link IParseOptions}
 * @variation 2
 */


parse._configure = function () {
  tokenize = __webpack_require__(/*! ./tokenize */ "./src/weichatPb/src/tokenize.js"), Root = __webpack_require__(/*! ./root */ "./src/weichatPb/src/root.js"), Type = __webpack_require__(/*! ./type */ "./src/weichatPb/src/type.js"), Field = __webpack_require__(/*! ./field */ "./src/weichatPb/src/field.js"), MapField = __webpack_require__(/*! ./mapField */ "./src/weichatPb/src/mapField.js"), OneOf = __webpack_require__(/*! ./oneof */ "./src/weichatPb/src/oneof.js"), Enum = __webpack_require__(/*! ./enum */ "./src/weichatPb/src/enum.js"), Service = __webpack_require__(/*! ./service */ "./src/weichatPb/src/service.js"), Method = __webpack_require__(/*! ./method */ "./src/weichatPb/src/method.js"), types = __webpack_require__(/*! ./types */ "./src/weichatPb/src/types.js"), util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

/***/ }),

/***/ "./src/weichatPb/src/path.js":
/*!***********************************!*\
  !*** ./src/weichatPb/src/path.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

var path = module.exports;

var isAbsolute =
/**
 * Tests if the specified path is absolute.
 * @param {string} path Path to test
 * @returns {boolean} `true` if path is absolute
 */
path.isAbsolute = function isAbsolute(path) {
  return /^(?:\/|\w+:)/.test(path);
};

var normalize =
/**
 * Normalizes the specified path.
 * @param {string} path Path to normalize
 * @returns {string} Normalized path
 */
path.normalize = function normalize(path) {
  path = path.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
  var parts = path.split("/"),
      absolute = isAbsolute(path),
      prefix = "";
  if (absolute) prefix = parts.shift() + "/";

  for (var i = 0; i < parts.length;) {
    if (parts[i] === "..") {
      if (i > 0 && parts[i - 1] !== "..") parts.splice(--i, 2);else if (absolute) parts.splice(i, 1);else ++i;
    } else if (parts[i] === ".") parts.splice(i, 1);else ++i;
  }

  return prefix + parts.join("/");
};
/**
 * Resolves the specified include path against the specified origin path.
 * @param {string} originPath Path to the origin file
 * @param {string} includePath Include path relative to origin path
 * @param {boolean} [alreadyNormalized=false] `true` if both paths are already known to be normalized
 * @returns {string} Path to the include file
 */


path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
  if (!alreadyNormalized) includePath = normalize(includePath);
  if (isAbsolute(includePath)) return includePath;
  if (!alreadyNormalized) originPath = normalize(originPath);
  return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
};

/***/ }),

/***/ "./src/weichatPb/src/pool.js":
/*!***********************************!*\
  !*** ./src/weichatPb/src/pool.js ***!
  \***********************************/
/***/ (function(module) {

module.exports = pool;
/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */

function pool(alloc, slice, size) {
  var SIZE = size || 8192;
  var MAX = SIZE >>> 1;
  var slab = null;
  var offset = SIZE;
  return function pool_alloc(size) {
    if (size < 1 || size > MAX) return alloc(size);

    if (offset + size > SIZE) {
      slab = alloc(SIZE);
      offset = 0;
    }

    var buf = slice.call(slab, offset, offset += size);
    if (offset & 7) // align to 32 bit
      offset = (offset | 7) + 1;
    return buf;
  };
}

/***/ }),

/***/ "./src/weichatPb/src/reader.js":
/*!*************************************!*\
  !*** ./src/weichatPb/src/reader.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");

__webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");

__webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");

__webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");

__webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");

__webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");

__webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");

__webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");

__webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");

__webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");

__webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");

__webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");

__webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");

__webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");

__webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array-buffer.constructor.js */ "./node_modules/core-js/modules/es.array-buffer.constructor.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");
/**
 * Created by zhangmiao on 2018/3/13.
 */


module.exports = Reader;

var util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");

var LongBits;
var utf8;
var BufferReader;

function indexOutOfRange(reader, writeLength) {
  return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

function Reader(buffer) {
  /**
   * Read buffer.
   * @type {Uint8Array}
   */
  this.buf = buffer;
  /**
   * Read buffer position.
   * @type {number}
   */

  this.pos = 0;
  /**
   * Read buffer length.
   * @type {number}
   */

  this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
  if (buffer instanceof Uint8Array || Array.isArray(buffer)) return new Reader(buffer);
  if (typeof ArrayBuffer !== "undefined" && buffer instanceof ArrayBuffer) //增加ArrayBuffer构建
    return new Reader(new Uint8Array(buffer));
  throw Error("illegal buffer");
}
/* istanbul ignore next */
: function create_array(buffer) {
  if (Array.isArray(buffer)) return new Reader(buffer);
  throw Error("illegal buffer");
};
Reader.create = util.Buffer ? function create_buffer_setup(buffer) {
  return (Reader.create = function create_buffer(buffer) {
    return util.Buffer.isBuffer(buffer) ? new BufferReader(buffer)
    /* istanbul ignore next */
    : create_array(buffer);
  })(buffer);
}
/* istanbul ignore next */
: create_array;
Reader.prototype._slice = util.Array.prototype.subarray ||
/* istanbul ignore next */
util.Array.prototype.slice;

Reader.prototype.uint32 = function read_uint32_setup() {
  var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)

  return function read_uint32() {
    value = (this.buf[this.pos] & 127) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
    if (this.buf[this.pos++] < 128) return value;
    /* istanbul ignore if */

    if ((this.pos += 5) > this.len) {
      this.pos = this.len;
      throw indexOutOfRange(this, 10);
    }

    return value;
  };
}();

Reader.prototype.int32 = function read_int32() {
  return this.uint32() | 0;
};

Reader.prototype.sint32 = function read_sint32() {
  var value = this.uint32();
  return value >>> 1 ^ -(value & 1) | 0;
};

function readLongVarint() {
  // tends to deopt with local vars for octet etc.
  var bits = new LongBits(0, 0);
  var i = 0;

  if (this.len - this.pos > 4) {
    // fast route (lo)
    for (; i < 4; ++i) {
      // 1st..4th
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    } // 5th


    bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
    bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
    if (this.buf[this.pos++] < 128) return bits;
    i = 0;
  } else {
    for (; i < 3; ++i) {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this); // 1st..3th

      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    } // 4th


    bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
    return bits;
  }

  if (this.len - this.pos > 4) {
    // fast route (hi)
    for (; i < 5; ++i) {
      // 6th..10th
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    }
  } else {
    for (; i < 5; ++i) {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this); // 6th..10th

      bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
    }
  }
  /* istanbul ignore next */


  throw Error("invalid varint encoding");
}

Reader.prototype.bool = function read_bool() {
  return this.uint32() !== 0;
};

function readFixed32_end(buf, end) {
  // note that this uses `end`, not `pos`
  return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
}

Reader.prototype.fixed32 = function read_fixed32() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4);
};

Reader.prototype.sfixed32 = function read_sfixed32() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  return readFixed32_end(this.buf, this.pos += 4) | 0;
};
/* eslint-disable no-invalid-this */


function
/* this: Reader */
readFixed64() {
  /* istanbul ignore if */
  if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
  return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

Reader.prototype["float"] = function read_float() {
  /* istanbul ignore if */
  if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
  var value = util["float"].readFloatLE(this.buf, this.pos);
  this.pos += 4;
  return value;
};

Reader.prototype["double"] = function read_double() {
  /* istanbul ignore if */
  if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
  var value = util["float"].readDoubleLE(this.buf, this.pos);
  this.pos += 8;
  return value;
};

Reader.prototype.bytes = function read_bytes() {
  var length = this.uint32(),
      start = this.pos,
      end = this.pos + length;
  /* istanbul ignore if */

  if (end > this.len) throw indexOutOfRange(this, length);
  this.pos += length;
  if (Array.isArray(this.buf)) // plain array
    return this.buf.slice(start, end);
  return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
  ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
};

Reader.prototype.string = function read_string() {
  var bytes = this.bytes();
  return utf8.read(bytes, 0, bytes.length);
};

Reader.prototype.skip = function skip(length) {
  if (typeof length === "number") {
    /* istanbul ignore if */
    if (this.pos + length > this.len) throw indexOutOfRange(this, length);
    this.pos += length;
  } else {
    do {
      /* istanbul ignore if */
      if (this.pos >= this.len) throw indexOutOfRange(this);
    } while (this.buf[this.pos++] & 128);
  }

  return this;
};

Reader.prototype.skipType = function (wireType) {
  switch (wireType) {
    case 0:
      this.skip();
      break;

    case 1:
      this.skip(8);
      break;

    case 2:
      this.skip(this.uint32());
      break;

    case 3:
      do {
        // eslint-disable-line no-constant-condition
        if ((wireType = this.uint32() & 7) === 4) break;
        this.skipType(wireType);
      } while (true);

      break;

    case 5:
      this.skip(4);
      break;

    /* istanbul ignore next */

    default:
      throw Error("invalid wire type " + wireType + " at offset " + this.pos);
  }

  return this;
}; //这部分可能用不到


Reader._configure = function () {
  //util       = require('./util');
  LongBits = __webpack_require__(/*! ./longBits */ "./src/weichatPb/src/longBits.js");
  utf8 = __webpack_require__(/*! ./utf8 */ "./src/weichatPb/src/utf8.js");
  var fn = util.Long ? "toLong" :
  /* istanbul ignore next */
  "toNumber";
  util.merge(Reader.prototype, {
    int64: function read_int64() {
      return readLongVarint.call(this)[fn](false);
    },
    uint64: function read_uint64() {
      return readLongVarint.call(this)[fn](true);
    },
    sint64: function read_sint64() {
      return readLongVarint.call(this).zzDecode()[fn](false);
    },
    fixed64: function read_fixed64() {
      return readFixed64.call(this)[fn](true);
    },
    sfixed64: function read_sfixed64() {
      return readFixed64.call(this)[fn](false);
    }
  });
};

/***/ }),

/***/ "./src/weichatPb/src/root.js":
/*!***********************************!*\
  !*** ./src/weichatPb/src/root.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

var _typeof = (__webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js")["default"]);

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

module.exports = Root; // extends Namespace

var Namespace = __webpack_require__(/*! ./namespace */ "./src/weichatPb/src/namespace.js");

((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";

var Field = __webpack_require__(/*! ./field */ "./src/weichatPb/src/field.js"),
    Enum = __webpack_require__(/*! ./enum */ "./src/weichatPb/src/enum.js"),
    OneOf = __webpack_require__(/*! ./oneof */ "./src/weichatPb/src/oneof.js"),
    util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");

var Type, // cyclic
parse, // might be excluded
common; // "

/**
 * Constructs a new root namespace instance.
 * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
 * @extends NamespaceBase
 * @constructor
 * @param {Object.<string,*>} [options] Top level options
 */

function Root(options) {
  Namespace.call(this, "", options);
  /**
   * Deferred extension fields.
   * @type {Field[]}
   */

  this.deferred = [];
  /**
   * Resolved file names of loaded files.
   * @type {string[]}
   */

  this.files = [];
  /**
   * Resolved name of parsered pbString.
   * @type {string[]}
   */

  this.names = [];
}
/**
 * Loads a namespace descriptor into a root namespace.
 * @param {INamespace} json Nameespace descriptor
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted
 * @returns {Root} Root namespace
 */


Root.fromJSON = function fromJSON(json, root) {
  json = typeof json === 'string' ? JSON.parse(json) : json;
  if (!root) root = new Root();
  if (json.options) root.setOptions(json.options);
  return root.addJSON(json.nested);
};
/**
 * Resolves the path of an imported file, relative to the importing origin.
 * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
 * @function
 * @param {string} origin The file name of the importing file
 * @param {string} target The file name being imported
 * @returns {string|null} Resolved path to `target` or `null` to skip the file
 */


Root.prototype.resolvePath = util.path.resolve; // A symbol-like function to safely signal synchronous loading

/* istanbul ignore next */

function SYNC() {} // eslint-disable-line no-empty-function


function parseFromPbString(pbString, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = undefined;
  }

  var self = this;

  if (!callback) {
    return util.asPromise(parseFromPbString, self, pbString, options);
  }

  var pbObj = null;

  if (typeof pbString === 'string') {
    pbObj = JSON.parse(pbString);
  } else if (_typeof(pbString) === 'object') {
    pbObj = pbString;
  } else {
    //throw Error("pb格式转化失败");
    console.log("pb格式转化失败");
    return undefined;
  }

  var name = pbObj['name'];
  var pbJsonStr = pbObj['pbJsonStr'];

  function finish(err, root) {
    if (!callback) return;
    var cb = callback;
    callback = null;
    cb(err, root);
  }

  function process(name, source) {
    try {
      if (util.isString(source) && source.charAt(0) === "{") source = JSON.parse(source);
      if (!util.isString(source)) self.setOptions(source.options).addJSON(source.nested);else {
        parse.filename = name;
        var parsed = parse(source, self, options),
            resolved;
        var i = 0;

        if (parsed.imports) {
          for (; i < parsed.imports.length; ++i) {
            resolved = parsed.imports[i];
            fetch(resolved);
          }
        }

        if (parsed.weakImports) {
          for (i = 0; i < parsed.weakImports.length; ++i) {
            resolved = parsed.weakImports[i];
          }

          fetch(resolved, true);
        }
      }
    } catch (err) {
      finish(err);
    }

    finish(null, self); // only once anyway
  }

  function fetch(name) {
    if (self.names.indexOf(name) > -1) return;
    self.names.push(name);

    if (name in common) {
      process(name, common[name]);
    }
  }

  process(name, pbJsonStr);
  return undefined;
}

Root.prototype.parseFromPbString = parseFromPbString;
/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} options Parse options
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 */

Root.prototype.load = function load(filename, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = undefined;
  }

  var self = this;
  if (!callback) return util.asPromise(load, self, filename, options);
  var sync = callback === SYNC; // undocumented
  // Finishes loading by calling the callback (exactly once)

  function finish(err, root) {
    /* istanbul ignore if */
    if (!callback) return;
    var cb = callback;
    callback = null;
    if (sync) throw err;
    cb(err, root);
  } // Processes a single file


  function process(filename, source) {
    try {
      if (util.isString(source) && source.charAt(0) === "{") source = JSON.parse(source);
      if (!util.isString(source)) self.setOptions(source.options).addJSON(source.nested);else {
        parse.filename = filename;
        var parsed = parse(source, self, options),
            resolved,
            i = 0;
        if (parsed.imports) for (; i < parsed.imports.length; ++i) {
          if (resolved = self.resolvePath(filename, parsed.imports[i])) fetch(resolved);
        }
        if (parsed.weakImports) for (i = 0; i < parsed.weakImports.length; ++i) {
          if (resolved = self.resolvePath(filename, parsed.weakImports[i])) fetch(resolved, true);
        }
      }
    } catch (err) {
      finish(err);
    }

    if (!sync && !queued) finish(null, self); // only once anyway
  } // Fetches a single file


  function fetch(filename, weak) {
    // Strip path if this file references a bundled definition
    var idx = filename.lastIndexOf("google/protobuf/");

    if (idx > -1) {
      var altname = filename.substring(idx);
      if (altname in common) filename = altname;
    } // Skip if already loaded / attempted


    if (self.files.indexOf(filename) > -1) return;
    self.files.push(filename); // Shortcut bundled definitions

    if (filename in common) {
      if (sync) process(filename, common[filename]);else {
        ++queued;
        setTimeout(function () {
          --queued;
          process(filename, common[filename]);
        });
      }
      return;
    } // Otherwise fetch from disk or network


    if (sync) {
      var source;

      try {
        source = util.fs.readFileSync(filename).toString("utf8");
      } catch (err) {
        if (!weak) finish(err);
        return;
      }

      process(filename, source);
    } else {
      ++queued;
      util.fetch(filename, function (err, source) {
        --queued;
        /* istanbul ignore if */

        if (!callback) return; // terminated meanwhile

        if (err) {
          /* istanbul ignore else */
          if (!weak) finish(err);else if (!queued) // can't be covered reliably
            finish(null, self);
          return;
        }

        process(filename, source);
      });
    }
  }

  var queued = 0; // Assembling the root namespace doesn't require working type
  // references anymore, so we can load everything in parallel

  if (util.isString(filename)) filename = [filename];

  for (var i = 0, resolved; i < filename.length; ++i) {
    if (resolved = self.resolvePath("", filename[i])) fetch(resolved);
  }

  if (sync) return self;
  if (!queued) finish(null, self);
  return undefined;
}; // function load(filename:string, options:IParseOptions, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @function Root#load
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @variation 2
 */
// function load(filename:string, callback:LoadCallback):undefined

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and returns a promise.
 * @function Root#load
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Promise<Root>} Promise
 * @variation 3
 */
// function load(filename:string, [options:IParseOptions]):Promise<Root>

/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into this root namespace (node only).
 * @function Root#loadSync
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 */


Root.prototype.loadSync = function loadSync(filename, options) {
  if (!util.isNode) throw Error("not supported");
  return this.load(filename, options, SYNC);
};
/**
 * @override
 */


Root.prototype.resolveAll = function resolveAll() {
  if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function (field) {
    return "'extend " + field.extend + "' in " + field.parent.fullName;
  }).join(", "));
  return Namespace.prototype.resolveAll.call(this);
}; // only uppercased (and thus conflict-free) children are exposed, see below


var exposeRe = /^[A-Z]/;
/**
 * Handles a deferred declaring extension field by creating a sister field to represent it within its extended type.
 * @param {Root} root Root instance
 * @param {Field} field Declaring extension field witin the declaring type
 * @returns {boolean} `true` if successfully added to the extended type, `false` otherwise
 * @inner
 * @ignore
 */

function tryHandleExtension(root, field) {
  var extendedType = field.parent.lookup(field.extend);

  if (extendedType) {
    var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
    sisterField.declaringField = field;
    field.extensionField = sisterField;
    extendedType.add(sisterField);
    return true;
  }

  return false;
}
/**
 * Called when any object is added to this root or its sub-namespaces.
 * @param {ReflectionObject} object Object added
 * @returns {undefined}
 * @private
 */


Root.prototype._handleAdd = function _handleAdd(object) {
  if (object instanceof Field) {
    if (
    /* an extension field (implies not part of a oneof) */
    object.extend !== undefined &&
    /* not already handled */
    !object.extensionField) if (!tryHandleExtension(this, object)) this.deferred.push(object);
  } else if (object instanceof Enum) {
    if (exposeRe.test(object.name)) object.parent[object.name] = object.values; // expose enum values as property of its parent
  } else if (!(object instanceof OneOf))
    /* everything else is a namespace */
    {
      if (object instanceof Type) // Try to handle any deferred extensions
        for (var i = 0; i < this.deferred.length;) {
          if (tryHandleExtension(this, this.deferred[i])) this.deferred.splice(i, 1);else ++i;
        }

      for (var j = 0; j <
      /* initializes */
      object.nestedArray.length; ++j) {
        // recurse into the namespace
        this._handleAdd(object._nestedArray[j]);
      }

      if (exposeRe.test(object.name)) object.parent[object.name] = object; // expose namespace as property of its parent
    } // The above also adds uppercased (and thus conflict-free) nested types, services and enums as
  // properties of namespaces just like static code does. This allows using a .d.ts generated for
  // a static module with reflection-based solutions where the condition is met.

};
/**
 * Called when any object is removed from this root or its sub-namespaces.
 * @param {ReflectionObject} object Object removed
 * @returns {undefined}
 * @private
 */


Root.prototype._handleRemove = function _handleRemove(object) {
  if (object instanceof Field) {
    if (
    /* an extension field */
    object.extend !== undefined) {
      if (
      /* already handled */
      object.extensionField) {
        // remove its sister field
        object.extensionField.parent.remove(object.extensionField);
        object.extensionField = null;
      } else {
        // cancel the extension
        var index = this.deferred.indexOf(object);
        /* istanbul ignore else */

        if (index > -1) this.deferred.splice(index, 1);
      }
    }
  } else if (object instanceof Enum) {
    if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose enum values
  } else if (object instanceof Namespace) {
    for (var i = 0; i <
    /* initializes */
    object.nestedArray.length; ++i) {
      // recurse into the namespace
      this._handleRemove(object._nestedArray[i]);
    }

    if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose namespaces
  }
};

Root._configure = function () {
  Type = __webpack_require__(/*! ./type */ "./src/weichatPb/src/type.js");
  parse = __webpack_require__(/*! ./parse */ "./src/weichatPb/src/parse.js");
  common = __webpack_require__(/*! ./common */ "./src/weichatPb/src/common.js");
  Field = __webpack_require__(/*! ./field */ "./src/weichatPb/src/field.js");
  Enum = __webpack_require__(/*! ./enum */ "./src/weichatPb/src/enum.js");
  OneOf = __webpack_require__(/*! ./oneof */ "./src/weichatPb/src/oneof.js");
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

/***/ }),

/***/ "./src/weichatPb/src/roots.js":
/*!************************************!*\
  !*** ./src/weichatPb/src/roots.js ***!
  \************************************/
/***/ (function(module) {

/**
 * Created by zhangmiao on 2018/3/13.
 */
module.exports = {};

/***/ }),

/***/ "./src/weichatPb/src/rpc/service.js":
/*!******************************************!*\
  !*** ./src/weichatPb/src/rpc/service.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

module.exports = Service;

var util = __webpack_require__(/*! ../util */ "./src/weichatPb/src/util.js"); // Extends EventEmitter


(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */

function Service(rpcImpl, requestDelimited, responseDelimited) {
  if (typeof rpcImpl !== "function") throw TypeError("rpcImpl must be a function");
  util.EventEmitter.call(this);
  /**
   * RPC implementation. Becomes `null` once the service is ended.
   * @type {RPCImpl|null}
   */

  this.rpcImpl = rpcImpl;
  /**
   * Whether requests are length-delimited.
   * @type {boolean}
   */

  this.requestDelimited = Boolean(requestDelimited);
  /**
   * Whether responses are length-delimited.
   * @type {boolean}
   */

  this.responseDelimited = Boolean(responseDelimited);
}
/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */


Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
  if (!request) throw TypeError("request must be specified");
  var self = this;
  if (!callback) return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

  if (!self.rpcImpl) {
    setTimeout(function () {
      callback(Error("already ended"));
    }, 0);
    return undefined;
  }

  try {
    return self.rpcImpl(method, requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
      if (err) {
        self.emit("error", err, method);
        return callback(err);
      }

      if (response === null) {
        self.end(
        /* endedByRPC */
        true);
        return undefined;
      }

      if (!(response instanceof responseCtor)) {
        try {
          response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
        } catch (err) {
          self.emit("error", err, method);
          return callback(err);
        }
      }

      self.emit("data", response, method);
      return callback(null, response);
    });
  } catch (err) {
    self.emit("error", err, method);
    setTimeout(function () {
      callback(err);
    }, 0);
    return undefined;
  }
};
/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */


Service.prototype.end = function end(endedByRPC) {
  if (this.rpcImpl) {
    if (!endedByRPC) // signal end to rpcImpl
      this.rpcImpl(null, null, null);
    this.rpcImpl = null;
    this.emit("end").off();
  }

  return this;
};

/***/ }),

/***/ "./src/weichatPb/src/service.js":
/*!**************************************!*\
  !*** ./src/weichatPb/src/service.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");

__webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

module.exports = Service; // extends Namespace

var Namespace = __webpack_require__(/*! ./namespace */ "./src/weichatPb/src/namespace.js");

((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
var Method, util, rpc;
/**
 * Constructs a new service instance.
 * @classdesc Reflected service.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Service name
 * @param {Object.<string,*>} [options] Service options
 * @throws {TypeError} If arguments are invalid
 */

function Service(name, options) {
  Namespace.call(this, name, options);
  /**
   * Service methods.
   * @type {Object.<string,Method>}
   */

  this.methods = {}; // toJSON, marker

  /**
   * Cached methods as an array.
   * @type {Method[]|null}
   * @private
   */

  this._methodsArray = null;
}
/**
 * Service descriptor.
 * @interface IService
 * @extends INamespace
 * @property {Object.<string,IMethod>} methods Method descriptors
 */

/**
 * Constructs a service from a service descriptor.
 * @param {string} name Service name
 * @param {IService} json Service descriptor
 * @returns {Service} Created service
 * @throws {TypeError} If arguments are invalid
 */


Service.fromJSON = function fromJSON(name, json) {
  var service = new Service(name, json.options);
  /* istanbul ignore else */

  if (json.methods) for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i) {
    service.add(Method.fromJSON(names[i], json.methods[names[i]]));
  }
  if (json.nested) service.addJSON(json.nested);
  service.comment = json.comment;
  return service;
};
/**
 * Converts this service to a service descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IService} Service descriptor
 */


Service.prototype.toJSON = function toJSON(toJSONOptions) {
  var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return util.toObject(["options", inherited && inherited.options || undefined, "methods", Namespace.arrayToJSON(this.methodsArray, toJSONOptions) ||
  /* istanbul ignore next */
  {}, "nested", inherited && inherited.nested || undefined, "comment", keepComments ? this.comment : undefined]);
};
/**
 * Methods of this service as an array for iteration.
 * @name Service#methodsArray
 * @type {Method[]}
 * @readonly
 */


Object.defineProperty(Service.prototype, "methodsArray", {
  get: function get() {
    return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
  }
});

function clearCache(service) {
  service._methodsArray = null;
  return service;
}
/**
 * @override
 */


Service.prototype.get = function get(name) {
  return this.methods[name] || Namespace.prototype.get.call(this, name);
};
/**
 * @override
 */


Service.prototype.resolveAll = function resolveAll() {
  var methods = this.methodsArray;

  for (var i = 0; i < methods.length; ++i) {
    methods[i].resolve();
  }

  return Namespace.prototype.resolve.call(this);
};
/**
 * @override
 */


Service.prototype.add = function add(object) {
  /* istanbul ignore if */
  if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);

  if (object instanceof Method) {
    this.methods[object.name] = object;
    object.parent = this;
    return clearCache(this);
  }

  return Namespace.prototype.add.call(this, object);
};
/**
 * @override
 */


Service.prototype.remove = function remove(object) {
  if (object instanceof Method) {
    /* istanbul ignore if */
    if (this.methods[object.name] !== object) throw Error(object + " is not a member of " + this);
    delete this.methods[object.name];
    object.parent = null;
    return clearCache(this);
  }

  return Namespace.prototype.remove.call(this, object);
};
/**
 * Creates a runtime service using the specified rpc implementation.
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
 */


Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
  var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);

  for (var i = 0, method; i <
  /* initializes */
  this.methodsArray.length; ++i) {
    var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
    rpcService[methodName] = util.codegen(["r", "c"], util.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
      m: method,
      q: method.resolvedRequestType.ctor,
      s: method.resolvedResponseType.ctor
    });
  }

  return rpcService;
};

Service._configure = function () {
  Method = __webpack_require__(/*! ./method */ "./src/weichatPb/src/method.js");
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
  rpc = __webpack_require__(/*! ./rpc/service */ "./src/weichatPb/src/rpc/service.js");
};

/***/ }),

/***/ "./src/weichatPb/src/tokenize.js":
/*!***************************************!*\
  !*** ./src/weichatPb/src/tokenize.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

module.exports = tokenize;
var delimRe = /[\s{}=;:[\],'"()<>]/g,
    stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
    stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
var setCommentRe = /^ *[*/]+ */,
    setCommentAltRe = /^\s*\*?\/*/,
    setCommentSplitRe = /\n/g,
    whitespaceRe = /\s/,
    unescapeRe = /\\(.?)/g;
var unescapeMap = {
  "0": "\0",
  "r": "\r",
  "n": "\n",
  "t": "\t"
};
/**
 * Unescapes a string.
 * @param {string} str String to unescape
 * @returns {string} Unescaped string
 * @property {Object.<string,string>} map Special characters map
 * @memberof tokenize
 */

function unescape(str) {
  return str.replace(unescapeRe, function ($0, $1) {
    switch ($1) {
      case "\\":
      case "":
        return $1;

      default:
        return unescapeMap[$1] || "";
    }
  });
}

tokenize.unescape = unescape;
/**
 * Gets the next token and advances.
 * @typedef TokenizerHandleNext
 * @type {function}
 * @returns {string|null} Next token or `null` on eof
 */

/**
 * Peeks for the next token.
 * @typedef TokenizerHandlePeek
 * @type {function}
 * @returns {string|null} Next token or `null` on eof
 */

/**
 * Pushes a token back to the stack.
 * @typedef TokenizerHandlePush
 * @type {function}
 * @param {string} token Token
 * @returns {undefined}
 */

/**
 * Skips the next token.
 * @typedef TokenizerHandleSkip
 * @type {function}
 * @param {string} expected Expected token
 * @param {boolean} [optional=false] If optional
 * @returns {boolean} Whether the token matched
 * @throws {Error} If the token didn't match and is not optional
 */

/**
 * Gets the comment on the previous line or, alternatively, the line comment on the specified line.
 * @typedef TokenizerHandleCmnt
 * @type {function}
 * @param {number} [line] Line number
 * @returns {string|null} Comment text or `null` if none
 */

/**
 * Handle object returned from {@link tokenize}.
 * @interface ITokenizerHandle
 * @property {TokenizerHandleNext} next Gets the next token and advances (`null` on eof)
 * @property {TokenizerHandlePeek} peek Peeks for the next token (`null` on eof)
 * @property {TokenizerHandlePush} push Pushes a token back to the stack
 * @property {TokenizerHandleSkip} skip Skips a token, returns its presence and advances or, if non-optional and not present, throws
 * @property {TokenizerHandleCmnt} cmnt Gets the comment on the previous line or the line comment on the specified line, if any
 * @property {number} line Current line number
 */

/**
 * Tokenizes the given .proto source and returns an object with useful utility functions.
 * @param {string} source Source contents
 * @param {boolean} alternateCommentMode Whether we should activate alternate comment parsing mode.
 * @returns {ITokenizerHandle} Tokenizer handle
 */

function tokenize(source, alternateCommentMode) {
  /* eslint-disable callback-return */
  source = source.toString();
  var offset = 0,
      length = source.length,
      line = 1,
      commentType = null,
      commentText = null,
      commentLine = 0,
      commentLineEmpty = false;
  var stack = [];
  var stringDelim = null;
  /* istanbul ignore next */

  /**
   * Creates an error for illegal syntax.
   * @param {string} subject Subject
   * @returns {Error} Error created
   * @inner
   */

  function illegal(subject) {
    return Error("illegal " + subject + " (line " + line + ")");
  }
  /**
   * Reads a string till its end.
   * @returns {string} String read
   * @inner
   */


  function readString() {
    var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
    re.lastIndex = offset - 1;
    var match = re.exec(source);
    if (!match) throw illegal("string");
    offset = re.lastIndex;
    push(stringDelim);
    stringDelim = null;
    return unescape(match[1]);
  }
  /**
   * Gets the character at `pos` within the source.
   * @param {number} pos Position
   * @returns {string} Character
   * @inner
   */


  function charAt(pos) {
    return source.charAt(pos);
  }
  /**
   * Sets the current comment text.
   * @param {number} start Start offset
   * @param {number} end End offset
   * @returns {undefined}
   * @inner
   */


  function setComment(start, end) {
    commentType = source.charAt(start++);
    commentLine = line;
    commentLineEmpty = false;
    var lookback;

    if (alternateCommentMode) {
      lookback = 2; // alternate comment parsing: "//" or "/*"
    } else {
      lookback = 3; // "///" or "/**"
    }

    var commentOffset = start - lookback,
        c;

    do {
      if (--commentOffset < 0 || (c = source.charAt(commentOffset)) === "\n") {
        commentLineEmpty = true;
        break;
      }
    } while (c === " " || c === "\t");

    var lines = source.substring(start, end).split(setCommentSplitRe);

    for (var i = 0; i < lines.length; ++i) {
      lines[i] = lines[i].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
    }

    commentText = lines.join("\n").trim();
  }

  function isDoubleSlashCommentLine(startOffset) {
    var endOffset = findEndOfLine(startOffset); // see if remaining line matches comment pattern

    var lineText = source.substring(startOffset, endOffset); // look for 1 or 2 slashes since startOffset would already point past
    // the first slash that started the comment.

    var isComment = /^\s*\/{1,2}/.test(lineText);
    return isComment;
  }

  function findEndOfLine(cursor) {
    // find end of cursor's line
    var endOffset = cursor;

    while (endOffset < length && charAt(endOffset) !== "\n") {
      endOffset++;
    }

    return endOffset;
  }
  /**
   * Obtains the next token.
   * @returns {string|null} Next token or `null` on eof
   * @inner
   */


  function next() {
    if (stack.length > 0) return stack.shift();
    if (stringDelim) return readString();
    var repeat, prev, curr, start, isDoc;

    do {
      if (offset === length) return null;
      repeat = false;

      while (whitespaceRe.test(curr = charAt(offset))) {
        if (curr === "\n") ++line;
        if (++offset === length) return null;
      }

      if (charAt(offset) === "/") {
        if (++offset === length) {
          throw illegal("comment");
        }

        if (charAt(offset) === "/") {
          // Line
          if (!alternateCommentMode) {
            // check for triple-slash comment
            isDoc = charAt(start = offset + 1) === "/";

            while (charAt(++offset) !== "\n") {
              if (offset === length) {
                return null;
              }
            }

            ++offset;

            if (isDoc) {
              setComment(start, offset - 1);
            }

            ++line;
            repeat = true;
          } else {
            // check for double-slash comments, consolidating consecutive lines
            start = offset;
            isDoc = false;

            if (isDoubleSlashCommentLine(offset)) {
              isDoc = true;

              do {
                offset = findEndOfLine(offset);

                if (offset === length) {
                  break;
                }

                offset++;
              } while (isDoubleSlashCommentLine(offset));
            } else {
              offset = Math.min(length, findEndOfLine(offset) + 1);
            }

            if (isDoc) {
              setComment(start, offset);
            }

            line++;
            repeat = true;
          }
        } else if ((curr = charAt(offset)) === "*") {
          /* Block */
          // check for /** (regular comment mode) or /* (alternate comment mode)
          start = offset + 1;
          isDoc = alternateCommentMode || charAt(start) === "*";

          do {
            if (curr === "\n") {
              ++line;
            }

            if (++offset === length) {
              throw illegal("comment");
            }

            prev = curr;
            curr = charAt(offset);
          } while (prev !== "*" || curr !== "/");

          ++offset;

          if (isDoc) {
            setComment(start, offset - 2);
          }

          repeat = true;
        } else {
          return "/";
        }
      }
    } while (repeat); // offset !== length if we got here


    var end = offset;
    delimRe.lastIndex = 0;
    var delim = delimRe.test(charAt(end++));
    if (!delim) while (end < length && !delimRe.test(charAt(end))) {
      ++end;
    }
    var token = source.substring(offset, offset = end);
    if (token === "\"" || token === "'") stringDelim = token;
    return token;
  }
  /**
   * Pushes a token back to the stack.
   * @param {string} token Token
   * @returns {undefined}
   * @inner
   */


  function push(token) {
    stack.push(token);
  }
  /**
   * Peeks for the next token.
   * @returns {string|null} Token or `null` on eof
   * @inner
   */


  function peek() {
    if (!stack.length) {
      var token = next();
      if (token === null) return null;
      push(token);
    }

    return stack[0];
  }
  /**
   * Skips a token.
   * @param {string} expected Expected token
   * @param {boolean} [optional=false] Whether the token is optional
   * @returns {boolean} `true` when skipped, `false` if not
   * @throws {Error} When a required token is not present
   * @inner
   */


  function skip(expected, optional) {
    var actual = peek(),
        equals = actual === expected;

    if (equals) {
      next();
      return true;
    }

    if (!optional) throw illegal("token '" + actual + "', '" + expected + "' expected");
    return false;
  }
  /**
   * Gets a comment.
   * @param {number} [trailingLine] Line number if looking for a trailing comment
   * @returns {string|null} Comment text
   * @inner
   */


  function cmnt(trailingLine) {
    var ret = null;

    if (trailingLine === undefined) {
      if (commentLine === line - 1 && (alternateCommentMode || commentType === "*" || commentLineEmpty)) {
        ret = commentText;
      }
    } else {
      /* istanbul ignore else */
      if (commentLine < trailingLine) {
        peek();
      }

      if (commentLine === trailingLine && !commentLineEmpty && (alternateCommentMode || commentType === "/")) {
        ret = commentText;
      }
    }

    return ret;
  }

  return Object.defineProperty({
    next: next,
    peek: peek,
    push: push,
    skip: skip,
    cmnt: cmnt
  }, "line", {
    get: function get() {
      return line;
    }
  });
  /* eslint-enable callback-return */
}

/***/ }),

/***/ "./src/weichatPb/src/type.js":
/*!***********************************!*\
  !*** ./src/weichatPb/src/type.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");

__webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/**
 * Created by zhangmiao on 2018/3/13.
 */


module.exports = Type;

var Namespace = __webpack_require__(/*! ./namespace */ "./src/weichatPb/src/namespace.js");

((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
var Enum, Field, Message, OneOf, Writer, Reader, util, verifier, encoder, decoder, Service, wrappers, converter, MapField;

function Type(name, options) {
  Namespace.call(this, name, options);
  /**
   * Message fields.
   * @type {Object.<string,Field>}
   */

  this.fields = {}; // toJSON, marker

  /**
   * Oneofs declared within this namespace, if any.
   * @type {Object.<string,OneOf>}
   */

  this.oneofs = undefined; // toJSON

  /**
   * Extension ranges, if any.
   * @type {number[][]}
   */

  this.extensions = undefined; // toJSON

  /**
   * Reserved ranges, if any.
   * @type {Array.<number[]|string>}
   */

  this.reserved = undefined; // toJSON

  /*?
   * Whether this type is a legacy group.
   * @type {boolean|undefined}
   */

  this.group = undefined; // toJSON 这个可能不需要,因为不支持

  /**
   * Cached fields by id.
   * @type {Object.<number,Field>|null}
   * @private
   */

  this._fieldsById = null;
  /**
   * Cached fields as an array.
   * @type {Field[]|null}
   * @private
   */

  this._fieldsArray = null;
  /**
   * Cached oneofs as an array.
   * @type {OneOf[]|null}
   * @private
   */

  this._oneofsArray = null;
  /**
   * Cached constructor.
   * @type {Constructor<{}>}
   * @private
   */

  this._ctor = null;
}

Object.defineProperties(Type.prototype, {
  /**
   * Message fields by id.
   * @name Type#fieldsById
   * @type {Object.<number,Field>}
   * @readonly
   */
  fieldsById: {
    get: function get() {
      /* istanbul ignore if */
      if (this._fieldsById) return this._fieldsById;
      this._fieldsById = {};

      for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
        var field = this.fields[names[i]],
            id = field.id;
        /* istanbul ignore if */

        if (this._fieldsById[id]) throw Error("duplicate id " + id + " in " + this);
        this._fieldsById[id] = field;
      }

      return this._fieldsById;
    }
  },

  /**
   * Fields of this message as an array for iteration.
   * @name Type#fieldsArray
   * @type {Field[]}
   * @readonly
   */
  fieldsArray: {
    get: function get() {
      return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
    }
  },

  /**
   * Oneofs of this message as an array for iteration.
   * @name Type#oneofsArray
   * @type {OneOf[]}
   * @readonly
   */
  oneofsArray: {
    get: function get() {
      return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
    }
  },

  /**
   * The registered constructor, if any registered, otherwise a generic constructor.
   * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
   * @name Type#ctor
   * @type {Constructor<{}>}
   */
  ctor: {
    get: function get() {
      return this._ctor || (this.ctor = Type.generateConstructor(this));
    },
    set: function set(ctor) {
      // Ensure proper prototype
      var prototype = ctor.prototype;

      if (!(prototype instanceof Message)) {
        (ctor.prototype = new Message()).constructor = ctor;
        util.merge(ctor.prototype, prototype);
      } // Classes and messages reference their reflected type


      ctor.$type = ctor.prototype.$type = this; // Mix in static methods

      util.merge(ctor, Message, true);
      util.merge(ctor.prototype, Message, true);
      this._ctor = ctor; // Messages have non-enumerable default values on their prototype

      var i = 0;

      for (; i <
      /* initializes */
      this.fieldsArray.length; ++i) {
        this._fieldsArray[i].resolve();
      } // ensures a proper value
      // Messages have non-enumerable getters and setters for each virtual oneof field


      var ctorProperties = {};

      for (i = 0; i <
      /* initializes */
      this.oneofsArray.length; ++i) {
        var oneofName = this._oneofsArray[i].resolve().name;

        var oneOfGetAndSet = function (fieldNames) {
          var fieldMap = {};

          for (var i = 0; i < fieldNames.length; ++i) {
            fieldMap[fieldNames[i]] = 0;
          }

          return {
            setter: function setter(name) {
              if (fieldNames.indexOf(name) < 0) return;
              fieldMap[name] = 1;

              for (var i = 0; i < fieldNames.length; ++i) {
                if (fieldNames[i] !== name) delete this[
                /*"_"+*/
                fieldNames[i]];
              }
            },
            getter: function getter() {
              for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) {
                if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null) return keys[i];
              }
            }
          };
        }(this._oneofsArray[i].oneof);

        ctorProperties[oneofName] = {
          get: oneOfGetAndSet.getter,
          set: oneOfGetAndSet.setter
        }; //var fieldNames = this._oneofsArray[i].oneof;
        //for (var  j = 0 ; j < fieldNames.length; j++){
        //    var fieldName = fieldNames[j];
        //    ctorProperties[fieldName] = {
        //        set : (function(oneofName, fieldName){
        //            return function (value){
        //                this[oneofName] = fieldName;
        //                this["_"+fieldName] = value;
        //            }
        //        })(oneofName , fieldName),
        //        get : (function(fieldName){
        //            return function (){
        //                return this["_"+fieldName];
        //            }
        //        })(fieldName)
        //    }
        //}
      }

      if (i) {
        //util.merge(ctor.prototype, ctorProperties, true);
        Object.defineProperties(ctor.prototype, ctorProperties);
      }
    }
  }
}); //生成一个构造函数

Type.generateConstructor = function generateConstructor(mtype) {
  return function (p) {
    for (var i = 0, field; i < mtype.fieldsArray.length; i++) {
      if ((field = mtype._fieldsArray[i]).map) {
        this[field.name] = {};
      } else if (field.repeated) {
        this[field.name] = [];
      }
    }

    if (p) {
      for (var ks = Object.keys(p), j = 0; j < ks.length; ++j) {
        if (p[ks[j]] != null) {
          this[ks[j]] = p[ks[j]];
        }
      }
    }
  };
};

function clearCache(type) {
  type._fieldsById = type._fieldsArray = type._oneofsArray = null;
  delete type.encode;
  delete type.decode;
  delete type.verify;
  return type;
}

Type.fromJSON = function fromJSON(name, json) {
  var type = new Type(name, json.options);
  type.extensions = json.extensions;
  type.reserved = json.reserved;
  var names = Object.keys(json.fields),
      i = 0;

  for (; i < names.length; ++i) {
    type.add((typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]]));
  }

  if (json.oneofs) for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i) {
    type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
  }
  if (json.nested) for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
    var nested = json.nested[names[i]];
    type.add( // most to least likely
    (nested.id !== undefined ? Field.fromJSON : nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : Namespace.fromJSON)(names[i], nested));
  }
  if (json.extensions && json.extensions.length) type.extensions = json.extensions;
  if (json.reserved && json.reserved.length) type.reserved = json.reserved;
  if (json.group) type.group = true;
  if (json.comment) type.comment = json.comment;
  return type;
};

Type.prototype.toJSON = function toJSON(toJSONOptions) {
  var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
  var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
  return {
    "options": inherited && inherited.options || undefined,
    "oneofs": Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
    "fields": Namespace.arrayToJSON(this.fieldsArray.filter(function (obj) {
      return !obj.declaringField;
    }), toJSONOptions) || {},
    "extensions": this.extensions && this.extensions.length ? this.extensions : undefined,
    "reserved": this.reserved && this.reserved.length ? this.reserved : undefined,
    "group": this.group || undefined,
    "nested": inherited && inherited.nested || undefined,
    "comment": keepComments ? this.comment : undefined
  };
};

Type.prototype.resolveAll = function resolveAll() {
  var fields = this.fieldsArray,
      i = 0;

  while (i < fields.length) {
    fields[i++].resolve();
  }

  var oneofs = this.oneofsArray;
  i = 0;

  while (i < oneofs.length) {
    oneofs[i++].resolve();
  }

  return Namespace.prototype.resolveAll.call(this);
};

Type.prototype.get = function get(name) {
  return this.fields[name] || this.oneofs && this.oneofs[name] || this.nested && this.nested[name] || null;
};

Type.prototype.add = function add(object) {
  if (this.get(object.name)) throw Error("duplicate name '" + object.name + "' in " + this);

  if (object instanceof Field && object.extend === undefined) {
    if (this._fieldsById && this._fieldsById[object.id]) throw Error("duplicate id " + object.id + " in " + this);
    if (this.isReservedId(object.id)) throw Error("id " + object.id + " is reserved in " + this);
    if (this.isReservedName(object.name)) throw Error("name '" + object.name + "' is reserved in " + this);
    if (object.parent) object.parent.remove(object);
    this.fields[object.name] = object;
    object.message = this;
    object.onAdd(this);
    return clearCache(this);
  }

  if (object instanceof OneOf) {
    if (!this.oneofs) this.oneofs = {};
    this.oneofs[object.name] = object;
    object.onAdd(this);
    return clearCache(this);
  }

  return Namespace.prototype.add.call(this, object);
};

Type.prototype.remove = function remove(object) {
  if (object instanceof Field && object.extend === undefined) {
    // See Type#add for the reason why extension fields are excluded here.

    /* istanbul ignore if */
    if (!this.fields || this.fields[object.name] !== object) throw Error(object + " is not a member of " + this);
    delete this.fields[object.name];
    object.parent = null;
    object.onRemove(this);
    return clearCache(this);
  }

  if (object instanceof OneOf) {
    /* istanbul ignore if */
    if (!this.oneofs || this.oneofs[object.name] !== object) throw Error(object + " is not a member of " + this);
    delete this.oneofs[object.name];
    object.parent = null;
    object.onRemove(this);
    return clearCache(this);
  }

  return Namespace.prototype.remove.call(this, object);
};

Type.prototype.isReservedId = function isReservedId(id) {
  return Namespace.isReservedId(this.reserved, id);
};

Type.prototype.isReservedName = function isReservedName(name) {
  return Namespace.isReservedName(this.reserved, name);
};

Type.prototype.create = function create(properties) {
  return new this.ctor(properties);
};

Type.prototype.setup = function setup() {
  // Sets up everything at once so that the prototype chain does not have to be re-evaluated
  // multiple times (V8, soft-deopt prototype-check).
  var fullName = this.fullName,
      types = [];

  for (var i = 0; i <
  /* initializes */
  this.fieldsArray.length; ++i) {
    types.push(this._fieldsArray[i].resolve().resolvedType);
  } // Replace setup methods with type-specific generated functions


  this.encode = encoder(this)({
    Writer: Writer,
    types: types,
    util: util
  });
  this.decode = decoder(this)({
    Reader: Reader,
    types: types,
    util: util
  });
  this.verify = verifier(this)({
    types: types,
    util: util
  });
  this.fromObject = converter.fromObject(this)({
    types: types,
    util: util
  });
  this.toObject = converter.toObject(this)({
    types: types,
    util: util
  }); // Inject custom wrappers for common types

  var wrapper = wrappers[fullName];

  if (wrapper) {
    var originalThis = Object.create(this); // if (wrapper.fromObject) {

    originalThis.fromObject = this.fromObject;
    this.fromObject = wrapper.fromObject.bind(originalThis); // }
    // if (wrapper.toObject) {

    originalThis.toObject = this.toObject;
    this.toObject = wrapper.toObject.bind(originalThis); // }
  }

  return this;
};
/**
 * Encodes a message of this type. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */


Type.prototype.encode = function encode_setup(message, writer) {
  return this.setup().encode(message, writer); // overrides this method
};
/**
 * Encodes a message of this type preceeded by its byte length as a varint. Does not implicitly {@link Type#verify|verify} messages.
 * @param {Message<{}>|Object.<string,*>} message Message instance or plain object
 * @param {Writer} [writer] Writer to encode to
 * @returns {Writer} writer
 */


Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
  return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
};
/**
 * Decodes a message of this type.
 * @param {Reader|Uint8Array|ArrayBuffer} reader Reader or buffer to decode from
 * @param {number} [length] Length of the message, if known beforehand
 * @returns {Message<{}>} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 */


Type.prototype.decode = function decode_setup(reader, length) {
  return this.setup().decode(reader, length); // overrides this method
};
/**
 * Decodes a message of this type preceeded by its byte length as a varint.
 * @param {Reader|Uint8Array} reader Reader or buffer to decode from
 * @returns {Message<{}>} Decoded message
 * @throws {Error} If the payload is not a reader or valid buffer
 * @throws {util.ProtocolError} If required fields are missing
 */


Type.prototype.decodeDelimited = function decodeDelimited(reader) {
  if (!(reader instanceof Reader)) reader = Reader.create(reader);
  return this.decode(reader, reader.uint32());
};
/**
 * Verifies that field values are valid and that required fields are present.
 * @param {Object.<string,*>} message Plain object to verify
 * @returns {null|string} `null` if valid, otherwise the reason why it is not
 */


Type.prototype.verify = function verify_setup(message) {
  return this.setup().verify(message); // overrides this method
};
/**
 * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
 * @param {Object.<string,*>} object Plain object to convert
 * @returns {Message<{}>} Message instance
 */


Type.prototype.fromObject = function fromObject(object) {
  return this.setup().fromObject(object);
};
/**
 * Conversion options as used by {@link Type#toObject} and {@link Message.toObject}.
 * @interface IConversionOptions
 * @property {Function} [longs] Long conversion type.
 * Valid values are `String` and `Number` (the global types).
 * Defaults to copy the present value, which is a possibly unsafe number without and a {@link Long} with a long library.
 * @property {Function} [enums] Enum value conversion type.
 * Only valid value is `String` (the global type).
 * Defaults to copy the present value, which is the numeric id.
 * @property {Function} [bytes] Bytes value conversion type.
 * Valid values are `Array` and (a base64 encoded) `String` (the global types).
 * Defaults to copy the present value, which usually is a Buffer under node and an Uint8Array in the browser.
 * @property {boolean} [defaults=false] Also sets default values on the resulting object
 * @property {boolean} [arrays=false] Sets empty arrays for missing repeated fields even if `defaults=false`
 * @property {boolean} [objects=false] Sets empty objects for missing map fields even if `defaults=false`
 * @property {boolean} [oneofs=false] Includes virtual oneof properties set to the present field's name, if any
 * @property {boolean} [json=false] Performs additional JSON compatibility conversions, i.e. NaN and Infinity to strings
 */

/**
 * Creates a plain object from a message of this type. Also converts values to other types if specified.
 * @param {Message<{}>} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 */


Type.prototype.toObject = function toObject(message, options) {
  return this.setup().toObject(message, options);
};

Type.d = function decorateType(typeName) {
  return function typeDecorator(target) {
    util.decorateType(target, typeName);
  };
};

Type._configure = function () {
  Enum = __webpack_require__(/*! ./enum */ "./src/weichatPb/src/enum.js");
  Field = __webpack_require__(/*! ./field */ "./src/weichatPb/src/field.js");
  Message = __webpack_require__(/*! ./message */ "./src/weichatPb/src/message.js");
  OneOf = __webpack_require__(/*! ./oneof */ "./src/weichatPb/src/oneof.js");
  Writer = __webpack_require__(/*! ./writer */ "./src/weichatPb/src/writer.js");
  Reader = __webpack_require__(/*! ./reader */ "./src/weichatPb/src/reader.js");
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
  verifier = __webpack_require__(/*! ./verifier */ "./src/weichatPb/src/verifier.js");
  encoder = __webpack_require__(/*! ./encoder */ "./src/weichatPb/src/encoder.js");
  decoder = __webpack_require__(/*! ./decoder */ "./src/weichatPb/src/decoder.js");
  Service = __webpack_require__(/*! ./service */ "./src/weichatPb/src/service.js");
  wrappers = __webpack_require__(/*! ./wrappers */ "./src/weichatPb/src/wrappers.js");
  converter = __webpack_require__(/*! ./converter */ "./src/weichatPb/src/converter.js");
  MapField = __webpack_require__(/*! ./mapField */ "./src/weichatPb/src/mapField.js");
};

/***/ }),

/***/ "./src/weichatPb/src/types.js":
/*!************************************!*\
  !*** ./src/weichatPb/src/types.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/**
 * Common type constants.
 * @namespace
 */

var types = module.exports;

var util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");

var s = ["double", // 0
"float", // 1
"int32", // 2
"uint32", // 3
"sint32", // 4
"fixed32", // 5
"sfixed32", // 6
"int64", // 7
"uint64", // 8
"sint64", // 9
"fixed64", // 10
"sfixed64", // 11
"bool", // 12
"string", // 13
"bytes" // 14
];

function bake(values, offset) {
  var i = 0,
      o = {};
  offset |= 0;

  while (i < values.length) {
    o[s[i + offset]] = values[i++];
  }

  return o;
}
/**
 * Basic type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 * @property {number} bytes=2 Ldelim wire type
 */


types.basic = bake([
/* double   */
1,
/* float    */
5,
/* int32    */
0,
/* uint32   */
0,
/* sint32   */
0,
/* fixed32  */
5,
/* sfixed32 */
5,
/* int64    */
0,
/* uint64   */
0,
/* sint64   */
0,
/* fixed64  */
1,
/* sfixed64 */
1,
/* bool     */
0,
/* string   */
2,
/* bytes    */
2]);
/**
 * Basic type defaults.
 * @type {Object.<string,*>}
 * @const
 * @property {number} double=0 Double default
 * @property {number} float=0 Float default
 * @property {number} int32=0 Int32 default
 * @property {number} uint32=0 Uint32 default
 * @property {number} sint32=0 Sint32 default
 * @property {number} fixed32=0 Fixed32 default
 * @property {number} sfixed32=0 Sfixed32 default
 * @property {number} int64=0 Int64 default
 * @property {number} uint64=0 Uint64 default
 * @property {number} sint64=0 Sint32 default
 * @property {number} fixed64=0 Fixed64 default
 * @property {number} sfixed64=0 Sfixed64 default
 * @property {boolean} bool=false Bool default
 * @property {string} string="" String default
 * @property {Array.<number>} bytes=Array(0) Bytes default
 * @property {null} message=null Message default
 */

types.defaults = bake([
/* double   */
0,
/* float    */
0,
/* int32    */
0,
/* uint32   */
0,
/* sint32   */
0,
/* fixed32  */
0,
/* sfixed32 */
0,
/* int64    */
0,
/* uint64   */
0,
/* sint64   */
0,
/* fixed64  */
0,
/* sfixed64 */
0,
/* bool     */
false,
/* string   */
"",
/* bytes    */
util.emptyArray,
/* message  */
null]);
/**
 * Basic long type wire types.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 */

types["long"] = bake([
/* int64    */
0,
/* uint64   */
0,
/* sint64   */
0,
/* fixed64  */
1,
/* sfixed64 */
1], 7);
/**
 * Allowed types for map keys with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 * @property {number} string=2 Ldelim wire type
 */

types.mapKey = bake([
/* int32    */
0,
/* uint32   */
0,
/* sint32   */
0,
/* fixed32  */
5,
/* sfixed32 */
5,
/* int64    */
0,
/* uint64   */
0,
/* sint64   */
0,
/* fixed64  */
1,
/* sfixed64 */
1,
/* bool     */
0,
/* string   */
2], 2);
/**
 * Allowed types for packed repeated fields with their associated wire type.
 * @type {Object.<string,number>}
 * @const
 * @property {number} double=1 Fixed64 wire type
 * @property {number} float=5 Fixed32 wire type
 * @property {number} int32=0 Varint wire type
 * @property {number} uint32=0 Varint wire type
 * @property {number} sint32=0 Varint wire type
 * @property {number} fixed32=5 Fixed32 wire type
 * @property {number} sfixed32=5 Fixed32 wire type
 * @property {number} int64=0 Varint wire type
 * @property {number} uint64=0 Varint wire type
 * @property {number} sint64=0 Varint wire type
 * @property {number} fixed64=1 Fixed64 wire type
 * @property {number} sfixed64=1 Fixed64 wire type
 * @property {number} bool=0 Varint wire type
 */

types.packed = bake([
/* double   */
1,
/* float    */
5,
/* int32    */
0,
/* uint32   */
0,
/* sint32   */
0,
/* fixed32  */
5,
/* sfixed32 */
5,
/* int64    */
0,
/* uint64   */
0,
/* sint64   */
0,
/* fixed64  */
1,
/* sfixed64 */
1,
/* bool     */
0]);

types._configure = function () {
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

/***/ }),

/***/ "./src/weichatPb/src/utf8.js":
/*!***********************************!*\
  !*** ./src/weichatPb/src/utf8.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

var utf8 = module.exports;
/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */

utf8.length = function utf8_length(string) {
  var len = 0,
      c = 0;

  for (var i = 0; i < string.length; ++i) {
    c = string.charCodeAt(i);
    if (c < 128) len += 1;else if (c < 2048) len += 2;else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
      ++i;
      len += 4;
    } else len += 3;
  }

  return len;
};
/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */


utf8.read = function utf8_read(buffer, start, end) {
  var len = end - start;
  if (len < 1) return "";
  var parts = null,
      chunk = [],
      i = 0,
      // char offset
  t; // temporary

  while (start < end) {
    t = buffer[start++];
    if (t < 128) chunk[i++] = t;else if (t > 191 && t < 224) chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;else if (t > 239 && t < 365) {
      t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
      chunk[i++] = 0xD800 + (t >> 10);
      chunk[i++] = 0xDC00 + (t & 1023);
    } else chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;

    if (i > 8191) {
      (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
      i = 0;
    }
  }

  if (parts) {
    if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
    return parts.join("");
  }

  return String.fromCharCode.apply(String, chunk.slice(0, i));
};
/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */


utf8.write = function utf8_write(string, buffer, offset) {
  var start = offset,
      c1,
      // character 1
  c2; // character 2

  for (var i = 0; i < string.length; ++i) {
    c1 = string.charCodeAt(i);

    if (c1 < 128) {
      buffer[offset++] = c1;
    } else if (c1 < 2048) {
      buffer[offset++] = c1 >> 6 | 192;
      buffer[offset++] = c1 & 63 | 128;
    } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
      c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
      ++i;
      buffer[offset++] = c1 >> 18 | 240;
      buffer[offset++] = c1 >> 12 & 63 | 128;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    } else {
      buffer[offset++] = c1 >> 12 | 224;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    }
  }

  return offset - start;
};

/***/ }),

/***/ "./src/weichatPb/src/util.js":
/*!***********************************!*\
  !*** ./src/weichatPb/src/util.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

var _typeof = (__webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js")["default"]);

__webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last.js");

__webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ "./node_modules/core-js/modules/esnext.typed-array.find-last-index.js");

__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");

__webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");

__webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");

__webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");

__webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");

__webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");

__webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");

__webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");

__webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");

__webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");

__webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");

__webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");

__webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");

__webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");

__webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");

__webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.number.is-integer.js */ "./node_modules/core-js/modules/es.number.is-integer.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/**
 * Created by zhangmiao on 2018/3/12.
 */


var util = module.exports;

var roots = __webpack_require__(/*! ./roots */ "./src/weichatPb/src/roots.js");

util.LongBits = __webpack_require__(/*! ./longBits */ "./src/weichatPb/src/longBits.js");
util.Long = __webpack_require__(/*! ./long */ "./src/weichatPb/src/long.js");
util.pool = __webpack_require__(/*! ./pool */ "./src/weichatPb/src/pool.js");
util["float"] = __webpack_require__(/*! ./float */ "./src/weichatPb/src/float.js");
util.asPromise = __webpack_require__(/*! ./asPromise */ "./src/weichatPb/src/asPromise.js");
util.EventEmitter = __webpack_require__(/*! ./EventEmitter */ "./src/weichatPb/src/EventEmitter.js");
util.path = __webpack_require__(/*! ./path */ "./src/weichatPb/src/path.js");
util.base64 = __webpack_require__(/*! ./base64 */ "./src/weichatPb/src/base64.js");
util.utf8 = __webpack_require__(/*! ./utf8 */ "./src/weichatPb/src/utf8.js");

util.compareFieldsById = function compareFieldsById(a, b) {
  return a.id - b.id;
};

util.toArray = function toArray(object) {
  if (object) {
    var keys = Object.keys(object),
        array = new Array(keys.length),
        index = 0;

    while (index < keys.length) {
      array[index] = object[keys[index++]];
    }

    return array;
  }

  return [];
};

util.toObject = function toObject(array) {
  var object = {},
      index = 0;

  while (index < array.length) {
    var key = array[index++],
        val = array[index++];
    if (val !== undefined) object[key] = val;
  }

  return object;
};

util.isString = function isString(value) {
  return typeof value === "string" || value instanceof String;
};

var safePropBackslashRe = /\\/g,
    safePropQuoteRe = /"/g;
/**
 * Tests whether the specified name is a reserved word in JS.
 * @param {string} name Name to test
 * @returns {boolean} `true` if reserved, otherwise `false`
 */

util.isReserved = function isReserved(name) {
  return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name);
};

util.isObject = function isObject(value) {
  return value && _typeof(value) === "object";
};

util.Array = typeof Uint8Array !== "undefined" ? Uint8Array
/* istanbul ignore next */
: Array;

util.oneOfGetter = function getOneOf(fieldNames) {
  var fieldMap = {};

  for (var i = 0; i < fieldNames.length; ++i) {
    fieldMap[fieldNames[i]] = 1;
  }
  /**
   * @returns {string|undefined} Set field name, if any
   * @this Object
   * @ignore
   */


  return function () {
    // eslint-disable-line consistent-return
    for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) {
      if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null) return keys[i];
    }
  };
};

util.oneOfSetter = function setOneOf(fieldNames) {
  /**
   * @param {string} name Field name
   * @returns {undefined}
   * @this Object
   * @ignore
   */
  return function (name) {
    for (var i = 0; i < fieldNames.length; ++i) {
      if (fieldNames[i] !== name) delete this[
      /*"_"+*/
      fieldNames[i]];
    } //设置为私有属性

  };
};

util.merge = function merge(dst, src, ifNotSet) {
  // used by converters
  for (var keys = Object.keys(src), i = 0; i < keys.length; ++i) {
    if (dst[keys[i]] === undefined || !ifNotSet) dst[keys[i]] = src[keys[i]];
  }

  return dst;
};

util.decorateType = function decorateType(ctor, typeName) {
  /* istanbul ignore if */
  if (ctor.$type) {
    if (typeName && ctor.$type.name !== typeName) {
      util.decorateRoot.remove(ctor.$type);
      ctor.$type.name = typeName;
      util.decorateRoot.add(ctor.$type);
    }

    return ctor.$type;
  }
  /* istanbul ignore next */


  if (!Type) Type = __webpack_require__(/*! ./type */ "./src/weichatPb/src/type.js");
  var type = new Type(typeName || ctor.name);
  util.decorateRoot.add(type);
  type.ctor = ctor; // sets up .encode, .decode etc.

  Object.defineProperty(ctor, "$type", {
    value: type,
    enumerable: false
  });
  Object.defineProperty(ctor.prototype, "$type", {
    value: type,
    enumerable: false
  });
  return type;
};

util.emptyArray = Object.freeze ? Object.freeze([]) :
/* istanbul ignore next */
[]; // used on prototypes

util.emptyObject = Object.freeze ? Object.freeze({}) :
/* istanbul ignore next */
{}; // used on prototypes

util.longToHash = function longToHash(value) {
  return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
};

util.copy = function (obj) {
  if (_typeof(obj) != 'object') {
    return obj;
  }

  var newObj = {};

  for (var attr in obj) {
    newObj[attr] = obj[attr];
  }

  return newObj;
};

function deepCopy(obj) {
  if (_typeof(obj) != 'object') {
    return obj;
  }

  var newobj = {};

  for (var attr in obj) {
    newobj[attr] = deepCopy(obj[attr]);
  }

  return newobj;
}

util.deepCopy = deepCopy;

util.ProtocolError = function newError(name) {
  function CustomError(message, properties) {
    if (!(this instanceof CustomError)) return new CustomError(message, properties); // Error.call(this, message);
    // ^ just returns a new error instance because the ctor can be called as a function

    Object.defineProperty(this, "message", {
      get: function get() {
        return message;
      }
    });
    /* istanbul ignore next */

    if (Error.captureStackTrace) // node
      Error.captureStackTrace(this, CustomError);else Object.defineProperty(this, "stack", {
      value: new Error().stack || ""
    });
    if (properties) merge(this, properties);
  }

  (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
  Object.defineProperty(CustomError.prototype, "name", {
    get: function get() {
      return name;
    }
  });

  CustomError.prototype.toString = function toString() {
    return this.name + ": " + this.message;
  };

  return CustomError;
};

util.toJSONOptions = {
  longs: String,
  enums: String,
  bytes: String,
  json: true
};

util.Buffer = function () {
  return null;
}();

util.newBuffer = function newBuffer(sizeOrArray) {
  /* istanbul ignore next */
  return typeof sizeOrArray === "number" ? new util.Array(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
};

util.stringToBytes = function stringToBytes(str) {
  var bytes = [];
  var len, c;
  len = str.length;

  for (var i = 0; i < len; i++) {
    c = str.charCodeAt(i);

    if (c >= 0x010000 && c <= 0x10FFFF) {
      bytes.push(c >> 18 & 0x07 | 0xF0);
      bytes.push(c >> 12 & 0x3F | 0x80);
      bytes.push(c >> 6 & 0x3F | 0x80);
      bytes.push(c & 0x3F | 0x80);
    } else if (c >= 0x000800 && c <= 0x00FFFF) {
      bytes.push(c >> 12 & 0x0F | 0xE0);
      bytes.push(c >> 6 & 0x3F | 0x80);
      bytes.push(c & 0x3F | 0x80);
    } else if (c >= 0x000080 && c <= 0x0007FF) {
      bytes.push(c >> 6 & 0x1F | 0xC0);
      bytes.push(c & 0x3F | 0x80);
    } else {
      bytes.push(c & 0xFF);
    }
  }

  return bytes;
};

util.byteToString = function byteToString(arr) {
  if (typeof arr === 'string') {
    return arr;
  }

  var str = '',
      _arr = arr;

  for (var i = 0; i < _arr.length; i++) {
    var one = _arr[i].toString(2),
        v = one.match(/^1+?(?=0)/);

    if (v && one.length == 8) {
      var bytesLength = v[0].length;

      var store = _arr[i].toString(2).slice(7 - bytesLength);

      for (var st = 1; st < bytesLength; st++) {
        store += _arr[st + i].toString(2).slice(2);
      }

      str += String.fromCharCode(parseInt(store, 2));
      i += bytesLength - 1;
    } else {
      str += String.fromCharCode(_arr[i]);
    }
  }

  return str;
};

util.isInteger = Number.isInteger ||
/* istanbul ignore next */
function isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

Object.defineProperty(util, "decorateRoot", {
  get: function get() {
    return roots["decorated"] || (roots["decorated"] = new (__webpack_require__(/*! ./root */ "./src/weichatPb/src/root.js"))());
  }
});

/***/ }),

/***/ "./src/weichatPb/src/verifier.js":
/*!***************************************!*\
  !*** ./src/weichatPb/src/verifier.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js")["default"]);

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/**
 * Created by zhangmiao on 2018/3/14.
 */


module.exports = verifier;
var Enum;
var util;

function invalid(field, expected) {
  return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
}

function verifyValue(field, fieldIndex, ref, options) {
  var _types = options.types;

  if (field.resolvedType) {
    if (field.resolvedType instanceof Enum) {
      var keys = Object.keys(field.resolvedType.values);

      if (keys.indexOf(ref) < 0) {
        //没有找到时候
        return invalid(field, "enum value");
      }
    } else {
      var e = _types[fieldIndex].verify(ref);

      if (e) return field.name + "." + e;
    }
  } else {
    switch (field.type) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        if (!util.isInteger(ref)) return invalid(field, "integer");
        break;

      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        if (!util.isInteger(ref) && !(ref && util.isInteger(ref.low) && util.isInteger(ref.high))) return invalid(field, "integer|Long");
        break;

      case "float":
      case "double":
        if (typeof ref !== "number") return invalid(field, "number");
        break;

      case "bool":
        if (typeof ref !== "boolean") return invalid(field, "boolean");
        break;

      case "string":
        if (!util.isString(ref)) return invalid(field, "string");
        break;

      case "bytes":
        if (!(ref && typeof ref.length === "number" || util.isString(ref))) return invalid(field, "buffer");
        break;
    }
  }
}

function verifyKey(field, ref) {
  switch (field.keyType) {
    case "int32":
    case "uint32":
    case "sint32":
    case "fixed32":
    case "sfixed32":
      if (!util.key32Re.test(ref)) return invalid(field, "integer key");
      break;

    case "int64":
    case "uint64":
    case "sint64":
    case "fixed64":
    case "sfixed64":
      if (!util.key64Re.test(ref)) return invalid(field, "integer|Long key");
      break;

    case "bool":
      if (!util.key2Re.test(ref)) return invalid(field, "boolean key");
      break;
  }
}

function verifier(mtype) {
  return function (options) {
    return function (m) {
      var invalidDes;
      if (_typeof(m) !== 'object' || m === null) return "object expected";
      var oneofs = mtype.oneofsArray,
          seenFirstField = {};
      var p;
      if (oneofs.length) p = {};

      for (var i = 0; i < mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(),
            ref = m[field.name];

        if (!field.optional || ref != null && m.hasOwnProperty(field.name)) {
          var _i;

          if (field.map) {
            if (!util.isObject(ref)) return invalid(field, "object");
            var k = Object.keys(ref);

            for (_i = 0; _i < k.length; ++_i) {
              //检查key值的合法性
              invalidDes = verifyKey(field, k[_i]);

              if (invalidDes) {
                return invalidDes;
              } //检查value值的合法性


              invalidDes = verifyValue(field, i, ref[k[_i]], options);

              if (invalidDes) {
                return invalidDes;
              }
            }
          } else if (field.repeated) {
            if (!Array.isArray(ref)) {
              return invalid(field, "array");
            }

            for (_i = 0; _i < ref.length; ++_i) {
              invalidDes = verifyValue(field, i, ref[_i], options);

              if (invalidDes) {
                return invalidDes;
              }
            }
          } else {
            if (field.partOf) {
              var oneofPropName = field.partOf.name;
              if (seenFirstField[field.partOf.name] === 1) if (p[oneofPropName] === 1) return field.partOf.name + ": multiple values";
              p[oneofPropName] = 1;
            }

            invalidDes = verifyValue(field, i, ref, options);

            if (invalidDes) {
              return invalidDes;
            }
          }
        }
      }
    };
  };
}

verifier._configure = function () {
  Enum = __webpack_require__(/*! ./enum */ "./src/weichatPb/src/enum.js");
  util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");
};

/***/ }),

/***/ "./src/weichatPb/src/wrappers.js":
/*!***************************************!*\
  !*** ./src/weichatPb/src/wrappers.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");

var wrappers = exports;
var Message;
/**
 * From object converter part of an {@link IWrapper}.
 * @typedef WrapperFromObjectConverter
 * @type {function}
 * @param {Object.<string,*>} object Plain object
 * @returns {Message<{}>} Message instance
 * @this Type
 */

/**
 * To object converter part of an {@link IWrapper}.
 * @typedef WrapperToObjectConverter
 * @type {function}
 * @param {Message<{}>} message Message instance
 * @param {IConversionOptions} [options] Conversion options
 * @returns {Object.<string,*>} Plain object
 * @this Type
 */

/**
 * Common type wrapper part of {@link wrappers}.
 * @interface IWrapper
 * @property {WrapperFromObjectConverter} [fromObject] From object converter
 * @property {WrapperToObjectConverter} [toObject] To object converter
 */
// Custom wrapper for Any

wrappers[".google.protobuf.Any"] = {
  fromObject: function fromObject(object) {
    // unwrap value type if mapped
    if (object && object["@type"]) {
      var type = this.lookup(object["@type"]);
      /* istanbul ignore else */

      if (type) {
        // type_url does not accept leading "."
        var type_url = object["@type"].charAt(0) === "." ? object["@type"].substr(1) : object["@type"]; // type_url prefix is optional, but path seperator is required

        return this.create({
          type_url: "/" + type_url,
          value: type.encode(type.fromObject(object)).finish()
        });
      }
    }

    return this.fromObject(object);
  },
  toObject: function toObject(message, options) {
    // decode value if requested and unmapped
    if (options && options.json && message.type_url && message.value) {
      // Only use fully qualified type name after the last '/'
      var name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
      var type = this.lookup(name);
      /* istanbul ignore else */

      if (type) message = type.decode(message.value);
    } // wrap value if unmapped


    if (!(message instanceof this.ctor) && message instanceof Message) {
      var object = message.$type.toObject(message, options);
      object["@type"] = message.$type.fullName;
      return object;
    }

    return this.toObject(message, options);
  }
};

wrappers._configure = function () {
  Message = __webpack_require__(/*! ./message */ "./src/weichatPb/src/message.js");
};

/***/ }),

/***/ "./src/weichatPb/src/writer.js":
/*!*************************************!*\
  !*** ./src/weichatPb/src/writer.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");

module.exports = Writer;

var util = __webpack_require__(/*! ./util */ "./src/weichatPb/src/util.js");

var LongBits;
var BufferWriter; // cyclic

var base64;

var utf8 = __webpack_require__(/*! ./utf8 */ "./src/weichatPb/src/utf8.js");
/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */


function Op(fn, len, val) {
  /**
   * Function to call.
   * @type {function(Uint8Array, number, *)}
   */
  this.fn = fn;
  /**
   * Value byte length.
   * @type {number}
   */

  this.len = len;
  /**
   * Next operation.
   * @type {Writer.Op|undefined}
   */

  this.next = undefined;
  /**
   * Value to write.
   * @type {*}
   */

  this.val = val; // type varies
}
/* istanbul ignore next */


function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */


function State(writer) {
  /**
   * Current head.
   * @type {Writer.Op}
   */
  this.head = writer.head;
  /**
   * Current tail.
   * @type {Writer.Op}
   */

  this.tail = writer.tail;
  /**
   * Current buffer length.
   * @type {number}
   */

  this.len = writer.len;
  /**
   * Next state.
   * @type {State|null}
   */

  this.next = writer.states;
}
/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */


function Writer() {
  /**
   * Current length.
   * @type {number}
   */
  this.len = 0;
  /**
   * Operations head.
   * @type {Object}
   */

  this.head = new Op(noop, 0, 0);
  /**
   * Operations tail
   * @type {Object}
   */

  this.tail = this.head;
  /**
   * Linked forked states.
   * @type {Object|null}
   */

  this.states = null; // When a value is written, the writer calculates its byte length and puts it into a linked
  // list of operations to perform when finish() is called. This both allows us to allocate
  // buffers of the exact required size and reduces the amount of work we have to do compared
  // to first calculating over objects and then encoding over objects. In our case, the encoding
  // part is just a linked list walk calling operations with already prepared values.
}
/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */


Writer.create = util.Buffer ? function create_buffer_setup() {
  return (Writer.create = function create_buffer() {
    return new BufferWriter();
  })();
}
/* istanbul ignore next */
: function create_array() {
  return new Writer();
};
/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

Writer.alloc = function alloc(size) {
  return new util.Array(size);
}; // Use Uint8Array buffer pool in the browser, just like node does with buffers

/* istanbul ignore else */


if (util.Array !== Array) Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */

Writer.prototype._push = function push(fn, len, val) {
  this.tail = this.tail.next = new Op(fn, len, val);
  this.len += len;
  return this;
};

function writeByte(val, buf, pos) {
  buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
  while (val > 127) {
    buf[pos++] = val & 127 | 128;
    val >>>= 7;
  }

  buf[pos] = val;
}
/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */


function VarintOp(len, val) {
  this.len = len;
  this.next = undefined;
  this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;
/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */

Writer.prototype.uint32 = function write_uint32(value) {
  // here, the call to this.push has been inlined and a varint specific Op subclass is used.
  // uint32 is by far the most frequently used operation and benefits significantly from this.
  this.len += (this.tail = this.tail.next = new VarintOp((value = value >>> 0 //将有符号的数变为无符号的数
  ) < 128 ? 1 //2的7次方
  : value < 16384 ? 2 //2的14次方
  : value < 2097152 ? 3 //2的21次方
  : value < 268435456 ? 4 //2的28次方
  : 5, //2的35次方 最多32次方,所以最多是5
  value)).len;
  return this;
};
/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.int32 = function write_int32(value) {
  return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
  : this.uint32(value);
};
/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.sint32 = function write_sint32(value) {
  return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
  while (val.hi) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
    val.hi >>>= 7;
  }

  while (val.lo > 127) {
    buf[pos++] = val.lo & 127 | 128;
    val.lo = val.lo >>> 7;
  }

  buf[pos++] = val.lo;
}
/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.uint64 = function write_uint64(value) {
  var bits = LongBits.from(value);
  return this._push(writeVarint64, bits.length(), bits);
};
/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.int64 = Writer.prototype.uint64;
/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */

Writer.prototype.sint64 = function write_sint64(value) {
  var bits = LongBits.from(value).zzEncode();
  return this._push(writeVarint64, bits.length(), bits);
};
/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.bool = function write_bool(value) {
  return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
  buf[pos] = val & 255;
  buf[pos + 1] = val >>> 8 & 255;
  buf[pos + 2] = val >>> 16 & 255;
  buf[pos + 3] = val >>> 24;
}
/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.fixed32 = function write_fixed32(value) {
  return this._push(writeFixed32, 4, value >>> 0);
};
/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.sfixed32 = Writer.prototype.fixed32;
/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */

Writer.prototype.fixed64 = function write_fixed64(value) {
  var bits = LongBits.from(value);
  return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};
/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */


Writer.prototype.sfixed64 = Writer.prototype.fixed64;
/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */

Writer.prototype["float"] = function write_float(value) {
  return this._push(util["float"].writeFloatLE, 4, value);
};
/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype["double"] = function write_double(value) {
  return this._push(util["float"].writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
  buf.set(val, pos); // also works for plain array values
}
/* istanbul ignore next */
: function writeBytes_for(val, buf, pos) {
  for (var i = 0; i < val.length; ++i) {
    buf[pos + i] = val[i];
  }
};
/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or string to write
 * @returns {Writer} `this`
 */

Writer.prototype.bytes = function write_bytes(value) {
  var len = value.length >>> 0;
  if (!len) return this._push(writeByte, 1, 0);

  if (util.isString(value)) {
    //len = (value = util.stringToBytes(value)).length;
    //var buf = Writer.alloc(len = base64.length(value));
    //base64.decode(value, buf, 0);
    //value = buf;
    var buf = Writer.alloc(len = utf8.length(value));
    utf8.write(value, buf, 0);
    value = buf;
  }

  return this.uint32(len)._push(writeBytes, len, value);
};
/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */


Writer.prototype.string = function write_string(value) {
  var len = utf8.length(value);
  return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
};
/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */


Writer.prototype.fork = function fork() {
  this.states = new State(this);
  this.head = this.tail = new Op(noop, 0, 0);
  this.len = 0;
  return this;
};
/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */


Writer.prototype.reset = function reset() {
  if (this.states) {
    this.head = this.states.head;
    this.tail = this.states.tail;
    this.len = this.states.len;
    this.states = this.states.next;
  } else {
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
  }

  return this;
};
/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */


Writer.prototype.ldelim = function ldelim() {
  var head = this.head,
      tail = this.tail,
      len = this.len;
  this.reset().uint32(len);

  if (len) {
    this.tail.next = head.next; // skip noop

    this.tail = tail;
    this.len += len;
  }

  return this;
};
/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */


Writer.prototype.finish = function finish() {
  var head = this.head.next,
      // skip noop
  buf = this.constructor.alloc(this.len),
      pos = 0;

  while (head) {
    head.fn(head.val, buf, pos);
    pos += head.len;
    head = head.next;
  } // this.head = this.tail = null;


  return buf;
};

Writer._configure = function () {
  //util      = require("./util");
  LongBits = __webpack_require__(/*! ./longBits */ "./src/weichatPb/src/longBits.js");
  base64 = __webpack_require__(/*! ./base64 */ "./src/weichatPb/src/base64.js");
  utf8 = __webpack_require__(/*! ./utf8 */ "./src/weichatPb/src/utf8.js");
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-non-extensible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-non-extensible.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-basic-detection */ "./node_modules/core-js/internals/array-buffer-basic-detection.js");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/core-js/internals/define-built-ins.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndex = __webpack_require__(/*! ../internals/to-index */ "./node_modules/core-js/internals/to-index.js");
var IEEE754 = __webpack_require__(/*! ../internals/ieee754 */ "./node_modules/core-js/internals/ieee754.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var arrayFill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
var $DataView = global[DATA_VIEW];
var DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var Array = global.Array;
var RangeError = global.RangeError;
var fill = uncurryThis(arrayFill);
var reverse = uncurryThis([].reverse);

var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = arraySlice(bytes, start, start + count);
  return isLittleEndian ? pack : reverse(pack);
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);
  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, ArrayBufferPrototype);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: fill(Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, DataViewPrototype);
    anInstance(buffer, ArrayBufferPrototype);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toIntegerOrInfinity(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });
    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  DataViewPrototype = $DataView[PROTOTYPE];

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  defineBuiltIns(DataViewPrototype, {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME && NativeArrayBuffer.name !== ARRAY_BUFFER;
  /* eslint-disable no-new -- required for testing */
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1);
  }) || fails(function () {
    new NativeArrayBuffer();
    new NativeArrayBuffer(1.5);
    new NativeArrayBuffer(NaN);
    return NativeArrayBuffer.length != 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
  })) {
    /* eslint-enable no-new -- required for testing */
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, ArrayBufferPrototype);
      return new NativeArrayBuffer(toIndex(length));
    };

    $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;

    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }

    ArrayBufferPrototype.constructor = $ArrayBuffer;
  } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
    createNonEnumerableProperty(NativeArrayBuffer, 'name', ARRAY_BUFFER);
  }

  // WebKit bug - the same parent prototype for typed arrays and data view
  if (setPrototypeOf && getPrototypeOf(DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf(DataViewPrototype, ObjectPrototype);
  }

  // iOS Safari 7.x bug
  var testView = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = uncurryThis(DataViewPrototype.setInt8);
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns(DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8(this, byteOffset, value << 24 >> 24);
    }
  }, { unsafe: true });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);

module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-copy-within.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/array-copy-within.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var deletePropertyOrThrow = __webpack_require__(/*! ../internals/delete-property-or-throw */ "./node_modules/core-js/internals/delete-property-or-throw.js");

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es-x/no-array-prototype-copywithin -- safe
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = lengthOfArrayLike(O);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else deletePropertyOrThrow(O, to);
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from-constructor-and-list.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-from-constructor-and-list.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

module.exports = function (Constructor, list) {
  var index = 0;
  var length = lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-last-index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es-x/no-array-prototype-lastindexof -- safe */
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = lengthOfArrayLike(O);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;


/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-sort.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-sort.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var quot = /"/g;
var replace = uncurryThis(''.replace);

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-ins.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-ins.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-ff-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-ff-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ie-or-edge.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ie-or-edge.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var UA = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-webkit-version.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-webkit-version.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-isextensible, es-x/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/ieee754.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/ieee754.js ***!
  \***************************************************/
/***/ (function(module) {

// IEEE754 conversions based on https://github.com/feross/ieee754
var $Array = Array;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = $Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number);
  // eslint-disable-next-line no-self-compare -- NaN check
  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare -- NaN check
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);
    c = pow(2, -exponent);
    if (number * c < 1) {
      exponent--;
      c *= 2;
    }
    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }
    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }
    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }
  while (mantissaLength >= 8) {
    buffer[index++] = mantissa & 255;
    mantissa /= 256;
    mantissaLength -= 8;
  }
  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;
  while (exponentLength > 0) {
    buffer[index++] = exponent & 255;
    exponent /= 256;
    exponentLength -= 8;
  }
  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;
  while (nBits > 0) {
    exponent = exponent * 256 + buffer[index--];
    nBits -= 8;
  }
  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;
  while (nBits > 0) {
    mantissa = mantissa * 256 + buffer[index--];
    nBits -= 8;
  }
  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};


/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternalModule = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ "./node_modules/core-js/internals/object-is-extensible.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/is-big-int-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/is-big-int-array.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var slice = uncurryThis(''.slice);

module.exports = function (it) {
  return slice(classof(it), 0, 3) === 'Big';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-integral-number.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/is-integral-number.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var floor = Math.floor;

// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es-x/no-number-isinteger -- safe
module.exports = Number.isInteger || function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es-x/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var $getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-extensible.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-extensible.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ "./node_modules/core-js/internals/array-buffer-non-extensible.js");

// eslint-disable-next-line es-x/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ "./node_modules/core-js/internals/to-big-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-big-int.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var $TypeError = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
module.exports = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw $TypeError("Can't convert number to bigint");
  // eslint-disable-next-line es-x/no-bigint -- safe
  return BigInt(prim);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-index.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/to-index.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var $RangeError = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity(it);
  var length = toLength(number);
  if (number !== length) throw $RangeError('Wrong length or index');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-offset.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-offset.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__(/*! ../internals/to-positive-integer */ "./node_modules/core-js/internals/to-positive-integer.js");

var $RangeError = RangeError;

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw $RangeError('Wrong offset');
  return offset;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-positive-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/to-positive-integer.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var $RangeError = RangeError;

module.exports = function (it) {
  var result = toIntegerOrInfinity(it);
  if (result < 0) throw $RangeError("The argument can't be less than 0");
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructor.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "./node_modules/core-js/internals/array-buffer.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var isIntegralNumber = __webpack_require__(/*! ../internals/is-integral-number */ "./node_modules/core-js/internals/is-integral-number.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndex = __webpack_require__(/*! ../internals/to-index */ "./node_modules/core-js/internals/to-index.js");
var toOffset = __webpack_require__(/*! ../internals/to-offset */ "./node_modules/core-js/internals/to-offset.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var typedArrayFrom = __webpack_require__(/*! ../internals/typed-array-from */ "./node_modules/core-js/internals/typed-array-from.js");
var forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var enforceInternalState = InternalStateModule.enforce;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var ArrayBufferPrototype = ArrayBuffer.prototype;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  aTypedArrayConstructor(C);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, { get: function () {
    return getInternalState(this)[key];
  } });
};

var isArrayBuffer = function (it) {
  var klass;
  return isPrototypeOf(ArrayBufferPrototype, it) || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target)
    && !isSymbol(key)
    && key in target
    && isIntegralNumber(+key)
    && key >= 0;
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  key = toPropertyKey(key);
  return isTypedArrayIndex(target, key)
    ? createPropertyDescriptor(2, target[key])
    : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  key = toPropertyKey(key);
  if (isTypedArrayIndex(target, key)
    && isObject(descriptor)
    && hasOwn(descriptor, 'value')
    && !hasOwn(descriptor, 'get')
    && !hasOwn(descriptor, 'set')
    // TODO: add validation descriptor w/o calling accessors
    && !descriptor.configurable
    && (!hasOwn(descriptor, 'writable') || descriptor.writable)
    && (!hasOwn(descriptor, 'enumerable') || descriptor.enumerable)
  ) {
    target[key] = descriptor.value;
    return target;
  } return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructorPrototype);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }
        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructorPrototype);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined
            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
            : typedArrayOffset !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
              : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return call(typedArrayFrom, TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });

      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    var FORCED = TypedArrayConstructor != NativeTypedArrayConstructor;

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

    $({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js ***!
  \*************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-new -- required for testing */
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var NATIVE_ARRAY_BUFFER_VIEWS = (__webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").NATIVE_ARRAY_BUFFER_VIEWS);

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;

module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-from-species-and-list.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from-species-and-list.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayFromConstructorAndList = __webpack_require__(/*! ../internals/array-from-constructor-and-list */ "./node_modules/core-js/internals/array-from-constructor-and-list.js");
var typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ "./node_modules/core-js/internals/typed-array-species-constructor.js");

module.exports = function (instance, list) {
  return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);
};


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "./node_modules/core-js/internals/a-constructor.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var isBigIntArray = __webpack_require__(/*! ../internals/is-big-int-array */ "./node_modules/core-js/internals/is-big-int-array.js");
var aTypedArrayConstructor = (__webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").aTypedArrayConstructor);
var toBigInt = __webpack_require__(/*! ../internals/to-big-int */ "./node_modules/core-js/internals/to-big-int.js");

module.exports = function from(source /* , mapfn, thisArg */) {
  var C = aConstructor(this);
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, thisIsBigIntArray, value, step, iterator, next;
  if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    O = [];
    while (!(step = call(next, iterator)).done) {
      O.push(step.value);
    }
  }
  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2]);
  }
  length = lengthOfArrayLike(O);
  result = new (aTypedArrayConstructor(C))(length);
  thisIsBigIntArray = isBigIntArray(result);
  for (i = 0; length > i; i++) {
    value = mapping ? mapfn(O[i], i) : O[i];
    // FF30- typed arrays doesn't properly convert objects to typed array values
    result[i] = thisIsBigIntArray ? toBigInt(value) : +value;
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-species-constructor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-species-constructor.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;

// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
module.exports = function (originalArray) {
  return aTypedArrayConstructor(speciesConstructor(originalArray, getTypedArrayConstructor(originalArray)));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.constructor.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var arrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "./node_modules/core-js/internals/array-buffer.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");

var ARRAY_BUFFER = 'ArrayBuffer';
var ArrayBuffer = arrayBufferModule[ARRAY_BUFFER];
var NativeArrayBuffer = global[ARRAY_BUFFER];

// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
$({ global: true, constructor: true, forced: NativeArrayBuffer !== ArrayBuffer }, {
  ArrayBuffer: ArrayBuffer
});

setSpecies(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array-buffer.slice.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array-buffer.slice.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "./node_modules/core-js/internals/array-buffer.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var DataViewPrototype = DataView.prototype;
var nativeArrayBufferSlice = uncurryThis(ArrayBuffer.prototype.slice);
var getUint8 = uncurryThis(DataViewPrototype.getUint8);
var setUint8 = uncurryThis(DataViewPrototype.setUint8);

var INCORRECT_SLICE = fails(function () {
  return !new ArrayBuffer(2).slice(1, undefined).byteLength;
});

// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
$({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
  slice: function slice(start, end) {
    if (nativeArrayBufferSlice && end === undefined) {
      return nativeArrayBufferSlice(anObject(this), start); // FF fix
    }
    var length = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = new (speciesConstructor(this, ArrayBuffer))(toLength(fin - first));
    var viewSource = new DataView(this);
    var viewTarget = new DataView(result);
    var index = 0;
    while (first < fin) {
      setUint8(viewTarget, index++, getUint8(viewSource, first++));
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.last-index-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.last-index-of.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "./node_modules/core-js/internals/array-last-index-of.js");

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es-x/no-array-prototype-lastindexof -- required for testing
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var deletePropertyOrThrow = __webpack_require__(/*! ../internals/delete-property-or-throw */ "./node_modules/core-js/internals/delete-property-or-throw.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var internalSort = __webpack_require__(/*! ../internals/array-sort */ "./node_modules/core-js/internals/array-sort.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var FF = __webpack_require__(/*! ../internals/engine-ff-version */ "./node_modules/core-js/internals/engine-ff-version.js");
var IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ "./node_modules/core-js/internals/engine-is-ie-or-edge.js");
var V8 = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ "./node_modules/core-js/internals/engine-webkit-version.js");

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-json.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var FORCED = fails(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
});

// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
$({ target: 'Date', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O, 'number');
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f);
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var arraySlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = arraySlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  defineBuiltIn(global, NUMBER, NumberWrapper, { constructor: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-integer.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-integer.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isIntegralNumber = __webpack_require__(/*! ../internals/is-integral-number */ "./node_modules/core-js/internals/is-integral-number.js");

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isIntegralNumber
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.create.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-properties.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperties = (__webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js").f);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.freeze.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.freeze.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var onFreeze = (__webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").onFreeze);

// eslint-disable-next-line es-x/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.sub.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.sub.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sub') }, {
  sub: function sub() {
    return createHTML(this, 'sub', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.copy-within.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.copy-within.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $ArrayCopyWithin = __webpack_require__(/*! ../internals/array-copy-within */ "./node_modules/core-js/internals/array-copy-within.js");

var u$ArrayCopyWithin = uncurryThis($ArrayCopyWithin);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
exportTypedArrayMethod('copyWithin', function copyWithin(target, start /* , end */) {
  return u$ArrayCopyWithin(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.every.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.every.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $every = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").every);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
exportTypedArrayMethod('every', function every(callbackfn /* , thisArg */) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.fill.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.fill.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var toBigInt = __webpack_require__(/*! ../internals/to-big-int */ "./node_modules/core-js/internals/to-big-int.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var slice = uncurryThis(''.slice);

// V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
var CONVERSION_BUG = fails(function () {
  var count = 0;
  // eslint-disable-next-line es-x/no-typed-arrays -- safe
  new Int8Array(2).fill({ valueOf: function () { return count++; } });
  return count !== 1;
});

// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
exportTypedArrayMethod('fill', function fill(value /* , start, end */) {
  var length = arguments.length;
  aTypedArray(this);
  var actualValue = slice(classof(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
  return call($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
}, CONVERSION_BUG);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.filter.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $filter = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter);
var fromSpeciesAndList = __webpack_require__(/*! ../internals/typed-array-from-species-and-list */ "./node_modules/core-js/internals/typed-array-from-species-and-list.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
exportTypedArrayMethod('filter', function filter(callbackfn /* , thisArg */) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  return fromSpeciesAndList(this, list);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find-index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $findIndex = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
exportTypedArrayMethod('findIndex', function findIndex(predicate /* , thisArg */) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
exportTypedArrayMethod('find', function find(predicate /* , thisArg */) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.float32-array.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.float32-array.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.float64-array.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.float64-array.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Float64', function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.for-each.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.for-each.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
exportTypedArrayMethod('forEach', function forEach(callbackfn /* , thisArg */) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.includes.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $includes = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
exportTypedArrayMethod('includes', function includes(searchElement /* , fromIndex */) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.index-of.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
exportTypedArrayMethod('indexOf', function indexOf(searchElement /* , fromIndex */) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.iterator.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var ArrayIterators = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = uncurryThis(ArrayIterators.values);
var arrayKeys = uncurryThis(ArrayIterators.keys);
var arrayEntries = uncurryThis(ArrayIterators.entries);
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var TypedArrayPrototype = Uint8Array && Uint8Array.prototype;

var GENERIC = !fails(function () {
  TypedArrayPrototype[ITERATOR].call([1]);
});

var ITERATOR_IS_VALUES = !!TypedArrayPrototype
  && TypedArrayPrototype.values
  && TypedArrayPrototype[ITERATOR] === TypedArrayPrototype.values
  && TypedArrayPrototype.values.name === 'values';

var typedArrayValues = function values() {
  return arrayValues(aTypedArray(this));
};

// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
exportTypedArrayMethod('entries', function entries() {
  return arrayEntries(aTypedArray(this));
}, GENERIC);
// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
exportTypedArrayMethod('keys', function keys() {
  return arrayKeys(aTypedArray(this));
}, GENERIC);
// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
exportTypedArrayMethod('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });
// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
exportTypedArrayMethod(ITERATOR, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.join.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.join.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = uncurryThis([].join);

// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
exportTypedArrayMethod('join', function join(separator) {
  return $join(aTypedArray(this), separator);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.last-index-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.last-index-of.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var $lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "./node_modules/core-js/internals/array-last-index-of.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
  var length = arguments.length;
  return apply($lastIndexOf, aTypedArray(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.map.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ "./node_modules/core-js/internals/typed-array-species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
exportTypedArrayMethod('map', function map(mapfn /* , thisArg */) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (typedArraySpeciesConstructor(O))(length);
  });
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce-right.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce-right.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $reduceRight = (__webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").right);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduceRight(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $reduce = (__webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
exportTypedArrayMethod('reduce', function reduce(callbackfn /* , initialValue */) {
  var length = arguments.length;
  return $reduce(aTypedArray(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reverse.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reverse.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor;

// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;
  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  } return that;
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.set.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.set.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toOffset = __webpack_require__(/*! ../internals/to-offset */ "./node_modules/core-js/internals/to-offset.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var RangeError = global.RangeError;
var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails(function () {
  // eslint-disable-next-line es-x/no-typed-arrays -- required for testing
  var array = new Uint8ClampedArray(2);
  call($set, array, { length: 1, 0: 3 }, 1);
  return array[1] !== 3;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {
  var array = new Int8Array(2);
  array.set(1);
  array.set('2', 1);
  return array[0] !== 0 || array[1] !== 2;
});

// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
exportTypedArrayMethod('set', function set(arrayLike /* , offset */) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var src = toIndexedObject(arrayLike);
  if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return call($set, this, src, offset);
  var length = this.length;
  var len = lengthOfArrayLike(src);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');
  while (index < len) this[offset + index] = src[index++];
}, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.slice.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.slice.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ "./node_modules/core-js/internals/typed-array-species-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

var FORCED = fails(function () {
  // eslint-disable-next-line es-x/no-typed-arrays -- required for testing
  new Int8Array(1).slice();
});

// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
exportTypedArrayMethod('slice', function slice(start, end) {
  var list = arraySlice(aTypedArray(this), start, end);
  var C = typedArraySpeciesConstructor(this);
  var index = 0;
  var length = list.length;
  var result = new C(length);
  while (length > index) result[index] = list[index++];
  return result;
}, FORCED);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.some.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.some.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var $some = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").some);

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
exportTypedArrayMethod('some', function some(callbackfn /* , thisArg */) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.sort.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.sort.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var internalSort = __webpack_require__(/*! ../internals/array-sort */ "./node_modules/core-js/internals/array-sort.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var FF = __webpack_require__(/*! ../internals/engine-ff-version */ "./node_modules/core-js/internals/engine-ff-version.js");
var IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ "./node_modules/core-js/internals/engine-is-ie-or-edge.js");
var V8 = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ "./node_modules/core-js/internals/engine-webkit-version.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var Uint16Array = global.Uint16Array;
var nativeSort = Uint16Array && uncurryThis(Uint16Array.prototype.sort);

// WebKit
var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails(function () {
  nativeSort(new Uint16Array(2), null);
}) && fails(function () {
  nativeSort(new Uint16Array(2), {});
}));

var STABLE_SORT = !!nativeSort && !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 74;
  if (FF) return FF < 67;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 602;

  var array = new Uint16Array(516);
  var expected = Array(516);
  var index, mod;

  for (index = 0; index < 516; index++) {
    mod = index % 4;
    array[index] = 515 - index;
    expected[index] = index - 2 * mod + 3;
  }

  nativeSort(array, function (a, b) {
    return (a / 4 | 0) - (b / 4 | 0);
  });

  for (index = 0; index < 516; index++) {
    if (array[index] !== expected[index]) return true;
  }
});

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (y !== y) return -1;
    // eslint-disable-next-line no-self-compare -- NaN check
    if (x !== x) return 1;
    if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
    return x > y;
  };
};

// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
exportTypedArrayMethod('sort', function sort(comparefn) {
  if (comparefn !== undefined) aCallable(comparefn);
  if (STABLE_SORT) return nativeSort(this, comparefn);

  return internalSort(aTypedArray(this), getSortCompare(comparefn));
}, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.subarray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.subarray.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var typedArraySpeciesConstructor = __webpack_require__(/*! ../internals/typed-array-species-constructor */ "./node_modules/core-js/internals/typed-array-species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
exportTypedArrayMethod('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  var C = typedArraySpeciesConstructor(O);
  return new C(
    O.buffer,
    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
  );
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-locale-string.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;

// iOS Safari 6.x fails here
var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});

var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
});

// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return apply(
    $toLocaleString,
    TO_LOCALE_STRING_BUG ? arraySlice(aTypedArray(this)) : aTypedArray(this),
    arraySlice(arguments)
  );
}, FORCED);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-string.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var exportTypedArrayMethod = (__webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").exportTypedArrayMethod);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var join = uncurryThis([].join);

if (fails(function () { arrayToString.call({}); })) {
  arrayToString = function toString() {
    return join(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);


/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint8-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-array.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js");

// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.url.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.to-json.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return call(URL.prototype.toString, this);
  }
});


/***/ }),

/***/ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=src_api_http_js.1388f23c.js.map