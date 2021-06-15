<template>
	<v-app>
		<validation-observer ref="observer" v-slot="{ invalid }">
			<v-card class="mt-5 pt-5 mx-auto">
				<v-card-title>Registro para empresas</v-card-title>
			</v-card>
			<v-card-text>
				<v-form>
					<validation-provider
						v-slot="{ errors }"
						name="nit"
						rules="required|min:5|max:30"
					>
						<v-text-field
							v-model="bussTem.nit"
							:error-messages="errors"
							label="Nit"
							prepend-icon="mdi-domain"
							required
							counter
						/>
					</validation-provider>
					<validation-provider
						v-slot="{ errors }"
						name="Nombre"
						rules="required|min:2|max:80"
					>
						<v-text-field
							v-model="bussTem.nombre"
							label="Nombre"
							prepend-icon="mdi-form-textbox"
							:error-messages="errors"
							required
							counter
						/>
					</validation-provider>
					<validation-provider v-slot="{ errors }" name="RUT" rules="required">
						<v-file-input
							v-model="bussTem.rut"
							accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
							label="RUT"
							:error-messages="errors"
							required
						/>
					</validation-provider>
					<validation-provider
						v-slot="{ errors }"
						name="Documento del representante"
						rules="required|min:5|max:15"
					>
						<v-text-field
							v-model.number="bussTem.ccRepresent"
							@keypress="isNumber($event)"
							label="# Documento del representante"
							prepend-icon="mdi-card-account-details"
							type="number"
							:error-messages="errors"
							required
							counter
						/>
					</validation-provider>
					<validation-provider v-slot="{ errors }" name="Documento de acreditacion">
						<v-file-input
							v-model="bussTem.acreditacion"
							accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
							label="Acreditacion (opcional)"
							:error-messages="errors"
						/>
					</validation-provider>
					<validation-provider
						v-slot="{ errors }"
						name="Telefono"
						rules="required|min:5|max:20"
					>
						<v-text-field
							v-model.number="bussTem.phone"
							@keypress="isNumber($event)"
							label="Telefono - Celular"
							prepend-icon="mdi-phone"
							type="number"
							:error-messages="errors"
							required
							counter
						/>
					</validation-provider>
					<validation-provider v-slot="{ errors }" name="Correo" rules="required|email">
						<v-text-field
							v-model="bussTem.email"
							label="Correo electronico"
							prepend-icon="mdi-email"
							type="email"
							:error-messages="errors"
							required
						/>
					</validation-provider>
					<validation-provider v-slot="{ errors }" name="Pais" rules="required">
						<v-select
							v-model="bussTem.pais"
							:items="paises"
							item-text="name"
							label="Pais"
							:error-messages="errors"
							required
						/>
					</validation-provider>
					<validation-provider
						v-slot="{ errors }"
						name="Departaemtnto - Estado - Provincia"
						rules="required|min:3|max:40"
					>
						<v-text-field
							v-model="bussTem.departaemtnto"
							label="Departaemtnto - Estado - Provincia"
							prepend-icon="mdi-sign-real-estate"
							:error-messages="errors"
							counter
							required
						/>
					</validation-provider>
					<validation-provider
						v-slot="{ errors }"
						name="Ciudad"
						rules="required|min:3|max:40"
					>
						<v-text-field
							v-model="bussTem.ciudad"
							label="Ciudad"
							prepend-icon="mdi-city"
							:error-messages="errors"
							counter
							required
						/>
					</validation-provider>
					<validation-provider
						v-slot="{ errors }"
						name="Codigo postal"
						rules="required|min:3|max:20"
					>
						<v-text-field
							v-model.number="bussTem.codPostal"
							@keypress="isNumber($event)"
							label="Codigo postal"
							prepend-icon="mdi-pound"
							type="number"
							:error-messages="errors"
							counter
							required
						/>
					</validation-provider>
				</v-form>
			</v-card-text>
			<v-card-actions>
				<v-btn @click="submit" role="link" color="info" :disabled="invalid">
					Registrar
				</v-btn>
			</v-card-actions>
		</validation-observer>
	</v-app>
</template>

<script>
	import { PAISES } from '@/global/itemsForms';
	import { IS_NUMBER } from '@/global/funtions';
	import { required, digits, email, max, min } from 'vee-validate/dist/rules';
	import {
		extend,
		ValidationObserver,
		ValidationProvider,
		setInteractionMode,
	} from 'vee-validate';

	setInteractionMode('eager');

	extend('digits', {
		...digits,
		message: '{_field_} Se necesita {length} digitos. ({_value_})',
	});

	extend('required', {
		...required,
		message: '{_field_} no puede estar vacio',
	});

	extend('max', {
		...max,
		message: '{_field_} {length} maximo de caracteres',
	});

	extend('min', {
		...min,
		message: '{_field_} => Ingrese mas caracteres, minimo {length} ',
	});

	extend('email', {
		...email,
		message: 'Correo con formato incorrecto',
	});
	export default {
		name: 'FormEmpresa',
		components: {
			ValidationProvider,
			ValidationObserver,
		},
		data: () => ({
			paises: PAISES,
			bussTem: {
				nit: '800.197.268-4',
				nombre: 'Arena Center',
				rut: null,
				ccRepresent: 1082749257,
				acreditacion: null,
				phone: 3163930876,
				email: 'arena@center.com',
				pais: '',
				departaemtnto: 'Nariño',
				ciudad: 'Pasto',
				codPostal: 520002,
			},
			state: false,
		}),
		methods: {
			submit() {
        console.log('ok👍')
			},
			isNumber(evt) {
				IS_NUMBER(evt);
			},
		},
	};
</script>
