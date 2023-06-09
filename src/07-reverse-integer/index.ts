/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

// function reverse(str: string) {
//         return str.split("").reverse().join("");
//     }

function reverse(int: number) {
    return parseInt(int.toString().split("").reverse().join(""))*Math.sign(int);

}

export { reverse };
