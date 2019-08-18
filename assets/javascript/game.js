// Launches code once DOM has loaded
$(document).ready(function() {

    // Starting variables
    var wins = 0;
    var losses = 0;
    var crystals;

    // Total points 
    var points = 0;

    // Target number
    var randomNum = randomNumGen();

    // Generates random objective number
    function randomNumGen(){
        return Math.floor(Math.random() * 102) + 19;
    };

    // Generate random value for each crystal and pops image
    function randomNumCrystals(){
        return {
            one:{
                crystalValue: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/one.png"
            },
            two:{
                crystalValue: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/two.png"
            },
            three:{
                crystalValue: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/three.png"
            },
            four:{
                crystalValue: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/four.png"
            },
        };
    }

    // Resets game
    function reset(){
        points = 0;
        crystals = randomNumCrystal();
        randomNum = randomNumGen();
        $(".random-number").text(randomNum);
    }
    // Updates HTML
    function updateHtml(win){
        // Updates win area with win or loss message
        $(".win-area").empty()
        // If user wins
        if(win === true){
            $(".win-area").append($("<p>").text("You win!"));
            reset();
            renderMatchingNumber();
        }
        // If user loses
        else if(win === false){
            $(".win-area").append("<p>").text("you lose!");
            reset();
            popMatchingNumber();
        }

        // Appends scoreboard to the page
        var wSpan = $("<span>").text(wins);
        var lSpan = $("<span>").text(losses);

        var pWins = $("<p>").text("Wins: ");
        var pLosses = $("<p>").text("Losses: ");

        pWins.append(wSpan);
        pLosses.append(lSpan);

        $("#win-area").append(pWins);
        $("#win-area").append(pLosses);
    }

    // Function to pop crystals to page
    function popCrystals(){
        for (var key in crystals){
            var crystalDiv = $("<div class = 'crystals-button' data-name = '" + key + "'>");
            var crystalImg = $("<img alt = 'image' class = 'crystal-img'>").attr("src", crystals[key].imageUrl);
            crystalDiv.append(crystalImg);
            $("#crystal-area").append(crystalDiv);
        }
    }
    // Function to update total points as crystals are clicked
    function updateMatchingNumber(crystal){
        // Updates the point total based on which crystal was clicked
        yourMatchingNumber += crystals[crystal.attr("data-name")].points;
    }

    // Function that pops current points to the page
    function renderMatchingNumber(crystal){
        var scoreNumDiv = $("<div id = 'score-number'>").text(yourMatchingNumber);
        $("#score-area").html();
        $("#score-area").html(scoreNumDiv);
    }
});