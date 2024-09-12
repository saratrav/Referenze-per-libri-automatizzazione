// Imposta il percorso del file di testo di output
var outputFilePath = File.saveDialog("Seleziona il percorso per il file di testo");

// Verifica se l'utente ha selezionato un percorso valido
if (outputFilePath) {
    var outputFile = new File(outputFilePath);

    // Apri il file di testo per la scrittura
    outputFile.open("w");

    // Accedi al documento attivo
    var doc = app.activeDocument;

    // Crea una variabile per memorizzare gli autori
    var authors = [];

    // Funzione per controllare se un autore è già presente
    function isAuthorInList(author) {
        for (var i = 0; i < authors.length; i++) {
            if (authors[i] === author) {
                return true;
            }
        }
        return false;
    }

    // Itera attraverso tutte le pagine del documento
    for (var i = 0; i < doc.pages.length; i++) {
        var page = doc.pages[i];
        
        // Itera attraverso tutti gli oggetti nella pagina
        for (var j = 0; j < page.allGraphics.length; j++) {
            var graphic = page.allGraphics[j];
            
            // Controlla se il graphic è un'immagine e se ha un link
            if (graphic.itemLink) {
                var link = graphic.itemLink;

                // Prova a ottenere informazioni dal link
                var author = link.name; // Usa il nome del file come fallback

                // Se l'autore non è già nella lista, aggiungilo
                if (author && !isAuthorInList(author)) {
                    authors.push(author);
                }
            }
        }
    }

    // Scrivi gli autori nel file di testo
    for (var k = 0; k < authors.length; k++) {
        outputFile.writeln(authors[k]);
    }

    // Chiudi il file di testo
    outputFile.close();

    alert("L'elenco degli autori è stato salvato con successo!");
} else {
    alert("Operazione annullata.");
}
