// Funktionen im globalen Kontext definieren
function closePopup() {
    document.getElementById("newsletter-popup").style.display = "none";
}

function showRegistrationPopup() {
    document.getElementById("registration-popup").style.display = "flex";
}

function closeRegistrationPopup() {
    document.getElementById("registration-popup").style.display = "none";
}

function showConfirmationPopup() {
    document.getElementById("confirmation-popup").style.display = "flex";
}

function closeConfirmationPopup() {
    document.getElementById("confirmation-popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("newsletter-popup").style.display = "flex";

    document.getElementById("subscribe-btn").addEventListener('click', function () {
        closePopup();
        showRegistrationPopup();
    });

    document.querySelector('.modal-overlay').addEventListener('click', function (event) {
        if (event.target === this) {
            closePopup();
        }
    });

    document.getElementById("no-thanks-btn").addEventListener('click', function () {
        closePopup();
    });

    document.getElementById('confirm-registration-btn').addEventListener('click', function () {
        // Prüfung auf leere Felder
        var nameInput = document.getElementById('name');
        var vornameInput = document.getElementById('vorname');
        var emailInput = document.getElementById('email');
        var errorMessage = document.getElementById('error-message');

        if (nameInput.value.trim() === '' || vornameInput.value.trim() === '' || emailInput.value.trim() === '') {
            // Zeige die Fehlermeldung an
            errorMessage.style.display = 'block';
            return;
        }

        // Verstecke die Fehlermeldung, wenn die Eingabe gültig ist
        errorMessage.style.display = 'none';

        closeRegistrationPopup();
        showConfirmationPopup();
    });

    document.getElementById("close-newsletter-btn").addEventListener('click', function () {
        console.log("Close button clicked");
        closePopup();
    });

    document.getElementById('close-registration-btn').addEventListener('click', closeRegistrationPopup);
    document.getElementById('cancel-registration-btn').addEventListener('click', closeRegistrationPopup);

    document.getElementById('close-confirmation-btn').addEventListener('click', closeConfirmationPopup);
    document.getElementById('ok-confirmation-btn').addEventListener('click', closeConfirmationPopup);
});



