<template>
  <v-app>
    <v-content>
      <v-container fill-height fluid>
          <v-row align="center" justify="center">
            <v-col cols="7" sm="6" md="3">
              <v-img src="../assets/postulante.png" width="100%" height="100%" max-width="250px" contain="contain"></v-img>
              <router-link :to="{name: 'RegisterForm', params:{type: 'postulant'}}" style=" text-decoration: none">
                <v-btn style="width: 100% ; max-width: 250px; margin-top: 15px;
                    font-size: 18px; height: 50px; border-radius: 15px" >Postulant</v-btn>
              </router-link>
            </v-col>
            <v-col cols="7" sm="6" md="3">
              <v-img src="../assets/empleador.png" width="100%" height="100%" max-width="250px" contain="contain"></v-img>
              <router-link :to="{name: 'RegisterForm', params:{type: 'employer'}}" style=" text-decoration: none">
                <v-btn  style="width: 100% ; max-width: 250px; margin-top: 15px;
                    font-size: 18px; height: 50px; border-radius: 15px" >Employer</v-btn>
              </router-link>
            </v-col>
          </v-row>

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "register"
}
</script>

<style scoped>

</style>