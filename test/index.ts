import converter from "../index"
import {expect} from "chai"

describe('ConvertedBinaryToDecima binary to decimal', ()=>{
    it('should return obj decimal 0', ()=>{
        expect(converter.ConvertedBinaryToDecimal('0')).to.eql({
            decimal: 0,
            NBbyts: 1,
            arrByts: [1],
            binary: "0"
        })
    })
    it('should return obj decimal 1', ()=>{
        expect(converter.ConvertedBinaryToDecimal('1')).to.eql({
            decimal: 1,
            NBbyts: 1,
            arrByts: [1],
            binary: "1"
        })
    })
    it('should return obj decimal 256', ()=>{
        expect(converter.ConvertedBinaryToDecimal('100000000')).to.eql({
            decimal: 256,
            NBbyts: 9,
            arrByts: [256,128,64,32,16,8,4,2,1],
            binary: "100000000"
        })
    })
    it('should return obj decimal 8192', ()=>{
        expect(converter.ConvertedBinaryToDecimal('10000000000000')).to.eql({
            decimal: 8192,
            NBbyts: 14,
            arrByts: [8192,4096,2048,1024,512,256,128,64,32,16,8,4,2,1],
            binary: "10000000000000"
        })
    })
    it('should return obj decimal 42', ()=>{
        expect(converter.ConvertedBinaryToDecimal('101010')).to.eql({
            decimal: 42,
            NBbyts: 6,
            arrByts: [32 ,16, 8, 4, 2, 1],
            binary: "101010"
        })
    })
    it('should return obj decimal 54326', ()=>{
        expect(converter.ConvertedBinaryToDecimal('1101010000110110')).to.eql({
            decimal: 54326,
            NBbyts: 16,
            arrByts: [32768,16384,8192,4096,2048,1024,512,256,128,64,32,16,8,4,2,1],
            binary: "1101010000110110"
        })
    })
})

describe('ConvertedDecimalToBinary decimal to binary', ()=>{
    it('should return obj binary 0', ()=>{
        expect(converter.ConvertedDecimalToBinary(0)).to.eql({
            decimal: 0,
            NBbyts: 1,
            arrByts: [1],
            binary: "0"
        })
    })
    it('should return obj binary 1', ()=>{
        expect(converter.ConvertedDecimalToBinary(1)).to.eql({
            decimal: 1,
            NBbyts: 1,
            arrByts: [1],
            binary: "1"
        })
    })
    it('should return obj binary 100000000', ()=>{
        expect(converter.ConvertedDecimalToBinary(256)).to.eql({
            decimal: 256,
            NBbyts: 9,
            arrByts: [256,128,64,32,16,8,4,2,1],
            binary: "100000000"
        })
    })
    it('should return obj binary 10000000000000', ()=>{
        expect(converter.ConvertedDecimalToBinary(8192)).to.eql({
            decimal: 8192,
            NBbyts: 14,
            arrByts: [8192,4096,2048,1024,512,256,128,64,32,16,8,4,2,1],
            binary: "10000000000000"
        })
    })
    it('should return obj binary 101010', ()=>{
        expect(converter.ConvertedDecimalToBinary(42)).to.eql({
            decimal: 42,
            NBbyts: 6,
            arrByts: [32 ,16, 8, 4, 2, 1],
            binary: "101010"
        })
    })
    it('should return obj binary 1101010000110110', ()=>{
        expect(converter.ConvertedDecimalToBinary(54326)).to.eql({
            decimal: 54326,
            NBbyts: 16,
            arrByts: [32768,16384,8192,4096,2048,1024,512,256,128,64,32,16,8,4,2,1],
            binary: "1101010000110110"
        })
    })
})