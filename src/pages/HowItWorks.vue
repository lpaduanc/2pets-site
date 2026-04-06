<template>
  <div class="how-it-works-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">
            <span class="material-icons-outlined">route</span>
            Passo a Passo
          </span>
          <h1>Como o 2Pets funciona?</h1>
          <p class="subtitle">Simples, rapido e feito para facilitar a vida de quem ama seus pets. Veja como comecar em poucos minutos.</p>
        </div>
      </div>
    </section>

    <!-- Steps Section -->
    <section class="steps-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Processo</span>
          <h2 class="section-title">4 passos para comecar</h2>
          <p class="section-subtitle">Do cadastro ao cuidado completo do seu pet</p>
        </div>
        <div class="steps-grid">
          <div class="step-card" v-for="(step, index) in steps" :key="index" :style="{ animationDelay: `${index * 0.15}s` }">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-icon">
              <span class="material-icons-outlined">{{ step.icon }}</span>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
            <ul class="step-details">
              <li v-for="(detail, i) in step.details" :key="i">
                <span class="material-icons-outlined">check_circle</span>
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- For Tutors Section -->
    <section class="benefits-section tutors-benefits">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Para Tutores</span>
          <h2 class="section-title">Beneficios para quem cuida</h2>
          <p class="section-subtitle">Tudo que voce precisa para cuidar da saude do seu pet</p>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card" v-for="(benefit, index) in tutorBenefits" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">{{ benefit.icon }}</span>
            </div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- For Professionals Section -->
    <section class="benefits-section professionals-benefits">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Para Profissionais</span>
          <h2 class="section-title">Beneficios para quem atende</h2>
          <p class="section-subtitle">Cresaca seu negocio com a plataforma que conecta voce aos tutores</p>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card" v-for="(benefit, index) in professionalBenefits" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">{{ benefit.icon }}</span>
            </div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Numbers Section -->
    <section class="numbers-section">
      <div class="container">
        <div class="numbers-grid">
          <div class="number-item" v-for="(stat, index) in stats" :key="index">
            <span class="number-icon">{{ stat.emoji }}</span>
            <span class="number-value">{{ stat.value }}</span>
            <span class="number-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <span class="cta-badge">Comece Agora</span>
          <h2>Pronto para simplificar o cuidado com seu pet?</h2>
          <p>Cadastre-se gratuitamente e descubra tudo que a 2Pets pode fazer por voce e seu melhor amigo</p>
          <div class="cta-actions">
            <router-link to="/register" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">rocket_launch</span>
              Criar Conta Gratis
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
  title: '2Pets - Como Funciona | Passo a Passo',
  meta: [
    { name: 'description', content: 'Descubra como a 2Pets funciona: cadastre-se, encontre profissionais, agende online e cuide do seu pet com facilidade.' }
  ]
})

const steps = ref([
  {
    icon: 'person_add',
    title: 'Cadastre-se',
    description: 'Crie sua conta em minutos como tutor ou profissional. E rapido, gratuito e seguro.',
    details: [
      'Cadastro em menos de 2 minutos',
      'Acesso imediato a plataforma',
      'Dados protegidos pela LGPD'
    ]
  },
  {
    icon: 'search',
    title: 'Encontre profissionais',
    description: 'Busque veterinarios, clinicas e petshops proximos a voce com filtros inteligentes.',
    details: [
      'Busca por geolocalizacao',
      'Filtros por especialidade e avaliacao',
      'Profissionais verificados'
    ]
  },
  {
    icon: 'event_available',
    title: 'Agende online',
    description: 'Escolha o melhor horario e agende consultas, banho e tosa, e outros servicos pelo app.',
    details: [
      'Agenda em tempo real',
      'Confirmacao instantanea',
      'Lembretes automaticos'
    ]
  },
  {
    icon: 'star',
    title: 'Avalie e compartilhe',
    description: 'Deixe sua avaliacao apos o atendimento e ajude outros tutores a encontrar os melhores profissionais.',
    details: [
      'Avaliacoes verificadas',
      'Comunidade de confianca',
      'Ajude outros tutores'
    ]
  }
])

const tutorBenefits = ref([
  {
    icon: 'qr_code_2',
    title: 'Carteirinha virtual',
    description: 'Tenha todos os dados do seu pet acessiveis com um QR Code, pronto para compartilhar com veterinarios.'
  },
  {
    icon: 'medical_information',
    title: 'Historico de saude completo',
    description: 'Vacinas, exames, consultas e medicamentos organizados em um so lugar.'
  },
  {
    icon: 'notifications_active',
    title: 'Alertas inteligentes',
    description: 'Receba lembretes de vacinas, vermifugos e consultas para nunca mais esquecer.'
  },
  {
    icon: 'location_on',
    title: 'Busca por geolocalizacao',
    description: 'Encontre os profissionais mais proximos de voce com apenas um toque.'
  },
  {
    icon: 'account_balance_wallet',
    title: 'Controle de gastos',
    description: 'Acompanhe todos os gastos com seu pet por categoria e periodo.'
  },
  {
    icon: 'favorite',
    title: 'Clube de vantagens',
    description: 'Descontos exclusivos em produtos e servicos para membros da plataforma.'
  }
])

const professionalBenefits = ref([
  {
    icon: 'visibility',
    title: 'Visibilidade online',
    description: 'Apareca nas buscas de milhares de tutores que procuram profissionais na sua regiao.'
  },
  {
    icon: 'calendar_month',
    title: 'Agenda inteligente',
    description: 'Gerencie seus horarios, consultas e atendimentos de forma organizada.'
  },
  {
    icon: 'verified_user',
    title: 'Selo de verificacao',
    description: 'Destaque-se com o selo de profissional verificado apos validacao do CRMV.'
  },
  {
    icon: 'trending_up',
    title: 'Cresaca do negocio',
    description: 'Atraia novos clientes de forma organica, sem gastar com marketing.'
  },
  {
    icon: 'dashboard',
    title: 'Sistema de gestao',
    description: 'Prontuario eletronico, controle financeiro e relatorios completos.'
  },
  {
    icon: 'star',
    title: 'Avaliacoes e reputacao',
    description: 'Construa sua reputacao com avaliacoes reais de tutores atendidos.'
  }
])

const stats = ref([
  { emoji: '👥', value: '10.000+', label: 'Tutores cadastrados' },
  { emoji: '⚕️', value: '500+', label: 'Profissionais verificados' },
  { emoji: '📋', value: '50.000+', label: 'Atendimentos realizados' },
  { emoji: '⭐', value: '4.9/5', label: 'Avaliacao media' }
])
</script>

<style lang="scss" scoped>
.how-it-works-page {
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
    max-width: 800px;
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
  }

  h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    background: var(--gradient-main);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
  }

  .subtitle {
    font-size: 1.5rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
}

.steps-section {
  padding: 100px 0;
  background: var(--bg-primary);

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 3rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 60px;
      left: 10%;
      right: 10%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--primary), transparent);
      z-index: 0;
    }

    .step-card {
      text-align: center;
      position: relative;
      z-index: 1;
      background: white;
      padding: 2.5rem 2rem;
      border-radius: var(--radius-2xl);
      border: 2px solid transparent;
      transition: all var(--transition-base);
      animation: fadeIn 0.6s ease-out backwards;

      &:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-xl);
        border-color: var(--primary);

        .step-icon {
          background: var(--gradient-main);

          span {
            color: white;
          }
        }
      }

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
        background: rgba(99, 102, 241, 0.1);
        border-radius: var(--radius-xl);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        transition: all var(--transition-base);

        span {
          font-size: 40px;
          color: var(--primary);
          transition: all var(--transition-base);
        }
      }

      h3 {
        font-size: 1.375rem;
        margin-bottom: 0.75rem;
        color: var(--text-main);
        font-weight: 700;
      }

      > p {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }

      .step-details {
        text-align: left;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.625rem;
          font-size: 0.9375rem;
          color: var(--text-secondary);

          .material-icons-outlined {
            color: var(--success);
            font-size: 1.125rem;
            flex-shrink: 0;
          }
        }
      }
    }
  }
}

.benefits-section {
  padding: 100px 0;

  &.tutors-benefits {
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  }

  &.professionals-benefits {
    background: var(--bg-primary);
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;

    .benefit-card {
      padding: 2.5rem;
      background: white;
      border-radius: var(--radius-2xl);
      box-shadow: var(--shadow-md);
      border: 2px solid transparent;
      transition: all var(--transition-base);
      animation: fadeIn 0.6s ease-out backwards;

      &:hover {
        border-color: var(--primary);
        transform: translateY(-8px);
        box-shadow: var(--shadow-xl);

        .icon-wrapper {
          background: var(--gradient-main);
          transform: scale(1.1);

          span {
            color: white;
          }
        }
      }

      .icon-wrapper {
        width: 64px;
        height: 64px;
        background: rgba(99, 102, 241, 0.1);
        border-radius: var(--radius-xl);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        transition: all var(--transition-base);

        span {
          font-size: 32px;
          color: var(--primary);
          transition: all var(--transition-base);
        }
      }

      h3 {
        font-size: 1.375rem;
        margin-bottom: 0.75rem;
        font-weight: 700;
        color: var(--text-main);
      }

      p {
        color: var(--text-secondary);
        line-height: 1.7;
      }
    }
  }
}

.numbers-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%);

  .numbers-grid {
    display: flex;
    gap: 4rem;
    justify-content: center;
    flex-wrap: wrap;

    .number-item {
      text-align: center;

      .number-icon {
        display: block;
        font-size: 2rem;
        margin-bottom: 0.75rem;
      }

      .number-value {
        display: block;
        font-size: 2.5rem;
        font-weight: 900;
        background: var(--gradient-main);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 0.5rem;
      }

      .number-label {
        font-size: 0.9375rem;
        color: var(--text-secondary);
        font-weight: 600;
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
      font-size: 3rem;
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

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 0 80px;

    h1 {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.125rem;
    }
  }

  .steps-section .steps-grid {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }

  .benefits-section .benefits-grid {
    grid-template-columns: 1fr;
  }

  .numbers-section .numbers-grid {
    gap: 2rem;

    .number-value {
      font-size: 2rem;
    }
  }

  .section-title {
    font-size: 2.25rem !important;
  }

  .cta-section {
    .cta-content {
      h2 {
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
}
</style>
