<template>
  <v-content >
    <div align="center">
      <v-row class="align-center justify-center">
        <h2 style="color: #1955AE" class="align-center" >
          PERSONAL INFORMATION</h2>
      </v-row>

      <v-row class="v-text-field align-center justify-center"  max-width="1200">
        <v-text-field v-model="name" :disabled="isUpdating" filled color="blue-grey lighten-2" label="Name" class="align-center"></v-text-field>
        <v-text-field v-model="name" :disabled="isUpdating" filled color="blue-grey lighten-2" label="Last Name" class="align-center"></v-text-field>
        <v-text-field v-model="name" :disabled="isUpdating" filled color="blue-grey lighten-2" label="Email" class="align-center"></v-text-field>

      </v-row>

      <v-row class="align-center justify-center">
        <v-btn color="white" class="style"
               dark to="/home-postulant">change Password
        </v-btn>
      </v-row>
      &nbsp;
      <v-row class="align-center justify-center">
        <v-btn color="#1955AE"
               dark to="/home-postulant">Save Changes</v-btn>
      </v-row>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "modify-personal-information2"
}
</script>

<style scoped>
.v-text-field{
  width: 400px;
}
.style{
  color: black;
}
</style>
