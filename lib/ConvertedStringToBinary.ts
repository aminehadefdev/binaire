import ConvertedDecimalToBinary from './ConvertedDecimalToBinary'

class ConvertedStringToBinary{
    private str:string

    constructor(str: string){
        this.str = str
    }

    public convert():Array<{}>{
        var arrReturn:Array<{}> = []
        var ascii:number
        var conv:{}
        for(let i = 0; i < this.str.length; i++){
            ascii = this.str.charCodeAt(i)
            var cdtb = new ConvertedDecimalToBinary(ascii)
            conv = cdtb.convert()
            arrReturn.push({
                "char": [this.str[i]],
                "ascii": ascii,
                "binary": conv
            })
        }
        return arrReturn
    }
}
export default ConvertedStringToBinary