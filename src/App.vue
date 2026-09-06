<template>
  <Header />
  <main class="main-content">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <Footer />
</template>

<script setup>
import { useHead } from '@unhead/vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const SITE_URL = import.meta.env.VITE_APP_URL || 'https://2pets.com.br'

// App-wide defaults — individual pages override via useHead().
useHead({
  titleTemplate: (title) => (title ? `${title} — 2pets` : '2pets — Plataforma de Cuidados Pet'),
  htmlAttrs: { lang: 'pt-BR' },
  meta: [
    { name: 'description', content: 'Encontre veterinários, clínicas e petshops próximos a você. Agende consultas, gerencie a saúde do seu pet e receba lembretes de vacina. A plataforma #1 para tutores pet no Brasil.' },
    { name: 'theme-color', content: '#5D87FF' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: '2pets' },
    { property: 'og:locale', content: 'pt_BR' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'canonical', href: SITE_URL + '/' },
  ],
  // Schema.org — LocalBusiness com foco em VeterinaryCare marketplace.
  // Aparece no "pack local" do Google para buscas do tipo "veterinário perto de mim".
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '2pets',
        url: SITE_URL,
        logo: SITE_URL + '/icons/icon-512x512.png',
        sameAs: [],
        description: 'Plataforma digital do mundo pet — conecta tutores a veterinários, clínicas e petshops.',
        areaServed: {
          '@type': 'Country',
          name: 'Brasil',
        },
      }),
    },
  ],
})
</script>

<style scoped>
.main-content {
  padding-top: 80px;
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
