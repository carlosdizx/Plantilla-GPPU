<template>
    <v-app>
      <v-row>
        <v-col>
          <CardAction
              title="Responsable de practicantes"
              subTitle="Agregar responsable"
              description="Registrar un responsable de los practicantes"
              color="green"
              icon="mdi-account-circle"
              buttonText="Registrar"
          />
        </v-col>
        <v-col>
          <CardAction
              title="Responsable de practicantes"
              subTitle="Eliminar responsable"
              description="Remover un responsable de los practicantes"
              color="red"
              icon="mdi-account-circle"
              buttonText="Eliminar"
          />
        </v-col>
        <v-col>
          <CardAction
              title="Responsable de practicantes"
              subTitle="Actualizar datos"
              description="Cambiar datos de los responsable de practicantes"
              color="orange"
              icon="mdi-file-document-edit"
              buttonText="Actualizar"
          />
        </v-col>
      </v-row>
    </v-app>
</template>

<script>
	import CardAction from '../../general/CardAction';
	export default {
		name: 'HomeRepre',
		components: {
			CardAction,
		},
	};
</script>

<style scoped></style>
