<template>
  <v-app>
    <main-nav-postulant v-if="login===2"></main-nav-postulant>
    <main-nav-employer v-if="login===1"></main-nav-employer>
    <v-main class="grey lighten-3">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import MainNavPostulant from "./components/main-nav-postulant";
import MainNavEmployer from "./components/main-nav-employer";
export default {
  login:0,
  components: {
    MainNavEmployer,
    MainNavPostulant
  },
  data: () => ({
    login:0
  }),
  beforeUpdate() {
    this.refresh();
  },
  created() {
    this.refresh();
  },
  methods:{
    refresh(){

      if(this.$route.name === 'home-employer'  ||
          this.$route.name === 'create-ad'  ||
          this.$route.name === 'create-interview' ||
          this.$route.name === 'modify-business-profile'||
          this.$route.name === 'account-employer'||
          this.$route.name === 'modify-personal-information2'||
          this.$route.name === 'choose-postulant'){

        this.login=1
      }else if(this.$route.name === 'home-postulant' ||
          this.$route.name === 'mypostulations'||
          this.$route.name === 'my-interviews' ||
          this.$route.name === 'my-account' ||
          this.$route.name === 'modify-professional-profile' ||
          this.$route.name === 'modify-personal-information'
      ){
        this.login=2
      }else {
        this.login=0
      }
    }
  }

}
</script>

<style>
main {
  background-image: url("assets/fondo.png");
  background-size: cover;
}
</style>
