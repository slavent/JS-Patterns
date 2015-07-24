/*
	The Revealing Module Pattern
*/

var Module = (function( window ) {

	function methodOne() {
		alert("call mrthod one");
	}

	function methodTwo() {
		alert("call mrthod two");
	}

	return {
		publicMethodOne: methodOne,
		publicMethodTwo: methodTwo,
	}

} ( this ));

Module.publicMethodOne();
Module.publicMethodTwo();