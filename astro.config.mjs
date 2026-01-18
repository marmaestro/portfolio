// noinspection SpellCheckingInspection

import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import studiocmsUi from '@studiocms/ui';

export default defineConfig({
	siteName: "marmaestro",
	site: "https://marmaestro.dev/",
	prefetch: true,
	vite: {
		ssr: {
			noExternal: [ "smartypants" ],
		},
		plugins: [
			tailwindcss({
				applyBaseStyles: false
			})
		]
	},
	integrations: [
		icon(),
		react(),
		studiocmsUi({
			customCss: 'src/styles/overrides.css'
		})
	],
});