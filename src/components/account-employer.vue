<template>
  <v-content >
    <v-row class="align-center justify-center">
      <h2 style="color: #1955AE" class="align-center" >MY ACCOUNT</h2>

    </v-row>
    &nbsp;
    <v-row class="align-center justify-center">
      <v-btn color="#1955AE"
             dark to='/modify-business-profile'> Modify Business Profile</v-btn>
    </v-row>
    &nbsp;
    <v-row class="align-center justify-center">
      <v-btn color="#1955AE"
             dark to='/modify-personal-information2'>Modify Personal Information</v-btn>
    </v-row>


  </v-content>
</template>

<script>
export default {
  name: "account-employer"
}
</script>

<style scoped>

</style>
