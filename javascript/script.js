
document.addEventListener('DOMContentLoaded', () => {
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adiciona um offset para considerar a altura do navbar fixo
                const offset = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Fecha o menu mobile do Bootstrap após o clique
                const navbarCollapse = document.getElementById('navbarNav');
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse && navbarCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            }
        });
    });
});

/**
       * Função chamada ao clicar em qualquer imagem da galeria.
       * Ela pega o atributo 'src' da imagem clicada e define como 'src'
       * da imagem dentro do modal.
       * @param {HTMLImageElement} element - O elemento de imagem (<img>) que foi clicado.
       */
function showImage(element) {
    // Pega o elemento <img> dentro do modal
    const modalImage = document.getElementById('modalImage');

    // Define o 'src' do modal com o 'src' da imagem clicada
    modalImage.src = element.src;

    // O Bootstrap se encarrega de exibir o modal usando os atributos data-bs-* no HTML.
}
