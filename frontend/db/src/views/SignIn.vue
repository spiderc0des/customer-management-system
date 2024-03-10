<template>
  <div class="signin">

    <h1>Sign in</h1>

    <div class="div1">

      <form @submit.prevent = 'submitForm'>

        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" placeholder="Username" required>

        <label for="password">Password</label>
        <input :type="passwordType" v-model="password" id="password" placeholder="Password" required>
        <box-icon class="password-visibility" @click="toggleVisibility" :name=showPassword color='#141313' ></box-icon>
        

    
        <button>sign in</button>


      </form>




    </div>

    

    

   
   
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'SignIn',
  components: {
    
  },
  data() {
    return {
      username: "",
      password: "",
      showPassword: 'show',
      passwordType: 'password'
      
    }
  
  },
  methods: {
    submitForm() {

      axios.defaults.headers.common['Authorization'] = ''

      localStorage.removeItem('token')

      const formData = {
        username: this.username,
        password: this.password,
      

      }

      axios 
          .post('/dj-rest-auth/login/', formData)
          .then(response => {

            const token = response.data.key
            
            this.$store.commit('setToken', token)
            axios.defaults.headers.common['Authorization'] = `Token  ${token}`

            localStorage.setItem('token',token)

            console.log(token)

            this.$router.push('/profile')
          })
          .catch(error => {
            if(error.response.data){
              alert(error.response.data.non_field_errors)
            }
          });
      
    },
    toggleVisibility() {
      if (this.showPassword === 'hide') {
        this.showPassword = 'show';
        this.passwordType = 'password'; 
      } else {
        this.showPassword = 'hide';
        this.passwordType = 'text'; 
      }
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
  border-radius: 10px;
  font-size: 25px;
  font-weight: 700;
  padding: 20px;
  background-color: grey;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  justify-self: center;
  width: 400px;
}

.password-visibility {
  position: relative;
  left: 400px;
  bottom: 68px;
  opacity: 0.5;
}

.password-visibility:hover {
  opacity: 1;
}
</style>