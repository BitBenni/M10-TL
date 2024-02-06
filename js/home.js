

// Author: Benjamin Böhm und Giuseppe Teresi

// Funktion zum Schließen des Newsletter-Popups
function closePopup() {
    document.getElementById("newsletter-popup").style.display = "none";
}

// Funktion zum Anzeigen des Registrierungs-Popups
function showRegistrationPopup() {
    document.getElementById("registration-popup").style.display = "flex";
}

// Funktion zum Schließen des Registrierungs-Popups
function closeRegistrationPopup() {
    document.getElementById("registration-popup").style.display = "none";
}

// Funktion zum Anzeigen des Bestätigungs-Popups
function showConfirmationPopup() {
    document.getElementById("confirmation-popup").style.display = "flex";
}

// Funktion zum Schließen des Bestätigungs-Popups
function closeConfirmationPopup() {
    document.getElementById("confirmation-popup").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () { // Ereignislistener für das DOMContentLoaded-Ereignis

    document.getElementById("newsletter-popup").style.display = "flex"; // Beim Laden der Seite das Newsletter-Popup anzeigen

    document.getElementById("subscribe-btn").addEventListener('click', function () { // Ereignislistener für den Klick auf den "Abonnieren"-Button im Newsletter-Popup
        closePopup(); // Schließe das Newsletter-Popup
        showRegistrationPopup(); // Zeige das Registrierungs-Popup an
    });

    document.querySelector('.modal-overlay').addEventListener('click', function (event) { // Ereignislistener für Klicks auf das Modal-Overlay
        
        if (event.target === this) { // Schließe das Popup, wenn auf das Overlay geklickt wurde
            closePopup();
        }
    });

    document.getElementById("no-thanks-btn").addEventListener('click', function () {  // Ereignislistener für den Klick auf den "Nein danke"-Button im Newsletter-Popup
        closePopup(); // Schließe das Newsletter-Popup
    });

    document.getElementById('confirm-registration-btn').addEventListener('click', function () {  // Ereignislistener für den Klick auf den "Registrierung bestätigen"-Button im Registrierungs-Popup
        
        // Prüfung auf leere Felder
        var nameInput = document.getElementById('name');
        var vornameInput = document.getElementById('vorname');
        var emailInput = document.getElementById('email');
        var errorMessage = document.getElementById('error-message');

        // Wenn eines der Felder leer ist, zeige die Fehlermeldung an
        if (nameInput.value.trim() === '' || vornameInput.value.trim() === '' || emailInput.value.trim() === '') {
            // Zeige die Fehlermeldung an
            errorMessage.style.display = 'block';
            return;
        }

        // Verstecke die Fehlermeldung, wenn die Eingabe gültig ist
        errorMessage.style.display = 'none';

        closeRegistrationPopup(); // Schließe das Registrierungs-Popup
        showConfirmationPopup(); // Zeige das Bestätigungs-Popup an
    });

    document.getElementById("close-newsletter-btn").addEventListener('click', function () { // Ereignislistener für den Klick auf den "Schließen"-Button im Newsletter-Popup
        console.log("Close button clicked"); // Konsolenausgabe für Debugging-Zwecke
        closePopup(); // Schließe das Newsletter-Popup
    });

    // Ereignislistener für den Klick auf den "Schließen"-Button im Registrierungs-Popup
    document.getElementById('close-registration-btn').addEventListener('click', closeRegistrationPopup);

    // Ereignislistener für den Klick auf den "Abbrechen"-Button im Registrierungs-Popup
    document.getElementById('cancel-registration-btn').addEventListener('click', closeRegistrationPopup);

    // Ereignislistener für den Klick auf den "Schließen"-Button im Bestätigungs-Popup
    document.getElementById('close-confirmation-btn').addEventListener('click', closeConfirmationPopup);

    // Ereignislistener für den Klick auf den "OK"-Button im Bestätigungs-Popup
    document.getElementById('ok-confirmation-btn').addEventListener('click', closeConfirmationPopup);
});

document.addEventListener('DOMContentLoaded', function() {
    // Überprüfen, ob der Schalter für den Moduswechsel existiert
    var modeSwitch = document.getElementById('mode-switch');
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




