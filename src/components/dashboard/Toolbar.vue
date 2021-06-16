<template>
	<v-app>
		<v-app-bar app dark src="@/assets/difuminado_2.jpg">
			<v-app-bar-nav-icon @click="changeNavigation"></v-app-bar-nav-icon>
			<v-toolbar-title>GPPU</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-account</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-export</v-icon>
			</v-btn>
		</v-app-bar>
	</v-app>
</template>

<script>
	import NavDrawer from './NavDrawer';
	import { ITEMS } from '@/global/itemsNav';
	import { mapState, mapActions } from 'vuex';
	export default {
		name: 'Toolbar',
		components: {
			NavDrawer,
		},
		data: () => {
			return {
				menu: true,
				paises: ITEMS,
			};
		},
		computed: {
			...mapState(['navigation']),
		},
		methods: {
			...mapActions(['changeNavigation']),
		},
	};
</script>

<style scoped></style>
