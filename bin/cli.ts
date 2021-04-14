#!/usr/bin/env node
const [,, ...args] = (process.argv)
const version:string = require('../package.json').version
const converter = require('../index').default

const arrayArguments: Array<string> = [
    "--version",
    "-cdtb",
    "-cbtd"
]
//--vertion
if(args.includes(arrayArguments[0])){
    console.log(`version ${version}`)
}
//-cdtb
if(args.includes(arrayArguments[1])){
    var index = args.indexOf(arrayArguments[1])
    if(args[index + 1]){
        var decimal:number = Number(args[index + 1])
        if(typeof decimal === "number" && !isNaN(decimal)){
            console.log(converter.ConvertedDecimalToBinary(decimal))
        }else{
            console.log('attention the argument of the cdtb parameter must be a valid decimal.')
        }
    }else{
        console.log(`cdtb muste decimal\nexemple: binary -cdtb 42.`)
    }
}
//-cbtd
if(args.includes(arrayArguments[2])){
    var index = args.indexOf(arrayArguments[2])
    var regex = /(^[01]+$)/
    if(args[index + 1] && regex.test(args[index + 1])){
        var str:string = String(args[index + 1])
        console.log(converter.ConvertedBinaryToDecimal(str))
    }else{
        console.log(`attention the argument of the cbtd parameter must be a valid binary.`)
    }
}