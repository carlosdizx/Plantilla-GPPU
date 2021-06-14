<template>
  <v-navigation-drawer>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>carlodiaz@umariana.edu.co</v-list-item-title>
        <v-list-item-title>
          <router-link to="/login">
            <a>Registrarme/Actualizar</a>
          </router-link>
        </v-list-item-title>
        <v-list-item-subtitle>Estudiante</v-list-item-subtitle>
        <v-list-item-subtitle>
          <router-link to="/token">
            <a>Iniciar sesion</a>
          </router-link>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <router-link to="/recursos">
            <a>Recursos</a>
          </router-link>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <a type="button">Cerrar sesion</a>
        </v-list-item-subtitle>
      </v-list-item-content>
      <!--
        <v-avatar>
          <img src="../assets/estudiante.jpg" alt="John" />
        </v-avatar>
        -->
      <router-link to="/login">
        <v-avatar color="indigo">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
      </router-link>
      <router-link to="/login">
        <v-avatar color="indigo">
          <img src="@/assets/estudiante.jpg" alt="Fernando" />
        </v-avatar>
      </router-link>
    </v-list-item>

    <v-divider dense nav></v-divider>
    <v-list-item v-for="item in items" :key="item.title">
      <!--
      <v-row>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <router-link :to="item.link">
          <v-row class="pt-4">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-row>
        </router-link>
      </v-row>
      -->
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
import { ITEMS } from "@/global/itemsNav";
import { mapActions } from "vuex";
export default {
  name: "NavDrawer",
  data() {
    return {
      items: ITEMS
    };
  },
  methods: {
    ...mapActions(["changeTheme"])
  }
};
</script>

<style scoped></style>
