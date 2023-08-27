// eslint-disable-next-line import/order
import { NuxtAuthHandler } from '#auth';
import GoogleProvider from '@auth/core/providers/google';
import type { AuthConfig } from '@auth/core/types';
import { get } from '@vercel/edge-config';

const runtimeConfig = useRuntimeConfig();

export const authOptions: AuthConfig = {
	pages: {
		signIn: '/login',
		signOut: '/logout',
	},
	secret: runtimeConfig.authSecret,
	providers: [
		GoogleProvider({
			clientId: runtimeConfig.google.clientId,
			clientSecret: runtimeConfig.google.clientSecret,
		}),
	],
	callbacks: {
		async signIn({ profile }) {
			if (profile?.email) {
				if (`${await get('authorizedmails')}`.includes(profile.email)) {
					return Promise.resolve(true);
				}
			}
			return Promise.resolve(false);
		},
	},
};

export default NuxtAuthHandler(authOptions, runtimeConfig);
