
<template>
  <v-content >
    <div align="center">
      <v-row class="align-center justify-center">
        <h2 style="color: #1955AE" class="align-center" >PROFESSIONAL PROFILE
        </h2>
      </v-row>

      <v-row class="v-text-field align-center justify-center"  max-width="1200">
        <v-text-field v-model="name" :disabled="isUpdating" filled color="blue-grey lighten-2" label="Name" class="align-center"></v-text-field>
        <v-text-field v-model="name" :disabled="isUpdating" filled color="blue-grey lighten-2" label="Presentation" class="align-center"></v-text-field>
      </v-row>

      <v-col cols="12">
        <v-combobox
            v-model="idioms"
            label="Idioms"
            multiple
            chips
        ></v-combobox>
      </v-col>

      <v-text-field v-model="name" :disabled="isUpdating" filled color="blue-grey lighten-2" label="Carrera" class="align-center"></v-text-field>

      <template>
        <v-file-input
            show-size
            label="Certificates"
        ></v-file-input>
      </template>

      <v-col cols="12">
        <v-combobox
            v-model="competencies"
            label="Competencies"
            multiple
            chips
        ></v-combobox>
      </v-col>

      <v-row class="align-center justify-center">
        <v-btn color="#1955AE"
               dark to="/home-postulant">Save Changes</v-btn>
      </v-row>

    </div>


  </v-content>
</template>

<script>

import PostulantsApiService from "../core/services/postulants-api-service";

export default {
  name: "modify-professional-profile",
  data: () => (
      {
        idioms: ['Español', 'Japanese'],
        competencies: ['teamwork', 'persistence', 'honesty']
      }),

  async created() {
    // eslint-disable-next-line no-empty
    try {
      this.items= await PostulantsApiService.getAllIdioms();

    } catch (e) {
      console.error(e);
    }
  },

}
</script>



<style scoped>
.v-text-field{
  width: 400px;
}
</style>
