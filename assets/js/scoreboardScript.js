var scoreboardTable = document.querySelector("#scoreboard")
var clearBtn = document.querySelector("#clearBtn")

var populateScoreboard = function () {
    var scoreboard = localStorage.getItem("scoreboard");
    if (scoreboard === null) {
        return;
    }
    var jsonScoreboard = JSON.parse(scoreboard);
    jsonScoreboard.scores.sort((a, b) => parseInt(b.score) - parseInt(a.score));

    for (var i = 0; i < jsonScoreboard.scores.length; i++) {
        var row = scoreboardTable.insertRow(i + 1);
        var place = row.insertCell(0);
        var initials = row.insertCell(1);
        var score = row.insertCell(2);

        place.innerHTML = i + 1;
        initials.innerHTML = jsonScoreboard.scores[i].initals;
        score.innerHTML = jsonScoreboard.scores[i].score;
    }
}

var clearScoreboard = function () {
    localStorage.clear();
    location.reload();
}

clearBtn.addEventListener("click", clearScoreboard);