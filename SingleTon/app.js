/*
	SingleTon pattern
*/

var Module = (function( window ) {

	var instance = null;

	function initModule() {

		function methodOne() {
			alert("call method one");
		}

		function methodTwo() {
			alert("call method two");
		}

		return {
			publicMethodOne: methodOne,
			publicMethodTwo: methodTwo
		};

	}

	function getInstance() {
		if( !instance ) {
			instance = new initModule();
		}

		return instance;
	}

	return {
		getInstance: getInstance
	}

} ( this ));

Module.getInstance().publicMethodOne();
Module.getInstance().publicMethodOne();