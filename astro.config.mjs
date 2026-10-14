// noinspection SpellCheckingInspection

import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import studiocmsUi from '@studiocms/ui';

import webmanifest from 'astro-webmanifest';

import rehypeShiftHeadings from './src/lib/rehypeShiftHeadings.mjs';

import mdx from '@astrojs/mdx';

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

    markdown: {
        processor: unified({
            features: { remarkRehype: true },
            rehypePlugins: [[rehypeShiftHeadings, 2]]
        })
    },

    integrations: [
        icon(),
        react(),
        sitemap(),
        studiocmsUi({
            customCss: 'src/styles/overrides.css',
            noInjectCSS: true,
            noInjectResetCSS: true
		}),
        webmanifest({
            name: 'marmaestro',
            icon: 'src/assets/icon.png',
            short_name: 'marmaestro',
            description: "Mar Maestro Momparler's projects site. Game developer.",
            start_url: '/',
            lang: 'en',
            display: 'standalone',

            locales: {
                es: {
                    name: 'marmaestro',
                    description: "Web projects de Mar Maestro Momparler. Desarrolladora de videojuegos.",
                    start_url: "/es",
                    lang: "es"
                }
            }
        }),
        mdx()],
});