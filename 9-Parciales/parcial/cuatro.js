function Mostrar()
{
var num1;
var num2;
var multiplicacion;
var resta;
var suma;

num1= prompt("ingrese num1"+" ");
num2= prompt("ingrese num2"+" ");

num1= parseInt (num1);
num2= parseInt (num2);

if(num1===num2){

    multiplicacion= num1*num2;
    document.write("La multiplicacion es:"+" "+multiplicacion);
} else {

    if (num1>num2){
        resta= num1-num2;
        document.write("La resta es:"+" "+resta);
    } else {

        suma=num1+num2;
        document.write("la suma es="+" "+suma);
        
    }

}


}
/* if (num1===num2){
    resultado=num1*num2;
} else if(num1>num2){
    res=num1-num2;
} else {
    res=num1+num2;
}
