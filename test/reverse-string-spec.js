const chai = require('chai')
const expect = chai.expect
const reverseString = require('../problems/reverse-string')

describe('reverseString()', () => {
    it('should return the given string reversed', () => {

        expect(reverseString('fun')).to.equal('nuf')
    })
})


