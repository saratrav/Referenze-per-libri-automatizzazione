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

    alert(message || "Nessuna immagine con metadati trovata.");
}

// Esegui la funzione principale
main();
