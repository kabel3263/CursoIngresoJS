function Mostrar()
{
//tomo la edad  

/* var edad
edad= document.getElementById("edad").value;

if(edad>17){
    alert("Eres mayor de edad")
} 

if(edad<13){
    alert("Eres menor de edad")
} 

if(edad>=13&&edad<=17){
    alert("Eres adolescente")
}
*/

var edad;
edad=document.getElementById("edad").value;

if (edad>17){

    alert("Adulto");
} else {

    if(edad>=13&&edad<=17){


        alert("Adolescente");
    } else{

        alert("Niño");
    }
}


}//FIN DE LA FUNCIÓN