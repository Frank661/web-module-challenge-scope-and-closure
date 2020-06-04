// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter1 is a variable whos value is a function (countermaker()). // Counter2 is a function
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * the function counterMaker() uses closure
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter1 should be use when the information inside of the function is only essential to itself.
 * Counter2 should be used if you would like to use variable that is stored globally
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
console.log('Task 2');
function inning() {
  let score = Math.floor(3 * Math.random());
  return score
}
 
console.log(inning()); 









/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) 
and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
console.log('task 3')

function finalScore(callback,innings){
	let home = 0;  
	let away = 0;
	for(let i = 0; i <= innings; i++){  
 	home = callback() + home;
 	away = callback() + away;
 	}
 	
 return `Home : ${home} Away : ${away}`
 
 
}
console.log(finalScore(inning,9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */
console.log('task 4')
function scoreboard(callback, innings) {
  let home = 0;
  let away = 0;

  for(let i = 1; i < innings; i++){  
    home = callback() + home;
    away = callback() + away;
    if(i === 1){
      console.log(`${i}st inning: ${home} - ${away}`);
      }
      else if(i === 2){
        console.log(`${i}nd inning: ${home} - ${away}`);
      }
      else if(i === 3){
        console.log(`${i}rd inning: ${home} - ${away}`);
      }
        else{
        console.log(`${i}th inning: ${home} - ${away}`);
      }
      }
    console.log(`Final Score: Home : ${home} - ${away}`)
   }

scoreboard(inning, 10);








 //    if (innings > 1) {console.log('1st inning: '+home+'-'+away)}}
  // for(let i = 0; i < 1; i++){  
  //      home = callback() + home;
  //      away = callback() + away;
  //    if (innings > 2) { console.log('2nd inning: '+home+'-'+away)}}
  //    for(let i = 0; i < 1; i++){  
  //      home = callback() + home;
  //      away = callback() + away;
  //    if (innings > 3) {console.log('3rd inning: '+home+'-'+away)}}
  //    for(let i = 0; i < 1; i++){  
  //     home = callback() + home;
  //     away = callback() + away;
  //   if (innings > 4) {console.log('4th inning: '+home+'-'+away)}}
  //   for(let i = 0; i < 1; i++){  
  //     home = callback() + home;
  //     away = callback() + away;
  //   if (innings > 5) {console.log('5th inning: '+home+'-'+away)}}
  //   for(let i = 0; i < 1; i++){  
  //     home = callback() + home;
  //     away = callback() + away;
  //   if (innings > 6) {console.log('6th inning: '+home+'-'+away)}}
  //   for(let i = 0; i < 1; i++){  
  //     home = callback() + home;
  //     away = callback() + away;
  //   if (innings > 7) {console.log('7th inning: '+home+'-'+away)}}
  //   for(let i = 0; i < 1; i++){  
  //     home = callback() + home;
  //     away = callback() + away;
  //   if (innings > 8) {console.log('8th inning: '+home+'-'+away)}}
  //   for(let i = 0; i < 1; i++){  
  //     home = callback() + home;
  //     away = callback() + away;
  //   if (innings >= 9) {console.log('9th inning: '+home+'-'+away)}}