import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../calculator.js';

describe('Calculator Tests', function() {
    it('should add two numbers correctly', function() {
        const result = add(2, 3);
        expect(result).to.equal(5);
});

it('should subtract two numbers correctly', function() {
    const result = subtract(5, 3);
    expect(result).to.equal(2);
});

it('should multiply two numbers correctly', function() {
    const result = multiply(2, 3);
    expect(result).to.equal(6);
});

  it('should divide two numbers correctly', function() {
    const result = divide(6, 3);
    expect(result).to.equal(2);
  });

//   it('should throw an error when dividing by zero', function() {
//     expect(() => divide(6, 0)).to.throw(Error, 'Cannot divide by zero');
//   });
});
