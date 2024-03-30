import * as $evV72$fs from "fs";
import $evV72$fspromises from "fs/promises";
import $evV72$os, * as $evV72$os1 from "os";
import $evV72$path, * as $evV72$path1 from "path";
import {spawn as $evV72$spawn, spawnSync as $evV72$spawnSync} from "child_process";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire86b4"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire86b4"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("dE8Bn", function(module, exports) {
module.exports = $9ef5aef4681a6fb1$var$isexe;
$9ef5aef4681a6fb1$var$isexe.sync = $9ef5aef4681a6fb1$var$sync;

function $9ef5aef4681a6fb1$var$checkPathExt(path, options) {
    var pathext = options.pathExt !== undefined ? options.pathExt : process.env.PATHEXT;
    if (!pathext) return true;
    pathext = pathext.split(";");
    if (pathext.indexOf("") !== -1) return true;
    for(var i = 0; i < pathext.length; i++){
        var p = pathext[i].toLowerCase();
        if (p && path.substr(-p.length).toLowerCase() === p) return true;
    }
    return false;
}
function $9ef5aef4681a6fb1$var$checkStat(stat, path, options) {
    if (!stat.isSymbolicLink() && !stat.isFile()) return false;
    return $9ef5aef4681a6fb1$var$checkPathExt(path, options);
}
function $9ef5aef4681a6fb1$var$isexe(path, options, cb) {
    $evV72$stat(path, function(er, stat) {
        cb(er, er ? false : $9ef5aef4681a6fb1$var$checkStat(stat, path, options));
    });
}
function $9ef5aef4681a6fb1$var$sync(path, options) {
    return $9ef5aef4681a6fb1$var$checkStat($evV72$statSync(path), path, options);
}

});

parcelRegister("5dXTc", function(module, exports) {
module.exports = $3cdc9f651a760b03$var$isexe;
$3cdc9f651a760b03$var$isexe.sync = $3cdc9f651a760b03$var$sync;

function $3cdc9f651a760b03$var$isexe(path, options, cb) {
    $evV72$stat(path, function(er, stat) {
        cb(er, er ? false : $3cdc9f651a760b03$var$checkStat(stat, options));
    });
}
function $3cdc9f651a760b03$var$sync(path, options) {
    return $3cdc9f651a760b03$var$checkStat($evV72$statSync(path), options);
}
function $3cdc9f651a760b03$var$checkStat(stat, options) {
    return stat.isFile() && $3cdc9f651a760b03$var$checkMode(stat, options);
}
function $3cdc9f651a760b03$var$checkMode(stat, options) {
    var mod = stat.mode;
    var uid = stat.uid;
    var gid = stat.gid;
    var myUid = options.uid !== undefined ? options.uid : process.getuid && process.getuid();
    var myGid = options.gid !== undefined ? options.gid : process.getgid && process.getgid();
    var u = parseInt("100", 8);
    var g = parseInt("010", 8);
    var o = parseInt("001", 8);
    var ug = u | g;
    var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
    return ret;
}

});





function $ec42a3295e12ea98$var$toArr(any) {
    return any == null ? [] : Array.isArray(any) ? any : [
        any
    ];
}
function $ec42a3295e12ea98$var$toVal(out, key, val, opts) {
    var x, old = out[key], nxt = !!~opts.string.indexOf(key) ? val == null || val === true ? "" : String(val) : typeof val === "boolean" ? val : !!~opts.boolean.indexOf(key) ? val === "false" ? false : val === "true" || (out._.push((x = +val, x * 0 === 0) ? x : val), !!val) : (x = +val, x * 0 === 0) ? x : val;
    out[key] = old == null ? nxt : Array.isArray(old) ? old.concat(nxt) : [
        old,
        nxt
    ];
}
function $ec42a3295e12ea98$export$2e2bcd8739ae039(args, opts) {
    args = args || [];
    opts = opts || {};
    var k, arr, arg, name, val, out = {
        _: []
    };
    var i = 0, j = 0, idx = 0, len = args.length;
    const alibi = opts.alias !== void 0;
    const strict = opts.unknown !== void 0;
    const defaults = opts.default !== void 0;
    opts.alias = opts.alias || {};
    opts.string = $ec42a3295e12ea98$var$toArr(opts.string);
    opts.boolean = $ec42a3295e12ea98$var$toArr(opts.boolean);
    if (alibi) for(k in opts.alias){
        arr = opts.alias[k] = $ec42a3295e12ea98$var$toArr(opts.alias[k]);
        for(i = 0; i < arr.length; i++)(opts.alias[arr[i]] = arr.concat(k)).splice(i, 1);
    }
    for(i = opts.boolean.length; i-- > 0;){
        arr = opts.alias[opts.boolean[i]] || [];
        for(j = arr.length; j-- > 0;)opts.boolean.push(arr[j]);
    }
    for(i = opts.string.length; i-- > 0;){
        arr = opts.alias[opts.string[i]] || [];
        for(j = arr.length; j-- > 0;)opts.string.push(arr[j]);
    }
    if (defaults) for(k in opts.default){
        name = typeof opts.default[k];
        arr = opts.alias[k] = opts.alias[k] || [];
        if (opts[name] !== void 0) {
            opts[name].push(k);
            for(i = 0; i < arr.length; i++)opts[name].push(arr[i]);
        }
    }
    const keys = strict ? Object.keys(opts.alias) : [];
    for(i = 0; i < len; i++){
        arg = args[i];
        if (arg === "--") {
            out._ = out._.concat(args.slice(++i));
            break;
        }
        for(j = 0; j < arg.length; j++){
            if (arg.charCodeAt(j) !== 45) break; // "-"
        }
        if (j === 0) out._.push(arg);
        else if (arg.substring(j, j + 3) === "no-") {
            name = arg.substring(j + 3);
            if (strict && !~keys.indexOf(name)) return opts.unknown(arg);
            out[name] = false;
        } else {
            for(idx = j + 1; idx < arg.length; idx++){
                if (arg.charCodeAt(idx) === 61) break; // "="
            }
            name = arg.substring(j, idx);
            val = arg.substring(++idx) || i + 1 === len || ("" + args[i + 1]).charCodeAt(0) === 45 || args[++i];
            arr = j === 2 ? [
                name
            ] : name;
            for(idx = 0; idx < arr.length; idx++){
                name = arr[idx];
                if (strict && !~keys.indexOf(name)) return opts.unknown("-".repeat(j) + name);
                $ec42a3295e12ea98$var$toVal(out, name, idx + 1 < arr.length || val, opts);
            }
        }
    }
    if (defaults) {
        for(k in opts.default)if (out[k] === void 0) out[k] = opts.default[k];
    }
    if (alibi) for(k in out){
        arr = opts.alias[k] || [];
        while(arr.length > 0)out[arr.shift()] = out[k];
    }
    return out;
}


var $bbb9dac42384d004$exports = {};
"use strict";
var $bbb9dac42384d004$var$__createBinding = $bbb9dac42384d004$exports && $bbb9dac42384d004$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $bbb9dac42384d004$var$__setModuleDefault = $bbb9dac42384d004$exports && $bbb9dac42384d004$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $bbb9dac42384d004$var$__importStar = $bbb9dac42384d004$exports && $bbb9dac42384d004$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $bbb9dac42384d004$var$__createBinding(result, mod, k);
    }
    $bbb9dac42384d004$var$__setModuleDefault(result, mod);
    return result;
};
var $bbb9dac42384d004$var$__awaiter = $bbb9dac42384d004$exports && $bbb9dac42384d004$exports.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty($bbb9dac42384d004$exports, "__esModule", {
    value: true
});
$bbb9dac42384d004$exports.getState = $bbb9dac42384d004$exports.saveState = $bbb9dac42384d004$exports.group = $bbb9dac42384d004$exports.endGroup = $bbb9dac42384d004$exports.startGroup = $bbb9dac42384d004$exports.info = $bbb9dac42384d004$exports.notice = $bbb9dac42384d004$exports.warning = $bbb9dac42384d004$exports.error = $bbb9dac42384d004$exports.debug = $bbb9dac42384d004$exports.isDebug = $bbb9dac42384d004$exports.setFailed = $bbb9dac42384d004$exports.setCommandEcho = $bbb9dac42384d004$exports.setOutput = $bbb9dac42384d004$exports.getBooleanInput = $bbb9dac42384d004$exports.getMultilineInput = $bbb9dac42384d004$exports.getInput = $bbb9dac42384d004$exports.addPath = $bbb9dac42384d004$exports.setSecret = $bbb9dac42384d004$exports.exportVariable = $bbb9dac42384d004$exports.ExitCode = void 0;
var $6aa988ea1669fe85$exports = {};
"use strict";
var $6aa988ea1669fe85$var$__createBinding = $6aa988ea1669fe85$exports && $6aa988ea1669fe85$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $6aa988ea1669fe85$var$__setModuleDefault = $6aa988ea1669fe85$exports && $6aa988ea1669fe85$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $6aa988ea1669fe85$var$__importStar = $6aa988ea1669fe85$exports && $6aa988ea1669fe85$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $6aa988ea1669fe85$var$__createBinding(result, mod, k);
    }
    $6aa988ea1669fe85$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty($6aa988ea1669fe85$exports, "__esModule", {
    value: true
});
$6aa988ea1669fe85$exports.issue = $6aa988ea1669fe85$exports.issueCommand = void 0;

const $6aa988ea1669fe85$var$os = $6aa988ea1669fe85$var$__importStar($evV72$os1);
var $1f87556d0f647bcd$exports = {};
"use strict";
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty($1f87556d0f647bcd$exports, "__esModule", {
    value: true
});
$1f87556d0f647bcd$exports.toCommandProperties = $1f87556d0f647bcd$exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */ function $1f87556d0f647bcd$var$toCommandValue(input) {
    if (input === null || input === undefined) return "";
    else if (typeof input === "string" || input instanceof String) return input;
    return JSON.stringify(input);
}
$1f87556d0f647bcd$exports.toCommandValue = $1f87556d0f647bcd$var$toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */ function $1f87556d0f647bcd$var$toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) return {};
    return {
        title: annotationProperties.title,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
$1f87556d0f647bcd$exports.toCommandProperties = $1f87556d0f647bcd$var$toCommandProperties;


/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */ function $6aa988ea1669fe85$var$issueCommand(command, properties, message) {
    const cmd = new $6aa988ea1669fe85$var$Command(command, properties, message);
    process.stdout.write(cmd.toString() + $6aa988ea1669fe85$var$os.EOL);
}
$6aa988ea1669fe85$exports.issueCommand = $6aa988ea1669fe85$var$issueCommand;
function $6aa988ea1669fe85$var$issue(name, message = "") {
    $6aa988ea1669fe85$var$issueCommand(name, {}, message);
}
$6aa988ea1669fe85$exports.issue = $6aa988ea1669fe85$var$issue;
const $6aa988ea1669fe85$var$CMD_STRING = "::";
class $6aa988ea1669fe85$var$Command {
    constructor(command, properties, message){
        if (!command) command = "missing.command";
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = $6aa988ea1669fe85$var$CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += " ";
            let first = true;
            for(const key in this.properties)if (this.properties.hasOwnProperty(key)) {
                const val = this.properties[key];
                if (val) {
                    if (first) first = false;
                    else cmdStr += ",";
                    cmdStr += `${key}=${$6aa988ea1669fe85$var$escapeProperty(val)}`;
                }
            }
        }
        cmdStr += `${$6aa988ea1669fe85$var$CMD_STRING}${$6aa988ea1669fe85$var$escapeData(this.message)}`;
        return cmdStr;
    }
}
function $6aa988ea1669fe85$var$escapeData(s) {
    return $1f87556d0f647bcd$exports.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function $6aa988ea1669fe85$var$escapeProperty(s) {
    return $1f87556d0f647bcd$exports.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}


var $71d1c579b85cee7b$exports = {};
"use strict";
// For internal use, subject to change.
var $71d1c579b85cee7b$var$__createBinding = $71d1c579b85cee7b$exports && $71d1c579b85cee7b$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var $71d1c579b85cee7b$var$__setModuleDefault = $71d1c579b85cee7b$exports && $71d1c579b85cee7b$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $71d1c579b85cee7b$var$__importStar = $71d1c579b85cee7b$exports && $71d1c579b85cee7b$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $71d1c579b85cee7b$var$__createBinding(result, mod, k);
    }
    $71d1c579b85cee7b$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty($71d1c579b85cee7b$exports, "__esModule", {
    value: true
});
$71d1c579b85cee7b$exports.issueCommand = void 0;

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */ const $71d1c579b85cee7b$var$fs = $71d1c579b85cee7b$var$__importStar($evV72$fs);

const $71d1c579b85cee7b$var$os = $71d1c579b85cee7b$var$__importStar($evV72$os1);

function $71d1c579b85cee7b$var$issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) throw new Error(`Unable to find environment variable for file command ${command}`);
    if (!$71d1c579b85cee7b$var$fs.existsSync(filePath)) throw new Error(`Missing file at path: ${filePath}`);
    $71d1c579b85cee7b$var$fs.appendFileSync(filePath, `${$1f87556d0f647bcd$exports.toCommandValue(message)}${$71d1c579b85cee7b$var$os.EOL}`, {
        encoding: "utf8"
    });
}
$71d1c579b85cee7b$exports.issueCommand = $71d1c579b85cee7b$var$issueCommand;




const $bbb9dac42384d004$var$os = $bbb9dac42384d004$var$__importStar($evV72$os1);

const $bbb9dac42384d004$var$path = $bbb9dac42384d004$var$__importStar($evV72$path1);
/**
 * The code to exit an action
 */ var $bbb9dac42384d004$var$ExitCode;
(function(ExitCode) {
    /**
     * A code indicating that the action was successful
     */ ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */ ExitCode[ExitCode["Failure"] = 1] = "Failure";
})($bbb9dac42384d004$var$ExitCode = $bbb9dac42384d004$exports.ExitCode || ($bbb9dac42384d004$exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $bbb9dac42384d004$var$exportVariable(name, val) {
    const convertedVal = $1f87556d0f647bcd$exports.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env["GITHUB_ENV"] || "";
    if (filePath) {
        const delimiter = "_GitHubActionsFileCommandDelimeter_";
        const commandValue = `${name}<<${delimiter}${$bbb9dac42384d004$var$os.EOL}${convertedVal}${$bbb9dac42384d004$var$os.EOL}${delimiter}`;
        $71d1c579b85cee7b$exports.issueCommand("ENV", commandValue);
    } else $6aa988ea1669fe85$exports.issueCommand("set-env", {
        name: name
    }, convertedVal);
}
$bbb9dac42384d004$exports.exportVariable = $bbb9dac42384d004$var$exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */ function $bbb9dac42384d004$var$setSecret(secret) {
    $6aa988ea1669fe85$exports.issueCommand("add-mask", {}, secret);
}
$bbb9dac42384d004$exports.setSecret = $bbb9dac42384d004$var$setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */ function $bbb9dac42384d004$var$addPath(inputPath) {
    const filePath = process.env["GITHUB_PATH"] || "";
    if (filePath) $71d1c579b85cee7b$exports.issueCommand("PATH", inputPath);
    else $6aa988ea1669fe85$exports.issueCommand("add-path", {}, inputPath);
    process.env["PATH"] = `${inputPath}${$bbb9dac42384d004$var$path.delimiter}${process.env["PATH"]}`;
}
$bbb9dac42384d004$exports.addPath = $bbb9dac42384d004$var$addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */ function $bbb9dac42384d004$var$getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
    if (options && options.required && !val) throw new Error(`Input required and not supplied: ${name}`);
    if (options && options.trimWhitespace === false) return val;
    return val.trim();
}
$bbb9dac42384d004$exports.getInput = $bbb9dac42384d004$var$getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */ function $bbb9dac42384d004$var$getMultilineInput(name, options) {
    const inputs = $bbb9dac42384d004$var$getInput(name, options).split("\n").filter((x)=>x !== "");
    return inputs;
}
$bbb9dac42384d004$exports.getMultilineInput = $bbb9dac42384d004$var$getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */ function $bbb9dac42384d004$var$getBooleanInput(name, options) {
    const trueValue = [
        "true",
        "True",
        "TRUE"
    ];
    const falseValue = [
        "false",
        "False",
        "FALSE"
    ];
    const val = $bbb9dac42384d004$var$getInput(name, options);
    if (trueValue.includes(val)) return true;
    if (falseValue.includes(val)) return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` + `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
$bbb9dac42384d004$exports.getBooleanInput = $bbb9dac42384d004$var$getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $bbb9dac42384d004$var$setOutput(name, value) {
    process.stdout.write($bbb9dac42384d004$var$os.EOL);
    $6aa988ea1669fe85$exports.issueCommand("set-output", {
        name: name
    }, value);
}
$bbb9dac42384d004$exports.setOutput = $bbb9dac42384d004$var$setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */ function $bbb9dac42384d004$var$setCommandEcho(enabled) {
    $6aa988ea1669fe85$exports.issue("echo", enabled ? "on" : "off");
}
$bbb9dac42384d004$exports.setCommandEcho = $bbb9dac42384d004$var$setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */ function $bbb9dac42384d004$var$setFailed(message) {
    process.exitCode = $bbb9dac42384d004$var$ExitCode.Failure;
    $bbb9dac42384d004$var$error(message);
}
$bbb9dac42384d004$exports.setFailed = $bbb9dac42384d004$var$setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */ function $bbb9dac42384d004$var$isDebug() {
    return process.env["RUNNER_DEBUG"] === "1";
}
$bbb9dac42384d004$exports.isDebug = $bbb9dac42384d004$var$isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */ function $bbb9dac42384d004$var$debug(message) {
    $6aa988ea1669fe85$exports.issueCommand("debug", {}, message);
}
$bbb9dac42384d004$exports.debug = $bbb9dac42384d004$var$debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $bbb9dac42384d004$var$error(message, properties = {}) {
    $6aa988ea1669fe85$exports.issueCommand("error", $1f87556d0f647bcd$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$bbb9dac42384d004$exports.error = $bbb9dac42384d004$var$error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $bbb9dac42384d004$var$warning(message, properties = {}) {
    $6aa988ea1669fe85$exports.issueCommand("warning", $1f87556d0f647bcd$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$bbb9dac42384d004$exports.warning = $bbb9dac42384d004$var$warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $bbb9dac42384d004$var$notice(message, properties = {}) {
    $6aa988ea1669fe85$exports.issueCommand("notice", $1f87556d0f647bcd$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$bbb9dac42384d004$exports.notice = $bbb9dac42384d004$var$notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */ function $bbb9dac42384d004$var$info(message) {
    process.stdout.write(message + $bbb9dac42384d004$var$os.EOL);
}
$bbb9dac42384d004$exports.info = $bbb9dac42384d004$var$info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */ function $bbb9dac42384d004$var$startGroup(name) {
    $6aa988ea1669fe85$exports.issue("group", name);
}
$bbb9dac42384d004$exports.startGroup = $bbb9dac42384d004$var$startGroup;
/**
 * End an output group.
 */ function $bbb9dac42384d004$var$endGroup() {
    $6aa988ea1669fe85$exports.issue("endgroup");
}
$bbb9dac42384d004$exports.endGroup = $bbb9dac42384d004$var$endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */ function $bbb9dac42384d004$var$group(name, fn) {
    return $bbb9dac42384d004$var$__awaiter(this, void 0, void 0, function*() {
        $bbb9dac42384d004$var$startGroup(name);
        let result;
        try {
            result = yield fn();
        } finally{
            $bbb9dac42384d004$var$endGroup();
        }
        return result;
    });
}
$bbb9dac42384d004$exports.group = $bbb9dac42384d004$var$group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $bbb9dac42384d004$var$saveState(name, value) {
    $6aa988ea1669fe85$exports.issueCommand("save-state", {
        name: name
    }, value);
}
$bbb9dac42384d004$exports.saveState = $bbb9dac42384d004$var$saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */ function $bbb9dac42384d004$var$getState(name) {
    return process.env[`STATE_${name}`] || "";
}
$bbb9dac42384d004$exports.getState = $bbb9dac42384d004$var$getState;


function $76d06fcdc9bff1f5$export$77714ac6976d0316(args) {
    const opts = (0, $ec42a3295e12ea98$export$2e2bcd8739ae039)(args, {
        default: {
            "cache-map": (0, $bbb9dac42384d004$exports.getInput)("cache-map"),
            "scratch-dir": (0, $bbb9dac42384d004$exports.getInput)("scratch-dir"),
            "skip-extraction": (0, $bbb9dac42384d004$exports.getInput)("skip-extraction") === "true",
            "extract": process.env[`STATE_POST`] !== undefined
        },
        string: [
            "cache-map",
            "scratch-dir",
            "cache-source",
            "cache-target"
        ],
        boolean: [
            "skip-extraction",
            "help",
            "extract"
        ],
        alias: {
            "help": [
                "h"
            ]
        }
    });
    if (opts["cache-source"] && opts["cache-target"]) {
        (0, $bbb9dac42384d004$exports.warning)("The `cache-source` and `cache-target` options are deprecated. Use `cache-map` instead.");
        opts["cache-map"] = JSON.stringify({
            [opts["cache-source"]]: opts["cache-target"]
        });
    }
    return opts;
}
function $76d06fcdc9bff1f5$export$34512e3b2db52a4e() {
    console.log(`build-cache-dance [options]
Save 'RUN --mount=type=cache' caches on GitHub Actions or other CI platforms

Options:
  --extract      Extract the cache from the docker container (extract step). Otherwise, inject the cache (main step)
  --cache-map    The map of actions source to container destination paths for the cache paths
  --scratch-dir  Where the action is stores some temporary files for its processing. Default: 'scratch'
  --skip-extraction  Skip the extraction of the cache from the docker container
  --help         Show this help
`);
}
function $76d06fcdc9bff1f5$export$8550a4d7282a21d0(opts) {
    try {
        return JSON.parse(opts["cache-map"]);
    } catch (e) {
        throw new Error(`Failed to parse cache map. Expected JSON, got:\n${opts["cache-map"]}\n${e}`);
    }
}


var $03c48d50d9d7039f$exports = {};
var $92de28abfb9027ac$exports = {};
"use strict";

var $9f07a96c8577f666$exports = {};
"use strict";

var $37f30101baa1381d$exports = {};
"use strict";

var $10bb1950eec72619$exports = {};
const $10bb1950eec72619$var$isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";

const $10bb1950eec72619$var$COLON = $10bb1950eec72619$var$isWindows ? ";" : ":";
var $0b1af7ee1bc1c627$exports = {};

var $0b1af7ee1bc1c627$var$core;


if (process.platform === "win32" || $parcel$global.TESTING_WINDOWS) $0b1af7ee1bc1c627$var$core = (parcelRequire("dE8Bn"));
else $0b1af7ee1bc1c627$var$core = (parcelRequire("5dXTc"));
$0b1af7ee1bc1c627$exports = $0b1af7ee1bc1c627$var$isexe;
$0b1af7ee1bc1c627$var$isexe.sync = $0b1af7ee1bc1c627$var$sync;
function $0b1af7ee1bc1c627$var$isexe(path, options, cb) {
    if (typeof options === "function") {
        cb = options;
        options = {};
    }
    if (!cb) {
        if (typeof Promise !== "function") throw new TypeError("callback not provided");
        return new Promise(function(resolve, reject) {
            $0b1af7ee1bc1c627$var$isexe(path, options || {}, function(er, is) {
                if (er) reject(er);
                else resolve(is);
            });
        });
    }
    $0b1af7ee1bc1c627$var$core(path, options || {}, function(er, is) {
        // ignore EACCES because that just means we aren't allowed to run it
        if (er) {
            if (er.code === "EACCES" || options && options.ignoreErrors) {
                er = null;
                is = false;
            }
        }
        cb(er, is);
    });
}
function $0b1af7ee1bc1c627$var$sync(path, options) {
    // my kingdom for a filtered catch
    try {
        return $0b1af7ee1bc1c627$var$core.sync(path, options || {});
    } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") return false;
        else throw er;
    }
}


const $10bb1950eec72619$var$getNotFoundError = (cmd)=>Object.assign(new Error(`not found: ${cmd}`), {
        code: "ENOENT"
    });
const $10bb1950eec72619$var$getPathInfo = (cmd, opt)=>{
    const colon = opt.colon || $10bb1950eec72619$var$COLON;
    // If it has a slash, then we don't bother searching the pathenv.
    // just check the file itself, and that's it.
    const pathEnv = cmd.match(/\//) || $10bb1950eec72619$var$isWindows && cmd.match(/\\/) ? [
        ""
    ] : [
        // windows always checks the cwd first
        ...$10bb1950eec72619$var$isWindows ? [
            process.cwd()
        ] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */ "").split(colon)
    ];
    const pathExtExe = $10bb1950eec72619$var$isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
    const pathExt = $10bb1950eec72619$var$isWindows ? pathExtExe.split(colon) : [
        ""
    ];
    if ($10bb1950eec72619$var$isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "") pathExt.unshift("");
    }
    return {
        pathEnv: pathEnv,
        pathExt: pathExt,
        pathExtExe: pathExtExe
    };
};
const $10bb1950eec72619$var$which = (cmd, opt, cb)=>{
    if (typeof opt === "function") {
        cb = opt;
        opt = {};
    }
    if (!opt) opt = {};
    const { pathEnv: pathEnv, pathExt: pathExt, pathExtExe: pathExtExe } = $10bb1950eec72619$var$getPathInfo(cmd, opt);
    const found = [];
    const step = (i)=>new Promise((resolve, reject)=>{
            if (i === pathEnv.length) return opt.all && found.length ? resolve(found) : reject($10bb1950eec72619$var$getNotFoundError(cmd));
            const ppRaw = pathEnv[i];
            const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
            const pCmd = $evV72$join(pathPart, cmd);
            const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
            resolve(subStep(p, i, 0));
        });
    const subStep = (p, i, ii)=>new Promise((resolve, reject)=>{
            if (ii === pathExt.length) return resolve(step(i + 1));
            const ext = pathExt[ii];
            $0b1af7ee1bc1c627$exports(p + ext, {
                pathExt: pathExtExe
            }, (er, is)=>{
                if (!er && is) {
                    if (opt.all) found.push(p + ext);
                    else return resolve(p + ext);
                }
                return resolve(subStep(p, i, ii + 1));
            });
        });
    return cb ? step(0).then((res)=>cb(null, res), cb) : step(0);
};
const $10bb1950eec72619$var$whichSync = (cmd, opt)=>{
    opt = opt || {};
    const { pathEnv: pathEnv, pathExt: pathExt, pathExtExe: pathExtExe } = $10bb1950eec72619$var$getPathInfo(cmd, opt);
    const found = [];
    for(let i = 0; i < pathEnv.length; i++){
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = $evV72$join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for(let j = 0; j < pathExt.length; j++){
            const cur = p + pathExt[j];
            try {
                const is = $0b1af7ee1bc1c627$exports.sync(cur, {
                    pathExt: pathExtExe
                });
                if (is) {
                    if (opt.all) found.push(cur);
                    else return cur;
                }
            } catch (ex) {}
        }
    }
    if (opt.all && found.length) return found;
    if (opt.nothrow) return null;
    throw $10bb1950eec72619$var$getNotFoundError(cmd);
};
$10bb1950eec72619$exports = $10bb1950eec72619$var$which;
$10bb1950eec72619$var$which.sync = $10bb1950eec72619$var$whichSync;


var $3487f7b8c16699fc$exports = {};
"use strict";
const $3487f7b8c16699fc$var$pathKey = (options = {})=>{
    const environment = options.env || process.env;
    const platform = options.platform || process.platform;
    if (platform !== "win32") return "PATH";
    return Object.keys(environment).reverse().find((key)=>key.toUpperCase() === "PATH") || "Path";
};
$3487f7b8c16699fc$exports = $3487f7b8c16699fc$var$pathKey;
// TODO: Remove this for the next major release
$3487f7b8c16699fc$exports.default = $3487f7b8c16699fc$var$pathKey;


function $37f30101baa1381d$var$resolveCommandAttempt(parsed, withoutPathExt) {
    const env = parsed.options.env || process.env;
    const cwd = process.cwd();
    const hasCustomCwd = parsed.options.cwd != null;
    // Worker threads do not have process.chdir()
    const shouldSwitchCwd = hasCustomCwd && process.chdir !== undefined && !process.chdir.disabled;
    // If a custom `cwd` was specified, we need to change the process cwd
    // because `which` will do stat calls but does not support a custom cwd
    if (shouldSwitchCwd) try {
        process.chdir(parsed.options.cwd);
    } catch (err) {
    /* Empty */ }
    let resolved;
    try {
        resolved = $10bb1950eec72619$exports.sync(parsed.command, {
            path: env[$3487f7b8c16699fc$exports({
                env: env
            })],
            pathExt: withoutPathExt ? $evV72$delimiter : undefined
        });
    } catch (e) {
    /* Empty */ } finally{
        if (shouldSwitchCwd) process.chdir(cwd);
    }
    // If we successfully resolved, ensure that an absolute path is returned
    // Note that when a custom `cwd` was used, we need to resolve to an absolute path based on it
    if (resolved) resolved = $evV72$resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
    return resolved;
}
function $37f30101baa1381d$var$resolveCommand(parsed) {
    return $37f30101baa1381d$var$resolveCommandAttempt(parsed) || $37f30101baa1381d$var$resolveCommandAttempt(parsed, true);
}
$37f30101baa1381d$exports = $37f30101baa1381d$var$resolveCommand;


var $cbf6c9fb7b5a3003$export$ae50443ffc990749;
var $cbf6c9fb7b5a3003$export$6ea29ee575e3f5ff;
"use strict";
// See http://www.robvanderwoude.com/escapechars.php
const $cbf6c9fb7b5a3003$var$metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
function $cbf6c9fb7b5a3003$var$escapeCommand(arg) {
    // Escape meta chars
    arg = arg.replace($cbf6c9fb7b5a3003$var$metaCharsRegExp, "^$1");
    return arg;
}
function $cbf6c9fb7b5a3003$var$escapeArgument(arg, doubleEscapeMetaChars) {
    // Convert to string
    arg = `${arg}`;
    // Algorithm below is based on https://qntm.org/cmd
    // Sequence of backslashes followed by a double quote:
    // double up all the backslashes and escape the double quote
    arg = arg.replace(/(\\*)"/g, '$1$1\\"');
    // Sequence of backslashes followed by the end of the string
    // (which will become a double quote later):
    // double up all the backslashes
    arg = arg.replace(/(\\*)$/, "$1$1");
    // All other backslashes occur literally
    // Quote the whole thing:
    arg = `"${arg}"`;
    // Escape meta chars
    arg = arg.replace($cbf6c9fb7b5a3003$var$metaCharsRegExp, "^$1");
    // Double escape meta chars if necessary
    if (doubleEscapeMetaChars) arg = arg.replace($cbf6c9fb7b5a3003$var$metaCharsRegExp, "^$1");
    return arg;
}
$cbf6c9fb7b5a3003$export$ae50443ffc990749 = $cbf6c9fb7b5a3003$var$escapeCommand;
$cbf6c9fb7b5a3003$export$6ea29ee575e3f5ff = $cbf6c9fb7b5a3003$var$escapeArgument;


var $4bfe3bff3b3eb488$exports = {};
"use strict";

var $550cee7733391e8f$exports = {};
"use strict";
var $41ec2024f8465164$exports = {};
"use strict";
$41ec2024f8465164$exports = /^#!(.*)/;


$550cee7733391e8f$exports = (string = "")=>{
    const match = string.match($41ec2024f8465164$exports);
    if (!match) return null;
    const [path, argument] = match[0].replace(/#! ?/, "").split(" ");
    const binary = path.split("/").pop();
    if (binary === "env") return argument;
    return argument ? `${binary} ${argument}` : binary;
};


function $4bfe3bff3b3eb488$var$readShebang(command) {
    // Read the first 150 bytes from the file
    const size = 150;
    const buffer = Buffer.alloc(size);
    let fd;
    try {
        fd = $evV72$openSync(command, "r");
        $evV72$readSync(fd, buffer, 0, size, 0);
        $evV72$closeSync(fd);
    } catch (e) {}
    // Attempt to extract shebang (null is returned if not a shebang)
    return $550cee7733391e8f$exports(buffer.toString());
}
$4bfe3bff3b3eb488$exports = $4bfe3bff3b3eb488$var$readShebang;


const $9f07a96c8577f666$var$isWin = process.platform === "win32";
const $9f07a96c8577f666$var$isExecutableRegExp = /\.(?:com|exe)$/i;
const $9f07a96c8577f666$var$isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
function $9f07a96c8577f666$var$detectShebang(parsed) {
    parsed.file = $37f30101baa1381d$exports(parsed);
    const shebang = parsed.file && $4bfe3bff3b3eb488$exports(parsed.file);
    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return $37f30101baa1381d$exports(parsed);
    }
    return parsed.file;
}
function $9f07a96c8577f666$var$parseNonShell(parsed) {
    if (!$9f07a96c8577f666$var$isWin) return parsed;
    // Detect & add support for shebangs
    const commandFile = $9f07a96c8577f666$var$detectShebang(parsed);
    // We don't need a shell if the command filename is an executable
    const needsShell = !$9f07a96c8577f666$var$isExecutableRegExp.test(commandFile);
    // If a shell is required, use cmd.exe and take care of escaping everything correctly
    // Note that `forceShell` is an hidden option used only in tests
    if (parsed.options.forceShell || needsShell) {
        // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`
        // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument
        // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,
        // we need to double escape them
        const needsDoubleEscapeMetaChars = $9f07a96c8577f666$var$isCmdShimRegExp.test(commandFile);
        // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\bar)
        // This is necessary otherwise it will always fail with ENOENT in those cases
        parsed.command = $evV72$normalize(parsed.command);
        // Escape command & arguments
        parsed.command = $cbf6c9fb7b5a3003$export$ae50443ffc990749(parsed.command);
        parsed.args = parsed.args.map((arg)=>$cbf6c9fb7b5a3003$export$6ea29ee575e3f5ff(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [
            parsed.command
        ].concat(parsed.args).join(" ");
        parsed.args = [
            "/d",
            "/s",
            "/c",
            `"${shellCommand}"`
        ];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
    }
    return parsed;
}
function $9f07a96c8577f666$var$parse(command, args, options) {
    // Normalize arguments, similar to nodejs
    if (args && !Array.isArray(args)) {
        options = args;
        args = null;
    }
    args = args ? args.slice(0) : []; // Clone array to avoid changing the original
    options = Object.assign({}, options); // Clone object to avoid changing the original
    // Build our parsed object
    const parsed = {
        command: command,
        args: args,
        options: options,
        file: undefined,
        original: {
            command: command,
            args: args
        }
    };
    // Delegate further parsing to shell or non-shell
    return options.shell ? parsed : $9f07a96c8577f666$var$parseNonShell(parsed);
}
$9f07a96c8577f666$exports = $9f07a96c8577f666$var$parse;


var $1ef36613317ba37d$exports = {};
"use strict";
const $1ef36613317ba37d$var$isWin = process.platform === "win32";
function $1ef36613317ba37d$var$notFoundError(original, syscall) {
    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
    });
}
function $1ef36613317ba37d$var$hookChildProcess(cp, parsed) {
    if (!$1ef36613317ba37d$var$isWin) return;
    const originalEmit = cp.emit;
    cp.emit = function(name, arg1) {
        // If emitting "exit" event and exit code is 1, we need to check if
        // the command exists and emit an "error" instead
        // See https://github.com/IndigoUnited/node-cross-spawn/issues/16
        if (name === "exit") {
            const err = $1ef36613317ba37d$var$verifyENOENT(arg1, parsed, "spawn");
            if (err) return originalEmit.call(cp, "error", err);
        }
        return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params
    };
}
function $1ef36613317ba37d$var$verifyENOENT(status, parsed) {
    if ($1ef36613317ba37d$var$isWin && status === 1 && !parsed.file) return $1ef36613317ba37d$var$notFoundError(parsed.original, "spawn");
    return null;
}
function $1ef36613317ba37d$var$verifyENOENTSync(status, parsed) {
    if ($1ef36613317ba37d$var$isWin && status === 1 && !parsed.file) return $1ef36613317ba37d$var$notFoundError(parsed.original, "spawnSync");
    return null;
}
$1ef36613317ba37d$exports = {
    hookChildProcess: $1ef36613317ba37d$var$hookChildProcess,
    verifyENOENT: $1ef36613317ba37d$var$verifyENOENT,
    verifyENOENTSync: $1ef36613317ba37d$var$verifyENOENTSync,
    notFoundError: $1ef36613317ba37d$var$notFoundError
};


function $92de28abfb9027ac$var$spawn(command, args, options) {
    // Parse the arguments
    const parsed = $9f07a96c8577f666$exports(command, args, options);
    // Spawn the child process
    const spawned = $evV72$spawn(parsed.command, parsed.args, parsed.options);
    // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    $1ef36613317ba37d$exports.hookChildProcess(spawned, parsed);
    return spawned;
}
function $92de28abfb9027ac$var$spawnSync(command, args, options) {
    // Parse the arguments
    const parsed = $9f07a96c8577f666$exports(command, args, options);
    // Spawn the child process
    const result = $evV72$spawnSync(parsed.command, parsed.args, parsed.options);
    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    result.error = result.error || $1ef36613317ba37d$exports.verifyENOENTSync(result.status, parsed);
    return result;
}
$92de28abfb9027ac$exports = $92de28abfb9027ac$var$spawn;
$92de28abfb9027ac$exports.spawn = $92de28abfb9027ac$var$spawn;
$92de28abfb9027ac$exports.sync = $92de28abfb9027ac$var$spawnSync;
$92de28abfb9027ac$exports._parse = $9f07a96c8577f666$exports;
$92de28abfb9027ac$exports._enoent = $1ef36613317ba37d$exports;


/** Spawns a child process, as long as you ask nicely.
 * 
 * @param {string} command - The shell command to execute.
 * @param {string[]} [args] - An array of arguments that are given after the command.
 * @param {{ rejectOnError?: boolean, stdin?: string, stderr?: (data: string) => void, stdout?: (data: string) => void }} [options] - Options.
 * @param {any} [spawnOptions] - Options that are passed directly to child_process.spawn. Also supports stdin: string.
 * @returns {Promise<{ stdout: string, stderr: string }>}
 */ const $03c48d50d9d7039f$var$spawnPlease = (command, args, options = {}, spawnOptions = {})=>{
    // defaults
    if (options.rejectOnError === undefined) options.rejectOnError = true;
    let stdout = "";
    let stderr = "";
    const child = $92de28abfb9027ac$exports(command, args, spawnOptions);
    return new Promise((resolve, reject)=>{
        if (options.stdin !== undefined && options.stdin != null) child.stdin.write(options.stdin);
        child.stdin.end();
        child.stdout.on("data", (data)=>{
            stdout += data;
            if (options.stdout) options.stdout(data);
        });
        child.stderr.on("data", (data)=>{
            stderr += data;
            if (options.stderr) options.stderr(data);
        });
        if (options.rejectOnError) child.addListener("error", reject);
        child.on("close", (code)=>{
            if (code !== 0 && options.rejectOnError) reject(stderr);
            else resolve({
                stdout: stdout,
                stderr: stderr
            });
        });
    });
};
$03c48d50d9d7039f$exports = $03c48d50d9d7039f$var$spawnPlease;


async function $4c028fad90f63861$export$889ea624f2cb2c57(command, args) {
    try {
        return await (0, (/*@__PURE__*/$parcel$interopDefault($03c48d50d9d7039f$exports)))(command, args, {}, {
            stdout: "inherit",
            stderr: "inherit"
        });
    } catch (error) {
        console.error(`Error running command: ${command} ${args.join(" ")}`);
        throw error;
    }
}


async function $bd1d73aff0732146$var$injectCache(cacheSource, cacheTarget, scratchDir) {
    // Clean Scratch Directory
    await (0, $evV72$fspromises).rm(scratchDir, {
        recursive: true,
        force: true
    });
    await (0, $evV72$fspromises).mkdir(scratchDir, {
        recursive: true
    });
    // Prepare Cache Source Directory
    await (0, $evV72$fspromises).mkdir(cacheSource, {
        recursive: true
    });
    // Prepare Timestamp for Layer Cache Busting
    const { stdout: date } = await (0, $4c028fad90f63861$export$889ea624f2cb2c57)("date", [
        "--iso=ns"
    ]);
    await (0, $evV72$fspromises).writeFile((0, $evV72$path).join(cacheSource, "buildstamp"), date);
    // Prepare Dancefile to Access Caches
    const dancefileContent = `
FROM busybox:1
COPY buildstamp buildstamp
RUN --mount=type=cache,target=${cacheTarget} \
    --mount=type=bind,source=.,target=/var/dance-cache \
    cp -p -R /var/dance-cache/. ${cacheTarget} || true
`;
    await (0, $evV72$fspromises).writeFile((0, $evV72$path).join(scratchDir, "Dancefile.inject"), dancefileContent);
    console.log(dancefileContent);
    // Inject Data into Docker Cache
    await (0, $4c028fad90f63861$export$889ea624f2cb2c57)("docker", [
        "buildx",
        "build",
        "-f",
        (0, $evV72$path).join(scratchDir, "Dancefile.inject"),
        "--tag",
        "dance:inject",
        cacheSource
    ]);
    // Clean Directories
    await (0, $evV72$fspromises).rm(cacheSource, {
        recursive: true,
        force: true
    });
}
async function $bd1d73aff0732146$export$38c65e9f06d3d433(opts) {
    const cacheMap = (0, $76d06fcdc9bff1f5$export$8550a4d7282a21d0)(opts);
    const scratchDir = opts["scratch-dir"];
    // Inject Caches for each source-target pair
    for (const [cacheSource, cacheTarget] of Object.entries(cacheMap))await $bd1d73aff0732146$var$injectCache(cacheSource, cacheTarget, scratchDir);
}






async function $8d40300f3635b768$var$extractCache(cacheSource, cacheTarget, scratchDir) {
    // Prepare Timestamp for Layer Cache Busting
    const { stdout: date } = await (0, $4c028fad90f63861$export$889ea624f2cb2c57)("date", [
        "--iso=ns"
    ]);
    await (0, $evV72$fspromises).writeFile((0, $evV72$path).join(scratchDir, "buildstamp"), date);
    // Prepare Dancefile to Access Caches
    const dancefileContent = `
FROM busybox:1
COPY buildstamp buildstamp
RUN --mount=type=cache,target=${cacheTarget} \
    mkdir -p /var/dance-cache/ \
    && cp -p -R ${cacheTarget}/. /var/dance-cache/ || true
`;
    await (0, $evV72$fspromises).writeFile((0, $evV72$path).join(scratchDir, "Dancefile.extract"), dancefileContent);
    console.log(dancefileContent);
    // Extract Data into Docker Image
    await (0, $4c028fad90f63861$export$889ea624f2cb2c57)("docker", [
        "buildx",
        "build",
        "-f",
        (0, $evV72$path).join(scratchDir, "Dancefile.extract"),
        "--tag",
        "dance:extract",
        "--load",
        scratchDir
    ]);
    // Create Extraction Image
    try {
        await (0, $4c028fad90f63861$export$889ea624f2cb2c57)("docker", [
            "rm",
            "-f",
            "cache-container"
        ]);
    } catch (error) {
    // Ignore error if container does not exist
    }
    await (0, $4c028fad90f63861$export$889ea624f2cb2c57)("docker", [
        "create",
        "-ti",
        "--name",
        "cache-container",
        "dance:extract"
    ]);
    // Unpack Docker Image into Scratch
    const { stdout: tarOutput } = await (0, $4c028fad90f63861$export$889ea624f2cb2c57)("docker", [
        "cp",
        "-L",
        "cache-container:/var/dance-cache",
        "-"
    ]);
    await (0, $evV72$fspromises).writeFile((0, $evV72$path).join(scratchDir, "dance-cache.tar"), tarOutput);
    await (0, $4c028fad90f63861$export$889ea624f2cb2c57)("tar", [
        "-H",
        "posix",
        "-x",
        "-C",
        scratchDir,
        "-f",
        (0, $evV72$path).join(scratchDir, "dance-cache.tar")
    ]);
    // Move Cache into Its Place
    await (0, $evV72$fspromises).rm(cacheSource, {
        recursive: true,
        force: true
    });
    await (0, $evV72$fspromises).rename((0, $evV72$path).join(scratchDir, "dance-cache"), cacheSource);
}
async function $8d40300f3635b768$export$bd3cfa0c41fc7012(opts) {
    if (opts["skip-extraction"]) {
        console.log("skip-extraction is set. Skipping extraction step...");
        return;
    }
    const cacheMap = (0, $76d06fcdc9bff1f5$export$8550a4d7282a21d0)(opts);
    const scratchDir = opts["scratch-dir"];
    // Extract Caches for each source-target pair
    for (const [cacheSource, cacheTarget] of Object.entries(cacheMap))await $8d40300f3635b768$var$extractCache(cacheSource, cacheTarget, scratchDir);
}



async function $bec5d2ddaaf4a876$var$main(args) {
    const opts = (0, $76d06fcdc9bff1f5$export$77714ac6976d0316)(args);
    if (opts.help) return (0, $76d06fcdc9bff1f5$export$34512e3b2db52a4e)();
    if (opts.extract) // Run the post step
    await (0, $8d40300f3635b768$export$bd3cfa0c41fc7012)(opts);
    else {
        // Otherwise, this is the main step
        if (process.env.GITHUB_STATE !== undefined) await (0, $evV72$fspromises).appendFile(process.env.GITHUB_STATE, `POST=true${(0, $evV72$os).EOL}`);
        await (0, $bd1d73aff0732146$export$38c65e9f06d3d433)(opts);
    }
}
try {
    await $bec5d2ddaaf4a876$var$main(process.argv);
} catch (err) {
    console.error(err);
    if (err instanceof Error) console.error(err.stack);
    process.exit(1);
}


//# sourceMappingURL=index.js.map
