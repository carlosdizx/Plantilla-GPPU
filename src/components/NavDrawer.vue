<template>
  <v-navigation-drawer app v-model="navigation.default">
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
</template>

<script>
import { ITEMS } from "@/global/itemsNav";
import { mapState } from "vuex";
export default {
  name: "NavDrawer",
  data() {
    return {
      items: ITEMS
    };
  },
  computed: {
    ...mapState(["navigation"])
  }
};
</script>

<style scoped></style>
