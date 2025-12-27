<template>
  <div class="professionals-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">
            <span class="material-icons-outlined">workspace_premium</span>
            Para Profissionais
          </span>
          <h1>{{ $t('professionals.hero.title') }}</h1>
          <p class="subtitle">{{ $t('professionals.hero.subtitle') }}</p>
          <div class="actions">
            <router-link to="/register" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">rocket_launch</span>
              {{ $t('common.register') }}
            </router-link>
            <a href="#calculator" class="btn btn-outline btn-lg">
              <span class="material-icons-outlined">calculate</span>
              Calcular Economia
            </a>
          </div>
          
          <!-- Trust Indicators -->
          <div class="trust-stats">
            <div class="trust-item">
              <span class="trust-number">R$ 1.400+</span>
              <span class="trust-label">Economia Média/Mês</span>
            </div>
            <div class="trust-item">
              <span class="trust-number">75%</span>
              <span class="trust-label">Redução de Custos</span>
            </div>
            <div class="trust-item">
              <span class="trust-number">3x</span>
              <span class="trust-label">Mais Clientes</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pain Points Comparison -->
    <section class="pain-points-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Comparação</span>
          <h2 class="section-title">{{ $t('professionals.pain_points.title') }}</h2>
        </div>
        <div class="comparison-grid">
          <div class="card traditional">
            <div class="card-header">
              <span class="material-icons-outlined">trending_down</span>
              <h3>{{ $t('professionals.pain_points.traditional') }}</h3>
            </div>
            <p>{{ $t('professionals.pain_points.traditional_desc') }}</p>
            <div class="cost-badge negative">
              <span class="material-icons-outlined">close</span>
              R$ 750 / cliente
            </div>
            <ul class="pain-list">
              <li><span class="material-icons-outlined">close</span> Custo variável e imprevisível</li>
              <li><span class="material-icons-outlined">close</span> Tempo gasto em marketing</li>
              <li><span class="material-icons-outlined">close</span> ROI incerto</li>
            </ul>
          </div>
          <div class="card with-2pets highlighted">
            <div class="best-choice-badge">Melhor Escolha</div>
            <div class="card-header">
              <span class="material-icons-outlined">trending_up</span>
              <h3>{{ $t('professionals.pain_points.with_2pets') }}</h3>
            </div>
            <p>{{ $t('professionals.pain_points.with_2pets_desc') }}</p>
            <div class="cost-badge positive">
              <span class="material-icons-outlined">check</span>
              R$ 10 / cliente
            </div>
            <ul class="benefit-list">
              <li><span class="material-icons-outlined">check_circle</span> Custo fixo previsível</li>
              <li><span class="material-icons-outlined">check_circle</span> Zero tempo em marketing</li>
              <li><span class="material-icons-outlined">check_circle</span> ROI garantido</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Grid -->
    <section class="benefits-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Vantagens</span>
          <h2 class="section-title">{{ $t('professionals.benefits.title') }}</h2>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card" v-for="i in 4" :key="i" :style="{ animationDelay: `${i * 0.1}s` }">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">{{ getBenefitIcon(i) }}</span>
            </div>
            <h3>{{ $t(`professionals.benefits.${i}.title`) }}</h3>
            <p>{{ $t(`professionals.benefits.${i}.desc`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Calculator -->
    <section id="calculator" class="calculator-section">
      <div class="container">
        <div class="calculator-wrapper">
          <span class="calculator-badge">
            <span class="material-icons-outlined">insights</span>
            Calculadora ROI
          </span>
          <h2>{{ $t('professionals.calculator.title') }}</h2>
          <div class="calculator-content">
            <div class="input-group">
              <label>{{ $t('professionals.calculator.current_spend') }}</label>
              <div class="input-wrapper">
                <span class="input-prefix">R$</span>
                <input type="number" v-model="currentSpend" placeholder="1500" />
                <span class="input-suffix">/mês</span>
              </div>
            </div>
            <div class="result-box">
              <div class="result-header">
                <span class="material-icons-outlined">savings</span>
                <span class="label">{{ $t('professionals.calculator.result') }}</span>
              </div>
              <span class="value">R$ {{ annualSavings.toLocaleString('pt-BR') }}</span>
              <div class="result-breakdown">
                <div class="breakdown-item">
                  <span>Economia mensal:</span>
                  <span class="breakdown-value">R$ {{ monthlySavings.toLocaleString('pt-BR') }}</span>
                </div>
                <div class="breakdown-item">
                  <span>Redução de custos:</span>
                  <span class="breakdown-value">{{ savingsPercentage }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans -->
    <section class="plans-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Planos</span>
          <h2 class="section-title">{{ $t('professionals.plans.title') }}</h2>
          <p class="section-subtitle">Escolha o plano ideal para o seu negócio</p>
        </div>
        <div class="plans-grid">
          <div class="plan-card" v-for="(plan, index) in ['solo', 'clinic_small', 'clinic_large']" :key="plan" :class="{ popular: index === 1 }">
            <div class="popular-badge" v-if="index === 1">
              <span class="material-icons-outlined">star</span>
              Mais Popular
            </div>
            <h3>{{ $t(`professionals.plans.${plan}.name`) }}</h3>
            <div class="price">
              <span class="currency">R$</span>
              <span class="amount">{{ $t(`professionals.plans.${plan}.price`) }}</span>
              <span class="period">/mês</span>
            </div>
            <ul class="features">
              <li v-for="(feature, index) in $tm(`professionals.plans.${plan}.features`)" :key="index">
                <span class="material-icons-outlined">check_circle</span>
                {{ feature }}
              </li>
            </ul>
            <router-link to="/register" class="btn full-width" :class="index === 1 ? 'btn-primary' : 'btn-outline'">
              <span class="material-icons-outlined">{{ index === 1 ? 'rocket_launch' : 'arrow_forward' }}</span>
              {{ $t('common.register') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="social-proof">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Depoimentos</span>
          <h2 class="section-title">O que profissionais dizem</h2>
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

    <!-- Final CTA -->
    <section class="final-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Pronto para crescer seu negócio?</h2>
          <p>Junte-se a centenas de profissionais que já transformaram sua prática com a 2Pets</p>
          <router-link to="/register" class="btn btn-primary btn-lg">
            <span class="material-icons-outlined">rocket_launch</span>
            Começar Agora - É Grátis
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: '2Pets para Profissionais - Marketing Digital e Gestão',
  meta: [
    { name: 'description', content: 'Pare de pagar por cada cliente. A 2Pets oferece marketing digital e sistema de gestão completo por um preço fixo mensal.' }
  ]
})

const currentSpend = ref(1500)
const monthlyCost2Pets = 99

const monthlySavings = computed(() => {
  return (currentSpend.value || 0) - monthlyCost2Pets
})

const annualSavings = computed(() => {
  return monthlySavings.value * 12
})

const savingsPercentage = computed(() => {
  if (!currentSpend.value) return 0
  return Math.round((monthlySavings.value / currentSpend.value) * 100)
})

function getBenefitIcon(index) {
  const icons = ['psychology', 'dashboard', 'verified_user', 'trending_up']
  return icons[index - 1]
}

const testimonials = ref([
  {
    name: 'Dr. Carlos Mendes',
    role: 'Veterinário - São Paulo',
    text: 'Reduzi meus gastos com marketing em 80% e ainda assim tripliquei minha base de clientes. A 2Pets mudou completamente meu negócio!'
  },
  {
    name: 'Dra. Patricia Lima',
    role: 'Clínica Veterinária - Rio de Janeiro',
    text: 'O sistema de gestão incluído vale mais que a mensalidade. Organizou completamente minha clínica e ainda atraio novos clientes.'
  },
  {
    name: 'Dr. Roberto Silva',
    role: 'Veterinário Autônomo - Brasília',
    text: 'Antes gastava R$ 2.000/mês em anúncios. Agora pago R$ 99 e tenho resultados muito melhores. Inacreditável!'
  }
])
</script>

<style lang="scss" scoped>
.professionals-page {
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
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%);
  text-align: center;
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
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }
  
  .actions {
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    margin-bottom: 4rem;
  }
  
  .trust-stats {
    display: flex;
    gap: 4rem;
    justify-content: center;
    padding-top: 3rem;
    border-top: 2px solid rgba(99, 102, 241, 0.15);
    
    .trust-item {
      text-align: center;
      
      .trust-number {
        display: block;
        font-size: 2.5rem;
        font-weight: 900;
        background: var(--gradient-main);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.5rem;
      }
      
      .trust-label {
        font-size: 0.9375rem;
        color: var(--text-secondary);
        font-weight: 600;
      }
    }
  }
}

.pain-points-section {
  padding: 100px 0;
  background: var(--bg-primary);
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
  
  .card {
    padding: 3rem;
    border-radius: var(--radius-2xl);
    background: white;
    box-shadow: var(--shadow-lg);
    text-align: center;
    transition: all var(--transition-base);
    border: 2px solid transparent;
    position: relative;
    
    &.highlighted {
      border-color: var(--primary);
      transform: scale(1.05);
      box-shadow: var(--shadow-2xl);
      
      .best-choice-badge {
        display: block;
      }
    }
    
    &:hover {
      transform: translateY(-8px) scale(1.02);
    }
    
    .best-choice-badge {
      display: none;
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--gradient-main);
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      font-weight: 700;
      box-shadow: var(--shadow-lg);
    }
    
    .card-header {
      margin-bottom: 1.5rem;
      
      .material-icons-outlined {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      
      h3 {
        font-size: 1.75rem;
        margin-bottom: 0;
      }
    }
    
    p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      line-height: 1.7;
    }
    
    .cost-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.875rem 1.75rem;
      border-radius: var(--radius-full);
      font-weight: 800;
      font-size: 1.125rem;
      margin-bottom: 2rem;
      
      &.negative {
        background: #fee2e2;
        color: #ef4444;
      }
      
      &.positive {
        background: #dcfce7;
        color: #22c55e;
      }
    }
    
    ul {
      text-align: left;
      
      li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
        font-size: 0.9375rem;
        
        .material-icons-outlined {
          font-size: 1.25rem;
        }
      }
    }
    
    .pain-list li {
      color: #ef4444;
      
      .material-icons-outlined {
        color: #ef4444;
      }
    }
    
    .benefit-list li {
      color: #22c55e;
      
      .material-icons-outlined {
        color: #22c55e;
      }
    }
  }
}

.benefits-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
    }
    
    p {
      color: var(--text-secondary);
      line-height: 1.7;
    }
  }
}

.calculator-section {
  background: var(--primary);
  padding: 100px 0;
  color: white;
  
  .calculator-wrapper {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    
    .calculator-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1.25rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      backdrop-filter: blur(10px);
    }
    
    h2 {
      margin-bottom: 3rem;
      font-size: 2.5rem;
    }
    
    .calculator-content {
      background: white;
      padding: 3rem;
      border-radius: var(--radius-2xl);
      color: var(--text-main);
      box-shadow: var(--shadow-2xl);
      
      .input-group {
        margin-bottom: 2.5rem;
        text-align: left;
        
        label {
          display: block;
          margin-bottom: 1rem;
          font-weight: 700;
          font-size: 1.0625rem;
        }
        
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          border: 2px solid #e5e7eb;
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: all var(--transition-base);
          
          &:focus-within {
            border-color: var(--primary);
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
          }
          
          .input-prefix,
          .input-suffix {
            padding: 0 1.25rem;
            font-weight: 600;
            color: var(--text-light);
            background: var(--bg-secondary);
          }
          
          input {
            flex: 1;
            padding: 1.25rem;
            border: none;
            font-size: 1.375rem;
            font-weight: 700;
            text-align: center;
            outline: none;
          }
        }
      }
      
      .result-box {
        background: linear-gradient(135deg, #dcfce7 0%, #d1fae5 100%);
        padding: 2.5rem;
        border-radius: var(--radius-xl);
        border: 2px solid #86efac;
        
        .result-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          
          .material-icons-outlined {
            color: #15803d;
            font-size: 1.5rem;
          }
          
          .label {
            font-size: 1.0625rem;
            color: #166534;
            font-weight: 600;
          }
        }
        
        .value {
          display: block;
          font-size: 3.5rem;
          font-weight: 900;
          color: #15803d;
          margin-bottom: 1.5rem;
        }
        
        .result-breakdown {
          display: flex;
          gap: 2rem;
          justify-content: center;
          padding-top: 1.5rem;
          border-top: 1px solid #86efac;
          
          .breakdown-item {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            
            span:first-child {
              font-size: 0.875rem;
              color: #166534;
            }
            
            .breakdown-value {
              font-size: 1.25rem;
              font-weight: 800;
              color: #15803d;
            }
          }
        }
      }
    }
  }
}

.plans-section {
  padding: 100px 0;
  background: var(--bg-primary);
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  
  .plan-card {
    background: white;
    padding: 3rem;
    border-radius: var(--radius-2xl);
    border: 2px solid #e5e7eb;
    text-align: center;
    transition: all var(--transition-base);
    position: relative;
    
    &.popular {
      border-color: var(--primary);
      transform: scale(1.05);
      box-shadow: var(--shadow-2xl);
      
      .popular-badge {
        display: flex;
      }
    }
    
    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: var(--shadow-xl);
    }
    
    .popular-badge {
      display: none;
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
      gap: 0.5rem;
      background: var(--gradient-main);
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      font-weight: 700;
      box-shadow: var(--shadow-lg);
    }
    
    h3 {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
      color: var(--text-main);
      font-weight: 700;
    }
    
    .price {
      margin-bottom: 2.5rem;
      
      .currency {
        font-size: 1.5rem;
        vertical-align: top;
        font-weight: 700;
      }
      
      .amount {
        font-size: 4rem;
        font-weight: 900;
        background: var(--gradient-main);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .period {
        color: var(--text-light);
        font-size: 1.125rem;
      }
    }
    
    .features {
      margin-bottom: 2.5rem;
      text-align: left;
      
      li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.125rem;
        color: var(--text-secondary);
        
        .material-icons-outlined {
          color: var(--success);
          font-size: 1.375rem;
        }
      }
    }
    
    .full-width {
      width: 100%;
    }
  }
}

.social-proof {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
}

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

.final-cta {
  padding: 100px 0;
  background: var(--gradient-main);
  
  .cta-content {
    text-align: center;
    color: white;
    max-width: 700px;
    margin: 0 auto;
    
    h2 {
      font-size: 3rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
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
    
    .actions {
      flex-direction: column;
      
      .btn {
        width: 100%;
      }
    }
    
    .trust-stats {
      gap: 2rem;
      flex-wrap: wrap;
    }
  }
  
  .comparison-grid {
    grid-template-columns: 1fr;
    
    .card.highlighted {
      transform: scale(1);
    }
  }
  
  .section-title {
    font-size: 2.25rem !important;
  }
  
  .calculator-section .calculator-content {
    padding: 2rem;
    
    .result-box .value {
      font-size: 2.5rem;
    }
    
    .result-breakdown {
      flex-direction: column;
      gap: 1rem;
    }
  }
  
  .plans-grid {
    grid-template-columns: 1fr;
    
    .plan-card.popular {
      transform: scale(1);
    }
  }
}
</style>
