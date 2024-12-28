const prompt = require('prompt-sync')();

const yourName = prompt("What is your name? ");
const theirName = prompt("What is their name? ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log("Your love score is: " + loveScore + "%");