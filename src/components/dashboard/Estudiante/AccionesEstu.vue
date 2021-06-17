<template>
	<v-app>
		<div class="container mt-12">
			<infoPuestoPractica />
		</div>
	</v-app>
</template>

<script>
	import infoPuestoPractica from './infoPuestoPractica';
	export default {
		name: 'AccionesEstu',
		components: {
			infoPuestoPractica,
		},
	};
</script>

<style scoped></style>
