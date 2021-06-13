<template>
  <v-card class="mt-5 mx-auto">
    <v-card-title>
      <img
        src="@/assets/logoLogin.png"
        height="220"
        width="220"
        alt="logo"
        class="display-1 ml-5"
      />
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Correo electronico"
          prepend-icon="mdi-account-circle"
        >
        </v-text-field>
        <v-text-field
          type="password"
          label="Contraseña"
          prepend-icon="mdi-lock"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        >
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="success">Registrarme</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="info">Iniciar sesion</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    showPassword: true
  })
};
</script>

<style scoped></style>
