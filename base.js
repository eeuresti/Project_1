console.log("Sanity Check: JS is working!");

$(document).ready(function() {

    var firstLane = 0;
    var secondLane = 0;

    $(window).keypress(function(e) {
        var key = e.which;
        if (key === 122) {
            $("#lane1 div").eq(firstLane).text("");
            $("#lane1 div").eq(firstLane + 1).text("X");
            if (++firstLane === 10)
                alert("Player 1 Wins!");
        } else if (key === 109) {
            $("#lane2 div").eq(secondLane).text("");
            $("#lane2 div").eq(secondLane + 1).text("X");
            if (++secondLane === 10)
                alert("Player 2 Wins!");
        }
    });
});
