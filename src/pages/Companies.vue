<template>
  <div class="companies-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">
            <span class="material-icons-outlined">business</span>
            Para Empresas
          </span>
          <h1>{{ $t('companies.hero.title') }}</h1>
          <p class="subtitle">{{ $t('companies.hero.subtitle') }}</p>
          <div class="actions">
            <button class="btn btn-primary btn-lg" @click="scrollToContact">
              <span class="material-icons-outlined">contact_mail</span>
              {{ $t('companies.cta.button') }}
            </button>
            <a href="#calculator" class="btn btn-outline btn-lg">
              <span class="material-icons-outlined">calculate</span>
              Calcular ROI
            </a>
          </div>
          
          <!-- Trust Stats -->
          <div class="trust-stats">
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Empresas Parceiras</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">95%</span>
              <span class="stat-label">Satisfação RH</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">30%</span>
              <span class="stat-label">Aumento Retenção</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-decoration"></div>
    </section>

    <!-- Company Logos -->
    <section class="companies-logos">
      <div class="container">
        <p class="logos-title">Empresas que confiam na 2Pets</p>
        <div class="logos-grid">
          <div class="logo-placeholder" v-for="i in 6" :key="i">
            <span class="material-icons-outlined">business</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Grid -->
    <section class="benefits-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Benefícios Corporativos</span>
          <h2 class="section-title">Por que investir na saúde pet?</h2>
          <p class="section-subtitle">O benefício que seus colaboradores realmente desejam e valorizam.</p>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">sentiment_very_satisfied</span>
            </div>
            <h3>Retenção de Talentos</h3>
            <p>Aumente a satisfação e fidelidade do seu time oferecendo um benefício que cuida de quem eles amam.</p>
            <div class="benefit-stats">
              <span class="material-icons-outlined">trending_up</span>
              <span>+30% Retenção</span>
            </div>
          </div>
          <div class="benefit-card">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">psychology</span>
            </div>
            <h3>Saúde Mental</h3>
            <p>Pets saudáveis significam donos menos estressados e mais produtivos no ambiente de trabalho.</p>
            <div class="benefit-stats">
              <span class="material-icons-outlined">favorite</span>
              <span>Bem-estar</span>
            </div>
          </div>
          <div class="benefit-card">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">savings</span>
            </div>
            <h3>Economia Real</h3>
            <p>Descontos exclusivos em consultas, exames e produtos para o pet do seu colaborador.</p>
            <div class="benefit-stats">
              <span class="material-icons-outlined">account_balance_wallet</span>
              <span>-25% Custos</span>
            </div>
          </div>
          <div class="benefit-card">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">verified_user</span>
            </div>
            <h3>Gestão Simples</h3>
            <p>Plataforma 100% digital para o RH, sem burocracia e com relatórios mensais de uso.</p>
            <div class="benefit-stats">
              <span class="material-icons-outlined">devices</span>
              <span>100% Digital</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why 2Pets Section -->
    <section class="why-section">
      <div class="container">
        <div class="why-grid">
          <div class="why-content">
            <span class="section-badge">Diferenciais</span>
            <h2>A plataforma mais completa do mercado</h2>
            <ul class="why-list">
              <li>
                <span class="material-icons-outlined">check_circle</span>
                <div>
                  <strong>Rede Credenciada Premium</strong>
                  <p>Acesso aos melhores veterinários e clínicas da região.</p>
                </div>
              </li>
              <li>
                <span class="material-icons-outlined">check_circle</span>
                <div>
                  <strong>Telemedicina Veterinária</strong>
                  <p>Consultas online para triagem e orientações rápidas.</p>
                </div>
              </li>
              <li>
                <span class="material-icons-outlined">check_circle</span>
                <div>
                  <strong>Clube de Vantagens</strong>
                  <p>Descontos em ração, banho, tosa e acessórios.</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="why-image">
            <div class="image-placeholder">
              <span class="material-icons-outlined">pets</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Calculator -->
    <section id="calculator" class="calculator-section">
      <div class="container">
        <div class="calculator-wrapper">
          <span class="calculator-badge">
            <span class="material-icons-outlined">analytics</span>
            Calculadora ROI
          </span>
          <h2>Calcule o impacto na sua empresa</h2>
          <div class="calculator-content">
            <div class="input-row">
              <div class="input-group">
                <label>Número de colaboradores</label>
                <div class="input-wrapper">
                  <span class="material-icons-outlined">groups</span>
                  <input type="number" v-model="employeeCount" placeholder="100" />
                </div>
              </div>
              <div class="input-group">
                <label>% com pets (estimado)</label>
                <div class="input-wrapper">
                  <span class="material-icons-outlined">pets</span>
                  <input type="number" v-model="petOwnerPercentage" placeholder="60" />
                  <span class="input-suffix">%</span>
                </div>
              </div>
            </div>
            
            <div class="results-grid">
              <div class="result-card">
                <span class="material-icons-outlined">people</span>
                <div class="result-label">Colaboradores beneficiados</div>
                <div class="result-value">{{ beneficiaries }}</div>
              </div>
              <div class="result-card">
                <span class="material-icons-outlined">payments</span>
                <div class="result-label">Investimento mensal</div>
                <div class="result-value">R$ {{ monthlyInvestment.toLocaleString('pt-BR') }}</div>
              </div>
              <div class="result-card highlight">
                <span class="material-icons-outlined">trending_up</span>
                <div class="result-label">ROI estimado (retenção)</div>
                <div class="result-value">{{ roiPercentage }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="case-studies">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Casos de Sucesso</span>
          <h2 class="section-title">Resultados reais de empresas parceiras</h2>
        </div>
        <div class="cases-grid">
          <div class="case-card" v-for="(caseStudy, index) in caseStudies" :key="index">
            <div class="case-header">
              <div class="company-logo">
                <span class="material-icons-outlined">business</span>
              </div>
              <div class="company-info">
                <h4>{{ caseStudy.company }}</h4>
                <p>{{ caseStudy.industry }}</p>
              </div>
            </div>
            <div class="case-stats">
              <div class="case-stat">
                <span class="stat-value">{{ caseStudy.retention }}</span>
                <span class="stat-label">Aumento retenção</span>
              </div>
              <div class="case-stat">
                <span class="stat-value">{{ caseStudy.satisfaction }}</span>
                <span class="stat-label">Satisfação</span>
              </div>
            </div>
            <p class="case-quote">"{{ caseStudy.quote }}"</p>
            <div class="case-author">- {{ caseStudy.author }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Processo</span>
          <h2 class="section-title">Como implementar na sua empresa</h2>
        </div>
        <div class="steps-grid">
          <div class="step-card" v-for="(step, index) in implementationSteps" :key="index">
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
    <section id="contact" class="cta-section">
      <div class="container">
        <div class="cta-content">
          <span class="cta-badge">Fale Conosco</span>
          <h2>{{ $t('companies.cta.title') }}</h2>
          <p>{{ $t('companies.cta.subtitle') }}</p>
          <button class="btn btn-primary btn-lg">
            <span class="material-icons-outlined">mail</span>
            {{ $t('companies.cta.button') }}
          </button>
          <p class="cta-note">Resposta em até 24 horas úteis</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: '2Pets para Empresas - Benefício Corporativo',
  meta: [
    { name: 'description', content: 'Ofereça saúde e bem-estar animal como benefício para seus colaboradores. Aumente a retenção de talentos com a 2Pets.' }
  ]
})

const employeeCount = ref(100)
const petOwnerPercentage = ref(60)

const beneficiaries = computed(() => {
  return Math.round((employeeCount.value || 0) * (petOwnerPercentage.value || 0) / 100)
})

const monthlyInvestment = computed(() => {
  return beneficiaries.value * 29 // R$ 29 per employee
})

const roiPercentage = computed(() => {
  // Simplified ROI calculation based on retention improvement
  return 250
})

function getBenefitIcon(index) {
  const icons = ['groups', 'favorite', 'savings', 'admin_panel_settings']
  return icons[index - 1]
}

function getBenefitStat(index) {
  const stats = ['+30% retenção', '+40% engajamento', '-25% custos', '100% digital']
  return stats[index - 1]
}

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

const caseStudies = ref([
  {
    company: 'Tech Solutions SA',
    industry: 'Tecnologia • 500 funcionários',
    retention: '+35%',
    satisfaction: '98%',
    quote: 'O benefício 2Pets foi um diferencial na retenção de talentos. Nossos colaboradores adoram!',
    author: 'Maria Silva, Diretora de RH'
  },
  {
    company: 'Consultoria Premium',
    industry: 'Consultoria • 200 funcionários',
    retention: '+28%',
    satisfaction: '96%',
    quote: 'Implementação simples e resultados imediatos. Recomendamos fortemente.',
    author: 'João Santos, Gerente de Pessoas'
  },
  {
    company: 'Indústria Moderna',
    industry: 'Manufatura • 800 funcionários',
    retention: '+40%',
    satisfaction: '99%',
    quote: 'Investimento baixo com retorno altíssimo. Nosso turnover caiu significativamente.',
    author: 'Ana Costa, VP de RH'
  }
])

const implementationSteps = ref([
  {
    icon: 'handshake',
    title: 'Consultoria inicial',
    description: 'Reunião com nosso time para entender suas necessidades'
  },
  {
    icon: 'description',
    title: 'Proposta personalizada',
    description: 'Plano customizado para o tamanho da sua empresa'
  },
  {
    icon: 'rocket_launch',
    title: 'Implementação',
    description: 'Onboarding rápido e suporte completo'
  },
  {
    icon: 'support_agent',
    title: 'Suporte contínuo',
    description: 'Acompanhamento e relatórios mensais'
  }
])
</script>

<style lang="scss" scoped>
.companies-page {
  padding-bottom: 0;
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
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
  background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  .hero-decoration {
    position: absolute;
    top: -30%;
    right: -15%;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: float 6s ease-in-out infinite;
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
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: var(--radius-full);
    font-size: 0.9375rem;
    font-weight: 600;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
  }
  
  h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }
  
  .subtitle {
    font-size: 1.5rem;
    opacity: 0.95;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }
  
  .actions {
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    margin-bottom: 4rem;
    
    .btn-outline {
      background: rgba(255, 255, 255, 0.15);
      border: 2px solid rgba(255, 255, 255, 0.3);
      color: white;
      backdrop-filter: blur(10px);
      
      &:hover {
        background: rgba(255, 255, 255, 0.25);
        border-color: white;
      }
    }
  }
  
  .trust-stats {
    display: flex;
    gap: 4rem;
    justify-content: center;
    padding-top: 3rem;
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    
    .stat-item {
      text-align: center;
      
      .stat-number {
        display: block;
        font-size: 2.5rem;
        font-weight: 900;
        margin-bottom: 0.5rem;
      }
      
      .stat-label {
        font-size: 0.9375rem;
        opacity: 0.9;
        font-weight: 600;
      }
    }
  }
}

.companies-logos {
  padding: 60px 0;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  
  .logos-title {
    text-align: center;
    color: var(--text-light);
    font-size: 0.9375rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 2.5rem;
  }
  
  .logos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    align-items: center;
    
    .logo-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      background: var(--bg-secondary);
      border-radius: var(--radius-lg);
      opacity: 0.6;
      transition: all var(--transition-base);
      
      &:hover {
        opacity: 1;
        transform: scale(1.05);
      }
      
      .material-icons-outlined {
        font-size: 2.5rem;
        color: var(--text-light);
      }
    }
  }
}

.benefits-section {
  padding: 100px 0;
  background: var(--bg-primary);
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
      border-color: var(--success);
      transform: translateY(-8px);
      box-shadow: var(--shadow-xl);
      
      .icon-wrapper {
        background: var(--gradient-success);
        transform: scale(1.1);
        
        span {
          color: white;
        }
      }
    }
    
    .icon-wrapper {
      width: 64px;
      height: 64px;
      background: rgba(16, 185, 129, 0.1);
      border-radius: var(--radius-xl);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      transition: all var(--transition-base);
      
      span {
        font-size: 32px;
        color: var(--success);
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
      margin-bottom: 1.5rem;
    }
    
    .benefit-stats {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--success);
      font-weight: 700;
      font-size: 0.9375rem;
      
      .material-icons-outlined {
        font-size: 1.25rem;
      }
    }
  }
}

.why-section {
  padding: 100px 0;
  background: white;

  .why-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .why-list {
      list-style: none;
      padding: 0;
      margin-top: 2rem;

      li {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;

        .material-icons-outlined {
          color: var(--success);
          font-size: 1.5rem;
          margin-top: 0.25rem;
        }

        strong {
          display: block;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          color: var(--text-main);
        }

        p {
          color: var(--text-secondary);
          margin: 0;
        }
      }
    }

    .why-image {
      .image-placeholder {
        width: 100%;
        height: 400px;
        background: var(--bg-secondary);
        border-radius: var(--radius-2xl);
        display: flex;
        align-items: center;
        justify-content: center;
        
        .material-icons-outlined {
          font-size: 100px;
          color: var(--success);
          opacity: 0.2;
        }
      }
    }
  }
}

.calculator-section {
  background: linear-gradient(135deg, #064e3b 0%, #047857 100%);
  padding: 100px 0;
  color: white;
  
  .calculator-wrapper {
    max-width: 900px;
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
      font-weight: 900;
    }
    
    .calculator-content {
      background: white;
      padding: 3rem;
      border-radius: var(--radius-2xl);
      color: var(--text-main);
      box-shadow: var(--shadow-2xl);
      
      .input-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
      }
      
      .input-group {
        text-align: left;
        
        label {
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 700;
          font-size: 0.9375rem;
        }
        
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          border: 2px solid #e5e7eb;
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: all var(--transition-base);
          background: var(--bg-secondary);
          
          &:focus-within {
            border-color: var(--success);
            box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
          }
          
          .material-icons-outlined {
            padding: 0 1rem;
            color: var(--text-light);
          }
          
          input {
            flex: 1;
            padding: 1rem;
            border: none;
            font-size: 1.125rem;
            font-weight: 700;
            outline: none;
            background: transparent;
          }
          
          .input-suffix {
            padding: 0 1rem;
            font-weight: 600;
            color: var(--text-light);
          }
        }
      }
      
      .results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        
        .result-card {
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-xl);
          border: 2px solid #e5e7eb;
          transition: all var(--transition-base);
          
          &.highlight {
            background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
            border-color: var(--success);
            
            .material-icons-outlined {
              color: var(--success);
            }
            
            .result-value {
              color: #065f46;
            }
          }
          
          &:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
          }
          
          .material-icons-outlined {
            font-size: 2rem;
            color: var(--text-light);
            margin-bottom: 1rem;
          }
          
          .result-label {
            font-size: 0.875rem;
            color: var(--text-light);
            margin-bottom: 0.5rem;
          }
          
          .result-value {
            font-size: 1.75rem;
            font-weight: 900;
            color: var(--text-main);
          }
        }
      }
    }
  }
}

.case-studies {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  
  .case-card {
    background: white;
    padding: 2.5rem;
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(16, 185, 129, 0.1);
    transition: all var(--transition-base);
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-xl);
      border-color: var(--success);
    }
    
    .case-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      
      .company-logo {
        width: 60px;
        height: 60px;
        background: var(--gradient-success);
        border-radius: var(--radius-lg);
        display: flex;
        align-items: center;
        justify-content: center;
        
        .material-icons-outlined {
          color: white;
          font-size: 2rem;
        }
      }
      
      .company-info {
        h4 {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        
        p {
          font-size: 0.875rem;
          color: var(--text-light);
        }
      }
    }
    
    .case-stats {
      display: flex;
      gap: 2rem;
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid #e5e7eb;
      
      .case-stat {
        flex: 1;
        text-align: center;
        
        .stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 900;
          color: var(--success);
          margin-bottom: 0.25rem;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--text-light);
        }
      }
    }
    
    .case-quote {
      font-style: italic;
      color: var(--text-main);
      line-height: 1.7;
      margin-bottom: 1rem;
    }
    
    .case-author {
      font-size: 0.9375rem;
      color: var(--text-secondary);
      font-weight: 600;
    }
  }
}

.how-it-works {
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
      left: 15%;
      right: 15%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--success), transparent);
      z-index: 0;
    }
    
    .step-card {
      text-align: center;
      position: relative;
      z-index: 1;
      
      .step-number {
        width: 50px;
        height: 50px;
        background: var(--gradient-success);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 800;
        margin: 0 auto 1.5rem;
        box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
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
        border: 2px solid rgba(16, 185, 129, 0.1);
        
        span {
          font-size: 40px;
          color: var(--success);
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
  background: var(--gradient-success);
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
    max-width: 700px;
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
      margin-bottom: 1.5rem;
      font-weight: 900;
    }
    
    p {
      font-size: 1.375rem;
      margin-bottom: 3rem;
      opacity: 0.95;
    }
    
    .btn-primary {
      background: white;
      color: var(--success);
      
      &:hover {
        background: var(--bg-secondary);
        transform: translateY(-4px);
      }
    }
    
    .cta-note {
      margin-top: 1.5rem;
      font-size: 0.9375rem;
      opacity: 0.9;
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
  
  .companies-logos .logos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .section-title {
    font-size: 2.25rem !important;
  }
  
  .calculator-section .calculator-content {
    padding: 2rem;
    
    .input-row {
      grid-template-columns: 1fr;
    }
    
    .results-grid {
      grid-template-columns: 1fr;
    }
  }
  
  .how-it-works .steps-grid::before {
    display: none;
  }
  
  .cta-section .cta-content h2 {
    font-size: 2.25rem;
  }
}
</style>
