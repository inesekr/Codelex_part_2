/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
  // One variant with for loop:
  // const words: string[] = input.split(/[_\- ]+/);
  // let firstLetters: string = "";
  // for (let i = 0; i < words.length; i++) {
  //   firstLetters += words[i].slice(0, 1);
  // }
  // return firstLetters.toUpperCase();

  // One more variant with for loop:
  const words= input.replace(/[^a-zA-Z']+/g, " ").split(" ");
  let firstLetters: string = "";
  words.forEach((word) => {
    firstLetters += word[0];
  });
  return firstLetters.toUpperCase();

  // return input
  //   .replace(/[^a-zA-Z']/g, " ")
  //   .split(" ")
  //   .reduce(
  //     (response, word) => (response += word.slice(0, 1).toUpperCase()),
  //     ""
  //   );
}

export { parse };
