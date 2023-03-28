/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) :string {
let maxCount = 0;
let maxChar = "";
str.split('').forEach(function(char){
    if(str.split(char).length>maxCount){
        maxCount= str.split(char).length;
        maxChar= char;
    }
})
    return maxChar;
}

export { maxChar };
