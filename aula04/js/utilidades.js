
/*
Função para juntar nome e sobrenome
*/

function juntarNome(){
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    //1. Concatenação de strings normal
    let nomecompleto = nome + ' ' + sobrenome;

    //2. Injetar o texto da variável nomecompleto na tag <p> no id "nomecompleto"
    document.getElementById("nomecompleto").innerText = nomecompleto;
}