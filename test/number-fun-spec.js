const chai = require('chai')
const expect = chai.expect
const { returnsThree, reciprocal } = require('../problems/number-fun')


describe('returnsThree', () => {
    it('Should return the number 3', () => {
        expect(returnsThree()).to.equal(3)
    })
})

describe('reciprocal', () => {
    it('Should return the reciprocal of the given number', () => {

        expect(reciprocal(5)).to.be.equal(1 / 5)

    })
    it('should only take numbers between 0 and 1,000,000', () => {


        expect(() => reciprocal(-1)).to.throw(RangeError)
        expect(() => reciprocal(1000001)).to.throw(RangeError)

    })
})