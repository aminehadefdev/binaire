interface ConvertedBinaryToDecimaInterface{
    decimal: number,
    NBbyts: number,
    arrByts: Array<number>,
    binary: string
}
class ConvertedBinaryToDecima{
    private decimal:number
    private NBbyts:number
    private arByts:Array<number>
    private binary:string

    constructor(binary: string){
        this.binary = binary
        this.addByts()
        this.decimal = 0
    }
    private addByts(): void{
        if(this.binary !== "0" && this.binary !== "1"){
            this.arByts = [1, 2]
            let i = 1;
            while (i < this.binary.length - 1) {
                this.arByts.push(this.arByts[i] + this.arByts[i])
                i++
            }
            this.arByts.reverse()
            this.NBbyts = this.arByts.length
        }
    }
    public convert(): ConvertedBinaryToDecimaInterface{
        if(this.binary !== "0" && this.binary !== "1"){
            let i = 0;
            while (i < this.NBbyts){
                if(this.binary[i] == "1"){
                    this.decimal += this.arByts[i]
                }
                i++
            }
        }else{
            if(this.binary === "1"){
                this.decimal = 1
            }
            return{
                decimal: this.decimal,
                NBbyts: 1,
                arrByts: [1],
                binary: this.binary
            }
        }
        return {
            decimal: this.decimal,
            NBbyts: this.NBbyts,
            arrByts: this.arByts,
            binary: this.binary
        }
    } 
}
export default ConvertedBinaryToDecima