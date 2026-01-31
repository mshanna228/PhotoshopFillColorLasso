try {
    if (app.documents.length > 0) {
        var doc = app.activeDocument;
        
        // Проверяем, есть ли выделение
        var hasSelection = false;
        try { if (doc.selection.bounds) hasSelection = true; } catch (e) {}

        if (hasSelection) {
            // Создаем новый слой над текущим
            var newLayer = doc.artLayers.add();
            newLayer.name = "Lasso Fill " + (doc.artLayers.length);
            
            // Заливка цветом, который выбран основным на панели
            doc.selection.fill(app.foregroundColor);
            
            // Снимаем выделение, чтобы сразу рисовать дальше
            doc.selection.deselect();
        }
    }
} catch (err) {
    // Ошибки не мешают рисованию
}

// // Этот код заставляет лассо красить САМО сразу после выделения
// try {
//     if (app.documents.length > 0) {
//         var doc = app.activeDocument;
//         var hasSelection = false;
//         try { if (doc.selection.bounds) hasSelection = true; } catch (e) {}

//         if (hasSelection) {
//             // Создаем новый слой, чтобы мазки были отдельными
//             var newLayer = doc.artLayers.add();
//             newLayer.name = "Мазок " + (doc.artLayers.length);
            
//             doc.selection.fill(app.foregroundColor);
//             doc.selection.deselect();
//         }
//     }
// } catch (err) {}