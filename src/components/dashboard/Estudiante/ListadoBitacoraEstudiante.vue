<template>
	<v-card>
		<v-card-text>
			<v-row>
				<v-col color="4">
					<v-text-field label="Etiqueta"></v-text-field>
				</v-col>
				<v-col color="4">
					<v-text-field label="Fecha"></v-text-field>
				</v-col>
				<v-col color="4"><v-btn dark class="mt-5 success" outlined>Agregar</v-btn></v-col>
			</v-row>
		</v-card-text>
		<v-data-table :headers="headers" :items="desserts" class="elevation-1">
			<template v-slot:item.editar="{ item }">
				<v-btn color="orange" dark>
					{{ item.editar }}
				</v-btn>
			</template>
			<template v-slot:item.eliminar="{ item }">
				<v-btn color="red" dark>
					{{ item.eliminar }}
				</v-btn>
			</template>
		</v-data-table>
	</v-card>
</template>

<script>
	export default {
		name: 'ListadoBitacoraEstudiante',
		data: () => ({
			search: '',
			headers: [
				{ text: 'Etiqueta', value: 'etiqueta' },
				{ text: 'Fecha', value: 'fecha' },
			],
			desserts: [
				{
          etiqueta: 'Programacion de un calendario',
          fecha: '13-01-2021',
				},
				{
          etiqueta: 'Fotocopiar',
          fecha: '13-01-1998',
				},
			],
		}),
	};
</script>

<style scoped></style>
