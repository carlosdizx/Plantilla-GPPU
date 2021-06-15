<template>
  <v-app>
    <v-card class="mt-5 pt-5 mx-auto">
      <v-card-title>Registro para estudiante</v-card-title>
    </v-card>
    <v-card-text>
      <v-form>
        <v-select
          :items="universidades"
          item-text="name"
          label="Elija una universidad"
        />
        <v-row>
          <v-col cols="4">
            <v-select :items="tiposDoc" item-text="name"></v-select>
          </v-col>
          <v-col cols="8">
            <v-text-field
              label="Documento"
              type="number"
              prepend-icon="mdi-card-account-details"
            />
          </v-col>
        </v-row>
        <v-text-field label="Nombres" prepend-icon="mdi-form-textbox" />
        <v-text-field label="Apellidos" prepend-icon="mdi-form-textbox" />
        <v-select
            :items="generos"
            item-text="name"
            label="Genero"
        />
        <v-text-field
          label="Correo electronico"
          type="email"
          prepend-icon="mdi-email"
        />
        <v-text-field label="Ciudad" prepend-icon="mdi-city" />
        <v-text-field label="Direccion" prepend-icon="mdi-home" />
        <v-text-field label="Celular" type="number" prepend-icon="mdi-phone" />
        <v-file-input
          accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
          label="Hoja de vida"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <router-link to="/dashboard">
        <v-btn class="info">Registrar</v-btn>
      </router-link>
    </v-card-actions>
  </v-app>
</template>

<script>
export default {
  name: "FormEstudiante",
  data: () => ({
    universidades: [
      { id: 1, name: "Universidad Mariana" },
      { id: 2, name: "Universidad de Nariño" }
    ],
    tiposDoc: [
      { id: 1, name: "C.C." },
      { id: 1, name: "T.I." },
      { id: 1, name: "T.E." },
      { id: 1, name: "C.E" },
      { id: 1, name: "NIT" },
      { id: 1, name: "Pasaporte" }
    ],
    generos: [
      { id: 1, name: "Masculino" },
      { id: 1, name: "Femenino" }
    ]
  })
};
</script>
