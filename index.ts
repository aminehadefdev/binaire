import ConvertedBinaryToDecima from './lib/ConvertedBinaryToDecima'
import ConvertedDecimalToBinary from "./lib/ConvertedDecimalToBinary"
import ConvertedInterface from './lib/interface/ConvertedInterface'



const converter = {
    ConvertedBinaryToDecimal(str: string) : ConvertedInterface{
        var cbtd = new ConvertedBinaryToDecima(str)
        return cbtd.convert()
    },
    ConvertedDecimalToBinary(decimal: number): ConvertedInterface{
        var cdtb = new ConvertedDecimalToBinary(decimal)
        return cdtb.convert()
    }
}

export default converter