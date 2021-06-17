<template>
	<v-app>
		<Toolbar />
		<NavDrawer />
		<HomeRepre />
	</v-app>
</template>

<script>
	import Toolbar from '@/components/dashboard/Toolbar';
	import NavDrawer from '@/components/dashboard/NavDrawer';
	import HomeRepre from '@/components/dashboard/Representante/HomeRepre';
	export default {
		name: 'Dashboard',
		components: {
			Toolbar,
			NavDrawer,
			HomeRepre,
		},
	};
</script>
