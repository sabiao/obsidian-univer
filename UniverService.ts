import { LocaleType, Univer } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { UniverDocsPlugin } from "@univerjs/docs";
import { DEFAULT_DOCUMENT_DATA_CN } from "./data/default-document-data-cn";
import { ItemView, WorkspaceLeaf } from "obsidian";

export class myReactView extends ItemView {
	static viewType = "my-react-view";

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return myReactView.viewType;
	}

	getDisplayText(): string {
		return "hello this is my react view";
	}

	async onOpen() {
		const container = this.containerEl.children[1] as HTMLElement;

		container.id = "react-root";

		this.initializeReactApp(container);
	}

	async onClose() {}

	initializeReactApp(container: HTMLElement) {
		const univer = new Univer({
			theme: defaultTheme,
			locale: LocaleType.ZH_CN,
		});

		univer.registerPlugin(UniverRenderEnginePlugin);
		univer.registerPlugin(UniverFormulaEnginePlugin);

		univer.registerPlugin(UniverUIPlugin, {
			container: "app",
			header: true,
			toolbar: true,
		});

		univer.registerPlugin(UniverDocsPlugin, {
			standalone: true,
		});
		univer.registerPlugin(UniverDocsUIPlugin, {
			container: "univerdoc",
			layout: {
				docContainerConfig: {
					innerLeft: false,
				},
			},
		});

		univer.createUniverDoc(DEFAULT_DOCUMENT_DATA_CN);

	}
}
