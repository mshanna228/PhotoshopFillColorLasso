Auto-Fill Lasso Scripts for Photoshop.

Devlog post on https://roguesleipnir.wordpress.com/2020/05/29/hacking-art-my-photoshop-lasso-auto-fill-script/
Ko-fi shop at https://ko-fi.com/s/0ad1accdd3

Installation
* Download ZIP link is at the top-right of this page. 
* Extract the contents into a new folder called **PluginLasso**.

* Move the new **PluginLasso** folder to the same folder as your Photoshop Executable (Photoshop.exe).
* This is to avoid path conflicts with the folders on different Photoshop versions.

* Run with File > Scripts > Browse… 
* Your Photoshop folder > **PluginLasso** > **LassoAutoFillSetup.jsx.**
* Activate/Deactivate event in File > Scripts > Script Event Manager... > Enable Events to Run Scripts/Actions > Done.

Usage
* Make sure the Tool is set to New Selection only, not other modes.
* Selection tools like Lasso, Marquee will auto-fill with the foreground color.
* Holding Shift while during a selection will cause auto-delete instead of auto-fill.
* Holding Ctrl while ending a selection will revert back to selection instead of fill/delete. 
* This also prevents the Ctrl+A shortcut from filling everything.
* Feather selection options still work, use it to make gradients and blurred shapes. 

Creating the Toggle Action
* In the Actions Panel (Window > Actions) (Alt + F9)
* Actions Panel > Click the **New Action** button
* Go to File > File > Scripts > Script Event Manager > Done
* Actions Panel > Click the **Stop Recording** button
* **Double Click** the newly created Action
* Rename it and Add a Function Key shortcut.
* This will open the Script Manager popup faster to enable/disable the lasso event.

https://ko-fi.com/sleipnir
https://www.instagram.com/roguesleipnir/

![Testing](https://roguesleipnir.files.wordpress.com/2020/05/lasso-fill.gif)