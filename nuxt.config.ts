// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	modules: ['@hebilicious/authjs-nuxt', '@nuxt/ui'],
	devtools: { enabled: true },
	typescript: {
		shim: false,
	},
	tailwindcss: {
		configPath: '~/tailwind.config.ts',
	},
	authJs: {
		verifyClientOnEveryRequest: false,
	},
	runtimeConfig: {
		authOrigin: '', // NUXT_AUTH_ORIGIN
		edgeConfig: '', // NUXT_EDGE_CONFIG
		authSecret: '', // NUXT_AUTH_SECRET
		clientId: '', // NUXT_CLIENT_ID
		clientSecret: '', // NUXT_CLIENT_SECRET
		authJs: {
			secret: '', // NUXT_AUTH_JS_SECRET
		},
		google: {
			clientId: '', // NUXT_GOOGLE_CLIENT_ID
			clientSecret: '', // NUXT_GOOGLE_CLIENT_SECRET
		},
		public: {
			authJs: {
				baseUrl: '', // NUXT_PUBLIC_AUTH_JS_BASE_URL
				verifyClientOnEveryRequest: false, // NUXT_PUBLIC_AUTH_JS_VERIFY_CLIENT_ON_EVERY_REQUEST
			},
		},
	},
	alias: {
		cookie: resolve(__dirname, 'node_modules/cookie'),
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
		},
	},
	colorMode: {
		preference: 'dark',
		fallback: 'dark',
	},
	experimental: {
		headNext: true,
		typescriptBundlerResolution: true,
		writeEarlyHints: true,
	},
});
