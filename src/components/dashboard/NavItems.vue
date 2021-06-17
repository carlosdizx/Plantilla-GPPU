<template>
	<v-list dense nav>
		<v-list-item v-for="item in items" :key="item.title">
			<v-btn text>
				{{ item.title }} <v-icon>{{ item.icon }}</v-icon>
			</v-btn>
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
