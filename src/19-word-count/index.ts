/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string): { [key: string]: number } {
    const words: string[] = str
      .toLowerCase()
      .trim()
      .split(/[\n\t" "]+/g);
    const result: { [key: string]: number } = {};

    words.forEach((word) => {
      //This way code doesn't account for words that are the same as property names on the built-in Object prototype. When adding a property to an object with a key that matches a property on the Object prototype, it is actually modifying the Object prototype itself, which is generally not recommended:
      // if (result[word]) {

        //check whether the word is a property on the Object prototype using the hasOwnProperty() method. This method returns a boolean indicating whether the object has the specified property as a direct property of itself, as opposed to inheriting it from its prototype chain:
        if (result.hasOwnProperty(word)) {
        result[word]++;
      } else {
        result[word] = 1;
      }
    });
    return result;
  }
}

export { Words };

// for (let word of words) {
//   if (result[word]) {
//     result[word]++;
//   } else {
//     result[word] = 1;
//   }
// }

// .replace(/\s+/g, " ")
