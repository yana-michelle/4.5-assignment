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

function myFunction(){
    let text = document.getElementById("avengersOpinion").innerHTML;
    document.getElementById("avengersOponion").innerHTML = 
    text.replace("Peter Parker", "Spider-man.");
}

let x = new Date("2000-05-22");
console.log(Number(x));


let day;
switch (new Date().getDay()) {
    case 0:
        day = "-oh no is it sunday already?";
        break;
    case 1:
            day = "ugh. monday.";
            break;
    case 2:
        day = "tuesday. the blandest day of the week.";
        break;
    case 3:
        day = "wednesday. it's not so bad I guess.";
        break;
    case 4:
        day = "Thursday! so close to freedom!";
        break;
    case 5:
        day = "Friday!!!! yay!!! the weekend is here once again!";
        break;
    case 6:
        day = "Saturday!!!!! PARTY!!!!";
        break;

}
