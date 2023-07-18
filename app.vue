<template>
	<div>
		<span>Status: {{ status }}</span>
		<br />
		<span>Data: {{ data }}</span>
		<hr />
		<button @click="signIn()">to login page</button>
		<NuxtPage></NuxtPage>
	</div>
</template>

<script setup lang="ts">
useHead({ title: 'Otaku Management' });
const { status, data, signIn } = useAuth();
</script>

<style>
html {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
