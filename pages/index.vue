<template>
	<!-- @vue-expect-error -->
	<button @click="signIn()">to login page</button>
</template>

<script setup lang="ts">
const { signIn } = useAuth();
</script>
