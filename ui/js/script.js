$(document).ready(function(){

	var greets = Array('Swaagatam','Welcome', 'Bienvenido', 'Bienvenue', 'Willkommen', 'Witamy');var greeting = greets[Math.floor(Math.random()*greets.length)];
	$('#hGreet').text(greeting.toUpperCase());
	$('#qotd').ada_feeder();
	$('#tip').tooltipsy();
	
});