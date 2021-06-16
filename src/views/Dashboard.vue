<template>
	<v-app>
		<Toolbar />
		<NavDrawer />
	</v-app>
</template>

<script>
	import NavDrawer from '@/components/dashboard/NavDrawer';
	import Toolbar from "@/components/dashboard/Toolbar";
	export default {
		name: 'Dashboard',
		components: {
			NavDrawer,
			Toolbar,
		},
	};
</script>
