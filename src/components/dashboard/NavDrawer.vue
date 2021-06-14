<template>
  <v-navigation-drawer app v-model="navigation.default">
    <!--ITEMS DE NAVEGACION -->

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ userTemplate.nombre }}</v-list-item-title>
        <v-list-item-subtitle>{{ userTemplate.rol }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-avatar v-if="numero === 1" color="indigo">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <v-avatar v-if="numero === 2" color="pink">
        <img src="@/assets/persona.jpg" alt="Persona" />
      </v-avatar>
    </v-list-item>

    <v-divider></v-divider>
    <!--ITEMS DE NAVEGACION -->
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title">
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
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { ITEMS } from "@/global/itemsNav";
import { mapState } from "vuex";
export default {
  name: "NavDrawer",
  data() {
    return {
      items: ITEMS,
      numero: Math.floor(Math.random() * (2 - 1 + 1) + 1),
      userTemplate: {
        nombre: "Carlos Ernesto Díaz Basante",
        token: "soloUsoPostgreSQL",
        rol: "Estudiante"
      }
    };
  },
  computed: {
    ...mapState(["navigation"])
  }
};
</script>

<style scoped></style>
