let myLength = function (){
    let i = 0
    while (this[i] != undefined) {
        i++
    }
    return i
}

let myPush = function(elm){
    this[this.myLength()] = elm

    return this
}

let myRevers = function(){
    let i = 0
    let tmp1
    let tmp2
    while (i < this.myLength() / 2 ) {
        tmp1 = this[i]
        tmp2 = this[this.myLength() - i - 1]
        this[i] = tmp2
        this[this.myLength() - i - 1] = tmp1
        i++
    }

    return this
}

String.prototype.myLength = myLength
Array.prototype.myLength = myLength
Array.prototype.myPush = myPush
Array.prototype.myRevers = myRevers


/**
 * prend une chaine de binaire constituer de 0 et de 1 en argument
 * retourn un object
 */
class convertBinaireenDecimal{
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
            this.arByts.myPush(this.arByts[i] + this.arByts[i])
            i++
        }
        this.arByts.myRevers()
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

//console.log(new convertBinaireenDecimal('101010'))

/**
 * prend un int en argument
 * retourn un object
 */
class convertDecimalEnBinaire{
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
                this.arByts.myPush(this.arByts[i] + this.arByts[i])
            }else{
                break
            }
            i++
        }
        this.arByts.myRevers()
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
}

console.log(new convertDecimalEnBinaire(42))