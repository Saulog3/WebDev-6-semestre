var pessoas = []; // Array para armazenar objetos com nome e IMC

function calcularIMC() {
    var nome = document.getElementById('nome').value; // Coleta o nome
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    if (!nome || !altura || !peso) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var imc = peso / (altura * altura);
    var categoria;

    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    // Adiciona um objeto com nome, IMC e categoria ao array
    pessoas.push({ nome: nome, imc: imc.toFixed(2), categoria: categoria });

    // Imprime todos os nomes, IMCs e categorias
    var resultado = pessoas.map(function(p) {
        return p.nome + ': IMC = ' + p.imc + ' (' + p.categoria + ')';
    }).join('\n');

    alert('Seu IMC é: ' + imc.toFixed(2) + '\nCategoria: ' + categoria + '\n\nTodos os IMCs:\n' + resultado);
}

function resetarCampos() {
    document.getElementById('nome').value = ''; // Limpa o campo de nome
    document.getElementById('altura').value = ''; // Limpa o campo de altura
    document.getElementById('peso').value = ''; // Limpa o campo de peso
}