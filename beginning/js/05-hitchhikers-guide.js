var message =prompt('ARE YOU READY TO PLAY THE GANME, PRESS THE "Y" OR "NO" TO CONTINUE');
if (message !== "Y") {
    alert ("Thank you!");
} else if (message == "Y"){
    alert ("Please, continue!");

alert( 'You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');
var direction = prompt('Which direction would you like to head (Please enter forward, left, or right');
    switch (direction) {
        case ('right') :
            alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!')
        break;
            case ('left') :
            alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!')
        break;
            case ('forward') :
            alert('You walk 100 yards and safely make your way out of the cave');
        break;
            default :
            alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.');
        }
    var rating =prompt ('Rate the game on grade from 0 to 10');
    if  (rating >=6 && rating <=10)  {
        document.write("Thank you and play again!");
    } else if (rating =1 && rating <=5 ){
        document.write ("I going to improve the game, for sure!");
    } else if (rating =>10) {
        document.write("Thank you for playing!");
    }
}
