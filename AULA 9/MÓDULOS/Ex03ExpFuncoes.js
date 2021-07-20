// Criar funções de cálculo e exportar
//dentro do módulo
//exExpFuncoes.js

let somar = function somar (num1, num2){
    return num1 + num2
}
  
let subtrair = function subtrair (num1, num2){
    return num1 - num2 
}
    
module.export={somar, subtrair};