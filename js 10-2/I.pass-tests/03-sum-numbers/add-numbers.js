function addNumbers(numbers) {
    return numbers.reduce( (arr, curr) => arr += curr, 0)
}
module.exports = addNumbers;
