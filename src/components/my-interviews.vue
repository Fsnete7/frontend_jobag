<template>
<div>
  <v-row class="align-center justify-center">
    <h2 style="color: #1955AE" class="text-justify">Mis entrevistas</h2>
  </v-row>
  <v-row>
    <v-col>
      <v-card>

        <v-card-title   style="color: #1955AE" class="align-center justify-center">
          Entrevistas pendientes
        </v-card-title>
        <v-divider style="background: #1955AE"></v-divider>
        <br>
        <v-row v-for="interview in interviews" :key="interview">
          <v-card
              class="mx-auto mb-5"
              width="500"
              outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5  mb-1 txt_interview">
                  {{interview.title}}
                </v-list-item-title>
                <v-list-item-subtitle class="txt_hour">
                  {{interview.hour}}
                </v-list-item-subtitle>
              </v-list-item-content>

              <a href="http://meet.google.com/new" target="_blank">
              <v-img
                    max-height="40"
                    max-width="40"
                    src="https://cdn.worldvectorlogo.com/logos/google-meet-icon-2020-.svg"
                    ></v-img>
              </a>

            </v-list-item>
          </v-card>
        </v-row>
      </v-card>
    </v-col>

    <v-col>
      <v-sheet height="300">
        <v-calendar
            :now="today"
            :value="today"
            color="primary"
        >
          <template v-slot:day="{ past, date }">
            <v-row
                class="fill-height"
            >
              <template v-if="past && tracked[date]">
                <v-sheet
                    v-for="(percent, i) in tracked[date]"
                    :key="i"
                    :width="`${percent}%`"
                    height="100%"
                    tile
                ></v-sheet>
              </template>
            </v-row>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</div>
</template>

<script>
import InterviewsApiService from "../core/services/interviews-api-service";

export default {
  name: "my-interviews",
  data: () => ({
    tracked: {

    },

    interviews: [],
    today : new Date().toISOString().substr(0, 10),
  }),


  async created() {
    try {
      const response = await InterviewsApiService.getAll();
      this.interviews = response.data;
    }
    catch (e)
    {
      console.error(e);
    }
  }
}
</script>

<style scoped>

.txt_interview{
  font-family:"Roboto";
  font-size: 20px;
  color:#1955AE;
}

.txt_hour{
  font-family:"Roboto";
  font-size: 15px;
  color:#747373;
}

</style>