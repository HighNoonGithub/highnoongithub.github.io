
"use strict"
var elements = [];
var str = "";

function onPush(){
	alert('Съебал');
}

function buttonPress(value) {
	if (typeof value === "number") {
		if (elements.length === 0) {
			elements.push(value);
		} else {
			var index = elements.length - 1;
			var lastElement = elements[index];
			if (typeof lastElement === "number") {
				elements[index] = parseInt(elements[index].toString() + value.toString());
			} else {
				elements.push(value);
			}
		}
	} else if (typeof value === "string" && elements.length > 0) {
		elements.push(value);

	}
	field.value = elements.join(" ");
}
var znach = 0;
function Ravno(){
	var znach = elements[0];
	for(var i = 1 ; i<elements.length-1 ; i++ ){
		
		if(elements[i] == "*"){
			znach = elements[i+1]*znach;
		}
		if(elements[i] == "/"){
			znach = elements[i+1]/znach;
		}
		if(elements[i] == "+"){
			znach = elements[i+1]+znach; 
		}
		if(elements[i] == "-"){
			znach = elements[i+1]-znach;
		}
	}

	field.value = znach;
}
function sq(){
	if(typeof elements[elements.length-1] === "number"){
elements[elements.length-1] = Math.sqrt(elements[elements.length-1]);
	}
	return elements[elements.length-1]; 
}
function drob(){
	if(typeof elements[elements.length-1] === "number"){
elements[elements.length-1] = 1/(elements[elements.length-1]);
	}
	return elements[elements.length-1];
}
function C(){
	elements = [];
	field.value = elements;
}
