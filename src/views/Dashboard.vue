<template>
  <v-app>
    <Toolbar />
    <NavDrawer />
  </v-app>
</template>

<script>
import NavDrawer from "@/components/NavDrawer";
import Toolbar from "@/components/Toolbar";
export default {
  name: "Dashboard",
  components: {
    NavDrawer,
    Toolbar
  }
};
</script>
