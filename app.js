'use strict'

console.log('Here\'s a hidden message');

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;


var btn = document.getElementById('buttonId');

btn.onclick = function() {
  btn.innerHTML = 'You clicked me!';
};
