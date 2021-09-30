<template>
  <v-app>
    <main-nav-employer></main-nav-employer>
    <v-main class="grey lighten-3">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>


import MainNavEmployer from "@/components/main-nav-employer";

export default {
  components: {
    MainNavEmployer,

  },
  data: () => ({
    //
  })
}
</script>

<!--  <v-btn plain to="/home" color="white">Home</v-btn> |
      <v-btn plain to="/homepage" color="white">Casita</v-btn> |
      <v-btn plain to="/about" color="white">About</v-btn>-->