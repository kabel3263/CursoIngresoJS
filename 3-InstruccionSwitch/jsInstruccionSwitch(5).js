function Mostrar()
{
//tomo la edad  
var laHora;
laHora = document.getElementById('hora').value;
laHora=parseInt(laHora);

    switch(laHora){
        
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana");
        break;
        default:
            alert("Another time");
        break;
    

    }
//alert (laHora);
	
	/* SIEMPRE TENER CLARO CUANDO SE TRABAJA CON NUMEROS CONVERTIR EL DATO A ENTERO "PARSEINT"*/



}//FIN DE LA FUNCIÓN