# IntelliJ Mouse Clicks

Middle-click a symbol in VS Code to go to its definition, the way IntelliJ does.

## How it works

Since version 1.105, VS Code has a built-in setting that makes middle-click behave like Ctrl+click (Cmd+click on macOS):

```json
"editor.mouseMiddleClickAction": "ctrlLeftClick"
```

This extension sets that as the default, so middle-click goes to definition as soon as it's installed. It follows your `editor.multiCursorModifier` setting, the same way Ctrl+click does.

You don't need the extension if you'd rather add that line to your `settings.json` yourself.

## Commands

Open the Command Palette and run:

- **IntelliJ Mouse Clicks: Enable Middle-Click Go to Definition**
- **IntelliJ Mouse Clicks: Disable Middle-Click Go to Definition**

Both write `editor.mouseMiddleClickAction` to your user settings. An explicit value in your settings always wins over the extension's default.

## Install from source

```sh
npx @vscode/vsce package
code --install-extension intellij-mouse-clicks-0.1.0.vsix
```

## Notes

- **Linux:** middle-click also pastes the primary selection. If that gets in the way, set `"editor.selectionClipboard": false`.
- **Cursor** doesn't support `editor.mouseMiddleClickAction` yet, so this extension has no effect there.
- **Other IntelliJ combos**, such as Ctrl+Alt+click for go to implementation, can't be done from an extension. VS Code keybindings don't accept mouse buttons, and the extension API has no editor mouse events. Those need an OS-level remap (AutoHotkey on Windows, Karabiner-Elements on macOS, xbindkeys on Linux) that turns the click into a keyboard shortcut.
