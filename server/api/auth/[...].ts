import { NuxtAuthHandler } from '#auth';
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
});
