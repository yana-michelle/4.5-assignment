const age = 99;

if(age <=13){
    console.log ("do you're parents know you're here?");
}
    else if(age >= 18){
    console.log ("congrats! you're old!");
}
 else {
    console.log("oops! still too young!");
} 

const name = "In terms pf powers? Wanda a.k.a Scarlet Witch";

const other = "In terms of strength? Spider-man.";

const mostFun = "Loki of course."

console.log (`who's the strongest avenger? ${name}, but ${other}. who's the funniest? ${mostFun}`);

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
            day = "Monday";
            break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;

}
document.getElementById("demo").innerHTML = "Today is" + day;