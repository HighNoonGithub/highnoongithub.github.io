﻿
"use strict"
var elements = [];
var str = "";
function onPush(){
	alert('Съебал');
}
one.onclick = function() {
	field.value+=one.value;
};
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
  str += item;
  });
field.value = str;
}
function Operator(){
	field.value+= minys.value;
}
function Operat(){
	field.value+= plus.value;
}
function Ravno(){
	
}
function e(){
	field.value = "";
}

