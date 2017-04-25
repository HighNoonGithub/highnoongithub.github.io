
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
elements.forEach(function(item) {
  str = item;
  });
field.value = elements.join(" ");
}

function Ravno(){
if(elements.indexOf('*')){
var multi = elements.indexOf('*');
var multiplication = elements[multi-1] * elements[multi+1];
}
if(elements.indexOf('/')){
var divis = elements.indexOf('/');  
var division = elements[divis-1] / elements[divis+1]
}
if(elements.indexOf('+')){
var add = elements.indexOf('+');
var addition = elements[add-1] + elements[add+1];
}
if(elements.indexOf('-')){
var	dif = elements.indexOf('-');
var difference = elements[dif-1] - elements[dif+1];
}


}
function C(){
	elements = [];
	field.value = elements;
}
