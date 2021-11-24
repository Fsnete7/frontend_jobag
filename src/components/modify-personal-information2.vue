<template>
  <v-content >
    <div align="center" v-if="edit===0">
      <v-row class="align-center justify-center">
        <h2 style="color: #1955AE" class="align-center" >
          PERSONAL INFORMATION</h2>
      </v-row>

      <v-row class="v-text-field align-center justify-center"  max-width="1200">
        <v-text-field v-model="users.firstName" :disabled="isUpdating"
                      filled color="blue-grey lighten-2"
                      label="First Name" class="align-center"></v-text-field>
        <v-text-field v-model="users.lastName" :disabled="isUpdating"
                      filled color="blue-grey lighten-2"
                      label="Last Name" class="align-center"></v-text-field>
        <v-text-field v-model="users.phoneNumber" :disabled="isUpdating"
                      filled color="blue-grey lighten-2"
                      label="Phone number" class="align-center"></v-text-field>
        <v-text-field v-model="users.email" :disabled="isUpdating"
                      filled color="blue-grey lighten-2"
                      label="Email" class="align-center"></v-text-field>
        <v-text-field
            v-model="users.passWord"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'users.passWord'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>
      </v-row>

      <v-row class="align-center justify-center">
        <v-btn color="white" class="style"
               dark @click="editar()">Edit
        </v-btn>
      </v-row>
      &nbsp;
    </div>


<!--EDIT-->
    <div align="center" v-else-if="edit===1">
      <v-row class="align-center justify-center">
        <h2 style="color: #1955AE" class="align-center" >
          PERSONAL INFORMATION</h2>
      </v-row>

      <v-row class="v-text-field align-center justify-center"  max-width="1200">
        <v-text-field v-model="firstname" :disabled="isUpdating"
                      filled color="blue-grey lighten-2"
                      label="First Name" class="align-center"></v-text-field>
        <v-text-field v-model="lastname" :disabled="isUpdating"
                      filled color="blue-grey lighten-2"
                      label="Last Name" class="align-center"></v-text-field>
        <v-text-field v-model="phone" :disabled="isUpdating"
                      filled color="blue-grey lighten-2"
                      label="Phone number" class="align-center"></v-text-field>
        <v-text-field v-model="email" :disabled="isUpdating"
                      filled color="blue-grey lighten-2"
                      label="Email" class="align-center"></v-text-field>
        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>
      </v-row>

      <v-row class="align-center justify-center">
        <v-btn color="#1955AE"
               dark @click="save()">Save
        </v-btn>
      </v-row>
      &nbsp;
    </div>

  </v-content>
</template>

<script>
import UsersApiService from "../core/services/users-api-service";

export default {
  name: "modify-personal-information2",
  data: () => ({
    users: [],
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    email:'',

    edit:0,

    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
  }),
  async created() {

    try {
      const response = await UsersApiService.getById(101);
      this.users = response.data;

    }
    catch (e)
    {
      console.error(e);
    }
  },
  async beforeCreate(){
    try {
      const response = await UsersApiService.getById(101);
      this.users = response.data;
      this.edit=0;
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
    save() {
      this.edit=0;
      this.users.firstname=this.firstname;
      this.users.lastName=this.lastname;
      this.users.phoneNumber=this.phone;
      this.users.email=this.email;
      this.users.passWord=this.password;
      UsersApiService.update(101,this.users);

      this.created();
    }

    }
}
</script>

<style scoped>
.v-text-field{
  width: 400px;
}
.style{
  color: black;
}
</style>
