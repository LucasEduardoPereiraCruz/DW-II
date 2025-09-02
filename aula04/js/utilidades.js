
/*
Função para juntar nome e sobrenome
*/

function juntarNome(){
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    //1. Concatenação de strings normal
    let nomecompleto = nome + ' ' + sobrenome;

    //2. Uso da interpolação strings (template strings)
    let nomecompleto1 = `<i>${nome} <br>${sobrenome}</i>`;

    //3. Injetar o texto da variável nomecompleto na tag <p> no id "nomecompleto"
    document.getElementById("nomecompleto").innerText = nomecompleto;

    //4. Executar a injeção de tags (elementos HTML) + textos
    document.getElementById("nomecompleto1").innerHTML = nomecompleto1;

    
}

