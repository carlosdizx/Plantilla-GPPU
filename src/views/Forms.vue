<template>
  <v-app>
    <ToolBarForms />
    <FormEmpresa v-if="form.default === 1" />
    <FormEstudiante v-if="form.default === 2" />
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import ToolBarForms from "@/components/forms/ToolBarForms";
import FormEmpresa from "@/components/forms/FormEmpresa";
import FormEstudiante from "@/components/forms/FormEstudiante";
export default {
  name: "Forms",
  data: () => {
    return {};
  },
  components: {
    ToolBarForms,
    FormEmpresa,
    FormEstudiante,
  },
  computed: {
    ...mapState(["form"])
  }
  ,created() {
    console.log(this.form)
  }
};
</script>
