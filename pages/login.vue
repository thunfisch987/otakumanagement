<template>
	<button @click="signIn('google')">Login</button>
</template>

<script setup lang="ts">
const { signIn } = useAuth();
definePageMeta({
	middleware: 'auth',
	auth: {
		unauthenticatedOnly: true,
		navigateAuthenticatedTo: '/secret',
	},
});
</script>
