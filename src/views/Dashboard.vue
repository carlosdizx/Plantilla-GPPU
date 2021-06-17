<template>
	<v-app>
		<Toolbar />
		<NavDrawer />
	</v-app>
</template>

<script>
	import Toolbar from '@/components/dashboard/Toolbar';
	import NavDrawer from '@/components/dashboard/NavDrawer';
	export default {
		name: 'Dashboard',
		components: {
			Toolbar,
			NavDrawer,
		},
	};
</script>
