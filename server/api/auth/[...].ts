// eslint-disable-next-line import/order
import { NuxtAuthHandler } from '#auth';
import GoogleProvider from '@auth/core/providers/google';
import type { AuthConfig } from '@auth/core/types';
import { get } from '@vercel/edge-config';

const runtimeConfig = useRuntimeConfig();

export const authOptions: AuthConfig = {
	// pages: {
	// 	signIn: '/login',
	// },
	secret: runtimeConfig.authSecret,
	providers: [
		GoogleProvider({
			clientId: runtimeConfig.google.clientId,
			clientSecret: runtimeConfig.google.clientSecret,
		}),
	],
	callbacks: {
		async signIn({ profile }) {
			console.log('{signIn}');
			if (profile?.email) {
				console.log('{mail}');
				if (`${await get('authorizedmails')}`.includes(profile.email)) {
					console.log('{succ}');
					return Promise.resolve(true);
				}
			}
			console.log('{miss}');
			return Promise.resolve(false);
		},
	},
	cookies: {
		pkceCodeVerifier: {
			name: '__Secure-next-auth.pkce.code_verifier',
			options: {
				httpOnly: true,
				sameSite: 'none',
				path: '/',
				secure: true,
			},
		},
	},
};

export default NuxtAuthHandler(authOptions, runtimeConfig);
