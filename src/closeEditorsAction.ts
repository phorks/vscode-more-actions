// eslint-disable-next-line @typescript-eslint/naming-convention
import _ from 'lodash';
import * as vscode from 'vscode';
import { CloseEditorsArgs } from './closeEditorsArgs';

export abstract class CloseEditorsCommand {
    private args: CloseEditorsArgs | undefined;

    constructor(args: CloseEditorsArgs | undefined) {
        this.args = args;
    }

    public async run() {
        const keepPinned = this.args?.keepPinned === true;
        const groups = vscode.window.tabGroups;
        const editorsToClose = this.getEditorsToClose()
            .filter(x => !x.isPinned || !keepPinned)
            .map(x => groups.close(x, true));
        await Promise.all(editorsToClose);
    }

    protected abstract getEditorsToClose(): readonly vscode.Tab[];
}