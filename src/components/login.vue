<template>
  <v-app>
    <v-content>
      <v-container fluid >
        <div align="center">
          <v-img src="../assets/logo.png" width="100%" height="100%" max-width="200px" contain="contain"></v-img>
          <v-col cols="12" sm="10" md="10" >
            <v-text-field color="#1955AE" v-model="email" label="Email" outlined prepend-inner-icon="mdi-at" style="max-width: 400px"></v-text-field>
            <v-text-field color="#1955AE"
                          v-model="password" label="Password" outlined prepend-inner-icon="mdi-lock" style="max-width: 400px"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          @click:append="show1 = !show1"
            ></v-text-field>
            <a href="" style="color: grey; font-size: 12px;">Did you forget your password? click here</a>
          </v-col>
          <v-col cols="12" sm="10" md="10">
            <v-btn color="#1955AE"  style="color: white;width: 100% ; max-width: 400px;
                font-size: 18px; height: 50px; border-radius: 15px" @click="validate()">Log In</v-btn>
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
import UsersApiService from '../core/services/users-api-service';
import PostulantsApiService from '../core/services/postulants-api-service';
import EmployersApiService from '../core/services/employers-api-service';
export default {
  name: "login",

  data: () => ({
    email: "",
    password: "",
    show1: false,
    rules: {
      required: value => !!value || 'Required.',
      emailMatch: () => (`The email and password you entered don't match`),
    },
  }),
  async created() {
  },
  methods: {
    validate(){
      UsersApiService.getByEmail(this.email).then(response => {
        if(response.data.passWord === this.password){
          this.isPostulant(response.data.userId);
          // this.$router.push('/'+response.data.userId+'/home-employer');
        }
      })
          .catch(error => {
            console.log(error);
          });
    },
    isPostulant(id){
      PostulantsApiService.getById(id).then(() => {
        this.$router.push('/'+id+'/home-postulant');
      })
          .catch(error => {
            this.isEmployer(id);
            console.log(error);
          });
    },

    isEmployer(id){
      console.log(id);
      EmployersApiService.getById(id).then(() => {
        this.$router.push('/'+id+'/home-employer');
      })
          .catch(error => {
            console.log(error);
          });
    },
  }
}
</script>

<style scoped>

</style>
