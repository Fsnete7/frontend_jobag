<template>
  <div>
    <v-app-bar app color=#FFFFFF>
      <!--Drawer Icon-->
      <v-app-bar-nav-icon align="right" @click.stop="drawer = !drawer" color="#1955AE"></v-app-bar-nav-icon>

      <v-btn plain icon class="center" depressed to="/home-postulant">
          <v-avatar size="100">
            <v-img
                max-height="70"
                max-width="70"
                src="../assets/logo.png"></v-img>
          </v-avatar>
      </v-btn>

      <v-btn icon>
        <v-avatar right color=#1955AE size="50">
          <v-img
              max-height="50"
              max-width="50"
              src="https://imagenes.elpais.com/resizer/scDp4N5i3hPpyTudfS1SiOjR9kA=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/CXO5DJG7RJBMLJGJH3LBMZ3ARI"></v-img>
        </v-avatar>
      </v-btn>

      <h4 class="text_bienvenido"> Bienvenido</h4>
      <v-btn dark class="boton_logout" color="#EA4E4E" to="/login">Log Out</v-btn>
    </v-app-bar>



    <!--Drawer despegable-->
    <v-navigation-drawer color=#1955AE v-model="drawer" absolute temporary>
      <v-container class="text-center" style="width: 90%; margin-top: 20px">
        <v-row class="text_sidebar" >
          <p>Menu</p>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon align="right" @click.stop="drawer = !drawer" color="white"></v-app-bar-nav-icon>
        </v-row>
      </v-container>
      <v-divider style="background: white;margin-top: 8px"></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">

          <v-list-item  to="/home-postulant">
            <div class="color">
              Postulaciones
            </div>
          </v-list-item>

          <v-divider style="background: white;margin-top: 8px"></v-divider>

          <v-list-item  to="/my-postulations">
            <div class="color">
              Mis Postulaciones
            </div>
          </v-list-item>

          <v-divider style="background: white;margin-top: 8px"></v-divider>

          <v-list-item to="/my-interviews">
            <div class="color">
                Mis Entrevistas
            </div>
          </v-list-item>

          <v-divider style="background: white;margin-top: 8px"></v-divider>

          <v-list-item to="/my-account">
            <div class="color">
                Mi Cuenta
            </div>
          </v-list-item>

          <v-divider style="background: white;margin-top: 8px"></v-divider>

          <v-list-item>
            <div class="color">
              Configuración
            </div>
          </v-list-item>

          <v-divider style="background: white;margin-top: 8px"></v-divider>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


  </div>
</template>


<script>
export default {
  name: "main-nav-postulant",

  data: () => ({
    drawer: false,
    group: null,
    menuitems:[
      'Inicio',
      'Publicar anuncio',
      'Mis anuncios',
      'Entrevistas',
      'Mi cuenta',
      'Configuración',
      'Cerrar Sesión',
    ]
  }),
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>

<style>
.boton_logout{
  font-size: 18px;
  font-family: "Roboto", sans-serif;
}
.text_bienvenido{
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  padding: 10px 10px 10px 10px;
}

.text_sidebar{
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: white;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: 30%;
  width: 50%;
  position: center;
}

.color{
  color: #FAFCFF;
}
</style>
