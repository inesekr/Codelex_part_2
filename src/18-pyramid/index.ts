/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
  for (let i = 1; i <= n; i++) {
    let output = "";

    for (let j = 1; j <= n - i; j++) {
      output = output + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      output = output + "#";
    }
    for (let l = 1; l <= n - i; l++) {
      output = output + " ";
    }
    console.log(output);
  }
}

export { pyramid };
