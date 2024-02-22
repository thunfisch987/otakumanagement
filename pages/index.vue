<template>
	<div>
		Your City: {{ info.city }}
		Your IP: {{ info.ip }}
	</div>
</template>

<script setup lang="ts">
const {data: info} = await useFetch('/api/info')
</script>
