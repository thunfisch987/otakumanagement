<template>
	<UButton @click="signOut()">Logout</UButton>
</template>

<script setup lang="ts">
const { signOut } = useAuth();
definePageMeta({
	middleware: 'client-auth',
});
</script>
