document.addEventListener('DOMContentLoaded', () => {
    // Pobieramy elementy
    const btn = document.querySelector('button');

    // Sprawdzamy, czy przycisk istnieje (dobry nawyk!)
    if (btn) {
        btn.addEventListener('click', () => {
            btn.style.cursor = "default";
            btn.style.opacity = "0.82";
            alert("Development is 0.1% complete!")
        });
    }
});
