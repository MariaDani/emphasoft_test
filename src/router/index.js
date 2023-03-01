import Login from '@/components/Login.vue'
import UserList from '@/components/UserList.vue'
import ErrorPage from '@/components/ErrorPage.vue'
import AddUser from '@/components/AddUser.vue'
import EditProfile from '@/components/EditProfile.vue'
import EditingForm from '@/components/EditingForm.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Login
  },

  {
    path: '/userlist',
    component: UserList,
  },

  {
    path: '/userlist/:id',
    component: EditProfile,
    children: [
      {path: '', component: EditingForm}
    ]
  },

  {
    path: '/adduser',
    component: AddUser
  },

  {
    path: '/error',
    component: ErrorPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
