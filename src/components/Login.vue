<template>
	<v-card class="mt-5 mx-auto">
		<v-card-title>
			<img
				src="@/assets/GPPU.png"
				height="220"
				width="220"
				alt="logo"
				class="display-1 ml-5"
			/>
		</v-card-title>
		<v-card-text>
			<v-form @submit.prevent="submit">
				<validation-provider v-slot="{ errors }" name="email" rules="required|email">
					<v-text-field
						v-model="userTemplate.email"
						:error-messages="errors"
						label="Correo electronico"
						prepend-icon="mdi-account-circle"
						required
					>
					</v-text-field>
				</validation-provider>
				<validation-provider v-slot="{ errors }" name="Contraseña" rules="required|min:8">
					<v-text-field
						v-model="userTemplate.password"
						type="password"
						label="Contraseña"
						:error-messages="errors"
						name="input-10-1"
						counter
						prepend-icon="mdi-lock"
						:type="showPassword ? 'text' : 'password'"
						:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="showPassword = !showPassword"
					>
					</v-text-field>
				</validation-provider>
			</v-form>
		</v-card-text>
		<v-card-actions>
			<router-link to="/dashboard" v-slot="{ navigate }" custom>
				<v-btn @click="navigate" @keypress.enter="navigate" role="link" color="info"
					>Iniciar sesion</v-btn
				>
			</router-link>
			<router-link to="/forms" v-slot="{ navigate }" custom>
				<v-btn @click="navigate" @keypress.enter="navigate" role="link" color="success"
					>Registrarme</v-btn
				>
			</router-link>
			<v-spacer></v-spacer>
		</v-card-actions>
	</v-card>
</template>

<script>
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
    message: '{_field_} needs to be {length} digits. ({_value_})',
  });

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  });

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
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
    components: {
      ValidationProvider,
      ValidationObserver,
    },
		name: 'Login',
		data: () => ({
			userTemplate: {
				email: '',
				password: '',
			},
			showPassword: false,
		}),
		methods: {
			submit() {
				this.$refs.observer.validate();
			},
		},
	};
</script>

<style scoped>
	.v-btn {
		text-decoration: none !important;
	}
</style>
