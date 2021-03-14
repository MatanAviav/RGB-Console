#!/usr/bin/env node

const cc = require('../rgbconsole');
const process = require('process');
const path = require('path');
const execSync = require('child_process').execSync;
let file = path.join(__dirname, '../examples');

let cmd = "", result = "";
for(let i=2; i<process.argv.length; i++) {
    cmd += process.argv[i] + " ";
}
cmd = cmd.trim();
if(cmd == "run text examples") {
    result = execSync('node ' + path.join(file, 'examples_colored_text.js'));
}
else if(cmd == "run bold examples") {
    result = execSync('node ' + path.join(file, 'examples_bold_text.js'));
}
else if(cmd == "run underline examples") {
    result = execSync('node ' + path.join(file, 'examples_underline_text.js'));
}
else if(cmd == "run background examples") {
    result = execSync('node ' + path.join(file, 'examples_bg.js'));
}
else if(cmd == "run error examples") {
    result = execSync('node ' + path.join(file, 'examples_error.js'));
}
else if(cmd == "run ok examples") {
    result = execSync('node ' + path.join(file, 'examples_ok.js'));
}
else if(cmd == "run warn examples") {
    result = execSync('node ' + path.join(file, 'examples_warn.js'));
}
else {
    cc.error("command not found");
}
if( result != "" ) {
    console.log(result.toString());
}
