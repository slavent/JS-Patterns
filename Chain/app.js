function Chain () {

}

Chain.prototype.deferred = [];

Chain.prototype.add = function ( fn ) {
    this.deferred.push(fn);
    return this;
}

Chain.prototype.next = function () {
    if (this.deferred.length) {
        this.deferred.shift().apply(this);
    }
}

Chain.prototype.start = function () {
    this.deferred.shift().apply(this);
}

// создаём новый объект цепь

var chain = new Chain();

chain.
add(function(){
    setTimeout(function () {
        console.log(1);
        chain.next();
    }, 1000);
}).
add(function(){
        setTimeout(function () {
            console.log(2);
            chain.next();
        }, 1000);
}).
add(function(){
    console.log(3);
}).
start();