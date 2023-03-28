/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

const VOWELS = ["a", "e", "i", "o","u"];
function vowels(s: string) {
    let count: number = 0;
    const stringToArr : string[] = s.toLowerCase().split("");
    for(let i= 0; i<stringToArr.length; i++){
        if (VOWELS.includes(stringToArr[i])){
            count++;
        }
    }
    return count; 
}

export { vowels };
