import ConvertedBinaryToDecima from './lib/ConvertedBinaryToDecima'

interface ConvertedBinaryToDecimaInterface{
    decimal: number,
    NBbyts: number,
    arrByts: Array<number>,
    binary: string
}

function covert(str: string) : ConvertedBinaryToDecimaInterface{
    var cbtd = new ConvertedBinaryToDecima(str)
    return cbtd.convert()
}

export default covert