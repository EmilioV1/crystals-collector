// ### Option One: CrystalsCollector Game (Recommended)

// ![Crystal Collector](Images/1-CrystalCollector.jpg)

// 1. [Watch the demo](https://youtu.be/yNI0l2FMeCk).

// 2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.

// Gloabl Variables
var wins = 0;
var losses = 0;
var points = 0;
var crystals;
var randomNum;

// Game Object
var game = {
    // Generates random objective number
    randomNumGen: function(){
        return Math.floor(Math.random() * 102) + 19;
    },
    // Generate random value for each crystal and pops image
    randomNumCrystal: function(){
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
        }
    },
    // Resets game
    reset: function(){
        points = 0;
        crystals = this.randomNumCrystal();
        randomNum = this.randomNumGen();
        $(".random-number").text(randomNum);
    },

}