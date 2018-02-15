function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;
	nota=parseInt(math.random()*(10-1)+1);

	if(nota>=9){
		alert("EXCELENTE");
	}else if (nota>=6&&nota<=8){
		alert("MUY BIEN");
	}else if (nota>=4&&nota<=5){
		alert("BIEN");
	}else if (nota>=3&&nota<=2){
		alert("MAL");
	}else {
		alert("Desastrozo");
	}

}//FIN DE LA FUNCIÓN