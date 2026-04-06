<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">
            <span class="material-icons-outlined">support_agent</span>
            Contato
          </span>
          <h1>Fale conosco</h1>
          <p class="subtitle">Tem alguma duvida, sugestao ou precisa de ajuda? Nossa equipe esta pronta para atender voce.</p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <h2>Envie sua mensagem</h2>
            <p class="form-subtitle">Preencha o formulario abaixo e retornaremos em ate 24 horas uteis.</p>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name">
                  <span class="material-icons-outlined">person</span>
                  Nome completo
                </label>
                <input id="name" type="text" v-model="form.name" placeholder="Seu nome" required />
              </div>
              <div class="form-group">
                <label for="email">
                  <span class="material-icons-outlined">email</span>
                  E-mail
                </label>
                <input id="email" type="email" v-model="form.email" placeholder="seu@email.com" required />
              </div>
              <div class="form-group">
                <label for="subject">
                  <span class="material-icons-outlined">topic</span>
                  Assunto
                </label>
                <select id="subject" v-model="form.subject" required>
                  <option value="" disabled>Selecione um assunto</option>
                  <option value="duvida">Duvida geral</option>
                  <option value="cadastro">Problemas com cadastro</option>
                  <option value="profissional">Sou profissional e quero saber mais</option>
                  <option value="parceria">Proposta de parceria</option>
                  <option value="bug">Reportar problema tecnico</option>
                  <option value="sugestao">Sugestao de melhoria</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">
                  <span class="material-icons-outlined">chat</span>
                  Mensagem
                </label>
                <textarea id="message" v-model="form.message" placeholder="Descreva como podemos ajudar..." rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg">
                <span class="material-icons-outlined">send</span>
                Enviar Mensagem
              </button>
            </form>
          </div>

          <!-- Contact Info Sidebar -->
          <div class="contact-sidebar">
            <!-- Quick Channels -->
            <div class="sidebar-card">
              <h3>Canais de atendimento</h3>
              <div class="channel-list">
                <div class="channel-item">
                  <div class="channel-icon">
                    <span class="material-icons-outlined">email</span>
                  </div>
                  <div class="channel-info">
                    <strong>E-mail</strong>
                    <span>contato@2pets.com.br</span>
                  </div>
                </div>
                <div class="channel-item">
                  <div class="channel-icon whatsapp">
                    <span class="material-icons-outlined">chat</span>
                  </div>
                  <div class="channel-info">
                    <strong>WhatsApp</strong>
                    <span>(11) 99999-2PETS</span>
                  </div>
                </div>
                <div class="channel-item">
                  <div class="channel-icon">
                    <span class="material-icons-outlined">schedule</span>
                  </div>
                  <div class="channel-info">
                    <strong>Horario de atendimento</strong>
                    <span>Seg a Sex: 8h as 18h</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="sidebar-card">
              <h3>Redes sociais</h3>
              <div class="social-links">
                <a href="#" class="social-link" title="Instagram">
                  <span class="material-icons-outlined">photo_camera</span>
                  <span>@2pets.oficial</span>
                </a>
                <a href="#" class="social-link" title="Facebook">
                  <span class="material-icons-outlined">thumb_up</span>
                  <span>2Pets Brasil</span>
                </a>
                <a href="#" class="social-link" title="LinkedIn">
                  <span class="material-icons-outlined">work</span>
                  <span>2Pets</span>
                </a>
                <a href="#" class="social-link" title="YouTube">
                  <span class="material-icons-outlined">play_circle</span>
                  <span>2Pets TV</span>
                </a>
              </div>
            </div>

            <!-- Office -->
            <div class="sidebar-card">
              <h3>Nosso escritorio</h3>
              <div class="office-info">
                <span class="material-icons-outlined">location_on</span>
                <div>
                  <p>Av. Paulista, 1000 - Bela Vista</p>
                  <p>Sao Paulo - SP, 01310-100</p>
                  <p class="office-note">Atendimento apenas online no momento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">FAQ</span>
          <h2 class="section-title">Perguntas frequentes</h2>
          <p class="section-subtitle">Encontre respostas rapidas para as duvidas mais comuns</p>
        </div>
        <div class="faq-grid">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button class="faq-question" @click="toggleFaq(index)">
              <div class="question-content">
                <span class="material-icons-outlined">{{ faq.icon }}</span>
                <span>{{ faq.question }}</span>
              </div>
              <span class="material-icons-outlined toggle-icon" :class="{ open: openFaq === index }">expand_more</span>
            </button>
            <div class="faq-answer" :class="{ visible: openFaq === index }">
              <p>{{ faq.answer }}</p>
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
          <h2>Ainda tem duvidas? Experimente gratis!</h2>
          <p>Crie sua conta em menos de 2 minutos e descubra como a 2Pets pode ajudar voce e seu pet</p>
          <div class="cta-actions">
            <router-link to="/register" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">rocket_launch</span>
              Criar Conta Gratis
            </router-link>
            <router-link to="/how-it-works" class="btn btn-ghost btn-lg">
              Como Funciona
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: '2Pets - Fale Conosco | Contato e Suporte',
  meta: [
    { name: 'description', content: 'Entre em contato com a 2Pets. Tire suas duvidas, envie sugestoes ou solicite suporte. Respondemos em ate 24 horas.' }
  ]
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const openFaq = ref(null)

function toggleFaq(index) {
  openFaq.value = openFaq.value === index ? null : index
}

function handleSubmit() {
  alert('Mensagem enviada com sucesso! Retornaremos em breve.')
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}

const faqs = ref([
  {
    icon: 'person_add',
    question: 'Como me cadastro na 2Pets?',
    answer: 'O cadastro e simples e gratuito! Clique em "Criar Conta", preencha seus dados basicos (nome, e-mail e telefone), escolha se voce e tutor ou profissional e pronto. O processo leva menos de 2 minutos.'
  },
  {
    icon: 'payments',
    question: 'A 2Pets e gratuita?',
    answer: 'Sim! O plano basico para tutores e totalmente gratuito e inclui ate 2 pets, carteirinha virtual, alertas de vacinas e busca de profissionais. Temos tambem planos premium com recursos extras a partir de R$ 19,90/mes.'
  },
  {
    icon: 'location_on',
    question: 'Como encontro um veterinario proximo?',
    answer: 'Basta permitir o acesso a sua localizacao ou digitar seu endereco na busca. A 2Pets usa geolocalizacao para mostrar profissionais verificados proximos a voce, com filtros por especialidade, avaliacao e disponibilidade.'
  },
  {
    icon: 'lock',
    question: 'Meus dados estao seguros?',
    answer: 'Absolutamente! Seguimos rigorosamente a LGPD (Lei Geral de Protecao de Dados). Todos os dados sao criptografados, armazenados em servidores seguros e nunca compartilhados sem sua autorizacao explicita. Voce tem total controle sobre suas informacoes.'
  },
  {
    icon: 'credit_card',
    question: 'Como funciona o pagamento?',
    answer: 'Aceitamos cartao de credito (Visa, Mastercard, Elo), Pix e boleto bancario. Os pagamentos sao processados com seguranca via Stripe e Mercado Pago. Planos pagos oferecem 7 dias de trial gratuito.'
  },
  {
    icon: 'cancel',
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim! Nao existe fidelidade. Voce pode cancelar seu plano pago a qualquer momento direto pelo app ou site. Voce mantera acesso aos recursos premium ate o final do periodo ja pago. Seus dados permanecem salvos caso queira voltar.'
  }
])
</script>

<style lang="scss" scoped>
.contact-page {
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

.contact-section {
  padding: 100px 0;
  background: var(--bg-primary);

  .contact-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: start;
  }
}

.contact-form-wrapper {
  background: white;
  padding: 3rem;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
    color: var(--text-main);
  }

  .form-subtitle {
    font-size: 1.0625rem;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
  }
}

.contact-form {
  .form-group {
    margin-bottom: 1.75rem;

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
      font-size: 0.9375rem;
      color: var(--text-main);

      .material-icons-outlined {
        font-size: 1.125rem;
        color: var(--primary);
      }
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 1rem 1.25rem;
      border: 2px solid #e5e7eb;
      border-radius: var(--radius-xl);
      font-size: 1rem;
      color: var(--text-main);
      background: white;
      transition: all var(--transition-base);
      font-family: inherit;
      outline: none;

      &::placeholder {
        color: var(--text-light);
      }

      &:focus {
        border-color: var(--primary);
        box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
      }
    }

    select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      background-size: 1.25rem;
      padding-right: 3rem;
      cursor: pointer;
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }
  }

  .btn {
    width: 100%;
  }
}

.contact-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .sidebar-card {
    background: white;
    padding: 2rem;
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-md);

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--text-main);
    }
  }
}

.channel-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .channel-item {
    display: flex;
    align-items: center;
    gap: 1rem;

    .channel-icon {
      width: 48px;
      height: 48px;
      background: rgba(99, 102, 241, 0.1);
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      .material-icons-outlined {
        color: var(--primary);
        font-size: 1.375rem;
      }

      &.whatsapp {
        background: #dcfce7;

        .material-icons-outlined {
          color: #22c55e;
        }
      }
    }

    .channel-info {
      strong {
        display: block;
        font-size: 0.9375rem;
        color: var(--text-main);
        margin-bottom: 0.125rem;
      }

      span {
        font-size: 0.875rem;
        color: var(--text-secondary);
      }
    }
  }
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: #f8fafc;
    border-radius: var(--radius-lg);
    text-decoration: none;
    color: var(--text-main);
    font-weight: 500;
    transition: all var(--transition-base);

    &:hover {
      background: rgba(99, 102, 241, 0.1);
      color: var(--primary);
      transform: translateX(4px);
    }

    .material-icons-outlined {
      color: var(--primary);
      font-size: 1.25rem;
    }
  }
}

.office-info {
  display: flex;
  gap: 1rem;

  .material-icons-outlined {
    color: var(--primary);
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 0.125rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;

    &.office-note {
      margin-top: 0.5rem;
      font-size: 0.8125rem;
      color: var(--text-light);
      font-style: italic;
    }
  }
}

.faq-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);

  .faq-grid {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .faq-item {
      background: white;
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      border: 2px solid transparent;
      transition: all var(--transition-base);

      &:hover {
        border-color: rgba(99, 102, 241, 0.2);
      }

      .faq-question {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
        border: none;
        background: none;
        cursor: pointer;
        text-align: left;

        .question-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--text-main);

          .material-icons-outlined {
            color: var(--primary);
            font-size: 1.25rem;
          }
        }

        .toggle-icon {
          color: var(--text-light);
          font-size: 1.5rem;
          transition: transform 0.3s ease;

          &.open {
            transform: rotate(180deg);
          }
        }
      }

      .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease, padding 0.3s ease;
        padding: 0 2rem;

        &.visible {
          max-height: 300px;
          padding: 0 2rem 1.5rem;
        }

        p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
          padding-left: 2rem;
        }
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

  .contact-section .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-form-wrapper {
    padding: 2rem;
  }

  .faq-section .faq-grid .faq-item {
    .faq-question {
      padding: 1.25rem 1.5rem;

      .question-content {
        font-size: 0.9375rem;
      }
    }

    .faq-answer {
      padding: 0 1.5rem;

      &.visible {
        padding: 0 1.5rem 1.25rem;
      }

      p {
        padding-left: 0;
      }
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
