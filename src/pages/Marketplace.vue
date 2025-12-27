<template>
  <div class="marketplace-page">
    <!-- Hero Search Section -->
    <section class="search-hero">
      <div class="container">
        <h1>{{ $t('marketplace.hero.title') }}</h1>
        <p class="subtitle">{{ $t('marketplace.hero.subtitle') }}</p>
        
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery" 
            :placeholder="$t('marketplace.search.placeholder')"
            @keyup.enter="performSearch"
          />
          <button @click="performSearch" class="btn btn-primary">
            <span class="material-icons-outlined">search</span>
            {{ $t('marketplace.search.button') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="trust-section">
      <div class="container">
        <div class="trust-grid">
          <div class="trust-item">
            <span class="material-icons-outlined">verified</span>
            <p>Parceiros Verificados</p>
          </div>
          <div class="trust-item">
            <span class="material-icons-outlined">savings</span>
            <p>Melhores Descontos</p>
          </div>
          <div class="trust-item">
            <span class="material-icons-outlined">support_agent</span>
            <p>Suporte 24/7</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories / Results -->
    <section class="results-section">
      <div class="container">
        <h2 v-if="showResults" class="results-title">
          {{ $t('marketplace.search.simulated_results') }} "{{ lastQuery }}"
        </h2>
        
        <div class="offers-grid">
          <div class="offer-card" v-for="(item, index) in displayItems" :key="index">
            <div class="offer-image">
              <span class="material-icons-outlined category-icon">{{ item.icon }}</span>
              <div class="discount-badge">-{{ item.discount }}%</div>
            </div>
            <div class="offer-content">
              <div class="category-tag">{{ item.category }}</div>
              <h3>{{ item.title }}</h3>
              <p class="price-row">
                <span class="original-price">R$ {{ item.originalPrice }}</span>
                <span class="final-price">R$ {{ item.finalPrice }}</span>
              </p>
              <div class="lock-overlay">
                <span class="material-icons-outlined">lock</span>
                <p>{{ $t('marketplace.promo_card.unlock') }}</p>
                <router-link to="/register" class="btn btn-primary btn-sm">{{ $t('common.register') }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="partners-section">
      <div class="container">
        <h2>Marcas Parceiras</h2>
        <div class="partners-grid">
          <div class="partner-logo">Royal Canin</div>
          <div class="partner-logo">Petz</div>
          <div class="partner-logo">Cobasi</div>
          <div class="partner-logo">Zee.Dog</div>
          <div class="partner-logo">Bravecto</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: '2Pets Marketplace - Ofertas e Produtos',
  meta: [
    { name: 'description', content: 'Encontre as melhores ofertas em produtos e serviços para seu pet. Ração, brinquedos, farmácia e muito mais.' }
  ]
})

const searchQuery = ref('')
const lastQuery = ref('')
const showResults = ref(false)

const defaultItems = [
  { title: 'Ração Premium 15kg', icon: 'restaurant', discount: 15, originalPrice: '289,90', finalPrice: '246,40', category: 'food' },
  { title: 'Consulta Veterinária', icon: 'medical_services', discount: 20, originalPrice: '150,00', finalPrice: '120,00', category: 'services' },
  { title: 'Banho e Tosa Completo', icon: 'content_cut', discount: 10, originalPrice: '80,00', finalPrice: '72,00', category: 'grooming' },
  { title: 'Antipulgas Simparic', icon: 'medication', discount: 25, originalPrice: '120,00', finalPrice: '90,00', category: 'pharmacy' },
  { title: 'Caminha Nuvem G', icon: 'bed', discount: 30, originalPrice: '199,90', finalPrice: '139,90', category: 'toys' },
  { title: 'Brinquedo Interativo', icon: 'sports_baseball', discount: 15, originalPrice: '49,90', finalPrice: '42,40', category: 'toys' },
]

const displayItems = computed(() => {
  return defaultItems
})

function performSearch() {
  if (!searchQuery.value) return
  lastQuery.value = searchQuery.value
  showResults.value = true
  // In a real app, we would filter. Here we just show the "results" title to simulate
}
</script>

<style lang="scss" scoped>
.marketplace-page {
  padding-bottom: 80px;
}

.search-hero {
  padding: 80px 0 60px;
  background: var(--primary);
  text-align: center;
  color: white;
  
  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 15px;
  }
  
  .subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 40px;
  }
  
  .search-box {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 10px;
    border-radius: 50px;
    display: flex;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    
    input {
      flex: 1;
      border: none;
      padding: 15px 25px;
      font-size: 1.1rem;
      border-radius: 50px;
      outline: none;
    }
    
    button {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 30px;
      border-radius: 40px;
      font-size: 1rem;
      
      span {
        font-size: 20px;
      }
    }
  }
}

.trust-section {
  padding: 30px 0;
  background: white;
  border-bottom: 1px solid #eee;

  .trust-grid {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;

    .trust-item {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--text-secondary);
      font-weight: 600;

      span {
        color: var(--primary);
        font-size: 24px;
      }
    }
  }
}

.results-section {
  padding: 60px 0;
  background: #f9fafb;
  
  .results-title {
    font-size: 1.5rem;
    margin-bottom: 30px;
    color: var(--text-main);
  }
  
  .offers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    
    .offer-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      border: 1px solid rgba(0,0,0,0.05);
      position: relative;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        
        .offer-content .lock-overlay {
          opacity: 1;
          backdrop-filter: blur(4px);
        }
      }
      
      .offer-image {
        height: 200px;
        background: #f3f4f6;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        
        .category-icon {
          font-size: 80px;
          color: #d1d5db;
        }
        
        .discount-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #ef4444;
          color: white;
          padding: 8px 12px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1rem;
          box-shadow: 0 4px 10px rgba(239, 68, 68, 0.3);
        }
      }
      
      .offer-content {
        padding: 25px;
        position: relative;

        .category-tag {
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--text-light);
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        
        h3 {
          font-size: 1.2rem;
          margin-bottom: 15px;
          color: var(--text-main);
          font-weight: 700;
        }
        
        .price-row {
          display: flex;
          align-items: center;
          gap: 15px;
          
          .original-price {
            text-decoration: line-through;
            color: var(--text-light);
            font-size: 1rem;
          }
          
          .final-price {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--primary);
          }
        }
        
        .lock-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.95);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
          padding: 20px;
          text-align: center;
          
          span {
            font-size: 40px;
            color: var(--primary);
            margin-bottom: 15px;
          }
          
          p {
            font-size: 1rem;
            color: var(--text-main);
            margin-bottom: 20px;
            font-weight: 600;
          }
        }
      }
    }
  }
}

.partners-section {
  padding: 80px 0;
  text-align: center;
  background: white;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 50px;
    color: var(--text-main);
  }

  .partners-grid {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    opacity: 0.6;

    .partner-logo {
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--text-light);
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
}
</style>
