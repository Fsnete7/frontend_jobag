<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-col align="center" justify="center">
          <v-img :src="img" width="100%" height="100%" max-width="250px" contain="contain"
                  style="margin-bottom: 10px"></v-img>
          <h2 style="color: #1955AE" class="text-center" >{{ title }}</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col cols="12" sm="10" md="10" >
              <v-text-field color="#1955AE" :label=txtbox1 v-model="user.name" :rules="nameRules" required
                            outlined style="max-width: 400px"></v-text-field>
              <v-text-field color="#1955AE" :label=txtbox2 v-model="ruc_or_lastName" :rules="ruc_or_lastNameRule" required
                            outlined style="max-width: 400px"></v-text-field>
              <v-file-input color="#1955AE"  v-model="files" placeholder="Select your profile photo" label="Profile photo"
                            outlined style="max-width: 400px" prepend-icon="" prepend-inner-icon="mdi-camera">
                <template v-slot:selection="{ text }">
                  <v-chip small label color="#1955AE" style="color: white">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
              <v-text-field color="#1955AE" label="Email" v-model="user.email" :rules="emailRules" required
                            outlined style="max-width: 400px"></v-text-field>
              <v-text-field color="#1955AE" label="Password" v-model="user.password" :rules="passwordRules" required
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1" outlined style="max-width: 400px" ></v-text-field>
              <v-text-field color="#1955AE" label="Confirm Password" v-model="confirmPassword" :rules="confirmPasswordRules" required
                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'"
                            @click:append="show2 = !show2" outlined style="max-width: 400px"></v-text-field>

                <v-btn color="#1955AE" style="width: 100% ; max-width: 400px;
                  font-size: 18px; height: 50px; border-radius: 15px; color:white" @click="createUser()">Continue</v-btn>
            </v-col>
          </v-form>
        </v-col>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import imgEmployer from "../assets/empleador.png"
import imgPostulant from "../assets/postulante.png"

import PostulantsApiService from '../core/services/postulants-api-service';
import EmployersApiService from '../core/services/employers-api-service';
export default {
  name: "register-form",
  data: () => ({
    files: [],
    title:'',
    img: '',
    txtbox1:'',
    txtbox2:'',
    //FORM
    valid: true,
    ruc_or_lastName: '',
    user: {id: '', name: '', email: '', password: ''},
    nameRules: [
      v => !!v || 'Name is required',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    show1: false,
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(v)) || 'Minimum 6 characters, One capital latter, Special charater, Number',
      v => (v && v.length >= 6) || 'minimum 6 characters',
    ],
    show2: false,
    confirmPassword: '',
    confirmPasswordRules: [
      v => !!v || 'Confirm password is required',
      v => (v === this.password) || 'The password confirmation does not match',
    ],
    ruc_or_lastNameRule: [],
  }),

  created: function() {
    this.title = this.$route.params.type.toUpperCase();
    this.img = this.$route.params.type === "postulant" ? imgPostulant : imgEmployer
    this.txtbox1 = this.$route.params.type === "postulant" ? "Name" : "Company Name"
    this.txtbox2 = this.$route.params.type === "postulant" ? "Last Name" : "RUC"
    this.ruc_or_lastNameRule = this.$route.params.type === "postulant"
        ? [
          v => !!v || 'Last name is required',
        ]
        : [
          v => !!v || 'RUC is required',
          v => (v && v.length >= 11) || 'minimum 11 characters',
        ]
    PostulantsApiService.getAll()
        .then(response => {
          this.user.id = response.data.length+1;
        }).catch( e=> { console.log(e); })
  },

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    createUser() {

      if(this.$route.params.type === "postulant"){
        this.user.lastName = this.ruc_or_lastName;
        PostulantsApiService.create(this.user);
      } else {
        this.user.ruc = this.ruc_or_lastName
        EmployersApiService.create(this.user);
      }

    }
  },
}
</script>

<style scoped>

</style>