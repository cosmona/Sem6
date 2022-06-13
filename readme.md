# Ejercicio 1

Crea una funcón que reciba un DNI y lo valide.

¿Sabías que la letra del DNI es un sistema de validación, ya que se obtiene a partir del número?

Para ello, lo primero que hay que hacer es obtener el **resto** de dividir el número entre 23. A continuación, segun el resultado (de 0 a 22), se asigna la letra en este orden:

```javascript
const letras = 
[ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",   "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
```

Para considerarlo correcto, la función recibirá el DNI en formato 00000000-A (la letra puede ir en mayúscula o minúscula). Hará las siguientes comprobaciones:

1- Lo que se ha introducido es un string con 10 caracteres.
2- Si separamos por el guión tiene dos partes.
3- La primera parte (antes del guion) son 8 números.
4- La segunda parte (después del guion) es un único caracter y no es un número.
5- La letra se corresponde con la que debería, según el número.

Si se cumplen todas las comprobaciones, se mostrará un mensaje en consola indicando que es un DNI válido.

Si alguna de las comprobaciones falla, lanzará un error.
Si efectivamente hay algún error se mostrará un mensaje en rojo por consola que diga "Se ha producido un error:" y el mensaje correspondiente.

# Ejercicio 2

Crea un programa que imprima cada 5 segundos el tiempo que ha pasado desde la ejecución del mismo. Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución.

A continuación, crea una función que sea capaz de parar el programa. Dicha función recibirá dos parámetros: un número y una letra (D, H, M o S), que determinarán el tiempo que tardará en ejecutarse. Para que quede más claro, mostrará un aviso de que el programa se ha parado.

** - Extra: ** Haz que el texto se ajuste a singular y plural (ej: 1 minuto / 2 minutos)

** Ejemplo output: ** "Han pasado 0 días, 0 horas, 1 minuto y 20 segundos desde la ejecución".

Nota: Por las propias limitaciones de JavaScript no hace falta que sea totalmnete preciso, puede haber variaciones de 1s.

# Ejercicio 3

Crea una función que reciba una edad y devuelva una promesa:

- Si la edad es menor a 18 la promesa se rechazará inmediatamente con el mensaje "_edad_ es menor". 

- Si la edad es par, la promesa se resolverá al cabo de un segundo con el mensaje "_edad_ es par".

- Si la edad es impar, la promesa se resolverá al cabo de dos segundos con el mensaje "_edad_ es impar".

Fíjate en que en el script.js ya se aporta una promesa que devuelve un número del 0 al 100, pero no sabemos exactamente cuánto tarda.

Para finalizar el ejercicio debes hacer que se muestre por consola el mensaje correspondiente a llamar a la función con la edad que devuelva la promesa. En caso de que sea rechazada, se mostrará de color rojo "Error: " y el mensaje correspondiente.