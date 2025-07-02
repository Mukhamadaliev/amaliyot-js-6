document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('.btn-1');
    let modal = document.querySelector('.modal');
    let clickCount = 0;

    button.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount % 2 === 1) {
            modal.style.display = 'flex';
            modal.style.flexDirection = 'column';
        } else {
            modal.style.display = 'none';
        }
    });
});

// Esc tugmasi bilan yopish imkoniyati
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});