import ConvertedBinaryToDecima from './lib/ConvertedBinaryToDecima'

interface ConvertedBinaryToDecimaInterface{
    decimal: number,
    NBbyts: number,
    arrByts: Array<number>,
    binary: string
}

function init(str: string) : ConvertedBinaryToDecimaInterface{
    var cbtd = new ConvertedBinaryToDecima(str)
    return cbtd.convert()
}

export default init