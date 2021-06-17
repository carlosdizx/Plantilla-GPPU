<template>
	<v-app>
		<div class="container mt-12">
			<infoPuestoPractica />
			<ListadoBitacoraEstudiante />
		</div>
	</v-app>
</template>

<script>
	import infoPuestoPractica from './infoPuestoPractica';
	import ListadoBitacoraEstudiante from './ListadoBitacoraEstudiante';
	export default {
		name: 'AccionesEstu',
		components: {
			infoPuestoPractica,
			ListadoBitacoraEstudiante,
		},
	};
</script>

<style scoped></style>
