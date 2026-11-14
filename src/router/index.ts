import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "RoamCeylon | Sri Lanka's AI-Powered Tourism Super-App by IdeaTech",
      },
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
      meta: {
        title: 'Privacy Policy & Data Safety | RoamCeylon & RoamCeylon Admin',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 84,
      };
    }
    return { top: 0, behavior: 'smooth' };
  },
});

router.afterEach((to) => {
  if (typeof to.meta?.title === 'string') {
    document.title = to.meta.title;
  }
});

export default router;
