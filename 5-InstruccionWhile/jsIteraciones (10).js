function Mostrar()
{

	var contador=0;
	var numero;
	var negativos=0;
	var acumuPosit=0;
	var acumuNegat=0;
	var positivos=0;
	var contadorCeros;
	var promPositivos;
	var promNegativos;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
	

		if(numero%2==0)
		{
			acumNegat=acumuNegat+numero;
			negativos=negativos+numero;
			negativos++;
			
		}else {
			if(numero>0){
				acumuPosit=acumuPosit+numero;
				positivos ++;
	
			}else{
				contadorCeros++;
			}
		}
		repuesta=prompt("ingrese no para salir");
		
	
	}//while(repuesta!="no")

	promPositivos=acumuPosit/negativos;
	promNegativos=acumuNegat/positivos;
	diferencia=positivos-negativos;


	document.write("los negativos son"+" "+negativos);
	document.write("los positivos son"+" "+positivos);
	document.write("promPositivos es"+" "+promPositivos);
	document.write("promNegativo es"+" "+promNegativo);



}//FIN DE LA FUNCIÓN