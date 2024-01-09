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

// DOMContentLoaded-Event-Listener
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

    document.getElementById('registration-form').addEventListener('input', function () {
        var isValid = this.checkValidity();
        document.getElementById('confirm-registration-btn').disabled = !isValid;
    });

    document.getElementById('registration-form').addEventListener('submit', function (event) {
        console.log("Form submit event captured");
        event.preventDefault();
        showConfirmationPopup();
    });    
    
    document.getElementById('close-registration-btn').addEventListener('click', closeRegistrationPopup);
    document.getElementById('cancel-registration-btn').addEventListener('click', closeRegistrationPopup);

    document.getElementById('close-confirmation-btn').addEventListener('click', closeConfirmationPopup);
    document.getElementById('ok-confirmation-btn').addEventListener('click', closeConfirmationPopup);
});
