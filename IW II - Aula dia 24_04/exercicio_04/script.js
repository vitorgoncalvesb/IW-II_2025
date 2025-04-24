function exibirNome() {
    const nomeDigitado = document.getElementById("campoNome").value;
    alert("Nome digitado: " + nomeDigitado);
  }
  
  document.getElementById("meuBotao4").addEventListener("click", exibirNome);
  