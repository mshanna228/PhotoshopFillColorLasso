var scriptsFolder = app.path + "/Presets/Scripts/PluginLasso/";
var eventFile = new File(scriptsFolder + "LassoAutoFillAction.jsx");

if (eventFile.exists) {
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

// это я не знаю зачем
