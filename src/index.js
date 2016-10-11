var page = require('page');

var main = document.getElementByid('main-container');

page('/', function(ctx, next){
	main.innerHTML = 'Home'; //diga Home
})

page('/signup', function(ctx, next){
	main.innerHTML = 'Signup'; // diga signup
})