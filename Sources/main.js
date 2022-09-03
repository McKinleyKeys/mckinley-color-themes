
const vscode = require('vscode')

function activateObsidian() {
	const configuration = vscode.workspace.getConfiguration()
	const target = vscode.ConfigurationTarget.Global
	configuration.update('workbench.colorTheme', 'Obsidian', target)
	configuration.update('workbench.iconTheme', 'obsidian-icons', target)
	// vscode.window.showInformationMessage('Changed to Obsidian')
}
function activateWatermelon() {
	const configuration = vscode.workspace.getConfiguration()
	const target = vscode.ConfigurationTarget.Global
	configuration.update('workbench.colorTheme', 'Watermelon', target)
	configuration.update('workbench.iconTheme', 'watermelon-icons', target)
	// vscode.window.showInformationMessage('Changed to Watermelon')
}
function activateLime() {
	const configuration = vscode.workspace.getConfiguration()
	const target = vscode.ConfigurationTarget.Global
	configuration.update('workbench.colorTheme', 'Lime', target)
	configuration.update('workbench.iconTheme', 'watermelon-icons', target)
	// vscode.window.showInformationMessage('Changed to Lime')
}


function activate(context) {
	context.subscriptions.push(
		vscode.commands.registerCommand('mckinley-color-themes.activate-obsidian', activateObsidian),
		vscode.commands.registerCommand('mckinley-color-themes.activate-watermelon', activateWatermelon),
		vscode.commands.registerCommand('mckinley-color-themes.activate-lime', activateLime),
	)
}
function deactivate() {}

module.exports = {
	activate,
	deactivate,
}
