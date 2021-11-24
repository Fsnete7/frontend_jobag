
<template>
  <v-content  align="center" >


      <v-col align="center"  >
      <v-row class="align-center justify-center">
        <h2 style="color: #1955AE" class="align-center" >COMPANY PROFILE
        </h2>
      </v-row>

      <v-row class="v-text-field align-center justify-center"  max-width="1200">

        <v-text-field
            v-model="direction"
            :disabled="isUpdating"
            filled
            color="blue-grey lighten-2"
            label="Direction"
        ></v-text-field>
        <v-text-field
            v-model="district"
            :disabled="isUpdating"
            filled color="blue-grey lighten-2"
            label="Dsitrict" class="align-center"
        ></v-text-field>
        <v-text-field v-model="city"
                      :disabled="isUpdating"
                      filled color="blue-grey lighten-2"
                      label="City" class="align-center"
        ></v-text-field>
        <v-text-field
            v-model="country"
            :disabled=false
            filled
            color="blue-grey lighten-2"
            label="Country"
        ></v-text-field>
      </v-row>


      <template>
        <v-file-input
            show-size
            label="Attach business photos"
        ></v-file-input>
      </template>

        <v-select
            :items="sectors"
            v-model="sector"
            item-text="name"
            item-key="sectors"
            item-value="id"
            return-object
            filled
            @change="checkAnswer"
            label="Sector"
        ></v-select>

      <v-row class="align-center justify-center">
        <v-btn color="#1955AE"
               dark  @click="create()">Continue</v-btn>
      </v-row>
      </v-col>

  </v-content>
</template>


<script>


import CompanyProfilesApiService from "../core/services/company-profile-api-service";
import SectorsApiService from "../core/services/sectors-api-service"
import router from "../router";
export default {
  name: "business-profile",

  data: () => ({
    direction: '',
    district: '',
    city:'',
    country:'',
    sector: '',
    sectors: [],
  }),
  async created() {

    try {
      const response = await SectorsApiService.getAll()
      this.sectors= response.data;
    }
    catch (e)
    {
      console.error(e);
    }
  },
  methods:{
    create(){
      let companyProfile = {
        direction: this.direction,
        district: this.district,
        city: this.city,
        country: this.country,
        employerId: this.$route.params.id,
        sector: this.sector,
      }
        CompanyProfilesApiService.create(companyProfile);
        router.push({ path: `/${companyProfile.employerId}/home-employer` })
    },

  }
}
</script>

<style scoped>
.v-text-field{
  width: 400px;
}
</style>
