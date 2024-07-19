window.onbeforeunload = function() {
    localStorage.setItem('scrollPosition', window.scrollY);
};

// Função para restaurar a posição de rolagem
window.onload = function() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
};