<template>
	<div>
		<NuxtLoadingIndicator :throttle="0" />
		<UVerticalNavigation :links="links" />
		<NuxtPage></NuxtPage>
	</div>
</template>

<script setup lang="ts">
useHead({ title: 'Otaku Management' });
const { user, status } = useAuth();
const links = [
	{
		label: user.value?.name ?? 'Profile',
		avatar: {
			src: user.value?.image ?? '',
			alt: user.value?.name ?? '',
			size: 'lg',
		},
		badge: `${status.value}`,
	},
	{
		label: 'Home',
		icon: 'i-heroicons-home',
		to: '/',
	},
	{
		label: 'Login',
		icon: 'i-heroicons-key',
		to: '/login',
	},
	{
		label: 'Secret Site',
		icon: 'i-heroicons-lock-closed',
		to: '/secret',
	},
];
</script>
