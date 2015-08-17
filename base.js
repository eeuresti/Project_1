console.log("Sanity Check: JS is working!");

$(document).ready(function() {

//Starts players at the beginning of the track
  var firstLane = 0;
  var secondLane = 0;





  $(window).keypress(function(e) {

  var key = e.which;
  // When z is pressed the X will move down the column
    if (key === 122) {
      // You have the first lane with the X ready to race
      $("#lane1 div").eq(firstLane).text("");
      // You move the X by add a div to the existing div.
      $("#lane1 div").eq(firstLane + 1).text("X");
      getWinner();
      firstLane++;

  // When the m is pressed the X will move down the column
    } else if (key === 109) {
      // You have the first lane with the X ready to race
      $("#lane2 div").eq(secondLane).text("");
      // You move the X by add a div to the existing div.
      $("#lane2 div").eq(secondLane + 1).text("X");
      getWinner();
      secondLane++;
    }



  });

});


function getWinner(firstLane, secondLane) {
    var winner;

    if (firstLane === "11") {
        alert("Player 1 Wins!");
        return "Player 1";
    }
    else if (secondLane === "11") {
        alert("Player 2 Wins!");
        return "Player 2";
    }else {
      return;
    }
  }



/*function winner(){
if ("firstLane" === 11) {
    alert("PLAYER 1 WINS!");
    return;
}else if ("secondLane" === 11){
    alert("PLAYER 2 WINS!");
    return;
}else{
  return;
}*/
