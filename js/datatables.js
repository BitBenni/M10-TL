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
            updateDataTablesColors();
            
        });
    }
    function updateDataTablesColors() {
        const isDarkMode = document.body.classList.contains('dark-mode');

        // Ändere die Hintergrundfarbe der DataTables
        $('.dataTables_wrapper').css('background-color', isDarkMode ? '#121212' : '#f0f0f0');
        
        // Ändere die Textfarbe in der DataTable
        $('.dataTables_wrapper').css('color', isDarkMode ? '#ffffff' : '#333');

        // Ändere die Hintergrundfarbe der Tabellenzellen
        $('.dataTables_wrapper table.dataTable tbody tr').css('background-color', isDarkMode ? '#1a1a1a' : '#e0e0e0');

        // Ändere die Textfarbe in den Tabellenzellen
        $('.dataTables_wrapper table.dataTable tbody td').css('color', isDarkMode ? '#ffffff' : '#444');

        // Ändere die Farbe der Spalte "ID" (Schriftfarbe)
        $('.dataTables_wrapper table.dataTable tbody td:nth-child(1)').css('color', isDarkMode ? '#0a0a0a' : '#0a0a0a'); // child 1 weil die Erste Spalte ausgewählt wird

        // Ändere die Farbe der "Show Entries"
        $('.dataTables_length select').css('color', isDarkMode ? '#f7f2f2' : '#0a0a0a');

        // Ändere die Farbe der "Search"
        $('.dataTables_filter input').css('color', isDarkMode ? '#f7f2f2' : '#0a0a0a');
    }

    // Rufe die Funktion einmal beim Laden der Seite auf, um die Farben zu initialisieren
    updateDataTablesColors();
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
            updateDataTablesColors();
            
        },
        error: function(error) { // wenn JSON nicht vorhanden gebe Error in der Console aus
            console.error('JSON Datei existiert nicht:', error);
        }
    });
});
