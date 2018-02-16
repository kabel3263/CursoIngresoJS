function Mostrar()
{
//tomo la edad  
var mesDelAño; 
mesDelAño= document.getElementById('mes').value;

//alert (mesDelAño);
    switch(mesDelAño){

        case "Febrero":
            alert("Este mes no tiene más de 29 días");
        break;
        case "Enero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Este mes tiene 30 o más días");
            break;
    }
	
/*
default:
        alert("Este mes tiene 30 o más días");
    break;    
        case "Febrero":
            alert("Este mes no tiene más de 29 días");
        break;
*/
/* ASI TAMBIEN SE PUEDE HACER PARA QUE SEA DE MANERA MAS SIMPLE, NOTA QUE NO IMPORTA SI EL DEFAULT VA ARRIBA DE EL CASE "FEBRERO" 
O ABAJO DE ESE CASE "FEBRERO" */

}//FIN DE LA FUNCIÓN