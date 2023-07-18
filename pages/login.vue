<template>
	<button @click="signIn('github')">Login</button>
</template>

<script setup lang="ts">
const { signIn } = useAuth();
definePageMeta({
	auth: {
		unauthenticatedOnly: true,
		navigateAuthenticatedTo: '/secret',
	},
});
</script>
