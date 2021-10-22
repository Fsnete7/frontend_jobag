
<template>
  <v-content >
    <div align="center">
      <v-row class="align-center justify-center">
        <h2 style="color: #1955AE" class="align-center" >COMPANY PROFILE
        </h2>
      </v-row>

      <v-row class="v-text-field align-center justify-center"  max-width="1200">
        <v-text-field v-model="name" :disabled="isUpdating" filled color="blue-grey lighten-2" label="Business area" class="align-center"></v-text-field>
        <v-text-field v-model="name" :disabled="isUpdating" filled color="blue-grey lighten-2" label="Description" class="align-center"></v-text-field>
      </v-row>


      <template>
        <v-file-input
            show-size
            label="Attach business photos"
        ></v-file-input>
      </template>

      <v-row class="v-text-field align-center justify-center"  max-width="1200">
        <v-text-field v-model="name" :disabled="isUpdating" filled color="blue-grey lighten-2" label="Web page" class="align-center"></v-text-field>
        <v-text-field v-model="name" :disabled="isUpdating" filled color="blue-grey lighten-2" label="Contact" class="align-center"></v-text-field>
      </v-row>

      <v-row class="align-center justify-center">
        <v-btn color="#1955AE"
               dark to="/home-postulant">Save Changes</v-btn>
      </v-row>

    </div>


  </v-content>
</template>


<script>
export default {
  name: "modificar-perfil-empresarial"
}
</script>

<style scoped>
.v-text-field{
  width: 400px;
}
</style>
