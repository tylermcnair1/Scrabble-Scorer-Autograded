// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in oldPointStructure) {

         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }

      }
   }
   return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
// let userWord = input.question("enter a word: ")
function initialPrompt() {
   let userAnswer = input.question("Let's play some scrabble!  Enter a word: ");


   return console.log(oldScrabbleScorer(userAnswer));


};



let userWord = input.question("enter a word: ");
function simpleScorer(word) {
   // let userWord = input.question("enter a word: ");
   score = 0
   for (let i = 0; i < word.length; i++) {
      score += 1

   }
   return score;
};
console.log(simpleScorer(userWord));

let userSelection = input.question("enter a word: ")

function vowelBonusScorer(word) {

   newScore = 0;
   let vowels = ["A", "E", "I", "O", "U"];
   word = word.toUpperCase();
   for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
         newScore += 3
      }
      else {
         newScore += 1

      }
   }


   return newScore;

}
console.log(vowelBonusScorer(userSelection))




let scrabbleScorer;


const scoringAlgorithms = [
   {

      onePoint: simpleScorer
   },
   {
      vowelBonus: vowelBonusScorer
   },
   {
      normal: oldScrabbleScorer
   }

];
let choice = input.question("select difficulty 0-2: ")
function scorerPrompt(number) {
   // let choice = input.question("select difficulty 0-2: ")
   if (choice == 0) {
      return simpleScorer(choice);
   } else if (choice == 1) {
      return vowelBonusScorer(choice);
   } else {
      return oldScrabbleScorer(choice);

   }
};
console.log(scorerPrompt(choice));

function transform() { };

let newPointStructure;

function runProgram() {
   initialPrompt();

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};
