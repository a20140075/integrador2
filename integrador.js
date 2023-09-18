alert("Buen provecho");
alert("Bienvenido al restaurante, Chifa Siu");
var entrada=parseInt(prompt("Ingrese el precio de la entrada"));
var segundo=parseInt(prompt("Ingrese el precio de la segundo"));
var postre=parseInt(prompt("Ingrese el precio del postre"));
var total= entrada + segundo + postre
var igv=(total*0.18)+total
console.log("El precio de la entrada es:",entrada);
console.log("El precio de la segundo es:",segundo);
console.log("El precio de la segundo es:",postre);
console.log("El precio total es",total);
console.log("El precio total mas el IGV es",igv);