// I'm all about one-liners


// Returns the first character of a string
function firstCharacter(rString) {
    return(rString.charAt(0));
}

firstCharacter("Example")


// Returns the last charcter of a string
function lastCharacter(randomString) {
    var last = randomString.length - 1;
    return(randomString.charAt(last));
}

lastCharacter("Example")


//String and a number that returns the character at the position represented by the number.
function numCharacter(randomString, number) {
    return(randomString.charAt(number));
}

numCharacter("Example",4)

function numCharacter(randomString, number) {
    return(randomString.charAt(number));
}


// Add two numbers together. When its not a number, the function will combine the inputs
// example: ("twelve",12) returns "twelve12"

function add(number1, number2) {
    return(number1 + number2);
}

add(12,30)


// Multiply two numbers together.
// If I use a string and a number (or two strings), the result will be NaN
function multiply(number1, number2) {
    return(number1 * number2);
}

multiply(12,30)


// Two numbers and a string