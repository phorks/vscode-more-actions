import * as vscode from 'vscode';
import { CloseEditorsArgs } from './closeEditorsArgs';
import { CloseEditorsCommand } from './closeEditorsAction';

export class CloseOtherEditors extends CloseEditorsCommand {
    constructor(args: CloseEditorsArgs | undefined) {
        super(args);
    }

    protected getEditorsToClose(): readonly vscode.Tab[] {
        return vscode.window.tabGroups.activeTabGroup.tabs.filter(x => !x.isActive);
    }
}