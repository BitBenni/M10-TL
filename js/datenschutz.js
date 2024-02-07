document.addEventListener('DOMContentLoaded', function() {
    // Überprüfen, ob der Schalter für den Moduswechsel existiert
    let modeSwitch = document.getElementById('mode-switch');
    if (modeSwitch) {
        modeSwitch.addEventListener('click', function() {
            // Umkehrung des aktuellen Modus
            document.body.classList.toggle('dark-mode');
            // Aktualisieren des Textes und Stils des Schalters
            if (document.body.classList.contains('dark-mode')) {
                modeSwitch.textContent = 'Hell';
            } else {
                modeSwitch.textContent = 'Dunkel';
            }
        });
    }
});