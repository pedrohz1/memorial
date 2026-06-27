const pages = document.querySelectorAll('.page');

pages.forEach((page, index) => {
    page.addEventListener('click', () => {
        if (!page.classList.contains('flipped')) {
            // Virar a página para a esquerda
            page.classList.add('flipped');
            
            // Ajusta o z-index após a animação para não sobrepor as páginas da esquerda
            setTimeout(() => {
                page.style.zIndex = index + 1;
            }, 300);
        } else {
            // Desvirar a página (voltar para a direita)
            page.classList.remove('flipped');
            
            // Restaura o z-index original decrescente
            setTimeout(() => {
                page.style.zIndex = pages.length - index;
            }, 300);
        }
    });
});
