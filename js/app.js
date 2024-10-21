// Filtrado de platos por categoría
function filterPlates(category) {
    const plates = document.querySelectorAll('.plate');
    
    plates.forEach(plate => {
        if (category === 'all') {
            plate.style.display = 'block';
        } else {
            if (plate.getAttribute('data-category') === category) {
                plate.style.display = 'block';
            } else {
                plate.style.display = 'none';
            }
        }
    });
}
