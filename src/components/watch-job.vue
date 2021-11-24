<template>
<div>
  <v-card
      max-width="1200"
      class="mx-auto"
      outlined
  >
    <v-list-item three-line>
      <v-list-item-content  v-model="job">
        <div class="text-overline mb-4 txt_anuncio">
          {{job.workplace}}
        </div>
        <v-list-item-title class="text-h5 mb-1 txt_anuncio">
          {{job.name}}
        </v-list-item-title>
        <v-list-item-subtitle>{{job.type}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
          size="80"
      >
        <v-img
            max-height="80"
            max-width="80"
            v-if="job.urlImage" :src="job.urlImage">
        </v-img>
       </v-list-item-avatar>
    </v-list-item>
  </v-card>
  &nbsp;
  <v-card max-width="1200" class="mx-auto">
        <v-card-title class="txt_anuncio"> Detalles del Aviso</v-card-title>
    <v-card-title class="txt_parrafo" >
      <p class="txt_parrafo" >
         {{job.description}}
      </p>
    </v-card-title>

    <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">

        <div class="text-center">
          <v-btn
              color="#EA4E4E"
              dark
              v-bind="attrs"
              v-on="on"
          >
            Postularme
          </v-btn>
        </div>
      </template>

      <v-card>
        <v-card-title class="text-h6">
          ¿Tus datos están al día?
        </v-card-title>
        <v-card-text> Mantén tu información actualizada, así las empresas podran contactarte.</v-card-text>
        <v-card-actions>

          <v-btn
              color="#19AE1F"
              text
              @click="dialog = false"
              to="/watch_job/postulation"
          >
            Aceptar
          </v-btn>
          <v-btn
              color="#F90C0C"
              text
              @click="dialog = false"
          >
            Revisar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-card>

</div>
</template>

<script>

import JobOfferApiService from '../core/services/jobOffer-api-service';

export default {
  name: "watch_job",
  data:() => ({
    id: null,
    job: []
  }),

  async mounted(){
    this.id = this.$route.params.id;
    console.log(this.id)
    try {
      const response = await JobOfferApiService.getById(this.id);
      this.job = response.data;
    }
    catch (e)
    {
      console.error(e);
    }
  }
}



</script>

<style scoped>
.txt_anuncio{
  font-family:"Roboto";
  color:#1955AE;
}
.txt_parrafo{
  font-family:"Roboto";
  font-size: 17px;
}

.center {
  font-family:"Roboto";
  font-size: 17px;
  color:#FFFFFF;
  display: flex;
}
</style>