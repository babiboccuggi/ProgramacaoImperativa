// PARTE 1

/* Crie um objeto aluno que tenha como atributos:Nome(string),
quantidade de faltas (number) e notas (array de números).
Crie um construtor para ele e importe-o como o módulo aluno.*/

function Aluno(nome, faltas, nota){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.CalcularMedia = () => ((this.notas.reduce(total,Elemento))/this.not.length).tofixed(1);
}    /*this.calcmedia = function () {
    let soma = 0;
    for (i=0; i<=this.nota.length; i++){
        soma +- this.nota[i]
    }
    return soma/this.nota.length 
}
};

let aluno1 = new aluno('victor', 3, [4,7,8])

console.log(aluno1);

/*Nosso objeto aluno terá o método calcularMedia que 
retorna a média de suas notas. Também terá um método 
chamado faltas, que simplesmente aumenta o número de
 faltas em 1.*/