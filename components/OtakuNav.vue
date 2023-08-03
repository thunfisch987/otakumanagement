<template>
	<UVerticalNavigation :links="links">
		<template #avatar="{ link }">
			<template v-if="link.avatar">
				<USkeleton
					v-if="status === 'loading'"
					class="h-12 w-12"
					:ui="{ rounded: 'rounded-full' }"
				/>
				<UAvatar
					v-else-if="status === 'authenticated'"
					v-bind="{ ...link.avatar }"
					:class="[ui.verticalNavigation.avatar.base]"
				></UAvatar>
				<UIcon
					v-else-if="status === 'unauthenticated'"
					name="i-heroicons-user-circle"
					class="h-12 w-12"
				/>
				<UIcon
					v-else-if="status === 'error'"
					name="i-heroicons-exclamation-triangle"
				/>
			</template>
		</template>
	</UVerticalNavigation>
</template>
<script setup lang="ts">
const { status, user } = useAuth();
const { ui } = useAppConfig();
const links = computed(() => [
	{
		label:
			user.value?.name && user.value.email
				? `${user.value.name} (${user.value.email})`
				: 'Profile',
		avatar: {
			src: user.value?.image ?? '',
			alt: user.value?.name ?? '',
			size: 'lg',
		},
	},
	{
		label: 'Home',
		icon: 'i-heroicons-home',
		to: '/',
	},
	{
		label: status.value === 'authenticated' ? 'Logout' : 'Login',
		icon: 'i-heroicons-key',
		to: status.value === 'authenticated' ? '/logout' : '/login',
	},
	{
		label: 'Secret Site',
		icon: 'i-heroicons-lock-open',
		to: '/secret',
	},
]);
</script>
