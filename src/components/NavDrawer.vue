<template>
  <v-card
    id="core-navigation-drawer"
    absolute
    color="transparent"
    flat
    :right="$vuetify.rtl"
    mobile-break-point="960"
    app
    width="256"
    v-bind="$attrs"
    height="100%"
  >
    <v-navigation-drawer permanent>
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

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { ITEMS } from "@/global/itemsNav";
export default {
  name: "NavDrawer",
  data() {
    return {
      items: ITEMS
    };
  }
};
</script>

<style scoped></style>
