import * as vscode from 'vscode';
import { ToggleEditorPinAction } from './toggleEditorPin';
import { CloseEditorsArgs } from './closeEditorsArgs';
import { CloseAllEditors } from './closeAllEditors';
import { CloseEditorsToTheLeft } from './closeEditorsToTheLeft';
import { CloseEditorsToTheRight } from './closeEditorsToTheRight';
import { CloseOtherEditors } from './closeOtherEditors';

export function activate(context: vscode.ExtensionContext) {
	const toggleEditorPin = vscode.commands.registerCommand('moreActions.workbench.action.toggleEditorPin', async () => {
		const action = new ToggleEditorPinAction();
		await action.run();
	});

	const closeAllEditors = vscode.commands.registerCommand('moreActions.workbench.action.closeAllEditors', async (args?: CloseEditorsArgs) => {
		const action = new CloseAllEditors(args);
		await action.run();
	});

	const closeOtherEditors = vscode.commands.registerCommand('moreActions.workbench.action.closeOtherEditors', async (args?: CloseEditorsArgs) => {
		const action = new CloseOtherEditors(args);
		await action.run();
	});

	const closeEditorsToTheLeft = vscode.commands.registerCommand('moreActions.workbench.action.closeEditorsToTheLeft', async (args?: CloseEditorsArgs) => {
		const action = new CloseEditorsToTheLeft(args);
		await action.run();
	});

	const closeEditorsToTheRight = vscode.commands.registerCommand('moreActions.workbench.action.closeEditorsToTheRight', async (args?: CloseEditorsArgs) => {
		const action = new CloseEditorsToTheRight(args);
		await action.run();
	});

	context.subscriptions.push(toggleEditorPin);
	context.subscriptions.push(closeAllEditors);
	context.subscriptions.push(closeOtherEditors);
	context.subscriptions.push(closeEditorsToTheLeft);
	context.subscriptions.push(closeEditorsToTheRight);
}

export function deactivate() { }
