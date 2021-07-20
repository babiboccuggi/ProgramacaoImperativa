// Aula 4 - 08/06
//Ex02Calculadora

let somar = function(n1,n2) {
    return n1+n2;
}
let subtrair = function(n1,n2) {
    return n1-n2;
}
let multiplicar = function (n1,n2) {
    return n1*n2;
}
let dividir = function (n1,n2) {
    return n1/n2;
}
console.log(somar(10,10));
console.log(subtrair(10,10));
console.log(multiplicar(10,10));
console.log(dividir(10,0));
// olhar pra variavel n2 e verificar se n2 == 0
if(n2==0) {
    //executar se for true
    return "Impossível fazer a divisão por 0";
} else {
    return n1/n2;
    }
}   
console.log(dividir(10,0));