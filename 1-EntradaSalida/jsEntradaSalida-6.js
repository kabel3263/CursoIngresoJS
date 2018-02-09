/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

    //INGRESAR VARIABLES + INGRESAR DATOS + OPERAR + MOSTRAR RESULTADOS
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno=document.getElementById("numeroUno").value;
    numeroDos=document.getElementById("numeroDos").value;

    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    resultado=numeroUno+numeroDos;
    alert(resultado)
    

    //el alert puede ser tambien asi: alert(numeroUno+numeroDos) y quito el resultado de la variable y de la parte de abajo 
    /*var numeroUno;
    var numeroDos;
    

    numeroUno=document.getElementById("numeroUno").value;
    numeroDos=document.getElementById("numeroDos").value;

    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    alert(numeroUno+numeroDos);*/
}


