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

            // Aggiungi un oggetto all'array con i metadati
            metadataArray.push({
                author: author,
                name: link.name,
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

    // Funzione per capitalizzare la prima lettera
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    // Costruisci il messaggio ordinato
    for (var i = 0; i < metadataArray.length; i++) {
        var metadata = metadataArray[i];
        // Estrai la parte del nome dell'immagine fino al primo "_"
        var nameParts = metadata.name.split("_");
        var shortName = nameParts[0] || "Nome non disponibile";
        shortName = capitalizeFirstLetter(shortName);
        
        // Costruisci la riga nel formato desiderato
        message += metadata.author + "/" + shortName + ": " + metadata.pageNumber + ";\n";
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
