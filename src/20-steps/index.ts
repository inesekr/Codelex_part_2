/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

// for (let i = 1; i <= n; i++) {
//     let output = "";

//     for (let j = 1; j <= n - i; j++) {
//       output = output + " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       output = output + "#";
//     }
//     for (let l = 1; l <= n - i; l++) {
//       output = output + " ";
//     }
//     console.log(output);
//   }

function steps(n: number):void {
  for (let i = 1; i <= n; i++) {
    let output: string = "";
    for (let j = 1; j <= i; j++) {
        output = output + "#";
    //   output = output + " ".repeat(n - i);
    }
    for (let k = i+1; k <= n; k++) {
      output = output + " ";
    //   for(let j=1; j<=n-1; j++){
    //     output= output+(" ").repeat(n-i);
    // }
    }
    // for(let j=1; j<=n-1; j++){
    //     output= output+(" ").repeat(n-i);
    // }
    console.log(output);
  }
}

export { steps };
