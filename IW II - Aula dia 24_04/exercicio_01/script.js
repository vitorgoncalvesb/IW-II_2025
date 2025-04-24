
function mostrarMensagem() {
    alert("JavaScript é divertido!");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("botaoFrase").addEventListener("click", saudacao);
}); 