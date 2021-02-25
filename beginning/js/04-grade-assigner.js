let num = prompt('Enter the number between 1 and 100');
if (num =>101 && num==0){
    alert('Only the numbers between 1 and 100 is accepted');
}
if (num >= 60 && num <=69){
    console.log ('You recieve "D\"');
}else if (num>=70 && num<=79){
    console.log ('You recieve "C\"');
}else if (num>=80 && num<=89){
    console.log ('You recieve "B\"');
}else if (num>=90 && num<=100){
    console.log ('You recieve "A\"'); 
} else if (num< 60){
    console.log ('You recieve "F\"');
}