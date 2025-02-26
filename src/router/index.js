import { createRouter, createWebHistory } from 'vue-router'
import CurrentView from '../views/CurrentView.vue'
import ArchivesView from '../views/ArchivesView.vue'
import ResourcesView from '../views/ResourcesView.vue'
import JournalsView from '../views/JournalsView.vue'
import PoetryView from '../views/PoetryView.vue'
import EducationView from '../views/EducationView.vue'
import ArtworksView from '../views/ArtworksView.vue'
import EssaysView from '../views/EssaysView.vue'
import ProgramDescriptionView from '../views/ProgramDescriptionView.vue'
import ArchivesNewsletterView from '../views/ArchivesNewsletterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'current',
      component: CurrentView
    },
    {
      path: '/journals',
      name: 'journals',
      component: JournalsView
    },
    {
      path: '/archives',
      name: 'archives',
      component: ArchivesView
    },
    {
      path: '/archives/programs',
      name: 'programs',
      component: ArchivesView
    },
    // {
    //   path: '/archives/programs/philosophy',
    //   name: 'philosophy',
    //   component: ProgramDescriptionView
    //   // would theoretically be a program key thing??? but leaving it as this for now
    // },
    {
      path: '/archives/programs/:program_key',
      name: 'program',
      component: ProgramDescriptionView
    },
    {
      path: '/archives/newsletter',
      name: 'newsletter',
      component: ArchivesNewsletterView
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView
    },
    {
      path: '/poetry',
      name: 'poetry',
      component: PoetryView
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView
    },
    {
      path: '/essays',
      name: 'essays',
      component: EssaysView
    },
    {
      path: '/artworks',
      name: 'artworks',
      component: ArtworksView
    }
  ]
})

export default router


// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import('../views/ResourcesView.vue')
