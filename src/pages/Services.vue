<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">
            <span class="material-icons-outlined">medical_services</span>
            Serviços
          </span>
          <h1>{{ $t('services.hero.title') }}</h1>
          <p class="subtitle">{{ $t('services.hero.subtitle') }}</p>
          
          <!-- Quick Stats -->
          <div class="quick-stats">
            <div class="stat-item">
              <span class="material-icons-outlined">verified</span>
              <span>Profissionais Verificados</span>
            </div>
            <div class="stat-item">
              <span class="material-icons-outlined">schedule</span>
              <span>Agendamento Rápido</span>
            </div>
            <div class="stat-item">
              <span class="material-icons-outlined">payments</span>
              <span>Melhores Preços</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-grid-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Categorias</span>
          <h2 class="section-title">Explore nossos serviços</h2>
          <p class="section-subtitle">Encontre exatamente o que seu pet precisa</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="service" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="service-badge">Popular</div>
            <div class="icon-wrapper">
              <span class="material-icons-outlined">{{ getIcon(service) }}</span>
            </div>
            <h3>{{ $t(`services.categories.${service}.title`) }}</h3>
            <p>{{ $t(`services.categories.${service}.desc`) }}</p>
            <div class="service-features">
              <div class="feature-item">
                <span class="material-icons-outlined">check_circle</span>
                <span>Profissionais qualificados</span>
              </div>
              <div class="feature-item">
                <span class="material-icons-outlined">check_circle</span>
                <span>Preços competitivos</span>
              </div>
            </div>
            <router-link to="/register" class="service-link">
              <span>Agendar agora</span>
              <span class="material-icons-outlined">arrow_forward</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Book -->
    <section class="how-to-book">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Processo</span>
          <h2 class="section-title">Como agendar</h2>
        </div>
        <div class="steps-grid">
          <div class="step-card" v-for="(step, index) in bookingSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-icon">
              <span class="material-icons-outlined">{{ step.icon }}</span>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <span class="cta-badge">Comece Agora</span>
          <h2>{{ $t('services.cta.title') }}</h2>
          <p>{{ $t('services.cta.subtitle') }}</p>
          <router-link to="/register" class="btn btn-primary btn-lg">
            <span class="material-icons-outlined">event_available</span>
            {{ $t('services.cta.button') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: '2Pets - Serviços Veterinários e Estética',
  meta: [
    { name: 'description', content: 'Encontre consultas, exames, vacinas, cirurgias e estética para seu pet. Tudo em um só lugar.' }
  ]
})

const services = ['consultations', 'exams', 'vaccines', 'surgeries', 'grooming', 'hotel']

const bookingSteps = ref([
  {
    icon: 'person_add',
    title: 'Crie sua conta',
    description: 'Cadastre-se gratuitamente em minutos'
  },
  {
    icon: 'search',
    title: 'Escolha o serviço',
    description: 'Selecione o que seu pet precisa'
  },
  {
    icon: 'location_on',
    title: 'Encontre profissionais',
    description: 'Veja opções perto de você'
  },
  {
    icon: 'event_available',
    title: 'Agende',
    description: 'Escolha data e horário ideais'
  }
])

function getIcon(key) {
  const icons = {
    consultations: 'medical_services',
    exams: 'biotech',
    vaccines: 'vaccines',
    surgeries: 'local_hospital',
    grooming: 'content_cut',
    hotel: 'pets'
  }
  return icons[key]
}
</script>

<style lang="scss" scoped>
.services-page {
  padding-bottom: 0;
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  
  .material-icons-outlined {
    font-size: 1rem;
    vertical-align: middle;
    margin-right: 0.25rem;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  
  .section-title {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1rem;
    color: var(--text-main);
    letter-spacing: -0.02em;
  }
  
  .section-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
  }
}

.hero-section {
  padding: 140px 0 100px;
  text-align: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
  }
  
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.5rem;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
    border: 1px solid rgba(99, 102, 241, 0.2);
    color: var(--primary);
    border-radius: var(--radius-full);
    font-size: 0.9375rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  
  h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    background: var(--gradient-main);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.02em;
  }
  
  .subtitle {
    font-size: 1.5rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto 3rem;
  }
  
  .quick-stats {
    display: flex;
    gap: 3rem;
    justify-content: center;
    flex-wrap: wrap;
    
    .stat-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 600;
      color: var(--text-secondary);
      
      .material-icons-outlined {
        color: var(--success);
        font-size: 1.5rem;
      }
    }
  }
}

.services-grid-section {
  padding: 100px 0;
  background: var(--bg-primary);
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2.5rem;
    
    .service-card {
      background: white;
      padding: 3rem;
      border-radius: var(--radius-2xl);
      border: 2px solid transparent;
      transition: all var(--transition-base);
      position: relative;
      overflow: hidden;
      animation: fadeIn 0.6s ease-out backwards;
      
      &:hover {
        transform: translateY(-12px);
        box-shadow: var(--shadow-2xl);
        border-color: var(--primary);
        
        .icon-wrapper {
          background: var(--gradient-main);
          transform: scale(1.15) rotate(5deg);
          
          span {
            color: white;
          }
        }
        
        .service-link {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .service-badge {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        padding: 0.375rem 0.875rem;
        background: var(--gradient-warm);
        color: white;
        border-radius: var(--radius-full);
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
      }
      
      .icon-wrapper {
        width: 80px;
        height: 80px;
        background: rgba(99, 102, 241, 0.1);
        border-radius: var(--radius-xl);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        transition: all var(--transition-base);
        
        span {
          font-size: 40px;
          color: var(--primary);
          transition: all var(--transition-base);
        }
      }
      
      h3 {
        font-size: 1.75rem;
        margin-bottom: 1rem;
        color: var(--text-main);
        font-weight: 700;
      }
      
      p {
        color: var(--text-secondary);
        line-height: 1.75;
        margin-bottom: 1.5rem;
      }
      
      .service-features {
        margin-bottom: 1.5rem;
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          font-size: 0.9375rem;
          color: var(--text-secondary);
          
          .material-icons-outlined {
            color: var(--success);
            font-size: 1.125rem;
          }
        }
      }
      
      .service-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--primary);
        font-weight: 700;
        font-size: 1.0625rem;
        opacity: 0.7;
        transform: translateX(-10px);
        transition: all var(--transition-base);
        text-decoration: none;
        
        span.material-icons-outlined {
          font-size: 1.25rem;
        }
      }
    }
  }
}

.how-to-book {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 3rem;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 60px;
      left: 15%;
      right: 15%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--primary), transparent);
      z-index: 0;
    }
    
    .step-card {
      text-align: center;
      position: relative;
      z-index: 1;
      
      .step-number {
        width: 50px;
        height: 50px;
        background: var(--gradient-main);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 800;
        margin: 0 auto 1.5rem;
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
      }
      
      .step-icon {
        width: 80px;
        height: 80px;
        background: white;
        border-radius: var(--radius-xl);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        box-shadow: var(--shadow-lg);
        border: 2px solid rgba(99, 102, 241, 0.1);
        
        span {
          font-size: 40px;
          color: var(--primary);
        }
      }
      
      h3 {
        font-size: 1.375rem;
        margin-bottom: 0.75rem;
        color: var(--text-main);
        font-weight: 700;
      }
      
      p {
        color: var(--text-secondary);
        line-height: 1.6;
      }
    }
  }
}

.cta-section {
  padding: 100px 0;
  background: var(--gradient-main);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -10%;
    width: 600px;
    height: 600px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 10s ease-in-out infinite;
  }
  
  .cta-content {
    background: transparent;
    border-radius: 0;
    padding: 0;
    text-align: center;
    color: white;
    position: relative;
    z-index: 1;
    
    .cta-badge {
      display: inline-block;
      padding: 0.5rem 1.25rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1.5rem;
      backdrop-filter: blur(10px);
    }
    
    h2 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      font-weight: 900;
      color: white;
    }
    
    p {
      font-size: 1.375rem;
      margin-bottom: 3rem;
      opacity: 0.95;
    }
    
    .btn-primary {
      background: white;
      color: var(--primary);
      
      &:hover {
        background: var(--bg-secondary);
        transform: translateY(-4px);
      }
    }
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 0 80px;
    
    h1 {
      font-size: 2.5rem;
    }
    
    .subtitle {
      font-size: 1.125rem;
    }
    
    .quick-stats {
      gap: 1.5rem;
    }
  }
  
  .services-grid {
    grid-template-columns: 1fr !important;
  }
  
  .how-to-book .steps-grid::before {
    display: none;
  }
  
  .section-title {
    font-size: 2.25rem !important;
  }
  
  .cta-section .cta-content h2 {
    font-size: 2.25rem;
  }
}
</style>
