
<template>
  <v-content >
    <div align="center" v-if="edit===0">
      <v-row>
      <v-col>
        <v-row class="align-center justify-center">
          <h2 style="color: #1955AE" class="align-center" >PROFESSIONAL PROFILE
          </h2>
        </v-row>

        <v-row class="v-text-field align-center justify-center"  max-width="1200">
          <v-text-field v-model="profile.ocupation" :disabled="isUpdating"
                        filled color="blue-grey lighten-2"
                        label="Ocupation" class="align-center"></v-text-field>
          <v-text-field v-model="profile.videoUrl" :disabled="isUpdating"
                        filled color="blue-grey lighten-2"
                        label="VideoUrl" class="align-center"></v-text-field>
          <v-text-field v-model="profile.description" :disabled="isUpdating"
                        filled color="blue-grey lighten-2"
                        label="Description" class="align-center"></v-text-field>
        </v-row>

      <v-row class="align-center justify-center">
        <v-btn color="#1955AE"
               dark @click="editar()">Edit</v-btn>
      </v-row>

      </v-col>

      <v-col align="center">
        <section>
          <iframe width="500" height="500" src="https://www.youtube.com/embed/bNKdlnoAqIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
      </v-col>
      </v-row>
    </div>
    <div align="center" v-else-if="edit===1">
      <v-col>
        <v-row class="align-center justify-center">
          <h2 style="color: #1955AE" class="align-center" >PROFESSIONAL PROFILE
          </h2>
        </v-row>

        <v-row class="v-text-field align-center justify-center"  max-width="1200">
          <v-text-field v-model="ocupation" :disabled="isUpdating"
                        filled color="blue-grey lighten-2"
                        label="Ocupation" class="align-center"></v-text-field>
          <v-text-field v-model="video" :disabled="isUpdating"
                        filled color="blue-grey lighten-2"
                        label="VideoUrl" class="align-center"></v-text-field>
          <v-text-field v-model="description" :disabled="isUpdating"
                        filled color="blue-grey lighten-2"
                        label="Description" class="align-center"></v-text-field>
        </v-row>

        <v-row class="align-center justify-center">
          <v-btn color="#1955AE"
                 dark @click="save()">Save Changes</v-btn>
        </v-row>

      </v-col>
    </div>
  </v-content>
</template>

<script>

import ProfessionalProfileApiService from "../core/services/users-api-service";

export default {
  name: "modify-professional-profile",
  data: () => (
      {
        profile: [],
        ocupation: "",
        video: "",
        description:"",
        edit:0
      }),

  async created() {

    try {
      const response = await ProfessionalProfileApiService.getById(1);
      this.profile = response.data;
    }
    catch (e)
    {
      console.error(e);
    }
  },
  methods:{
    editar(){
      this.edit=1;
      this.created();
    },
    save() {
      this.edit=0;
      this.profile.ocupation=this.ocupation;
      this.profile.videoUrl=this.video;
      this.profile.description=this.description;
      ProfessionalProfileApiService.update(101,this.profile);

      this.created();
    }

  }

}
</script>



<style scoped>
.v-text-field{
  width: 400px;
}
</style>
