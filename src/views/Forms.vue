<template>
  <v-app>
    <ToolBarForms />
    <FormEstudiante v-if="form.default === 1" />
    <FormEmpresa v-if="form.default === 2" />
    <FormCoordinador v-if="form.default === 3" />
    <FormDirector v-if="form.default === 4" />
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import ToolBarForms from "@/components/forms/ToolBarForms";
import FormEmpresa from "@/components/forms/FormEmpresa";
import FormEstudiante from "@/components/forms/FormEstudiante";
import FormCoordinador from "@/components/forms/FormCoordinador";
import FormDirector from "@/components/forms/FormDirector";
export default {
  name: "Forms",
  data: () => {
    return {};
  },
  components: {
    ToolBarForms,
    FormEmpresa,
    FormEstudiante,
    FormCoordinador,
    FormDirector
  },
  computed: {
    ...mapState(["form"])
  }
};
</script>
