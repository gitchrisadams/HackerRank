"use strict";

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    let inputString = s;
    let inputNumChars = n;
    let numberOfA = 0;
    const inputStringLen = inputString.length;

    // Have to account for this if number of chars passed in n
    // is greater than the length length of string passed in
    // Such as passing in 10 and having a string of "aba" so 10 and 3 in this cas.
    if (inputNumChars >= inputStringLen) {
        for (const aChar of inputString) {
            aChar === "a" && numberOfA++;
        }

        // Test case 10 inputNumChars and string len of 3
        // This would give us 10/3 and floor it so result = 3.
        numberOfA *= Math.floor(inputNumChars / inputStringLen);
    }

    // Now loop through the remaining characters
    for (
        let remCharIndex = 0;
        remCharIndex < inputNumChars % inputStringLen;
        remCharIndex++
    ) {
        inputString[remCharIndex] === "a" && numberOfA++;
    }

    return numberOfA;
}

repeatedString("aba", 10);
