# More Actions VS Code Extension

This extension provides some custom actions that I think should have been included in the set of VS Code builtin commands.

These are especially useful when combined with the VSCode Neovim extension, since these commands can be called from the `init.lua` file.

Actions:

## `moreActions.workbench.action.toggleEditorPin`

Toggles the active editor's pin status. The are only `pinEditor` and `unpinEditor` builtin commands.

## `moreActions.workbench.action.closeAllEditors`

Closes all tabs in the currently active tab group. Allows controlling how pinned tabs should be treated via its args. The builtin command keeps all pinned tabs open.

### Args

```ts
{
    "keepPinned": boolean // Whether to keep pinned tabs open, default: false
}
```

## `moreActions.workbench.action.closeOtherEditors`

Closes all tabs except the currently active tab in the currently active tab group. Allows controlling how pinned tabs should be treated via its args. The builtin command keeps all pinned tabs open.

### Args

```ts
{
    "keepPinned": boolean // Whether to keep pinned tabs open, default: false
}
```


## `moreActions.workbench.action.closeEditorsToTheLeft`

Closes all tabs to the left of the currently active tab in the currently active tab group. Allows controlling how pinned tabs should be treated via its args. The builtin command keeps all pinned tabs open.

### Args

```ts
{
    "keepPinned": boolean // Whether to keep pinned tabs open, default: false
}
```


## `moreActions.workbench.action.closeEditorsToTheRight`

Closes all tabs to the right of the currently active tab in the currently active tab group. Allows controlling how pinned tabs should be treated via its args. The builtin command keeps all pinned tabs open.

### Args

```ts
{
    "keepPinned": boolean // Whether to keep pinned tabs open, default: false
}
```
