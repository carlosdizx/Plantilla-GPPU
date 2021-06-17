<template>
	<v-list dense nav>
		<v-list-item v-for="item in items" :key="item.title">
			<v-list-item-icon>
				<v-icon>{{ item.icon }}</v-icon>
			</v-list-item-icon>
			<v-list-item-content>
				<v-list-item-title>{{ item.title }}</v-list-item-title>
			</v-list-item-content>
		</v-list-item>
	</v-list>
</template>

<script>
	import { mapState } from 'vuex';
	import { ITEMS_ESTUDIANTE, ITEMS_REPRESENTANTE } from '../../global/itemsNav';

	export default {
		name: 'NavItems',
		data: () => ({
			items: null,
		}),
		computed: {
			...mapState(['rol']),
		},
		mounted() {
			this.items =
				this.rol.default === 1
					? ITEMS_ESTUDIANTE
					: this.rol.default === 2
					? ITEMS_REPRESENTANTE
					: [];
		},
	};
</script>

<style scoped></style>
