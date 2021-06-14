<template>
  <v-app>
    <ToolBarForms />
    <FormEstudiante />
    <FormEmpresa />
    <FormCoordinador />
    <FormDirector />
  </v-app>
</template>

<script>
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
  }
};
</script>
