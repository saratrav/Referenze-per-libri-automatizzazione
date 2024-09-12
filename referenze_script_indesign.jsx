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
            var credit = xmp.getProperty(XMPConst.NS_PHOTOSHOP, "Credit") || "Crediti non disponibili";

            message += "Nome Immagine: " + item.name + "\n";
            message += "Autore: " + author + "\n";
            message += "Crediti: " + credit + "\n\n";
        }
    }

    alert(message || "Nessuna immagine con metadati trovata.");
}

// Esegui la funzione principale
main();
