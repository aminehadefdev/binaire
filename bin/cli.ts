#!/usr/bin/env node
const [,, ...args] = (process.argv)
const version = require('../package.json').version
const converter = require('../index').default

const arrayArguments: Array<string> = [
    "--version",
    "-cdtb"
]

if(args.includes(arrayArguments[0])){
    console.log(`version ${version}`)
}
if(args.includes(arrayArguments[1])){
    var index = args.indexOf(arrayArguments[1])
    if(index){
        console.log(index)
    }else{
        console.log('nop')
    }
}