"use strict";
let dias = 1;
let horas = 23;
let minutos = 59;
let segundos = 55;

function correTiempo(){
	segundos++;
}

function compruebaTiempo(){
	if (segundos === 60) {
		minutos++;
		segundos = 0;		
	}
	
	if (minutos === 60 ) {
		horas++;
		minutos = 0;
	}
	
	if (horas === 24) {
		dias++;
		horas = 0;		
	}
}

function imprimeTiempo(cadaCuanto){
	if (segundos % cadaCuanto === 0){
		console.log(formateaTiempo(dias,horas,minutos,segundos));
	}
}

function formateaTiempo(dias,horas,minutos,segundos){
	let pluralSeg;
	let pluralMin;
	let pluralHor;
	let pluralDia;
	let pluralFrase;
	
	//^ Segundos	
	if (segundos === 1) {
		pluralSeg = "";
	} else {
		pluralSeg = "s";
	}

	//^ Minutos	
	if (minutos === 1) {
		pluralMin = "";
	} else {
		pluralMin = "s";
	}

	//^ Horas	
	if (horas === 1) {
		pluralHor = "";
	} else {
		pluralHor = "s";
	}

	//^ dias
	if (dias === 1) {
		pluralDia = "";
		pluralFrase = "";
	} else {
		pluralDia = "s";
		pluralFrase = "n"
	}
	console.clear();
	return `Ha${pluralFrase} pasado ${dias} dia${pluralDia}, ${horas} hora${pluralHor} ${minutos} minuto${pluralMin} ${segundos} segundo${pluralSeg}`;
}

function parada(diasParo,horasParo,minutosParo,segundosParo){
	if (diasParo <= dias && horasParo <= horas && minutosParo <= minutos && segundosParo <= segundos  ) {
		clearInterval(reloj)
		console.log("Se ha parado el tiempo");		
	}
}

const reloj = setInterval(() => {
	correTiempo();
	compruebaTiempo();
	imprimeTiempo(5);
	parada(2,0,0,50)
}, 1000);





