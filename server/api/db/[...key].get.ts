import { get } from '@vercel/edge-config';

export default defineEventHandler(async (event) => {
	if (event.context.params?.key) {
		return `${await get(event.context.params.key)}`;
	} else {
		return 'please provide key';
	}
});
