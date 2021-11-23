<template>
    <v-app>
        <main-nav-employer></main-nav-employer>
        <v-content>
          <v-container fluid id="princ-cont">
            <h1 class="text-center" style="color: #1955AE"> Create New Job AD</h1>
            <v-divider style="background: #1955AE; margin-bottom: 8%"></v-divider>

            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-textarea label="Position sought"  auto-grow outlined rows="1" row-height="15" v-model="position"></v-textarea>
                    <v-select :items="items_experience" label="Experience" outlined v-model="experience"></v-select>
                    <v-textarea label="WorkPlace"  auto-grow outlined rows="1" row-height="15" v-model="location"></v-textarea>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-select :items="items_tipo" label="Tipo de puesto" outlined v-model="jobType"></v-select>
                    <v-textarea label="AD Title"  auto-grow outlined rows="1" row-height="15" v-model="title"></v-textarea>
                    <v-textarea label="Salary"  auto-grow outlined rows="1" row-height="15" v-model="salary"></v-textarea>
                  </v-col>

                  <v-col cols="12" sm="12" md="4">
                    <v-textarea outlined name="input-7-4" auto-grow height="230px" label="Description" v-model="description"></v-textarea>
                  </v-col>

                  <v-col cols="12" sm="12" md="6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13121.361118496025!2d-76.9539256197403!3d-12.111878379069989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c70ab77498c1%3A0xcce9f50642e7c684!2sUniversidad%20Peruana%20de%20Ciencias%20Aplicadas!5e0!3m2!1ses-419!2spe!4v1632790275637!5m2!1ses-419!2spe"
                            width="100%" height="270" style="border:0; border-radius: 20px" allowfullscreen="" loading="lazy"></iframe>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <div class="text-right">

              <v-dialog transition="dialog-top-transition" max-width="600">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="#1955AE" dark v-bind="attrs" v-on="on" v-on:click="createAd">
                    Create
                  </v-btn>

                </template>
                <template>
                  <v-card>
                    <v-card-text>
                      <div class="text-h5 text-center font-weight-bold black--text pa-12" >AD create succesfully</div>
                      <v-container class="text-center">
                        <v-btn class="white--text" to="/home-employer" color="#1955AE">Aceptar</v-btn>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </template>
              </v-dialog>

            </div>
          </v-container>
        </v-content>
    </v-app>
</template>

<script>

<<<<<<< Updated upstream
import MainNavEmployer from "../components/main-nav-employer";
import BtnCreateDialog from "../components/btn-create-dialog";
export default {
  name: "create-job-ad",
  components: {
    BtnCreateDialog,
    MainNavEmployer
  },
=======

import JobOfferApiService from "../core/services/jobOffer-api-service";

export default {
  name: "create-job-ad",
  data: () => ({
      position: "",
      title: "",
      description: "",
      salary: "",
      location: "",
      jobType: "",
      experience:"",
      items_experience: ["Without experience", "6 month - 1 year", "2 years - 3 years" , "3 or more years"],
      items_tipo: [ "Full-Time", "Part-Time", "Semi-Full"]
    }
  ),
  methods: {
    createAd(){
      let jobOffer = {
        name: this.title,
        description: this.description,
        salary: this.salary,
        workplace: this.location,
        type: this.jobType,
        experience: this.experience
      }
      JobOfferApiService.create(jobOffer)
          .then(() => {
            // this.$router.push("/home-employer");
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }
>>>>>>> Stashed changes
}
</script>

<style scoped>
#princ-cont{
  margin-top: 5%;
  margin-bottom: 5%;
  background: whitesmoke;
  border-radius: 20px;
  width: 90%;
}
</style>