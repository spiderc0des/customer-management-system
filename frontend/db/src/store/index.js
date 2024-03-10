import axios from 'axios'
import { createStore } from 'vuex'

export default createStore ({
    state: {
        user:{
            username:""
        },
        isAuthenticated: true,
        token:"",
        userId: null,
        isStaff: false
    },
    getters: {

    },
    mutations: {
        initializeStore(state){
            if (localStorage.getItem("token")){
                state.token = localStorage.getItem("token"),
                state.isAuthenticated = true

                axios.defaults.headers.common['Authorization'] = `Token ${state.token}`
            }
            else {
                state.token = "",
                state.isAuthenticated = false
            }
        },

        setToken(state, token){
            state.token = token,
            state.isAuthenticated = true
        },
        removeToken(state){
            state.token = "",
            state.isAuthenticated = false

            delete axios.defaults.headers.common['Authorization'];
        },
        setUserId(state, userId){
            state.userId = userId
        },
        setIsStaff(state, isStaff){
            state.isStaff = isStaff
            
        }
    },
    actions: {

    },
    modules: {

    }
})
