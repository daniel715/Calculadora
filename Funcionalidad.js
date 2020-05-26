window.onload = function() {
    document.getElementById('boton').onclick = function () {
        alert('VAMOS!! TU PUEDES HACERLOOO');
    }
}

var resultado = document.getElementById('resultado')

var uno = document.getElementById('uno').onclick = function () 
{
     resultado.innerHTML+= '1';
}

var dos = document.getElementById('dos').onclick = function () 
{
     resultado.innerHTML+='2';
}

var tres = document.getElementById('tres').onclick = function () 
{
     resultado.innerHTML+='3';
}

var cuatro = document.getElementById('cuatro').onclick = function () 
{
     resultado.innerHTML+='4';
}

var cinco = document.getElementById('cinco').onclick = function () 
{
     resultado.innerHTML+='5';
}

var seis = document.getElementById('seis').onclick = function () 
{
     resultado.innerHTML+='6';
}

var siete = document.getElementById('siete').onclick = function () 
{
     resultado.innerHTML+='7';
}

var ocho = document.getElementById('ocho').onclick = function () 
{
      resultado.innerHTML+='8';
}

var nueve = document.getElementById('nueve').onclick = function () 
{
     resultado.innerHTML+='9';
}

var suma = document.getElementById('adicion').onclick = function () 
{
    var cadena = resultado.innerHTML;
    var longitud = cadena.length;
    var char = cadena.charAt(longitud-1);

    if(char!='+')
    {
        resultado.innerHTML+='+';
    }
}

var resta = document.getElementById('resta').onclick = function () 
{
    var cadena = resultado.innerHTML;
    var longitud = cadena.length;
    var char = cadena.charAt(longitud-1);

    if(char!='-')
    {
        resultado.innerHTML+='-';
    }
}

var multiplicacion = document.getElementById('multiplicacion').onclick = function () 
{
    var cadena = resultado.innerHTML;
    var longitud = cadena.length;
    var char = cadena.charAt(longitud-1);

    if(char!='*')
    {
        resultado.innerHTML+='*';
    }
}

var division = document.getElementById('division').onclick = function () 
{
    var cadena = resultado.innerHTML;
    var longitud = cadena.length;
    var char = cadena.charAt(longitud-1);

    if(char!='/')
    {
        resultado.innerHTML+='/';
    }
}

var ocho = document.getElementById('ocho').onclick = function () 
{
      resultado.innerHTML+='8';
}

var nueve = document.getElementById('nueve').onclick = function () 
{
     resultado.innerHTML+='9';
}

var cero = document.getElementById('cero').onclick = function () 
{
     resultado.innerHTML+='0';
}

var clear = document.getElementById('clear').onclick = function () 
{
      resultado.innerHTML="";
}

var igual = document.getElementById('igual').onclick = function () 
{
     
}

function esOperador(caracter)
{
    if(caracter === '+' || caracter === '-' || caracter === '*' || caracter === '/')
    return true;
}


function obtenerExpresion(cadena)
{
    var indice = 0;
    var numero = "";
    var arreglo = [];
    console.log("El tamaño de la cadena es: " + cadena.length)

    while(indice < cadena.length )
    {
        var caracter = cadena.charAt(indice);
        if(!esOperador(caracter))
        numero = numero + caracter;
        else
        {
            arreglo.push(numero);
            arreglo.push(caracter);
            numero="";
        }
        indice=indice+1;
    }
    arreglo.push(numero);
    mostrarArreglo(arreglo);
}

function mostrarArreglo(arreglo)
{
    for(i=0;i<arreglo.length;i++)
    {
    console.log(arreglo[i]);
    }
    console.log("El tamaño del array es: " + i);
}
 
const a = new LinkedList();

function probarpila()
{   
    console.log(a.isEmpty());
}

function meterdatos(valor)
{
    a.add(valor);
}