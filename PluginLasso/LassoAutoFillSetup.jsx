// Находим путь к папке скриптов Photoshop
var scriptsFolder = app.path + "/Presets/Scripts/PluginLasso/";
var eventFile = new File(scriptsFolder + "LassoAutoFillAction.jsx");

if (eventFile.exists) {
    // Удаляем старый нотификатор, если он был, чтобы не дублировать
    for (var i = 0; i < app.notifiers.length; i++) {
        if (app.notifiers[i].event == "setd") {
            // app.notifiers[i].remove(); // Опционально: очистка
        }
    }
    app.notifiersEnabled = true;
    app.notifiers.add("setd", eventFile);
    alert("Lasso AutoFill успешно установлен!");
} else {
    alert("Ошибка: Файл не найден по пути " + eventFile.fsName);
}