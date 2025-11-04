// script.js: O comportamento da sua empresa
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Página da Empresa Portátil carregada com sucesso!");

    // Exemplo de interatividade: Altera o texto ao clicar em um botão
    const button = document.getElementById('btn-contato');
    const statusDiv = document.getElementById('status-message');

    if (button) {
        button.addEventListener('click', () => {
            statusDiv.textContent = "Mensagem de contato enviada! Em breve entraremos em contato.";
            statusDiv.style.color = '#28a745';
        });
    }
});
