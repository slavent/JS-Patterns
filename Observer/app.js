var Subject = (function( window ) {

	function Subject() {
		this._list = [];
	}

	Subject.prototype.observe = function( obj ) {
		this._list.push( obj );
	};

	Subject.prototype.unobserve = function( obj ) {
		for( var i = 0, len = this._list.length; i < len; i++ ) {
			if( this._list[i] === obj ) {
				this._list.splice(i, 1);
				return true;
			}
		}

		return false;
	};

	Subject.prototype.notify = function( obj ) {
		var args = Array.prototype.slice.call( arguments, 0 );
		for( var i = 0, len = this._list.length; i < len; i++ ) {
			this._list[i].update.apply( null, args );
		}
	};

	return Subject;

} ( this ));

function StockGrabber() {

	var subject = new Subject();

	this.addObserver = function( newObserver ) {
		subject.observe( newObserver );
	};

	this.removeObserver = function( deleteObserver ) {
		subject.unobserve( deleteObserver );
	};

	this.fetchStocks = function() {
		var stocks = {
			apple: 11,
			google: 13,
			microsoft: 15
		};

		subject.notify( stocks );
	};

}

var StockUpdaterComponent = {
	update : function() {
		console.log( '"update" called on StockUpdater with: ', arguments );
	}
};

var StockChartsComponent = {
	update : function() {
		console.log( '"update" called on StockCharts with: ', arguments );
	}
};

var stockApp = new StockGrabber();
stockApp.addObserver( StockUpdaterComponent );
stockApp.fetchStocks(); // console logs: "update" called on StockUpdater with...
stockApp.addObserver( StockChartsComponent );
stockApp.fetchStocks(); // console logs: "update" called on StockUpdater with... "update" called on StockCarts with...
stockApp.removeObserver( StockUpdaterComponent );
stockApp.fetchStocks(); // console logs: "update" called on StockCharts with...
stockApp.removeObserver( StockChartsComponent );
stockApp.fetchStocks(); // does nothing; no observers