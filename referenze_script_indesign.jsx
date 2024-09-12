function main() {
    var doc = app.activeDocument;
    var message = "Metadati delle immagini:\n\n";
    
    // Array per memorizzare i metadati
    var metadataArray = [];

    var pageItems = doc.allGraphics;

    for (var i = 0; i < pageItems.length; i++) {
        var item = pageItems[i];
        var link = item.itemLink;

        if (link && link.linkXmp) {
            var xmp = link.linkXmp;
            var author = xmp.author || "Autore non disponibile";
            var page = item.parentPage;
            var pageNumber = page ? page.name : "Pagina non disponibile";

            // Aggiungi un oggetto al array con i metadati
            metadataArray.push({
                name: link.name,
                author: author,
                pageNumber: pageNumber
            });
        }
    }

    // Ordina l'array per numero di pagina
    metadataArray.sort(function(a, b) {
        var pageA = parseInt(a.pageNumber, 10);
        var pageB = parseInt(b.pageNumber, 10);
        return pageA - pageB;
    });

    // Costruisci il messaggio ordinato
    for (var i = 0; i < metadataArray.length; i++) {
        var metadata = metadataArray[i];
        message += "Nome Immagine: " + metadata.name + "\n";
        message += "Autore: " + metadata.author + "\n";
        message += "Numero Pagina: " + metadata.pageNumber + "\n\n";
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
