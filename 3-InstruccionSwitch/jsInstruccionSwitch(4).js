function Mostrar()
{
//tomo la edad  
var mesDelAño 
mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño){

        default:
            alert("Tiene 31 dias");
        break;
        case "Febrero":
            alert("Tiene 28 o 29 dias");
        break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Tiene 30 dias");
        break;
    }

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN