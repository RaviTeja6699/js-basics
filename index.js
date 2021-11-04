// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//"",false,null,undefind,0 apart from all are true
let a=600;
let b=900;
let c=100;
let d;
d=a>b?'ravi':'teja';
console.log(d);
d=b>a?'ravi':'teja';
console.log(d);
//gratest of two numbers
d=a>b?a:b;
console.log(d);
d=false?a:b;
console.log(d);
//gratest number of three numbers
d=a>b?(a>c?a:c): (b>c?b:c)
console.log(d);
//smallest number of three numbers
d=a<b?(a<c?a:c): (b<c?b:c);
console.log(d);

