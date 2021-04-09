class convertedDecimalToBinary{

}

/**
    constructor(decimal){
        this.binaire = ""
        this.decimal = decimal
        this.arByts = [1]
        this.addByts()
        this.convert()
        return this
    }
    addByts(){
        let i = 0;
        while (this.arByts[i] <= this.decimal) {
            if(this.arByts[i] + this.arByts[i] <= this.decimal){
                this.arByts.push(this.arByts[i] + this.arByts[i])
            }else{
                break
            }
            i++
        }
        this.arByts.reverse()
    }
    convert(){
        let i = 0
        let result = 0
        while (result <= this.decimal) {
            if(this.arByts[i] == undefined){break}
            if(result + this.arByts[i] > this.decimal){
                this.binaire += "0"
            }else{
                this.binaire += "1"
                result += this.arByts[i]
            }
            i++
        }
    }
 */