<template>
 <v-container>
   <h2 style="color: #1955AE" class="text-center">Postulantes</h2>
   <v-list>
     <v-list-item v-for="postulant in Postulants" :key="postulant">
       <v-list-item-content >
         <v-container fluid class="text-center" id="postulant_container">
           <v-row class="justify-space-around align-center">
             <h4>{{postulant.firstName + " " + postulant.lastName}}</h4>
             <v-icon small color="blue darken-2">mdi-comment-multiple</v-icon>
             <v-icon small color="blue darken-2">mdi-menu</v-icon>
             <v-avatar color="primary" size="40" >
               <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-avatar>
             <v-btn depressed to="/approved-postulant"><v-icon small color="blue darken-2">mdi-check</v-icon></v-btn>
             <v-icon small color="blue darken-2">mdi-close</v-icon>
           </v-row>
         </v-container>
       </v-list-item-content>
     </v-list-item>
   </v-list>
 </v-container>
</template>

<script>
import JobOfferApiService from "../core/services/jobOffer-api-service";
 import PostulantsApiService from "../core/services/postulants-api-service";

export default {

  name: "list-postulants",
  components: {  },
  data: () => ({
    Postulants:[]
  }),

  methods: {
    retrivePostulants(){
      JobOfferApiService.getPostulants(1).then(response => {
        for(let i = 0; i < response.data.length; i++){
          PostulantsApiService.getById(response.data[i].postulantId).then(response => {
            this.Postulants.push(response.data);
          })
        }
      }).catch(e => {
        console.log(e);
      });
    },
    
  },

  mounted() {
    this.retrivePostulants();
  },


}
</script>

<style scoped>
#postulant_container{
  background: whitesmoke;
  border-radius: 20px;
  width: 10%;
  padding: 20px;
}
</style>