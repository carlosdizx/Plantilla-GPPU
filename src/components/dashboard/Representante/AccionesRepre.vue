<template>
	<v-app>
		<div class="container mt-12">
			<ListadoEncargado />
		</div>
	</v-app>
</template>

<script>
	import CardAction from '../../general/CardAction';
	import ListadoEncargado from './ListadoEncargado';
	export default {
		name: 'AccionesRepre',
		components: {
			CardAction,
			ListadoEncargado,
		},
		methods: {
			registrar() {
				alert('Funcion de registrar');
			},
			eliminar() {
				alert('Funcion eliminar');
			},
			actualizar() {
				alert('Funcion actualizar');
			},
		},
	};
</script>

<style scoped></style>
