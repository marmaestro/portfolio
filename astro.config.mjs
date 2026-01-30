// noinspection SpellCheckingInspection

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import studiocmsUi from '@studiocms/ui';
import {defaultLocale, locales} from "~/i18n/constants.ts";

export default defineConfig({
	siteName: "marmaestro",
	site: "https://marmaestro.dev/",
	prefetch: true,
	i18n: {
		locales: locales,
		defaultLocale: defaultLocale,
		routing: {
			prefixDefaultLocale: true,
		}
	},
	vite: {
		plugins: [
			tailwindcss({
				applyBaseStyles: false
			})
		]
	},
	integrations: [
		icon(),
		react(),
		sitemap(),
		studiocmsUi({
			customCss: 'src/styles/overrides.css'
		})
	],
});