<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container header-content">
      <router-link to="/" class="logo">
        <span class="logo-text">2Pets</span>
      </router-link>

      <nav class="nav-menu">
        <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">{{ $t('common.menu.home') }}</router-link>
        <router-link to="/services" class="nav-link" :class="{ active: $route.path === '/services' }">{{ $t('common.menu.services') }}</router-link>
        <router-link to="/marketplace" class="nav-link" :class="{ active: $route.path === '/marketplace' }">Marketplace</router-link>
        <router-link to="/professionals" class="nav-link" :class="{ active: $route.path === '/professionals' }">{{ $t('common.menu.professionals') }}</router-link>
        <router-link to="/companies" class="nav-link" :class="{ active: $route.path === '/companies' }">{{ $t('common.menu.companies') }}</router-link>
        <router-link to="/pricing" class="nav-link" :class="{ active: $route.path === '/pricing' }">Planos</router-link>
        <router-link to="/ai-guardian" class="nav-link special-link">
          <span class="material-icons-outlined">smart_toy</span>
          AI Guardian
        </router-link>
        <router-link to="/ai-business" class="nav-link special-link business">
          <span class="material-icons-outlined">business_center</span>
          AI Business
        </router-link>
      </nav>

      <div class="header-actions">
        <div class="lang-switcher" @click="toggleLang">
          {{ currentLang === 'pt' ? 'EN' : 'PT' }}
        </div>
        <a href="http://localhost:9200/login" class="btn btn-outline btn-sm">{{ $t('common.login') }}</a>
        <router-link to="/register" class="btn btn-primary btn-sm">{{ $t('common.register') }}</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isScrolled = ref(false)

const currentLang = computed(() => locale.value)

function toggleLang() {
  locale.value = locale.value === 'pt' ? 'en' : 'pt'
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
  background: transparent;
  
  &.scrolled {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 15px 0;
  }
  
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary);
    text-decoration: none;
  }
  
  .nav-menu {
    display: flex;
    gap: 15px;
    align-items: center;
    
    .nav-link {
      font-weight: 500;
      color: var(--text-main);
      text-decoration: none;
      transition: color 0.3s ease;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.9rem;
      
      &:hover, &.active {
        color: var(--primary);
      }

      &.special-link {
        color: var(--primary);
        font-weight: 600;
        background: rgba(99, 102, 241, 0.1);
        padding: 4px 10px;
        border-radius: 20px;
        transition: all 0.3s ease;
        font-size: 0.85rem;

        &:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }

        .material-icons-outlined {
          font-size: 16px;
        }

        &.business {
          background: rgba(124, 58, 237, 0.1);
          color: #7c3aed;
          
          &:hover {
            background: #7c3aed;
            color: white;
          }
        }
      }
    }
  }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 15px;
    
    .lang-switcher {
      cursor: pointer;
      font-weight: 600;
      color: var(--text-light);
      padding: 5px;
      
      &:hover {
        color: var(--primary);
      }
    }
    
    .btn-sm {
      padding: 8px 16px;
      font-size: 0.9rem;
    }
  }
}
</style>
