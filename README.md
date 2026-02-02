# PhotoshopFillColorLasso
Скрипт для более быстрого рисования в фотошопе. Сохраняю скорее для себя, потому что я знаю, что когда-нибудь у меня фотошом слетит.

Есть два варианта.

**Вариант 1**

Как это в итоге будет работать:
  1. Выделите область с помощью лоссо;
  2. Нажмите горячую клавишу (например, f10) и запустите скрипт;
  3. Вуаля: область заполняется выбранным цветом и выделения лоссо само убирается.

Инструкция для гениев:
  1. Вставьте папку PluginLasso (в ней файл LassoAutoFillAction.jsx) примерно по такому пути: C:\Program Files\Adobe\Adobe Photoshop 2025\Plug-ins\PluginLasso
     Если что, вот, что написано в файле LassoAutoFillAction.jsx:
```
     if (app.documents.length > 0) {
    var doc = app.activeDocument;
    try {
        doc.selection.bounds; 
        doc.selection.fill(app.foregroundColor);
        doc.selection.deselect();
    } catch (e) {
    }
}
```
  3. Возьмите обычное Лассо и нарисуйте любую область на холсте, чтобы пунктир «бегал».
  4. Зайти в панель "Операции" f9
  5. Нажмите «Создать новую операцию» (+), назовите её «Заливка» и выберите клавишу F10. Нажмите Записать.
  6. Ничего не нажимайте в панели операций! 3. Идите в верхнее меню: Файл > Сценарии > Обзор...
  7. Найдите и выберите файл LassoAutoFillAction.jsx.
  8. Ваше выделение на холсте закрасится.
  9. Сразу же вернитесь в панель операций и нажмите кнопку Стоп (квадратик). Теперь в списке под словом «Заливка» должна появиться строчка «Выполнить сценарий».
  10. Теперь всё готово.


**Вариант 2**

Использовать файл 2.
Этот способ — самый эффектный, потому что он превращает стандартное лассо в полноценный «рисующий» инструмент. Как только замыкаешь линию пером, область мгновенно заливается цветом.

Настройка в Диспетчере. Скрипт не знает, когда закончили рисовать, пока Photoshop не скажет ему: «Выделение создано».

    Файл > Сценарии > Диспетчер событий сценариев....

    там активна строка Set Selection: LassoAutoFillAction.jsx.

    Если строка удалена, добавить заново (ID события setd).


LassoAutoFillAction2.jsx

```
try {
    if (app.documents.length > 0) {
        var doc = app.activeDocument;
        
        var hasSelection = false;
        try { if (doc.selection.bounds) hasSelection = true; } catch (e) {}

        if (hasSelection) {
            var newLayer = doc.artLayers.add();
            newLayer.name = "Lasso Fill " + (doc.artLayers.length);
            doc.selection.fill(app.foregroundColor);
            doc.selection.deselect();
        }
    }
} catch (err) {
}
```

Для создания объектов на одном (используемом слое):
```
try {
    if (app.documents.length > 0) {
        var doc = app.activeDocument;
        
        var hasSelection = false;
        try { if (doc.selection.bounds) hasSelection = true; } catch (e) {}

        if (hasSelection) {
            doc.selection.fill(app.foregroundColor);
            
            doc.selection.deselect();
        }
    }
} catch (err) {
}
```
