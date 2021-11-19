<template>
  <v-app>
    <v-content>
      <v-col>
        <v-container fluid style="width: 600px">
          <v-row class="align-center justify-center">
            <v-img src="../assets/Name_Tag.png" height="50px" width="50px" contain="contain"></v-img>
            <h2 style="color: #1955AE" class="text-justify">BUSCAR OFERTAS DE TRABAJO</h2>
            <v-img src="../assets/Home_Office.png" height="50px" width="50px" contain="contain"></v-img>
          </v-row>
          <v-textarea label="Puesto, empresa o palabra clave"  auto-grow outlined rows="1"
                      row-height="15" style="margin-top: 20px;"></v-textarea>
          <v-container class="text-center">
              <v-btn class="white--text" depressed color="#1955AE" rounded width="170px">Buscar</v-btn>
          </v-container>
        </v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-container fluid id="filter" class="text-center">
              <h2 class="text-center white--text">FILTROS</h2>
              <v-divider style="background: white;margin: 8px 0px 8px 0px"></v-divider>
              <p class="text-left white--text">Resultados (60)</p>
              <v-list>
                <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action>

                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item v-for="child in item.items" :key="child.title">
                    <v-list-item-content>
                      <v-list-item-title v-text="child.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-container>
          </v-col>

          <v-col  align="right">

            <v-row v-for="job in jobs" :key="job">

            <v-card
                class="mx-auto mb-5"
                width="800px"
                outlined
                hover
                to="/watch-job"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4 txt_anuncio">
                    {{job.location}}
                  </div>
                  <v-list-item-title class="text-h5 mb-1 txt_anuncio">
                    {{job.title}}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{job.enterprise}}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar
                    size="80"
                >
                  <v-img
                      max-height="80"
                      max-width="80"
                      v-if="job.url" :src="job.url"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-content>
  </v-app>
</template>

<script>

import JobApiService from '../core/services/jobs-api-service';


export default {
  name: "home_postulant",
  components: { },
  data: () => ({
    jobs: [],
    items: [
      {
        items: [
          { title: 'Sin experiencia' },
          { title: '1 año a más' }
        ],
        title: 'Experiencia Laboral',
      },
      {
        active: true,
        items: [
          { title: 'Mineria' },
          { title: 'Informatica' },
          { title: 'Economia' },
        ],
        title: 'Categoria',
      },
      {

        items: [
          { title: 'San Isidro' },
          { title: 'Lince' },
          { title: 'Jesus Maria'},
        ],
        title: 'Distrito',
      },

      {
        items: [
          { title: '940 a más' },
          { title: '1200 a 3000' },
          { title: '3000 a 5000' },
        ],
        title: 'Salario',
      },
    ],
  }),
  async created() {
    try {
      const response = await JobApiService.getAll();
      this.jobs = response.data;
    }
    catch (e)
    {
      console.error(e);
    }
  }
}
</script>

<style scoped>
#filter{
  background: #1955AE;
  border-radius: 20px;
  width: 100%;
  height: 100%;
}
.txt_anuncio{
  font-family:"Roboto";
  color:#1955AE;
}
.filtros{
  font-size: 36px;
  font-family:"Roboto";
  color:#FAFCFF;
}
</style>
