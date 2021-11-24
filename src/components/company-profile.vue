<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-col align="center" justify="center">
          <h2 style="color: #1955AE" class="text-center" >COMPANY PROFILE</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-col cols="12" sm="10" md="10" >
              <v-text-field color="#1955AE" label="Occupation" v-model="Occupation" :rules="OccupationRules" required
                            outlined style="max-width: 400px">Occupation</v-text-field>
              <v-text-field color="#1955AE" label="RUC" v-model="ruc" :rules="rucRules" required
                            outlined style="max-width: 400px"></v-text-field>
              <v-text-field color="#1955AE" label="Description" v-model="Description" :rules="DescriptionRules" required
                            outlined style="max-width: 400px"></v-text-field>
              <div class="text-center">
                <v-select v-model="Language" :items="itemsLan" :rules="LanguageRules" required
                          outlined label="Language" multiple></v-select>
              </div>

              <v-text-field color="#1955AE" label="Studies" v-model="Studies" :rules="StudiesRules" required
                            outlined style="max-width: 400px"></v-text-field>
              <div class="text-center">
                <v-file-input show-size label="File input"></v-file-input>
              </div>
              <v-card-text class="text-center">
                <h2 class="text-h6 mb-2"> Choose Competencies </h2>
                <v-chip-group column multiple>
                  <v-chip filter outlined> Work in group </v-chip>
                  <v-chip filter outlined> Tolerance </v-chip>
                  <v-chip filter outlined> Have initiative </v-chip>
                  <v-chip filter outlined> Take decisions </v-chip>
                  <v-chip filter outlined> Learning ability </v-chip>
                </v-chip-group>
              </v-card-text>
              <v-checkbox class="text-center" v-model="Terms" :rules="TermsRules" required>
                <template v-slot:label >
                  <div >
                    <b>I have read and agree to the terms and conditions.</b>
                  </div>
                </template>
              </v-checkbox>
              <router-link :to="{name: 'home_employer'}" style=" text-decoration: none">
                <v-btn color="#1955AE" style="width: 100% ; max-width: 400px;
                    font-size: 18px; height: 50px; border-radius: 15px; color:white" to="103/home-employer" >Register</v-btn>
              </router-link>
            </v-col>
          </v-form>
        </v-col>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ProfessionalProfileApiService from '../core/services/professional-profile-api-service';
export default {
  name: "company-profile",
  data: () => ({

    //FORM
    valid: true,
    user: '',
    Occupation: '',
    OccupationRules: [
      v => !!v || 'Occupation is required',
    ],
    ruc: '',
    rucRules: [
      v => !!v || 'RUC is required',
    ],
    show1: false,
    Description: '',
    DescriptionRules: [
      v => !!v || 'Description is required',
    ],
    show2: false,
    Language: '',
    LanguageRules: [
      v => !!v || 'Language is required',
    ],
    Studies: '',
    StudiesRules: [
      v => !!v || 'Studies is required',
    ],
    Competency: '',
    CompetencyRules: [
      v => !!v || 'Competency is required',
    ],
    Terms: '',
    TermsRules: [
      v => !!v || 'Accept terms and conditions',
    ],
    itemsLan: ['Spanish', 'English', 'Japanese', 'Mandarin', 'Hindi', 'Arabic', 'Portuguese'],
  }),

  methods: {
    Home() {
      ProfessionalProfileApiService.Home();
    }
  },
}
</script>
<style scoped>
h2 {
  font-size: 2em;
}
.text-center{
  width: 400px;
}
</style>

