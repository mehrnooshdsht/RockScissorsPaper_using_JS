var choices = {
  rock: {
    rock: 'nothing',
    paper: 'winner',
    scissors: 'loser'
  },
  paper: {
    rock: 'loser',
    paper: 'nothing',
    scissors: 'winner'
  },
  scissors: {
    rock: 'winner',
    paper: 'loser',
    scissors: 'nothing'
  }
}
/**
 * choses a random hand for the computer
 * @param  {number} rand_num  random number passed to the function to chose a hand
 * @return {object}           random hand
 */

function FindComputerHand(choices, rand_num){
  // Object.keys returns the keys of a given object. Here it would return
  // rock, paper, scissors
  return Object.keys(choices)[rand_num]
}

/**
 * gets a user hand and evalutes if it's the loser winner or it's a tile
 * @param  {string} user_hand  user's hand is passed
 * @return {string}            a text saying what the hands were and what the game result is
 */

var WinLose = function(user_hand){
  var computer_hand = FindComputerHand(choices, Math.round((Math.random() * 10 ) % 2))
  
  return computer_hand + ' vs ' + user_hand + '*** ' + choices[computer_hand][user_hand] + ' ***'
  // choices[computer_hand] would be somthing like choices['rock'] and would 
  // return an object like this:
  // {
  //   rock: 'nothing',
  //   paper: 'winner',
  //   scissors: 'loser'
  // }
  // then choices[computer_hand][user_hand] would determine what is the condition
}

//calling the function

WinLose("paper")
