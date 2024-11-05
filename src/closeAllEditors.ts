import * as vscode from 'vscode';
import { CloseEditorsArgs } from './closeEditorsArgs';
import { CloseEditorsCommand } from './closeEditorsAction';

export class CloseAllEditors extends CloseEditorsCommand {
    constructor(args: CloseEditorsArgs | undefined) {
        super(args);
    }

    protected getEditorsToClose(): readonly vscode.Tab[] {
        return vscode.window.tabGroups.activeTabGroup.tabs;
    }
}