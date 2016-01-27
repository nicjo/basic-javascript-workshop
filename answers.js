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

