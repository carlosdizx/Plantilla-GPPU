<template>
	<v-app>
		<v-app-bar app dark src="@/assets/difuminado.jpg">
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
    <CardAction
        title="Responsable de practicantes"
        subTitle="Agregar responsable"
        description="Registrar un responsable de los practicantes"
        color="green"
        icon="mdi-account-circle"
        buttonText="Registrar"
    />
		<CardAction
			title="Responsable de practicantes"
			subTitle="Eliminar responsable"
			description="Remover un responsable de los practicantes"
			color="red"
			icon="mdi-account-circle"
			buttonText="Eliminar"
		/>
	</v-app>
</template>

<script>
	import CardAction from '../general/CardAction';
	import { ITEMS } from '@/global/itemsNav';
	import { mapState, mapActions } from 'vuex';
	export default {
		name: 'Toolbar',
		components: {
			CardAction,
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
