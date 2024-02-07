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

$(document).ready(function() {
    // Hier wird die JSON-Datei geladen

    $.ajax({ // AJAX steht für "Asynchronous JavaScript and XML" und ist eine Technik, die es ermöglicht, 
            // Daten zwischen einem Webbrowser und einem Webserver im Hintergrund auszutauschen, ohne die gesamte Seite neu zu laden

        url: './json/data.json', // URL der JSON-Datei
        dataType: 'json', // Datentyp der Datei (hier JSON)
        success: function(jsonData) {
            // Erstelle DataTable
            $('#example').DataTable({ // Darstellung der Tabelle mit CSS: Example 
                data: jsonData,
                columns: [
                    { data: 'id' }, // Attribute JSON
                    { data: 'name' },
                    { data: 'email' }
                ]
            });
        },
        error: function(error) { // wenn JSON nicht vorhanden gebe Error in der Console aus
            console.error('JSON Datei existiert nicht:', error);
        }
    });
});
