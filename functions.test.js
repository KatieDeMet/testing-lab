const { expect, test } = require('@jest/globals')
const { returnTwo, greeting, add, subtract, multiply, divide } = require('./functions')

test('returnTwo should return the number 2', () => expect(returnTwo()).toBe(2))
test('greeting should return Hello plus name var', function () {
    expect(greeting('James')).toBe('Hello James')
    expect(greeting('Jill')).toBe('Hello Jill')
})

describe('Math functions', function () {
    test('add should return the sum of num1 & num2', function () {
        expect(add(1, 2)).toBe(3)
        expect(add(5, 9)).toBe(14)
        expect(add(1, '2')).toBe(3)
        expect(add(3, 4, 5)).toBe(12)
        expect(add(5, 9)).not.toBeNaN()
    })
    test('subtract should return the difference of num1 & num2', function () {
        expect(subtract(3, 2)).toBe(1)
        expect(subtract(10, 2)).toBe(8)
    })
    test('multiply should return the product of num1 & num2', function () {
        expect(multiply(2, 3)).toBe(6)
        expect(multiply(5, 9)).toBe(45)
    })
    test('divide should return the quotient of num1 & num2', function () {
        expect(divide(10, 5)).toBe(2)
        expect(divide(40, 4)).toBe(10)
    })
})