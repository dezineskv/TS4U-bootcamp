// example of using modules for export
export const findLargestNum = (num1, num2) => {
    if (num1 == num2) {
        return `${num1} is similar to ${num2}`;
    }
    else if (num1 >= num2) {
        return `${num1} is greater than ${num2}`
    } else {
        return `${num2} is greater than ${num1}`
    }
}

// findLargestNum(1,5);
console.log(findLargestNum(10,12));