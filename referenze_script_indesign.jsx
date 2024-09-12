// Crea un file di testo e scrive i titoli delle immagini in Adobe InDesign

// Definisce il percorso del file di testo da creare
var filePath = File.saveDialog("Salva il file di testo con i titoli delle immagini", "*.txt");

// Verifica se è stato selezionato un percorso di salvataggio
if (filePath) {
    var file = new File(filePath);
    file.open("w"); // Apre il file per scrittura

    // Ottiene il documento attivo
    var doc = app.activeDocument;

    // Cicla attraverso tutti gli oggetti di tipo 'Graphic'
    for (var i = 0; i < doc.allGraphics.length; i++) {
        var graphic = doc.allGraphics[i];

        // Verifica se l'oggetto grafico ha un titolo
        if (graphic.itemLink && graphic.itemLink.name) {
            var title = graphic.itemLink.name; // Ottiene il titolo del file immagine

            // Scrive il titolo nel file di testo
            file.writeln(title);
        }
    }

    file.close(); // Chiude il file di testo
    alert("Titoli delle immagini salvati con successo in " + filePath);
} else {
    alert("Operazione annullata.");
}
