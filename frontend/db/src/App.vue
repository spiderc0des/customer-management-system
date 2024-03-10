<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link v-if="!$store.state.isAuthenticated" to="/sign-in">Sign in</router-link> 
    <router-link v-if="!$store.state.isAuthenticated"  to="/sign-up">Sign up</router-link> 
    <router-link v-if="$store.state.isAuthenticated" to="/profile">Profile</router-link> 
    <router-link v-if=" isStaff && $store.state.isAuthenticated" to="/manage-customers">Manage customers</router-link>
    <a v-if="$store.state.isAuthenticated" href="#" @click.prevent="logOut()" class="logout-link">Log out</a>
  </nav>
  <router-view/>
</template>


<script>
import axios from 'axios'

export default {
  name: 'App',

  data() {
    return {
    isStaff: localStorage.getItem('isStaff') === 'true'
    

    }
  },
  berforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
    }else {
      axios.defaults.headers.common['Authorization'] = " " 
    }
  },
  methods: {
    logOut(){
      axios.defaults.headers.common['Authorization'] = ''
      localStorage.removeItem('token')
      localStorage.removeItem('isStaff')
      this.$store.commit('removeToken')
      this.$router.push('/')
    }
  }
  
}
</script>





<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: whitesmoke;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 25px;
  margin: 10px;
  
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logout-link {
  color: red; 
  cursor: pointer;
  text-decoration: underline; 
}
</style>
