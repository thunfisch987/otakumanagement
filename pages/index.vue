<template>
	<div></div>
</template>

<script setup lang="ts">
const { status, user, session } = useAuth();

definePageMeta({
	middleware: 'auth',
});
</script>
