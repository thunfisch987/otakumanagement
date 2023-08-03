<template>
	<div>
		<NuxtLoadingIndicator :throttle="0" />
		<OtakuNav />
		<NuxtPage></NuxtPage>
	</div>
</template>

<script setup lang="ts">
useHead({ title: 'Otaku Management' });
const { user, status } = useAuth();
</script>
