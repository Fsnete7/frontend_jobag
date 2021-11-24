<template>
 <v-app>
   <v-content>
     <v-container fluid >
       <div align="center">
         <v-img src="../assets/logo.png" width="100%" height="100%" max-width="200px" contain="contain"></v-img>
         <v-col cols="12" sm="10" md="10" >
           <v-text-field color="#1955AE" v-model="emaill" label="Email" outlined prepend-inner-icon="mdi-at" style="max-width: 400px"></v-text-field>
           <v-text-field color="#1955AE" v-model="password" label="Password" outlined prepend-inner-icon="mdi-lock" style="max-width: 400px"></v-text-field>
           <a href="" style="color: grey; font-size: 12px;">Did you forget your password? click here</a>
         </v-col>
         <v-col cols="12" sm="10" md="10">
           <v-btn color="#1955AE"  style="color: white;width: 100% ; max-width: 400px;
                font-size: 18px; height: 50px; border-radius: 15px" to="/home-employer">Log In</v-btn>
         </v-col>
         <v-col cols="12" sm="10" md="10">
           <router-link to="/register" style=" text-decoration: none">
             <v-btn id style="width: 100% ; max-width: 400px;
                  font-size: 18px; height: 50px; border-radius: 15px" >Register</v-btn>
           </router-link>
         </v-col>
       </div>

     </v-container>
   </v-content>
 </v-app>
</template>

<script>

export default {
  name: "login",
users:[],
  password:'',
  data: () => ({
        user:[],
      }
  ),
  async created() {
    this.refresh();

  }
}
</script>

<style scoped>

</style>
