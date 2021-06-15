<template>
  <v-app>
    <v-card class="mt-5 pt-5 mx-auto">
      <v-card-title>Registro para empresas</v-card-title>
    </v-card>
    <v-card-text>
      <v-form>
        <v-text-field label="NIT" prepend-icon="mdi-domain" />
        <v-text-field label="Nombre" prepend-icon="mdi-form-textbox" />
        <v-file-input
          accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
          label="RUT"
        >
        </v-file-input>
        <v-text-field
          label="# Documento del representante"
          prepend-icon="mdi-card-account-details"
        />
        <v-file-input
          accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
          label="Acreditacion (opcional)"
        />
        <v-text-field
          label="Telefono - Celular"
          prepend-icon="mdi-phone"
          type="number"
        />
        <v-text-field
          label="Correo electronico"
          prepend-icon="mdi-email"
          type="email"
        />
        <v-select :items="items" label="Pais"></v-select>
        <v-text-field
          label="Departaemtnto - Estado - Provincia"
          prepend-icon="mdi-sign-real-estate"
        />
        <v-text-field label="Ciudad" prepend-icon="mdi-city" />
        <v-text-field
          label="Codigo postal"
          prepend-icon="mdi-pound"
          type="number"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <router-link tag="button" to="/dashboard">
        <v-btn class="info">Registrar</v-btn>
      </router-link>
    </v-card-actions>
  </v-app>
</template>

<script>
/**
 *  Country {
    name: string;
    code: string;
    }
}
 */
export default {
  name: "FormEmpresa",
  data: () => ({ items: ["Colobmia", "Ecuador", "Venezuela"] })
};
</script>
