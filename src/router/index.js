import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from '@/constants'
import HomePage from '../pages/HomePage.vue'
import CocktailPage from '../pages/CocktailPage.vue'
import RandomCocktail from '../pages/RandomCocktail.vue'

const router = createRouter({
  // history: createWebHistory('process.env.BASE_URL'),
  history: createWebHistory('/cocktails/'),

  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: HomePage
    },
    {
      path: ROUTES_PATHS.COCKTAIL,
      name: ROUTES_PATHS.COCKTAIL,
      component: CocktailPage
    },
    {
      path: ROUTES_PATHS.RANDOM_COCKTAIL,
      name: ROUTES_PATHS.RANDOM_COCKTAIL,
      component: RandomCocktail
    },
    
  ]
})

export default router
