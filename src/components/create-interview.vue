<template>
  <div>
    <v-container class="justify-center my-3">
      <h2 class="center text-center">CREATE INTERVIEW</h2>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <!-- CalendarText -->
          <v-row class="justify-center">
            <v-col cols="12" md="6">
              <v-text-field readonly label="Date Interview"
                            prepend-icon="mdi-calendar"
                            :value="DateDistribution1">
              </v-text-field>
            </v-col>
          </v-row>
          <!-- Calendar -->
          <v-row class="justify-center" md12>
            <v-date-picker v-model="picker"></v-date-picker>
          </v-row>
          <v-row class="justify-center">
            <!-- HourStar -->
            <v-col cols="12" md="3">
              <v-text-field label="Hour Start" value="00:00:00" type="time"></v-text-field>
            </v-col>
            <!-- HourEnd -->
            <v-col cols="12" md="3">
              <v-text-field label="Hour End" value="00:00:00" type="time"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <!-- PostulantsList -->
        <v-col>
          <v-container class="justify-center">
            <v-card class="mx-auto" max-width="500">
              <!-- title -->
              <v-card-title>List Potulants</v-card-title>
              <v-container class="py-0">
                <v-row align="center" justify="start">
                  <v-col v-for="(selection, i) in postulants" :key="selection.firstName" class="shrink">
                    <v-chip :disabled="loading" close @click:close="selected.splice(i, 1)">
                      {{ selection.firstName }}
                    </v-chip>
                  </v-col>
                  <v-col v-if="!allSelected" cols="12">
                    <v-text-field ref="search" v-model="search" full-width hide-details label="Search" single-line></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <v-divider v-if="!allSelected"></v-divider>
              <v-list>
                <template v-for="item in postulants ">
                  <v-list-item v-if="!selected.includes(item)" :key="item.firstName" :disabled="loading"
                               @click="selected.push(item)">
                    <v-list-item-title v-text="item.firstName"></v-list-item-title>
                  </v-list-item>
                </template>
              </v-list>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="white--text" color="#1955AE" :disabled="!selected.length" :loading="loading" to="/home-employer">Next
                </v-btn>
              </v-card-actions>
            </v-card>
            <!-- Plus
            <v-list>
              <v-list-item v-for="item in items2" :key="item.title">
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-list>
            Select postulants
            <v-flex class="" md12>
              <v-card max-width="400">
                <v-select v-model="selection" :items="items2" multiple label="Agregar postulantes">
                </v-select>
              </v-card>
            </v-flex>
           Dialog confirmation
            <v-dialog v-model="dialog" persistent max-width="290">
             BTN CREATE INTERVIEW
              <template v-slot:activator="{ on, attrs }">
                <div class="text-center">
                  <v-btn color="#1955AE" dark v-bind="attrs" v-on="on">CREATE</v-btn>
                </div>
              </template>
             DIALOG SMJ CONFIRMATION
              <v-card>
                <v-card-title class="dialog1">Entrevista creada
                  <pre></pre>
                  satisfactoriamente
                </v-card-title>
                <v-card-actions>
                  <div class="text-center">
                    <v-btn color="#1955AE" dark v-bind="attrs" v-on="on" to="/home-employer">
                      ACEPTAR
                    </v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-dialog>-->
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PostulantsApiService from "@/core/services/postulants-api-service";
export default {
  name: "create-interview",
  data: () => ({
    id: null,
    loading: false,
    postulants: null,
    search: '',
    selected: [],
    //no list
    picker: undefined,
    selection: [],
    items: []
  }),
  computed: {
    DateDistribution1() {
      return this.picker;
    },
    allSelected() {
      return this.selected.length === this.items.length
    },
    categories() {
      const search = this.search.toLowerCase()

      if (!search) return this.items.title

      return this.items.filter(item => {
        const text = item.title.toLowerCase()

        return text.indexOf(search) > -1
      })
    },
    selections() {
      const selections = []

      for (const selection of this.selected) {
        selections.push(selection)
      }

      return selections
    },

  },

  methods: {

    next() {
      this.loading = true

      setTimeout(() => {
        this.search = ''
        this.selected = []
        this.loading = false
      }, 2000)
    },

    async retrievePostulant() {
      try {
        const response = await PostulantsApiService.getAll();
        this.postulants = response.data;
      } catch (e) {
        console.error(e);
      }
    }
  },
  watch: {
    selected() {
      this.search = ''
    },
  },
  mounted() {
    this.retrievePostulant();
  },

}

</script>

<style scoped>
.text-center {
  margin-left: auto;
  margin-right: auto;
  position: center;
}

.center {
  font-family: "Roboto";
  font-weight: bold;
  font-size: 24px;
  color: #1955AE;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  position: center;
}

.dialog1 {
  font-family: "Roboto";
  font-weight: bold;
  font-size: 24px;
  color: #000000;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  position: center;
}

.filtros {
  font-size: 18px;
  font-family: "Roboto";
  color: #FAFCFF;
}
</style>