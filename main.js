
const vscode = require('vscode')

function activate(context) {
	
	let obsidianCommand = vscode.commands.registerCommand('mckinley-color-themes.activate-obsidian', async () => {
		await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Obsidian")
		await vscode.workspace.getConfiguration().update("workbench.iconTheme", "obsidian-icons")
		// vscode.window.showInformationMessage('Changed to Obsidian')
	})
	let watermelonCommand = vscode.commands.registerCommand('mckinley-color-themes.activate-watermelon', async () => {
		await vscode.workspace.getConfiguration().update("workbench.colorTheme", "Watermelon")
		await vscode.workspace.getConfiguration().update("workbench.iconTheme", "watermelon-icons")
		// vscode.window.showInformationMessage('Changed to Watermelon')
	})
	
	context.subscriptions.push(obsidianCommand)
	context.subscriptions.push(watermelonCommand)
}
function deactivate() {
	
}

module.exports = {
	activate,
	deactivate
}
