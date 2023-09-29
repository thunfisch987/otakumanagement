<template>
	<div>
		<!-- <VitePwaManifest /> -->
		<NuxtLoadingIndicator :throttle="0" />
		<OtakuNav />
		<NuxtPage></NuxtPage>
		<!-- <ClientOnly>
			<UNotifications />
		</ClientOnly> -->
	</div>
</template>

<script setup lang="ts">
useHead({ title: 'Otaku Management' });
const { $pwa } = useNuxtApp();
// const toast = useToast();
// onMounted(() => {
// 	if ($pwa.offlineReady || $pwa.needRefresh) {
// 		toast.add({
// 			title: 'App is ready to work offline',
// 			description:
// 				'New content available, click on reload button to update.',
// 			actions: [
// 				{
// 					label: 'Reload',
// 					variant: 'solid',
// 					color: 'primary',
// 					click: $pwa.updateServiceWorker,
// 				},
// 				{
// 					label: 'Cancel',
// 					variant: 'outline',
// 					color: 'primary',
// 					click: $pwa.cancelPrompt,
// 				},
// 			],
// 		});
// 	}
// 	if ($pwa.showInstallPrompt && !$pwa.offlineReady && !$pwa.needRefresh) {
// 		toast.add({
// 			title: 'Install as PWA?',
// 			actions: [
// 				{
// 					label: 'Install',
// 					variant: 'solid',
// 					color: 'primary',
// 					click: $pwa.install,
// 				},
// 				{
// 					label: 'Cancel',
// 					variant: 'outline',
// 					color: 'primary',
// 					click: $pwa.cancelInstall,
// 				},
// 			],
// 		});
// 	}
// });
</script>
