function main() {
    var doc = app.activeDocument;
    var message = "Metadati delle immagini:\n\n";

    var pageItems = doc.allGraphics;

    for (var i = 0; i < pageItems.length; i++) {
        var item = pageItems[i];
        var link = item.itemLink;

        if (link && link.linkXmp) {
            var xmp = link.linkXmp;
            var author = xmp.author || "Autore non disponibile";
            var page = item.parentPage || "Pagina non disponibile";

            message += "Nome Immagine: " + link.name + "\n";
            message += "Autore: " + author + "\n";
            message += "Numero Pagina: " + page.name + "\n\n";
        }
    }

    // Specifica il percorso e il nome del file
    var filePath = File.saveDialog("Salva il file di testo", "*.txt");
    
    if (filePath) {
        var file = new File(filePath);
        file.encoding = "UTF-8";
        file.open("w");
        file.write(message);
        file.close();
        alert("File salvato con successo in: " + filePath.fsName);
    } else {
        alert("Salvataggio annullato.");
    }
}

// Esegui la funzione principale
main();
