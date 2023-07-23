import { NuxtAuthHandler } from '#auth';
import { get } from '@vercel/edge-config';
import GoogleProvider from 'next-auth/providers/google';

export default NuxtAuthHandler({
	pages: {
		signIn: '/login',
	},
	secret: process.env.AUTH_SECRET,
	providers: [
		// @ts-expect-error
		GoogleProvider.default({
			clientId: process.env.CLIENT_ID!,
			clientSecret: process.env.CLIENT_SECRET!,
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
});
