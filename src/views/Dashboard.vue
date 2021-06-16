<template>
	<v-app>
		<DashRepre />
	</v-app>
</template>

<script>
	import DashRepre from '@/components/dashboard/Representante/DashRepre';
	export default {
		name: 'Dashboard',
		components: {
			DashRepre,
		},
	};
</script>
