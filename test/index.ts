import covert from "../index"
import {expect} from "chai"

describe('init', ()=>{
    it('should return obj decimal 0', ()=>{
        expect(covert('0')).to.eql({
            decimal: 0,
            NBbyts: 1,
            arrByts: [1],
            binary: "0"
        })
    })
    it('should return obj decimal 1', ()=>{
        expect(covert('1')).to.eql({
            decimal: 1,
            NBbyts: 1,
            arrByts: [1],
            binary: "1"
        })
    })
    it('should return obj decimal 42', ()=>{
        expect(covert('101010')).to.eql({
            decimal: 42,
            NBbyts: 6,
            arrByts: [32 ,16, 8, 4, 2, 1],
            binary: "101010"
        })
    })
    it('should return obj decimal 54326', ()=>{
        expect(covert('1101010000110110')).to.eql({
            decimal: 54326,
            NBbyts: 16,
            arrByts: [32768,16384,8192,4096,2048,1024,512,256,128,64,32,16,8,4,2,1],
            binary: "1101010000110110"
        })
    })
})