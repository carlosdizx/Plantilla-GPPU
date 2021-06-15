<template>
	<v-app>
		<validation-observer ref="observer" v-slot="{ invalid }">
			<v-card class="mt-5 pt-5 mx-auto">
				<v-card-title>Registro para estudiante</v-card-title>
			</v-card>
			<v-card-text>
				<v-form>
					<validation-provider v-slot="{ errors }" name="Universidad" rules="required">
						<v-select
							v-model="stuTemp.universidad"
							:items="universidades"
							item-text="name"
							label="Elija una universidad"
							:error-messages="errors"
							required
						/>
					</validation-provider>
					<v-row>
						<v-col cols="4">
							<validation-provider
								v-slot="{ errors }"
								name="Tipo de documento"
								rules="required"
							>
								<v-select
									v-model="stuTemp.tipoDoc"
									label="Tipo de documento"
									:items="tiposDoc"
									item-text="name"
									:error-messages="errors"
									required
								/>
							</validation-provider>
						</v-col>
						<v-col cols="8">
							<validation-provider
								v-slot="{ errors }"
								name="Documento"
								rules="required|min:5|max:15"
							>
								<v-text-field
									v-model="stuTemp.documento"
									label="Documento"
									@keypress="isNumber($event)"
									type="number"
									prepend-icon="mdi-card-account-details"
									:error-messages="errors"
									counter
									required
								/>
							</validation-provider>
						</v-col>
					</v-row>
					<validation-provider
						v-slot="{ errors }"
						name="Nombres"
						rules="required|min:3|max:30"
					>
						<v-text-field
							v-model="stuTemp.nombres"
							label="Nombres"
							prepend-icon="mdi-form-textbox"
							:error-messages="errors"
							counter
							required
						/>
					</validation-provider>
					<validation-provider
						v-slot="{ errors }"
						name="Apellidos"
						rules="required|min:3|max:30"
					>
						<v-text-field
							v-model="stuTemp.apellidos"
							label="Apellidos"
							prepend-icon="mdi-form-textbox"
							:error-messages="errors"
							counter
							required
						/>
					</validation-provider>
					<validation-provider v-slot="{ errors }" name="Genero" rules="required">
						<v-select
							v-model="stuTemp.genero"
							:items="generos"
							item-text="name"
							label="Genero"
							:error-messages="errors"
							required
						/>
					</validation-provider>
					<validation-provider v-slot="{ errors }" name="Correo" rules="required|email">
						<v-text-field
							v-model="stuTemp.correo"
							label="Correo electronico"
							type="email"
							prepend-icon="mdi-email"
							:error-messages="errors"
							required
						/>
					</validation-provider>
					<validation-provider
						v-slot="{ errors }"
						name="Ciudad"
						rules="required|min:3|max:40"
					>
						<v-text-field
							v-model="stuTemp.ciudad"
							label="Ciudad"
							prepend-icon="mdi-city"
							:error-messages="errors"
							counter
							required
						/>
					</validation-provider>
					<validation-provider
						v-slot="{ errors }"
						name="Direccion"
						rules="required|min:3|max:40"
					>
						<v-text-field
							v-model="stuTemp.direccion"
							label="Direccion"
							prepend-icon="mdi-home"
							:error-messages="errors"
							counter
							required
						/>
					</validation-provider>
					<validation-provider
						v-slot="{ errors }"
						name="Celular"
						rules="required|min:5|max:15"
					>
						<v-text-field
							v-model="stuTemp.celular"
							label="Celular"
							type="number"
							@keypress="isNumber($event)"
							prepend-icon="mdi-phone"
							:error-messages="errors"
							counter
							required
						/>
					</validation-provider>
					<validation-provider v-slot="{ errors }" name="Hoja de vida" rules="required">
						<v-file-input
							v-model="stuTemp.hojaDeVida"
							accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
							label="Hoja de vida"
							:error-messages="errors"
							required
						/>
					</validation-provider>
				</v-form>
			</v-card-text>
			<v-card-actions>
				<v-btn @click="submit" :disabled="invalid" color="info">Registrarme</v-btn>
			</v-card-actions>
		</validation-observer>
	</v-app>
</template>

<script>
	import { UNIVERSIDADES, GENEROS, TIPOS_DOCUMENTO } from '@/global/itemsForms';
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
		name: 'FormEstudiante',
		components: {
			ValidationProvider,
			ValidationObserver,
		},
		data: () => ({
			universidades: UNIVERSIDADES,
			generos: GENEROS,
			tiposDoc: TIPOS_DOCUMENTO,
			stuTemp: {
				universidad: '',
				tipoDoc: '',
				documento: null,
				nombres: '',
				apellidos: '',
				genero: '',
				correo: '',
				ciudad: '',
				direccion: '',
				celular: null,
				hojaDeVida: null,
			},
		}),
		methods: {
			isNumber(evt) {
				IS_NUMBER(evt);
			},
      submit(){
        console.log('ok🤑')
      }
		},
	};
</script>
