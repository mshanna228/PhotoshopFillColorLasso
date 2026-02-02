try {
    if (app.documents.length > 0) {
        var doc = app.activeDocument;
        
        // Проверяем, есть ли выделение
        var hasSelection = false;
        try { if (doc.selection.bounds) hasSelection = true; } catch (e) {}

        if (hasSelection) {
            // Заливка на ТЕКУЩЕМ слое основным цветом
            doc.selection.fill(app.foregroundColor);
            
            // Снимаем выделение, чтобы можно было сразу рисовать дальше
            doc.selection.deselect();
        }
    }
} catch (err) {
    // Ошибки игнорируем, чтобы не прерывать процесс рисования
}

// try {
//     if (app.documents.length > 0) {
//         var doc = app.activeDocument;
        
//         var hasSelection = false;
//         try { if (doc.selection.bounds) hasSelection = true; } catch (e) {}

//         if (hasSelection) {
//             var newLayer = doc.artLayers.add();
//             newLayer.name = "Lasso Fill " + (doc.artLayers.length);
            
//             doc.selection.fill(app.foregroundColor);
            
//             doc.selection.deselect();
//         }
//     }
// } catch (err) {
// }

// Этот код заставляет лассо красить САМО сразу после выделения
