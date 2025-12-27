<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content fade-in">
          <span class="hero-badge">
            <span class="badge-icon">🐾</span>
            Bem-vindo ao futuro do cuidado pet
          </span>
          <h1 class="hero-title">{{ $t('home.hero.title') }}</h1>
          <p class="hero-subtitle">{{ $t('home.hero.subtitle') }}</p>
          <div class="hero-actions">
            <router-link to="/register" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">pets</span>
              {{ $t('common.register') }}
              <span class="btn-arrow">→</span>
            </router-link>
            <router-link to="/services" class="btn btn-outline btn-lg">
              <span class="material-icons-outlined">explore</span>
              Explorar Serviços
            </router-link>
          </div>
          
          <!-- Trust Indicators -->
          <div class="trust-badges">
            <div class="trust-item">
              <span class="material-icons-outlined">verified_user</span>
              <span>100% Seguro</span>
            </div>
            <div class="trust-item">
              <span class="material-icons-outlined">support_agent</span>
              <span>Suporte 24/7</span>
            </div>
            <div class="trust-item">
              <span class="material-icons-outlined">star</span>
              <span>4.9/5 Avaliação</span>
            </div>
          </div>
          
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-icon">👥</span>
              <span class="stat-number">10k+</span>
              <span class="stat-label">Tutores Ativos</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon">⚕️</span>
              <span class="stat-number">500+</span>
              <span class="stat-label">Profissionais</span>
            </div>
            <div class="stat-item">
              <span class="stat-icon">📋</span>
              <span class="stat-number">50k+</span>
              <span class="stat-label">Atendimentos</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-decoration"></div>
      <div class="hero-decoration-2"></div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Recursos</span>
          <h2 class="section-title">Tudo que você precisa em um só lugar</h2>
          <p class="section-subtitle">Cuidado completo para o seu melhor amigo</p>
        </div>
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="feature-icon">
              <span class="material-icons-outlined">{{ feature.icon }}</span>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <div class="feature-link">
              <span>Saiba mais</span>
              <span class="material-icons-outlined">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Processo</span>
          <h2 class="section-title">Como funciona</h2>
          <p class="section-subtitle">Simples, rápido e eficiente</p>
        </div>
        <div class="steps-grid">
          <div class="step-card" v-for="(step, index) in steps" :key="index">
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

    <!-- Testimonials -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Depoimentos</span>
          <h2 class="section-title">O que nossos usuários dizem</h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-rating">
              <span class="material-icons" v-for="i in 5" :key="i">star</span>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ testimonial.name.charAt(0) }}</div>
              <div class="author-info">
                <div class="author-name">{{ testimonial.name }}</div>
                <div class="author-role">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <span class="cta-badge">Comece Agora</span>
          <h2>Pronto para transformar o cuidado com seu pet?</h2>
          <p>Junte-se a milhares de tutores que já confiam na 2Pets para cuidar da saúde de seus pets</p>
          <div class="cta-actions">
            <router-link to="/register" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">rocket_launch</span>
              Criar Conta Grátis
            </router-link>
            <router-link to="/professionals" class="btn btn-ghost btn-lg">
              Sou Profissional
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: '2Pets - O Ecossistema Completo para a Saúde do seu Pet',
  meta: [
    { name: 'description', content: 'Conecte-se aos melhores veterinários, agende consultas e gerencie a saúde do seu pet em um só lugar.' }
  ]
})

const features = ref([
  {
    icon: 'medical_services',
    title: 'Consultas Veterinárias',
    description: 'Encontre os melhores veterinários perto de você e agende consultas facilmente.'
  },
  {
    icon: 'calendar_month',
    title: 'Gestão de Saúde',
    description: 'Mantenha todo o histórico médico do seu pet organizado em um só lugar.'
  },
  {
    icon: 'local_offer',
    title: 'Ofertas Exclusivas',
    description: 'Acesse descontos em produtos e serviços para o seu pet.'
  },
  {
    icon: 'notifications_active',
    title: 'Lembretes Inteligentes',
    description: 'Nunca mais esqueça vacinas, medicamentos ou consultas importantes.'
  },
  {
    icon: 'groups',
    title: 'Comunidade',
    description: 'Conecte-se com outros tutores e compartilhe experiências.'
  },
  {
    icon: 'verified',
    title: 'Profissionais Verificados',
    description: 'Todos os profissionais são verificados e avaliados pela comunidade.'
  }
])

const steps = ref([
  {
    icon: 'person_add',
    title: 'Crie sua conta',
    description: 'Cadastre-se gratuitamente em menos de 2 minutos'
  },
  {
    icon: 'pets',
    title: 'Adicione seu pet',
    description: 'Registre as informações e histórico do seu pet'
  },
  {
    icon: 'search',
    title: 'Encontre profissionais',
    description: 'Busque veterinários e serviços perto de você'
  },
  {
    icon: 'event_available',
    title: 'Agende e gerencie',
    description: 'Marque consultas e acompanhe a saúde do seu pet'
  }
])

const testimonials = ref([
  {
    name: 'Maria Silva',
    role: 'Tutora do Rex',
    text: 'A 2Pets transformou a forma como cuido do meu cachorro. Agora tenho todo o histórico médico dele na palma da mão!'
  },
  {
    name: 'Dr. João Santos',
    role: 'Veterinário',
    text: 'Como profissional, a plataforma me ajudou a organizar minha agenda e atrair novos clientes de forma muito mais eficiente.'
  },
  {
    name: 'Ana Costa',
    role: 'Tutora da Luna',
    text: 'Os lembretes de vacina são incríveis! Nunca mais esqueci nenhuma data importante para a saúde da minha gatinha.'
  }
])
</script>

<style lang="scss" scoped>
.home {
  // padding-top removed to allow hero background to go behind fixed header
}

.hero {
  position: relative;
  padding: 140px 0 120px;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%);
  overflow: hidden;
  
  .hero-decoration {
    position: absolute;
    top: -30%;
    right: -15%;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: float 6s ease-in-out infinite;
  }
  
  .hero-decoration-2 {
    position: absolute;
    bottom: -20%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: float 8s ease-in-out infinite reverse;
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
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
    backdrop-filter: blur(10px);
    
    .badge-icon {
      font-size: 1.25rem;
      animation: bounce 2s ease-in-out infinite;
    }
  }
  
  .hero-title {
    font-size: 4.5rem;
    font-weight: 900;
    margin-bottom: 1.75rem;
    background: var(--gradient-main);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
  }
  
  .hero-actions {
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    margin-bottom: 3rem;
    
    .btn {
      position: relative;
      overflow: visible;
      
      .btn-arrow {
        display: inline-block;
        transition: transform var(--transition-base);
      }
      
      &:hover .btn-arrow {
        transform: translateX(4px);
      }
    }
  }
  
  .trust-badges {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    
    .trust-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9375rem;
      color: var(--text-secondary);
      font-weight: 500;
      
      span.material-icons-outlined {
        color: var(--success);
        font-size: 1.25rem;
      }
    }
  }
  
  .hero-stats {
    display: flex;
    gap: 4rem;
    justify-content: center;
    padding-top: 3rem;
    border-top: 2px solid rgba(99, 102, 241, 0.15);
    
    .stat-item {
      text-align: center;
      
      .stat-icon {
        display: block;
        font-size: 2rem;
        margin-bottom: 0.75rem;
      }
      
      .stat-number {
        display: block;
        font-size: 2.5rem;
        font-weight: 900;
        background: var(--gradient-main);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.5rem;
      }
      
      .stat-label {
        font-size: 0.9375rem;
        color: var(--text-secondary);
        font-weight: 600;
      }
    }
  }
}

.features {
  padding: 120px 0;
  background: var(--bg-primary);
  
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
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 5rem;
    
    .section-title {
      font-size: 3.25rem;
      font-weight: 900;
      margin-bottom: 1.25rem;
      color: var(--text-main);
      letter-spacing: -0.02em;
    }
    
    .section-subtitle {
      font-size: 1.375rem;
      color: var(--text-secondary);
    }
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2.5rem;
    
    .feature-card {
      background: var(--bg-secondary);
      padding: 3rem;
      border-radius: var(--radius-2xl);
      transition: all var(--transition-base);
      border: 2px solid transparent;
      animation: fadeIn 0.6s ease-out backwards;
      
      &:hover {
        transform: translateY(-12px);
        box-shadow: var(--shadow-2xl);
        border-color: var(--primary);
        background: var(--bg-primary);
        
        .feature-icon {
          background: var(--gradient-main);
          transform: scale(1.15) rotate(5deg);
          
          span {
            color: white;
          }
        }
        
        .feature-link {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .feature-icon {
        width: 72px;
        height: 72px;
        background: rgba(99, 102, 241, 0.1);
        border-radius: var(--radius-xl);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        transition: all var(--transition-base);
        
        span {
          font-size: 36px;
          color: var(--primary);
          transition: all var(--transition-base);
        }
      }
      
      h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--text-main);
        font-weight: 700;
      }
      
      p {
        color: var(--text-secondary);
        line-height: 1.75;
        margin-bottom: 1.5rem;
      }
      
      .feature-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--primary);
        font-weight: 600;
        font-size: 0.9375rem;
        opacity: 0.7;
        transform: translateX(-10px);
        transition: all var(--transition-base);
        
        span.material-icons-outlined {
          font-size: 1.125rem;
        }
      }
    }
  }
}

.how-it-works {
  padding: 120px 0;
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

.testimonials {
  padding: 120px 0;
  background: var(--bg-primary);
  
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
    
    .testimonial-card {
      background: white;
      padding: 2.5rem;
      border-radius: var(--radius-2xl);
      box-shadow: var(--shadow-md);
      border: 1px solid rgba(99, 102, 241, 0.1);
      transition: all var(--transition-base);
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-xl);
        border-color: var(--primary);
      }
      
      .testimonial-rating {
        display: flex;
        gap: 0.25rem;
        margin-bottom: 1.5rem;
        
        .material-icons {
          color: #fbbf24;
          font-size: 1.25rem;
        }
      }
      
      .testimonial-text {
        font-size: 1.0625rem;
        line-height: 1.75;
        color: var(--text-main);
        margin-bottom: 2rem;
        font-style: italic;
      }
      
      .testimonial-author {
        display: flex;
        align-items: center;
        gap: 1rem;
        
        .author-avatar {
          width: 50px;
          height: 50px;
          background: var(--gradient-main);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
        }
        
        .author-name {
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }
        
        .author-role {
          font-size: 0.875rem;
          color: var(--text-light);
        }
      }
    }
  }
}

.cta-section {
  padding: 120px 0;
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
  
  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -10%;
    width: 700px;
    height: 700px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 12s ease-in-out infinite reverse;
  }
  
  .cta-content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;
    max-width: 800px;
    margin: 0 auto;
    
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
      font-size: 3.5rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      color: white;
      letter-spacing: -0.02em;
    }
    
    p {
      font-size: 1.375rem;
      margin-bottom: 3rem;
      opacity: 0.95;
      line-height: 1.6;
    }
    
    .cta-actions {
      display: flex;
      gap: 1.25rem;
      justify-content: center;
      flex-wrap: wrap;
      
      .btn-primary {
        background: white;
        color: var(--primary);
        
        &:hover {
          background: var(--bg-secondary);
          transform: translateY(-4px);
        }
      }
      
      .btn-ghost {
        background: rgba(255, 255, 255, 0.15);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        
        &:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: white;
        }
      }
    }
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 80px;
    
    .hero-title {
      font-size: 2.75rem;
    }
    
    .hero-subtitle {
      font-size: 1.125rem;
    }
    
    .hero-actions {
      flex-direction: column;
      
      .btn {
        width: 100%;
      }
    }
    
    .trust-badges {
      gap: 1.5rem;
    }
    
    .hero-stats {
      gap: 2rem;
      flex-wrap: wrap;
      
      .stat-number {
        font-size: 2rem;
      }
    }
  }
  
  .features,
  .how-it-works,
  .testimonials,
  .cta-section {
    padding: 80px 0;
    
    .section-title {
      font-size: 2.25rem !important;
    }
    
    .features-grid,
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
  
  .how-it-works .steps-grid::before {
    display: none;
  }
  
  .cta-section {
    .cta-content h2 {
      font-size: 2.25rem;
    }
    
    .cta-actions {
      flex-direction: column;
      
      .btn {
        width: 100%;
      }
    }
  }
}
</style>
