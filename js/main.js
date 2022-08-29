alert("Welcome 😊!");

var FirstName = prompt("Enter your name...").trim().toUpperCase();
var SurName = prompt("Enter your last name...").trim().toUpperCase();
var Age = +prompt("Enter your age...").trim();
var Years = 2022 - Age;
var Months = 12 * Age;
var Weeks = 52 * Age;
var Days = 365 * Age;
var Hours = 24 * Days;
var Minutes = 60 * Hours;
var Seconds = 60 * Minutes;

alert(`Dear! \n${FirstName} ${SurName}, \nYour age ${Age}, \nYou were born in ${Years}, \nYou lived ${Months} months, \n${Weeks} weeks, \n${Days} days, \n${Hours} hours, \n${Minutes} minutes, \n${Seconds} seconds.`);

document.body.style.backgroundColor = "green";
var heading = document.createElement("h1");
heading.textContent = "Dear customer, Redmi 9C is $1730";
heading.classList="text-center text-dark pt-5 pb-5"
document.body.append(heading);
var Money = parseInt(prompt("How much money do you have?" , "").trim(), 10);
var PhonePrice = 1730;

if(Money >= PhonePrice){
    var text = document.createElement("p");
    text.textContent = "Congratulations 🎊! You can buy";
    text.classList = "text-center text-white fs-4 pt-5";
    document.body.append(text);
}else{
    var textTwo = document.createElement("p");
    textTwo.textContent = "Sorry😒, You will come when you get paid";
    textTwo.classList = "text-center text-white fs-4 pt-5";
    document.body.append(textTwo);
}



var years = parseInt(prompt("What year were you born?" , "").trim(), 10);
var result = 2022 - years;
var PeopleAge = 16;
var oldAge = PeopleAge - result;
if(result >= PeopleAge){
    var text = document.createElement("p");
    text.textContent = "Congratulations 🎊! You can go to the disco🕺💃";
    text.classList = "text-center text-white fs-4 pt-5";
    document.body.append(text);
}else{
    var textTwo = document.createElement("p");
    textTwo.textContent = `Sorry😒, you can go to the disco after ${oldAge} years`;
    textTwo.classList = "text-center text-white fs-4 pt-5";
    document.body.append(textTwo);
}




var price = parseInt(prompt("Ballingzini kiriting...", "").trim(), 10);
if(price >= 5){
    alert("a'lo");
}else if(price === 4){
    alert("yaxshi");
}else if(price === 3){
    alert("yomon");
}else{
    alert("yaxshirooooq o'qi oshqovoq kalla🤦‍♂️")
}