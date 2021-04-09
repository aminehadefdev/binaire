import ConvertedBinaryToDecimaInterface from './interfaces/ConvertedBinaryToDecimaInterface'

class ConvertedBinaryToDecima{
    private decimal:number
    private NBbyts:number
    private arByts:Array<number>
    private binary:string

    constructor(binary: string){
        if(binary == "1"){
            this.decimal = 1
        }else if(binary == "0"){
            this.decimal = 0
        }else{
            this.binary = binary
            this.NBbyts = binary.length
            this.arByts = [1, 2]
            this.addByts()
            this.decimal = 0
        }
    }
    private addByts(): void{
        let i = 1;
        while (i < this.NBbyts - 1) {
            this.arByts.push(this.arByts[i] + this.arByts[i])
            i++
        }
        this.arByts.reverse()
    }
    public convert(): ConvertedBinaryToDecimaInterface{
        let i = 0;
        while (i < this.NBbyts){
            if(this.binary[i] == "1"){
                this.decimal += this.arByts[i]
            }
            i++
        }
        return {
            decimal: this.decimal,
            NBbyts: this.NBbyts,
            arrByts: this.arByts,
            binary: this.binary}
    } 
}
var a = new ConvertedBinaryToDecima("01000101")
console.log(a.convert())

export default ConvertedBinaryToDecima

























/**
class convertedBinaryToDecima{
    constructor(binaire){
        if(binaire == "1"){
            this.decimal = 1
        }else if(binaire == "0"){
            this.decimal = 0
        }else{
            this.binaire = binaire
            this.NBbyts = this.binaire.length
            this.arByts = [1, 2]
            this.addByts()
            this.decimal = 0
            this.convert()
        }
        return this
    }
    addByts(){
        let i = 1;
        while (i < this.NBbyts - 1) {
            this.arByts.push(this.arByts[i] + this.arByts[i])
            i++
        }
        this.arByts.reverse()
    }
    convert(){
        let i = 0;
        while (i < this.NBbyts){
            if(this.binaire[i] == "1"){
                this.decimal += this.arByts[i]
            }
            i++
        }
    }
}

module.exports = convertedBinaryToDecima
*/