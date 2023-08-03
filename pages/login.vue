<template>
	<UButton @click="signIn('google')">Login</UButton>
</template>

<script setup lang="ts">
const { signIn } = useAuth();
definePageMeta({
	middleware: 'guest-only',
});
</script>
