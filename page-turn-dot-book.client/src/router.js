import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/club',
    name: 'CreateClub',
    component: loadPage('CreateClubPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }, {
    path: '/book/:isbn',
    name: 'Book',
    component: loadPage('BookPage'),
  }, {
    path: '/clubs/:clubId',
    name: 'Club',
    component: loadPage('ClubPage')
  }, {
    path: '/search',
    name: 'Search',
    component: loadPage('SearchResultsPage')
  }, {
    path: '/profiles/:profileId',
    name: 'Profile',
    component: loadPage('ProfilePage')
  }


]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
