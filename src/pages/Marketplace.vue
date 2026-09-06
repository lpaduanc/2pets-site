<template>
  <div class="marketplace-page">
    <section class="search-hero">
      <div class="container">
        <h1>Encontre profissionais pet perto de você</h1>
        <p class="subtitle">Veterinários, clínicas, petshops e banho & tosa — filtrados pela sua região.</p>

        <div class="search-box">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Buscar por nome, especialidade ou serviço"
            @keyup.enter="performSearch"
          />
          <button @click="performSearch" class="btn btn-primary" :disabled="loading">
            <span class="material-icons-outlined">search</span>
            {{ loading ? 'Buscando...' : 'Buscar' }}
          </button>
        </div>
      </div>
    </section>

    <section class="trust-section">
      <div class="container">
        <div class="trust-grid">
          <div class="trust-item">
            <span class="material-icons-outlined">verified</span>
            <p>CRMV verificado</p>
          </div>
          <div class="trust-item">
            <span class="material-icons-outlined">location_on</span>
            <p>Busca por proximidade</p>
          </div>
          <div class="trust-item">
            <span class="material-icons-outlined">schedule</span>
            <p>Agendamento online</p>
          </div>
        </div>
      </div>
    </section>

    <section class="results-section">
      <div class="container">
        <h2 v-if="hasSearched && !loading" class="results-title">
          <template v-if="professionals.length">
            {{ professionals.length }} {{ professionals.length === 1 ? 'profissional encontrado' : 'profissionais encontrados' }}<template v-if="lastQuery"> para "{{ lastQuery }}"</template>
          </template>
          <template v-else>
            Nenhum profissional encontrado{{ lastQuery ? ` para "${lastQuery}"` : '' }}.
          </template>
        </h2>
        <h2 v-else-if="!hasSearched" class="results-title">Profissionais em destaque</h2>

        <div v-if="error" class="empty-state">
          Não foi possível carregar os profissionais no momento. Tente novamente em instantes.
        </div>

        <div v-if="loading" class="empty-state">Carregando profissionais…</div>

        <div v-else class="offers-grid">
          <article
            v-for="pro in professionals"
            :key="pro.id"
            class="offer-card professional-card"
          >
            <div class="offer-image">
              <span v-if="pro.verified" class="verified-badge" title="CRMV verificado pela equipe 2pets">
                <span class="material-icons-outlined">verified</span>
              </span>
              <span class="material-icons-outlined category-icon">{{ iconFor(pro.professional_type) }}</span>
            </div>
            <div class="offer-content">
              <div class="category-tag">{{ pro.professional_type_label || 'Profissional' }}</div>
              <h3>{{ pro.name }}</h3>
              <p class="meta-row">
                <span class="material-icons-outlined">star</span>
                {{ (pro.average_rating || 0).toFixed(1) }}
                <span v-if="pro.reviews_count" class="reviews-count">({{ pro.reviews_count }})</span>
                <span v-if="pro.city" class="city"> · {{ pro.city }}</span>
              </p>
              <p v-if="pro.bio" class="bio">{{ truncate(pro.bio, 90) }}</p>

              <div class="lock-overlay">
                <span class="material-icons-outlined">lock</span>
                <p>Veja o perfil completo de <strong>{{ pro.name }}</strong> e agende uma consulta.</p>
                <router-link :to="`/register?from=pro&pro_id=${pro.id}`" class="btn btn-primary btn-sm">
                  Criar conta grátis
                </router-link>
              </div>
            </div>
          </article>
        </div>

        <p v-if="hasSearched && !loading && professionals.length" class="below-results">
          Quer ver todos os detalhes, avaliações e disponibilidade?
          <router-link to="/register">Crie sua conta em 1 minuto.</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Buscar profissionais pet — 2pets',
  meta: [
    { name: 'description', content: 'Veterinários, clínicas e petshops perto de você. Verificados, bem avaliados e com agendamento online.' }
  ]
})

const API_BASE = import.meta.env.VITE_API_BASE_URL

const searchQuery = ref('')
const lastQuery = ref('')
const professionals = ref([])
const loading = ref(false)
const hasSearched = ref(false)
const error = ref(false)

async function performSearch() {
  const q = searchQuery.value.trim()
  lastQuery.value = q
  await fetchProfessionals({ q })
}

async function fetchProfessionals(params = {}) {
  loading.value = true
  error.value = false
  try {
    const { data } = await axios.get(`${API_BASE}/public/search`, {
      params: { per_page: 9, ...params },
    })
    // SearchController returns a cursor-paginated collection — adapt both shapes.
    professionals.value = data.data ?? data.items ?? data.results ?? []
    hasSearched.value = true
  } catch {
    error.value = true
    professionals.value = []
  } finally {
    loading.value = false
  }
}

// Taxonomia canônica de `professional_type` (7 chaves) — deve espelhar
// `2pets-app/src/pages/SearchPage.vue` e `constants/profileOptions.js`.
const PROFESSIONAL_TYPE_ICONS = {
  vet: 'medical_services',
  clinic: 'local_hospital',
  laboratory: 'biotech',
  petshop: 'storefront',
  pet_hotel: 'hotel',
  grooming: 'content_cut',
  training: 'sports',
}

function iconFor(type) {
  return PROFESSIONAL_TYPE_ICONS[type] ?? 'pets'
}

function truncate(text, max) {
  if (!text) return ''
  return text.length > max ? text.slice(0, max - 1) + '…' : text
}

onMounted(() => {
  // Show featured professionals on first load so the page isn't empty.
  fetchProfessionals().then(() => (hasSearched.value = false))
})
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
        
        .meta-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.95rem;
          color: var(--text-light);
          margin-bottom: 8px;

          span.material-icons-outlined {
            font-size: 18px;
            color: var(--warning);
          }

          .reviews-count { color: var(--text-light); }
          .city { color: var(--text-light); }
        }

        .bio {
          font-size: 0.9rem;
          color: var(--text-light);
          line-height: 1.4;
          margin-top: 6px;
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
            font-size: 0.95rem;
            color: var(--text-main);
            margin-bottom: 20px;
            font-weight: 500;

            strong {
              color: var(--primary);
              font-weight: 700;
            }
          }
        }
      }

      .verified-badge {
        position: absolute;
        top: 15px;
        right: 15px;
        background: var(--success);
        color: white;
        padding: 6px;
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(var(--success-rgb), 0.3);
        display: inline-flex;

        span { font-size: 18px; }
      }
    }
  }

  .empty-state {
    text-align: center;
    padding: 40px 0;
    color: var(--text-light);
  }

  .below-results {
    text-align: center;
    margin-top: 40px;
    color: var(--text-light);

    a {
      color: var(--primary);
      font-weight: 600;
      text-decoration: underline;
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
