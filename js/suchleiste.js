document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('nav button');
    const menu = document.querySelector('nav div');

    // Überprüfe, ob der Button und das Menü vorhanden sind
    if (button && menu) {
        // Füge einen Event Listener hinzu, um das Menü beim Klicken auf den Button zu öffnen/schließen
        button.addEventListener('click', function () {
            menu.classList.toggle('show');
        });

        // Schließe das Menü, wenn ein Link im Menü geklickt wird
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.remove('show');
            });
        });
    }
});
