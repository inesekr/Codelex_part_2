/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

// Solution with built-in methods:
// function reverse(str: string) {
//     return str.split("").reverse().join("");
// }

// Solution with decrementing for loop:
function reverse(str: string) {
    let reversedString: string = "";
    for(let i =str.length-1; i>=0; i--){
        reversedString += str[i]; 
    }
    return reversedString;
}



export { reverse };
