
var coinFlip = Math.round(Math.random());
var choice = prompt('Choose "Heads" or "Tails", enter the exact choice,  it\'s case sensitive');
if (coinFlip == 1){
    var flipResult = "Heads";
   console.log('The choice is heads');
} else {
    var flipResult = "Tails";
    console.log('The choice is tails');
} if (flipResult == choice) {
    if (flipResult == "Heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
} else {
    if (flipResult == "Heads") {
        alert("The flip was heads and you chose tails...you lose!");
    } else {
        alert("The flip was tails and you chose heads...you lose!");
    }
}
