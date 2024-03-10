<template>
  <div class="sign-up">

    <h1>Sign up</h1>

    <div class="div1">

      <form @submit.prevent = 'submitForm'>

        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" placeholder="Username" required>

        <label for="password1">Password</label>
        <input type="password" v-model="password1" id="password1" placeholder="Password" required>

        <label for="password2">Re-type password</label>
        <input type="password" v-model="password2" id="password2" placeholder="Re-type password" required>


        <button>sign up</button>


      </form>




    </div>

    

    

   
   
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'SignUp',
  components: {
    
  },
  data() {
    return {
      username: "",
      password1: "",
      password2: ""

    }
  
  },
  methods: {
    submitForm() {
      const formData = {
        username: this.username,
        password1: this.password1,
        password2: this.password2

      }

      axios 
          .post('/dj-rest-auth/registration/', formData)
          .then(response => {
            console.log(response)

            this.$router.push('/sign-in')
          })
          .catch(error => {
            if (error.response.data.username){
              alert(error.response.data.username)  
            }
            else if (error.response.data.password1){
              alert(error.response.data.password1)
            }
            else if (error.response.data.non_field_errors){
              alert(error.response.data.non_field_errors)
            }
          })

    }

  }
}
</script>


<style scoped>


h1 {
  font-size: 40px;
}

.div1 {
  width: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: row;
  margin: auto;

}


label {
  display: flex;
  color: black;
  position: relative;
  margin: auto;
  font-size: 25px;
  margin-top: 30px;

}


input {
  display: flex;
  position: relative;
  margin: 20px 0;
  margin-top: 10px;
  width: 400px;
  height: 30px;
  border-radius: 10px;
  padding: 20px;
  font-size: 25px;
}


button {
  width: 400px;
  border-radius: 10px;
  font-size: 25px;
  font-weight: 700;
  padding: 20px;
  background-color: grey;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  justify-self: center;
}
</style>