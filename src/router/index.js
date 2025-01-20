
import { createRouter, createWebHistory } from 'vue-router'


import AdminForm from '@/views/AdminForm.vue'
import HomeView from '@/views/HomeView.vue'
import Results from '@/views/Results.vue'
import Candidates from '@/views/Candidates.vue'
import Deadline from '@/views/Deadline.vue'
import AddCandidates from '@/views/AddCandidates.vue'
import EditCandidate from '@/views/EditCandidate.vue'

const routes = [
  {
    path: '/',
    name: 'AdminForm',
    component: AdminForm
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/Candidates',
    name: 'Candidates',
    component: Candidates
  },
  {
    path: '/Results',
    name: 'Results',
    component: Results
  },
  {
    path: '/Deadline',
    name: 'Deadline',
    component: Deadline
  },
  {
    path: '/AddCandidates',
    name: 'AddCandidates',
    component: AddCandidates
  },
  {
    path: '/EditCandidate/:id',
    name: 'EditCandidate',
    component: EditCandidate,
    props: true
  },
  

]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router