// Função chamada ao clicar no botão 
function saudacao() {
    alert("olá, bem-vindo à aula!");
}
// Atribui a função ao botão ao carregar a página 
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("botaoSaudacao").addEventListener("click", saudacao);
}); 