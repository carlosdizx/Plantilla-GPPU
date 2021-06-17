<template>
	<v-navigation-drawer app v-model="navigation.default">
		<!--ITEMS DE NAVEGACION -->

		<v-list-item>
			<v-list-item-content>
				<v-list-item-title>{{ userTemplate.nombre }}</v-list-item-title>
				<v-list-item-subtitle>{{ userTemplate.rol }}</v-list-item-subtitle>
			</v-list-item-content>
			<v-avatar v-if="numero === 1" color="indigo">
				<v-icon dark>mdi-account-circle</v-icon>
			</v-avatar>
			<v-avatar v-if="numero === 2" color="pink">
				<img src="@/assets/persona.jpg" alt="Persona" />
			</v-avatar>
		</v-list-item>

		<v-divider></v-divider>
		<!--ITEMS DE NAVEGACION -->
		<NavItems />
	</v-navigation-drawer>
</template>

<script>
	import { ITEMS } from '@/global/itemsNav';
	import { mapState } from 'vuex';
	import NavItems from './NavItems';
	export default {
		name: 'NavDrawer',
		data() {
			return {
				items: ITEMS,
				numero: Math.floor(Math.random() * (2 - 1 + 1) + 1),
				userTemplate: {
					nombre: 'Carlos Ernesto Díaz Basante',
					token: 'soloUsoPostgreSQL',
					rol: '',
				},
			};
		},
		components: {
			NavItems,
		},
		computed: {
			...mapState(['navigation', 'rol']),
		},
		mounted() {
			this.userTemplate.rol =
				this.rol.default === 1 ? 'Estudiante' : this.rol.default === 2 ? 'Representante' : '';
		},
	};
</script>

<style scoped></style>
