import * as $evV72$fs from "fs";
import $evV72$fspromises from "fs/promises";
import $evV72$os, * as $evV72$os1 from "os";
import $evV72$path, * as $evV72$path1 from "path";
import $evV72$child_process, {spawn as $evV72$spawn, spawnSync as $evV72$spawnSync} from "child_process";


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
parcelRegister("02a0L", function(module, exports) {
module.exports = $0067f4153754ec94$var$isexe;
$0067f4153754ec94$var$isexe.sync = $0067f4153754ec94$var$sync;

function $0067f4153754ec94$var$checkPathExt(path, options) {
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
function $0067f4153754ec94$var$checkStat(stat, path, options) {
    if (!stat.isSymbolicLink() && !stat.isFile()) return false;
    return $0067f4153754ec94$var$checkPathExt(path, options);
}
function $0067f4153754ec94$var$isexe(path, options, cb) {
    $evV72$stat(path, function(er, stat) {
        cb(er, er ? false : $0067f4153754ec94$var$checkStat(stat, path, options));
    });
}
function $0067f4153754ec94$var$sync(path, options) {
    return $0067f4153754ec94$var$checkStat($evV72$statSync(path), path, options);
}

});

parcelRegister("eqVNx", function(module, exports) {
module.exports = $a82053d9edaeac9b$var$isexe;
$a82053d9edaeac9b$var$isexe.sync = $a82053d9edaeac9b$var$sync;

function $a82053d9edaeac9b$var$isexe(path, options, cb) {
    $evV72$stat(path, function(er, stat) {
        cb(er, er ? false : $a82053d9edaeac9b$var$checkStat(stat, options));
    });
}
function $a82053d9edaeac9b$var$sync(path, options) {
    return $a82053d9edaeac9b$var$checkStat($evV72$statSync(path), options);
}
function $a82053d9edaeac9b$var$checkStat(stat, options) {
    return stat.isFile() && $a82053d9edaeac9b$var$checkMode(stat, options);
}
function $a82053d9edaeac9b$var$checkMode(stat, options) {
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





function $83fd64f7195557f0$var$toArr(any) {
    return any == null ? [] : Array.isArray(any) ? any : [
        any
    ];
}
function $83fd64f7195557f0$var$toVal(out, key, val, opts) {
    var x, old = out[key], nxt = !!~opts.string.indexOf(key) ? val == null || val === true ? "" : String(val) : typeof val === "boolean" ? val : !!~opts.boolean.indexOf(key) ? val === "false" ? false : val === "true" || (out._.push((x = +val, x * 0 === 0) ? x : val), !!val) : (x = +val, x * 0 === 0) ? x : val;
    out[key] = old == null ? nxt : Array.isArray(old) ? old.concat(nxt) : [
        old,
        nxt
    ];
}
function $83fd64f7195557f0$export$2e2bcd8739ae039(args, opts) {
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
    opts.string = $83fd64f7195557f0$var$toArr(opts.string);
    opts.boolean = $83fd64f7195557f0$var$toArr(opts.boolean);
    if (alibi) for(k in opts.alias){
        arr = opts.alias[k] = $83fd64f7195557f0$var$toArr(opts.alias[k]);
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
                $83fd64f7195557f0$var$toVal(out, name, idx + 1 < arr.length || val, opts);
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


var $0bb303b6376d48ba$exports = {};
"use strict";
var $0bb303b6376d48ba$var$__createBinding = $0bb303b6376d48ba$exports && $0bb303b6376d48ba$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $0bb303b6376d48ba$var$__setModuleDefault = $0bb303b6376d48ba$exports && $0bb303b6376d48ba$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $0bb303b6376d48ba$var$__importStar = $0bb303b6376d48ba$exports && $0bb303b6376d48ba$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $0bb303b6376d48ba$var$__createBinding(result, mod, k);
    }
    $0bb303b6376d48ba$var$__setModuleDefault(result, mod);
    return result;
};
var $0bb303b6376d48ba$var$__awaiter = $0bb303b6376d48ba$exports && $0bb303b6376d48ba$exports.__awaiter || function(thisArg, _arguments, P, generator) {
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
Object.defineProperty($0bb303b6376d48ba$exports, "__esModule", {
    value: true
});
$0bb303b6376d48ba$exports.getState = $0bb303b6376d48ba$exports.saveState = $0bb303b6376d48ba$exports.group = $0bb303b6376d48ba$exports.endGroup = $0bb303b6376d48ba$exports.startGroup = $0bb303b6376d48ba$exports.info = $0bb303b6376d48ba$exports.notice = $0bb303b6376d48ba$exports.warning = $0bb303b6376d48ba$exports.error = $0bb303b6376d48ba$exports.debug = $0bb303b6376d48ba$exports.isDebug = $0bb303b6376d48ba$exports.setFailed = $0bb303b6376d48ba$exports.setCommandEcho = $0bb303b6376d48ba$exports.setOutput = $0bb303b6376d48ba$exports.getBooleanInput = $0bb303b6376d48ba$exports.getMultilineInput = $0bb303b6376d48ba$exports.getInput = $0bb303b6376d48ba$exports.addPath = $0bb303b6376d48ba$exports.setSecret = $0bb303b6376d48ba$exports.exportVariable = $0bb303b6376d48ba$exports.ExitCode = void 0;
var $6605380e9069822e$exports = {};
"use strict";
var $6605380e9069822e$var$__createBinding = $6605380e9069822e$exports && $6605380e9069822e$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $6605380e9069822e$var$__setModuleDefault = $6605380e9069822e$exports && $6605380e9069822e$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $6605380e9069822e$var$__importStar = $6605380e9069822e$exports && $6605380e9069822e$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $6605380e9069822e$var$__createBinding(result, mod, k);
    }
    $6605380e9069822e$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty($6605380e9069822e$exports, "__esModule", {
    value: true
});
$6605380e9069822e$exports.issue = $6605380e9069822e$exports.issueCommand = void 0;

const $6605380e9069822e$var$os = $6605380e9069822e$var$__importStar($evV72$os1);
var $25a8cc9396483764$exports = {};
"use strict";
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty($25a8cc9396483764$exports, "__esModule", {
    value: true
});
$25a8cc9396483764$exports.toCommandProperties = $25a8cc9396483764$exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */ function $25a8cc9396483764$var$toCommandValue(input) {
    if (input === null || input === undefined) return "";
    else if (typeof input === "string" || input instanceof String) return input;
    return JSON.stringify(input);
}
$25a8cc9396483764$exports.toCommandValue = $25a8cc9396483764$var$toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */ function $25a8cc9396483764$var$toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) return {};
    return {
        title: annotationProperties.title,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
$25a8cc9396483764$exports.toCommandProperties = $25a8cc9396483764$var$toCommandProperties;


/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */ function $6605380e9069822e$var$issueCommand(command, properties, message) {
    const cmd = new $6605380e9069822e$var$Command(command, properties, message);
    process.stdout.write(cmd.toString() + $6605380e9069822e$var$os.EOL);
}
$6605380e9069822e$exports.issueCommand = $6605380e9069822e$var$issueCommand;
function $6605380e9069822e$var$issue(name, message = "") {
    $6605380e9069822e$var$issueCommand(name, {}, message);
}
$6605380e9069822e$exports.issue = $6605380e9069822e$var$issue;
const $6605380e9069822e$var$CMD_STRING = "::";
class $6605380e9069822e$var$Command {
    constructor(command, properties, message){
        if (!command) command = "missing.command";
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = $6605380e9069822e$var$CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += " ";
            let first = true;
            for(const key in this.properties)if (this.properties.hasOwnProperty(key)) {
                const val = this.properties[key];
                if (val) {
                    if (first) first = false;
                    else cmdStr += ",";
                    cmdStr += `${key}=${$6605380e9069822e$var$escapeProperty(val)}`;
                }
            }
        }
        cmdStr += `${$6605380e9069822e$var$CMD_STRING}${$6605380e9069822e$var$escapeData(this.message)}`;
        return cmdStr;
    }
}
function $6605380e9069822e$var$escapeData(s) {
    return $25a8cc9396483764$exports.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function $6605380e9069822e$var$escapeProperty(s) {
    return $25a8cc9396483764$exports.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}


var $86b37aa3c11138f6$exports = {};
"use strict";
// For internal use, subject to change.
var $86b37aa3c11138f6$var$__createBinding = $86b37aa3c11138f6$exports && $86b37aa3c11138f6$exports.__createBinding || (Object.create ? function(o, m, k, k2) {
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
var $86b37aa3c11138f6$var$__setModuleDefault = $86b37aa3c11138f6$exports && $86b37aa3c11138f6$exports.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var $86b37aa3c11138f6$var$__importStar = $86b37aa3c11138f6$exports && $86b37aa3c11138f6$exports.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.hasOwnProperty.call(mod, k)) $86b37aa3c11138f6$var$__createBinding(result, mod, k);
    }
    $86b37aa3c11138f6$var$__setModuleDefault(result, mod);
    return result;
};
Object.defineProperty($86b37aa3c11138f6$exports, "__esModule", {
    value: true
});
$86b37aa3c11138f6$exports.issueCommand = void 0;

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */ const $86b37aa3c11138f6$var$fs = $86b37aa3c11138f6$var$__importStar($evV72$fs);

const $86b37aa3c11138f6$var$os = $86b37aa3c11138f6$var$__importStar($evV72$os1);

function $86b37aa3c11138f6$var$issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) throw new Error(`Unable to find environment variable for file command ${command}`);
    if (!$86b37aa3c11138f6$var$fs.existsSync(filePath)) throw new Error(`Missing file at path: ${filePath}`);
    $86b37aa3c11138f6$var$fs.appendFileSync(filePath, `${$25a8cc9396483764$exports.toCommandValue(message)}${$86b37aa3c11138f6$var$os.EOL}`, {
        encoding: "utf8"
    });
}
$86b37aa3c11138f6$exports.issueCommand = $86b37aa3c11138f6$var$issueCommand;




const $0bb303b6376d48ba$var$os = $0bb303b6376d48ba$var$__importStar($evV72$os1);

const $0bb303b6376d48ba$var$path = $0bb303b6376d48ba$var$__importStar($evV72$path1);
/**
 * The code to exit an action
 */ var $0bb303b6376d48ba$var$ExitCode;
(function(ExitCode) {
    /**
     * A code indicating that the action was successful
     */ ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */ ExitCode[ExitCode["Failure"] = 1] = "Failure";
})($0bb303b6376d48ba$var$ExitCode = $0bb303b6376d48ba$exports.ExitCode || ($0bb303b6376d48ba$exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $0bb303b6376d48ba$var$exportVariable(name, val) {
    const convertedVal = $25a8cc9396483764$exports.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env["GITHUB_ENV"] || "";
    if (filePath) {
        const delimiter = "_GitHubActionsFileCommandDelimeter_";
        const commandValue = `${name}<<${delimiter}${$0bb303b6376d48ba$var$os.EOL}${convertedVal}${$0bb303b6376d48ba$var$os.EOL}${delimiter}`;
        $86b37aa3c11138f6$exports.issueCommand("ENV", commandValue);
    } else $6605380e9069822e$exports.issueCommand("set-env", {
        name: name
    }, convertedVal);
}
$0bb303b6376d48ba$exports.exportVariable = $0bb303b6376d48ba$var$exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */ function $0bb303b6376d48ba$var$setSecret(secret) {
    $6605380e9069822e$exports.issueCommand("add-mask", {}, secret);
}
$0bb303b6376d48ba$exports.setSecret = $0bb303b6376d48ba$var$setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */ function $0bb303b6376d48ba$var$addPath(inputPath) {
    const filePath = process.env["GITHUB_PATH"] || "";
    if (filePath) $86b37aa3c11138f6$exports.issueCommand("PATH", inputPath);
    else $6605380e9069822e$exports.issueCommand("add-path", {}, inputPath);
    process.env["PATH"] = `${inputPath}${$0bb303b6376d48ba$var$path.delimiter}${process.env["PATH"]}`;
}
$0bb303b6376d48ba$exports.addPath = $0bb303b6376d48ba$var$addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */ function $0bb303b6376d48ba$var$getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
    if (options && options.required && !val) throw new Error(`Input required and not supplied: ${name}`);
    if (options && options.trimWhitespace === false) return val;
    return val.trim();
}
$0bb303b6376d48ba$exports.getInput = $0bb303b6376d48ba$var$getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */ function $0bb303b6376d48ba$var$getMultilineInput(name, options) {
    const inputs = $0bb303b6376d48ba$var$getInput(name, options).split("\n").filter((x)=>x !== "");
    return inputs;
}
$0bb303b6376d48ba$exports.getMultilineInput = $0bb303b6376d48ba$var$getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */ function $0bb303b6376d48ba$var$getBooleanInput(name, options) {
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
    const val = $0bb303b6376d48ba$var$getInput(name, options);
    if (trueValue.includes(val)) return true;
    if (falseValue.includes(val)) return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` + `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
$0bb303b6376d48ba$exports.getBooleanInput = $0bb303b6376d48ba$var$getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $0bb303b6376d48ba$var$setOutput(name, value) {
    process.stdout.write($0bb303b6376d48ba$var$os.EOL);
    $6605380e9069822e$exports.issueCommand("set-output", {
        name: name
    }, value);
}
$0bb303b6376d48ba$exports.setOutput = $0bb303b6376d48ba$var$setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */ function $0bb303b6376d48ba$var$setCommandEcho(enabled) {
    $6605380e9069822e$exports.issue("echo", enabled ? "on" : "off");
}
$0bb303b6376d48ba$exports.setCommandEcho = $0bb303b6376d48ba$var$setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */ function $0bb303b6376d48ba$var$setFailed(message) {
    process.exitCode = $0bb303b6376d48ba$var$ExitCode.Failure;
    $0bb303b6376d48ba$var$error(message);
}
$0bb303b6376d48ba$exports.setFailed = $0bb303b6376d48ba$var$setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */ function $0bb303b6376d48ba$var$isDebug() {
    return process.env["RUNNER_DEBUG"] === "1";
}
$0bb303b6376d48ba$exports.isDebug = $0bb303b6376d48ba$var$isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */ function $0bb303b6376d48ba$var$debug(message) {
    $6605380e9069822e$exports.issueCommand("debug", {}, message);
}
$0bb303b6376d48ba$exports.debug = $0bb303b6376d48ba$var$debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $0bb303b6376d48ba$var$error(message, properties = {}) {
    $6605380e9069822e$exports.issueCommand("error", $25a8cc9396483764$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$0bb303b6376d48ba$exports.error = $0bb303b6376d48ba$var$error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $0bb303b6376d48ba$var$warning(message, properties = {}) {
    $6605380e9069822e$exports.issueCommand("warning", $25a8cc9396483764$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$0bb303b6376d48ba$exports.warning = $0bb303b6376d48ba$var$warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $0bb303b6376d48ba$var$notice(message, properties = {}) {
    $6605380e9069822e$exports.issueCommand("notice", $25a8cc9396483764$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$0bb303b6376d48ba$exports.notice = $0bb303b6376d48ba$var$notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */ function $0bb303b6376d48ba$var$info(message) {
    process.stdout.write(message + $0bb303b6376d48ba$var$os.EOL);
}
$0bb303b6376d48ba$exports.info = $0bb303b6376d48ba$var$info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */ function $0bb303b6376d48ba$var$startGroup(name) {
    $6605380e9069822e$exports.issue("group", name);
}
$0bb303b6376d48ba$exports.startGroup = $0bb303b6376d48ba$var$startGroup;
/**
 * End an output group.
 */ function $0bb303b6376d48ba$var$endGroup() {
    $6605380e9069822e$exports.issue("endgroup");
}
$0bb303b6376d48ba$exports.endGroup = $0bb303b6376d48ba$var$endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */ function $0bb303b6376d48ba$var$group(name, fn) {
    return $0bb303b6376d48ba$var$__awaiter(this, void 0, void 0, function*() {
        $0bb303b6376d48ba$var$startGroup(name);
        let result;
        try {
            result = yield fn();
        } finally{
            $0bb303b6376d48ba$var$endGroup();
        }
        return result;
    });
}
$0bb303b6376d48ba$exports.group = $0bb303b6376d48ba$var$group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function $0bb303b6376d48ba$var$saveState(name, value) {
    $6605380e9069822e$exports.issueCommand("save-state", {
        name: name
    }, value);
}
$0bb303b6376d48ba$exports.saveState = $0bb303b6376d48ba$var$saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */ function $0bb303b6376d48ba$var$getState(name) {
    return process.env[`STATE_${name}`] || "";
}
$0bb303b6376d48ba$exports.getState = $0bb303b6376d48ba$var$getState;


function $76d06fcdc9bff1f5$export$77714ac6976d0316(args) {
    const opts = (0, $83fd64f7195557f0$export$2e2bcd8739ae039)(args, {
        default: {
            "cache-map": (0, $0bb303b6376d48ba$exports.getInput)("cache-map") || "{}",
            "scratch-dir": (0, $0bb303b6376d48ba$exports.getInput)("scratch-dir") || "scratch",
            "skip-extraction": ((0, $0bb303b6376d48ba$exports.getInput)("skip-extraction") || "false") === "true",
            "extract": process.env[`STATE_POST`] !== undefined,
            "help": false
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
        (0, $0bb303b6376d48ba$exports.warning)("The `cache-source` and `cache-target` options are deprecated. Use `cache-map` instead.");
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
  --cache-map    The map of actions source paths to container destination paths or mount arguments
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
function $76d06fcdc9bff1f5$export$febacabd0d01c81(cacheOptions) {
    if (typeof cacheOptions === "string") // only the target path is provided
    return cacheOptions;
    else {
        // object is provided
        if ("target" in cacheOptions) return cacheOptions.target;
        else throw new Error(`Expected the 'target' key in the cache options, got:\n${cacheOptions}`);
    }
}
function $76d06fcdc9bff1f5$export$238315f403b84074(cacheOptions) {
    if (typeof cacheOptions === "string") // only the target path is provided
    return `type=cache,target=${cacheOptions}`;
    else {
        // other options are provided
        const otherOptions = Object.entries(cacheOptions).map(([key, value])=>`${key}=${value}`).join(",");
        return `type=cache,${otherOptions}`;
    }
}


var $57fb336faab90461$exports = {};
var $3e93ed16e4c135d4$exports = {};
"use strict";

var $ba992259a21941a5$exports = {};
"use strict";

var $9ae68499da2d8dc7$exports = {};
"use strict";

var $f1b992f1222e6b3f$exports = {};
const $f1b992f1222e6b3f$var$isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";

const $f1b992f1222e6b3f$var$COLON = $f1b992f1222e6b3f$var$isWindows ? ";" : ":";
var $618a1a794aa1288c$exports = {};

var $618a1a794aa1288c$var$core;


if (process.platform === "win32" || $parcel$global.TESTING_WINDOWS) $618a1a794aa1288c$var$core = (parcelRequire("02a0L"));
else $618a1a794aa1288c$var$core = (parcelRequire("eqVNx"));
$618a1a794aa1288c$exports = $618a1a794aa1288c$var$isexe;
$618a1a794aa1288c$var$isexe.sync = $618a1a794aa1288c$var$sync;
function $618a1a794aa1288c$var$isexe(path, options, cb) {
    if (typeof options === "function") {
        cb = options;
        options = {};
    }
    if (!cb) {
        if (typeof Promise !== "function") throw new TypeError("callback not provided");
        return new Promise(function(resolve, reject) {
            $618a1a794aa1288c$var$isexe(path, options || {}, function(er, is) {
                if (er) reject(er);
                else resolve(is);
            });
        });
    }
    $618a1a794aa1288c$var$core(path, options || {}, function(er, is) {
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
function $618a1a794aa1288c$var$sync(path, options) {
    // my kingdom for a filtered catch
    try {
        return $618a1a794aa1288c$var$core.sync(path, options || {});
    } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") return false;
        else throw er;
    }
}


const $f1b992f1222e6b3f$var$getNotFoundError = (cmd)=>Object.assign(new Error(`not found: ${cmd}`), {
        code: "ENOENT"
    });
const $f1b992f1222e6b3f$var$getPathInfo = (cmd, opt)=>{
    const colon = opt.colon || $f1b992f1222e6b3f$var$COLON;
    // If it has a slash, then we don't bother searching the pathenv.
    // just check the file itself, and that's it.
    const pathEnv = cmd.match(/\//) || $f1b992f1222e6b3f$var$isWindows && cmd.match(/\\/) ? [
        ""
    ] : [
        // windows always checks the cwd first
        ...$f1b992f1222e6b3f$var$isWindows ? [
            process.cwd()
        ] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */ "").split(colon)
    ];
    const pathExtExe = $f1b992f1222e6b3f$var$isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
    const pathExt = $f1b992f1222e6b3f$var$isWindows ? pathExtExe.split(colon) : [
        ""
    ];
    if ($f1b992f1222e6b3f$var$isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "") pathExt.unshift("");
    }
    return {
        pathEnv: pathEnv,
        pathExt: pathExt,
        pathExtExe: pathExtExe
    };
};
const $f1b992f1222e6b3f$var$which = (cmd, opt, cb)=>{
    if (typeof opt === "function") {
        cb = opt;
        opt = {};
    }
    if (!opt) opt = {};
    const { pathEnv: pathEnv, pathExt: pathExt, pathExtExe: pathExtExe } = $f1b992f1222e6b3f$var$getPathInfo(cmd, opt);
    const found = [];
    const step = (i)=>new Promise((resolve, reject)=>{
            if (i === pathEnv.length) return opt.all && found.length ? resolve(found) : reject($f1b992f1222e6b3f$var$getNotFoundError(cmd));
            const ppRaw = pathEnv[i];
            const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
            const pCmd = $evV72$join(pathPart, cmd);
            const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
            resolve(subStep(p, i, 0));
        });
    const subStep = (p, i, ii)=>new Promise((resolve, reject)=>{
            if (ii === pathExt.length) return resolve(step(i + 1));
            const ext = pathExt[ii];
            $618a1a794aa1288c$exports(p + ext, {
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
const $f1b992f1222e6b3f$var$whichSync = (cmd, opt)=>{
    opt = opt || {};
    const { pathEnv: pathEnv, pathExt: pathExt, pathExtExe: pathExtExe } = $f1b992f1222e6b3f$var$getPathInfo(cmd, opt);
    const found = [];
    for(let i = 0; i < pathEnv.length; i++){
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = $evV72$join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for(let j = 0; j < pathExt.length; j++){
            const cur = p + pathExt[j];
            try {
                const is = $618a1a794aa1288c$exports.sync(cur, {
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
    throw $f1b992f1222e6b3f$var$getNotFoundError(cmd);
};
$f1b992f1222e6b3f$exports = $f1b992f1222e6b3f$var$which;
$f1b992f1222e6b3f$var$which.sync = $f1b992f1222e6b3f$var$whichSync;


var $77303ac1821927db$exports = {};
"use strict";
const $77303ac1821927db$var$pathKey = (options = {})=>{
    const environment = options.env || process.env;
    const platform = options.platform || process.platform;
    if (platform !== "win32") return "PATH";
    return Object.keys(environment).reverse().find((key)=>key.toUpperCase() === "PATH") || "Path";
};
$77303ac1821927db$exports = $77303ac1821927db$var$pathKey;
// TODO: Remove this for the next major release
$77303ac1821927db$exports.default = $77303ac1821927db$var$pathKey;


function $9ae68499da2d8dc7$var$resolveCommandAttempt(parsed, withoutPathExt) {
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
        resolved = $f1b992f1222e6b3f$exports.sync(parsed.command, {
            path: env[$77303ac1821927db$exports({
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
function $9ae68499da2d8dc7$var$resolveCommand(parsed) {
    return $9ae68499da2d8dc7$var$resolveCommandAttempt(parsed) || $9ae68499da2d8dc7$var$resolveCommandAttempt(parsed, true);
}
$9ae68499da2d8dc7$exports = $9ae68499da2d8dc7$var$resolveCommand;


var $44f2128ace0ec487$export$ae50443ffc990749;
var $44f2128ace0ec487$export$6ea29ee575e3f5ff;
"use strict";
// See http://www.robvanderwoude.com/escapechars.php
const $44f2128ace0ec487$var$metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
function $44f2128ace0ec487$var$escapeCommand(arg) {
    // Escape meta chars
    arg = arg.replace($44f2128ace0ec487$var$metaCharsRegExp, "^$1");
    return arg;
}
function $44f2128ace0ec487$var$escapeArgument(arg, doubleEscapeMetaChars) {
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
    arg = arg.replace($44f2128ace0ec487$var$metaCharsRegExp, "^$1");
    // Double escape meta chars if necessary
    if (doubleEscapeMetaChars) arg = arg.replace($44f2128ace0ec487$var$metaCharsRegExp, "^$1");
    return arg;
}
$44f2128ace0ec487$export$ae50443ffc990749 = $44f2128ace0ec487$var$escapeCommand;
$44f2128ace0ec487$export$6ea29ee575e3f5ff = $44f2128ace0ec487$var$escapeArgument;


var $3cca0e63723ee076$exports = {};
"use strict";

var $f6fe1e947c2cffc1$exports = {};
"use strict";
var $77a201907d13785e$exports = {};
"use strict";
$77a201907d13785e$exports = /^#!(.*)/;


$f6fe1e947c2cffc1$exports = (string = "")=>{
    const match = string.match($77a201907d13785e$exports);
    if (!match) return null;
    const [path, argument] = match[0].replace(/#! ?/, "").split(" ");
    const binary = path.split("/").pop();
    if (binary === "env") return argument;
    return argument ? `${binary} ${argument}` : binary;
};


function $3cca0e63723ee076$var$readShebang(command) {
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
    return $f6fe1e947c2cffc1$exports(buffer.toString());
}
$3cca0e63723ee076$exports = $3cca0e63723ee076$var$readShebang;


const $ba992259a21941a5$var$isWin = process.platform === "win32";
const $ba992259a21941a5$var$isExecutableRegExp = /\.(?:com|exe)$/i;
const $ba992259a21941a5$var$isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
function $ba992259a21941a5$var$detectShebang(parsed) {
    parsed.file = $9ae68499da2d8dc7$exports(parsed);
    const shebang = parsed.file && $3cca0e63723ee076$exports(parsed.file);
    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return $9ae68499da2d8dc7$exports(parsed);
    }
    return parsed.file;
}
function $ba992259a21941a5$var$parseNonShell(parsed) {
    if (!$ba992259a21941a5$var$isWin) return parsed;
    // Detect & add support for shebangs
    const commandFile = $ba992259a21941a5$var$detectShebang(parsed);
    // We don't need a shell if the command filename is an executable
    const needsShell = !$ba992259a21941a5$var$isExecutableRegExp.test(commandFile);
    // If a shell is required, use cmd.exe and take care of escaping everything correctly
    // Note that `forceShell` is an hidden option used only in tests
    if (parsed.options.forceShell || needsShell) {
        // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`
        // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument
        // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,
        // we need to double escape them
        const needsDoubleEscapeMetaChars = $ba992259a21941a5$var$isCmdShimRegExp.test(commandFile);
        // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\bar)
        // This is necessary otherwise it will always fail with ENOENT in those cases
        parsed.command = $evV72$normalize(parsed.command);
        // Escape command & arguments
        parsed.command = $44f2128ace0ec487$export$ae50443ffc990749(parsed.command);
        parsed.args = parsed.args.map((arg)=>$44f2128ace0ec487$export$6ea29ee575e3f5ff(arg, needsDoubleEscapeMetaChars));
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
function $ba992259a21941a5$var$parse(command, args, options) {
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
    return options.shell ? parsed : $ba992259a21941a5$var$parseNonShell(parsed);
}
$ba992259a21941a5$exports = $ba992259a21941a5$var$parse;


var $ac602fd4d31c6b69$exports = {};
"use strict";
const $ac602fd4d31c6b69$var$isWin = process.platform === "win32";
function $ac602fd4d31c6b69$var$notFoundError(original, syscall) {
    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
    });
}
function $ac602fd4d31c6b69$var$hookChildProcess(cp, parsed) {
    if (!$ac602fd4d31c6b69$var$isWin) return;
    const originalEmit = cp.emit;
    cp.emit = function(name, arg1) {
        // If emitting "exit" event and exit code is 1, we need to check if
        // the command exists and emit an "error" instead
        // See https://github.com/IndigoUnited/node-cross-spawn/issues/16
        if (name === "exit") {
            const err = $ac602fd4d31c6b69$var$verifyENOENT(arg1, parsed, "spawn");
            if (err) return originalEmit.call(cp, "error", err);
        }
        return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params
    };
}
function $ac602fd4d31c6b69$var$verifyENOENT(status, parsed) {
    if ($ac602fd4d31c6b69$var$isWin && status === 1 && !parsed.file) return $ac602fd4d31c6b69$var$notFoundError(parsed.original, "spawn");
    return null;
}
function $ac602fd4d31c6b69$var$verifyENOENTSync(status, parsed) {
    if ($ac602fd4d31c6b69$var$isWin && status === 1 && !parsed.file) return $ac602fd4d31c6b69$var$notFoundError(parsed.original, "spawnSync");
    return null;
}
$ac602fd4d31c6b69$exports = {
    hookChildProcess: $ac602fd4d31c6b69$var$hookChildProcess,
    verifyENOENT: $ac602fd4d31c6b69$var$verifyENOENT,
    verifyENOENTSync: $ac602fd4d31c6b69$var$verifyENOENTSync,
    notFoundError: $ac602fd4d31c6b69$var$notFoundError
};


function $3e93ed16e4c135d4$var$spawn(command, args, options) {
    // Parse the arguments
    const parsed = $ba992259a21941a5$exports(command, args, options);
    // Spawn the child process
    const spawned = $evV72$spawn(parsed.command, parsed.args, parsed.options);
    // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    $ac602fd4d31c6b69$exports.hookChildProcess(spawned, parsed);
    return spawned;
}
function $3e93ed16e4c135d4$var$spawnSync(command, args, options) {
    // Parse the arguments
    const parsed = $ba992259a21941a5$exports(command, args, options);
    // Spawn the child process
    const result = $evV72$spawnSync(parsed.command, parsed.args, parsed.options);
    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    result.error = result.error || $ac602fd4d31c6b69$exports.verifyENOENTSync(result.status, parsed);
    return result;
}
$3e93ed16e4c135d4$exports = $3e93ed16e4c135d4$var$spawn;
$3e93ed16e4c135d4$exports.spawn = $3e93ed16e4c135d4$var$spawn;
$3e93ed16e4c135d4$exports.sync = $3e93ed16e4c135d4$var$spawnSync;
$3e93ed16e4c135d4$exports._parse = $ba992259a21941a5$exports;
$3e93ed16e4c135d4$exports._enoent = $ac602fd4d31c6b69$exports;


/** Spawns a child process, as long as you ask nicely.
 * 
 * @param {string} command - The shell command to execute.
 * @param {string[]} [args] - An array of arguments that are given after the command.
 * @param {{ rejectOnError?: boolean, stdin?: string, stderr?: (data: string) => void, stdout?: (data: string) => void }} [options] - Options.
 * @param {any} [spawnOptions] - Options that are passed directly to child_process.spawn. Also supports stdin: string.
 * @returns {Promise<{ stdout: string, stderr: string }>}
 */ const $57fb336faab90461$var$spawnPlease = (command, args, options = {}, spawnOptions = {})=>{
    // defaults
    if (options.rejectOnError === undefined) options.rejectOnError = true;
    let stdout = "";
    let stderr = "";
    const child = $3e93ed16e4c135d4$exports(command, args, spawnOptions);
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
$57fb336faab90461$exports = $57fb336faab90461$var$spawnPlease;



async function $4c028fad90f63861$export$889ea624f2cb2c57(command, args) {
    try {
        return await (0, (/*@__PURE__*/$parcel$interopDefault($57fb336faab90461$exports)))(command, args);
    } catch (error) {
        console.error(`Error running command: ${command} ${args.join(" ")}`);
        throw error;
    }
}
async function $4c028fad90f63861$export$214213e2e11c62ae([command1, args1], [command2, args2]) {
    const cp1 = (0, $evV72$child_process).spawn(command1, args1, {
        stdio: [
            "inherit",
            "pipe",
            "inherit"
        ]
    });
    const cp2 = (0, $evV72$child_process).spawn(command2, args2, {
        stdio: [
            "pipe",
            "inherit",
            "inherit"
        ]
    });
    cp1.stdout.pipe(cp2.stdin);
    await Promise.all([
        $4c028fad90f63861$var$assertSuccess(cp1),
        $4c028fad90f63861$var$assertSuccess(cp2)
    ]);
}
function $4c028fad90f63861$var$assertSuccess(cp) {
    return new Promise((resolve, reject)=>{
        cp.on("error", (error)=>{
            reject(error);
        });
        cp.on("close", (code)=>{
            if (code !== 0) reject(new Error(`process exited with code ${code}`));
            resolve();
        });
    });
}



async function $bd1d73aff0732146$var$injectCache(cacheSource, cacheOptions, scratchDir) {
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
    const date = new Date().toISOString();
    await (0, $evV72$fspromises).writeFile((0, $evV72$path).join(cacheSource, "buildstamp"), date);
    const targetPath = (0, $76d06fcdc9bff1f5$export$febacabd0d01c81)(cacheOptions);
    const mountArgs = (0, $76d06fcdc9bff1f5$export$238315f403b84074)(cacheOptions);
    // Prepare Dancefile to Access Caches
    const dancefileContent = `
FROM busybox:1
COPY buildstamp buildstamp
RUN --mount=${mountArgs} \
    --mount=type=bind,source=.,target=/var/dance-cache \
    cp -p -R /var/dance-cache/. ${targetPath} || true
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
    try {
        await (0, $evV72$fspromises).rm(cacheSource, {
            recursive: true,
            force: true
        });
    } catch (err) {
        // Ignore Cleaning Errors
        (0, $0bb303b6376d48ba$exports.notice)(`Error while cleaning cache source directory: ${err}. Ignoring...`);
    }
}
async function $bd1d73aff0732146$export$38c65e9f06d3d433(opts) {
    const cacheMap = (0, $76d06fcdc9bff1f5$export$8550a4d7282a21d0)(opts);
    const scratchDir = opts["scratch-dir"];
    // Inject Caches for each source-target pair
    for (const [cacheSource, cacheOptions] of Object.entries(cacheMap))await $bd1d73aff0732146$var$injectCache(cacheSource, cacheOptions, scratchDir);
}







async function $8d40300f3635b768$var$extractCache(cacheSource, cacheOptions, scratchDir) {
    // Prepare Timestamp for Layer Cache Busting
    const date = new Date().toISOString();
    await (0, $evV72$fspromises).writeFile((0, $evV72$path).join(scratchDir, "buildstamp"), date);
    // Prepare Dancefile to Access Caches
    const targetPath = (0, $76d06fcdc9bff1f5$export$febacabd0d01c81)(cacheOptions);
    const mountArgs = (0, $76d06fcdc9bff1f5$export$238315f403b84074)(cacheOptions);
    const dancefileContent = `
FROM busybox:1
COPY buildstamp buildstamp
RUN --mount=${mountArgs} \
    mkdir -p /var/dance-cache/ \
    && cp -p -R ${targetPath}/. /var/dance-cache/ || true
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
    await (0, $4c028fad90f63861$export$214213e2e11c62ae)([
        "docker",
        [
            "cp",
            "-L",
            "cache-container:/var/dance-cache",
            "-"
        ]
    ], [
        "tar",
        [
            "-H",
            "posix",
            "-x",
            "-C",
            scratchDir
        ]
    ]);
    // Move Cache into Its Place
    try {
        await (0, $evV72$fspromises).rm(cacheSource, {
            recursive: true,
            force: true
        });
    } catch (err) {
        // Ignore Cleaning Errors
        (0, $0bb303b6376d48ba$exports.notice)(`Error while cleaning cache source directory: ${err}. Ignoring...`);
    }
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
    for (const [cacheSource, cacheOptions] of Object.entries(cacheMap))await $8d40300f3635b768$var$extractCache(cacheSource, cacheOptions, scratchDir);
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
