var a = prompt("Podaj wartość a"),
	b = prompt("Podaj wartość b"),
	value = (a * a) + (2 * a * b) - (b * b),
	wynik = "";

if( value > 0 ) {
	wynik = "Działanie ma wartość dodatnią i wynosi: " +value;
}

else if ( value == 0 ) {
	wynik = "Działanie ma wartość zerową";
}

else {
	wynik = "Działanie ma wartość ujemną i wynosi: " +value;
}

console.log(wynik);
document.getElementById("wynik").innerHTML = wynik;