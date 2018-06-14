'use strict';

import * as vscode from 'vscode';

const shimamons = [
    "        d(^_^o)三",
    "       d(^_^o)三 ",
    "      d(^_^o)三  ",
    "     d(^_^o)三   ",
    "    d(^_^o)三    ",
    "   d(^_^o)三     ",
    "  d(^_^o)三      ",
    " d(^_^o)三       ",
    "d(^_^o)三        ",
    "(^_^o)三        d",
    "^_^o)三        d(",
    "_^o)三        d(^",
    "^o)三        d(^_",
    "o)三        d(^_^",
    ")三        d(^_^o",
    "三        d(^_^o)",
];
let interval: NodeJS.Timer;

// 拡張がオフになったときに実行
export function activate(context: vscode.ExtensionContext) {
    let status_bar_item: vscode.StatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    let face_index: number = 0;

    interval = setInterval(() => {
        status_bar_item.text = shimamons[face_index];    
        face_index = (face_index + 1) % shimamons.length
    }, 300);
    status_bar_item.show();
}

// 拡張がオフになったときに実行
export function deactivate() {
    clearInterval(interval);
}