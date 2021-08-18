import Vue from 'vue';
import VueRouter from 'vue-router';


const Home = () => import('../views/home/Home')
const Classify = () => import('../views/classify/Classify')
const Shopping = () => import('../views/shopping/Shopping')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router