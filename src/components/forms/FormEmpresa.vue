<template>
  <v-app>
    <v-card class="mt-5 pt-5 mx-auto">
      <v-card-title>Registro para empresas</v-card-title>
    </v-card>
    <v-card-text>
      <v-form>
        <v-text-field label="NIT" prepend-icon="mdi-domain" />
        <v-text-field label="Nombre" prepend-icon="mdi-form-textbox" />
      </v-form>
    </v-card-text>
  </v-app>
</template>

<script>
export default {
  name: "FormEmpresa"
};
</script>
