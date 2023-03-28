/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

const EVEN_NUMBERS = ["0", "2", "4", "6", "8"];

function isEven(n: number) {
  const string: string = n.toString();
  const notDecimal = string.split(".")[0];
  return EVEN_NUMBERS.includes(notDecimal.slice(-1));
  // Second variant, with loop:
  // const lastDigit = notDecimal[notDecimal.length - 1];
  // let isEven: boolean = true;
  // for (let i = 0; i < Number(lastDigit); i++) {
  //   if (isEven) {
  //     isEven = false;
  //   } else {
  //     isEven = true;
  //   }
  // }
  // return isEven;
}

// Ātrais variants, bitwise operators?:
// return !(n & 1);

// Vēl viens, līdzīgs:
// if((n & 1) == 0){
//     return true
//     }
//     return false;

export { isEven };
