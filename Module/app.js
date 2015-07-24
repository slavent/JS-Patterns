/*
	MODULE PATTERN
*/

(function( window ) {

	function Module() {
		this.method = function() {
			alert("call method");
		};
	}

	window.Module = Module;

} ( this ));

var module = new Module();
module.method();