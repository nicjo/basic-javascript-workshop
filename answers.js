// I'm all about one-liners

function firstCharacter(rString) {
    var result = rString.charAt(0);
    console.log(result);
    return(result);
}

firstCharacter("Example")


function lastCharacter(randomString) {
    var last = randomString.length - 1;
    var result = randomString.charAt(last);
    console.log(result);
    return(result);
}

lastCharacter("Example")