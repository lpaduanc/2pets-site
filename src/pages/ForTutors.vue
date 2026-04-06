<template>
  <div class="for-tutors-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">
            <span class="badge-icon">🐾</span>
            Para Tutores
          </span>
          <h1>Tudo que seu pet precisa em um so lugar</h1>
          <p class="subtitle">Gerencie a saude, encontre profissionais e tenha o controle completo da vida do seu melhor amigo. Tudo de forma simples e gratuita.</p>
          <div class="hero-actions">
            <router-link to="/register" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">pets</span>
              Cadastrar Meu Pet
              <span class="btn-arrow">→</span>
            </router-link>
            <router-link to="/how-it-works" class="btn btn-outline btn-lg">
              <span class="material-icons-outlined">play_circle</span>
              Como Funciona
            </router-link>
          </div>

          <!-- Trust Indicators -->
          <div class="trust-badges">
            <div class="trust-item">
              <span class="material-icons-outlined">verified_user</span>
              <span>100% Gratuito</span>
            </div>
            <div class="trust-item">
              <span class="material-icons-outlined">lock</span>
              <span>Dados Protegidos</span>
            </div>
            <div class="trust-item">
              <span class="material-icons-outlined">smartphone</span>
              <span>Web e Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Recursos</span>
          <h2 class="section-title">Tudo para o cuidado do seu pet</h2>
          <p class="section-subtitle">Funcionalidades pensadas para facilitar o dia a dia de quem ama pets</p>
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

    <!-- How It Helps Section -->
    <section class="helps-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Vantagens</span>
          <h2 class="section-title">Como a 2Pets facilita sua vida</h2>
        </div>
        <div class="helps-grid">
          <div class="help-card" v-for="(item, index) in helpItems" :key="index">
            <div class="help-before">
              <span class="material-icons-outlined">close</span>
              <span>{{ item.before }}</span>
            </div>
            <div class="help-arrow">
              <span class="material-icons-outlined">arrow_forward</span>
            </div>
            <div class="help-after">
              <span class="material-icons-outlined">check_circle</span>
              <span>{{ item.after }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Depoimentos</span>
          <h2 class="section-title">O que tutores dizem sobre a 2Pets</h2>
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

    <!-- Pet Card Preview Section -->
    <section class="preview-section">
      <div class="container">
        <div class="preview-content">
          <div class="preview-text">
            <span class="section-badge">Carteirinha Virtual</span>
            <h2>Carteirinha digital do seu pet</h2>
            <p>Tenha todas as informacoes do seu pet acessiveis a qualquer momento. Compartilhe com veterinarios via QR Code e nunca mais perca dados importantes.</p>
            <ul class="preview-features">
              <li>
                <span class="material-icons-outlined">qr_code_2</span>
                QR Code com dados essenciais
              </li>
              <li>
                <span class="material-icons-outlined">share</span>
                Compartilhe com um toque
              </li>
              <li>
                <span class="material-icons-outlined">vaccines</span>
                Status de vacinas atualizado
              </li>
              <li>
                <span class="material-icons-outlined">download</span>
                Baixe como imagem
              </li>
            </ul>
            <router-link to="/register" class="btn btn-primary">
              <span class="material-icons-outlined">badge</span>
              Criar Carteirinha
            </router-link>
          </div>
          <div class="preview-card">
            <div class="mock-card">
              <div class="card-header-mock">
                <div class="card-avatar">🐶</div>
                <div class="card-info">
                  <strong>Rex</strong>
                  <span>Golden Retriever - 3 anos</span>
                </div>
              </div>
              <div class="card-badges-mock">
                <span class="badge-ok">
                  <span class="material-icons-outlined">check_circle</span>
                  Vacinas em dia
                </span>
                <span class="badge-ok">
                  <span class="material-icons-outlined">check_circle</span>
                  Vermifugo ok
                </span>
              </div>
              <div class="card-qr-mock">
                <span class="material-icons-outlined">qr_code_2</span>
                <span>Escaneie para ver dados</span>
              </div>
              <div class="card-footer-mock">
                <span>Tutor: Maria Silva</span>
                <span>Tel: (11) 98765-4321</span>
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
          <h2>Cuide melhor do seu pet com a 2Pets</h2>
          <p>Cadastre-se gratuitamente e tenha acesso a todas as ferramentas para cuidar da saude do seu melhor amigo</p>
          <div class="cta-actions">
            <router-link to="/register" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">rocket_launch</span>
              Criar Conta Gratis
            </router-link>
            <router-link to="/pricing" class="btn btn-ghost btn-lg">
              Ver Planos
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
  title: '2Pets para Tutores - Gerencie a Saude do Seu Pet',
  meta: [
    { name: 'description', content: 'Carteirinha virtual, historico de saude, alertas de vacinas, controle de gastos e busca por profissionais. Tudo que seu pet precisa em um so lugar.' }
  ]
})

const features = ref([
  {
    icon: 'qr_code_2',
    title: 'Carteirinha virtual com QR Code',
    description: 'Carteira digital do seu pet com dados essenciais, QR Code e opcao de compartilhar ou baixar como imagem.'
  },
  {
    icon: 'medical_information',
    title: 'Historico completo de saude',
    description: 'Vacinas, consultas, exames, medicamentos e cirurgias organizados em uma timeline facil de entender.'
  },
  {
    icon: 'notifications_active',
    title: 'Alertas de vacinas e vermifugos',
    description: 'Receba notificacoes quando vacinas estiverem vencendo ou vermifugos precisarem ser renovados.'
  },
  {
    icon: 'account_balance_wallet',
    title: 'Controle de gastos por pet',
    description: 'Acompanhe quanto gasta com cada pet por categoria: racao, consultas, remedios, estetica e mais.'
  },
  {
    icon: 'location_on',
    title: 'Busca por geolocalizacao',
    description: 'Encontre veterinarios, clinicas e petshops proximos a voce com filtros por especialidade e avaliacao.'
  },
  {
    icon: 'event_available',
    title: 'Agendamento online',
    description: 'Agende consultas, banho e tosa e outros servicos diretamente pela plataforma com confirmacao instantanea.'
  }
])

const helpItems = ref([
  {
    before: 'Papeis e cadernetas perdidos',
    after: 'Tudo digital e organizado'
  },
  {
    before: 'Esquecimento de vacinas',
    after: 'Alertas automaticos no celular'
  },
  {
    before: 'Sem controle dos gastos',
    after: 'Dashboard completo por pet'
  },
  {
    before: 'Dificuldade para achar vet',
    after: 'Busca inteligente por localizacao'
  },
  {
    before: 'Historico espalhado em clinicas',
    after: 'Prontuario unificado no app'
  }
])

const testimonials = ref([
  {
    name: 'Maria Silva',
    role: 'Tutora do Rex e da Luna',
    text: 'A 2Pets mudou completamente a forma como cuido dos meus pets. Ter todas as vacinas e consultas organizadas em um so lugar e incrivel!'
  },
  {
    name: 'Pedro Oliveira',
    role: 'Tutor do Thor',
    text: 'O alerta de vacina me salvou! Quase esqueci a V10 do meu cachorro. Agora recebo lembretes no celular e nunca mais perco uma data.'
  },
  {
    name: 'Ana Costa',
    role: 'Tutora da Mia e do Simba',
    text: 'O controle de gastos me surpreendeu. Nao imaginava quanto gastava com meus gatos por mes. Agora consigo planejar melhor o orcamento.'
  }
])
</script>

<style lang="scss" scoped>
.for-tutors-page {
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
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: float 6s ease-in-out infinite;
  }

  &::after {
    content: '';
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

  h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    background: var(--gradient-main);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .subtitle {
    font-size: 1.5rem;
    color: var(--text-secondary);
    max-width: 750px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }

  .hero-actions {
    display: flex;
    gap: 1.25rem;
    justify-content: center;
    margin-bottom: 3rem;

    .btn-arrow {
      display: inline-block;
      transition: transform var(--transition-base);
    }

    .btn:hover .btn-arrow {
      transform: translateX(4px);
    }
  }

  .trust-badges {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    flex-wrap: wrap;

    .trust-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9375rem;
      color: var(--text-secondary);
      font-weight: 500;

      .material-icons-outlined {
        color: var(--success);
        font-size: 1.25rem;
      }
    }
  }
}

.features-section {
  padding: 100px 0;
  background: var(--bg-primary);

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2.5rem;

    .feature-card {
      background: white;
      padding: 3rem;
      border-radius: var(--radius-2xl);
      transition: all var(--transition-base);
      border: 2px solid transparent;
      animation: fadeIn 0.6s ease-out backwards;

      &:hover {
        transform: translateY(-12px);
        box-shadow: var(--shadow-2xl);
        border-color: var(--primary);

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

.helps-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);

  .helps-grid {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .help-card {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      background: white;
      padding: 1.5rem 2rem;
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
      transition: all var(--transition-base);

      &:hover {
        transform: translateX(8px);
        box-shadow: var(--shadow-lg);
      }

      .help-before {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex: 1;
        color: #ef4444;
        font-weight: 600;

        .material-icons-outlined {
          font-size: 1.25rem;
          background: #fee2e2;
          border-radius: 50%;
          padding: 0.375rem;
        }
      }

      .help-arrow {
        flex-shrink: 0;

        .material-icons-outlined {
          color: var(--primary);
          font-size: 1.5rem;
        }
      }

      .help-after {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex: 1;
        color: #22c55e;
        font-weight: 600;

        .material-icons-outlined {
          font-size: 1.25rem;
          background: #dcfce7;
          border-radius: 50%;
          padding: 0.375rem;
        }
      }
    }
  }
}

.testimonials-section {
  padding: 100px 0;
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

.preview-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);

  .preview-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;

    .preview-text {
      h2 {
        font-size: 2.75rem;
        font-weight: 900;
        margin-bottom: 1.5rem;
        color: var(--text-main);
        letter-spacing: -0.02em;
      }

      > p {
        font-size: 1.25rem;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 2rem;
      }

      .preview-features {
        list-style: none;
        padding: 0;
        margin: 0 0 2.5rem;

        li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 1.0625rem;
          color: var(--text-main);
          font-weight: 500;

          .material-icons-outlined {
            color: var(--primary);
            font-size: 1.375rem;
          }
        }
      }
    }

    .preview-card {
      display: flex;
      justify-content: center;

      .mock-card {
        background: white;
        border-radius: var(--radius-2xl);
        padding: 2.5rem;
        box-shadow: var(--shadow-2xl);
        border: 2px solid rgba(99, 102, 241, 0.15);
        width: 100%;
        max-width: 380px;

        .card-header-mock {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;

          .card-avatar {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #fef3c7, #fde68a);
            border-radius: var(--radius-xl);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
          }

          .card-info {
            strong {
              display: block;
              font-size: 1.375rem;
              color: var(--text-main);
              margin-bottom: 0.25rem;
            }

            span {
              font-size: 0.9375rem;
              color: var(--text-secondary);
            }
          }
        }

        .card-badges-mock {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;

          .badge-ok {
            display: inline-flex;
            align-items: center;
            gap: 0.375rem;
            padding: 0.375rem 0.875rem;
            background: #dcfce7;
            color: #15803d;
            border-radius: var(--radius-full);
            font-size: 0.8125rem;
            font-weight: 600;

            .material-icons-outlined {
              font-size: 1rem;
            }
          }
        }

        .card-qr-mock {
          background: #f8fafc;
          border-radius: var(--radius-xl);
          padding: 2rem;
          text-align: center;
          margin-bottom: 1.5rem;
          border: 2px dashed rgba(99, 102, 241, 0.2);

          .material-icons-outlined {
            display: block;
            font-size: 4rem;
            color: var(--primary);
            margin-bottom: 0.5rem;
          }

          span {
            font-size: 0.875rem;
            color: var(--text-light);
          }
        }

        .card-footer-mock {
          display: flex;
          justify-content: space-between;
          font-size: 0.8125rem;
          color: var(--text-light);
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
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

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
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

    .hero-actions {
      flex-direction: column;

      .btn {
        width: 100%;
      }
    }

    .trust-badges {
      gap: 1.5rem;
    }
  }

  .features-section .features-grid {
    grid-template-columns: 1fr;
  }

  .helps-section .helps-grid .help-card {
    flex-direction: column;
    text-align: center;

    .help-arrow .material-icons-outlined {
      transform: rotate(90deg);
    }
  }

  .testimonials-section .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .preview-section .preview-content {
    grid-template-columns: 1fr;
    gap: 3rem;
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
