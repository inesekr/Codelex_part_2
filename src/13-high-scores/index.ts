/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    const myScores = this.scores.slice(0);
    return myScores[myScores.length-1];
  }

  get personalBest() {
    const myScores = this.scores.slice(0);
    return Math.max(...myScores);
  }

  get personalTopThree() {
    const myScores = this.scores.slice(0);
    return myScores.sort(function(a, b){return b-a}).slice(0,3);
  }

  //need to keep original array untouched!? All operation to perform on copies of original array
}

export { HighScores };
