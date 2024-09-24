
function CalcularBTUs() {

    const area = parseFloat(document.getElementById('area').value);
    const pessoas = parseInt(document.getElementById('pessoas').value);

    if (!area || !pessoas) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const btu = (area * 600) + (pessoas * 600);
    window.alert(`A potência necessária é de ${btu} BTUs.`);

}

function resetarCampos() {
    document.getElementById('area').value = ''; // Limpa o campo de nome
    document.getElementById('pessoas').value = ''; // Limpa o campo de altura
}
