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


// Two numbers and a string and calculate depending on the string.
// It isn't giving negative numbers. For example: (3,4,"substract") returns "0" instead of "-1"
function calc(number1, number2, theString) {
    
    if (theString === "add") {
        return(number1 + number2);
    } 
    else if (theString === "subtract") {
        return(number1 - number2);
    } 
    else if (theString === "mult") {
        return(number1 * number2);
    } 
    else if (theString === "div") {
        return(number1 / number2);
    } 
    else {
        return(0);
    }
};

calc(3,4,"mult")


// Input string and number. String gets repeated by the number.
// Thanks for the help Codrin!
// Maybe possibly finally beginning to understand?!... for (this many times) loop {this thing}
// If you read this and I'm wrong (or right), let me know!
function repeater(theString, number) {
    var result = ""
    for (var i = 1; i <= number; i++) {
        result = result + " " + theString
    }
    console.log(result)
}

repeater("hello")


// Reverse a string
function reverse(theString) {
     var backwards = "";
     for (var i = theString.length - 1; i >= 0; i--) {
         backwards = (backwards + theString[i]);
     }
  console.log(backwards);  
}

reverse("hello")



// Factorial from input number
// Had to go back to an old email hint from Ziad to finish this one :(
function factorial(number) {
    var result = 1;
     for (var i = 1; i <=number; i++) {
      result = result * i;
     }
     console.log(result)
}

