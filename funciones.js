
// funcion calculadora basica
//declaracion de variables
let operandoA;
let operandoB;
let operacion;

function init(){
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var multiplicar = document.getElementById('multiplacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno')
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');


// eventos onclick

uno.onclick = function(e) {
    resultado.textContent = resultado.textContent + "1";
}

dos.onclick = function(e) {
    resultado.textContent = resultado.textContent + "2";
}

tres.onclick = function(e) {
    resultado.textContent = resultado.textContent + "3";
}

cuatro.onclick = function(e) {
    resultado.textContent = resultado.textContent + "4";
}

cinco.onclick = function(e) {
    resultado.textContent = resultado.textContent + "5";
}

seis.onclick = function(e) {
    resultado.textContent = resultado.textContent + "6";
}

siete.onclick = function(e) {
    resultado.textContent = resultado.textContent + "7";
}

ocho.onclick = function(e) {
    resultado.textContent = resultado.textContent + "8";
}

nueve.onclick = function(e) {
    resultado.textContent = resultado.textContent + "9";
}

cero.onclick = function(e) {
    resultado.textContent = resultado.textContent + "0";
}

suma.onclick = function(e) {
    operandoA = resultado.textContent;
    operacion = "+";
    limpiar();
}

reset.onclick = function(e) {
    operacionA = resultado.textContent;
    operacion = "-";
    limpiar();
}

division.onclick = function(e) {
    operandoA = resultado.textContent;
    operacion = "/";
    limpiar();
}

multiplacion.onclick = function(e) {
    operandoA = resultado.textContent;
    operacion = "X"
    limpiar();
}

reset.onclick = function(e) {
    resetear();
}

igual.onclick = function(e) {
    operandoB = resultado.textContent;
    resolver();
}


}


function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case '+':
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;

        case '-':
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
            
        case '/':
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
            
        case 'X':
            res = parseFloat(operandoA) * parseFloat(operandoB);    
            break;    
    }
    resetear();
    resultado.textContent = res;
}