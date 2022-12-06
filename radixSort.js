// doesn't make direct comparisions between numbers
// works on lists of numbers
// exploits the fact that the size of a number is encoded in the number of digits

// function getDigit gets the digit at the index; index of 0 is the number in the "ones" place (the smallest digit)
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// helper function to count the number of digits
function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}