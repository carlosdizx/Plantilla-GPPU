<template>
  <v-app>
    <v-app-bar app dark src="@/assets/difuminado.jpg">
      <v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
      <v-toolbar-title>GPPU</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="menu">
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
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import NavDrawer from "@/components/NavDrawer";
import { ITEMS } from "@/global/itemsNav";
export default {
  name: "Toolbar",
  components: {
    NavDrawer
  },
  data: () => {
    return {
      menu: true,
      items: ITEMS
    };
  }
};
</script>

<style scoped></style>
