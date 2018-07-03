'use strict'

const chai = require('chai')
const expect = chai.expect
const diagnostic = require('../lib/diagnostic.js')
// chai.should()
// chai.use(require('chai-things'))

describe('Question 1:', () => {
  describe('developer', () => {
    it('is an object', () => {
      expect(diagnostic.developer).to.be.an('object')
    })
    it('has keys `skills` and `name`', () => {
      expect(diagnostic.developer).to.have.keys('skills', 'name')
    })
    it('value of key `skills` is an array of strings', () => {
      expect(diagnostic.developer.skills).to.be.an('array')
      diagnostic.developer.skills.forEach((skill) => {
        expect(skill).to.be.a('string')
      })
    })
    it('value of key `name` is a string', () => {
      expect(diagnostic.developer.name).to.be.a('string')
    })
  })
})

describe('Question 2:', () => {
  describe('addAndMultiply', () => {
    it('is a function', () => {
      expect(diagnostic.addAndMultiply).to.be.a('function')
    })
    it('returns a number when given the proper arguments', () => {
      expect(diagnostic.addAndMultiply(1, 2, 3)).to.be.a('number')
    })
    it('returns the correct number', () => {
      expect(diagnostic.addAndMultiply(1, 2, 3)).to.eq(9)
      expect(diagnostic.addAndMultiply(12, 40, 2)).to.eq(104)
      expect(diagnostic.addAndMultiply(-7.9, 23, 4)).to.eq(60.4)
    })
  })
})

describe('Question 3:', () => {
  describe('firstAndLast', () => {
    it('is an array', () => {
      expect(diagnostic.firstAndLast).to.be.an('array')
    })
    it('contains two numbers', () => {
      expect(diagnostic.firstAndLast.length).to.eq(2)
      expect(diagnostic.firstAndLast[0]).to.be.a('number')
      expect(diagnostic.firstAndLast[1]).to.be.a('number')
    })
    it('the first number is correct', () => {
      expect(diagnostic.firstAndLast[0]).to.eq(diagnostic.randomNums[0])
    })
    it('the second number is correct', () => {
      expect(diagnostic.firstAndLast[1]).to.eq(diagnostic.randomNums[3])
    })
  })

  describe('randomNums', () => {
    it('has not been modified', () => {
      expect(diagnostic.randomNums.length).to.eq(4)
      diagnostic.randomNums.forEach(num => {
        expect(num).to.be.a('number')
        expect(num).to.be.above(0)
        expect(num).to.be.below(1)
      })
    })
  })
})

describe('Question 4:', () => {
  describe('excite', () => {
    it('is a function', () => {
      expect(diagnostic.excite).to.be.a('function')
    })
    it('returns an array', () => {
      expect(diagnostic.excite(['foo', 'bar']).to.be.an('array'))
    })
    it('appens an exclamation mark to each string', () => {
      expect(diagnostic.excite(['foo', 'bar']).to.eql(['foo!', 'bar!']))
      expect(diagnostic.excite(['a', 'b', 'c', 'd']).to.eql(['a!', 'b!', 'c!', 'd!']))
    })
  })
})

describe('Question 5:', () => {
  describe('negativeNums', () => {
    it('is a function', () => {
      expect(diagnostic.negativeNums).to.be.a('function')
    })
    it('returns an array', () => {
      expect(diagnostic.negativeNums([1, 2]).to.be.an('array'))
    })
    it('returns an array containing negative versions of the original numbers', () => {
      expect(diagnostic.negativeNums([1, 2]).to.eql([-1, -2]))
      expect(diagnostic.negativeNums([20, 400, 123.27]).to.eql([-20, -400, -123.27]))
      expect(diagnostic.negativeNums([0, Infinity]).to.eql([-0, -Infinity]))
    })
    it('doesn\'nt modify the original array that is passed in', () => {
      const arr = [1, 2, 3]
      diagnostic.negativeNums(arr)

      expect(arr).to.eql([1, 2, 3])
    })
  })
})
