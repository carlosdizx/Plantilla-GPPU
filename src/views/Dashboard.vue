<template>
	<v-app>
		<Toolbar />
		<NavDrawer />
    <AccionesRepre/>
	</v-app>
</template>

<script>
	import Toolbar from '@/components/dashboard/Toolbar';
	import NavDrawer from '@/components/dashboard/NavDrawer';
	import AccionesRepre from '@/components/dashboard/Representante/AccionesRepre';
	export default {
		name: 'Dashboard',
		components: {
			Toolbar,
			NavDrawer,
      AccionesRepre,
		},
	};
</script>
