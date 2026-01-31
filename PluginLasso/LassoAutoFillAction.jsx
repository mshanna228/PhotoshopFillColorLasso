if (app.documents.length > 0) {
    var doc = app.activeDocument;
    try {
        // Проверяем, есть ли выделение
        doc.selection.bounds; 
        
        // 1. Закрашиваем основным цветом
        doc.selection.fill(app.foregroundColor);
        
        // 2. Снимаем выделение автоматически
        doc.selection.deselect();
    } catch (e) {
        // Если выделения нет, ничего не делаем
    }
}
// alert("Скрипт работает!");
// try {
//     if (app.documents.length > 0) {
//         var doc = app.activeDocument;
//         // Проверяем, есть ли выделение через дескрипторы (это надежнее в 2025 версии)
//         var ref = new ActionReference();
//         ref.putProperty(charIDToTypeID("Prpr"), charIDToTypeID("Selection"));
//         ref.putEnumerated(charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
//         var hasSelection = executeActionGet(ref).hasKey(charIDToTypeID("Selection"));

//         if (hasSelection) {
//             var SHIFT = ScriptUI.environment.keyboardState.shiftKey;
//             var CTRL = ScriptUI.environment.keyboardState.ctrlKey;

//             if (!(CTRL || SHIFT)) {
//                 doc.selection.fill(app.foregroundColor);
//                 doc.selection.deselect();
//             } else if (SHIFT) {
//                 // Удаление (Delete/Clear)
//                 var idDlt = charIDToTypeID("Dlt ");
//                 executeAction(idDlt, undefined, DialogModes.NO);
//                 doc.selection.deselect();
//             }
//         }
//     }
// } catch (e) {
//     // Беззвучная ошибка
// }