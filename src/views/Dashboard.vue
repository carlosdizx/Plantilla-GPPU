<template>
	<v-app>
		<Toolbar />
		<NavDrawer />
		<AccionesEstu v-if="rol.default === 1" />
		<AccionesRepre v-if="rol.default === 2" />
	</v-app>
</template>

<script>
	import { mapState } from 'vuex';
	import Toolbar from '@/components/dashboard/Toolbar';
	import NavDrawer from '@/components/dashboard/NavDrawer';
	import AccionesRepre from '@/components/dashboard/Representante/AccionesRepre';
	import AccionesEstu from '@/components/dashboard/Estudiante/AccionesEstu';
	export default {
		name: 'Dashboard',
		components: {
			Toolbar,
			NavDrawer,
			AccionesEstu,
			AccionesRepre,
		},
		computed: {
			...mapState(['rol']),
		},
	};
</script>
