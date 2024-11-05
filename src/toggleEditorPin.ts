import * as vscode from 'vscode';

export class ToggleEditorPinAction {
    constructor() {
    }


    public async run() {
        const activeTab = vscode.window.tabGroups.activeTabGroup.activeTab;
        if (!activeTab) {
            await vscode.window.showErrorMessage("No active tab to be pinned!");
            return;
        }

        if (activeTab.isPinned) {
            vscode.commands.executeCommand("workbench.action.unpinEditor");
        } else {
            vscode.commands.executeCommand("workbench.action.pinEditor");
        }
    }
}