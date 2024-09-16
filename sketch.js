document.getElementById('cancelar').addEventListener('click', function() {
    if (confirm('Certeza que quer cancelar?')) {
        // Adiciona a classe de tremor
        const container = document.querySelector('.container');
        container.classList.add('shake');

        // Remove a classe de tremor após a animação
        setTimeout(() => {
            container.classList.remove('shake');
        }, 500); // Duração da animação em milissegundos

        // Mostra a mensagem novamente
        setTimeout(() => {
            alert('Quem apertar cancelar é gay');
        }, 500); // Mostra a mensagem após a animação
    }
});
