// ¡Hace calor! Hagamos un convertidor.
// Crea una función llamada celsiusToFahrenheit:
// Almacene una temperatura Celsius en una variable.
// Conviértalo a Fahrenheit y emita "NN°C es NN°F".


function celsiusToFahrenheit(){
    var celcius = prompt("digite la temperatura en celcius"); 
    var fahrenheit = (celcius * ((9/5)) + 32); 
    alert(fahrenheit);
}
celsiusToFahrenheit(); 

// Crea una función llamada fahrenheitToCelsius:
// Ahora almacene una temperatura Fahrenheit en una variable.
// Conviértalo a Celsius y emita "NN°F es NN°C".

function fahrenheitToCelsius(){
    var  fahrenheit = prompt("digite la temperatura en fahrenheit"); 
    var celcius = ((fahrenheit - 32) * (5/9)); 
    alert(celcius);
}
fahrenheitToCelsius(); 