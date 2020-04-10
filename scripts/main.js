/*Complete beginners tutorial from MDN*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'C:/Users/User/Documents/web-projects/my-first-site/images/gothic.jfif') {
		myImage.setAttribute ('src','C:/Users/User/Documents/web-projects/my-first-site/images/gothic-2-night-of-the-raven.jfif');
	} else {
		myImage.setAttribute ('src','C:/Users/User/Documents/web-projects/my-first-site/images/gothic.jfif');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Gothic II, ' + myName;
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Gothic II ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}

/*
const myHeading = document.querySelector('h1'); // No linebreak comment!
myHeading.textContent = 'Hello World!';
*/

/*
let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
	alert('Yay, I love chocolate ice cream!');
} else {
	alert('Awwww, but chocolate is my favorite...');
}
*/

/*
function multiply(num1,num2) {
	let result = num1 * num2;
	return result;
}
*/

/*
document.querySelector('html').onclick = function() {
	alert('Ouch! Stop poking me!');
}
*/