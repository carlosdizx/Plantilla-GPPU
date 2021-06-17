<template>
	<v-card>
		<v-card-text>
			<v-row>
				<v-col color="4">
					<v-text-field label="Nombres"></v-text-field>
				</v-col>
				<v-col color="4">
					<v-text-field label="Apellidos"></v-text-field>
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
		name: 'ListadoEncargado',
		data: () => ({
			search: '',
			headers: [
				{ text: 'Nombres', value: 'nombres' },
				{ text: 'Apellidos', value: 'apellidos' },
				{ text: 'Editar', value: 'editar', sortable: false },
				{ text: 'Eliminar', value: 'eliminar', sortable: false },
			],
			desserts: [
				{
					nombres: 'Carlos',
					apellidos: 'Diaz',
					editar: 'Editar',
					eliminar: 'Eliminar',
				},
				{
					nombres: 'Ernesto',
					apellidos: 'Basante',
					editar: 'Editar',
					eliminar: 'Eliminar',
				},
			],
		}),
	};
</script>

<style scoped></style>
