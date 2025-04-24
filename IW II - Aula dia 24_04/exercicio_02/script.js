function mudarTexto() {
    document.getElementById("texto").textContent = "Texto atualizado com JavaScript!";
  }
  
  document.getElementById("meuBotao2").addEventListener("click", mudarTexto);