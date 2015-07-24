/*
	Pattern Module 2
*/

var Module = (function( window ) {

	var private = {};

	function Module() {

		this.method = function() {
			alert("call method");
		};

	}

	return Module;	

} ( this ));

var module = new Module();
module.method();