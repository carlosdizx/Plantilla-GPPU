<template>
  <v-app-bar app dark src="@/assets/difuminado_3.jpg">
    <v-toolbar-title>Soy</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-help</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-comment-account</v-icon>
    </v-btn>
    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab @click="changeForm(1)">Empresa</v-tab>
        <v-tab @click="changeForm(2)">Estudiante</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ToolBarForms",
  methods: { ...mapActions(["changeForm"]) }
};
</script>

<style scoped></style>
