
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

function Ravno(){
	for(var i = 1 ; i<length.elements-1 ; i+2 ){
		var znach = elements[0];
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
 return znach;
 alert(znach);
}
function C(){
	elements = [];
	field.value = elements;
}
