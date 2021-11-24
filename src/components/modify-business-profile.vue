
<template>
  <v-content  align="center" >

    <div align="center" v-if="edit===0" >
      <v-col align="center"  >
      <v-row class="align-center justify-center">
        <h2 style="color: #1955AE" class="align-center" >COMPANY PROFILE
        </h2>
      </v-row>

      <v-row class="v-text-field align-center justify-center"  max-width="1200">

        <v-text-field
            v-model="companies.direction"

            :disabled="isUpdating"
            filled
            color="blue-grey lighten-2"
            label="Direction"
        ></v-text-field>
        <v-text-field
            v-model="companies.district"
            :disabled="isUpdating"
            filled color="blue-grey lighten-2"
            label="Dsitrict" class="align-center"
        ></v-text-field>
        <v-text-field v-model="companies.city"
                      :disabled="isUpdating"
                      filled color="blue-grey lighten-2"
                      label="City" class="align-center"
        ></v-text-field>
        <v-text-field
            v-model="companies.country"
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

      <v-row class="v-text-field align-center justify-center"  max-width="1200">
        <v-text-field v-model="sector.name" :disabled="isUpdating"
                      filled color="blue-grey lighten-2"
                      label="Sector" class="align-center"></v-text-field>

      </v-row>

      <v-row class="align-center justify-center">
        <v-btn color="#1955AE"
               dark  @click="editar()">Edit</v-btn>
      </v-row>
      </v-col>
    </div>

<!--EDIT-->

    <div align="center" v-else-if="edit===1" >
        <v-row class="align-center justify-center">
          <h2 style="color: #1955AE" class="align-center" >COMPANY PROFILE
          </h2>
        </v-row>

        <v-row class="v-text-field align-center justify-center"  max-width="1200">

          <v-text-field
              v-model="direction"
              filled
              color="blue-grey lighten-2"
              label="Direction"
          ></v-text-field>
          <v-text-field
              v-model="district"
              :disabled="isUpdating"
              filled color="blue-grey lighten-2"
              label="District" class="align-center"
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
                 dark  @click="save()">Save Changes</v-btn>
        </v-row>
    </div>

  </v-content>
</template>


<script>


import CompanyProfilesApiService from "../core/services/company-profile-api-service";
import SectorsApiService from "../core/services/sectors-api-service"
export default {
  name: "modify-business-profile",

  data: () => ({
    companies: [],
    actualProfile: 4,
    actualProfile2: 0,
    profile:{ direction: "",
      district: "",
      city: "",
      country: "",
      employerId: 0,
      sectorId: 0},
    value: null,
    items: [],
    direction: '',
    district: '',
    city:'',
    country:'',
    sector: [],
    sectors: [],
    sectorActual : [],
    edit:0,
    id:0
  }),
  async created() {

    try {
      const response = await CompanyProfilesApiService.getById(this.actualProfile);
      this.companies = response.data;
      const response2 = await SectorsApiService.getById(this.companies.sectorId)
      this.sector= response2.data;
      const response3 = await SectorsApiService.getAll()
      this.sectors= response3.data;
      this.sectorActual=this.sector;
      this.actualProfile=this.actualProfile2;
    }
    catch (e)
    {
      console.error(e);
    }
  },
  methods:{
    editar(){
      this.edit=1;
      this.created();
    },
    save(){
      this.companies.direction=this.direction;
      this.companies.district=this.district;
      this.companies.city=this.city;
      this.companies.country=this.country;

        CompanyProfilesApiService.update(2,this.companies);

      this.edit=0;
      this.created();

    },
    checkAnswer(ittem) {
      this.sectorActual=ittem;
    }
  }
}
</script>

<style scoped>
.v-text-field{
  width: 400px;
}
</style>
