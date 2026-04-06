import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/services', component: () => import('../pages/Services.vue'), name: 'Services' },
    { path: '/professionals', component: () => import('../pages/Professionals.vue'), name: 'Professionals' },
    { path: '/marketplace', component: () => import('../pages/Marketplace.vue'), name: 'Marketplace' },
    { path: '/companies', component: () => import('../pages/Companies.vue'), name: 'Companies' },
    { path: '/register', component: () => import('../pages/Register.vue'), name: 'Register' },
    { path: '/verify-email', component: () => import('../pages/VerifyEmail.vue'), name: 'VerifyEmail' },
    { path: '/pricing', component: () => import('../pages/Pricing.vue'), name: 'Pricing' },
    { path: '/ai-guardian', component: () => import('../pages/AiGuardian.vue'), name: 'AiGuardian' },
    { path: '/ai-business', component: () => import('../pages/AiBusiness.vue'), name: 'AiBusiness' },
    { path: '/how-it-works', component: () => import('../pages/HowItWorks.vue'), name: 'HowItWorks' },
    { path: '/for-tutors', component: () => import('../pages/ForTutors.vue'), name: 'ForTutors' },
    { path: '/blog', component: () => import('../pages/Blog.vue'), name: 'Blog' },
    { path: '/contact', component: () => import('../pages/Contact.vue'), name: 'Contact' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router
