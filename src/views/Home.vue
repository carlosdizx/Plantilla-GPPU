<template>
  <v-app>
    <Login />
    <router-link to="/dashboard">
      <h1>Ir al dashboard</h1>
    </router-link>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Login from "../components/Login.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Login
  }
});
</script>
