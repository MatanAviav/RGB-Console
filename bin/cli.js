#!/usr/bin/env node

const cc = require('../ColoredConsole');
const process = require('process');
const path = require('path');
const execSync = require('child_process').execSync;
let file = path.join(__dirname, '../examples/');

if(process.argv.includes("run text examples")) {
    execSync('node ' + path.join(file, 'examples_colored_text.js'));
}
else if(process.argv.includes("run bold examples")) {
    execSync('node ' + path.join(file, 'examples_bold_text.js'));
}
else if(process.argv.includes("run underline examples")) {
    execSync('node ' + path.join(file, 'examples_underline_text.js'));
}
else if(process.argv.includes("run background examples")) {
    execSync('node ' + path.join(file, 'examples_bg.js'));
}
else if(process.argv.includes("run error examples")) {
    execSync('node ' + path.join(file, 'examples_error.js'));
}
else if(process.argv.includes("run ok examples")) {
    execSync('node ' + path.join(file, 'examples_ok.js'));
}
else if(process.argv.includes("run warn examples")) {
    execSync('node ' + path.join(file, 'examples_warn.js'));
}
else {
    cc.error("command not found");
}
