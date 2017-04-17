
"use strict"
function onPush(){
	alert('Съебал');
}
one.onclick = function() {
	field.value+=one.value;
};
function NumInput(num){
	field.value+= num;
}
function Operator(op){
	field.value+= op.value;
}