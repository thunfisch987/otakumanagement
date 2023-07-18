// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@sidebase/nuxt-auth'],
	devtools: { enabled: true },
	typescript: {
		shim: false,
	},
});
