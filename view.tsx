/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextFileView } from "obsidian";
import React from "react";
import { createRoot } from "react-dom/client";
import { UniverDocComponent } from "./docs/main";

import "@univerjs/design/lib/index.css";
import "@univerjs/ui/lib/index.css";
import "@univerjs/docs-ui/lib/index.css";
import "@univerjs/sheets-ui/lib/index.css";
import "@univerjs/sheets-formula/lib/index.css";

export const VIEW_TYPE_UNIVERDOCS = "univer-doc-view";

export class UniverDocsView extends TextFileView {
	root: any;
	docElement: HTMLElement;
	univerDocContainer: HTMLElement;

	getViewData(): string {
		return this.data;
	}

	setViewData(data: string, clear: boolean): void {
		this.data = data;

		this.refresh();
	}

	refresh() {
        console.log("hello, this is refresh")
		this.docElement.empty();
        const docContainer = document.createElement('div');
        docContainer.style.height = '100%';
        docContainer.id = 'doc-app'
        this.docElement.appendChild(docContainer);

		this.univerDocContainer = docContainer;

		this.root = createRoot(docContainer);
		this.root.render(<UniverDocComponent UIContainer={docContainer} />);
	}

	clear(): void {}

	getViewType(): string {
		return VIEW_TYPE_UNIVERDOCS;
	}

	getDisplayText(): string {
		return "univer docs view";
	}

	async onOpen() {
        console.log('hello, this is onOpen')
		this.docElement = this.contentEl;
	}

	async onClose() {
		console.log("hello, this is onClose");
		this.requestSave();

		if (this.root) {
			this.root.unmount();
		}

		this.contentEl.empty();
	}
}
