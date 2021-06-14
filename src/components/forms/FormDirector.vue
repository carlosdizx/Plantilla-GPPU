<template xmlns="http://www.w3.org/1999/html">
  <v-app>
    <v-card class="mt-5 pt-5 mx-auto">
      <v-card-title>Registro para coordinador</v-card-title>
    </v-card>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Documento"
          prepend-icon="mdi-card-account-details"
        />
        <v-text-field label="Nombres" prepend-icon="mdi-form-textbox" />
        <v-text-field label="Apellidos" prepend-icon="mdi-form-textbox" />
      </v-form>
    </v-card-text>
  </v-app>
</template>

<script>
export default {
  name: "FormDirector"
};
</script>
