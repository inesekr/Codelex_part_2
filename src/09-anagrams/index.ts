/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string): boolean {
  // const cleanA = stringA
  //   .toLowerCase()
  //   .replace(/[^a-z]/g, "")
  //   .split("")
  //   .sort()
  //   .join("");

  // const cleanB = stringB
  //   .toLowerCase()
  //   .replace(/[^a-z]/g, "")
  //   .split("")
  //   .sort()
  //   .join("");

  // Additional function created for equal handling of both strings:

  function handle(str: string) :string {
    return str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");
  }

  const cleanA = handle(stringA);

  const cleanB = handle(stringB);

  return cleanA === cleanB ? true :false;
  
}

export { anagrams };
