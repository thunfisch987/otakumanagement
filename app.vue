<template>
	<div>
		<!-- <span v-if="data?.user?.name">Name: {{ data.user.name }}</span> -->
		<!-- <span v-if="data?.user?.email">Email: {{ data.user.email }}</span> -->
		<img
			v-if="
				status === 'authenticated' &&
				data?.user?.image &&
				data?.user?.name
			"
			:src="data.user.image"
			alt="Profile Picture"
			:title="`${data.user.name}\n${data.user.email}\n\nclick to sign out`"
			id="profilepicture"
			@click="signOut()"
		/>
		<!-- <button v-if="status === 'authenticated'" @click="signOut()">===
				Logout
			</button> -->

		<NuxtPage></NuxtPage>
	</div>
</template>

<script setup lang="ts">
useHead({ title: 'Otaku Management' });
const { status, data, signOut } = useAuth();
</script>

<style lang="scss">
html {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	color-scheme: dark;
}

#profilepicture {
	border-radius: 50%;
	margin-right: 0;
	position: fixed;
	right: 0;
	aspect-ratio: 1/1;
	width: 3rem;
	transition: scale 0.5s;
	&:hover {
		scale: 1.05;
	}
}
</style>
