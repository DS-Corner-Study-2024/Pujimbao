//8번
//index.js
const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if (str.length % 2) { 
        return odd;    
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('node.js_team2'));


//9번
let i = 5;
setInterval(() => {
    if (i==1) {
        console.log("종료");
        process.exit();
    }
    console.log();
    i--;
}, 500);