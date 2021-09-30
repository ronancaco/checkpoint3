function Alunos (nome, faltas, notas) {

this.nome = nome
this.faltas = faltas
this.notas = notas    
this.calcularMedia = () =>
this.notas.reduce((acumulador, elemento) => acumulador + elemento) /
this.notas.length;
this.adicionaFaltas = () => this.faltas++;
}
module.exports = Alunos

    /*Crie um objeto aluno que tenha como atributos: nome (string), 
    quantidade de faltas (number) e notas (array de números). 
    Crie um construtor para ele e importe-o como o módulo aluno.

    /*Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. 
    Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

