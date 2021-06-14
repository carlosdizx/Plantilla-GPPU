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
        <v-tab>Empresa</v-tab>
        <v-tab>Estudiante</v-tab>
        <v-tab>Coordinador</v-tab>
        <v-tab>Directivo</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Forms",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  })
};
</script>

<style scoped></style>
