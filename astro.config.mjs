// noinspection SpellCheckingInspection

import {defineConfig} from "astro/config";

import icon from "astro-icon";
import studiocmsUi from "@studiocms/ui";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	siteName: "marmaestro",
    site: "https://marmaestro.dev/",
	prefetch: true,
	vite: {
		ssr: {
			noExternal: ["smartypants"],
		},
		plugins: [tailwindcss()]
	},
    integrations: [ icon(), studiocmsUi() ],
});