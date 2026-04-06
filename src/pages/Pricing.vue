<template>
  <div class="pricing-page">
    <!-- Hero -->
    <section class="pricing-hero">
      <div class="container">
        <span class="section-badge">Planos</span>
        <h1 class="page-title">Planos para cada necessidade</h1>
        <p class="page-subtitle">Escolha o plano ideal para voce ou sua empresa. Comece gratis e evolua quando quiser.</p>

        <!-- Toggle: Tutores / Profissionais -->
        <div class="plan-toggle">
          <button :class="{ active: activeTab === 'tutors' }" @click="activeTab = 'tutors'">
            <span class="material-icons-outlined">person</span>
            Para Tutores
          </button>
          <button :class="{ active: activeTab === 'professionals' }" @click="activeTab = 'professionals'">
            <span class="material-icons-outlined">medical_services</span>
            Para Profissionais
          </button>
        </div>
      </div>
    </section>

    <!-- Tutor Plans -->
    <section v-if="activeTab === 'tutors'" class="plans-section">
      <div class="container">
        <div class="plans-grid">
          <div class="plan-card">
            <div class="plan-header">
              <h3>Gratuito</h3>
              <div class="plan-price">
                <span class="price-amount">R$ 0</span>
                <span class="price-period">/mes</span>
              </div>
              <p class="plan-desc">Ideal para quem esta comecando</p>
            </div>
            <ul class="plan-features">
              <li><span class="material-icons-outlined check">check_circle</span> Ate 2 pets cadastrados</li>
              <li><span class="material-icons-outlined check">check_circle</span> Busca basica de profissionais</li>
              <li><span class="material-icons-outlined check">check_circle</span> Carteirinha virtual</li>
              <li><span class="material-icons-outlined check">check_circle</span> Alertas de vacinas</li>
              <li class="disabled"><span class="material-icons-outlined">cancel</span> Controle de gastos</li>
              <li class="disabled"><span class="material-icons-outlined">cancel</span> Clube de vantagens completo</li>
            </ul>
            <router-link to="/register" class="btn btn-outline btn-lg">Comecar Gratis</router-link>
          </div>

          <div class="plan-card featured">
            <div class="plan-badge">Mais Popular</div>
            <div class="plan-header">
              <h3>Premium</h3>
              <div class="plan-price">
                <span class="price-amount">R$ 19,90</span>
                <span class="price-period">/mes</span>
              </div>
              <p class="plan-desc">Para quem quer o melhor para seu pet</p>
            </div>
            <ul class="plan-features">
              <li><span class="material-icons-outlined check">check_circle</span> Pets ilimitados</li>
              <li><span class="material-icons-outlined check">check_circle</span> Busca avancada com filtros</li>
              <li><span class="material-icons-outlined check">check_circle</span> Carteirinha virtual</li>
              <li><span class="material-icons-outlined check">check_circle</span> Alertas avancados</li>
              <li><span class="material-icons-outlined check">check_circle</span> Controle de gastos completo</li>
              <li><span class="material-icons-outlined check">check_circle</span> Clube de vantagens completo</li>
              <li><span class="material-icons-outlined check">check_circle</span> Historico de exames ilimitado</li>
            </ul>
            <router-link to="/register" class="btn btn-primary btn-lg">Testar 7 dias gratis</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Plans -->
    <section v-if="activeTab === 'professionals'" class="plans-section">
      <div class="container">
        <div class="plans-grid three-cols">
          <div class="plan-card">
            <div class="plan-header">
              <h3>Gratuito</h3>
              <div class="plan-price">
                <span class="price-amount">R$ 0</span>
                <span class="price-period">/mes</span>
              </div>
              <p class="plan-desc">Para testar a plataforma</p>
            </div>
            <ul class="plan-features">
              <li><span class="material-icons-outlined check">check_circle</span> Perfil basico</li>
              <li><span class="material-icons-outlined check">check_circle</span> Aparece nas buscas</li>
              <li><span class="material-icons-outlined check">check_circle</span> Ate 10 agendamentos/mes</li>
              <li class="disabled"><span class="material-icons-outlined">cancel</span> Sistema de clinica</li>
              <li class="disabled"><span class="material-icons-outlined">cancel</span> Relatorios</li>
            </ul>
            <router-link to="/register" class="btn btn-outline btn-lg">Comecar Gratis</router-link>
          </div>

          <div class="plan-card">
            <div class="plan-header">
              <h3>Essencial</h3>
              <div class="plan-price">
                <span class="price-amount">R$ 79,90</span>
                <span class="price-period">/mes</span>
              </div>
              <p class="plan-desc">Para profissionais em crescimento</p>
            </div>
            <ul class="plan-features">
              <li><span class="material-icons-outlined check">check_circle</span> Perfil completo</li>
              <li><span class="material-icons-outlined check">check_circle</span> Agendamentos ilimitados</li>
              <li><span class="material-icons-outlined check">check_circle</span> Sistema basico de clinica OU ERP</li>
              <li><span class="material-icons-outlined check">check_circle</span> Prontuario eletronico</li>
              <li class="disabled"><span class="material-icons-outlined">cancel</span> Multiplos usuarios</li>
            </ul>
            <router-link to="/register" class="btn btn-outline btn-lg">Testar 7 dias gratis</router-link>
          </div>

          <div class="plan-card featured">
            <div class="plan-badge">Recomendado</div>
            <div class="plan-header">
              <h3>Profissional</h3>
              <div class="plan-price">
                <span class="price-amount">R$ 149,90</span>
                <span class="price-period">/mes</span>
              </div>
              <p class="plan-desc">Para clinicas e petshops completos</p>
            </div>
            <ul class="plan-features">
              <li><span class="material-icons-outlined check">check_circle</span> Tudo do Essencial</li>
              <li><span class="material-icons-outlined check">check_circle</span> Sistema completo (clinica + ERP)</li>
              <li><span class="material-icons-outlined check">check_circle</span> Relatorios avancados</li>
              <li><span class="material-icons-outlined check">check_circle</span> Multiplos usuarios</li>
              <li><span class="material-icons-outlined check">check_circle</span> Suporte prioritario (4h SLA)</li>
              <li><span class="material-icons-outlined check">check_circle</span> AI Business Insights</li>
            </ul>
            <router-link to="/register" class="btn btn-primary btn-lg">Testar 7 dias gratis</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">FAQ</span>
          <h2 class="section-title">Perguntas Frequentes</h2>
        </div>
        <div class="faq-grid">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ faq.question }}</span>
              <span class="material-icons-outlined">{{ openFaq === index ? 'expand_less' : 'expand_more' }}</span>
            </button>
            <div class="faq-answer" v-if="openFaq === index">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('tutors')
const openFaq = ref(null)

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const faqs = [
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim! Todos os planos pagos podem ser cancelados a qualquer momento. Voce mantera acesso ate o fim do periodo ja pago.'
  },
  {
    question: 'Como funciona o trial de 7 dias?',
    answer: 'Ao assinar qualquer plano pago, voce tem 7 dias gratis para testar todos os recursos. Se cancelar antes do final do trial, nao sera cobrado.'
  },
  {
    question: 'Quais formas de pagamento sao aceitas?',
    answer: 'Aceitamos cartao de credito (Visa, Mastercard, Elo), Pix e boleto bancario via Stripe e Mercado Pago.'
  },
  {
    question: 'Posso mudar de plano depois?',
    answer: 'Sim! Voce pode fazer upgrade ou downgrade a qualquer momento. O valor sera ajustado proporcionalmente.'
  },
  {
    question: 'Meus dados estao seguros?',
    answer: 'Sim! Seguimos rigorosamente a LGPD. Seus dados e os dados dos seus pets sao criptografados e nunca compartilhados sem sua autorizacao explicita.'
  }
]
</script>

<style lang="scss" scoped>
.pricing-hero {
  padding: 120px 0 60px;
  text-align: center;
  background: linear-gradient(180deg, #f8f9ff 0%, white 100%);
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-main);
  margin: 16px 0;
}

.page-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto 40px;
}

.section-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(93, 135, 255, 0.1);
  color: #5D87FF;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.plan-toggle {
  display: inline-flex;
  background: #f3f4f6;
  border-radius: 12px;
  padding: 4px;
  gap: 4px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border: none;
    border-radius: 10px;
    background: transparent;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-light);
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background: white;
      color: var(--primary);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .material-icons-outlined {
      font-size: 20px;
    }
  }
}

.plans-section {
  padding: 60px 0 80px;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;

  &.three-cols {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1100px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    &.three-cols {
      grid-template-columns: 1fr;
    }
  }
}

.plan-card {
  background: white;
  border-radius: 16px;
  padding: 40px 30px;
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  }

  &.featured {
    border-color: var(--primary);
    box-shadow: 0 8px 30px rgba(93, 135, 255, 0.2);
  }

  .plan-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary);
    color: white;
    padding: 4px 16px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
  }
}

.plan-header {
  text-align: center;
  margin-bottom: 30px;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-main);
    margin-bottom: 12px;
  }
}

.plan-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  margin-bottom: 8px;

  .price-amount {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--text-main);
  }

  .price-period {
    color: var(--text-light);
    font-size: 1rem;
  }
}

.plan-desc {
  color: var(--text-light);
  font-size: 0.9rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  flex: 1;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
    font-size: 0.95rem;
    color: var(--text-main);

    .check {
      color: #13DEB9;
      font-size: 20px;
    }

    &.disabled {
      color: var(--text-light);
      opacity: 0.5;

      .material-icons-outlined {
        color: #ccc;
        font-size: 20px;
      }
    }
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.btn-primary {
  background: var(--primary);
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(93, 135, 255, 0.3);
  }
}

.btn-outline {
  background: transparent;
  border: 2px solid #e5e7eb;
  color: var(--text-main);

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
}

.faq-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text-main);
  margin: 12px 0;
}

.faq-grid {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-main);
  cursor: pointer;
  text-align: left;
}

.faq-answer {
  padding: 0 24px 20px;

  p {
    color: var(--text-light);
    line-height: 1.6;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
}
</style>
