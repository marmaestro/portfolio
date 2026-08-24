// noinspection SpellCheckingInspection

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import studiocmsUi from '@studiocms/ui';
import mdx from '@astrojs/mdx';

import webmanifest from 'astro-webmanifest';

import rehypeShiftHeadings from './src/lib/rehypeShiftHeadings.mjs';

export default defineConfig({
    siteName: "marmaestro",
    site: "https://marmaestro.dev",

    prefetch: true,
    output: 'static',
    trailingSlash: 'never',
    build: {
        assets: 'assets',
        inlineStylesheets: 'always',
        format: 'file'
    },

    i18n: {
        locales: ["en", "es"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: false,
        }
    },

    vite: {
        plugins: [
            tailwindcss()
        ]
    },

    integrations: [
		icon(),
		react(),
		sitemap(),
		studiocmsUi({
			customCss: 'src/styles/overrides.css',
			// The integration auto-injects its own default colors/radii/reset
			// CSS on every page unless told not to — that copy was silently
			// clobbering this project's customized tokens (src/styles/
			// studioCmsUi/{colors,radii,resets}.css), which are loaded
			// manually from Layout.astro/ErrorLayout.astro instead.
			noInjectCSS: true,
			noInjectResetCSS: true
		}),
		mdx({
			rehypePlugins: [[rehypeShiftHeadings, 2]]
		}),
		webmanifest({
			name: 'marmaestro',
			icon: 'src/assets/icon.png',
			short_name: 'marmaestro',
			description: "Mar Maestro Momparler's portfolio site. Game developer.",
			start_url: '/',
			lang: 'en',
			display: 'standalone',

			locales: {
				es: {
					name: 'marmaestro',
					description: "Web portfolio de Mar Maestro Momparler. Desarrolladora de videojuegos.",
					start_url: "/es",
					lang: "es"
				}
			}
		})],
});