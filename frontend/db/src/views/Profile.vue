<template>
    <div class="profile">

        <h1>User Profile</h1>
        
        
       

        <div class="user-avater-container">

            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="user-avater">

        </div>


        <div class="user-container">
            <h2 class="user-info">User Info</h2>

            <box-icon class="edit" name='edit-alt' @click="enableInput"></box-icon>

         
            <p>Username: <input type="text" class="data" v-model="username" disabled ></p>

            <p>First Name: <input type="text" class="data" v-model="first_name" :disabled="isInputDisabled" required></p>

            <p>Last Name: <input type="text" class="data" v-model="last_name" :disabled="isInputDisabled" required></p>

            <p>Date of Birth: <input type="date" class="data date" v-model="date_of_birth" :disabled="isInputDisabled" required></p>

            <p>City: <input type="text" class="data" v-model="city" :disabled="isInputDisabled" required></p>

            <p>Country: <input type="text" class="data" v-model="country" :disabled="isInputDisabled" required></p>
        

            <button v-if="!isInputDisabled" class="update-profile-btn" @click="updateInfo">update profile</button>

        </div>
      
    </div>
</template>


<script>
import 'boxicons'
import axios from 'axios';
export default {
    name: 'Pro-file',
    components: {

    },
    data(){
        return{
        
            username: '',
            first_name: '',
            last_name: '',
            date_of_birth: '',
            city: '',
            country: '',

            id : localStorage.getItem('id'),
            isInputDisabled: true
           
        }

    },
    mounted() {
        this.fetchUserInfo();
        this.checkIsStaff();
        this.getUserId();

       
    },
    methods: {
        fetchUserInfo(){
            axios
                .get(`db/customer/${this.id}`)
                .then(response => {

                    const userInfo = response.data;

                    this.username= userInfo.username,
                    this.first_name= userInfo.first_name
                    this.last_name = userInfo.last_name
                    this.date_of_birth = userInfo.date_of_birth
                    this.city = userInfo.city
                    this.country = userInfo.country
            
                    

                })
                .catch(error => {
                     if (error.response.data) {
                        console.log(error.response.data)
                        
                    }
                })
        },
        checkIsStaff() {
             axios
                .get('/dj-rest-auth/user/')
                .then(response => {
                    const isStaff = response.data.is_staff
                    localStorage.setItem('isStaff', isStaff)
                    
                })
        },

        enableInput() {
            this.isInputDisabled = false;
        },

        updateInfo() {
            const formData = {
                first_name: this.first_name,
                last_name: this.last_name,
                date_of_birth: this.date_of_birth,
                city: this.city,
                country: this.country,

                
            }

            axios 
                .put(`db/customer/${this.id}/`, formData)
                .then(response => {
                    if(response.status === 200){
                        alert("profile updated")
                    }

                })
                .catch(error => {
                    if (error.response) {
                                    
                        this.error = error.response.data.error; 
                        alert(this.error); 

                    }
                })

        },
        getUserId() {
            axios
            .get('/dj-rest-auth/user/')
            .then(response => {
                const pk = response.data.pk

                localStorage.setItem('id', pk)

                this.$store.commit('setUserId', pk)
            })

        }
      
    }
        
}
</script>


<style>

h1 {
    text-align: center;
}

.user-avater-container {
    height: 250px;
    width: 800px;
    padding: 20px;
    position: relative;
    background-color: whitesmoke;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.user-avater {
    width: 200px;
    height: 200px;
    border: 2px inset white;
    border-radius: 100px;
}


.user-container {
    display: block;
    width: 800px;
    position: relative;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 20px;
    margin: auto;
    margin-top: 20px;
    
}

.edit {
    position: relative;
    margin-left: 750px;
    margin-top: -100px;
    z-index: 2;
    cursor: pointer;
    opacity: 0.5;
}

.edit:hover {
    opacity: 1;
}

.user-info {
    position: relative;
    margin-bottom:  30px;   
}

p {
    font-size: 25px;
    display: flex;
    align-items: baseline;
    
}

.data {
    margin: 0;
    margin-left: 12px;
    border: none;
    outline: none;
    padding: 0;
    background-color: transparent;
    font-size: 25px;
    
}

.date {
    width: 200px;
}

.update-profile-btn { 
  color: white; 
  border: none;
  width: 250px;
  padding: 10px 20px; 
  border-radius: 5px; 
  cursor: pointer; 
  transition: background-color 0.3s;
  border-radius: 10px;
  font-size: 25px;
  font-weight: 700;
  background-color: grey;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  justify-self: center;
}

.update-profile-btn:hover {
  background-color: #0056b3; 
}

</style>