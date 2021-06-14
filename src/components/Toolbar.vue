<template>
  <v-app-bar
    app
    dark
    src="@/assets/difuminado.jpg"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>GPPU</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style scoped></style>
