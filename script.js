document.addEventListener('DOMContentLoaded', () => {
    // Pobieramy elementy
    const btn = document.querySelector('button');
    const infoPara = document.querySelector('p');

    // Sprawdzamy, czy przycisk istnieje (dobry nawyk!)
    if (btn) {
        btn.addEventListener('click', () => {
            // Zmieniamy treść na spokojniejszą i konkretną
            infoPara.textContent = "Status: Building a new community platform. Stay tuned.";
            
            // Opcjonalnie: wyłączamy przycisk po kliknięciu
            btn.disabled = true;
            btn.style.cursor = "default";
            btn.style.opacity = "0.82";
            alert("Development is 0.1% complete!")
        });
    }
});
