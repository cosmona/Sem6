"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) => setTimeout(() => resolve(Math.round(Math.random() * 100)), Math.random() * 1000));

const compruebaEdad = (edad)  => {
	return new Promise((resolve,reject)=>{
		if (edad < 18) {
			reject("Es menor de edad:"+edad);
		} else {
			if (edad % 2 === 0) {
				resolve (true);
			} else {
				resolve (false);
			}
		}
	});
};

agePromise.then((edad)=>{																				//& Cuando se resuelva la generacion de edad
	compruebaEdad(edad).then( (res) => {																//& Cuando se resuelva la comprobacion de edad
		if (res) {
			setTimeout(() => console.log("Es mayor de edad y es par:"+edad),1000);						//& Si compruebaEdad devuelve true
		} else {
			setTimeout(() => console.log("Es mayor de edad y es impar:"+edad),2000);					//& Si compruebaEdad devuelve false
		}
	});
});


