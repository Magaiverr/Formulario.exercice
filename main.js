function validarFormulario() {
    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);
    if (campoB > campoA) {
    alert("Formulário válido!");
    } else {
    alert("Formulário inválido! O número B deve ser maior que o número A.");
    }
    return false;
}