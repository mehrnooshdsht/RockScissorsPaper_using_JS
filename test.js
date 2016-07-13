/**
 * choses a random hand for the computer
 * @param  {number} rand_num  random number passed to the function to chose a hand
 * @return {object}           random hand
 */

function FindComputerHand(rand_num){
  var choices = [
    {winner : 'rock' , loser : 'scissors'},
    {winner : 'scissors' , loser : 'paper'},
    {winner : 'paper' , loser : 'rock'}
  ]
  return choices[rand_num]
}

/**
 * gets a user hand and evalutes if it's the loser winner or it's a tile
 * @param  {string} user_hand  user's hand is passed
 * @return {string}            a text saying what the hands were and what the game result is
 */

var WinLose = function(user_hand){
  var computer_hand = FindComputerHand(Math.round((Math.random() * 10 ) % 2))
  if (user_hand != computer_hand.winner){
    if (user_hand === computer_hand.loser){
      return computer_hand.winner + " vs " + user_hand + "*** you lost ***"
    }
    else {
      return computer_hand.winner + " vs " + user_hand + "*** you won ***"
    }
  }
  else{
    return computer_hand.winner + " vs " + user_hand + "*** 404 winner not found ***"
  }
}

//calling the function

WinLose("paper")
