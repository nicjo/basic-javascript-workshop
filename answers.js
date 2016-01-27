// I'm all about one-liners


// Returns the first character of a string
function firstCharacter(rString) {
    var result = rString.charAt(0);
    console.log(result);
    return(result);
}

firstCharacter("Example")


// Returns the last charcter of a string
function lastCharacter(randomString) {
    var last = randomString.length - 1;
    var result = randomString.charAt(last);
    console.log(result);
    return(result);
}

lastCharacter("Example")


//String and a number that returns the character at the position represented by the number.
function numCharacter(randomString, number) {
    var result = randomString.charAt(number);
    console.log(result)
}

numCharacter("Example",4)


// Add two numbers together. When its not a number, the function will combine the inputs
// example: ("twelve",12) returns "twelve12"
function add(number1, number2) {
    console.log(number1 + number2)
    return(number1 + number2)
}

add(12,30)

