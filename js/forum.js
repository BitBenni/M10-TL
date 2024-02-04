

// Author: Benjamin Böhm und Giuseppe Teresi


document.getElementById('addPostBtn').addEventListener('click', function() { // Ereignislistener für den Klick auf den "Beitrag hinzufügen"-Button hinzufügen

    // Elemente aus dem DOM abrufen
    let nameInput = document.getElementById('nameInput');
    let postInput = document.getElementById('postInput');
    let forumPosts = document.getElementById('forumPosts');

    if (nameInput.value.trim() !== '' && postInput.value.trim() !== '') { // Überprüfen, ob sowohl der Name als auch der Beitrag Eingaben enthalten
        let postDiv = document.createElement('div'); // Neues Div-Element für den Beitrag erstellen 
        postDiv.className = 'post'; // Klasse zuweisen
        
        let postInfoDiv = document.createElement('div');  // Neues Div-Element für die Informationen des Beitrags erstellen 
        postInfoDiv.className = 'post-info'; // Klasse zuweisen

        let nameHeader = document.createElement('h3'); // Neues h3-Element für den Namen erstellen 
        nameHeader.textContent = nameInput.value; // Textinhalt setzen

        postInfoDiv.appendChild(nameHeader); // Das h3-Element dem Div für die Beitragsinformationen hinzufügen
        
        let postContentDiv = document.createElement('div'); // Neues Div-Element für den Inhalt des Beitrags erstellen
        postContentDiv.className = 'post-content'; // Klasse zuweisen

        let postContent = document.createElement('p');  // Neues p-Element für den Beitragstext erstellen und Textinhalt setzen
        postContent.textContent = postInput.value;  // Textinhalt setzen

        postContentDiv.appendChild(postContent);  // Das p-Element dem Div für den Beitragsinhalt hinzufügen

        // Die beiden erstellten Div-Elemente dem Haupt-Div für den Beitrag hinzufügen
        postDiv.appendChild(postInfoDiv);
        postDiv.appendChild(postContentDiv);

        forumPosts.appendChild(postDiv); // Das Haupt-Div für den Beitrag dem Bereich für Forum-Beiträge hinzufügen

        // Die Eingabefelder leeren, nachdem der Beitrag hinzugefügt wurde ---
        nameInput.value = '';
        postInput.value = '';
    }
});
