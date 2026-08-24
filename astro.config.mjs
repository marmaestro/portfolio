// noinspection SpellCheckingInspection

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import studiocmsUi from '@studiocms/ui';
import mdx from '@astrojs/mdx';
import { fontProviders } from 'astro/config'

import webmanifest from 'astro-webmanifest';

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
			customCss: 'src/styles/overrides.css'
		}),
		mdx(),
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