<template>
  <v-app>
    <main-nav-postulant></main-nav-postulant>
    <v-main class="grey lighten-3">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import MainNavPostulant from "./components/main-nav-postulant";
export default {
  components: {
    MainNavPostulant
  },
  data: () => ({
    //
  })
}
</script>

<style>
main {
  background-image: url("assets/fondo.png");
  background-size: cover;
}
</style>
