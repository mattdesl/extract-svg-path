#!/usr/bin/env node

var argv = require('yargs')
    .usage('extract svg path contents\nUsage: extract-svg-path file.svg')
    .demand(1)
    .alias('q', 'quote')
    .describe('q', 'quote output for json')
    .argv


var extract = require('../')
var fs = require('fs')
var path = require('path')

var contents = extract(argv._[0])
if (argv.q)
    contents = JSON.stringify(contents)

process.stdout.write(contents)