function Mostrar()
{

	var numero 
	numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);

	while(numero<0||numero>9){

		numero=prompt("el numero agregado es"+" "+":"+" "+numero+" "+"ingreselo nuevamente");
	}

		alert(numero+" "+"correcto")


}//FIN DE LA FUNCIÓN