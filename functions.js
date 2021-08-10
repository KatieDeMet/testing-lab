module.exports = {
    returnTwo: () => 2,
    greeting: (name) => `Hello ${name}`,
    add: (num1, num2, num3) => {
        if(!num3) {
            return parseInt(num1) + parseInt(num2)
        } else {
            return parseInt(num1) + parseInt(num2) + parseInt(num3)
        }
    },
    subtract: (num1, num2, num3) => {
        if(!num3) {
            return parseInt(num1) - parseInt(num2)
        } else {
            return parseInt(num1) - parseInt(num2) - parseInt(num3)
        }
    },
    multiply: (num1, num2, num3) => {
        if(!num3) {
           return parseInt(num1) * parseInt(num2)
        } else {
            return parseInt(num1) * parseInt(num2) * parseInt(num3)
        }
    },
    divide: (num1, num2, num3) => {
        if(!num3) {
            return parseInt(num1)/parseInt(num2)
        } else {
            return parseInt(num1)/parseInt(num2)/parseInt(num3)
        }
    }
}