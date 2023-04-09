import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import CatalogComponent from "../components/CatalogComponent.vue"
import CartComponent from "../components/CartComponent.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogComponent
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartComponent,
    props: true
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
