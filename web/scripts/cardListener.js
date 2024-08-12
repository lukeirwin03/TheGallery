document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.toggle('hovered');
            console.log('hovered');
            card.addEventListener('clicked', () => {
                if (card.classList.contains('hovered')) {
                    card.classList.add('clicked');
                }
            });
        });

        card.addEventListener('clicked', () => {
            if (card.classList.contains('hovered')) {
                card.classList.add('clicked');
            }
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
            card.classList.remove('clicked');
        });
    });
});
