import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import CatalogView from '../views/CatalogView.vue'
import LookBookView from '../views/LookBookView.vue'
import CartComponent from "../components/CartComponent.vue"
import InfoView from '../views/InfoView.vue'
import CartView from '../views/CartView.vue'
import FavoriteView from '../views/FavoriteView.vue'
import DeliveryView from '../views/DeliveryView.vue'
import ResultView from '../views/ResultView.vue'


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
    component: CatalogView
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: FavoriteView,
    props: true
  },
  {
    path: '/carts',
    name: 'Cart',
    component: CartComponent,
    props: true
  },
  {
    path: '/result',
    name: 'Result',
    component: ResultView,
    props: true
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: DeliveryView,
    props: true
  },
  {
    path: '/cartproduct/:article',
    name: 'CartProduct',
    component: CartView,
    props: true
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationView,
  },
  {
    path: '/lookbook',
    name: 'LookBook',
    component: LookBookView,
  },
  {
    path: '/info',
    name: 'Info',
    component: InfoView,
  },
  {
    path: '/about',
    name: 'About',
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
