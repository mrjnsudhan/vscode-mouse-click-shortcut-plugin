const vscode = require('vscode');

const SETTING = 'mouseMiddleClickAction';
const GO_TO_DEFINITION = 'ctrlLeftClick';

function setMiddleClickAction(value) {
  // `undefined` removes the user setting, so the extension's default applies again.
  return vscode.workspace
    .getConfiguration('editor')
    .update(SETTING, value, vscode.ConfigurationTarget.Global);
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('intellijMouseClicks.enableMiddleClick', async () => {
      await setMiddleClickAction(GO_TO_DEFINITION);
      vscode.window.showInformationMessage('Middle-click now goes to definition.');
    }),
    vscode.commands.registerCommand('intellijMouseClicks.disableMiddleClick', async () => {
      await setMiddleClickAction('default');
      vscode.window.showInformationMessage('Middle-click is back to the VS Code default.');
    })
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
