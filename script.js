"use strict";

var skaiciuMasyvas = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27];
var skaiciuSuma = 0;
var maziausiasSkaicius = skaiciuMasyvas[0];
var didziausiasSkaicius = skaiciuMasyvas[0];

for(var i = 0; i < skaiciuMasyvas.length; i++){
  skaiciuSuma = skaiciuSuma + skaiciuMasyvas[i];

  if(maziausiasSkaicius > skaiciuMasyvas[i]){
    maziausiasSkaicius = skaiciuMasyvas[i];
  }

  if(didziausiasSkaicius < skaiciuMasyvas[i]){
    didziausiasSkaicius = skaiciuMasyvas[i];
  }

}


  console.log("Skaičių suma: " + skaiciuSuma.toFixed(0));
  console.log("Vidurkis: " + skaiciuSuma.toFixed(0) / skaiciuMasyvas.length);
  console.log("Mažiausias skaičius: " + maziausiasSkaicius.toFixed(0));
  console.log("Didžiausias skaičius: " + didziausiasSkaicius.toFixed(0));
