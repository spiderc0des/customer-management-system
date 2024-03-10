<template>
    <div class="manage-customrs">

        <h1>Customers</h1>


         <div class="user-container" v-for="customer in customers" :key="customer.id" >
            <h2 class="user-info">User Info</h2>
            <box-icon class="edit" name='edit-alt' @click="enableInput"></box-icon>

            <box-icon class="trash" name='trash-alt' type='solid' color='#f10b0b' @click="deleteUser(customer)"></box-icon>
            
            <p>Username: <input type="text" class="data" v-model="customer.username" disabled ></p>

            <p>First Name: <input type="text" class="data" v-model="customer.first_name" :disabled="isInputDisabled" required></p>

            <p>Last Name: <input type="text" class="data" v-model="customer.last_name" :disabled="isInputDisabled" required></p>

            <p>Date of Birth: <input type="date" class="data date" v-model="customer.date_of_birth" :disabled="isInputDisabled" required></p>

            <p>City: <input type="text" class="data" v-model="customer.city" :disabled="isInputDisabled" required></p>

            <p>Country: <input type="text" class="data" v-model="customer.country" :disabled="isInputDisabled" required></p>
        

            <button v-if="!isInputDisabled" class="update-profile-btn" @click="updateInfo(customer)">update profile</button>

        </div>
      
        
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Manage-customer',
    components: {

    },
    data(){
        return{
            customers: [],
            isInputDisabled: true
           
        }

    },
    mounted() {
        this.fetchCustomersInfo();

       
    },
    methods: {
        fetchCustomersInfo(){
            axios
                .get(`db/customer/`)
                .then(response => {

                    this.customers = response.data;

                })
                .catch(error => {
                     if (error.response.data) {
                        console.log(error.response.data)
                        
                    }
                })
        },
        enableInput() {
            this.isInputDisabled = false;
        },
        updateInfo(customer) {

            const formData = {
                first_name: customer.first_name,
                last_name: customer.last_name,
                date_of_birth: customer.date_of_birth,
                city: customer.city,
                country: customer.country,

                
            }

            axios 
                .put(`db/customer/${customer.user}/`, formData)
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
        deleteUser(customer) {
            axios
                .delete(`db/customer/${customer.user}`)
                .then(response => {
                    if(response.status === 204){
                        alert(`${customer.username} deleted`)
                        this.fetchCustomersInfo()
                    }
        })
        }
    }
}

</script>



<style scoped>


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
    margin-left: 700px;
    margin-top: -100px;
    cursor: pointer;
    opacity: 0.5;
}

.edit:hover {
    opacity: 1;
    
}

.trash {
    cursor: pointer;
    opacity: 0.2;
    position: relative;
    margin-left: 10px;

}

.trash:hover {
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