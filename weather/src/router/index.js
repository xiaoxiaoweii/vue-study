import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
const Home = () => import('../components/home/Home')
const Weather = () => import('../components/weather/Weather')
const Joke = () => import('../components/joke/Joke')
const About = () => import('../components/about/About')


Vue.use(Router)

const routes = [ 
  {
    path:'*',
    redirect:'/weather'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      store.dispatch('getAWord');
      next();
    }
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/joke',
    name: 'Joke',
    component: Joke
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },  
  routes,
  // mode:'history'
})
