import { createRouter, createWebHashHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Profile from '../views/Profile.vue'
import Home from '../views/Home.vue'
import ManageCustomers from '../views/ManageCustomers.vue'

import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/manage-customers',
    name: 'manage-customers',
    component: ManageCustomers,
    meta: {
      requireLogin: true
    }
  },

  {
    path: '/sign-up',
    name: 'sign-up',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/')
  }else {
    next()
  }
})

export default router
