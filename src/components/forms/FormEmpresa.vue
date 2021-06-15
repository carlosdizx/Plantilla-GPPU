<template>
	<v-app>
		<v-card class="mt-5 pt-5 mx-auto">
			<v-card-title>Registro para empresas</v-card-title>
		</v-card>
		<v-card-text>
			<v-form>
				<v-text-field v-model="bussTem.nit" label="NIT" prepend-icon="mdi-domain" />
				<v-text-field v-model="bussTem.nombre" label="Nombre" prepend-icon="mdi-form-textbox" />
				<v-file-input
					v-model="bussTem.rut"
					accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
					label="RUT"
				>
				</v-file-input>
				<v-text-field
					v-model.number="bussTem.ccRepresent"
					@keypress="isNumber($event)"
					label="# Documento del representante"
					prepend-icon="mdi-card-account-details"
					type="number"
				/>
				<v-file-input
					v-model="bussTem.acreditacion"
					accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
					label="Acreditacion (opcional)"
				/>
				<v-text-field
					v-model.number="bussTem.phone"
					@keypress="isNumber($event)"
					label="Telefono - Celular"
					prepend-icon="mdi-phone"
					type="number"
				/>
				<v-text-field
					v-model="bussTem.email"
					label="Correo electronico"
					prepend-icon="mdi-email"
					type="email"
				/>
				<v-select
					v-model="bussTem.pais"
					:items="paises"
					item-text="name"
					label="Pais"
				></v-select>
				<v-text-field
					v-model="bussTem.departaemtnto"
					label="Departaemtnto - Estado - Provincia"
					prepend-icon="mdi-sign-real-estate"
				/>
				<v-text-field v-model="bussTem.ciudad" label="Ciudad" prepend-icon="mdi-city" />
				<v-text-field
					v-model.number="bussTem.codPostal"
					@keypress="isNumber($event)"
					label="Codigo postal"
					prepend-icon="mdi-pound"
					type="number"
				/>
			</v-form>
		</v-card-text>
		<v-card-actions>
			<router-link to="/dashboard" custom v-slot="{ navigate }">
				<v-btn @click="navigate" @keypress.enter="navigate" role="link" color="info">
					Registrar
				</v-btn>
			</router-link>
			<v-btn @click="containsErrors">
				probar
			</v-btn>
		</v-card-actions>
	</v-app>
</template>

<script>
	import { PAISES } from '@/global/itemsForms';
	import { IS_NUMBER } from '@/global/funtions';
	export default {
		name: 'FormEmpresa',
		data: () => ({
			paises: PAISES,
			bussTem: {
				nit: '',
				nombre: '',
				rut: null,
				ccRepresent: null,
				acreditacion: null,
				phone: null,
				email: '',
				pais: '',
				departaemtnto: '',
				ciudad: '',
				codPostal: null,
			},
		}),
		methods: {
			containsErrors() {
				if (
					this.bussTem.nit.trim() === '' ||
					this.bussTem.nombre.trim() === '' ||
					!this.bussTem.rut ||
					this.bussTem.email.trim() === '' ||
					this.bussTem.departaemtnto.trim() === '' ||
					this.bussTem.ciudad.trim() === ''
				) {
					console.log(this.bussTem);
				}
			},
			isNumber(evt) {
				IS_NUMBER(evt);
			},
		},
	};
</script>
