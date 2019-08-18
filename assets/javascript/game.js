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
            renderMatchingNumber();
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
});