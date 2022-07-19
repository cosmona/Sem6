"use strict";

  const letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

//todo comentario
function compruebaDni(dni){                               

 
  const soloNumeros = "^[0-9]+$";
  const soloLetras = `^[${letras}]+$`;
  const dni2 = dni.split("-");  
  //* Mira que en la posicion 8 hay un guion.
  if (dni[8] != "-"){
    let miError = new Error("Tiene que estar separado la numeracion de la letra con un guion (-)");
    miError.codigo = 92;
    throw miError;
  }
  
  //* Mira si la longitud es mayot de 10
  if (dni.length != 10 ){
    let miError = new Error("Tiene que ser 10 caracteres");
    miError.codigo = 93;
    throw miError;  
  }

  //* Mira si la longitud de la primera parte no es mayor de 8
  if (dni2[0].length != 8){
    let miError = new Error("Antes del guion son 8 caracteres");
    miError.codigo = 94;
    throw miError;  
  }

  //* Mira si la segunda parte no es mayor de 1
  if (dni2[1].length != 1){
    let miError = new Error("Despues del guion es una letra");
    miError.codigo = 95;
    throw miError;  
  }
   
  //* Mira si la primera parte son solo numeros
  if(dni2[0].match(soloNumeros) === null){                                                    
    let miError = new Error("La primera parte tienen que ser solo numeros");
    miError.codigo = 96;
    throw miError;  
  }
  
  //* Mira si la segunda parte son solo letras permitidas [T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E]
  if(dni2[1].toLocaleUpperCase().match(soloLetras) === null){                                                     
    let miError = new Error(`La segunda parte tienen que ser solo letras permitidas ${letras}`);
    miError.codigo = 97;
    throw miError;  
  }

  if (dni2[1].toLocaleUpperCase() === letras[dni2[0]%23]) {      
    return true;
  } else {
    let miError = new Error(`La segunda parte tienen que ser solo letras permitidas ${letras}`);
    miError.codigo = 97;
    throw miError;  
  }
  
}

try {   
  compruebaDni("46806756-p") ? console.log("DNI Valido"): null;
} catch (error) {
    console.error(error.message,error.codigo);
}
