// eslint-disable-next-line @typescript-eslint/naming-convention
import _ from 'lodash';
import * as vscode from 'vscode';
import { CloseEditorsArgs } from './closeEditorsArgs';
import { CloseEditorsCommand } from './closeEditorsAction';

export class CloseEditorsToTheRight extends CloseEditorsCommand {
    constructor(args: CloseEditorsArgs | undefined) {
        super(args);
    }

    protected getEditorsToClose(): readonly vscode.Tab[] {
        return _.dropWhile(
            vscode.window.tabGroups.activeTabGroup.tabs,
            x => !x.isActive
        ).slice(1);
    }
}