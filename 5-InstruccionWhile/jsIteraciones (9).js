function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	
	while(respuesta!='no')
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if(contador==0){
			maximo=numero;
			minimo=numero;
		}else
		
			if(numero>maximo){

				maximo=numero;
			}
			if(numero<minimo){

			minimo=numero
		}

	}
	contador=contador+1;
	repuesta=prompt("para salir , ingresar no");
}

document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;


//FIN DE LA FUNCIÓN