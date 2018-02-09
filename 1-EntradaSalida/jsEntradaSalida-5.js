/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
    //aca defino las variables
    var nombre;
    var edad
    nombre=document.getElementById("elNombre").value;
    edad=document.getElementById("laEdad").value;
    //nombre pero para dejar espacio se debe colocar comillas con un espacio entre ellas asi como se muestra
    //alert(nombre+" "+edad);
    alert("Usted se llama "+nombre+" y tiene "+edad+" años");
    //esta segunda parte seria la correcta

}

