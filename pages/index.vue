<template>
	<div>
		{{ status }}
		{{ user }}
		{{ session }}
	</div>
</template>

<script setup lang="ts">
const { status, user, session } = useAuth();

definePageMeta({
	middleware: 'auth',
});
</script>
