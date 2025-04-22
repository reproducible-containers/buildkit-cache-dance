import $evV72$fs, * as $evV72$fs1 from "fs";
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
parcelRegister("dE8Bn", function(module, exports) {
module.exports = $9ef5aef4681a6fb1$var$isexe;
$9ef5aef4681a6fb1$var$isexe.sync = $9ef5aef4681a6fb1$var$sync;

function $9ef5aef4681a6fb1$var$checkPathExt(path, options) {
    var pathext = options.pathExt !== undefined ? options.pathExt : process.env.PATHEXT;
    if (!pathext) return true;
    pathext = pathext.split(';');
    if (pathext.indexOf('') !== -1) return true;
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
    var u = parseInt('100', 8);
    var g = parseInt('010', 8);
    var o = parseInt('001', 8);
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
    var x, old = out[key], nxt = !!~opts.string.indexOf(key) ? val == null || val === true ? '' : String(val) : typeof val === 'boolean' ? val : !!~opts.boolean.indexOf(key) ? val === 'false' ? false : val === 'true' || (out._.push((x = +val, x * 0 === 0) ? x : val), !!val) : (x = +val, x * 0 === 0) ? x : val;
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
        if (arg === '--') {
            out._ = out._.concat(args.slice(++i));
            break;
        }
        for(j = 0; j < arg.length; j++){
            if (arg.charCodeAt(j) !== 45) break; // "-"
        }
        if (j === 0) out._.push(arg);
        else if (arg.substring(j, j + 3) === 'no-') {
            name = arg.substring(j + 3);
            if (strict && !~keys.indexOf(name)) return opts.unknown(arg);
            out[name] = false;
        } else {
            for(idx = j + 1; idx < arg.length; idx++){
                if (arg.charCodeAt(idx) === 61) break; // "="
            }
            name = arg.substring(j, idx);
            val = arg.substring(++idx) || i + 1 === len || ('' + args[i + 1]).charCodeAt(0) === 45 || args[++i];
            arr = j === 2 ? [
                name
            ] : name;
            for(idx = 0; idx < arr.length; idx++){
                name = arr[idx];
                if (strict && !~keys.indexOf(name)) return opts.unknown('-'.repeat(j) + name);
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
    if (input === null || input === undefined) return '';
    else if (typeof input === 'string' || input instanceof String) return input;
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
function $6aa988ea1669fe85$var$issue(name, message = '') {
    $6aa988ea1669fe85$var$issueCommand(name, {}, message);
}
$6aa988ea1669fe85$exports.issue = $6aa988ea1669fe85$var$issue;
const $6aa988ea1669fe85$var$CMD_STRING = '::';
class $6aa988ea1669fe85$var$Command {
    constructor(command, properties, message){
        if (!command) command = 'missing.command';
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = $6aa988ea1669fe85$var$CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for(const key in this.properties)if (this.properties.hasOwnProperty(key)) {
                const val = this.properties[key];
                if (val) {
                    if (first) first = false;
                    else cmdStr += ',';
                    cmdStr += `${key}=${$6aa988ea1669fe85$var$escapeProperty(val)}`;
                }
            }
        }
        cmdStr += `${$6aa988ea1669fe85$var$CMD_STRING}${$6aa988ea1669fe85$var$escapeData(this.message)}`;
        return cmdStr;
    }
}
function $6aa988ea1669fe85$var$escapeData(s) {
    return $1f87556d0f647bcd$exports.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}
function $6aa988ea1669fe85$var$escapeProperty(s) {
    return $1f87556d0f647bcd$exports.toCommandValue(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A').replace(/:/g, '%3A').replace(/,/g, '%2C');
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
/* eslint-disable @typescript-eslint/no-explicit-any */ const $71d1c579b85cee7b$var$fs = $71d1c579b85cee7b$var$__importStar($evV72$fs1);

const $71d1c579b85cee7b$var$os = $71d1c579b85cee7b$var$__importStar($evV72$os1);

function $71d1c579b85cee7b$var$issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) throw new Error(`Unable to find environment variable for file command ${command}`);
    if (!$71d1c579b85cee7b$var$fs.existsSync(filePath)) throw new Error(`Missing file at path: ${filePath}`);
    $71d1c579b85cee7b$var$fs.appendFileSync(filePath, `${$1f87556d0f647bcd$exports.toCommandValue(message)}${$71d1c579b85cee7b$var$os.EOL}`, {
        encoding: 'utf8'
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
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${$bbb9dac42384d004$var$os.EOL}${convertedVal}${$bbb9dac42384d004$var$os.EOL}${delimiter}`;
        $71d1c579b85cee7b$exports.issueCommand('ENV', commandValue);
    } else $6aa988ea1669fe85$exports.issueCommand('set-env', {
        name: name
    }, convertedVal);
}
$bbb9dac42384d004$exports.exportVariable = $bbb9dac42384d004$var$exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */ function $bbb9dac42384d004$var$setSecret(secret) {
    $6aa988ea1669fe85$exports.issueCommand('add-mask', {}, secret);
}
$bbb9dac42384d004$exports.setSecret = $bbb9dac42384d004$var$setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */ function $bbb9dac42384d004$var$addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) $71d1c579b85cee7b$exports.issueCommand('PATH', inputPath);
    else $6aa988ea1669fe85$exports.issueCommand('add-path', {}, inputPath);
    process.env['PATH'] = `${inputPath}${$bbb9dac42384d004$var$path.delimiter}${process.env['PATH']}`;
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
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
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
    const inputs = $bbb9dac42384d004$var$getInput(name, options).split('\n').filter((x)=>x !== '');
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
        'true',
        'True',
        'TRUE'
    ];
    const falseValue = [
        'false',
        'False',
        'FALSE'
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
    $6aa988ea1669fe85$exports.issueCommand('set-output', {
        name: name
    }, value);
}
$bbb9dac42384d004$exports.setOutput = $bbb9dac42384d004$var$setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */ function $bbb9dac42384d004$var$setCommandEcho(enabled) {
    $6aa988ea1669fe85$exports.issue('echo', enabled ? 'on' : 'off');
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
    return process.env['RUNNER_DEBUG'] === '1';
}
$bbb9dac42384d004$exports.isDebug = $bbb9dac42384d004$var$isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */ function $bbb9dac42384d004$var$debug(message) {
    $6aa988ea1669fe85$exports.issueCommand('debug', {}, message);
}
$bbb9dac42384d004$exports.debug = $bbb9dac42384d004$var$debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $bbb9dac42384d004$var$error(message, properties = {}) {
    $6aa988ea1669fe85$exports.issueCommand('error', $1f87556d0f647bcd$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$bbb9dac42384d004$exports.error = $bbb9dac42384d004$var$error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $bbb9dac42384d004$var$warning(message, properties = {}) {
    $6aa988ea1669fe85$exports.issueCommand('warning', $1f87556d0f647bcd$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
$bbb9dac42384d004$exports.warning = $bbb9dac42384d004$var$warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */ function $bbb9dac42384d004$var$notice(message, properties = {}) {
    $6aa988ea1669fe85$exports.issueCommand('notice', $1f87556d0f647bcd$exports.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
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
    $6aa988ea1669fe85$exports.issue('group', name);
}
$bbb9dac42384d004$exports.startGroup = $bbb9dac42384d004$var$startGroup;
/**
 * End an output group.
 */ function $bbb9dac42384d004$var$endGroup() {
    $6aa988ea1669fe85$exports.issue('endgroup');
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
    $6aa988ea1669fe85$exports.issueCommand('save-state', {
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
    return process.env[`STATE_${name}`] || '';
}
$bbb9dac42384d004$exports.getState = $bbb9dac42384d004$var$getState;


var $54b0c2f7fc5ba86a$exports = {};
"use strict";
Object.defineProperty($54b0c2f7fc5ba86a$exports, "__esModule", {
    value: true
});
$54b0c2f7fc5ba86a$exports.DockerfileParser = $54b0c2f7fc5ba86a$exports.DefaultVariables = $54b0c2f7fc5ba86a$exports.Directive = $54b0c2f7fc5ba86a$exports.Keyword = $54b0c2f7fc5ba86a$exports.Workdir = $54b0c2f7fc5ba86a$exports.Volume = $54b0c2f7fc5ba86a$exports.User = $54b0c2f7fc5ba86a$exports.Stopsignal = $54b0c2f7fc5ba86a$exports.Shell = $54b0c2f7fc5ba86a$exports.Run = $54b0c2f7fc5ba86a$exports.PropertyInstruction = $54b0c2f7fc5ba86a$exports.Onbuild = $54b0c2f7fc5ba86a$exports.ModifiableInstruction = $54b0c2f7fc5ba86a$exports.Label = $54b0c2f7fc5ba86a$exports.JSONInstruction = $54b0c2f7fc5ba86a$exports.Heredoc = $54b0c2f7fc5ba86a$exports.Healthcheck = $54b0c2f7fc5ba86a$exports.From = $54b0c2f7fc5ba86a$exports.Env = $54b0c2f7fc5ba86a$exports.Entrypoint = $54b0c2f7fc5ba86a$exports.Copy = $54b0c2f7fc5ba86a$exports.Cmd = $54b0c2f7fc5ba86a$exports.Arg = $54b0c2f7fc5ba86a$exports.Add = $54b0c2f7fc5ba86a$exports.Variable = $54b0c2f7fc5ba86a$exports.Property = $54b0c2f7fc5ba86a$exports.ParserDirective = $54b0c2f7fc5ba86a$exports.Line = $54b0c2f7fc5ba86a$exports.Instruction = $54b0c2f7fc5ba86a$exports.Flag = $54b0c2f7fc5ba86a$exports.Comment = $54b0c2f7fc5ba86a$exports.JSONArgument = $54b0c2f7fc5ba86a$exports.Argument = void 0;
var $fd8464c2f2e17cdd$exports = {};
"use strict";
Object.defineProperty($fd8464c2f2e17cdd$exports, "__esModule", {
    value: true
});
$fd8464c2f2e17cdd$exports.Argument = void 0;
class $fd8464c2f2e17cdd$var$Argument {
    constructor(value, range){
        this.value = value;
        this.range = range;
    }
    toString() {
        return this.value;
    }
    getRange() {
        return this.range;
    }
    getValue() {
        return this.value;
    }
    isAfter(position) {
        if (this.range.end.line < position.line) return false;
        return this.range.start.line > position.line ? true : this.range.start.character > position.character;
    }
    isBefore(position) {
        if (this.range.start.line < position.line) return true;
        return this.range.end.line > position.line ? false : this.range.end.character < position.character;
    }
}
$fd8464c2f2e17cdd$exports.Argument = $fd8464c2f2e17cdd$var$Argument;


Object.defineProperty($54b0c2f7fc5ba86a$exports, "Argument", {
    enumerable: true,
    get: function() {
        return $fd8464c2f2e17cdd$exports.Argument;
    }
});
var $4d211a562ff7ccb2$exports = {};
"use strict";
Object.defineProperty($4d211a562ff7ccb2$exports, "__esModule", {
    value: true
});
$4d211a562ff7ccb2$exports.JSONArgument = void 0;

class $4d211a562ff7ccb2$var$JSONArgument extends $fd8464c2f2e17cdd$exports.Argument {
    constructor(value, range, jsonRange){
        super(value, range);
        this.jsonRange = jsonRange;
    }
    getJSONRange() {
        return this.jsonRange;
    }
    getJSONValue() {
        let value = super.getValue();
        value = value.substring(1, value.length - 1);
        return value;
    }
}
$4d211a562ff7ccb2$exports.JSONArgument = $4d211a562ff7ccb2$var$JSONArgument;


Object.defineProperty($54b0c2f7fc5ba86a$exports, "JSONArgument", {
    enumerable: true,
    get: function() {
        return $4d211a562ff7ccb2$exports.JSONArgument;
    }
});
var $56b05761038f14db$exports = {};
"use strict";
Object.defineProperty($56b05761038f14db$exports, "__esModule", {
    value: true
});
$56b05761038f14db$exports.Comment = void 0;
var $06cc642bc3981461$exports = {};
(function(factory) {
    if (typeof $06cc642bc3981461$exports === "object") {
        var v = factory(undefined, $06cc642bc3981461$exports);
        if (v !== undefined) $06cc642bc3981461$exports = v;
    } else if (typeof define === "function" && define.amd) define([
        "require",
        "exports"
    ], factory);
})(function(require1, exports1) {
    /* --------------------------------------------------------------------------------------------
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     * ------------------------------------------------------------------------------------------ */ 'use strict';
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
    exports1.TextDocument = exports1.EOL = exports1.WorkspaceFolder = exports1.InlineCompletionContext = exports1.SelectedCompletionInfo = exports1.InlineCompletionTriggerKind = exports1.InlineCompletionList = exports1.InlineCompletionItem = exports1.StringValue = exports1.InlayHint = exports1.InlayHintLabelPart = exports1.InlayHintKind = exports1.InlineValueContext = exports1.InlineValueEvaluatableExpression = exports1.InlineValueVariableLookup = exports1.InlineValueText = exports1.SemanticTokens = exports1.SemanticTokenModifiers = exports1.SemanticTokenTypes = exports1.SelectionRange = exports1.DocumentLink = exports1.FormattingOptions = exports1.CodeLens = exports1.CodeAction = exports1.CodeActionContext = exports1.CodeActionTriggerKind = exports1.CodeActionKind = exports1.DocumentSymbol = exports1.WorkspaceSymbol = exports1.SymbolInformation = exports1.SymbolTag = exports1.SymbolKind = exports1.DocumentHighlight = exports1.DocumentHighlightKind = exports1.SignatureInformation = exports1.ParameterInformation = exports1.Hover = exports1.MarkedString = exports1.CompletionList = exports1.CompletionItem = exports1.CompletionItemLabelDetails = exports1.InsertTextMode = exports1.InsertReplaceEdit = exports1.CompletionItemTag = exports1.InsertTextFormat = exports1.CompletionItemKind = exports1.MarkupContent = exports1.MarkupKind = exports1.TextDocumentItem = exports1.OptionalVersionedTextDocumentIdentifier = exports1.VersionedTextDocumentIdentifier = exports1.TextDocumentIdentifier = exports1.WorkspaceChange = exports1.WorkspaceEdit = exports1.DeleteFile = exports1.RenameFile = exports1.CreateFile = exports1.TextDocumentEdit = exports1.AnnotatedTextEdit = exports1.ChangeAnnotationIdentifier = exports1.ChangeAnnotation = exports1.TextEdit = exports1.Command = exports1.Diagnostic = exports1.CodeDescription = exports1.DiagnosticTag = exports1.DiagnosticSeverity = exports1.DiagnosticRelatedInformation = exports1.FoldingRange = exports1.FoldingRangeKind = exports1.ColorPresentation = exports1.ColorInformation = exports1.Color = exports1.LocationLink = exports1.Location = exports1.Range = exports1.Position = exports1.uinteger = exports1.integer = exports1.URI = exports1.DocumentUri = void 0;
    var DocumentUri;
    (function(DocumentUri) {
        function is(value) {
            return typeof value === 'string';
        }
        DocumentUri.is = is;
    })(DocumentUri || (exports1.DocumentUri = DocumentUri = {}));
    var URI;
    (function(URI) {
        function is(value) {
            return typeof value === 'string';
        }
        URI.is = is;
    })(URI || (exports1.URI = URI = {}));
    var integer;
    (function(integer) {
        integer.MIN_VALUE = -2147483648;
        integer.MAX_VALUE = 2147483647;
        function is(value) {
            return typeof value === 'number' && integer.MIN_VALUE <= value && value <= integer.MAX_VALUE;
        }
        integer.is = is;
    })(integer || (exports1.integer = integer = {}));
    var uinteger;
    (function(uinteger) {
        uinteger.MIN_VALUE = 0;
        uinteger.MAX_VALUE = 2147483647;
        function is(value) {
            return typeof value === 'number' && uinteger.MIN_VALUE <= value && value <= uinteger.MAX_VALUE;
        }
        uinteger.is = is;
    })(uinteger || (exports1.uinteger = uinteger = {}));
    /**
     * The Position namespace provides helper functions to work with
     * {@link Position} literals.
     */ var Position;
    (function(Position) {
        /**
         * Creates a new Position literal from the given line and character.
         * @param line The position's line.
         * @param character The position's character.
         */ function create(line, character) {
            if (line === Number.MAX_VALUE) line = uinteger.MAX_VALUE;
            if (character === Number.MAX_VALUE) character = uinteger.MAX_VALUE;
            return {
                line: line,
                character: character
            };
        }
        Position.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Position} interface.
         */ function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
        }
        Position.is = is;
    })(Position || (exports1.Position = Position = {}));
    /**
     * The Range namespace provides helper functions to work with
     * {@link Range} literals.
     */ var Range;
    (function(Range) {
        function create(one, two, three, four) {
            if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) return {
                start: Position.create(one, two),
                end: Position.create(three, four)
            };
            else if (Position.is(one) && Position.is(two)) return {
                start: one,
                end: two
            };
            else throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
        }
        Range.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Range} interface.
         */ function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
        }
        Range.is = is;
    })(Range || (exports1.Range = Range = {}));
    /**
     * The Location namespace provides helper functions to work with
     * {@link Location} literals.
     */ var Location;
    (function(Location) {
        /**
         * Creates a Location literal.
         * @param uri The location's uri.
         * @param range The location's range.
         */ function create(uri, range) {
            return {
                uri: uri,
                range: range
            };
        }
        Location.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Location} interface.
         */ function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
        }
        Location.is = is;
    })(Location || (exports1.Location = Location = {}));
    /**
     * The LocationLink namespace provides helper functions to work with
     * {@link LocationLink} literals.
     */ var LocationLink;
    (function(LocationLink) {
        /**
         * Creates a LocationLink literal.
         * @param targetUri The definition's uri.
         * @param targetRange The full range of the definition.
         * @param targetSelectionRange The span of the symbol definition at the target.
         * @param originSelectionRange The span of the symbol being defined in the originating source file.
         */ function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
            return {
                targetUri: targetUri,
                targetRange: targetRange,
                targetSelectionRange: targetSelectionRange,
                originSelectionRange: originSelectionRange
            };
        }
        LocationLink.create = create;
        /**
         * Checks whether the given literal conforms to the {@link LocationLink} interface.
         */ function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
        }
        LocationLink.is = is;
    })(LocationLink || (exports1.LocationLink = LocationLink = {}));
    /**
     * The Color namespace provides helper functions to work with
     * {@link Color} literals.
     */ var Color;
    (function(Color) {
        /**
         * Creates a new Color literal.
         */ function create(red, green, blue, alpha) {
            return {
                red: red,
                green: green,
                blue: blue,
                alpha: alpha
            };
        }
        Color.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Color} interface.
         */ function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
        }
        Color.is = is;
    })(Color || (exports1.Color = Color = {}));
    /**
     * The ColorInformation namespace provides helper functions to work with
     * {@link ColorInformation} literals.
     */ var ColorInformation;
    (function(ColorInformation) {
        /**
         * Creates a new ColorInformation literal.
         */ function create(range, color) {
            return {
                range: range,
                color: color
            };
        }
        ColorInformation.create = create;
        /**
         * Checks whether the given literal conforms to the {@link ColorInformation} interface.
         */ function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
        }
        ColorInformation.is = is;
    })(ColorInformation || (exports1.ColorInformation = ColorInformation = {}));
    /**
     * The Color namespace provides helper functions to work with
     * {@link ColorPresentation} literals.
     */ var ColorPresentation;
    (function(ColorPresentation) {
        /**
         * Creates a new ColorInformation literal.
         */ function create(label, textEdit, additionalTextEdits) {
            return {
                label: label,
                textEdit: textEdit,
                additionalTextEdits: additionalTextEdits
            };
        }
        ColorPresentation.create = create;
        /**
         * Checks whether the given literal conforms to the {@link ColorInformation} interface.
         */ function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
        }
        ColorPresentation.is = is;
    })(ColorPresentation || (exports1.ColorPresentation = ColorPresentation = {}));
    /**
     * A set of predefined range kinds.
     */ var FoldingRangeKind;
    (function(FoldingRangeKind) {
        /**
         * Folding range for a comment
         */ FoldingRangeKind.Comment = 'comment';
        /**
         * Folding range for an import or include
         */ FoldingRangeKind.Imports = 'imports';
        /**
         * Folding range for a region (e.g. `#region`)
         */ FoldingRangeKind.Region = 'region';
    })(FoldingRangeKind || (exports1.FoldingRangeKind = FoldingRangeKind = {}));
    /**
     * The folding range namespace provides helper functions to work with
     * {@link FoldingRange} literals.
     */ var FoldingRange;
    (function(FoldingRange) {
        /**
         * Creates a new FoldingRange literal.
         */ function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
            var result = {
                startLine: startLine,
                endLine: endLine
            };
            if (Is.defined(startCharacter)) result.startCharacter = startCharacter;
            if (Is.defined(endCharacter)) result.endCharacter = endCharacter;
            if (Is.defined(kind)) result.kind = kind;
            if (Is.defined(collapsedText)) result.collapsedText = collapsedText;
            return result;
        }
        FoldingRange.create = create;
        /**
         * Checks whether the given literal conforms to the {@link FoldingRange} interface.
         */ function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
        }
        FoldingRange.is = is;
    })(FoldingRange || (exports1.FoldingRange = FoldingRange = {}));
    /**
     * The DiagnosticRelatedInformation namespace provides helper functions to work with
     * {@link DiagnosticRelatedInformation} literals.
     */ var DiagnosticRelatedInformation;
    (function(DiagnosticRelatedInformation) {
        /**
         * Creates a new DiagnosticRelatedInformation literal.
         */ function create(location, message) {
            return {
                location: location,
                message: message
            };
        }
        DiagnosticRelatedInformation.create = create;
        /**
         * Checks whether the given literal conforms to the {@link DiagnosticRelatedInformation} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
        }
        DiagnosticRelatedInformation.is = is;
    })(DiagnosticRelatedInformation || (exports1.DiagnosticRelatedInformation = DiagnosticRelatedInformation = {}));
    /**
     * The diagnostic's severity.
     */ var DiagnosticSeverity;
    (function(DiagnosticSeverity) {
        /**
         * Reports an error.
         */ DiagnosticSeverity.Error = 1;
        /**
         * Reports a warning.
         */ DiagnosticSeverity.Warning = 2;
        /**
         * Reports an information.
         */ DiagnosticSeverity.Information = 3;
        /**
         * Reports a hint.
         */ DiagnosticSeverity.Hint = 4;
    })(DiagnosticSeverity || (exports1.DiagnosticSeverity = DiagnosticSeverity = {}));
    /**
     * The diagnostic tags.
     *
     * @since 3.15.0
     */ var DiagnosticTag;
    (function(DiagnosticTag) {
        /**
         * Unused or unnecessary code.
         *
         * Clients are allowed to render diagnostics with this tag faded out instead of having
         * an error squiggle.
         */ DiagnosticTag.Unnecessary = 1;
        /**
         * Deprecated or obsolete code.
         *
         * Clients are allowed to rendered diagnostics with this tag strike through.
         */ DiagnosticTag.Deprecated = 2;
    })(DiagnosticTag || (exports1.DiagnosticTag = DiagnosticTag = {}));
    /**
     * The CodeDescription namespace provides functions to deal with descriptions for diagnostic codes.
     *
     * @since 3.16.0
     */ var CodeDescription;
    (function(CodeDescription) {
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.string(candidate.href);
        }
        CodeDescription.is = is;
    })(CodeDescription || (exports1.CodeDescription = CodeDescription = {}));
    /**
     * The Diagnostic namespace provides helper functions to work with
     * {@link Diagnostic} literals.
     */ var Diagnostic;
    (function(Diagnostic) {
        /**
         * Creates a new Diagnostic literal.
         */ function create(range, message, severity, code, source, relatedInformation) {
            var result = {
                range: range,
                message: message
            };
            if (Is.defined(severity)) result.severity = severity;
            if (Is.defined(code)) result.code = code;
            if (Is.defined(source)) result.source = source;
            if (Is.defined(relatedInformation)) result.relatedInformation = relatedInformation;
            return result;
        }
        Diagnostic.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Diagnostic} interface.
         */ function is(value) {
            var _a;
            var candidate = value;
            return Is.defined(candidate) && Range.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
        }
        Diagnostic.is = is;
    })(Diagnostic || (exports1.Diagnostic = Diagnostic = {}));
    /**
     * The Command namespace provides helper functions to work with
     * {@link Command} literals.
     */ var Command;
    (function(Command) {
        /**
         * Creates a new Command literal.
         */ function create(title, command) {
            var args = [];
            for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
            var result = {
                title: title,
                command: command
            };
            if (Is.defined(args) && args.length > 0) result.arguments = args;
            return result;
        }
        Command.create = create;
        /**
         * Checks whether the given literal conforms to the {@link Command} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
        }
        Command.is = is;
    })(Command || (exports1.Command = Command = {}));
    /**
     * The TextEdit namespace provides helper function to create replace,
     * insert and delete edits more easily.
     */ var TextEdit;
    (function(TextEdit) {
        /**
         * Creates a replace text edit.
         * @param range The range of text to be replaced.
         * @param newText The new text.
         */ function replace(range, newText) {
            return {
                range: range,
                newText: newText
            };
        }
        TextEdit.replace = replace;
        /**
         * Creates an insert text edit.
         * @param position The position to insert the text at.
         * @param newText The text to be inserted.
         */ function insert(position, newText) {
            return {
                range: {
                    start: position,
                    end: position
                },
                newText: newText
            };
        }
        TextEdit.insert = insert;
        /**
         * Creates a delete text edit.
         * @param range The range of text to be deleted.
         */ function del(range) {
            return {
                range: range,
                newText: ''
            };
        }
        TextEdit.del = del;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
        }
        TextEdit.is = is;
    })(TextEdit || (exports1.TextEdit = TextEdit = {}));
    var ChangeAnnotation;
    (function(ChangeAnnotation) {
        function create(label, needsConfirmation, description) {
            var result = {
                label: label
            };
            if (needsConfirmation !== undefined) result.needsConfirmation = needsConfirmation;
            if (description !== undefined) result.description = description;
            return result;
        }
        ChangeAnnotation.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === undefined) && (Is.string(candidate.description) || candidate.description === undefined);
        }
        ChangeAnnotation.is = is;
    })(ChangeAnnotation || (exports1.ChangeAnnotation = ChangeAnnotation = {}));
    var ChangeAnnotationIdentifier;
    (function(ChangeAnnotationIdentifier) {
        function is(value) {
            var candidate = value;
            return Is.string(candidate);
        }
        ChangeAnnotationIdentifier.is = is;
    })(ChangeAnnotationIdentifier || (exports1.ChangeAnnotationIdentifier = ChangeAnnotationIdentifier = {}));
    var AnnotatedTextEdit;
    (function(AnnotatedTextEdit) {
        /**
         * Creates an annotated replace text edit.
         *
         * @param range The range of text to be replaced.
         * @param newText The new text.
         * @param annotation The annotation.
         */ function replace(range, newText, annotation) {
            return {
                range: range,
                newText: newText,
                annotationId: annotation
            };
        }
        AnnotatedTextEdit.replace = replace;
        /**
         * Creates an annotated insert text edit.
         *
         * @param position The position to insert the text at.
         * @param newText The text to be inserted.
         * @param annotation The annotation.
         */ function insert(position, newText, annotation) {
            return {
                range: {
                    start: position,
                    end: position
                },
                newText: newText,
                annotationId: annotation
            };
        }
        AnnotatedTextEdit.insert = insert;
        /**
         * Creates an annotated delete text edit.
         *
         * @param range The range of text to be deleted.
         * @param annotation The annotation.
         */ function del(range, annotation) {
            return {
                range: range,
                newText: '',
                annotationId: annotation
            };
        }
        AnnotatedTextEdit.del = del;
        function is(value) {
            var candidate = value;
            return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        AnnotatedTextEdit.is = is;
    })(AnnotatedTextEdit || (exports1.AnnotatedTextEdit = AnnotatedTextEdit = {}));
    /**
     * The TextDocumentEdit namespace provides helper function to create
     * an edit that manipulates a text document.
     */ var TextDocumentEdit;
    (function(TextDocumentEdit) {
        /**
         * Creates a new `TextDocumentEdit`
         */ function create(textDocument, edits) {
            return {
                textDocument: textDocument,
                edits: edits
            };
        }
        TextDocumentEdit.create = create;
        function is(value) {
            var candidate = value;
            return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
        }
        TextDocumentEdit.is = is;
    })(TextDocumentEdit || (exports1.TextDocumentEdit = TextDocumentEdit = {}));
    var CreateFile;
    (function(CreateFile) {
        function create(uri, options, annotation) {
            var result = {
                kind: 'create',
                uri: uri
            };
            if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) result.options = options;
            if (annotation !== undefined) result.annotationId = annotation;
            return result;
        }
        CreateFile.create = create;
        function is(value) {
            var candidate = value;
            return candidate && candidate.kind === 'create' && Is.string(candidate.uri) && (candidate.options === undefined || (candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        CreateFile.is = is;
    })(CreateFile || (exports1.CreateFile = CreateFile = {}));
    var RenameFile;
    (function(RenameFile) {
        function create(oldUri, newUri, options, annotation) {
            var result = {
                kind: 'rename',
                oldUri: oldUri,
                newUri: newUri
            };
            if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) result.options = options;
            if (annotation !== undefined) result.annotationId = annotation;
            return result;
        }
        RenameFile.create = create;
        function is(value) {
            var candidate = value;
            return candidate && candidate.kind === 'rename' && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === undefined || (candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        RenameFile.is = is;
    })(RenameFile || (exports1.RenameFile = RenameFile = {}));
    var DeleteFile;
    (function(DeleteFile) {
        function create(uri, options, annotation) {
            var result = {
                kind: 'delete',
                uri: uri
            };
            if (options !== undefined && (options.recursive !== undefined || options.ignoreIfNotExists !== undefined)) result.options = options;
            if (annotation !== undefined) result.annotationId = annotation;
            return result;
        }
        DeleteFile.create = create;
        function is(value) {
            var candidate = value;
            return candidate && candidate.kind === 'delete' && Is.string(candidate.uri) && (candidate.options === undefined || (candidate.options.recursive === undefined || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === undefined || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        DeleteFile.is = is;
    })(DeleteFile || (exports1.DeleteFile = DeleteFile = {}));
    var WorkspaceEdit;
    (function(WorkspaceEdit) {
        function is(value) {
            var candidate = value;
            return candidate && (candidate.changes !== undefined || candidate.documentChanges !== undefined) && (candidate.documentChanges === undefined || candidate.documentChanges.every(function(change) {
                if (Is.string(change.kind)) return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
                else return TextDocumentEdit.is(change);
            }));
        }
        WorkspaceEdit.is = is;
    })(WorkspaceEdit || (exports1.WorkspaceEdit = WorkspaceEdit = {}));
    var TextEditChangeImpl = /** @class */ function() {
        function TextEditChangeImpl(edits, changeAnnotations) {
            this.edits = edits;
            this.changeAnnotations = changeAnnotations;
        }
        TextEditChangeImpl.prototype.insert = function(position, newText, annotation) {
            var edit;
            var id;
            if (annotation === undefined) edit = TextEdit.insert(position, newText);
            else if (ChangeAnnotationIdentifier.is(annotation)) {
                id = annotation;
                edit = AnnotatedTextEdit.insert(position, newText, annotation);
            } else {
                this.assertChangeAnnotations(this.changeAnnotations);
                id = this.changeAnnotations.manage(annotation);
                edit = AnnotatedTextEdit.insert(position, newText, id);
            }
            this.edits.push(edit);
            if (id !== undefined) return id;
        };
        TextEditChangeImpl.prototype.replace = function(range, newText, annotation) {
            var edit;
            var id;
            if (annotation === undefined) edit = TextEdit.replace(range, newText);
            else if (ChangeAnnotationIdentifier.is(annotation)) {
                id = annotation;
                edit = AnnotatedTextEdit.replace(range, newText, annotation);
            } else {
                this.assertChangeAnnotations(this.changeAnnotations);
                id = this.changeAnnotations.manage(annotation);
                edit = AnnotatedTextEdit.replace(range, newText, id);
            }
            this.edits.push(edit);
            if (id !== undefined) return id;
        };
        TextEditChangeImpl.prototype.delete = function(range, annotation) {
            var edit;
            var id;
            if (annotation === undefined) edit = TextEdit.del(range);
            else if (ChangeAnnotationIdentifier.is(annotation)) {
                id = annotation;
                edit = AnnotatedTextEdit.del(range, annotation);
            } else {
                this.assertChangeAnnotations(this.changeAnnotations);
                id = this.changeAnnotations.manage(annotation);
                edit = AnnotatedTextEdit.del(range, id);
            }
            this.edits.push(edit);
            if (id !== undefined) return id;
        };
        TextEditChangeImpl.prototype.add = function(edit) {
            this.edits.push(edit);
        };
        TextEditChangeImpl.prototype.all = function() {
            return this.edits;
        };
        TextEditChangeImpl.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
        };
        TextEditChangeImpl.prototype.assertChangeAnnotations = function(value) {
            if (value === undefined) throw new Error("Text edit change is not configured to manage change annotations.");
        };
        return TextEditChangeImpl;
    }();
    /**
     * A helper class
     */ var ChangeAnnotations = /** @class */ function() {
        function ChangeAnnotations(annotations) {
            this._annotations = annotations === undefined ? Object.create(null) : annotations;
            this._counter = 0;
            this._size = 0;
        }
        ChangeAnnotations.prototype.all = function() {
            return this._annotations;
        };
        Object.defineProperty(ChangeAnnotations.prototype, "size", {
            get: function() {
                return this._size;
            },
            enumerable: false,
            configurable: true
        });
        ChangeAnnotations.prototype.manage = function(idOrAnnotation, annotation) {
            var id;
            if (ChangeAnnotationIdentifier.is(idOrAnnotation)) id = idOrAnnotation;
            else {
                id = this.nextId();
                annotation = idOrAnnotation;
            }
            if (this._annotations[id] !== undefined) throw new Error("Id ".concat(id, " is already in use."));
            if (annotation === undefined) throw new Error("No annotation provided for id ".concat(id));
            this._annotations[id] = annotation;
            this._size++;
            return id;
        };
        ChangeAnnotations.prototype.nextId = function() {
            this._counter++;
            return this._counter.toString();
        };
        return ChangeAnnotations;
    }();
    /**
     * A workspace change helps constructing changes to a workspace.
     */ var WorkspaceChange = /** @class */ function() {
        function WorkspaceChange(workspaceEdit) {
            var _this = this;
            this._textEditChanges = Object.create(null);
            if (workspaceEdit !== undefined) {
                this._workspaceEdit = workspaceEdit;
                if (workspaceEdit.documentChanges) {
                    this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                    workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                    workspaceEdit.documentChanges.forEach(function(change) {
                        if (TextDocumentEdit.is(change)) {
                            var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                            _this._textEditChanges[change.textDocument.uri] = textEditChange;
                        }
                    });
                } else if (workspaceEdit.changes) Object.keys(workspaceEdit.changes).forEach(function(key) {
                    var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                    _this._textEditChanges[key] = textEditChange;
                });
            } else this._workspaceEdit = {};
        }
        Object.defineProperty(WorkspaceChange.prototype, "edit", {
            /**
             * Returns the underlying {@link WorkspaceEdit} literal
             * use to be returned from a workspace edit operation like rename.
             */ get: function() {
                this.initDocumentChanges();
                if (this._changeAnnotations !== undefined) {
                    if (this._changeAnnotations.size === 0) this._workspaceEdit.changeAnnotations = undefined;
                    else this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                }
                return this._workspaceEdit;
            },
            enumerable: false,
            configurable: true
        });
        WorkspaceChange.prototype.getTextEditChange = function(key) {
            if (OptionalVersionedTextDocumentIdentifier.is(key)) {
                this.initDocumentChanges();
                if (this._workspaceEdit.documentChanges === undefined) throw new Error('Workspace edit is not configured for document changes.');
                var textDocument = {
                    uri: key.uri,
                    version: key.version
                };
                var result = this._textEditChanges[textDocument.uri];
                if (!result) {
                    var edits = [];
                    var textDocumentEdit = {
                        textDocument: textDocument,
                        edits: edits
                    };
                    this._workspaceEdit.documentChanges.push(textDocumentEdit);
                    result = new TextEditChangeImpl(edits, this._changeAnnotations);
                    this._textEditChanges[textDocument.uri] = result;
                }
                return result;
            } else {
                this.initChanges();
                if (this._workspaceEdit.changes === undefined) throw new Error('Workspace edit is not configured for normal text edit changes.');
                var result = this._textEditChanges[key];
                if (!result) {
                    var edits = [];
                    this._workspaceEdit.changes[key] = edits;
                    result = new TextEditChangeImpl(edits);
                    this._textEditChanges[key] = result;
                }
                return result;
            }
        };
        WorkspaceChange.prototype.initDocumentChanges = function() {
            if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
                this._changeAnnotations = new ChangeAnnotations();
                this._workspaceEdit.documentChanges = [];
                this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
        };
        WorkspaceChange.prototype.initChanges = function() {
            if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) this._workspaceEdit.changes = Object.create(null);
        };
        WorkspaceChange.prototype.createFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) throw new Error('Workspace edit is not configured for document changes.');
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
            else options = optionsOrAnnotation;
            var operation;
            var id;
            if (annotation === undefined) operation = CreateFile.create(uri, options);
            else {
                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
                operation = CreateFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== undefined) return id;
        };
        WorkspaceChange.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) throw new Error('Workspace edit is not configured for document changes.');
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
            else options = optionsOrAnnotation;
            var operation;
            var id;
            if (annotation === undefined) operation = RenameFile.create(oldUri, newUri, options);
            else {
                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
                operation = RenameFile.create(oldUri, newUri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== undefined) return id;
        };
        WorkspaceChange.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) throw new Error('Workspace edit is not configured for document changes.');
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
            else options = optionsOrAnnotation;
            var operation;
            var id;
            if (annotation === undefined) operation = DeleteFile.create(uri, options);
            else {
                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
                operation = DeleteFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== undefined) return id;
        };
        return WorkspaceChange;
    }();
    exports1.WorkspaceChange = WorkspaceChange;
    /**
     * The TextDocumentIdentifier namespace provides helper functions to work with
     * {@link TextDocumentIdentifier} literals.
     */ var TextDocumentIdentifier;
    (function(TextDocumentIdentifier) {
        /**
         * Creates a new TextDocumentIdentifier literal.
         * @param uri The document's uri.
         */ function create(uri) {
            return {
                uri: uri
            };
        }
        TextDocumentIdentifier.create = create;
        /**
         * Checks whether the given literal conforms to the {@link TextDocumentIdentifier} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri);
        }
        TextDocumentIdentifier.is = is;
    })(TextDocumentIdentifier || (exports1.TextDocumentIdentifier = TextDocumentIdentifier = {}));
    /**
     * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
     * {@link VersionedTextDocumentIdentifier} literals.
     */ var VersionedTextDocumentIdentifier;
    (function(VersionedTextDocumentIdentifier) {
        /**
         * Creates a new VersionedTextDocumentIdentifier literal.
         * @param uri The document's uri.
         * @param version The document's version.
         */ function create(uri, version) {
            return {
                uri: uri,
                version: version
            };
        }
        VersionedTextDocumentIdentifier.create = create;
        /**
         * Checks whether the given literal conforms to the {@link VersionedTextDocumentIdentifier} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
        }
        VersionedTextDocumentIdentifier.is = is;
    })(VersionedTextDocumentIdentifier || (exports1.VersionedTextDocumentIdentifier = VersionedTextDocumentIdentifier = {}));
    /**
     * The OptionalVersionedTextDocumentIdentifier namespace provides helper functions to work with
     * {@link OptionalVersionedTextDocumentIdentifier} literals.
     */ var OptionalVersionedTextDocumentIdentifier;
    (function(OptionalVersionedTextDocumentIdentifier) {
        /**
         * Creates a new OptionalVersionedTextDocumentIdentifier literal.
         * @param uri The document's uri.
         * @param version The document's version.
         */ function create(uri, version) {
            return {
                uri: uri,
                version: version
            };
        }
        OptionalVersionedTextDocumentIdentifier.create = create;
        /**
         * Checks whether the given literal conforms to the {@link OptionalVersionedTextDocumentIdentifier} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
        }
        OptionalVersionedTextDocumentIdentifier.is = is;
    })(OptionalVersionedTextDocumentIdentifier || (exports1.OptionalVersionedTextDocumentIdentifier = OptionalVersionedTextDocumentIdentifier = {}));
    /**
     * The TextDocumentItem namespace provides helper functions to work with
     * {@link TextDocumentItem} literals.
     */ var TextDocumentItem;
    (function(TextDocumentItem) {
        /**
         * Creates a new TextDocumentItem literal.
         * @param uri The document's uri.
         * @param languageId The document's language identifier.
         * @param version The document's version number.
         * @param text The document's text.
         */ function create(uri, languageId, version, text) {
            return {
                uri: uri,
                languageId: languageId,
                version: version,
                text: text
            };
        }
        TextDocumentItem.create = create;
        /**
         * Checks whether the given literal conforms to the {@link TextDocumentItem} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
        }
        TextDocumentItem.is = is;
    })(TextDocumentItem || (exports1.TextDocumentItem = TextDocumentItem = {}));
    /**
     * Describes the content type that a client supports in various
     * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
     *
     * Please note that `MarkupKinds` must not start with a `$`. This kinds
     * are reserved for internal usage.
     */ var MarkupKind;
    (function(MarkupKind) {
        /**
         * Plain text is supported as a content format
         */ MarkupKind.PlainText = 'plaintext';
        /**
         * Markdown is supported as a content format
         */ MarkupKind.Markdown = 'markdown';
        /**
         * Checks whether the given value is a value of the {@link MarkupKind} type.
         */ function is(value) {
            var candidate = value;
            return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
        }
        MarkupKind.is = is;
    })(MarkupKind || (exports1.MarkupKind = MarkupKind = {}));
    var MarkupContent;
    (function(MarkupContent) {
        /**
         * Checks whether the given value conforms to the {@link MarkupContent} interface.
         */ function is(value) {
            var candidate = value;
            return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
        }
        MarkupContent.is = is;
    })(MarkupContent || (exports1.MarkupContent = MarkupContent = {}));
    /**
     * The kind of a completion entry.
     */ var CompletionItemKind;
    (function(CompletionItemKind) {
        CompletionItemKind.Text = 1;
        CompletionItemKind.Method = 2;
        CompletionItemKind.Function = 3;
        CompletionItemKind.Constructor = 4;
        CompletionItemKind.Field = 5;
        CompletionItemKind.Variable = 6;
        CompletionItemKind.Class = 7;
        CompletionItemKind.Interface = 8;
        CompletionItemKind.Module = 9;
        CompletionItemKind.Property = 10;
        CompletionItemKind.Unit = 11;
        CompletionItemKind.Value = 12;
        CompletionItemKind.Enum = 13;
        CompletionItemKind.Keyword = 14;
        CompletionItemKind.Snippet = 15;
        CompletionItemKind.Color = 16;
        CompletionItemKind.File = 17;
        CompletionItemKind.Reference = 18;
        CompletionItemKind.Folder = 19;
        CompletionItemKind.EnumMember = 20;
        CompletionItemKind.Constant = 21;
        CompletionItemKind.Struct = 22;
        CompletionItemKind.Event = 23;
        CompletionItemKind.Operator = 24;
        CompletionItemKind.TypeParameter = 25;
    })(CompletionItemKind || (exports1.CompletionItemKind = CompletionItemKind = {}));
    /**
     * Defines whether the insert text in a completion item should be interpreted as
     * plain text or a snippet.
     */ var InsertTextFormat;
    (function(InsertTextFormat) {
        /**
         * The primary text to be inserted is treated as a plain string.
         */ InsertTextFormat.PlainText = 1;
        /**
         * The primary text to be inserted is treated as a snippet.
         *
         * A snippet can define tab stops and placeholders with `$1`, `$2`
         * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
         * the end of the snippet. Placeholders with equal identifiers are linked,
         * that is typing in one will update others too.
         *
         * See also: https://microsoft.github.io/language-server-protocol/specifications/specification-current/#snippet_syntax
         */ InsertTextFormat.Snippet = 2;
    })(InsertTextFormat || (exports1.InsertTextFormat = InsertTextFormat = {}));
    /**
     * Completion item tags are extra annotations that tweak the rendering of a completion
     * item.
     *
     * @since 3.15.0
     */ var CompletionItemTag;
    (function(CompletionItemTag) {
        /**
         * Render a completion as obsolete, usually using a strike-out.
         */ CompletionItemTag.Deprecated = 1;
    })(CompletionItemTag || (exports1.CompletionItemTag = CompletionItemTag = {}));
    /**
     * The InsertReplaceEdit namespace provides functions to deal with insert / replace edits.
     *
     * @since 3.16.0
     */ var InsertReplaceEdit;
    (function(InsertReplaceEdit) {
        /**
         * Creates a new insert / replace edit
         */ function create(newText, insert, replace) {
            return {
                newText: newText,
                insert: insert,
                replace: replace
            };
        }
        InsertReplaceEdit.create = create;
        /**
         * Checks whether the given literal conforms to the {@link InsertReplaceEdit} interface.
         */ function is(value) {
            var candidate = value;
            return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
        }
        InsertReplaceEdit.is = is;
    })(InsertReplaceEdit || (exports1.InsertReplaceEdit = InsertReplaceEdit = {}));
    /**
     * How whitespace and indentation is handled during completion
     * item insertion.
     *
     * @since 3.16.0
     */ var InsertTextMode;
    (function(InsertTextMode) {
        /**
         * The insertion or replace strings is taken as it is. If the
         * value is multi line the lines below the cursor will be
         * inserted using the indentation defined in the string value.
         * The client will not apply any kind of adjustments to the
         * string.
         */ InsertTextMode.asIs = 1;
        /**
         * The editor adjusts leading whitespace of new lines so that
         * they match the indentation up to the cursor of the line for
         * which the item is accepted.
         *
         * Consider a line like this: <2tabs><cursor><3tabs>foo. Accepting a
         * multi line completion item is indented using 2 tabs and all
         * following lines inserted will be indented using 2 tabs as well.
         */ InsertTextMode.adjustIndentation = 2;
    })(InsertTextMode || (exports1.InsertTextMode = InsertTextMode = {}));
    var CompletionItemLabelDetails;
    (function(CompletionItemLabelDetails) {
        function is(value) {
            var candidate = value;
            return candidate && (Is.string(candidate.detail) || candidate.detail === undefined) && (Is.string(candidate.description) || candidate.description === undefined);
        }
        CompletionItemLabelDetails.is = is;
    })(CompletionItemLabelDetails || (exports1.CompletionItemLabelDetails = CompletionItemLabelDetails = {}));
    /**
     * The CompletionItem namespace provides functions to deal with
     * completion items.
     */ var CompletionItem;
    (function(CompletionItem) {
        /**
         * Create a completion item and seed it with a label.
         * @param label The completion item's label
         */ function create(label) {
            return {
                label: label
            };
        }
        CompletionItem.create = create;
    })(CompletionItem || (exports1.CompletionItem = CompletionItem = {}));
    /**
     * The CompletionList namespace provides functions to deal with
     * completion lists.
     */ var CompletionList;
    (function(CompletionList) {
        /**
         * Creates a new completion list.
         *
         * @param items The completion items.
         * @param isIncomplete The list is not complete.
         */ function create(items, isIncomplete) {
            return {
                items: items ? items : [],
                isIncomplete: !!isIncomplete
            };
        }
        CompletionList.create = create;
    })(CompletionList || (exports1.CompletionList = CompletionList = {}));
    var MarkedString;
    (function(MarkedString) {
        /**
         * Creates a marked string from plain text.
         *
         * @param plainText The plain text.
         */ function fromPlainText(plainText) {
            return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&'); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
        }
        MarkedString.fromPlainText = fromPlainText;
        /**
         * Checks whether the given value conforms to the {@link MarkedString} type.
         */ function is(value) {
            var candidate = value;
            return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
        }
        MarkedString.is = is;
    })(MarkedString || (exports1.MarkedString = MarkedString = {}));
    var Hover;
    (function(Hover) {
        /**
         * Checks whether the given value conforms to the {@link Hover} interface.
         */ function is(value) {
            var candidate = value;
            return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === undefined || Range.is(value.range));
        }
        Hover.is = is;
    })(Hover || (exports1.Hover = Hover = {}));
    /**
     * The ParameterInformation namespace provides helper functions to work with
     * {@link ParameterInformation} literals.
     */ var ParameterInformation;
    (function(ParameterInformation) {
        /**
         * Creates a new parameter information literal.
         *
         * @param label A label string.
         * @param documentation A doc string.
         */ function create(label, documentation) {
            return documentation ? {
                label: label,
                documentation: documentation
            } : {
                label: label
            };
        }
        ParameterInformation.create = create;
    })(ParameterInformation || (exports1.ParameterInformation = ParameterInformation = {}));
    /**
     * The SignatureInformation namespace provides helper functions to work with
     * {@link SignatureInformation} literals.
     */ var SignatureInformation;
    (function(SignatureInformation) {
        function create(label, documentation) {
            var parameters = [];
            for(var _i = 2; _i < arguments.length; _i++)parameters[_i - 2] = arguments[_i];
            var result = {
                label: label
            };
            if (Is.defined(documentation)) result.documentation = documentation;
            if (Is.defined(parameters)) result.parameters = parameters;
            else result.parameters = [];
            return result;
        }
        SignatureInformation.create = create;
    })(SignatureInformation || (exports1.SignatureInformation = SignatureInformation = {}));
    /**
     * A document highlight kind.
     */ var DocumentHighlightKind;
    (function(DocumentHighlightKind) {
        /**
         * A textual occurrence.
         */ DocumentHighlightKind.Text = 1;
        /**
         * Read-access of a symbol, like reading a variable.
         */ DocumentHighlightKind.Read = 2;
        /**
         * Write-access of a symbol, like writing to a variable.
         */ DocumentHighlightKind.Write = 3;
    })(DocumentHighlightKind || (exports1.DocumentHighlightKind = DocumentHighlightKind = {}));
    /**
     * DocumentHighlight namespace to provide helper functions to work with
     * {@link DocumentHighlight} literals.
     */ var DocumentHighlight;
    (function(DocumentHighlight) {
        /**
         * Create a DocumentHighlight object.
         * @param range The range the highlight applies to.
         * @param kind The highlight kind
         */ function create(range, kind) {
            var result = {
                range: range
            };
            if (Is.number(kind)) result.kind = kind;
            return result;
        }
        DocumentHighlight.create = create;
    })(DocumentHighlight || (exports1.DocumentHighlight = DocumentHighlight = {}));
    /**
     * A symbol kind.
     */ var SymbolKind;
    (function(SymbolKind) {
        SymbolKind.File = 1;
        SymbolKind.Module = 2;
        SymbolKind.Namespace = 3;
        SymbolKind.Package = 4;
        SymbolKind.Class = 5;
        SymbolKind.Method = 6;
        SymbolKind.Property = 7;
        SymbolKind.Field = 8;
        SymbolKind.Constructor = 9;
        SymbolKind.Enum = 10;
        SymbolKind.Interface = 11;
        SymbolKind.Function = 12;
        SymbolKind.Variable = 13;
        SymbolKind.Constant = 14;
        SymbolKind.String = 15;
        SymbolKind.Number = 16;
        SymbolKind.Boolean = 17;
        SymbolKind.Array = 18;
        SymbolKind.Object = 19;
        SymbolKind.Key = 20;
        SymbolKind.Null = 21;
        SymbolKind.EnumMember = 22;
        SymbolKind.Struct = 23;
        SymbolKind.Event = 24;
        SymbolKind.Operator = 25;
        SymbolKind.TypeParameter = 26;
    })(SymbolKind || (exports1.SymbolKind = SymbolKind = {}));
    /**
     * Symbol tags are extra annotations that tweak the rendering of a symbol.
     *
     * @since 3.16
     */ var SymbolTag;
    (function(SymbolTag) {
        /**
         * Render a symbol as obsolete, usually using a strike-out.
         */ SymbolTag.Deprecated = 1;
    })(SymbolTag || (exports1.SymbolTag = SymbolTag = {}));
    var SymbolInformation;
    (function(SymbolInformation) {
        /**
         * Creates a new symbol information literal.
         *
         * @param name The name of the symbol.
         * @param kind The kind of the symbol.
         * @param range The range of the location of the symbol.
         * @param uri The resource of the location of symbol.
         * @param containerName The name of the symbol containing the symbol.
         */ function create(name, kind, range, uri, containerName) {
            var result = {
                name: name,
                kind: kind,
                location: {
                    uri: uri,
                    range: range
                }
            };
            if (containerName) result.containerName = containerName;
            return result;
        }
        SymbolInformation.create = create;
    })(SymbolInformation || (exports1.SymbolInformation = SymbolInformation = {}));
    var WorkspaceSymbol;
    (function(WorkspaceSymbol) {
        /**
         * Create a new workspace symbol.
         *
         * @param name The name of the symbol.
         * @param kind The kind of the symbol.
         * @param uri The resource of the location of the symbol.
         * @param range An options range of the location.
         * @returns A WorkspaceSymbol.
         */ function create(name, kind, uri, range) {
            return range !== undefined ? {
                name: name,
                kind: kind,
                location: {
                    uri: uri,
                    range: range
                }
            } : {
                name: name,
                kind: kind,
                location: {
                    uri: uri
                }
            };
        }
        WorkspaceSymbol.create = create;
    })(WorkspaceSymbol || (exports1.WorkspaceSymbol = WorkspaceSymbol = {}));
    var DocumentSymbol;
    (function(DocumentSymbol) {
        /**
         * Creates a new symbol information literal.
         *
         * @param name The name of the symbol.
         * @param detail The detail of the symbol.
         * @param kind The kind of the symbol.
         * @param range The range of the symbol.
         * @param selectionRange The selectionRange of the symbol.
         * @param children Children of the symbol.
         */ function create(name, detail, kind, range, selectionRange, children) {
            var result = {
                name: name,
                detail: detail,
                kind: kind,
                range: range,
                selectionRange: selectionRange
            };
            if (children !== undefined) result.children = children;
            return result;
        }
        DocumentSymbol.create = create;
        /**
         * Checks whether the given literal conforms to the {@link DocumentSymbol} interface.
         */ function is(value) {
            var candidate = value;
            return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === undefined || Is.string(candidate.detail)) && (candidate.deprecated === undefined || Is.boolean(candidate.deprecated)) && (candidate.children === undefined || Array.isArray(candidate.children)) && (candidate.tags === undefined || Array.isArray(candidate.tags));
        }
        DocumentSymbol.is = is;
    })(DocumentSymbol || (exports1.DocumentSymbol = DocumentSymbol = {}));
    /**
     * A set of predefined code action kinds
     */ var CodeActionKind;
    (function(CodeActionKind) {
        /**
         * Empty kind.
         */ CodeActionKind.Empty = '';
        /**
         * Base kind for quickfix actions: 'quickfix'
         */ CodeActionKind.QuickFix = 'quickfix';
        /**
         * Base kind for refactoring actions: 'refactor'
         */ CodeActionKind.Refactor = 'refactor';
        /**
         * Base kind for refactoring extraction actions: 'refactor.extract'
         *
         * Example extract actions:
         *
         * - Extract method
         * - Extract function
         * - Extract variable
         * - Extract interface from class
         * - ...
         */ CodeActionKind.RefactorExtract = 'refactor.extract';
        /**
         * Base kind for refactoring inline actions: 'refactor.inline'
         *
         * Example inline actions:
         *
         * - Inline function
         * - Inline variable
         * - Inline constant
         * - ...
         */ CodeActionKind.RefactorInline = 'refactor.inline';
        /**
         * Base kind for refactoring rewrite actions: 'refactor.rewrite'
         *
         * Example rewrite actions:
         *
         * - Convert JavaScript function to class
         * - Add or remove parameter
         * - Encapsulate field
         * - Make method static
         * - Move method to base class
         * - ...
         */ CodeActionKind.RefactorRewrite = 'refactor.rewrite';
        /**
         * Base kind for source actions: `source`
         *
         * Source code actions apply to the entire file.
         */ CodeActionKind.Source = 'source';
        /**
         * Base kind for an organize imports source action: `source.organizeImports`
         */ CodeActionKind.SourceOrganizeImports = 'source.organizeImports';
        /**
         * Base kind for auto-fix source actions: `source.fixAll`.
         *
         * Fix all actions automatically fix errors that have a clear fix that do not require user input.
         * They should not suppress errors or perform unsafe fixes such as generating new types or classes.
         *
         * @since 3.15.0
         */ CodeActionKind.SourceFixAll = 'source.fixAll';
    })(CodeActionKind || (exports1.CodeActionKind = CodeActionKind = {}));
    /**
     * The reason why code actions were requested.
     *
     * @since 3.17.0
     */ var CodeActionTriggerKind;
    (function(CodeActionTriggerKind) {
        /**
         * Code actions were explicitly requested by the user or by an extension.
         */ CodeActionTriggerKind.Invoked = 1;
        /**
         * Code actions were requested automatically.
         *
         * This typically happens when current selection in a file changes, but can
         * also be triggered when file content changes.
         */ CodeActionTriggerKind.Automatic = 2;
    })(CodeActionTriggerKind || (exports1.CodeActionTriggerKind = CodeActionTriggerKind = {}));
    /**
     * The CodeActionContext namespace provides helper functions to work with
     * {@link CodeActionContext} literals.
     */ var CodeActionContext;
    (function(CodeActionContext) {
        /**
         * Creates a new CodeActionContext literal.
         */ function create(diagnostics, only, triggerKind) {
            var result = {
                diagnostics: diagnostics
            };
            if (only !== undefined && only !== null) result.only = only;
            if (triggerKind !== undefined && triggerKind !== null) result.triggerKind = triggerKind;
            return result;
        }
        CodeActionContext.create = create;
        /**
         * Checks whether the given literal conforms to the {@link CodeActionContext} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === undefined || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === undefined || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
        }
        CodeActionContext.is = is;
    })(CodeActionContext || (exports1.CodeActionContext = CodeActionContext = {}));
    var CodeAction;
    (function(CodeAction) {
        function create(title, kindOrCommandOrEdit, kind) {
            var result = {
                title: title
            };
            var checkKind = true;
            if (typeof kindOrCommandOrEdit === 'string') {
                checkKind = false;
                result.kind = kindOrCommandOrEdit;
            } else if (Command.is(kindOrCommandOrEdit)) result.command = kindOrCommandOrEdit;
            else result.edit = kindOrCommandOrEdit;
            if (checkKind && kind !== undefined) result.kind = kind;
            return result;
        }
        CodeAction.create = create;
        function is(value) {
            var candidate = value;
            return candidate && Is.string(candidate.title) && (candidate.diagnostics === undefined || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === undefined || Is.string(candidate.kind)) && (candidate.edit !== undefined || candidate.command !== undefined) && (candidate.command === undefined || Command.is(candidate.command)) && (candidate.isPreferred === undefined || Is.boolean(candidate.isPreferred)) && (candidate.edit === undefined || WorkspaceEdit.is(candidate.edit));
        }
        CodeAction.is = is;
    })(CodeAction || (exports1.CodeAction = CodeAction = {}));
    /**
     * The CodeLens namespace provides helper functions to work with
     * {@link CodeLens} literals.
     */ var CodeLens;
    (function(CodeLens) {
        /**
         * Creates a new CodeLens literal.
         */ function create(range, data) {
            var result = {
                range: range
            };
            if (Is.defined(data)) result.data = data;
            return result;
        }
        CodeLens.create = create;
        /**
         * Checks whether the given literal conforms to the {@link CodeLens} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
        }
        CodeLens.is = is;
    })(CodeLens || (exports1.CodeLens = CodeLens = {}));
    /**
     * The FormattingOptions namespace provides helper functions to work with
     * {@link FormattingOptions} literals.
     */ var FormattingOptions;
    (function(FormattingOptions) {
        /**
         * Creates a new FormattingOptions literal.
         */ function create(tabSize, insertSpaces) {
            return {
                tabSize: tabSize,
                insertSpaces: insertSpaces
            };
        }
        FormattingOptions.create = create;
        /**
         * Checks whether the given literal conforms to the {@link FormattingOptions} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
        }
        FormattingOptions.is = is;
    })(FormattingOptions || (exports1.FormattingOptions = FormattingOptions = {}));
    /**
     * The DocumentLink namespace provides helper functions to work with
     * {@link DocumentLink} literals.
     */ var DocumentLink;
    (function(DocumentLink) {
        /**
         * Creates a new DocumentLink literal.
         */ function create(range, target, data) {
            return {
                range: range,
                target: target,
                data: data
            };
        }
        DocumentLink.create = create;
        /**
         * Checks whether the given literal conforms to the {@link DocumentLink} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
        }
        DocumentLink.is = is;
    })(DocumentLink || (exports1.DocumentLink = DocumentLink = {}));
    /**
     * The SelectionRange namespace provides helper function to work with
     * SelectionRange literals.
     */ var SelectionRange;
    (function(SelectionRange) {
        /**
         * Creates a new SelectionRange
         * @param range the range.
         * @param parent an optional parent.
         */ function create(range, parent) {
            return {
                range: range,
                parent: parent
            };
        }
        SelectionRange.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === undefined || SelectionRange.is(candidate.parent));
        }
        SelectionRange.is = is;
    })(SelectionRange || (exports1.SelectionRange = SelectionRange = {}));
    /**
     * A set of predefined token types. This set is not fixed
     * an clients can specify additional token types via the
     * corresponding client capabilities.
     *
     * @since 3.16.0
     */ var SemanticTokenTypes;
    (function(SemanticTokenTypes) {
        SemanticTokenTypes["namespace"] = "namespace";
        /**
         * Represents a generic type. Acts as a fallback for types which can't be mapped to
         * a specific type like class or enum.
         */ SemanticTokenTypes["type"] = "type";
        SemanticTokenTypes["class"] = "class";
        SemanticTokenTypes["enum"] = "enum";
        SemanticTokenTypes["interface"] = "interface";
        SemanticTokenTypes["struct"] = "struct";
        SemanticTokenTypes["typeParameter"] = "typeParameter";
        SemanticTokenTypes["parameter"] = "parameter";
        SemanticTokenTypes["variable"] = "variable";
        SemanticTokenTypes["property"] = "property";
        SemanticTokenTypes["enumMember"] = "enumMember";
        SemanticTokenTypes["event"] = "event";
        SemanticTokenTypes["function"] = "function";
        SemanticTokenTypes["method"] = "method";
        SemanticTokenTypes["macro"] = "macro";
        SemanticTokenTypes["keyword"] = "keyword";
        SemanticTokenTypes["modifier"] = "modifier";
        SemanticTokenTypes["comment"] = "comment";
        SemanticTokenTypes["string"] = "string";
        SemanticTokenTypes["number"] = "number";
        SemanticTokenTypes["regexp"] = "regexp";
        SemanticTokenTypes["operator"] = "operator";
        /**
         * @since 3.17.0
         */ SemanticTokenTypes["decorator"] = "decorator";
    })(SemanticTokenTypes || (exports1.SemanticTokenTypes = SemanticTokenTypes = {}));
    /**
     * A set of predefined token modifiers. This set is not fixed
     * an clients can specify additional token types via the
     * corresponding client capabilities.
     *
     * @since 3.16.0
     */ var SemanticTokenModifiers;
    (function(SemanticTokenModifiers) {
        SemanticTokenModifiers["declaration"] = "declaration";
        SemanticTokenModifiers["definition"] = "definition";
        SemanticTokenModifiers["readonly"] = "readonly";
        SemanticTokenModifiers["static"] = "static";
        SemanticTokenModifiers["deprecated"] = "deprecated";
        SemanticTokenModifiers["abstract"] = "abstract";
        SemanticTokenModifiers["async"] = "async";
        SemanticTokenModifiers["modification"] = "modification";
        SemanticTokenModifiers["documentation"] = "documentation";
        SemanticTokenModifiers["defaultLibrary"] = "defaultLibrary";
    })(SemanticTokenModifiers || (exports1.SemanticTokenModifiers = SemanticTokenModifiers = {}));
    /**
     * @since 3.16.0
     */ var SemanticTokens;
    (function(SemanticTokens) {
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && (candidate.resultId === undefined || typeof candidate.resultId === 'string') && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === 'number');
        }
        SemanticTokens.is = is;
    })(SemanticTokens || (exports1.SemanticTokens = SemanticTokens = {}));
    /**
     * The InlineValueText namespace provides functions to deal with InlineValueTexts.
     *
     * @since 3.17.0
     */ var InlineValueText;
    (function(InlineValueText) {
        /**
         * Creates a new InlineValueText literal.
         */ function create(range, text) {
            return {
                range: range,
                text: text
            };
        }
        InlineValueText.create = create;
        function is(value) {
            var candidate = value;
            return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
        }
        InlineValueText.is = is;
    })(InlineValueText || (exports1.InlineValueText = InlineValueText = {}));
    /**
     * The InlineValueVariableLookup namespace provides functions to deal with InlineValueVariableLookups.
     *
     * @since 3.17.0
     */ var InlineValueVariableLookup;
    (function(InlineValueVariableLookup) {
        /**
         * Creates a new InlineValueText literal.
         */ function create(range, variableName, caseSensitiveLookup) {
            return {
                range: range,
                variableName: variableName,
                caseSensitiveLookup: caseSensitiveLookup
            };
        }
        InlineValueVariableLookup.create = create;
        function is(value) {
            var candidate = value;
            return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === undefined);
        }
        InlineValueVariableLookup.is = is;
    })(InlineValueVariableLookup || (exports1.InlineValueVariableLookup = InlineValueVariableLookup = {}));
    /**
     * The InlineValueEvaluatableExpression namespace provides functions to deal with InlineValueEvaluatableExpression.
     *
     * @since 3.17.0
     */ var InlineValueEvaluatableExpression;
    (function(InlineValueEvaluatableExpression) {
        /**
         * Creates a new InlineValueEvaluatableExpression literal.
         */ function create(range, expression) {
            return {
                range: range,
                expression: expression
            };
        }
        InlineValueEvaluatableExpression.create = create;
        function is(value) {
            var candidate = value;
            return candidate !== undefined && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === undefined);
        }
        InlineValueEvaluatableExpression.is = is;
    })(InlineValueEvaluatableExpression || (exports1.InlineValueEvaluatableExpression = InlineValueEvaluatableExpression = {}));
    /**
     * The InlineValueContext namespace provides helper functions to work with
     * {@link InlineValueContext} literals.
     *
     * @since 3.17.0
     */ var InlineValueContext;
    (function(InlineValueContext) {
        /**
         * Creates a new InlineValueContext literal.
         */ function create(frameId, stoppedLocation) {
            return {
                frameId: frameId,
                stoppedLocation: stoppedLocation
            };
        }
        InlineValueContext.create = create;
        /**
         * Checks whether the given literal conforms to the {@link InlineValueContext} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range.is(value.stoppedLocation);
        }
        InlineValueContext.is = is;
    })(InlineValueContext || (exports1.InlineValueContext = InlineValueContext = {}));
    /**
     * Inlay hint kinds.
     *
     * @since 3.17.0
     */ var InlayHintKind;
    (function(InlayHintKind) {
        /**
         * An inlay hint that for a type annotation.
         */ InlayHintKind.Type = 1;
        /**
         * An inlay hint that is for a parameter.
         */ InlayHintKind.Parameter = 2;
        function is(value) {
            return value === 1 || value === 2;
        }
        InlayHintKind.is = is;
    })(InlayHintKind || (exports1.InlayHintKind = InlayHintKind = {}));
    var InlayHintLabelPart;
    (function(InlayHintLabelPart) {
        function create(value) {
            return {
                value: value
            };
        }
        InlayHintLabelPart.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === undefined || Location.is(candidate.location)) && (candidate.command === undefined || Command.is(candidate.command));
        }
        InlayHintLabelPart.is = is;
    })(InlayHintLabelPart || (exports1.InlayHintLabelPart = InlayHintLabelPart = {}));
    var InlayHint;
    (function(InlayHint) {
        function create(position, label, kind) {
            var result = {
                position: position,
                label: label
            };
            if (kind !== undefined) result.kind = kind;
            return result;
        }
        InlayHint.create = create;
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === undefined || InlayHintKind.is(candidate.kind)) && candidate.textEdits === undefined || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === undefined || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === undefined || Is.boolean(candidate.paddingRight));
        }
        InlayHint.is = is;
    })(InlayHint || (exports1.InlayHint = InlayHint = {}));
    var StringValue;
    (function(StringValue) {
        function createSnippet(value) {
            return {
                kind: 'snippet',
                value: value
            };
        }
        StringValue.createSnippet = createSnippet;
    })(StringValue || (exports1.StringValue = StringValue = {}));
    var InlineCompletionItem;
    (function(InlineCompletionItem) {
        function create(insertText, filterText, range, command) {
            return {
                insertText: insertText,
                filterText: filterText,
                range: range,
                command: command
            };
        }
        InlineCompletionItem.create = create;
    })(InlineCompletionItem || (exports1.InlineCompletionItem = InlineCompletionItem = {}));
    var InlineCompletionList;
    (function(InlineCompletionList) {
        function create(items) {
            return {
                items: items
            };
        }
        InlineCompletionList.create = create;
    })(InlineCompletionList || (exports1.InlineCompletionList = InlineCompletionList = {}));
    /**
     * Describes how an {@link InlineCompletionItemProvider inline completion provider} was triggered.
     *
     * @since 3.18.0
     * @proposed
     */ var InlineCompletionTriggerKind;
    (function(InlineCompletionTriggerKind) {
        /**
         * Completion was triggered explicitly by a user gesture.
         */ InlineCompletionTriggerKind.Invoked = 0;
        /**
         * Completion was triggered automatically while editing.
         */ InlineCompletionTriggerKind.Automatic = 1;
    })(InlineCompletionTriggerKind || (exports1.InlineCompletionTriggerKind = InlineCompletionTriggerKind = {}));
    var SelectedCompletionInfo;
    (function(SelectedCompletionInfo) {
        function create(range, text) {
            return {
                range: range,
                text: text
            };
        }
        SelectedCompletionInfo.create = create;
    })(SelectedCompletionInfo || (exports1.SelectedCompletionInfo = SelectedCompletionInfo = {}));
    var InlineCompletionContext;
    (function(InlineCompletionContext) {
        function create(triggerKind, selectedCompletionInfo) {
            return {
                triggerKind: triggerKind,
                selectedCompletionInfo: selectedCompletionInfo
            };
        }
        InlineCompletionContext.create = create;
    })(InlineCompletionContext || (exports1.InlineCompletionContext = InlineCompletionContext = {}));
    var WorkspaceFolder;
    (function(WorkspaceFolder) {
        function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
        }
        WorkspaceFolder.is = is;
    })(WorkspaceFolder || (exports1.WorkspaceFolder = WorkspaceFolder = {}));
    exports1.EOL = [
        '\n',
        '\r\n',
        '\r'
    ];
    /**
     * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
     */ var TextDocument;
    (function(TextDocument) {
        /**
         * Creates a new ITextDocument literal from the given uri and content.
         * @param uri The document's uri.
         * @param languageId The document's language Id.
         * @param version The document's version.
         * @param content The document's content.
         */ function create(uri, languageId, version, content) {
            return new FullTextDocument(uri, languageId, version, content);
        }
        TextDocument.create = create;
        /**
         * Checks whether the given literal conforms to the {@link ITextDocument} interface.
         */ function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
        }
        TextDocument.is = is;
        function applyEdits(document, edits) {
            var text = document.getText();
            var sortedEdits = mergeSort(edits, function(a, b) {
                var diff = a.range.start.line - b.range.start.line;
                if (diff === 0) return a.range.start.character - b.range.start.character;
                return diff;
            });
            var lastModifiedOffset = text.length;
            for(var i = sortedEdits.length - 1; i >= 0; i--){
                var e = sortedEdits[i];
                var startOffset = document.offsetAt(e.range.start);
                var endOffset = document.offsetAt(e.range.end);
                if (endOffset <= lastModifiedOffset) text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
                else throw new Error('Overlapping edit');
                lastModifiedOffset = startOffset;
            }
            return text;
        }
        TextDocument.applyEdits = applyEdits;
        function mergeSort(data, compare) {
            if (data.length <= 1) // sorted
            return data;
            var p = data.length / 2 | 0;
            var left = data.slice(0, p);
            var right = data.slice(p);
            mergeSort(left, compare);
            mergeSort(right, compare);
            var leftIdx = 0;
            var rightIdx = 0;
            var i = 0;
            while(leftIdx < left.length && rightIdx < right.length){
                var ret = compare(left[leftIdx], right[rightIdx]);
                if (ret <= 0) // smaller_equal -> take left to preserve order
                data[i++] = left[leftIdx++];
                else // greater -> take right
                data[i++] = right[rightIdx++];
            }
            while(leftIdx < left.length)data[i++] = left[leftIdx++];
            while(rightIdx < right.length)data[i++] = right[rightIdx++];
            return data;
        }
    })(TextDocument || (exports1.TextDocument = TextDocument = {}));
    /**
     * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
     */ var FullTextDocument = /** @class */ function() {
        function FullTextDocument(uri, languageId, version, content) {
            this._uri = uri;
            this._languageId = languageId;
            this._version = version;
            this._content = content;
            this._lineOffsets = undefined;
        }
        Object.defineProperty(FullTextDocument.prototype, "uri", {
            get: function() {
                return this._uri;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FullTextDocument.prototype, "languageId", {
            get: function() {
                return this._languageId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FullTextDocument.prototype, "version", {
            get: function() {
                return this._version;
            },
            enumerable: false,
            configurable: true
        });
        FullTextDocument.prototype.getText = function(range) {
            if (range) {
                var start = this.offsetAt(range.start);
                var end = this.offsetAt(range.end);
                return this._content.substring(start, end);
            }
            return this._content;
        };
        FullTextDocument.prototype.update = function(event, version) {
            this._content = event.text;
            this._version = version;
            this._lineOffsets = undefined;
        };
        FullTextDocument.prototype.getLineOffsets = function() {
            if (this._lineOffsets === undefined) {
                var lineOffsets = [];
                var text = this._content;
                var isLineStart = true;
                for(var i = 0; i < text.length; i++){
                    if (isLineStart) {
                        lineOffsets.push(i);
                        isLineStart = false;
                    }
                    var ch = text.charAt(i);
                    isLineStart = ch === '\r' || ch === '\n';
                    if (ch === '\r' && i + 1 < text.length && text.charAt(i + 1) === '\n') i++;
                }
                if (isLineStart && text.length > 0) lineOffsets.push(text.length);
                this._lineOffsets = lineOffsets;
            }
            return this._lineOffsets;
        };
        FullTextDocument.prototype.positionAt = function(offset) {
            offset = Math.max(Math.min(offset, this._content.length), 0);
            var lineOffsets = this.getLineOffsets();
            var low = 0, high = lineOffsets.length;
            if (high === 0) return Position.create(0, offset);
            while(low < high){
                var mid = Math.floor((low + high) / 2);
                if (lineOffsets[mid] > offset) high = mid;
                else low = mid + 1;
            }
            // low is the least x for which the line offset is larger than the current offset
            // or array.length if no line offset is larger than the current offset
            var line = low - 1;
            return Position.create(line, offset - lineOffsets[line]);
        };
        FullTextDocument.prototype.offsetAt = function(position) {
            var lineOffsets = this.getLineOffsets();
            if (position.line >= lineOffsets.length) return this._content.length;
            else if (position.line < 0) return 0;
            var lineOffset = lineOffsets[position.line];
            var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
            return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
        };
        Object.defineProperty(FullTextDocument.prototype, "lineCount", {
            get: function() {
                return this.getLineOffsets().length;
            },
            enumerable: false,
            configurable: true
        });
        return FullTextDocument;
    }();
    var Is;
    (function(Is) {
        var toString = Object.prototype.toString;
        function defined(value) {
            return typeof value !== 'undefined';
        }
        Is.defined = defined;
        function undefined1(value) {
            return typeof value === 'undefined';
        }
        Is.undefined = undefined1;
        function boolean(value) {
            return value === true || value === false;
        }
        Is.boolean = boolean;
        function string(value) {
            return toString.call(value) === '[object String]';
        }
        Is.string = string;
        function number(value) {
            return toString.call(value) === '[object Number]';
        }
        Is.number = number;
        function numberRange(value, min, max) {
            return toString.call(value) === '[object Number]' && min <= value && value <= max;
        }
        Is.numberRange = numberRange;
        function integer(value) {
            return toString.call(value) === '[object Number]' && -2147483648 <= value && value <= 2147483647;
        }
        Is.integer = integer;
        function uinteger(value) {
            return toString.call(value) === '[object Number]' && 0 <= value && value <= 2147483647;
        }
        Is.uinteger = uinteger;
        function func(value) {
            return toString.call(value) === '[object Function]';
        }
        Is.func = func;
        function objectLiteral(value) {
            // Strictly speaking class instances pass this check as well. Since the LSP
            // doesn't use classes we ignore this for now. If we do we need to add something
            // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
            return value !== null && typeof value === 'object';
        }
        Is.objectLiteral = objectLiteral;
        function typedArray(value, check) {
            return Array.isArray(value) && value.every(check);
        }
        Is.typedArray = typedArray;
    })(Is || (Is = {}));
});


var $20f51f7aa637c181$exports = {};
"use strict";
Object.defineProperty($20f51f7aa637c181$exports, "__esModule", {
    value: true
});
$20f51f7aa637c181$exports.Line = void 0;
class $20f51f7aa637c181$var$Line {
    constructor(document, range){
        this.document = document;
        this.range = range;
    }
    getRange() {
        return this.range;
    }
    getTextContent() {
        return this.document.getText().substring(this.document.offsetAt(this.range.start), this.document.offsetAt(this.range.end));
    }
    isAfter(line) {
        return this.range.start.line > line.range.start.line;
    }
    isBefore(line) {
        return this.range.start.line < line;
    }
}
$20f51f7aa637c181$exports.Line = $20f51f7aa637c181$var$Line;


var $bbec610f07beb4be$exports = {};
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */ 'use strict';
Object.defineProperty($bbec610f07beb4be$exports, "__esModule", {
    value: true
});
$bbec610f07beb4be$exports.Util = void 0;
class $bbec610f07beb4be$var$Util {
    static isUTF8BOM(char) {
        const uintArray = Uint8Array.from(Buffer.from(char, "UTF-8"));
        return uintArray[0] === 0xEF && uintArray[1] == 0xBB && uintArray[2] == 0xBF;
    }
    static isWhitespace(char) {
        return char === ' ' || char === '\t' || $bbec610f07beb4be$var$Util.isNewline(char);
    }
    static isNewline(char) {
        return char === '\r' || char === '\n';
    }
    static findLeadingNonWhitespace(content, escapeChar) {
        whitespaceCheck: for(let i = 0; i < content.length; i++)switch(content.charAt(i)){
            case ' ':
            case '\t':
                continue;
            case escapeChar:
                escapeCheck: for(let j = i + 1; j < content.length; j++)switch(content.charAt(j)){
                    case ' ':
                    case '\t':
                        continue;
                    case '\r':
                        // offset one more for \r\n
                        i = j + 1;
                        continue whitespaceCheck;
                    case '\n':
                        i = j;
                        continue whitespaceCheck;
                    default:
                        break escapeCheck;
                }
                // found an escape character and then reached EOF
                return -1;
            default:
                return i;
        }
        // only possible if the content is the empty string
        return -1;
    }
    /**
     * Determines if the given position is contained within the given range.
     *
     * @param position the position to check
     * @param range the range to see if the position is inside of
     */ static isInsideRange(position, range) {
        if (range.start.line === range.end.line) return range.start.line === position.line && range.start.character <= position.character && position.character <= range.end.character;
        else if (range.start.line === position.line) return range.start.character <= position.character;
        else if (range.end.line === position.line) return position.character <= range.end.character;
        return range.start.line < position.line && position.line < range.end.line;
    }
    static parseHeredocName(value) {
        value = value.substring(2);
        if (value.charAt(0) === '-') value = value.substring(1);
        if (value.charAt(0) === '"') {
            if (value.charAt(value.length - 1) !== '"') return null;
            value = value.substring(1, value.length - 1);
        }
        if (value.charAt(0) === '\'') {
            if (value.charAt(value.length - 1) !== '\'') return null;
            value = value.substring(1, value.length - 1);
        }
        if (value.charAt(0) === "<") return null;
        return value;
    }
}
$bbec610f07beb4be$exports.Util = $bbec610f07beb4be$var$Util;


class $56b05761038f14db$var$Comment extends $20f51f7aa637c181$exports.Line {
    constructor(document, range){
        super(document, range);
    }
    toString() {
        const content = this.getContent();
        if (content) return "# " + content;
        return "#";
    }
    /**
     * Returns the content of this comment. This excludes leading and
     * trailing whitespace as well as the # symbol. If the comment only
     * consists of whitespace, the empty string will be returned.
     */ getContent() {
        let range = this.getContentRange();
        if (range === null) return "";
        return this.document.getText().substring(this.document.offsetAt(range.start), this.document.offsetAt(range.end));
    }
    /**
     * Returns a range that includes the content of the comment
     * excluding any leading and trailing whitespace as well as the #
     * symbol. May return null if the comment only consists of whitespace
     * characters.
     */ getContentRange() {
        let range = this.getRange();
        const startOffset = this.document.offsetAt(range.start);
        let raw = this.document.getText().substring(startOffset, this.document.offsetAt(range.end));
        let start = -1;
        let end = -1;
        // skip the first # symbol
        for(let i = 1; i < raw.length; i++)if (!$bbec610f07beb4be$exports.Util.isWhitespace(raw.charAt(i))) {
            start = i;
            break;
        }
        if (start === -1) return null;
        // go backwards up to the first # symbol
        for(let i = raw.length - 1; i >= 1; i--)if (!$bbec610f07beb4be$exports.Util.isWhitespace(raw.charAt(i))) {
            end = i + 1;
            break;
        }
        return $06cc642bc3981461$exports.Range.create(this.document.positionAt(startOffset + start), this.document.positionAt(startOffset + end));
    }
}
$56b05761038f14db$exports.Comment = $56b05761038f14db$var$Comment;


Object.defineProperty($54b0c2f7fc5ba86a$exports, "Comment", {
    enumerable: true,
    get: function() {
        return $56b05761038f14db$exports.Comment;
    }
});
var $256398e441c094f1$exports = {};
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */ 'use strict';
Object.defineProperty($256398e441c094f1$exports, "__esModule", {
    value: true
});
$256398e441c094f1$exports.Parser = void 0;
var $af5dbdd39a2d358f$exports = {};
var $af5dbdd39a2d358f$var$__spreadArray = $af5dbdd39a2d358f$exports && $af5dbdd39a2d358f$exports.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
(function(factory) {
    if (typeof $af5dbdd39a2d358f$exports === "object") {
        var v = factory(undefined, $af5dbdd39a2d358f$exports);
        if (v !== undefined) $af5dbdd39a2d358f$exports = v;
    } else if (typeof define === "function" && define.amd) define([
        "require",
        "exports"
    ], factory);
})(function(require1, exports1) {
    /* --------------------------------------------------------------------------------------------
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     * ------------------------------------------------------------------------------------------ */ 'use strict';
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
    exports1.TextDocument = void 0;
    var FullTextDocument = /** @class */ function() {
        function FullTextDocument(uri, languageId, version, content) {
            this._uri = uri;
            this._languageId = languageId;
            this._version = version;
            this._content = content;
            this._lineOffsets = undefined;
        }
        Object.defineProperty(FullTextDocument.prototype, "uri", {
            get: function() {
                return this._uri;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FullTextDocument.prototype, "languageId", {
            get: function() {
                return this._languageId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FullTextDocument.prototype, "version", {
            get: function() {
                return this._version;
            },
            enumerable: false,
            configurable: true
        });
        FullTextDocument.prototype.getText = function(range) {
            if (range) {
                var start = this.offsetAt(range.start);
                var end = this.offsetAt(range.end);
                return this._content.substring(start, end);
            }
            return this._content;
        };
        FullTextDocument.prototype.update = function(changes, version) {
            for(var _i = 0, changes_1 = changes; _i < changes_1.length; _i++){
                var change = changes_1[_i];
                if (FullTextDocument.isIncremental(change)) {
                    // makes sure start is before end
                    var range = getWellformedRange(change.range);
                    // update content
                    var startOffset = this.offsetAt(range.start);
                    var endOffset = this.offsetAt(range.end);
                    this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
                    // update the offsets
                    var startLine = Math.max(range.start.line, 0);
                    var endLine = Math.max(range.end.line, 0);
                    var lineOffsets = this._lineOffsets;
                    var addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
                    if (endLine - startLine === addedLineOffsets.length) for(var i = 0, len = addedLineOffsets.length; i < len; i++)lineOffsets[i + startLine + 1] = addedLineOffsets[i];
                    else if (addedLineOffsets.length < 10000) lineOffsets.splice.apply(lineOffsets, $af5dbdd39a2d358f$var$__spreadArray([
                        startLine + 1,
                        endLine - startLine
                    ], addedLineOffsets, false));
                    else this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
                    var diff = change.text.length - (endOffset - startOffset);
                    if (diff !== 0) for(var i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++)lineOffsets[i] = lineOffsets[i] + diff;
                } else if (FullTextDocument.isFull(change)) {
                    this._content = change.text;
                    this._lineOffsets = undefined;
                } else throw new Error('Unknown change event received');
            }
            this._version = version;
        };
        FullTextDocument.prototype.getLineOffsets = function() {
            if (this._lineOffsets === undefined) this._lineOffsets = computeLineOffsets(this._content, true);
            return this._lineOffsets;
        };
        FullTextDocument.prototype.positionAt = function(offset) {
            offset = Math.max(Math.min(offset, this._content.length), 0);
            var lineOffsets = this.getLineOffsets();
            var low = 0, high = lineOffsets.length;
            if (high === 0) return {
                line: 0,
                character: offset
            };
            while(low < high){
                var mid = Math.floor((low + high) / 2);
                if (lineOffsets[mid] > offset) high = mid;
                else low = mid + 1;
            }
            // low is the least x for which the line offset is larger than the current offset
            // or array.length if no line offset is larger than the current offset
            var line = low - 1;
            offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
            return {
                line: line,
                character: offset - lineOffsets[line]
            };
        };
        FullTextDocument.prototype.offsetAt = function(position) {
            var lineOffsets = this.getLineOffsets();
            if (position.line >= lineOffsets.length) return this._content.length;
            else if (position.line < 0) return 0;
            var lineOffset = lineOffsets[position.line];
            if (position.character <= 0) return lineOffset;
            var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
            var offset = Math.min(lineOffset + position.character, nextLineOffset);
            return this.ensureBeforeEOL(offset, lineOffset);
        };
        FullTextDocument.prototype.ensureBeforeEOL = function(offset, lineOffset) {
            while(offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1)))offset--;
            return offset;
        };
        Object.defineProperty(FullTextDocument.prototype, "lineCount", {
            get: function() {
                return this.getLineOffsets().length;
            },
            enumerable: false,
            configurable: true
        });
        FullTextDocument.isIncremental = function(event) {
            var candidate = event;
            return candidate !== undefined && candidate !== null && typeof candidate.text === 'string' && candidate.range !== undefined && (candidate.rangeLength === undefined || typeof candidate.rangeLength === 'number');
        };
        FullTextDocument.isFull = function(event) {
            var candidate = event;
            return candidate !== undefined && candidate !== null && typeof candidate.text === 'string' && candidate.range === undefined && candidate.rangeLength === undefined;
        };
        return FullTextDocument;
    }();
    var TextDocument;
    (function(TextDocument) {
        /**
         * Creates a new text document.
         *
         * @param uri The document's uri.
         * @param languageId  The document's language Id.
         * @param version The document's initial version number.
         * @param content The document's content.
         */ function create(uri, languageId, version, content) {
            return new FullTextDocument(uri, languageId, version, content);
        }
        TextDocument.create = create;
        /**
         * Updates a TextDocument by modifying its content.
         *
         * @param document the document to update. Only documents created by TextDocument.create are valid inputs.
         * @param changes the changes to apply to the document.
         * @param version the changes version for the document.
         * @returns The updated TextDocument. Note: That's the same document instance passed in as first parameter.
         *
         */ function update(document, changes, version) {
            if (document instanceof FullTextDocument) {
                document.update(changes, version);
                return document;
            } else throw new Error('TextDocument.update: document must be created by TextDocument.create');
        }
        TextDocument.update = update;
        function applyEdits(document, edits) {
            var text = document.getText();
            var sortedEdits = mergeSort(edits.map(getWellformedEdit), function(a, b) {
                var diff = a.range.start.line - b.range.start.line;
                if (diff === 0) return a.range.start.character - b.range.start.character;
                return diff;
            });
            var lastModifiedOffset = 0;
            var spans = [];
            for(var _i = 0, sortedEdits_1 = sortedEdits; _i < sortedEdits_1.length; _i++){
                var e = sortedEdits_1[_i];
                var startOffset = document.offsetAt(e.range.start);
                if (startOffset < lastModifiedOffset) throw new Error('Overlapping edit');
                else if (startOffset > lastModifiedOffset) spans.push(text.substring(lastModifiedOffset, startOffset));
                if (e.newText.length) spans.push(e.newText);
                lastModifiedOffset = document.offsetAt(e.range.end);
            }
            spans.push(text.substr(lastModifiedOffset));
            return spans.join('');
        }
        TextDocument.applyEdits = applyEdits;
    })(TextDocument || (exports1.TextDocument = TextDocument = {}));
    function mergeSort(data, compare) {
        if (data.length <= 1) // sorted
        return data;
        var p = data.length / 2 | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while(leftIdx < left.length && rightIdx < right.length){
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) // smaller_equal -> take left to preserve order
            data[i++] = left[leftIdx++];
            else // greater -> take right
            data[i++] = right[rightIdx++];
        }
        while(leftIdx < left.length)data[i++] = left[leftIdx++];
        while(rightIdx < right.length)data[i++] = right[rightIdx++];
        return data;
    }
    function computeLineOffsets(text, isAtLineStart, textOffset) {
        if (textOffset === void 0) textOffset = 0;
        var result = isAtLineStart ? [
            textOffset
        ] : [];
        for(var i = 0; i < text.length; i++){
            var ch = text.charCodeAt(i);
            if (isEOL(ch)) {
                if (ch === 13 /* CharCode.CarriageReturn */  && i + 1 < text.length && text.charCodeAt(i + 1) === 10 /* CharCode.LineFeed */ ) i++;
                result.push(textOffset + i + 1);
            }
        }
        return result;
    }
    function isEOL(char) {
        return char === 13 /* CharCode.CarriageReturn */  || char === 10 /* CharCode.LineFeed */ ;
    }
    function getWellformedRange(range) {
        var start = range.start;
        var end = range.end;
        if (start.line > end.line || start.line === end.line && start.character > end.character) return {
            start: end,
            end: start
        };
        return range;
    }
    function getWellformedEdit(textEdit) {
        var range = getWellformedRange(textEdit.range);
        if (range !== textEdit.range) return {
            newText: textEdit.newText,
            range: range
        };
        return textEdit;
    }
});




var $68331fc9b733e06e$exports = {};
"use strict";
Object.defineProperty($68331fc9b733e06e$exports, "__esModule", {
    value: true
});
$68331fc9b733e06e$exports.ParserDirective = void 0;


class $68331fc9b733e06e$var$ParserDirective extends $20f51f7aa637c181$exports.Line {
    constructor(document, range, nameRange, valueRange){
        super(document, range);
        this.nameRange = nameRange;
        this.valueRange = valueRange;
    }
    toString() {
        return "# " + this.getName() + '=' + this.getValue();
    }
    getNameRange() {
        return this.nameRange;
    }
    getValueRange() {
        return this.valueRange;
    }
    getName() {
        return this.document.getText().substring(this.document.offsetAt(this.nameRange.start), this.document.offsetAt(this.nameRange.end));
    }
    getValue() {
        return this.document.getText().substring(this.document.offsetAt(this.valueRange.start), this.document.offsetAt(this.valueRange.end));
    }
    getDirective() {
        const directive = $54b0c2f7fc5ba86a$exports.Directive[this.getName().toLowerCase()];
        return directive === undefined ? null : directive;
    }
}
$68331fc9b733e06e$exports.ParserDirective = $68331fc9b733e06e$var$ParserDirective;


var $dbcf927cc6c66108$exports = {};
"use strict";
Object.defineProperty($dbcf927cc6c66108$exports, "__esModule", {
    value: true
});
$dbcf927cc6c66108$exports.Instruction = void 0;




var $cb038d86fd1b3cbb$exports = {};
"use strict";
Object.defineProperty($cb038d86fd1b3cbb$exports, "__esModule", {
    value: true
});
$cb038d86fd1b3cbb$exports.Heredoc = void 0;
/**
 * Heredoc represents a here-document that has been embedded in a
 * Dockerfile.
 *
 * This API is experimental and subject to change.
 */ class $cb038d86fd1b3cbb$var$Heredoc {
    constructor(startRange, name, nameRange, contentRange, endRange){
        this.startRange = startRange;
        this.name = name;
        this.nameRange = nameRange;
        this.contentRange = contentRange;
        this.endRange = endRange;
    }
    /**
     * Returns the name of the here-document.
     *
     * This API is experimental and subject to change.
     */ getName() {
        return this.name;
    }
    /**
     * Returns the range of the start operator and the name. If the
     * here-document is initialized with <<EOT then the start range would
     * encompass all five characters.
     *
     * This API is experimental and subject to change.
     */ getStartRange() {
        return this.startRange;
    }
    /**
     * Returns the range of this here-document's name that is declared at
     * the beginning of the here-document with the operator. If the
     * here-document is initialized with <<EOT then the name range would
     * encompass the latter three "EOT" characters.
     *
     * This API is experimental and subject to change.
     */ getNameRange() {
        return this.nameRange;
    }
    /**
     * Returns the range of the content of this here-document. This may
     * be null if the here-document has no content because:
     * - the start range is the only thing that was declared
     * - the end range was declared immediately and there is no content
     *
     * This API is experimental and subject to change.
     */ getContentRange() {
        return this.contentRange;
    }
    /**
     * Returns the range of the here-document's name on a line that
     * represents the end of the here-document.
     *
     * This API is experimental and subject to change.
     */ getDelimiterRange() {
        return this.endRange;
    }
}
$cb038d86fd1b3cbb$exports.Heredoc = $cb038d86fd1b3cbb$var$Heredoc;


var $5dece0b9c7342528$exports = {};
"use strict";
Object.defineProperty($5dece0b9c7342528$exports, "__esModule", {
    value: true
});
$5dece0b9c7342528$exports.Variable = void 0;
class $5dece0b9c7342528$var$Variable {
    constructor(name, nameRange, range, modifier, modifierRange, substitutionParameter, substitutionRange, defined, buildVariable, stringValue){
        this.name = name;
        this.nameRange = nameRange;
        this.range = range;
        this.modifier = modifier;
        this.modifierRange = modifierRange;
        this.substitutionParameter = substitutionParameter;
        this.substitutionRange = substitutionRange;
        this.defined = defined;
        this.buildVariable = buildVariable;
        this.stringValue = stringValue;
    }
    toString() {
        return this.stringValue;
    }
    getName() {
        return this.name;
    }
    getNameRange() {
        return this.nameRange;
    }
    /**
     * Returns the range of the entire variable. This includes the symbols for
     * the declaration of the variable such as the $, {, and } symbols.
     *
     * @return the range in the document that this variable encompasses in its
     *         entirety
     */ getRange() {
        return this.range;
    }
    /**
     * Returns the modifier character that has been set for
     * specifying how this variable should be expanded and resolved.
     * If this variable is ${variable:+value} then the modifier
     * character is '+'. Will be the empty string if the variable is
     * declared as ${variable:}. Otherwise, will be null if this
     * variable will not use variable substitution at all (such as
     * ${variable} or $variable).
     *
     * @return this variable's modifier character, or the empty
     *         string if it does not have one, or null if this
     *         variable will not use variable substitution
     */ getModifier() {
        return this.modifier;
    }
    getModifierRange() {
        return this.modifierRange;
    }
    /**
     * Returns the parameter that will be used for substitution if
     * this variable uses modifiers to define how its value should be
     * resolved. If this variable is ${variable:+value} then the
     * substitution value will be 'value'. Will be the empty string
     * if the variable is declared as ${variable:+} or some other
     * variant where the only thing that follows the modifier
     * character (excluding considerations of escape characters and
     * so on) is the variable's closing bracket. May be null if this
     * variable does not have a modifier character defined (such as
     * ${variable} or $variable).
     *
     * @return this variable's substitution parameter, or the empty
     *         string if it does not have one, or null if there is
     *         not one defined
     */ getSubstitutionParameter() {
        return this.substitutionParameter;
    }
    getSubstitutionRange() {
        return this.substitutionRange;
    }
    /**
     * Returns whether this variable has been defined or not.
     *
     * @return true if this variable has been defined, false otherwise
     */ isDefined() {
        return this.defined;
    }
    isBuildVariable() {
        return this.buildVariable === true;
    }
    isEnvironmentVariable() {
        return this.buildVariable === false;
    }
}
$5dece0b9c7342528$exports.Variable = $5dece0b9c7342528$var$Variable;



class $dbcf927cc6c66108$var$Instruction extends $20f51f7aa637c181$exports.Line {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range);
        this.dockerfile = dockerfile;
        this.escapeChar = escapeChar;
        this.instruction = instruction;
        this.instructionRange = instructionRange;
    }
    toString() {
        let value = this.getKeyword();
        for (let arg of this.getRawArguments()){
            value += ' ';
            value += arg.getValue();
        }
        return value;
    }
    getRangeContent(range) {
        if (range === null) return null;
        return this.document.getText().substring(this.document.offsetAt(range.start), this.document.offsetAt(range.end));
    }
    getInstructionRange() {
        return this.instructionRange;
    }
    getInstruction() {
        return this.instruction;
    }
    getKeyword() {
        return this.getInstruction().toUpperCase();
    }
    getArgumentsRange() {
        let args = this.getArguments();
        if (args.length === 0) return null;
        return $06cc642bc3981461$exports.Range.create(args[0].getRange().start, args[args.length - 1].getRange().end);
    }
    getArgumentsRanges() {
        let args = this.getArguments();
        if (args.length === 0) return [];
        if (args[0].getRange().start.line === args[args.length - 1].getRange().end.line) return [
            $06cc642bc3981461$exports.Range.create(args[0].getRange().start, args[args.length - 1].getRange().end)
        ];
        let ranges = [];
        let end = -1;
        let startPosition = args[0].getRange().start;
        let range = this.getInstructionRange();
        let extra = this.document.offsetAt(startPosition) - this.document.offsetAt(range.start);
        let content = this.getTextContent();
        let fullArgs = content.substring(extra, this.document.offsetAt(args[args.length - 1].getRange().end) - this.document.offsetAt(range.start));
        let offset = this.document.offsetAt(range.start) + extra;
        let start = false;
        let comment = false;
        for(let i = 0; i < fullArgs.length; i++){
            let char = fullArgs.charAt(i);
            if (char === this.escapeChar) {
                let next = fullArgs.charAt(i + 1);
                if (next === ' ' || next === '\t') whitespaceCheck: for(let j = i + 2; j < fullArgs.length; j++)switch(fullArgs.charAt(j)){
                    case ' ':
                    case '\t':
                        continue;
                    case '\r':
                        j++;
                    case '\n':
                        if (startPosition !== null) ranges.push($06cc642bc3981461$exports.Range.create(startPosition, this.document.positionAt(offset + end + 1)));
                        startPosition = null;
                        start = true;
                        comment = false;
                        i = j;
                        break whitespaceCheck;
                    default:
                        break whitespaceCheck;
                }
                else if (next === '\r') {
                    if (startPosition !== null) {
                        ranges.push($06cc642bc3981461$exports.Range.create(startPosition, this.document.positionAt(offset + end + 1)));
                        startPosition = null;
                    }
                    start = true;
                    comment = false;
                    i += 2;
                } else if (next === '\n') {
                    if (startPosition !== null) ranges.push($06cc642bc3981461$exports.Range.create(startPosition, this.document.positionAt(offset + end + 1)));
                    startPosition = null;
                    start = true;
                    comment = false;
                    i++;
                } else i++;
            } else if ($bbec610f07beb4be$exports.Util.isNewline(char)) {
                if (comment) {
                    startPosition = null;
                    start = true;
                    comment = false;
                }
            } else if (!comment) {
                if (startPosition === null) {
                    if (char === '#') {
                        comment = true;
                        continue;
                    }
                    let position = this.document.positionAt(offset + i);
                    if (position.character !== 0) startPosition = $06cc642bc3981461$exports.Position.create(position.line, 0);
                }
                end = i;
            }
        }
        if (startPosition === null) // should only happen if the last argument is on its own line with
        // no leading whitespace
        ranges.push($06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + end), this.document.positionAt(offset + end + 1)));
        else ranges.push($06cc642bc3981461$exports.Range.create(startPosition, this.document.positionAt(offset + end + 1)));
        return ranges;
    }
    getRawArgumentsContent() {
        let args = this.getArguments();
        if (args.length === 0) return null;
        return this.getRangeContent($06cc642bc3981461$exports.Range.create(args[0].getRange().start, args[args.length - 1].getRange().end));
    }
    getArgumentsContent() {
        let args = this.getArguments();
        if (args.length === 0) return null;
        let content = "";
        let ranges = this.getArgumentsRanges();
        let documentText = this.document.getText();
        for (let range of ranges)content += documentText.substring(this.document.offsetAt(range.start), this.document.offsetAt(range.end));
        return content;
    }
    getArguments() {
        return this.getRawArguments();
    }
    getRawArguments() {
        let args = [];
        let range = this.getInstructionRange();
        let extra = this.document.offsetAt(range.end) - this.document.offsetAt(range.start);
        let content = this.getTextContent();
        let fullArgs = content.substring(extra);
        let offset = this.document.offsetAt(range.start) + extra;
        let start = false;
        let comment = false;
        let found = -1;
        // determines whether the parser has found a space or tab
        // whitespace character that's a part of an escaped newline sequence
        let escapedWhitespaceDetected = false;
        // determines if the parser is currently in an escaped newline sequence
        let escaping = false;
        let escapeMarker = -1;
        let escapedArg = "";
        for(let i = 0; i < fullArgs.length; i++){
            let char = fullArgs.charAt(i);
            if ($bbec610f07beb4be$exports.Util.isWhitespace(char)) {
                if (escaping) {
                    escapedWhitespaceDetected = true;
                    if ($bbec610f07beb4be$exports.Util.isNewline(char)) {
                        // reached a newline, any previously
                        // detected whitespace should be ignored
                        escapedWhitespaceDetected = false;
                        if (comment) {
                            // reached a newline, no longer in a comment
                            comment = false;
                            start = true;
                        }
                    }
                    continue;
                } else if (found !== -1) {
                    if (escapeMarker === -1) args.push(new $fd8464c2f2e17cdd$exports.Argument(escapedArg, $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + found), this.document.positionAt(offset + i))));
                    else args.push(new $fd8464c2f2e17cdd$exports.Argument(escapedArg, $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + found), this.document.positionAt(offset + escapeMarker))));
                    escapeMarker = -1;
                    escapedArg = "";
                    found = -1;
                }
            } else if (char === this.escapeChar) {
                let next = fullArgs.charAt(i + 1);
                if (next === ' ' || next === '\t') whitespaceCheck: for(let j = i + 2; j < fullArgs.length; j++){
                    let newlineCheck = fullArgs.charAt(j);
                    switch(newlineCheck){
                        case ' ':
                        case '\t':
                            continue;
                        case '\r':
                            j++;
                        case '\n':
                            comment = false;
                            escaping = true;
                            start = true;
                            if (found !== -1) escapeMarker = i;
                            i = j;
                            break whitespaceCheck;
                        default:
                            escapeMarker = i;
                            if (found === -1) i = j - 1;
                            break whitespaceCheck;
                    }
                }
                else if (next === '\r') {
                    comment = false;
                    escaping = true;
                    start = true;
                    if (found !== -1 && escapeMarker === -1) escapeMarker = i;
                    i += 2;
                } else if (next === '\n') {
                    comment = false;
                    escaping = true;
                    start = true;
                    if (found !== -1 && escapeMarker === -1) escapeMarker = i;
                    i++;
                } else {
                    if (escapedWhitespaceDetected && escapeMarker !== -1) {
                        args.push(new $fd8464c2f2e17cdd$exports.Argument(escapedArg, $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + found), this.document.positionAt(offset + escapeMarker))));
                        escapedArg = "";
                        found = -1;
                    }
                    escapeMarker = -1;
                    escapedWhitespaceDetected = false;
                    escaping = false;
                    if (next === '$') escapedArg = escapedArg + char + next;
                    else if (next === '') break;
                    else escapedArg = escapedArg + next;
                    if (found === -1) found = i;
                    i++;
                }
            } else if (!comment) {
                if (start && char === '#') comment = true;
                else {
                    if (escapedWhitespaceDetected && escapeMarker !== -1) {
                        args.push(new $fd8464c2f2e17cdd$exports.Argument(escapedArg, $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + found), this.document.positionAt(offset + escapeMarker))));
                        escapedArg = "";
                        found = -1;
                    }
                    escapedWhitespaceDetected = false;
                    escaping = false;
                    escapeMarker = -1;
                    escapedArg = escapedArg + char;
                    if (found === -1) found = i;
                }
                // non-whitespace character detected, reset
                start = false;
            }
        }
        if (found !== -1) {
            if (escapeMarker === -1) args.push(new $fd8464c2f2e17cdd$exports.Argument(escapedArg, $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + found), this.document.positionAt(offset + fullArgs.length))));
            else args.push(new $fd8464c2f2e17cdd$exports.Argument(escapedArg, $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + found), this.document.positionAt(offset + escapeMarker))));
        }
        return args;
    }
    getExpandedArguments() {
        let args = this.getArguments();
        for(let i = 0; i < args.length; i++){
            const argRange = args[i].getRange();
            let offset = this.document.offsetAt(argRange.start);
            const variables = this.parseVariables(offset, args[i].getValue());
            const swaps = [];
            let requiresExpansion = false;
            for (let variable of variables){
                const value = this.dockerfile.resolveVariable(variable.getName(), variable.getNameRange().start.line);
                swaps.push(value);
                requiresExpansion = requiresExpansion || value !== undefined;
            }
            if (requiresExpansion) {
                let expanded = "";
                for(let j = 0; j < swaps.length; j++){
                    const variableRange = variables[j].getRange();
                    const start = this.document.offsetAt(variableRange.start);
                    const end = this.document.offsetAt(variableRange.end);
                    if (swaps[j]) {
                        // replace variable with its resolved value
                        expanded += this.document.getText().substring(offset, start);
                        expanded += swaps[j];
                        offset = end;
                    } else {
                        expanded += this.document.getText().substring(offset, end);
                        offset = end;
                    }
                }
                const argEnd = this.document.offsetAt(argRange.end);
                if (argEnd !== offset) // if the variable's range doesn't match the argument,
                // append the remaining text
                expanded += this.document.getText().substring(offset, argEnd);
                args[i] = new $fd8464c2f2e17cdd$exports.Argument(expanded, argRange);
            }
        }
        return args;
    }
    getVariables() {
        const variables = [];
        const args = this.getRawArguments();
        for (const arg of args){
            let range = arg.getRange();
            let rawValue = this.document.getText().substring(this.document.offsetAt(range.start), this.document.offsetAt(range.end));
            const parsedVariables = this.parseVariables(this.document.offsetAt(arg.getRange().start), rawValue);
            for (const parsedVariable of parsedVariables)variables.push(parsedVariable);
        }
        return variables;
    }
    parseVariables(offset, arg) {
        let variables = [];
        variableLoop: for(let i = 0; i < arg.length; i++)switch(arg.charAt(i)){
            case this.escapeChar:
                if (arg.charAt(i + 1) === '$') i++;
                break;
            case '$':
                if (arg.charAt(i + 1) === '{') {
                    let escapedString = "${";
                    let escapedName = "";
                    let nameEnd = -1;
                    let escapedSubstitutionParameter = "";
                    let substitutionStart = -1;
                    let substitutionEnd = -1;
                    let modifierRead = -1;
                    nameLoop: for(let j = i + 2; j < arg.length; j++){
                        let char = arg.charAt(j);
                        switch(char){
                            case this.escapeChar:
                                for(let k = j + 1; k < arg.length; k++)switch(arg.charAt(k)){
                                    case ' ':
                                    case '\t':
                                    case '\r':
                                        continue;
                                    case '\n':
                                        // escape this newline
                                        j = k;
                                        continue nameLoop;
                                }
                                break;
                            case '}':
                                escapedString += '}';
                                let modifier = null;
                                let modifierRange = null;
                                let substitutionParameter = modifierRead !== -1 ? escapedSubstitutionParameter : null;
                                let substitutionRange = null;
                                if (nameEnd === -1) nameEnd = j;
                                else if (nameEnd + 1 === j) {
                                    modifier = "";
                                    modifierRange = $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + nameEnd + 1), this.document.positionAt(offset + nameEnd + 1));
                                } else {
                                    if (substitutionStart === -1) {
                                        // no substitution parameter found,
                                        // but a modifier character existed,
                                        // just offset the range by 1 from
                                        // the modifier character
                                        substitutionStart = modifierRead + 1;
                                        substitutionEnd = modifierRead + 1;
                                    } else // offset one more from the last
                                    // character found
                                    substitutionEnd = substitutionEnd + 1;
                                    modifier = arg.substring(modifierRead, modifierRead + 1);
                                    modifierRange = $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + modifierRead), this.document.positionAt(offset + modifierRead + 1));
                                    substitutionRange = $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + substitutionStart), this.document.positionAt(offset + substitutionEnd));
                                }
                                let start = this.document.positionAt(offset + i);
                                variables.push(new $5dece0b9c7342528$exports.Variable(escapedName, $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + i + 2), this.document.positionAt(offset + nameEnd)), $06cc642bc3981461$exports.Range.create(start, this.document.positionAt(offset + j + 1)), modifier, modifierRange, substitutionParameter, substitutionRange, this.dockerfile.resolveVariable(escapedName, start.line) !== undefined, this.isBuildVariable(escapedName, start.line), escapedString));
                                i = j;
                                continue variableLoop;
                            case ':':
                                if (nameEnd === -1) nameEnd = j;
                                else if (modifierRead !== -1) {
                                    if (substitutionStart === -1) {
                                        substitutionStart = j;
                                        substitutionEnd = j;
                                    } else substitutionEnd = j;
                                    escapedSubstitutionParameter += ':';
                                } else modifierRead = j;
                                escapedString += ':';
                                break;
                            case '\n':
                            case '\r':
                            case ' ':
                            case '\t':
                                break;
                            default:
                                if (nameEnd === -1) escapedName += char;
                                else if (modifierRead !== -1) {
                                    if (substitutionStart === -1) {
                                        substitutionStart = j;
                                        substitutionEnd = j;
                                    } else substitutionEnd = j;
                                    escapedSubstitutionParameter += char;
                                } else modifierRead = j;
                                escapedString += char;
                                break;
                        }
                    }
                    break variableLoop;
                } else if ($bbec610f07beb4be$exports.Util.isWhitespace(arg.charAt(i + 1)) || i === arg.length - 1) continue;
                else {
                    let escapedName = "";
                    nameLoop: for(let j = i + 1; j < arg.length; j++){
                        let char = arg.charAt(j);
                        switch(char){
                            case '\r':
                            case '\n':
                            case ' ':
                            case '\t':
                                continue;
                            case '$':
                            case '\'':
                            case '"':
                                let varStart = this.document.positionAt(offset + i);
                                variables.push(new $5dece0b9c7342528$exports.Variable(escapedName, $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + i + 1), this.document.positionAt(offset + j)), $06cc642bc3981461$exports.Range.create(varStart, this.document.positionAt(offset + j)), null, null, null, null, this.dockerfile.resolveVariable(escapedName, varStart.line) !== undefined, this.isBuildVariable(escapedName, varStart.line), '$' + escapedName));
                                i = j - 1;
                                continue variableLoop;
                            case this.escapeChar:
                                for(let k = j + 1; k < arg.length; k++)switch(arg.charAt(k)){
                                    case ' ':
                                    case '\t':
                                    case '\r':
                                        continue;
                                    case '\n':
                                        // escape this newline
                                        j = k;
                                        continue nameLoop;
                                }
                                // reached EOF after an escape character
                                let start = this.document.positionAt(offset + i);
                                variables.push(new $5dece0b9c7342528$exports.Variable(escapedName, $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + i + 1), this.document.positionAt(offset + j)), $06cc642bc3981461$exports.Range.create(start, this.document.positionAt(offset + j)), null, null, null, null, this.dockerfile.resolveVariable(escapedName, start.line) !== undefined, this.isBuildVariable(escapedName, start.line), '$' + escapedName));
                                break variableLoop;
                        }
                        if (char.match(/^[a-z0-9_]+$/i) === null) {
                            let varStart = this.document.positionAt(offset + i);
                            variables.push(new $5dece0b9c7342528$exports.Variable(escapedName, $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + i + 1), this.document.positionAt(offset + j)), $06cc642bc3981461$exports.Range.create(varStart, this.document.positionAt(offset + j)), null, null, null, null, this.dockerfile.resolveVariable(escapedName, varStart.line) !== undefined, this.isBuildVariable(escapedName, varStart.line), '$' + escapedName));
                            i = j - 1;
                            continue variableLoop;
                        }
                        escapedName += char;
                    }
                    let start = this.document.positionAt(offset + i);
                    variables.push(new $5dece0b9c7342528$exports.Variable(escapedName, $06cc642bc3981461$exports.Range.create(this.document.positionAt(offset + i + 1), this.document.positionAt(offset + arg.length)), $06cc642bc3981461$exports.Range.create(start, this.document.positionAt(offset + arg.length)), null, null, null, null, this.dockerfile.resolveVariable(escapedName, start.line) !== undefined, this.isBuildVariable(escapedName, start.line), '$' + escapedName));
                }
                break variableLoop;
        }
        return variables;
    }
    isBuildVariable(variable, line) {
        if (this.getKeyword() === $54b0c2f7fc5ba86a$exports.Keyword.FROM) {
            for (const initialArg of this.dockerfile.getInitialARGs()){
                const arg = initialArg;
                const property = arg.getProperty();
                if (property && variable === property.getName()) return true;
            }
            return undefined;
        }
        let image = this.dockerfile.getContainingImage($06cc642bc3981461$exports.Position.create(line, 0));
        let envs = image.getENVs();
        for(let i = envs.length - 1; i >= 0; i--){
            if (envs[i].isBefore(line)) for (let property of envs[i].getProperties()){
                if (property.getName() === variable) return false;
            }
        }
        let args = image.getARGs();
        for(let i = args.length - 1; i >= 0; i--)if (args[i].isBefore(line)) {
            let property = args[i].getProperty();
            if (property && property.getName() === variable) return true;
        }
        return undefined;
    }
    createSingleLineHeredocs(args) {
        const heredocs = [];
        // instruction only on one line, if heredocs exist they would be incomplete
        for (const arg of args){
            const value = arg.getValue();
            if (value.startsWith("<<") && $bbec610f07beb4be$exports.Util.parseHeredocName(value) !== null) {
                const startRange = arg.getRange();
                const nameRange = this.getNameRange(startRange);
                const name = this.getName(nameRange);
                heredocs.push(new $cb038d86fd1b3cbb$exports.Heredoc(startRange, name, nameRange, null, null));
            }
        }
        return heredocs;
    }
    getName(nameRange) {
        const content = this.document.getText(nameRange);
        let escaping = false;
        let name = "";
        nameLoop: for(let i = 0; i < content.length; i++){
            const ch = content.charAt(i);
            switch(ch){
                case this.escapeChar:
                    escaping = true;
                    for(let j = i + 1; j < content.length; j++)switch(content.charAt(j)){
                        case ' ':
                        case '\t':
                            break;
                        case '\r':
                            i = j + 1;
                            continue nameLoop;
                        case '\n':
                            i = j;
                            continue nameLoop;
                        default:
                            name += content.charAt(j);
                            i = j;
                            continue nameLoop;
                    }
                    break;
                case '#':
                    if (escaping) for(let j = i + 1; j < content.length; j++)switch(content.charAt(j)){
                        case '\n':
                            i = j;
                            continue nameLoop;
                    }
                case ' ':
                case '\t':
                case '\r':
                case '\n':
                    if (escaping) break;
                default:
                    name += ch;
                    break;
            }
        }
        return name;
    }
    getNameRange(startRange) {
        const content = this.document.getText(startRange);
        let endFound = false;
        let searchHyphen = false;
        let start = -1;
        let end = -1;
        let escaping = false;
        let quote = null;
        contentLoop: for(let i = 0; i < content.length; i++){
            const ch = content.charAt(i);
            switch(ch){
                case '"':
                case '\'':
                    if (quote === ch) break contentLoop;
                    quote = ch;
                    continue;
                case this.escapeChar:
                    for(let j = i + 1; j < content.length; j++)switch(content.charAt(j)){
                        case '\n':
                            escaping = true;
                            j = i;
                            continue contentLoop;
                    }
                    break;
                case ' ':
                case '\t':
                case '\r':
                case '\n':
                    break;
                case '<':
                    if (endFound) searchHyphen = true;
                    else endFound = true;
                    break;
                case '-':
                    if (searchHyphen) {
                        searchHyphen = false;
                        break;
                    }
                case '#':
                    if (escaping) for(let j = i + 1; j < content.length; j++)switch(content.charAt(j)){
                        case '\n':
                            i = j;
                            continue contentLoop;
                    }
                default:
                    if (start === -1) start = i;
                    if (quote !== null) {
                        end = i + 1;
                        break;
                    }
                    break contentLoop;
            }
        }
        if (start === -1) return $06cc642bc3981461$exports.Range.create(startRange.end, startRange.end);
        const nameStart = this.document.positionAt(this.document.offsetAt(startRange.start) + start);
        const nameEnd = quote !== null ? this.document.positionAt(this.document.offsetAt(startRange.start) + end) : startRange.end;
        return $06cc642bc3981461$exports.Range.create(nameStart, nameEnd);
    }
    getHeredocs() {
        const args = this.getArguments();
        if (args.length === 0) return [];
        const heredocs = [];
        const range = this.getRange();
        if (range.start.line === range.end.line) // instruction only on one line, if heredocs exist they would be incomplete
        return this.createSingleLineHeredocs(args);
        const heredocDefinitions = [];
        let heredocsProcessed = false;
        let escaping = false;
        let contentStart = -1;
        let contentEnd = -1;
        let lineStart = -1;
        let currentHeredoc = 0;
        const startOffset = this.document.offsetAt(args[0].getRange().start);
        const content = this.getRangeContent($06cc642bc3981461$exports.Range.create(args[0].getRange().start, this.getRange().end));
        contentLoop: for(let i = 0; i < content.length; i++)switch(content.charAt(i)){
            case this.escapeChar:
                escaping = true;
                for(let j = i + 1; j < content.length; j++)switch(content.charAt(j)){
                    case ' ':
                    case '\t':
                        break;
                    case '\r':
                        j++;
                    case '\n':
                        i = j;
                        continue contentLoop;
                    default:
                        i = j;
                        continue contentLoop;
                }
                break;
            case '\r':
                break;
            case '\n':
                if (escaping) break;
                if (heredocsProcessed) {
                    if (contentStart === -1) contentStart = i;
                    contentEnd = i;
                    const arg = heredocDefinitions[currentHeredoc];
                    const startRange = arg.getRange();
                    const nameRange = this.getNameRange(startRange);
                    const name = this.getName(nameRange);
                    const delimiterRange = this.getDelimiterRange(arg, name, $06cc642bc3981461$exports.Range.create(this.document.positionAt(startOffset + lineStart), this.document.positionAt(startOffset + i)));
                    if (delimiterRange !== null) {
                        const contentRange = $06cc642bc3981461$exports.Range.create(this.document.positionAt(startOffset + contentStart), this.document.positionAt(startOffset + lineStart - 1));
                        heredocs.push(new $cb038d86fd1b3cbb$exports.Heredoc(startRange, name, nameRange, contentRange, delimiterRange));
                        contentStart = -1;
                        currentHeredoc++;
                    }
                    lineStart = -1;
                } else {
                    // found a newline that hasn't been escaped,
                    // must be in a heredoc
                    const offsetLimit = startOffset + i;
                    for (const arg of args){
                        // check if this argument is on the initial line of the instruction,
                        // note that it may not all be on the same line due to escaped newlines,
                        // because of that we need to use offset checks instead of line checks
                        // as an argument being on a different line in the document does not
                        // imply it is on a different line from the Dockerfile's point of view
                        if (this.document.offsetAt(arg.getRange().start) < offsetLimit) {
                            if (arg.getValue().startsWith("<<")) heredocDefinitions.push(arg);
                        } else break;
                    }
                    heredocsProcessed = true;
                    lineStart = -1;
                    continue contentLoop;
                }
                break;
            case ' ':
            case '\t':
                if (escaping) break;
            case '#':
                if (escaping) for(let j = i + 1; j < content.length; j++)switch(content.charAt(j)){
                    case '\n':
                        i = j;
                        continue contentLoop;
                }
            default:
                if (escaping) escaping = false;
                if (heredocsProcessed) {
                    if (contentStart === -1) contentStart = i;
                    if (lineStart === -1) lineStart = i;
                }
                break;
        }
        if (heredocsProcessed) {
            const arg = heredocDefinitions[currentHeredoc];
            const startRange = arg.getRange();
            const nameRange = this.getNameRange(startRange);
            const name = this.getName(nameRange);
            let contentRange = null;
            // check if the last line of this instruction matches the name of the last heredoc
            const delimiterRange = this.getDelimiterRange(arg, name, $06cc642bc3981461$exports.Range.create(this.document.positionAt(startOffset + lineStart), range.end));
            if (delimiterRange === null) contentRange = $06cc642bc3981461$exports.Range.create(this.document.positionAt(startOffset + contentStart), range.end);
            else if (contentEnd !== -1) contentRange = $06cc642bc3981461$exports.Range.create(this.document.positionAt(startOffset + contentStart), this.document.positionAt(startOffset + contentEnd));
            heredocs.push(new $cb038d86fd1b3cbb$exports.Heredoc(startRange, name, nameRange, contentRange, delimiterRange));
            currentHeredoc++;
            for(let i = currentHeredoc; i < heredocDefinitions.length; i++){
                const arg = heredocDefinitions[currentHeredoc];
                const startRange = arg.getRange();
                const nameRange = this.getNameRange(startRange);
                const name = this.getName(nameRange);
                heredocs.push(new $cb038d86fd1b3cbb$exports.Heredoc(startRange, name, nameRange, null, null));
                currentHeredoc++;
            }
        } else // instruction only on one line, if heredocs exist they would be incomplete
        return this.createSingleLineHeredocs(args);
        return heredocs;
    }
    getDelimiterRange(startArg, name, candidateRange) {
        const text = this.document.getText(candidateRange);
        if (startArg.getValue().startsWith("<<-")) {
            // remove tabs in the front
            let index = 0;
            while(text.charAt(index) === '\t')index++;
            if (text.substring(index) === name) return $06cc642bc3981461$exports.Range.create($06cc642bc3981461$exports.Position.create(candidateRange.start.line, index), candidateRange.end);
            return null;
        }
        return text === name ? candidateRange : null;
    }
}
$dbcf927cc6c66108$exports.Instruction = $dbcf927cc6c66108$var$Instruction;


var $e74091221b948ca0$exports = {};
"use strict";
Object.defineProperty($e74091221b948ca0$exports, "__esModule", {
    value: true
});
$e74091221b948ca0$exports.Add = void 0;
var $3b4228194c2eb101$exports = {};
"use strict";
Object.defineProperty($3b4228194c2eb101$exports, "__esModule", {
    value: true
});
$3b4228194c2eb101$exports.JSONInstruction = void 0;



var $49f4c57b99c16419$exports = {};
"use strict";
Object.defineProperty($49f4c57b99c16419$exports, "__esModule", {
    value: true
});
$49f4c57b99c16419$exports.ModifiableInstruction = void 0;

var $d4e9108e9cb28d40$exports = {};
"use strict";
Object.defineProperty($d4e9108e9cb28d40$exports, "__esModule", {
    value: true
});
$d4e9108e9cb28d40$exports.Flag = void 0;

var $bd3c4b94a4da5f9d$exports = {};
"use strict";
Object.defineProperty($bd3c4b94a4da5f9d$exports, "__esModule", {
    value: true
});
$bd3c4b94a4da5f9d$exports.FlagOption = void 0;
class $bd3c4b94a4da5f9d$var$FlagOption {
    constructor(range, name, nameRange, value, valueRange){
        this.range = range;
        this.name = name;
        this.nameRange = nameRange;
        this.value = value;
        this.valueRange = valueRange;
    }
    toString() {
        if (this.valueRange !== null) return this.name + "=" + this.value;
        return this.name;
    }
    getRange() {
        return this.range;
    }
    getName() {
        return this.name;
    }
    getNameRange() {
        return this.nameRange;
    }
    getValue() {
        return this.value;
    }
    getValueRange() {
        return this.valueRange;
    }
}
$bd3c4b94a4da5f9d$exports.FlagOption = $bd3c4b94a4da5f9d$var$FlagOption;


class $d4e9108e9cb28d40$var$Flag {
    constructor(document, range, name, nameRange, value, valueRange){
        this.options = [];
        this.range = range;
        this.name = name;
        this.nameRange = nameRange;
        this.value = value;
        this.valueRange = valueRange;
        if (this.value !== null) {
            let offset = document.offsetAt(valueRange.start);
            let nameStart = -1;
            let valueStart = -1;
            let hasOptions = false;
            for(let i = 0; i < value.length; i++)switch(value.charAt(i)){
                case '=':
                    hasOptions = true;
                    if (valueStart === -1) {
                        valueStart = i + 1;
                        break;
                    }
                    break;
                case ',':
                    this.options.push(this.createFlagOption(document, value, offset, nameStart, valueStart, i));
                    nameStart = -1;
                    valueStart = -1;
                    break;
                default:
                    if (nameStart === -1) nameStart = i;
                    break;
            }
            if (hasOptions && nameStart !== -1) this.options.push(this.createFlagOption(document, value, offset, nameStart, valueStart, value.length));
        }
    }
    createFlagOption(document, content, documentOffset, nameStart, valueStart, valueEnd) {
        const optionRange = $06cc642bc3981461$exports.Range.create(document.positionAt(documentOffset + nameStart), document.positionAt(documentOffset + valueEnd));
        if (valueStart === -1) return new $bd3c4b94a4da5f9d$exports.FlagOption(optionRange, content.substring(nameStart, valueEnd), optionRange, null, null);
        return new $bd3c4b94a4da5f9d$exports.FlagOption(optionRange, content.substring(nameStart, valueStart - 1), $06cc642bc3981461$exports.Range.create(document.positionAt(documentOffset + nameStart), document.positionAt(documentOffset + valueStart - 1)), content.substring(valueStart, valueEnd), $06cc642bc3981461$exports.Range.create(document.positionAt(documentOffset + valueStart), document.positionAt(documentOffset + valueEnd)));
    }
    toString() {
        if (this.valueRange) return "--" + this.name + "=" + this.value;
        return "--" + this.name;
    }
    /**
     * Returns the range that encompasses this entire flag. This includes the
     * -- prefix in the beginning to the last character of the flag's value (if
     * it has been defined).
     *
     * @return the entire range of this flag
     */ getRange() {
        return this.range;
    }
    /**
     * Returns the name of this flag. The name does not include the -- prefix.
     * Thus, for HEALTHCHECK's --interval flag, interval is the flag's name and
     * not --interval.
     *
     * @return this flag's name
     */ getName() {
        return this.name;
    }
    /**
     * Returns the range that encompasses the flag's name
     *
     * @return the range containing the flag's name
     */ getNameRange() {
        return this.nameRange;
    }
    /**
     * Returns the value that has been set to this flag. May be null if the
     * flag is invalid and has no value set like a --start-period. If the flag
     * is instead a --start-period= with an equals sign then the flag's value
     * is the empty string.
     *
     * @return this flag's value if it has been defined, null otherwise
     */ getValue() {
        return this.value;
    }
    /**
     * Returns the range that encompasses this flag's value. If no value has
     * been set then null will be returned.
     *
     * @return the range containing this flag's value, or null if the flag
     *         has no value defined
     */ getValueRange() {
        return this.valueRange;
    }
    getOption(name) {
        for (const option of this.options){
            if (option.getName() === name) return option;
        }
        return null;
    }
    getOptions() {
        return this.options;
    }
    hasOptions() {
        return this.options.length > 0;
    }
}
$d4e9108e9cb28d40$exports.Flag = $d4e9108e9cb28d40$var$Flag;



class $49f4c57b99c16419$var$ModifiableInstruction extends $dbcf927cc6c66108$exports.Instruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
    getFlags() {
        if (!this.flags) {
            this.flags = [];
            for (let arg of this.getArguments()){
                let value = arg.getValue();
                if (this.stopSearchingForFlags(value)) return this.flags;
                else if (value.indexOf("--") === 0) {
                    let range = arg.getRange();
                    let rawValue = this.document.getText().substring(this.document.offsetAt(range.start), this.document.offsetAt(range.end));
                    let nameIndex = value.indexOf('=');
                    let index = rawValue.indexOf('=');
                    let firstMatch = false;
                    let secondMatch = false;
                    let startIndex = -1;
                    nameSearchLoop: for(let i = 0; i < rawValue.length; i++)switch(rawValue.charAt(i)){
                        case '\\':
                        case ' ':
                        case '\t':
                        case '\r':
                        case '\n':
                            break;
                        case '-':
                            if (secondMatch) {
                                startIndex = i;
                                break nameSearchLoop;
                            } else if (firstMatch) secondMatch = true;
                            else firstMatch = true;
                            break;
                        default:
                            startIndex = i;
                            break nameSearchLoop;
                    }
                    let nameStart = this.document.positionAt(this.document.offsetAt(range.start) + startIndex);
                    if (index === -1) this.flags.push(new $d4e9108e9cb28d40$exports.Flag(this.document, range, value.substring(2), $06cc642bc3981461$exports.Range.create(nameStart, range.end), null, null));
                    else if (index === value.length - 1) {
                        let nameEnd = this.document.positionAt(this.document.offsetAt(range.start) + index);
                        this.flags.push(new $d4e9108e9cb28d40$exports.Flag(this.document, range, value.substring(2, index), $06cc642bc3981461$exports.Range.create(nameStart, nameEnd), "", $06cc642bc3981461$exports.Range.create(range.end, range.end)));
                    } else {
                        let nameEnd = this.document.positionAt(this.document.offsetAt(range.start) + index);
                        this.flags.push(new $d4e9108e9cb28d40$exports.Flag(this.document, range, value.substring(2, nameIndex), $06cc642bc3981461$exports.Range.create(nameStart, nameEnd), value.substring(nameIndex + 1), $06cc642bc3981461$exports.Range.create(this.document.positionAt(this.document.offsetAt(range.start) + index + 1), range.end)));
                    }
                }
            }
        }
        return this.flags;
    }
    getArguments() {
        const args = super.getArguments();
        const flags = this.getFlags();
        if (flags.length === 0) return args;
        for(let i = 0; i < flags.length; i++)args.shift();
        return args;
    }
}
$49f4c57b99c16419$exports.ModifiableInstruction = $49f4c57b99c16419$var$ModifiableInstruction;


class $3b4228194c2eb101$var$JSONInstruction extends $49f4c57b99c16419$exports.ModifiableInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
        this.openingBracket = null;
        this.closingBracket = null;
        this.jsonStrings = [];
        const argsContent = this.getRawArgumentsContent();
        if (argsContent === null) return;
        const args = this.getArguments();
        if (args.length === 1 && args[0].getValue() === "[]") {
            let argRange = args[0].getRange();
            this.openingBracket = new $fd8464c2f2e17cdd$exports.Argument("[", $06cc642bc3981461$exports.Range.create(argRange.start.line, argRange.start.character, argRange.start.line, argRange.start.character + 1));
            this.closingBracket = new $fd8464c2f2e17cdd$exports.Argument("]", $06cc642bc3981461$exports.Range.create(argRange.start.line, argRange.start.character + 1, argRange.end.line, argRange.end.character));
            return;
        } else if (args.length === 2 && args[0].getValue() === '[' && args[1].getValue() === ']') {
            this.openingBracket = args[0];
            this.closingBracket = args[1];
            return;
        }
        const argsOffset = document.offsetAt(this.getArgumentsRange().start);
        let start = -1;
        let last = "";
        let quoted = false;
        let escapedArg = "";
        argsCheck: for(let i = 0; i < argsContent.length; i++){
            let char = argsContent.charAt(i);
            switch(char){
                case '[':
                    if (last === "") {
                        this.openingBracket = new $fd8464c2f2e17cdd$exports.Argument("[", $06cc642bc3981461$exports.Range.create(document.positionAt(argsOffset + i), document.positionAt(argsOffset + i + 1)));
                        last = '[';
                    } else if (quoted) escapedArg = escapedArg + char;
                    else break argsCheck;
                    break;
                case '"':
                    if (last === '[' || last === ',') {
                        start = i;
                        quoted = true;
                        last = '"';
                        escapedArg = escapedArg + char;
                        continue;
                    } else if (last === '"') {
                        if (quoted) {
                            escapedArg = escapedArg + char;
                            // quoted string done
                            quoted = false;
                            this.jsonStrings.push(new $4d211a562ff7ccb2$exports.JSONArgument(escapedArg, $06cc642bc3981461$exports.Range.create(document.positionAt(argsOffset + start), document.positionAt(argsOffset + i + 1)), $06cc642bc3981461$exports.Range.create(document.positionAt(argsOffset + start + 1), document.positionAt(argsOffset + i))));
                            escapedArg = "";
                        } else break argsCheck;
                    } else break argsCheck;
                    break;
                case ',':
                    if (quoted) escapedArg = escapedArg + char;
                    else {
                        if (last === '"') last = ',';
                        else break argsCheck;
                    }
                    break;
                case ']':
                    if (quoted) escapedArg = escapedArg + char;
                    else if (last !== "") {
                        this.closingBracket = new $fd8464c2f2e17cdd$exports.Argument("]", $06cc642bc3981461$exports.Range.create(document.positionAt(argsOffset + i), document.positionAt(argsOffset + i + 1)));
                        break argsCheck;
                    }
                    break;
                case ' ':
                case '\t':
                    break;
                case '\\':
                    if (quoted) switch(argsContent.charAt(i + 1)){
                        case '"':
                        case '\\':
                            escapedArg = escapedArg + argsContent.charAt(i + 1);
                            i++;
                            continue;
                        case ' ':
                        case '\t':
                            escapeCheck: for(let j = i + 2; j < argsContent.length; j++)switch(argsContent.charAt(j)){
                                case '\r':
                                    // offset one more for \r\n
                                    j++;
                                case '\n':
                                    i = j;
                                    continue argsCheck;
                                case ' ':
                                case '\t':
                                    break;
                                default:
                                    break escapeCheck;
                            }
                            break;
                        case '\r':
                            // offset one more for \r\n
                            i++;
                        default:
                            i++;
                            continue;
                    }
                    else escapeCheck: for(let j = i + 1; j < argsContent.length; j++)switch(argsContent.charAt(j)){
                        case '\r':
                            // offset one more for \r\n
                            j++;
                        case '\n':
                            i = j;
                            continue argsCheck;
                        case ' ':
                        case '\t':
                            break;
                        default:
                            break escapeCheck;
                    }
                    break argsCheck;
                default:
                    if (!quoted) break argsCheck;
                    escapedArg = escapedArg + char;
                    break;
            }
        }
    }
    stopSearchingForFlags(_value) {
        return true;
    }
    getOpeningBracket() {
        return this.openingBracket;
    }
    getJSONStrings() {
        return this.jsonStrings;
    }
    getClosingBracket() {
        return this.closingBracket;
    }
}
$3b4228194c2eb101$exports.JSONInstruction = $3b4228194c2eb101$var$JSONInstruction;


class $e74091221b948ca0$var$Add extends $3b4228194c2eb101$exports.JSONInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
    stopSearchingForFlags(argument) {
        return argument.indexOf("--") === -1;
    }
}
$e74091221b948ca0$exports.Add = $e74091221b948ca0$var$Add;


var $5a76935495422f85$exports = {};
"use strict";
Object.defineProperty($5a76935495422f85$exports, "__esModule", {
    value: true
});
$5a76935495422f85$exports.Arg = void 0;
var $7409057aad957c3f$exports = {};
"use strict";
Object.defineProperty($7409057aad957c3f$exports, "__esModule", {
    value: true
});
$7409057aad957c3f$exports.Property = void 0;


class $7409057aad957c3f$var$Property {
    constructor(document, escapeChar, arg, arg2){
        this.assignmentOperatorRange = null;
        this.assignmentOperator = null;
        this.valueRange = null;
        this.value = null;
        this.document = document;
        this.escapeChar = escapeChar;
        this.nameRange = $7409057aad957c3f$var$Property.getNameRange(document, arg);
        let value = document.getText().substring(document.offsetAt(this.nameRange.start), document.offsetAt(this.nameRange.end));
        this.name = $7409057aad957c3f$var$Property.getValue(value, escapeChar);
        if (arg2) {
            this.valueRange = arg2.getRange();
            value = document.getText().substring(document.offsetAt(this.valueRange.start), document.offsetAt(this.valueRange.end));
            this.value = $7409057aad957c3f$var$Property.getValue(value, escapeChar);
            this.range = $06cc642bc3981461$exports.Range.create(this.nameRange.start, this.valueRange.end);
        } else {
            let argRange = arg.getRange();
            if (this.nameRange.start.line === argRange.start.line && this.nameRange.start.character === argRange.start.character && this.nameRange.end.line === argRange.end.line && this.nameRange.end.character === argRange.end.character) ;
            else {
                this.valueRange = $7409057aad957c3f$var$Property.getValueRange(document, arg);
                value = document.getText().substring(document.offsetAt(this.valueRange.start), document.offsetAt(this.valueRange.end));
                this.value = $7409057aad957c3f$var$Property.getValue(value, escapeChar);
                this.assignmentOperatorRange = $06cc642bc3981461$exports.Range.create(this.nameRange.end, this.valueRange.start);
                this.assignmentOperator = "=";
            }
            this.range = argRange;
        }
    }
    getRange() {
        return this.range;
    }
    getName() {
        return this.name;
    }
    getNameRange() {
        return this.nameRange;
    }
    getValue() {
        return this.value;
    }
    getValueRange() {
        return this.valueRange;
    }
    /**
     * Retrieves the operator used for delimiting between the name and
     * value of this property. This will either be the "=" character
     * or null if a character was not used or if this property has no
     * value defined.
     */ getAssignmentOperator() {
        return this.assignmentOperator;
    }
    getAssignmentOperatorRange() {
        return this.assignmentOperatorRange;
    }
    /**
     * Returns the value of this property including any enclosing
     * single or double quotes and relevant escape characters.
     * Escaped newlines and its associated contiguous whitespace
     * characters however will not be returned as they are deemed to
     * be uninteresting to clients trying to return a Dockerfile.
     *
     * @return the unescaped value of this property or null if this
     *         property has no associated value
     */ getUnescapedValue() {
        if (this.valueRange === null) return null;
        let escaped = false;
        let rawValue = "";
        let value = this.document.getText().substring(this.document.offsetAt(this.valueRange.start), this.document.offsetAt(this.valueRange.end));
        rawLoop: for(let i = 0; i < value.length; i++){
            let char = value.charAt(i);
            switch(char){
                case this.escapeChar:
                    for(let j = i + 1; j < value.length; j++)switch(value.charAt(j)){
                        case '\r':
                            j++;
                        case '\n':
                            escaped = true;
                            i = j;
                            continue rawLoop;
                        case ' ':
                        case '\t':
                            break;
                        default:
                            rawValue = rawValue + char;
                            continue rawLoop;
                    }
                    // this happens if there's only whitespace after the escape character
                    rawValue = rawValue + char;
                    break;
                case '\r':
                case '\n':
                    break;
                case ' ':
                case '\t':
                    if (!escaped) rawValue = rawValue + char;
                    break;
                case '#':
                    if (escaped) for(let j = i + 1; j < value.length; j++)switch(value.charAt(j)){
                        case '\r':
                            j++;
                        case '\n':
                            i = j;
                            continue rawLoop;
                    }
                    else rawValue = rawValue + char;
                    break;
                default:
                    rawValue = rawValue + char;
                    escaped = false;
                    break;
            }
        }
        return rawValue;
    }
    static getNameRange(document, arg) {
        let value = arg.getValue();
        let index = value.indexOf('=');
        if (index !== -1) {
            let initial = value.charAt(0);
            let before = value.charAt(index - 1);
            // check if content before the equals sign are in quotes
            // "var"=value
            // 'var'=value
            // otherwise, just assume it's a standard definition
            // var=value
            if (initial === '"' && before === '"' || initial === '\'' && before === '\'' || initial !== '"' && initial !== '\'') return $06cc642bc3981461$exports.Range.create(arg.getRange().start, document.positionAt(document.offsetAt(arg.getRange().start) + index));
        }
        // no '=' found, just defined the property's name
        return arg.getRange();
    }
    static getValueRange(document, arg) {
        return $06cc642bc3981461$exports.Range.create(document.positionAt(document.offsetAt(arg.getRange().start) + arg.getValue().indexOf('=') + 1), document.positionAt(document.offsetAt(arg.getRange().end)));
    }
    /**
     * Returns the actual value of this key-value pair. The value will
     * have its escape characters removed if applicable. If the value
     * spans multiple lines and there are comments nested within the
     * lines, they too will be removed.
     *
     * @return the value that this key-value pair will actually be, may
     *         be null if no value is defined, may be the empty string
     *         if the value only consists of whitespace
     */ static getValue(value, escapeChar) {
        let escaped = false;
        const skip = $bbec610f07beb4be$exports.Util.findLeadingNonWhitespace(value, escapeChar);
        if (skip !== 0 && value.charAt(skip) === '#') // need to skip over comments
        escaped = true;
        value = value.substring(skip);
        let first = value.charAt(0);
        let last = value.charAt(value.length - 1);
        let literal = first === '\'' || first === '"';
        let inSingle = first === '\'' && last === '\'';
        let inDouble = false;
        if (first === '"') for(let i = 1; i < value.length; i++){
            if (value.charAt(i) === escapeChar) i++;
            else if (value.charAt(i) === '"' && i === value.length - 1) inDouble = true;
        }
        if (inSingle || inDouble) value = value.substring(1, value.length - 1);
        let commentCheck = -1;
        let escapedValue = "";
        let start = 0;
        parseValue: for(let i = 0; i < value.length; i++){
            let char = value.charAt(i);
            switch(char){
                case escapeChar:
                    if (i + 1 === value.length) {
                        escapedValue = escapedValue + escapeChar;
                        break parseValue;
                    }
                    char = value.charAt(i + 1);
                    if (char === ' ' || char === '\t') whitespaceCheck: for(let j = i + 2; j < value.length; j++){
                        let char2 = value.charAt(j);
                        switch(char2){
                            case ' ':
                            case '\t':
                                break;
                            case '\r':
                                j++;
                            case '\n':
                                escaped = true;
                                i = j;
                                continue parseValue;
                            default:
                                if (!inDouble && !inSingle && !literal) {
                                    if (char2 === escapeChar) {
                                        // add the escaped character
                                        escapedValue = escapedValue + char;
                                        // now start parsing from the next escape character
                                        i = i + 1;
                                    } else {
                                        // the expectation is that this j = i + 2 here
                                        escapedValue = escapedValue + char + char2;
                                        i = j;
                                    }
                                    continue parseValue;
                                }
                                break whitespaceCheck;
                        }
                    }
                    if (inDouble) {
                        if (char === '\r') {
                            escaped = true;
                            i = i + 2;
                        } else if (char === '\n') {
                            escaped = true;
                            i++;
                        } else if (char !== '"') {
                            if (char === escapeChar) i++;
                            escapedValue = escapedValue + escapeChar;
                        }
                        continue parseValue;
                    } else if (inSingle || literal) {
                        if (char === '\r') {
                            escaped = true;
                            i = i + 2;
                        } else if (char === '\n') {
                            escaped = true;
                            i++;
                        } else escapedValue = escapedValue + escapeChar;
                        continue parseValue;
                    } else if (char === escapeChar) {
                        // double escape, append one and move on
                        escapedValue = escapedValue + escapeChar;
                        i++;
                    } else if (char === '\r') {
                        escaped = true;
                        // offset one more for \r\n
                        i = i + 2;
                    } else if (char === '\n') {
                        escaped = true;
                        i++;
                        start = i;
                    } else {
                        // any other escapes are simply ignored
                        escapedValue = escapedValue + char;
                        i++;
                    }
                    break;
                case ' ':
                case '\t':
                    if (escaped && commentCheck === -1) commentCheck = i;
                    escapedValue = escapedValue + char;
                    break;
                case '\r':
                    i++;
                case '\n':
                    if (escaped && commentCheck !== -1) {
                        // rollback and remove the whitespace that was previously appended
                        escapedValue = escapedValue.substring(0, escapedValue.length - (i - commentCheck - 1));
                        commentCheck = -1;
                    }
                    break;
                case '#':
                    // a newline was escaped and now there's a comment
                    if (escaped) {
                        if (commentCheck !== -1) {
                            // rollback and remove the whitespace that was previously appended
                            escapedValue = escapedValue.substring(0, escapedValue.length - (i - commentCheck));
                            commentCheck = -1;
                        }
                        newlineCheck: for(let j = i + 1; j < value.length; j++)switch(value.charAt(j)){
                            case '\r':
                                j++;
                            case '\n':
                                i = j;
                                break newlineCheck;
                        }
                        continue parseValue;
                    }
                default:
                    if (escaped) {
                        escaped = false;
                        commentCheck = -1;
                    }
                    escapedValue = escapedValue + char;
                    break;
            }
        }
        return escapedValue;
    }
}
$7409057aad957c3f$exports.Property = $7409057aad957c3f$var$Property;


var $2ca485aa86c8977f$exports = {};
"use strict";
Object.defineProperty($2ca485aa86c8977f$exports, "__esModule", {
    value: true
});
$2ca485aa86c8977f$exports.PropertyInstruction = void 0;





class $2ca485aa86c8977f$var$PropertyInstruction extends $dbcf927cc6c66108$exports.Instruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
        this.properties = undefined;
    }
    getProperties() {
        if (this.properties === undefined) {
            let args = this.getPropertyArguments();
            if (args.length === 0) this.properties = [];
            else if (args.length === 1) this.properties = [
                new $7409057aad957c3f$exports.Property(this.document, this.escapeChar, args[0])
            ];
            else if (args.length === 2) {
                if (args[0].getValue().indexOf('=') === -1) this.properties = [
                    new $7409057aad957c3f$exports.Property(this.document, this.escapeChar, args[0], args[1])
                ];
                else this.properties = [
                    new $7409057aad957c3f$exports.Property(this.document, this.escapeChar, args[0]),
                    new $7409057aad957c3f$exports.Property(this.document, this.escapeChar, args[1])
                ];
            } else if (args[0].getValue().indexOf('=') === -1) {
                let text = this.document.getText();
                let start = args[1].getRange().start;
                let end = args[args.length - 1].getRange().end;
                text = text.substring(this.document.offsetAt(start), this.document.offsetAt(end));
                this.properties = [
                    new $7409057aad957c3f$exports.Property(this.document, this.escapeChar, args[0], new $fd8464c2f2e17cdd$exports.Argument(text, $06cc642bc3981461$exports.Range.create(args[1].getRange().start, args[args.length - 1].getRange().end)))
                ];
            } else {
                this.properties = [];
                for(let i = 0; i < args.length; i++)this.properties.push(new $7409057aad957c3f$exports.Property(this.document, this.escapeChar, args[i]));
            }
        }
        return this.properties;
    }
    /**
     * Goes from the back of the string and returns the first
     * non-whitespace character that is found. If an escape character
     * is found with newline characters, the escape character will
     * not be considered a non-whitespace character and its index in
     * the string will not be returned.
     *
     * @param content the string to search through
     * @return the index in the string for the first non-whitespace
     *         character when searching from the end of the string
     */ findTrailingNonWhitespace(content) {
        // loop back to find the first non-whitespace character
        let index = content.length;
        whitespaceCheck: for(let i = content.length - 1; i >= 0; i--)switch(content.charAt(i)){
            case ' ':
            case '\t':
                continue;
            case '\n':
                if (content.charAt(i - 1) === '\r') i = i - 1;
            case '\r':
                newlineCheck: for(let j = i - 1; j >= 0; j--)switch(content.charAt(j)){
                    case ' ':
                    case '\t':
                    case '\r':
                    case '\n':
                    case this.escapeChar:
                        continue;
                    default:
                        index = j;
                        break newlineCheck;
                }
                break whitespaceCheck;
            default:
                index = i;
                break whitespaceCheck;
        }
        return index;
    }
    getPropertyArguments() {
        const args = [];
        let range = this.getInstructionRange();
        let instructionNameEndOffset = this.document.offsetAt(range.end);
        let extra = instructionNameEndOffset - this.document.offsetAt(range.start);
        let content = this.getTextContent();
        let fullArgs = content.substring(extra);
        let start = $bbec610f07beb4be$exports.Util.findLeadingNonWhitespace(fullArgs, this.escapeChar);
        if (start === -1) // only whitespace found, no arguments
        return [];
        const startPosition = this.document.positionAt(instructionNameEndOffset + start);
        // records whether the parser has just processed an escaped newline or not,
        // if our starting position is not on the same line as the instruction then
        // the start of the content is already on an escaped line
        let escaped = range.start.line !== startPosition.line;
        // flag to track if the last character was an escape character
        let endingEscape = false;
        // position before the first escape character was hit
        let mark = -1;
        let end = this.findTrailingNonWhitespace(fullArgs);
        content = fullArgs.substring(start, end + 1);
        let argStart = escaped ? -1 : 0;
        let spaced = false;
        argumentLoop: for(let i = 0; i < content.length; i++){
            let char = content.charAt(i);
            switch(char){
                case this.escapeChar:
                    if (i + 1 === content.length) {
                        endingEscape = true;
                        break argumentLoop;
                    }
                    if (!escaped) mark = i;
                    switch(content.charAt(i + 1)){
                        case ' ':
                        case '\t':
                            if (!$bbec610f07beb4be$exports.Util.isWhitespace(content.charAt(i + 2))) {
                                // space was escaped, continue as normal
                                i = i + 1;
                                continue argumentLoop;
                            }
                            // whitespace encountered, need to figure out if it extends to EOL
                            whitespaceCheck: for(let j = i + 2; j < content.length; j++)switch(content.charAt(j)){
                                case '\r':
                                    // offset one more for \r\n
                                    j++;
                                case '\n':
                                    // whitespace only, safe to skip
                                    escaped = true;
                                    i = j;
                                    continue argumentLoop;
                                case ' ':
                                case '\t':
                                    break;
                                default:
                                    // whitespace doesn't extend to EOL, create an argument
                                    args.push(new $fd8464c2f2e17cdd$exports.Argument(content.substring(argStart, i), $06cc642bc3981461$exports.Range.create(this.document.positionAt(instructionNameEndOffset + start + argStart), this.document.positionAt(instructionNameEndOffset + start + i + 2))));
                                    argStart = j;
                                    break whitespaceCheck;
                            }
                            // go back and start processing the encountered non-whitespace character
                            i = argStart - 1;
                            continue argumentLoop;
                        case '\r':
                            // offset one more for \r\n
                            i++;
                        case '\n':
                            // immediately followed by a newline, skip the newline
                            escaped = true;
                            i = i + 1;
                            continue argumentLoop;
                        case this.escapeChar:
                            // double escape found, skip it and move on
                            if (argStart === -1) argStart = i;
                            i = i + 1;
                            continue argumentLoop;
                        default:
                            if (argStart === -1) argStart = i;
                            continue argumentLoop;
                    }
                case '\'':
                case '"':
                    if (spaced) {
                        this.createSpacedArgument(argStart, args, content, mark, instructionNameEndOffset, start);
                        // reset to start a new argument
                        argStart = i;
                        spaced = false;
                    }
                    if (argStart === -1) argStart = i;
                    for(let j = i + 1; j < content.length; j++)switch(content.charAt(j)){
                        case char:
                            if (content.charAt(j + 1) !== ' ' && content.charAt(j + 1) !== '') {
                                // there is more content after this quote,
                                // continue so that it is all processed as
                                // one single argument
                                i = j;
                                continue argumentLoop;
                            }
                            args.push(new $fd8464c2f2e17cdd$exports.Argument(content.substring(argStart, j + 1), $06cc642bc3981461$exports.Range.create(this.document.positionAt(instructionNameEndOffset + start + argStart), this.document.positionAt(instructionNameEndOffset + start + j + 1))));
                            i = j;
                            argStart = -1;
                            continue argumentLoop;
                        case this.escapeChar:
                            j++;
                            break;
                    }
                    break argumentLoop;
                case ' ':
                case '\t':
                    if (escaped) // consider there to be a space only if an argument
                    // is not spanning multiple lines
                    {
                        if (argStart !== -1) spaced = true;
                    } else if (argStart !== -1) {
                        args.push(new $fd8464c2f2e17cdd$exports.Argument(content.substring(argStart, i), $06cc642bc3981461$exports.Range.create(this.document.positionAt(instructionNameEndOffset + start + argStart), this.document.positionAt(instructionNameEndOffset + start + i))));
                        argStart = -1;
                    }
                    break;
                case '\r':
                    // offset one more for \r\n
                    i++;
                case '\n':
                    spaced = false;
                    break;
                case '#':
                    if (escaped) {
                        // a newline was escaped and now there's a comment
                        for(let j = i + 1; j < content.length; j++)switch(content.charAt(j)){
                            case '\r':
                                j++;
                            case '\n':
                                i = j;
                                spaced = false;
                                continue argumentLoop;
                        }
                        // went to the end without finding a newline,
                        // the comment was the last line in the instruction,
                        // just stop parsing, create an argument if needed
                        if (argStart !== -1) {
                            let value = content.substring(argStart, mark);
                            args.push(new $fd8464c2f2e17cdd$exports.Argument(value, $06cc642bc3981461$exports.Range.create(this.document.positionAt(instructionNameEndOffset + start + argStart), this.document.positionAt(instructionNameEndOffset + start + mark))));
                            argStart = -1;
                        }
                        break argumentLoop;
                    } else if (argStart === -1) argStart = i;
                    break;
                default:
                    if (spaced) {
                        this.createSpacedArgument(argStart, args, content, mark, instructionNameEndOffset, start);
                        // reset to start a new argument
                        argStart = i;
                        spaced = false;
                    }
                    escaped = false;
                    if (argStart === -1) argStart = i;
                    // variable detected
                    if (char === '$' && content.charAt(i + 1) === '{') {
                        let singleQuotes = false;
                        let doubleQuotes = false;
                        let escaped = false;
                        for(let j = i + 1; j < content.length; j++)switch(content.charAt(j)){
                            case this.escapeChar:
                                escaped = true;
                                break;
                            case '\r':
                            case '\n':
                                break;
                            case '\'':
                                singleQuotes = !singleQuotes;
                                escaped = false;
                                break;
                            case '"':
                                doubleQuotes = !doubleQuotes;
                                escaped = false;
                                break;
                            case ' ':
                            case '\t':
                                if (escaped || singleQuotes || doubleQuotes) break;
                                i = j - 1;
                                continue argumentLoop;
                            case '}':
                                i = j;
                                continue argumentLoop;
                            default:
                                escaped = false;
                                break;
                        }
                        break argumentLoop;
                    }
                    break;
            }
        }
        if (argStart !== -1 && argStart !== content.length) {
            let end = endingEscape ? content.length - 1 : content.length;
            let value = content.substring(argStart, end);
            args.push(new $fd8464c2f2e17cdd$exports.Argument(value, $06cc642bc3981461$exports.Range.create(this.document.positionAt(instructionNameEndOffset + start + argStart), this.document.positionAt(instructionNameEndOffset + start + end))));
        }
        return args;
    }
    createSpacedArgument(argStart, args, content, mark, instructionNameEndOffset, start) {
        if (argStart !== -1) args.push(new $fd8464c2f2e17cdd$exports.Argument(content.substring(argStart, mark), $06cc642bc3981461$exports.Range.create(this.document.positionAt(instructionNameEndOffset + start + argStart), this.document.positionAt(instructionNameEndOffset + start + mark))));
    }
}
$2ca485aa86c8977f$exports.PropertyInstruction = $2ca485aa86c8977f$var$PropertyInstruction;


class $5a76935495422f85$var$Arg extends $2ca485aa86c8977f$exports.PropertyInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
        this.property = null;
        const args = this.getPropertyArguments();
        if (args.length === 1) this.property = new $7409057aad957c3f$exports.Property(this.document, this.escapeChar, args[0]);
        else this.property = null;
    }
    /**
     * Returns the variable defined by this ARG. This may be null if
     * this ARG instruction is malformed and has no variable
     * declaration.
     */ getProperty() {
        return this.property;
    }
}
$5a76935495422f85$exports.Arg = $5a76935495422f85$var$Arg;


var $0649f3355b6da887$exports = {};
"use strict";
Object.defineProperty($0649f3355b6da887$exports, "__esModule", {
    value: true
});
$0649f3355b6da887$exports.Cmd = void 0;

class $0649f3355b6da887$var$Cmd extends $3b4228194c2eb101$exports.JSONInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
}
$0649f3355b6da887$exports.Cmd = $0649f3355b6da887$var$Cmd;


var $2c229c09a496385b$exports = {};
"use strict";
Object.defineProperty($2c229c09a496385b$exports, "__esModule", {
    value: true
});
$2c229c09a496385b$exports.Copy = void 0;

class $2c229c09a496385b$var$Copy extends $3b4228194c2eb101$exports.JSONInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
    stopSearchingForFlags(argument) {
        return argument.indexOf("--") === -1;
    }
    getFromFlag() {
        let flags = super.getFlags();
        return flags.length === 1 && flags[0].getName() === "from" ? flags[0] : null;
    }
    /**
     * Returns there here-documents that are defined in this RUN
     * instruction.
     *
     * This API is experimental and subject to change.
     */ getHeredocs() {
        return super.getHeredocs();
    }
}
$2c229c09a496385b$exports.Copy = $2c229c09a496385b$var$Copy;


var $3d346d2ed0971cf2$exports = {};
"use strict";
Object.defineProperty($3d346d2ed0971cf2$exports, "__esModule", {
    value: true
});
$3d346d2ed0971cf2$exports.Env = void 0;

class $3d346d2ed0971cf2$var$Env extends $2ca485aa86c8977f$exports.PropertyInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
    getProperties() {
        return super.getProperties();
    }
}
$3d346d2ed0971cf2$exports.Env = $3d346d2ed0971cf2$var$Env;


var $b050b63cb7583129$exports = {};
"use strict";
Object.defineProperty($b050b63cb7583129$exports, "__esModule", {
    value: true
});
$b050b63cb7583129$exports.Entrypoint = void 0;

class $b050b63cb7583129$var$Entrypoint extends $3b4228194c2eb101$exports.JSONInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
}
$b050b63cb7583129$exports.Entrypoint = $b050b63cb7583129$var$Entrypoint;


var $85dc5fc1deed3858$exports = {};
"use strict";
Object.defineProperty($85dc5fc1deed3858$exports, "__esModule", {
    value: true
});
$85dc5fc1deed3858$exports.From = void 0;


class $85dc5fc1deed3858$var$From extends $49f4c57b99c16419$exports.ModifiableInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
    stopSearchingForFlags(argument) {
        return argument.indexOf("--") === -1;
    }
    getImage() {
        return this.getRangeContent(this.getImageRange());
    }
    /**
     * Returns the name of the image that will be used as the base image.
     *
     * @return the base image's name, or null if unspecified
     */ getImageName() {
        return this.getRangeContent(this.getImageNameRange());
    }
    /**
     * Returns the range that covers the name of the image used by
     * this instruction.
     *
     * @return the range of the name of this instruction's argument,
     *         or null if no image has been specified
     */ getImageNameRange() {
        let range = this.getImageRange();
        if (range) {
            let registryRange = this.getRegistryRange();
            if (registryRange) range.start = this.document.positionAt(this.document.offsetAt(registryRange.end) + 1);
            let tagRange = this.getImageTagRange();
            let digestRange = this.getImageDigestRange();
            if (tagRange === null) {
                if (digestRange !== null) range.end = this.document.positionAt(this.document.offsetAt(digestRange.start) - 1);
            } else range.end = this.document.positionAt(this.document.offsetAt(tagRange.start) - 1);
            return range;
        }
        return null;
    }
    /**
     * Returns the range that covers the image argument of this
     * instruction. This includes the tag or digest of the image if
     * it has been specified by the instruction.
     *
     * @return the range of the image argument, or null if no image
     *         has been specified
     */ getImageRange() {
        let args = this.getArguments();
        return args.length !== 0 ? args[0].getRange() : null;
    }
    getImageTag() {
        return this.getRangeContent(this.getImageTagRange());
    }
    /**
     * Returns the range in the document that the tag of the base
     * image encompasses.
     *
     * @return the base image's tag's range in the document, or null
     *         if no tag has been specified
     */ getImageTagRange() {
        const range = this.getImageRange();
        if (range) {
            const rangeStartOffset = this.document.offsetAt(range.start);
            const content = this.getRangeContent(range);
            const atIndex = this.indexOf(rangeStartOffset, content, '@');
            const slashIndex = content.indexOf('/');
            if (atIndex === -1) {
                const colonIndex = this.lastIndexOf(rangeStartOffset, content, ':');
                if (colonIndex > slashIndex) return $06cc642bc3981461$exports.Range.create(range.start.line, range.start.character + colonIndex + 1, range.end.line, range.end.character);
            }
            const subcontent = content.substring(0, atIndex);
            const subcolonIndex = subcontent.indexOf(':');
            if (subcolonIndex === -1) return null;
            if (slashIndex === -1) // slash not found suggests no registry and no namespace defined
            return $06cc642bc3981461$exports.Range.create(this.document.positionAt(rangeStartOffset + subcolonIndex + 1), this.document.positionAt(rangeStartOffset + atIndex));
            // both colon and slash found, check if it is a port
            if (subcolonIndex < slashIndex) return null;
            return $06cc642bc3981461$exports.Range.create(this.document.positionAt(rangeStartOffset + subcolonIndex + 1), this.document.positionAt(rangeStartOffset + subcontent.length));
        }
        return null;
    }
    getImageDigest() {
        return this.getRangeContent(this.getImageDigestRange());
    }
    /**
     * Returns the range in the document that the digest of the base
     * image encompasses.
     *
     * @return the base image's digest's range in the document, or null
     *         if no digest has been specified
     */ getImageDigestRange() {
        let range = this.getImageRange();
        if (range) {
            let content = this.getRangeContent(range);
            let index = this.lastIndexOf(this.document.offsetAt(range.start), content, '@');
            if (index !== -1) return $06cc642bc3981461$exports.Range.create(range.start.line, range.start.character + index + 1, range.end.line, range.end.character);
        }
        return null;
    }
    indexOf(documentOffset, content, searchString) {
        let index = content.indexOf(searchString);
        const variables = this.getVariables();
        for(let i = 0; i < variables.length; i++){
            const position = documentOffset + index;
            const variableRange = variables[i].getRange();
            if (this.document.offsetAt(variableRange.start) < position && position < this.document.offsetAt(variableRange.end)) {
                const offset = this.document.offsetAt(variableRange.end) - documentOffset;
                const substring = content.substring(offset);
                const subIndex = substring.indexOf(searchString);
                if (subIndex === -1) return -1;
                index = subIndex + offset;
                i = -1;
                continue;
            }
        }
        return index;
    }
    lastIndexOf(documentOffset, content, searchString) {
        let index = content.lastIndexOf(searchString);
        const variables = this.getVariables();
        for(let i = 0; i < variables.length; i++){
            const position = documentOffset + index;
            const variableRange = variables[i].getRange();
            if (this.document.offsetAt(variableRange.start) < position && position < this.document.offsetAt(variableRange.end)) {
                index = content.substring(0, index).lastIndexOf(searchString);
                if (index === -1) return -1;
                i = -1;
                continue;
            }
        }
        return index;
    }
    getRegistry() {
        return this.getRangeContent(this.getRegistryRange());
    }
    getRegistryRange() {
        const range = this.getImageRange();
        if (range) {
            const tagRange = this.getImageTagRange();
            const digestRange = this.getImageDigestRange();
            if (tagRange === null) {
                if (digestRange !== null) range.end = this.document.positionAt(this.document.offsetAt(digestRange.start) - 1);
            } else range.end = this.document.positionAt(this.document.offsetAt(tagRange.start) - 1);
            const content = this.getRangeContent(range);
            const rangeStart = this.document.offsetAt(range.start);
            const startingSlashIndex = this.indexOf(rangeStart, content, '/');
            if (startingSlashIndex === -1) return null;
            const portIndex = this.indexOf(rangeStart, content, ':');
            const dotIndex = this.indexOf(rangeStart, content, '.');
            // hostname detected
            if (portIndex !== -1 || dotIndex !== -1) return $06cc642bc3981461$exports.Range.create(range.start, this.document.positionAt(rangeStart + startingSlashIndex));
            const registry = content.substring(0, startingSlashIndex);
            // localhost registry detected
            if (registry === 'localhost') return $06cc642bc3981461$exports.Range.create(range.start, this.document.positionAt(rangeStart + startingSlashIndex));
        }
        return null;
    }
    getBuildStage() {
        let range = this.getBuildStageRange();
        return range === null ? null : this.getRangeContent(range);
    }
    getBuildStageRange() {
        let args = this.getArguments();
        if (args.length > 2 && args[1].getValue().toUpperCase() === "AS") return args[2].getRange();
        return null;
    }
    getPlatformFlag() {
        let flags = super.getFlags();
        return flags.length === 1 && flags[0].getName() === "platform" ? flags[0] : null;
    }
}
$85dc5fc1deed3858$exports.From = $85dc5fc1deed3858$var$From;


var $42116fe91fad7e91$exports = {};
"use strict";
Object.defineProperty($42116fe91fad7e91$exports, "__esModule", {
    value: true
});
$42116fe91fad7e91$exports.Healthcheck = void 0;

class $42116fe91fad7e91$var$Healthcheck extends $49f4c57b99c16419$exports.ModifiableInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
    stopSearchingForFlags(argument) {
        argument = argument.toUpperCase();
        return argument === "CMD" || argument === "NONE";
    }
    getSubcommand() {
        let args = this.getArguments();
        return args.length !== 0 ? args[0] : null;
    }
}
$42116fe91fad7e91$exports.Healthcheck = $42116fe91fad7e91$var$Healthcheck;


var $22b9fcf785f8455d$exports = {};
"use strict";
Object.defineProperty($22b9fcf785f8455d$exports, "__esModule", {
    value: true
});
$22b9fcf785f8455d$exports.Label = void 0;


class $22b9fcf785f8455d$var$Label extends $2ca485aa86c8977f$exports.PropertyInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
    getVariables() {
        const variables = super.getVariables();
        const properties = this.getProperties();
        // iterate over all of this LABEL's properties
        for (const property of properties){
            const value = property.getUnescapedValue();
            // check if the value is contained in single quotes,
            // single quotes would indicate a literal value
            if (value !== null && value.length > 2 && value.charAt(0) === '\'' && value.charAt(value.length - 1) === '\'') {
                const range = property.getValueRange();
                for(let i = 0; i < variables.length; i++)// if a variable is in a single quote, remove it from the list
                if ($bbec610f07beb4be$exports.Util.isInsideRange(variables[i].getRange().start, range)) {
                    variables.splice(i, 1);
                    i--;
                }
            }
        }
        return variables;
    }
    getProperties() {
        return super.getProperties();
    }
}
$22b9fcf785f8455d$exports.Label = $22b9fcf785f8455d$var$Label;


var $41207e33912a07be$exports = {};
"use strict";
Object.defineProperty($41207e33912a07be$exports, "__esModule", {
    value: true
});
$41207e33912a07be$exports.Onbuild = void 0;



class $41207e33912a07be$var$Onbuild extends $dbcf927cc6c66108$exports.Instruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
    getTrigger() {
        let trigger = this.getTriggerWord();
        return trigger === null ? null : trigger.toUpperCase();
    }
    getTriggerWord() {
        return this.getRangeContent(this.getTriggerRange());
    }
    getTriggerRange() {
        let args = this.getArguments();
        return args.length > 0 ? args[0].getRange() : null;
    }
    getTriggerInstruction() {
        let triggerRange = this.getTriggerRange();
        if (triggerRange === null) return null;
        let args = this.getArguments();
        return $256398e441c094f1$exports.Parser.createInstruction(this.document, this.dockerfile, this.escapeChar, $06cc642bc3981461$exports.Range.create(args[0].getRange().start, this.getRange().end), this.getTriggerWord(), triggerRange);
    }
}
$41207e33912a07be$exports.Onbuild = $41207e33912a07be$var$Onbuild;


var $c91ee04cc9874545$exports = {};
"use strict";
Object.defineProperty($c91ee04cc9874545$exports, "__esModule", {
    value: true
});
$c91ee04cc9874545$exports.Run = void 0;

class $c91ee04cc9874545$var$Run extends $3b4228194c2eb101$exports.JSONInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
    stopSearchingForFlags(argument) {
        return argument.indexOf("--") === -1;
    }
    /**
     * Returns there here-documents that are defined in this RUN
     * instruction.
     *
     * This API is experimental and subject to change.
     */ getHeredocs() {
        return super.getHeredocs();
    }
}
$c91ee04cc9874545$exports.Run = $c91ee04cc9874545$var$Run;


var $7aeadbd8c3d6679b$exports = {};
"use strict";
Object.defineProperty($7aeadbd8c3d6679b$exports, "__esModule", {
    value: true
});
$7aeadbd8c3d6679b$exports.Shell = void 0;

class $7aeadbd8c3d6679b$var$Shell extends $3b4228194c2eb101$exports.JSONInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
}
$7aeadbd8c3d6679b$exports.Shell = $7aeadbd8c3d6679b$var$Shell;


var $ff5aeb8c074730af$exports = {};
"use strict";
Object.defineProperty($ff5aeb8c074730af$exports, "__esModule", {
    value: true
});
$ff5aeb8c074730af$exports.Stopsignal = void 0;

class $ff5aeb8c074730af$var$Stopsignal extends $dbcf927cc6c66108$exports.Instruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
}
$ff5aeb8c074730af$exports.Stopsignal = $ff5aeb8c074730af$var$Stopsignal;


var $8cb1c98967cfcc95$exports = {};
"use strict";
Object.defineProperty($8cb1c98967cfcc95$exports, "__esModule", {
    value: true
});
$8cb1c98967cfcc95$exports.Workdir = void 0;

class $8cb1c98967cfcc95$var$Workdir extends $dbcf927cc6c66108$exports.Instruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
    /**
     * Returns the path that has been defined. Note that this path may
     * be absolute or relative depending on what was written in the
     * instruction.
     *
     * @return the working directory's path, or null if this
     *         instruction has no arguments
     */ getPath() {
        return this.getArgumentsContent();
    }
    /**
     * Returns the absolute path that this instruction resolves to. The
     * function will inspect prior WORKDIR instructions in the current
     * image or another build stage in the Dockerfile to try to
     * determine this.
     *
     * @return the absolute path of the working directory, or null if
     *         this instruction has no arguments, or undefined if it
     *         cannot be determined because only relative paths could be
     *         found
     */ getAbsolutePath() {
        const path = this.getPath();
        if (path === null || path.startsWith("/")) return path;
        const startLine = this.getRange().start.line;
        const hierarchy = this.dockerfile.getStageHierarchy(startLine);
        for(let i = hierarchy.length - 1; i >= 0; i--){
            const workdirs = hierarchy[i].getWORKDIRs();
            for(let j = workdirs.length - 1; j >= 0; j--)if (workdirs[j].getRange().start.line < startLine) {
                const parent = workdirs[j].getAbsolutePath();
                if (parent === undefined || parent === null) return undefined;
                return parent.endsWith("/") ? parent + path : parent + "/" + path;
            }
        }
        return undefined;
    }
}
$8cb1c98967cfcc95$exports.Workdir = $8cb1c98967cfcc95$var$Workdir;


var $a7b0ede9dd0dae28$exports = {};
"use strict";
Object.defineProperty($a7b0ede9dd0dae28$exports, "__esModule", {
    value: true
});
$a7b0ede9dd0dae28$exports.User = void 0;

class $a7b0ede9dd0dae28$var$User extends $dbcf927cc6c66108$exports.Instruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
}
$a7b0ede9dd0dae28$exports.User = $a7b0ede9dd0dae28$var$User;


var $10b381ecc702b5cf$exports = {};
"use strict";
Object.defineProperty($10b381ecc702b5cf$exports, "__esModule", {
    value: true
});
$10b381ecc702b5cf$exports.Volume = void 0;

class $10b381ecc702b5cf$var$Volume extends $3b4228194c2eb101$exports.JSONInstruction {
    constructor(document, range, dockerfile, escapeChar, instruction, instructionRange){
        super(document, range, dockerfile, escapeChar, instruction, instructionRange);
    }
}
$10b381ecc702b5cf$exports.Volume = $10b381ecc702b5cf$var$Volume;


var $53dd7a59ad4b3887$exports = {};
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */ 'use strict';
Object.defineProperty($53dd7a59ad4b3887$exports, "__esModule", {
    value: true
});
$53dd7a59ad4b3887$exports.Dockerfile = void 0;


var $319e196289bc5b12$exports = {};
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */ 'use strict';
Object.defineProperty($319e196289bc5b12$exports, "__esModule", {
    value: true
});
$319e196289bc5b12$exports.ImageTemplate = void 0;











class $319e196289bc5b12$var$ImageTemplate {
    constructor(){
        this.comments = [];
        this.instructions = [];
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    getComments() {
        return this.comments;
    }
    addInstruction(instruction) {
        this.instructions.push(instruction);
    }
    getInstructions() {
        return this.instructions;
    }
    getInstructionAt(line) {
        for (let instruction of this.instructions){
            if ($bbec610f07beb4be$exports.Util.isInsideRange($06cc642bc3981461$exports.Position.create(line, 0), instruction.getRange())) return instruction;
        }
        return null;
    }
    /**
     * Gets all the ARG instructions that are defined in this image.
     */ getARGs() {
        let args = [];
        for (let instruction of this.instructions)if (instruction instanceof $5a76935495422f85$exports.Arg) args.push(instruction);
        return args;
    }
    /**
     * Gets all the CMD instructions that are defined in this image.
     */ getCMDs() {
        let cmds = [];
        for (let instruction of this.instructions)if (instruction instanceof $0649f3355b6da887$exports.Cmd) cmds.push(instruction);
        return cmds;
    }
    /**
     * Gets all the COPY instructions that are defined in this image.
     */ getCOPYs() {
        let copies = [];
        for (let instruction of this.instructions)if (instruction instanceof $2c229c09a496385b$exports.Copy) copies.push(instruction);
        return copies;
    }
    /**
     * Gets all the ENTRYPOINT instructions that are defined in this image.
     */ getENTRYPOINTs() {
        let froms = [];
        for (let instruction of this.instructions)if (instruction instanceof $b050b63cb7583129$exports.Entrypoint) froms.push(instruction);
        return froms;
    }
    /**
     * Gets all the ENV instructions that are defined in this image.
     */ getENVs() {
        let args = [];
        for (let instruction of this.instructions)if (instruction instanceof $3d346d2ed0971cf2$exports.Env) args.push(instruction);
        return args;
    }
    getFROM() {
        for (const instruction of this.instructions){
            if (instruction instanceof $85dc5fc1deed3858$exports.From) return instruction;
        }
        return null;
    }
    /**
     * Gets all the FROM instructions that are defined in this image.
     */ getFROMs() {
        let froms = [];
        for (let instruction of this.instructions)if (instruction instanceof $85dc5fc1deed3858$exports.From) froms.push(instruction);
        return froms;
    }
    /**
     * Gets all the HEALTHCHECK instructions that are defined in this image.
     */ getHEALTHCHECKs() {
        let froms = [];
        for (let instruction of this.instructions)if (instruction instanceof $42116fe91fad7e91$exports.Healthcheck) froms.push(instruction);
        return froms;
    }
    getWORKDIRs() {
        const workdirs = [];
        for (const instruction of this.instructions)if (instruction instanceof $8cb1c98967cfcc95$exports.Workdir) workdirs.push(instruction);
        return workdirs;
    }
    getOnbuildTriggers() {
        let triggers = [];
        for (let instruction of this.instructions)if (instruction instanceof $41207e33912a07be$exports.Onbuild) {
            let trigger = instruction.getTriggerInstruction();
            if (trigger) triggers.push(trigger);
        }
        return triggers;
    }
    getAvailableVariables(currentLine) {
        const variables = [];
        for (const arg of this.getARGs())if (arg.isBefore(currentLine)) {
            const property = arg.getProperty();
            if (property) {
                const variable = property.getName();
                if (variables.indexOf(variable) === -1) variables.push(variable);
            }
        }
        for (const env of this.getENVs()){
            if (env.isBefore(currentLine)) for (const property of env.getProperties()){
                const variable = property.getName();
                if (variables.indexOf(variable) === -1) variables.push(variable);
            }
        }
        return variables;
    }
    /**
     * Resolves a variable with the given name at the specified line
     * to its value. If null is returned, then the variable has been
     * defined but no value was given. If undefined is returned, then
     * a variable with the given name has not been defined yet as of
     * the given line.
     *
     * @param variable the name of the variable to resolve
     * @param line the line number that the variable is on, zero-based
     * @return the value of the variable as defined by an ARG or ENV
     *         instruction, or null if no value has been specified, or
     *         undefined if a variable with the given name has not
     *         been defined
     */ resolveVariable(variable, line) {
        let envs = this.getENVs();
        for(let i = envs.length - 1; i >= 0; i--){
            if (envs[i].isBefore(line)) for (let property of envs[i].getProperties()){
                if (property.getName() === variable) return property.getValue();
            }
        }
        let args = this.getARGs();
        for(let i = args.length - 1; i >= 0; i--)if (args[i].isBefore(line)) {
            let property = args[i].getProperty();
            if (property && property.getName() === variable) return property.getValue();
        }
        return undefined;
    }
    getRange() {
        const instructions = this.getInstructions();
        if (instructions.length === 0) // all templates should have instructions, this only happens for
        // the initial set of instruction
        return $06cc642bc3981461$exports.Range.create(0, 0, 0, 0);
        const instructionStart = instructions[0].getRange().start;
        const instructionEnd = instructions[instructions.length - 1].getRange().end;
        return $06cc642bc3981461$exports.Range.create(instructionStart, instructionEnd);
    }
    contains(position) {
        const range = this.getRange();
        if (range === null) return false;
        return $bbec610f07beb4be$exports.Util.isInsideRange(position, range);
    }
}
$319e196289bc5b12$exports.ImageTemplate = $319e196289bc5b12$var$ImageTemplate;





class $53dd7a59ad4b3887$var$Dockerfile extends $319e196289bc5b12$exports.ImageTemplate {
    constructor(document){
        super();
        this.initialInstructions = new $319e196289bc5b12$exports.ImageTemplate();
        this.buildStages = [];
        this.directives = [];
        /**
         * Whether a FROM instruction has been added to this Dockerfile or not.
         */ this.foundFrom = false;
        this.document = document;
    }
    getEscapeCharacter() {
        for (const directive of this.directives)if (directive.getDirective() === $54b0c2f7fc5ba86a$exports.Directive.escape) {
            const value = directive.getValue();
            if (value === '\\' || value === '`') return value;
        }
        return '\\';
    }
    getInitialARGs() {
        return this.initialInstructions.getARGs();
    }
    getContainingImage(position) {
        let range = $06cc642bc3981461$exports.Range.create($06cc642bc3981461$exports.Position.create(0, 0), this.document.positionAt(this.document.getText().length));
        if (!$bbec610f07beb4be$exports.Util.isInsideRange(position, range)) // not inside the document, invalid position
        return null;
        if (this.initialInstructions.getComments().length > 0 || this.initialInstructions.getInstructions().length > 0) {
            if ($bbec610f07beb4be$exports.Util.isInsideRange(position, this.initialInstructions.getRange())) return this.initialInstructions;
        }
        for (const buildStage of this.buildStages){
            if ($bbec610f07beb4be$exports.Util.isInsideRange(position, buildStage.getRange())) return buildStage;
        }
        return this;
    }
    addInstruction(instruction) {
        if (instruction.getKeyword() === $54b0c2f7fc5ba86a$exports.Keyword.FROM) {
            this.currentBuildStage = new $319e196289bc5b12$exports.ImageTemplate();
            this.buildStages.push(this.currentBuildStage);
            this.foundFrom = true;
        } else if (!this.foundFrom) this.initialInstructions.addInstruction(instruction);
        if (this.foundFrom) this.currentBuildStage.addInstruction(instruction);
        super.addInstruction(instruction);
    }
    setDirectives(directives) {
        this.directives = directives;
    }
    getDirective() {
        return this.directives.length === 0 ? null : this.directives[0];
    }
    getDirectives() {
        return this.directives;
    }
    resolveVariable(variable, line) {
        for (let from of this.getFROMs()){
            let range = from.getRange();
            if (range.start.line <= line && line <= range.end.line) {
                // resolve the FROM variable against the initial ARGs
                let initialARGs = new $319e196289bc5b12$exports.ImageTemplate();
                for (let instruction of this.initialInstructions.getARGs())initialARGs.addInstruction(instruction);
                return initialARGs.resolveVariable(variable, line);
            }
        }
        let image = this.getContainingImage($06cc642bc3981461$exports.Position.create(line, 0));
        if (image === null) return undefined;
        let resolvedVariable = image.resolveVariable(variable, line);
        if (resolvedVariable === null) {
            // refers to an uninitialized ARG variable,
            // try resolving it against the initial ARGs then
            let initialARGs = new $319e196289bc5b12$exports.ImageTemplate();
            for (let instruction of this.initialInstructions.getARGs())initialARGs.addInstruction(instruction);
            return initialARGs.resolveVariable(variable, line);
        }
        return resolvedVariable;
    }
    getAvailableVariables(currentLine) {
        if (this.getInstructionAt(currentLine) instanceof $85dc5fc1deed3858$exports.From) {
            let variables = [];
            for (let arg of this.getInitialARGs()){
                let property = arg.getProperty();
                if (property) variables.push(property.getName());
            }
            return variables;
        }
        let image = this.getContainingImage($06cc642bc3981461$exports.Position.create(currentLine, 0));
        return image ? image.getAvailableVariables(currentLine) : [];
    }
    getParentStage(image) {
        const templateFrom = image.getFROM();
        const imageName = templateFrom === null ? null : templateFrom.getImageName();
        if (imageName === null) return null;
        for (const from of this.getFROMs())if (from.getBuildStage() === imageName) {
            const range = from.getRange();
            // on the same line then it's an image that shares the name as the build stage
            if (range.start.line === templateFrom.getRange().start.line) return null;
            return this.getContainingImage(range.start);
        }
        return null;
    }
    getStageHierarchy(line) {
        const image = this.getContainingImage($06cc642bc3981461$exports.Position.create(line, 0));
        if (image === null) return [];
        const stages = [
            image
        ];
        let stage = this.getParentStage(image);
        while(stage !== null){
            stages.splice(0, 0, stage);
            stage = this.getParentStage(stage);
        }
        return stages;
    }
    getAvailableWorkingDirectories(line) {
        const availableDirectories = new Set();
        for (const image of this.getStageHierarchy(line)){
            for (const workdir of image.getWORKDIRs())if (workdir.getRange().end.line < line) {
                let directory = workdir.getAbsolutePath();
                if (directory !== undefined && directory !== null) {
                    if (!directory.endsWith("/")) directory += "/";
                    availableDirectories.add(directory);
                }
            }
        }
        return Array.from(availableDirectories);
    }
    /**
     * Internally reorganize the comments in the Dockerfile and allocate
     * them to the relevant build stages that they belong to.
     */ organizeComments() {
        const comments = this.getComments();
        for(let i = 0; i < comments.length; i++)if ($bbec610f07beb4be$exports.Util.isInsideRange(comments[i].getRange().end, this.initialInstructions.getRange())) this.initialInstructions.addComment(comments[i]);
        else {
            for (const buildStage of this.buildStages)if ($bbec610f07beb4be$exports.Util.isInsideRange(comments[i].getRange().start, buildStage.getRange())) buildStage.addComment(comments[i]);
        }
    }
    getRange() {
        const comments = this.getComments();
        const instructions = this.getInstructions();
        let range = null;
        if (comments.length === 0) {
            if (instructions.length > 0) range = $06cc642bc3981461$exports.Range.create(instructions[0].getRange().start, instructions[instructions.length - 1].getRange().end);
        } else if (instructions.length === 0) range = $06cc642bc3981461$exports.Range.create(comments[0].getRange().start, comments[comments.length - 1].getRange().end);
        else {
            const commentStart = comments[0].getRange().start;
            const commentEnd = comments[comments.length - 1].getRange().end;
            const instructionStart = instructions[0].getRange().start;
            const instructionEnd = instructions[instructions.length - 1].getRange().end;
            if (commentStart.line < instructionStart.line) {
                if (commentEnd.line < instructionEnd.line) range = $06cc642bc3981461$exports.Range.create(commentStart, instructionEnd);
                range = $06cc642bc3981461$exports.Range.create(commentStart, commentEnd);
            } else if (commentEnd.line < instructionEnd.line) range = $06cc642bc3981461$exports.Range.create(instructionStart, instructionEnd);
            else range = $06cc642bc3981461$exports.Range.create(instructionStart, commentEnd);
        }
        if (range === null) {
            if (this.directives.length === 0) return null;
            return this.directives[0].getRange();
        } else if (this.directives.length === 0) return range;
        return $06cc642bc3981461$exports.Range.create(this.directives[0].getRange().start, range.end);
    }
}
$53dd7a59ad4b3887$exports.Dockerfile = $53dd7a59ad4b3887$var$Dockerfile;




class $256398e441c094f1$var$Parser {
    constructor(){
        this.escapeChar = null;
    }
    static createInstruction(document, dockerfile, escapeChar, lineRange, instruction, instructionRange) {
        switch(instruction.toUpperCase()){
            case "ADD":
                return new $e74091221b948ca0$exports.Add(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "ARG":
                return new $5a76935495422f85$exports.Arg(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "CMD":
                return new $0649f3355b6da887$exports.Cmd(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "COPY":
                return new $2c229c09a496385b$exports.Copy(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "ENTRYPOINT":
                return new $b050b63cb7583129$exports.Entrypoint(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "ENV":
                return new $3d346d2ed0971cf2$exports.Env(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "FROM":
                return new $85dc5fc1deed3858$exports.From(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "HEALTHCHECK":
                return new $42116fe91fad7e91$exports.Healthcheck(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "LABEL":
                return new $22b9fcf785f8455d$exports.Label(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "ONBUILD":
                return new $41207e33912a07be$exports.Onbuild(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "RUN":
                return new $c91ee04cc9874545$exports.Run(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "SHELL":
                return new $7aeadbd8c3d6679b$exports.Shell(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "STOPSIGNAL":
                return new $ff5aeb8c074730af$exports.Stopsignal(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "WORKDIR":
                return new $8cb1c98967cfcc95$exports.Workdir(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "USER":
                return new $a7b0ede9dd0dae28$exports.User(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
            case "VOLUME":
                return new $10b381ecc702b5cf$exports.Volume(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
        }
        return new $dbcf927cc6c66108$exports.Instruction(document, lineRange, dockerfile, escapeChar, instruction, instructionRange);
    }
    getParserDirectives(document, buffer) {
        // reset the escape directive in between runs
        const directives = [];
        this.escapeChar = '';
        const offset = $bbec610f07beb4be$exports.Util.isUTF8BOM(buffer.substring(0, 1)) ? 1 : 0;
        directiveCheck: for(let i = offset; i < buffer.length; i++)switch(buffer.charAt(i)){
            case ' ':
            case '\t':
                break;
            case '\r':
            case '\n':
                break directiveCheck;
            case '#':
                let directiveStart = -1;
                let directiveEnd = -1;
                for(let j = i + 1; j < buffer.length; j++){
                    let char = buffer.charAt(j);
                    switch(char){
                        case ' ':
                        case '\t':
                            if (directiveStart !== -1 && directiveEnd === -1) directiveEnd = j;
                            break;
                        case '\r':
                        case '\n':
                            break directiveCheck;
                        case '=':
                            let valueStart = -1;
                            let valueEnd = -1;
                            if (directiveEnd === -1) directiveEnd = j;
                            // assume the line ends with the file
                            let lineEnd = buffer.length;
                            directiveValue: for(let k = j + 1; k < buffer.length; k++){
                                char = buffer.charAt(k);
                                switch(char){
                                    case '\r':
                                    case '\n':
                                        if (valueStart !== -1 && valueEnd === -1) valueEnd = k;
                                        // line break found, reset
                                        lineEnd = k;
                                        break directiveValue;
                                    case '\t':
                                    case ' ':
                                        if (valueStart !== -1 && valueEnd === -1) valueEnd = k;
                                        continue;
                                    default:
                                        if (valueStart === -1) valueStart = k;
                                        break;
                                }
                            }
                            if (directiveStart === -1) break directiveCheck;
                            if (valueStart === -1) {
                                // no non-whitespace characters found, highlight all the characters then
                                valueStart = j + 1;
                                valueEnd = lineEnd;
                            } else if (valueEnd === -1) // reached EOF
                            valueEnd = buffer.length;
                            const lineRange = $06cc642bc3981461$exports.Range.create(document.positionAt(i), document.positionAt(lineEnd));
                            const nameRange = $06cc642bc3981461$exports.Range.create(document.positionAt(directiveStart), document.positionAt(directiveEnd));
                            const valueRange = $06cc642bc3981461$exports.Range.create(document.positionAt(valueStart), document.positionAt(valueEnd));
                            directives.push(new $68331fc9b733e06e$exports.ParserDirective(document, lineRange, nameRange, valueRange));
                            directiveStart = -1;
                            if (buffer.charAt(valueEnd) === '\r') // skip over the \r
                            i = valueEnd + 1;
                            else i = valueEnd;
                            continue directiveCheck;
                        default:
                            if (directiveStart === -1) directiveStart = j;
                            break;
                    }
                }
                break;
            default:
                break directiveCheck;
        }
        return directives;
    }
    parse(buffer) {
        this.document = $af5dbdd39a2d358f$exports.TextDocument.create("", "", 0, buffer);
        this.buffer = buffer;
        let dockerfile = new $53dd7a59ad4b3887$exports.Dockerfile(this.document);
        let directives = this.getParserDirectives(this.document, this.buffer);
        let offset = 0;
        this.escapeChar = '\\';
        if (directives.length > 0) {
            dockerfile.setDirectives(directives);
            this.escapeChar = dockerfile.getEscapeCharacter();
            // start parsing after the directives
            offset = this.document.offsetAt($06cc642bc3981461$exports.Position.create(directives.length, 0));
        } else if ($bbec610f07beb4be$exports.Util.isUTF8BOM(buffer.substring(0, 1))) offset = 1;
        for(let i = offset; i < this.buffer.length; i++){
            const char = this.buffer.charAt(i);
            switch(char){
                case ' ':
                case '\t':
                case '\r':
                case '\n':
                    break;
                case '#':
                    i = this.processComment(dockerfile, i);
                    break;
                default:
                    i = this.processInstruction(dockerfile, char, i);
                    break;
            }
        }
        dockerfile.organizeComments();
        return dockerfile;
    }
    processInstruction(dockerfile, char, start) {
        let instruction = char;
        let instructionEnd = -1;
        let escapedInstruction = false;
        instructionCheck: for(let i = start + 1; i < this.buffer.length; i++){
            char = this.buffer.charAt(i);
            switch(char){
                case this.escapeChar:
                    escapedInstruction = true;
                    char = this.buffer.charAt(i + 1);
                    if (char === '\r' || char === '\n') {
                        if (instructionEnd === -1) instructionEnd = i;
                        i++;
                    } else if (char === ' ' || char === '\t') {
                        for(let j = i + 2; j < this.buffer.length; j++)switch(this.buffer.charAt(j)){
                            case ' ':
                            case '\t':
                                break;
                            case '\r':
                            case '\n':
                                i = j;
                                continue instructionCheck;
                            default:
                                // found an argument, mark end of instruction
                                instructionEnd = i + 1;
                                instruction = instruction + this.escapeChar;
                                i = j - 2;
                                continue instructionCheck;
                        }
                        // reached EOF
                        instructionEnd = i + 1;
                        instruction = instruction + this.escapeChar;
                        break instructionCheck;
                    } else {
                        instructionEnd = i + 1;
                        instruction = instruction + this.escapeChar;
                        // reset and consider it as one contiguous word
                        escapedInstruction = false;
                    }
                    break;
                case ' ':
                case '\t':
                    if (escapedInstruction) {
                        // on an escaped newline, need to search for non-whitespace
                        escapeCheck: for(let j = i + 1; j < this.buffer.length; j++)switch(this.buffer.charAt(j)){
                            case ' ':
                            case '\t':
                                break;
                            case '\r':
                            case '\n':
                                i = j;
                                continue instructionCheck;
                            default:
                                break escapeCheck;
                        }
                        escapedInstruction = false;
                    }
                    if (instructionEnd === -1) instructionEnd = i;
                    i = this.processArguments(dockerfile, instruction, instructionEnd, start, i);
                    dockerfile.addInstruction(this.createInstruction(dockerfile, instruction, start, instructionEnd, i));
                    return i;
                case '\r':
                case '\n':
                    if (escapedInstruction) continue;
                    if (instructionEnd === -1) instructionEnd = i;
                    dockerfile.addInstruction(this.createInstruction(dockerfile, instruction, start, i, i));
                    return i;
                case '#':
                    if (escapedInstruction) continue;
                default:
                    instructionEnd = i + 1;
                    instruction = instruction + char;
                    escapedInstruction = false;
                    break;
            }
        }
        // reached EOF
        if (instructionEnd === -1) instructionEnd = this.buffer.length;
        dockerfile.addInstruction(this.createInstruction(dockerfile, instruction, start, instructionEnd, this.buffer.length));
        return this.buffer.length;
    }
    processHeredocs(instruction, offset) {
        let keyword = instruction.getKeyword();
        if (keyword === $54b0c2f7fc5ba86a$exports.Keyword.ONBUILD) {
            instruction = instruction.getTriggerInstruction();
            if (instruction === null) return offset;
            keyword = instruction.getKeyword();
        }
        if (keyword !== $54b0c2f7fc5ba86a$exports.Keyword.ADD && keyword !== $54b0c2f7fc5ba86a$exports.Keyword.COPY && keyword !== $54b0c2f7fc5ba86a$exports.Keyword.RUN) return offset;
        const heredocs = [];
        for (const arg of instruction.getArguments()){
            const value = arg.getValue();
            if (value.startsWith("<<") && value.length > 2) {
                const name = $bbec610f07beb4be$exports.Util.parseHeredocName(value);
                if (name !== null) heredocs.push(name);
            }
        }
        if (heredocs.length > 0) for (const heredoc of heredocs)offset = this.parseHeredoc(heredoc, offset);
        return offset;
    }
    processArguments(dockerfile, instruction, instructionEnd, start, offset) {
        let escaped = false;
        argumentsCheck: for(let i = offset + 1; i < this.buffer.length; i++)switch(this.buffer.charAt(i)){
            case '\r':
            case '\n':
                if (escaped) continue;
                return this.processHeredocs(this.createInstruction(dockerfile, instruction, start, instructionEnd, i), i);
            case this.escapeChar:
                const next = this.buffer.charAt(i + 1);
                if (next === '\n' || next === '\r') {
                    escaped = true;
                    i++;
                } else if (next === ' ' || next === '\t') {
                    for(let j = i + 2; j < this.buffer.length; j++)switch(this.buffer.charAt(j)){
                        case ' ':
                        case '\t':
                            break;
                        case '\r':
                        case '\n':
                            escaped = true;
                        default:
                            i = j;
                            continue argumentsCheck;
                    }
                    // reached EOF
                    return this.buffer.length;
                }
                continue;
            case '#':
                if (escaped) {
                    i = this.processComment(dockerfile, i);
                    continue argumentsCheck;
                }
                break;
            case ' ':
            case '\t':
                break;
            default:
                if (escaped) escaped = false;
                break;
        }
        return this.buffer.length;
    }
    processComment(dockerfile, start) {
        let end = this.buffer.length;
        commentLoop: for(let i = start + 1; i < this.buffer.length; i++)switch(this.buffer.charAt(i)){
            case '\r':
            case '\n':
                end = i;
                break commentLoop;
        }
        const range = $06cc642bc3981461$exports.Range.create(this.document.positionAt(start), this.document.positionAt(end));
        dockerfile.addComment(new $56b05761038f14db$exports.Comment(this.document, range));
        return end;
    }
    parseHeredoc(heredocName, offset) {
        let startWord = -1;
        let lineStart = true;
        for(let i = offset; i < this.buffer.length; i++)switch(this.buffer.charAt(i)){
            case ' ':
            case '\t':
                lineStart = false;
                break;
            case '\r':
            case '\n':
                if (startWord !== -1 && heredocName === this.buffer.substring(startWord, i)) return i;
                startWord = -1;
                lineStart = true;
                break;
            default:
                if (lineStart) {
                    startWord = i;
                    lineStart = false;
                }
                break;
        }
        return this.buffer.length;
    }
    createInstruction(dockerfile, instruction, start, instructionEnd, end) {
        const startPosition = this.document.positionAt(start);
        const instructionRange = $06cc642bc3981461$exports.Range.create(startPosition, this.document.positionAt(instructionEnd));
        const lineRange = $06cc642bc3981461$exports.Range.create(startPosition, this.document.positionAt(end));
        return $256398e441c094f1$var$Parser.createInstruction(this.document, dockerfile, this.escapeChar, lineRange, instruction, instructionRange);
    }
}
$256398e441c094f1$exports.Parser = $256398e441c094f1$var$Parser;



Object.defineProperty($54b0c2f7fc5ba86a$exports, "Flag", {
    enumerable: true,
    get: function() {
        return $d4e9108e9cb28d40$exports.Flag;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Instruction", {
    enumerable: true,
    get: function() {
        return $dbcf927cc6c66108$exports.Instruction;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Line", {
    enumerable: true,
    get: function() {
        return $20f51f7aa637c181$exports.Line;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "ParserDirective", {
    enumerable: true,
    get: function() {
        return $68331fc9b733e06e$exports.ParserDirective;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Property", {
    enumerable: true,
    get: function() {
        return $7409057aad957c3f$exports.Property;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Variable", {
    enumerable: true,
    get: function() {
        return $5dece0b9c7342528$exports.Variable;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Add", {
    enumerable: true,
    get: function() {
        return $e74091221b948ca0$exports.Add;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Arg", {
    enumerable: true,
    get: function() {
        return $5a76935495422f85$exports.Arg;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Cmd", {
    enumerable: true,
    get: function() {
        return $0649f3355b6da887$exports.Cmd;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Copy", {
    enumerable: true,
    get: function() {
        return $2c229c09a496385b$exports.Copy;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Entrypoint", {
    enumerable: true,
    get: function() {
        return $b050b63cb7583129$exports.Entrypoint;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Env", {
    enumerable: true,
    get: function() {
        return $3d346d2ed0971cf2$exports.Env;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "From", {
    enumerable: true,
    get: function() {
        return $85dc5fc1deed3858$exports.From;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Healthcheck", {
    enumerable: true,
    get: function() {
        return $42116fe91fad7e91$exports.Healthcheck;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Heredoc", {
    enumerable: true,
    get: function() {
        return $cb038d86fd1b3cbb$exports.Heredoc;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "JSONInstruction", {
    enumerable: true,
    get: function() {
        return $3b4228194c2eb101$exports.JSONInstruction;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Label", {
    enumerable: true,
    get: function() {
        return $22b9fcf785f8455d$exports.Label;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "ModifiableInstruction", {
    enumerable: true,
    get: function() {
        return $49f4c57b99c16419$exports.ModifiableInstruction;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Onbuild", {
    enumerable: true,
    get: function() {
        return $41207e33912a07be$exports.Onbuild;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "PropertyInstruction", {
    enumerable: true,
    get: function() {
        return $2ca485aa86c8977f$exports.PropertyInstruction;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Run", {
    enumerable: true,
    get: function() {
        return $c91ee04cc9874545$exports.Run;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Shell", {
    enumerable: true,
    get: function() {
        return $7aeadbd8c3d6679b$exports.Shell;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Stopsignal", {
    enumerable: true,
    get: function() {
        return $ff5aeb8c074730af$exports.Stopsignal;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "User", {
    enumerable: true,
    get: function() {
        return $a7b0ede9dd0dae28$exports.User;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Volume", {
    enumerable: true,
    get: function() {
        return $10b381ecc702b5cf$exports.Volume;
    }
});

Object.defineProperty($54b0c2f7fc5ba86a$exports, "Workdir", {
    enumerable: true,
    get: function() {
        return $8cb1c98967cfcc95$exports.Workdir;
    }
});
var $54b0c2f7fc5ba86a$var$Keyword;
(function(Keyword) {
    Keyword["ADD"] = "ADD";
    Keyword["ARG"] = "ARG";
    Keyword["CMD"] = "CMD";
    Keyword["COPY"] = "COPY";
    Keyword["ENTRYPOINT"] = "ENTRYPOINT";
    Keyword["ENV"] = "ENV";
    Keyword["EXPOSE"] = "EXPOSE";
    Keyword["FROM"] = "FROM";
    Keyword["HEALTHCHECK"] = "HEALTHCHECK";
    Keyword["LABEL"] = "LABEL";
    Keyword["MAINTAINER"] = "MAINTAINER";
    Keyword["ONBUILD"] = "ONBUILD";
    Keyword["RUN"] = "RUN";
    Keyword["SHELL"] = "SHELL";
    Keyword["STOPSIGNAL"] = "STOPSIGNAL";
    Keyword["USER"] = "USER";
    Keyword["VOLUME"] = "VOLUME";
    Keyword["WORKDIR"] = "WORKDIR";
})($54b0c2f7fc5ba86a$var$Keyword || ($54b0c2f7fc5ba86a$exports.Keyword = $54b0c2f7fc5ba86a$var$Keyword = {}));
var $54b0c2f7fc5ba86a$var$Directive;
(function(Directive) {
    Directive["escape"] = "escape";
    Directive["syntax"] = "syntax";
})($54b0c2f7fc5ba86a$var$Directive || ($54b0c2f7fc5ba86a$exports.Directive = $54b0c2f7fc5ba86a$var$Directive = {}));
$54b0c2f7fc5ba86a$exports.DefaultVariables = [
    "ALL_PROXY",
    "all_proxy",
    "FTP_PROXY",
    "ftp_proxy",
    "HTTP_PROXY",
    "http_proxy",
    "HTTPS_PROXY",
    "https_proxy",
    "NO_PROXY",
    "no_proxy"
];
var $54b0c2f7fc5ba86a$var$DockerfileParser;
(function(DockerfileParser) {
    function parse(content) {
        let parser = new $256398e441c094f1$exports.Parser();
        return parser.parse(content);
    }
    DockerfileParser.parse = parse;
})($54b0c2f7fc5ba86a$var$DockerfileParser || ($54b0c2f7fc5ba86a$exports.DockerfileParser = $54b0c2f7fc5ba86a$var$DockerfileParser = {}));


function $76d06fcdc9bff1f5$export$77714ac6976d0316(args) {
    const opts = (0, $ec42a3295e12ea98$export$2e2bcd8739ae039)(args, {
        default: {
            "cache-map": (0, $bbb9dac42384d004$exports.getInput)("cache-map") || "{}",
            "dockerfile": (0, $bbb9dac42384d004$exports.getInput)("dockerfile") || "Dockerfile",
            "scratch-dir": (0, $bbb9dac42384d004$exports.getInput)("scratch-dir") || "scratch",
            "skip-extraction": ((0, $bbb9dac42384d004$exports.getInput)("skip-extraction") || "false") === "true",
            "extract": process.env[`STATE_POST`] !== undefined,
            "utility-image": (0, $bbb9dac42384d004$exports.getInput)("utility-image") || "ghcr.io/containerd/busybox:latest",
            "builder": (0, $bbb9dac42384d004$exports.getInput)("builder") || "default",
            "help": false
        },
        string: [
            "cache-map",
            "dockerfile",
            "scratch-dir",
            "cache-source",
            "cache-target",
            "utility-image",
            "builder"
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
  --cache-map    The map of actions source paths to container destination paths or mount arguments
  --dockerfile   The Dockerfile to use for the auto-discovery of cache-map. Default: 'Dockerfile'
  --scratch-dir  Where the action is stores some temporary files for its processing. Default: 'scratch'
  --skip-extraction  Skip the extraction of the cache from the docker container
  --utility-image  The container image to use for injecting and extracting the cache. Default: 'ghcr.io/containerd/busybox:latest'
  --builder      The name of the buildx builder to use for the cache injection
  --help         Show this help
`);
}
function $76d06fcdc9bff1f5$var$getCacheMapFromDockerfile(dockerfilePath) {
    const dockerfileContent = (0, $evV72$fs).readFileSync(dockerfilePath, "utf-8");
    const dockerfile = (0, $54b0c2f7fc5ba86a$exports.DockerfileParser).parse(dockerfileContent);
    const cacheMap = {};
    const runInstructions = dockerfile.getInstructions().filter((i)=>i.getKeyword() == 'RUN');
    for (const run of runInstructions){
        for (const flag of run.getFlags())if (flag.getName() == 'mount' && flag.getOption('type')?.getValue() == 'cache') {
            // Extract the `id` flag which defaults to `target` when `id` is not set
            // https://docs.docker.com/reference/dockerfile/#run---mounttypecache
            const id = flag.getOption('id')?.getValue() || flag.getOption('target')?.getValue();
            if (id == null) throw new Error('cache mount must define id or target: ' + flag.toString() + ' in ' + run.toString());
            // The target in this action does not matter as long as it is
            // different than /var/dance-cache of course
            const target = "/var/cache-target";
            cacheMap[id] = {
                id: id,
                target: target
            };
        }
    }
    return cacheMap;
}
function $76d06fcdc9bff1f5$export$8550a4d7282a21d0(opts) {
    try {
        const cacheMap = JSON.parse(opts["cache-map"]);
        if (Object.keys(cacheMap).length !== 0) return cacheMap;
        console.log(`No cache map provided. Trying to parse the Dockerfile to find the cache mount instructions...`);
        const cacheMapFromDockerfile = $76d06fcdc9bff1f5$var$getCacheMapFromDockerfile(opts["dockerfile"]);
        console.log(`Cache map parsed from Dockerfile: ${JSON.stringify(cacheMapFromDockerfile)}`);
        return cacheMapFromDockerfile;
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
function $76d06fcdc9bff1f5$export$6d2b3473b0986646(cacheOptions) {
    if (typeof cacheOptions === "string") // only the target path is provided
    return "";
    else {
        // object is provided
        if ("uid" in cacheOptions && cacheOptions.uid !== undefined) return cacheOptions.uid.toString();
        else return "";
    }
}
function $76d06fcdc9bff1f5$export$4e7da3a92c2dad69(cacheOptions) {
    if (typeof cacheOptions === "string") // only the target path is provided
    return "";
    else {
        // object is provided
        if ("gid" in cacheOptions && cacheOptions.gid !== undefined) return cacheOptions.gid.toString();
        else return "";
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
function $76d06fcdc9bff1f5$export$932deacb99c42350(opts) {
    return opts["builder"] == null || opts["builder"] == "" ? "default" : opts["builder"];
}


var $03c48d50d9d7039f$exports = {};
var $89bc486561c4bcbd$exports = {};
'use strict';

var $a374b65288da9789$exports = {};
'use strict';

var $10eed8306e544906$exports = {};
'use strict';

var $10bb1950eec72619$exports = {};
const $10bb1950eec72619$var$isWindows = process.platform === 'win32' || process.env.OSTYPE === 'cygwin' || process.env.OSTYPE === 'msys';

const $10bb1950eec72619$var$COLON = $10bb1950eec72619$var$isWindows ? ';' : ':';
var $0b1af7ee1bc1c627$exports = {};

var $0b1af7ee1bc1c627$var$core;


if (process.platform === 'win32' || $parcel$global.TESTING_WINDOWS) $0b1af7ee1bc1c627$var$core = (parcelRequire("dE8Bn"));
else $0b1af7ee1bc1c627$var$core = (parcelRequire("5dXTc"));
$0b1af7ee1bc1c627$exports = $0b1af7ee1bc1c627$var$isexe;
$0b1af7ee1bc1c627$var$isexe.sync = $0b1af7ee1bc1c627$var$sync;
function $0b1af7ee1bc1c627$var$isexe(path, options, cb) {
    if (typeof options === 'function') {
        cb = options;
        options = {};
    }
    if (!cb) {
        if (typeof Promise !== 'function') throw new TypeError('callback not provided');
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
            if (er.code === 'EACCES' || options && options.ignoreErrors) {
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
        if (options && options.ignoreErrors || er.code === 'EACCES') return false;
        else throw er;
    }
}


const $10bb1950eec72619$var$getNotFoundError = (cmd)=>Object.assign(new Error(`not found: ${cmd}`), {
        code: 'ENOENT'
    });
const $10bb1950eec72619$var$getPathInfo = (cmd, opt)=>{
    const colon = opt.colon || $10bb1950eec72619$var$COLON;
    // If it has a slash, then we don't bother searching the pathenv.
    // just check the file itself, and that's it.
    const pathEnv = cmd.match(/\//) || $10bb1950eec72619$var$isWindows && cmd.match(/\\/) ? [
        ''
    ] : [
        // windows always checks the cwd first
        ...$10bb1950eec72619$var$isWindows ? [
            process.cwd()
        ] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */ '').split(colon)
    ];
    const pathExtExe = $10bb1950eec72619$var$isWindows ? opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM' : '';
    const pathExt = $10bb1950eec72619$var$isWindows ? pathExtExe.split(colon) : [
        ''
    ];
    if ($10bb1950eec72619$var$isWindows) {
        if (cmd.indexOf('.') !== -1 && pathExt[0] !== '') pathExt.unshift('');
    }
    return {
        pathEnv: pathEnv,
        pathExt: pathExt,
        pathExtExe: pathExtExe
    };
};
const $10bb1950eec72619$var$which = (cmd, opt, cb)=>{
    if (typeof opt === 'function') {
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
'use strict';
const $3487f7b8c16699fc$var$pathKey = (options = {})=>{
    const environment = options.env || process.env;
    const platform = options.platform || process.platform;
    if (platform !== 'win32') return 'PATH';
    return Object.keys(environment).reverse().find((key)=>key.toUpperCase() === 'PATH') || 'Path';
};
$3487f7b8c16699fc$exports = $3487f7b8c16699fc$var$pathKey;
// TODO: Remove this for the next major release
$3487f7b8c16699fc$exports.default = $3487f7b8c16699fc$var$pathKey;


function $10eed8306e544906$var$resolveCommandAttempt(parsed, withoutPathExt) {
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
    if (resolved) resolved = $evV72$resolve(hasCustomCwd ? parsed.options.cwd : '', resolved);
    return resolved;
}
function $10eed8306e544906$var$resolveCommand(parsed) {
    return $10eed8306e544906$var$resolveCommandAttempt(parsed) || $10eed8306e544906$var$resolveCommandAttempt(parsed, true);
}
$10eed8306e544906$exports = $10eed8306e544906$var$resolveCommand;


var $276813fd40f11aff$export$ae50443ffc990749;
var $276813fd40f11aff$export$6ea29ee575e3f5ff;
'use strict';
// See http://www.robvanderwoude.com/escapechars.php
const $276813fd40f11aff$var$metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
function $276813fd40f11aff$var$escapeCommand(arg) {
    // Escape meta chars
    arg = arg.replace($276813fd40f11aff$var$metaCharsRegExp, '^$1');
    return arg;
}
function $276813fd40f11aff$var$escapeArgument(arg, doubleEscapeMetaChars) {
    // Convert to string
    arg = `${arg}`;
    // Algorithm below is based on https://qntm.org/cmd
    // It's slightly altered to disable JS backtracking to avoid hanging on specially crafted input
    // Please see https://github.com/moxystudio/node-cross-spawn/pull/160 for more information
    // Sequence of backslashes followed by a double quote:
    // double up all the backslashes and escape the double quote
    arg = arg.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"');
    // Sequence of backslashes followed by the end of the string
    // (which will become a double quote later):
    // double up all the backslashes
    arg = arg.replace(/(?=(\\+?)?)\1$/, '$1$1');
    // All other backslashes occur literally
    // Quote the whole thing:
    arg = `"${arg}"`;
    // Escape meta chars
    arg = arg.replace($276813fd40f11aff$var$metaCharsRegExp, '^$1');
    // Double escape meta chars if necessary
    if (doubleEscapeMetaChars) arg = arg.replace($276813fd40f11aff$var$metaCharsRegExp, '^$1');
    return arg;
}
$276813fd40f11aff$export$ae50443ffc990749 = $276813fd40f11aff$var$escapeCommand;
$276813fd40f11aff$export$6ea29ee575e3f5ff = $276813fd40f11aff$var$escapeArgument;


var $a35e2c2e4ef102e3$exports = {};
'use strict';

var $550cee7733391e8f$exports = {};
'use strict';
var $41ec2024f8465164$exports = {};
'use strict';
$41ec2024f8465164$exports = /^#!(.*)/;


$550cee7733391e8f$exports = (string = '')=>{
    const match = string.match($41ec2024f8465164$exports);
    if (!match) return null;
    const [path, argument] = match[0].replace(/#! ?/, '').split(' ');
    const binary = path.split('/').pop();
    if (binary === 'env') return argument;
    return argument ? `${binary} ${argument}` : binary;
};


function $a35e2c2e4ef102e3$var$readShebang(command) {
    // Read the first 150 bytes from the file
    const size = 150;
    const buffer = Buffer.alloc(size);
    let fd;
    try {
        fd = $evV72$openSync(command, 'r');
        $evV72$readSync(fd, buffer, 0, size, 0);
        $evV72$closeSync(fd);
    } catch (e) {}
    // Attempt to extract shebang (null is returned if not a shebang)
    return $550cee7733391e8f$exports(buffer.toString());
}
$a35e2c2e4ef102e3$exports = $a35e2c2e4ef102e3$var$readShebang;


const $a374b65288da9789$var$isWin = process.platform === 'win32';
const $a374b65288da9789$var$isExecutableRegExp = /\.(?:com|exe)$/i;
const $a374b65288da9789$var$isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
function $a374b65288da9789$var$detectShebang(parsed) {
    parsed.file = $10eed8306e544906$exports(parsed);
    const shebang = parsed.file && $a35e2c2e4ef102e3$exports(parsed.file);
    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return $10eed8306e544906$exports(parsed);
    }
    return parsed.file;
}
function $a374b65288da9789$var$parseNonShell(parsed) {
    if (!$a374b65288da9789$var$isWin) return parsed;
    // Detect & add support for shebangs
    const commandFile = $a374b65288da9789$var$detectShebang(parsed);
    // We don't need a shell if the command filename is an executable
    const needsShell = !$a374b65288da9789$var$isExecutableRegExp.test(commandFile);
    // If a shell is required, use cmd.exe and take care of escaping everything correctly
    // Note that `forceShell` is an hidden option used only in tests
    if (parsed.options.forceShell || needsShell) {
        // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`
        // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument
        // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,
        // we need to double escape them
        const needsDoubleEscapeMetaChars = $a374b65288da9789$var$isCmdShimRegExp.test(commandFile);
        // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\bar)
        // This is necessary otherwise it will always fail with ENOENT in those cases
        parsed.command = $evV72$normalize(parsed.command);
        // Escape command & arguments
        parsed.command = $276813fd40f11aff$export$ae50443ffc990749(parsed.command);
        parsed.args = parsed.args.map((arg)=>$276813fd40f11aff$export$6ea29ee575e3f5ff(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [
            parsed.command
        ].concat(parsed.args).join(' ');
        parsed.args = [
            '/d',
            '/s',
            '/c',
            `"${shellCommand}"`
        ];
        parsed.command = process.env.comspec || 'cmd.exe';
        parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
    }
    return parsed;
}
function $a374b65288da9789$var$parse(command, args, options) {
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
    return options.shell ? parsed : $a374b65288da9789$var$parseNonShell(parsed);
}
$a374b65288da9789$exports = $a374b65288da9789$var$parse;


var $723ba8c7f07c78f6$exports = {};
'use strict';
const $723ba8c7f07c78f6$var$isWin = process.platform === 'win32';
function $723ba8c7f07c78f6$var$notFoundError(original, syscall) {
    return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: 'ENOENT',
        errno: 'ENOENT',
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
    });
}
function $723ba8c7f07c78f6$var$hookChildProcess(cp, parsed) {
    if (!$723ba8c7f07c78f6$var$isWin) return;
    const originalEmit = cp.emit;
    cp.emit = function(name, arg1) {
        // If emitting "exit" event and exit code is 1, we need to check if
        // the command exists and emit an "error" instead
        // See https://github.com/IndigoUnited/node-cross-spawn/issues/16
        if (name === 'exit') {
            const err = $723ba8c7f07c78f6$var$verifyENOENT(arg1, parsed);
            if (err) return originalEmit.call(cp, 'error', err);
        }
        return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params
    };
}
function $723ba8c7f07c78f6$var$verifyENOENT(status, parsed) {
    if ($723ba8c7f07c78f6$var$isWin && status === 1 && !parsed.file) return $723ba8c7f07c78f6$var$notFoundError(parsed.original, 'spawn');
    return null;
}
function $723ba8c7f07c78f6$var$verifyENOENTSync(status, parsed) {
    if ($723ba8c7f07c78f6$var$isWin && status === 1 && !parsed.file) return $723ba8c7f07c78f6$var$notFoundError(parsed.original, 'spawnSync');
    return null;
}
$723ba8c7f07c78f6$exports = {
    hookChildProcess: $723ba8c7f07c78f6$var$hookChildProcess,
    verifyENOENT: $723ba8c7f07c78f6$var$verifyENOENT,
    verifyENOENTSync: $723ba8c7f07c78f6$var$verifyENOENTSync,
    notFoundError: $723ba8c7f07c78f6$var$notFoundError
};


function $89bc486561c4bcbd$var$spawn(command, args, options) {
    // Parse the arguments
    const parsed = $a374b65288da9789$exports(command, args, options);
    // Spawn the child process
    const spawned = $evV72$spawn(parsed.command, parsed.args, parsed.options);
    // Hook into child process "exit" event to emit an error if the command
    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    $723ba8c7f07c78f6$exports.hookChildProcess(spawned, parsed);
    return spawned;
}
function $89bc486561c4bcbd$var$spawnSync(command, args, options) {
    // Parse the arguments
    const parsed = $a374b65288da9789$exports(command, args, options);
    // Spawn the child process
    const result = $evV72$spawnSync(parsed.command, parsed.args, parsed.options);
    // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16
    result.error = result.error || $723ba8c7f07c78f6$exports.verifyENOENTSync(result.status, parsed);
    return result;
}
$89bc486561c4bcbd$exports = $89bc486561c4bcbd$var$spawn;
$89bc486561c4bcbd$exports.spawn = $89bc486561c4bcbd$var$spawn;
$89bc486561c4bcbd$exports.sync = $89bc486561c4bcbd$var$spawnSync;
$89bc486561c4bcbd$exports._parse = $a374b65288da9789$exports;
$89bc486561c4bcbd$exports._enoent = $723ba8c7f07c78f6$exports;


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
    let stdout = '';
    let stderr = '';
    const child = $89bc486561c4bcbd$exports(command, args, spawnOptions);
    return new Promise((resolve, reject)=>{
        if (options.stdin !== undefined && options.stdin != null) child.stdin.write(options.stdin);
        child.stdin.end();
        child.stdout.on('data', (data)=>{
            stdout += data;
            if (options.stdout) options.stdout(data);
        });
        child.stderr.on('data', (data)=>{
            stderr += data;
            if (options.stderr) options.stderr(data);
        });
        if (options.rejectOnError) child.addListener('error', reject);
        child.on('close', (code)=>{
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
        return await (0, (/*@__PURE__*/$parcel$interopDefault($03c48d50d9d7039f$exports)))(command, args);
    } catch (error) {
        console.error(`Error running command: ${command} ${args.join(' ')}`);
        throw error;
    }
}
async function $4c028fad90f63861$export$214213e2e11c62ae([command1, args1], [command2, args2]) {
    const cp1 = (0, $evV72$child_process).spawn(command1, args1, {
        stdio: [
            'inherit',
            'pipe',
            'inherit'
        ]
    });
    const cp2 = (0, $evV72$child_process).spawn(command2, args2, {
        stdio: [
            'pipe',
            'inherit',
            'inherit'
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
        cp.on('error', (error)=>{
            reject(error);
        });
        cp.on('close', (code)=>{
            if (code !== 0) reject(new Error(`process exited with code ${code}`));
            resolve();
        });
    });
}



async function $bd1d73aff0732146$var$injectCache(cacheSource, cacheOptions, scratchDir, containerImage, builder) {
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
    await (0, $evV72$fspromises).writeFile((0, $evV72$path).join(cacheSource, 'buildstamp'), date);
    const targetPath = (0, $76d06fcdc9bff1f5$export$febacabd0d01c81)(cacheOptions);
    const mountArgs = (0, $76d06fcdc9bff1f5$export$238315f403b84074)(cacheOptions);
    // If UID OR GID are set, then add chown to restore files ownership.
    let ownershipCommand = "";
    const uid = (0, $76d06fcdc9bff1f5$export$6d2b3473b0986646)(cacheOptions);
    const gid = (0, $76d06fcdc9bff1f5$export$4e7da3a92c2dad69)(cacheOptions);
    if (uid !== "" || gid !== "") ownershipCommand = `&& chown -R ${uid}:${gid} ${targetPath}`;
    // Prepare Dancefile to Access Caches
    const dancefileContent = `
FROM ${containerImage}
COPY buildstamp buildstamp
RUN --mount=${mountArgs} \
    --mount=type=bind,source=.,target=/var/dance-cache \
    cp -p -R /var/dance-cache/. ${targetPath} ${ownershipCommand} || true
`;
    await (0, $evV72$fspromises).writeFile((0, $evV72$path).join(scratchDir, 'Dancefile.inject'), dancefileContent);
    console.log(dancefileContent);
    // Inject Data into Docker Cache
    await (0, $4c028fad90f63861$export$889ea624f2cb2c57)('docker', [
        'buildx',
        'build',
        '--builder',
        builder,
        '-f',
        (0, $evV72$path).join(scratchDir, 'Dancefile.inject'),
        '--tag',
        'dance:inject',
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
        (0, $bbb9dac42384d004$exports.notice)(`Error while cleaning cache source directory: ${err}. Ignoring...`);
    }
}
async function $bd1d73aff0732146$export$38c65e9f06d3d433(opts) {
    const cacheMap = (0, $76d06fcdc9bff1f5$export$8550a4d7282a21d0)(opts);
    const scratchDir = opts['scratch-dir'];
    const containerImage = opts['utility-image'];
    const builder = (0, $76d06fcdc9bff1f5$export$932deacb99c42350)(opts);
    // Inject Caches for each source-target pair
    for (const [cacheSource, cacheOptions] of Object.entries(cacheMap))await $bd1d73aff0732146$var$injectCache(cacheSource, cacheOptions, scratchDir, containerImage, builder);
}






async function $8d40300f3635b768$var$extractCache(cacheSource, cacheOptions, scratchDir, containerImage, builder) {
    // Prepare Timestamp for Layer Cache Busting
    const date = new Date().toISOString();
    await (0, $evV72$fspromises).mkdir(scratchDir, {
        recursive: true
    });
    await (0, $evV72$fspromises).writeFile((0, $evV72$path).join(scratchDir, 'buildstamp'), date);
    // Prepare Dancefile to Access Caches
    const targetPath = (0, $76d06fcdc9bff1f5$export$febacabd0d01c81)(cacheOptions);
    const mountArgs = (0, $76d06fcdc9bff1f5$export$238315f403b84074)(cacheOptions);
    const dancefileContent = `
FROM ${containerImage}
COPY buildstamp buildstamp
RUN --mount=${mountArgs} \
    mkdir -p /var/dance-cache/ \
    && cp -p -R ${targetPath}/. /var/dance-cache/ || true
`;
    await (0, $evV72$fspromises).writeFile((0, $evV72$path).join(scratchDir, 'Dancefile.extract'), dancefileContent);
    console.log(dancefileContent);
    // Extract Data into Docker Image
    await (0, $4c028fad90f63861$export$889ea624f2cb2c57)('docker', [
        'buildx',
        'build',
        '--builder',
        builder,
        '-f',
        (0, $evV72$path).join(scratchDir, 'Dancefile.extract'),
        '--tag',
        'dance:extract',
        '--load',
        scratchDir
    ]);
    // Create Extraction Image
    try {
        await (0, $4c028fad90f63861$export$889ea624f2cb2c57)('docker', [
            'rm',
            '-f',
            'cache-container'
        ]);
    } catch (error) {
    // Ignore error if container does not exist
    }
    await (0, $4c028fad90f63861$export$889ea624f2cb2c57)('docker', [
        'create',
        '-ti',
        '--name',
        'cache-container',
        'dance:extract'
    ]);
    // Unpack Docker Image into Scratch
    await (0, $4c028fad90f63861$export$214213e2e11c62ae)([
        'docker',
        [
            'cp',
            '-L',
            'cache-container:/var/dance-cache',
            '-'
        ]
    ], [
        'tar',
        [
            '-H',
            'posix',
            '-x',
            '-C',
            scratchDir
        ]
    ]);
    // Move Cache into Its Place
    await (0, $4c028fad90f63861$export$889ea624f2cb2c57)('sudo', [
        'rm',
        '-rf',
        cacheSource
    ]);
    await (0, $evV72$fspromises).rename((0, $evV72$path).join(scratchDir, 'dance-cache'), cacheSource);
}
async function $8d40300f3635b768$export$bd3cfa0c41fc7012(opts) {
    if (opts["skip-extraction"]) {
        console.log("skip-extraction is set. Skipping extraction step...");
        return;
    }
    const cacheMap = (0, $76d06fcdc9bff1f5$export$8550a4d7282a21d0)(opts);
    const scratchDir = opts['scratch-dir'];
    const containerImage = opts['utility-image'];
    const builder = (0, $76d06fcdc9bff1f5$export$932deacb99c42350)(opts);
    // Extract Caches for each source-target pair
    for (const [cacheSource, cacheOptions] of Object.entries(cacheMap))await $8d40300f3635b768$var$extractCache(cacheSource, cacheOptions, scratchDir, containerImage, builder);
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
