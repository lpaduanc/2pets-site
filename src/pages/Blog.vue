<template>
  <div class="blog-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">
            <span class="material-icons-outlined">auto_stories</span>
            Blog
          </span>
          <h1>Blog 2Pets</h1>
          <p class="subtitle">Dicas, informacoes e novidades para cuidar melhor do seu pet. Conteudo escrito por especialistas do mundo animal.</p>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="articles-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Artigos</span>
          <h2 class="section-title">Ultimos artigos</h2>
          <p class="section-subtitle">Conteudo atualizado para tutores e profissionais</p>
        </div>
        <div class="articles-grid">
          <div class="article-card" v-for="(article, index) in articles" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="article-image">
              <div class="image-placeholder" :style="{ background: article.gradient }">
                <span class="material-icons-outlined">{{ article.icon }}</span>
              </div>
              <span class="article-category">{{ article.category }}</span>
            </div>
            <div class="article-body">
              <div class="article-meta">
                <span class="meta-item">
                  <span class="material-icons-outlined">calendar_today</span>
                  {{ article.date }}
                </span>
                <span class="meta-item">
                  <span class="material-icons-outlined">schedule</span>
                  {{ article.readTime }}
                </span>
              </div>
              <h3>{{ article.title }}</h3>
              <p>{{ article.excerpt }}</p>
              <div class="article-footer">
                <div class="author-mini">
                  <div class="author-avatar-mini">{{ article.author.charAt(0) }}</div>
                  <span>{{ article.author }}</span>
                </div>
                <span class="read-more">
                  Ler artigo
                  <span class="material-icons-outlined">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Coming Soon Note -->
        <div class="coming-soon">
          <div class="coming-soon-content">
            <span class="material-icons-outlined">edit_note</span>
            <h3>Em breve mais artigos</h3>
            <p>Estamos preparando conteudo incrivel sobre cuidados com pets, nutricao animal, saude preventiva e muito mais. Cadastre-se para ser notificado!</p>
            <router-link to="/register" class="btn btn-primary">
              <span class="material-icons-outlined">notifications</span>
              Quero ser notificado
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <div class="newsletter-text">
            <span class="section-badge">Newsletter</span>
            <h2>Receba dicas semanais no seu e-mail</h2>
            <p>Conteudo exclusivo sobre saude pet, promocoes e novidades da 2Pets direto na sua caixa de entrada.</p>
          </div>
          <div class="newsletter-form">
            <div class="input-group">
              <span class="material-icons-outlined">email</span>
              <input type="email" placeholder="Seu melhor e-mail" v-model="email" />
              <button class="btn btn-primary" @click="subscribe">Assinar</button>
            </div>
            <span class="newsletter-note">
              <span class="material-icons-outlined">lock</span>
              Sem spam. Cancele a qualquer momento.
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Topics Section -->
    <section class="topics-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Categorias</span>
          <h2 class="section-title">Explore por tema</h2>
        </div>
        <div class="topics-grid">
          <div class="topic-card" v-for="(topic, index) in topics" :key="index">
            <span class="topic-emoji">{{ topic.emoji }}</span>
            <h3>{{ topic.name }}</h3>
            <span class="topic-count">{{ topic.count }} artigos</span>
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
  title: '2Pets Blog - Dicas e Cuidados com Pets',
  meta: [
    { name: 'description', content: 'Blog da 2Pets com dicas de saude, nutricao, vacinacao e cuidados para caes, gatos e outros pets. Conteudo escrito por veterinarios.' }
  ]
})

const email = ref('')

function subscribe() {
  if (email.value) {
    alert('Obrigado! Voce sera notificado quando novos artigos forem publicados.')
    email.value = ''
  }
}

const articles = ref([
  {
    title: '5 sinais de que seu pet precisa ir ao veterinario',
    excerpt: 'Saiba identificar os sinais de alerta que indicam que seu pet precisa de atencao medica urgente. Prevencao e o melhor remedio.',
    icon: 'medical_services',
    gradient: 'linear-gradient(135deg, #fee2e2, #fecaca)',
    category: 'Saude',
    date: '28 Mar 2026',
    readTime: '5 min de leitura',
    author: 'Dra. Ana Souza'
  },
  {
    title: 'Calendario de vacinacao: tudo que voce precisa saber',
    excerpt: 'Guia completo com todas as vacinas obrigatorias e opcionais para caes e gatos, com datas e intervalos recomendados.',
    icon: 'vaccines',
    gradient: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
    category: 'Vacinacao',
    date: '22 Mar 2026',
    readTime: '8 min de leitura',
    author: 'Dr. Carlos Lima'
  },
  {
    title: 'Como escolher a racao ideal para seu pet',
    excerpt: 'Entenda a diferenca entre racoes premium, super premium e natural. Aprenda a ler rotulos e escolher a melhor opcao.',
    icon: 'restaurant',
    gradient: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    category: 'Nutricao',
    date: '15 Mar 2026',
    readTime: '6 min de leitura',
    author: 'Dra. Maria Torres'
  },
  {
    title: 'Cuidados no verao: proteja seu pet do calor',
    excerpt: 'Dicas essenciais para manter seu pet seguro e saudavel nos dias mais quentes. Hidratacao, passeios e cuidados especiais.',
    icon: 'wb_sunny',
    gradient: 'linear-gradient(135deg, #fed7aa, #fdba74)',
    category: 'Bem-estar',
    date: '08 Mar 2026',
    readTime: '4 min de leitura',
    author: 'Dr. Pedro Nunes'
  },
  {
    title: 'Primeiro dia do filhote em casa: guia completo',
    excerpt: 'Tudo que voce precisa saber para receber seu novo filhote: ambiente, alimentacao, primeiras noites e adaptacao.',
    icon: 'pets',
    gradient: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    category: 'Filhotes',
    date: '01 Mar 2026',
    readTime: '7 min de leitura',
    author: 'Dra. Julia Campos'
  },
  {
    title: 'Castracao: mitos e verdades',
    excerpt: 'Tire suas duvidas sobre a castracao. Idade ideal, beneficios para a saude, recuperacao e o que muda no comportamento.',
    icon: 'healing',
    gradient: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
    category: 'Saude',
    date: '22 Fev 2026',
    readTime: '6 min de leitura',
    author: 'Dr. Roberto Alves'
  }
])

const topics = ref([
  { emoji: '🏥', name: 'Saude', count: 12 },
  { emoji: '💉', name: 'Vacinacao', count: 8 },
  { emoji: '🥗', name: 'Nutricao', count: 10 },
  { emoji: '🐶', name: 'Filhotes', count: 6 },
  { emoji: '☀️', name: 'Bem-estar', count: 9 },
  { emoji: '🧴', name: 'Higiene', count: 5 }
])
</script>

<style lang="scss" scoped>
.blog-page {
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

.articles-section {
  padding: 100px 0;
  background: var(--bg-primary);

  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-bottom: 4rem;

    .article-card {
      background: white;
      border-radius: var(--radius-2xl);
      overflow: hidden;
      border: 2px solid transparent;
      transition: all var(--transition-base);
      animation: fadeIn 0.6s ease-out backwards;
      cursor: pointer;

      &:hover {
        transform: translateY(-10px);
        box-shadow: var(--shadow-2xl);
        border-color: var(--primary);

        .article-image .image-placeholder span {
          transform: scale(1.2);
        }

        .read-more {
          color: var(--primary);

          .material-icons-outlined {
            transform: translateX(4px);
          }
        }
      }

      .article-image {
        position: relative;
        height: 200px;
        overflow: hidden;

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            font-size: 4rem;
            color: rgba(0, 0, 0, 0.15);
            transition: transform var(--transition-base);
          }
        }

        .article-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.375rem 0.875rem;
          background: white;
          color: var(--primary);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: var(--shadow-md);
        }
      }

      .article-body {
        padding: 2rem;

        .article-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1rem;

          .meta-item {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-size: 0.8125rem;
            color: var(--text-light);

            .material-icons-outlined {
              font-size: 1rem;
            }
          }
        }

        h3 {
          font-size: 1.375rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-main);
          line-height: 1.4;
        }

        p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 0.9375rem;
        }

        .article-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .author-mini {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            .author-avatar-mini {
              width: 32px;
              height: 32px;
              background: var(--gradient-main);
              color: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.875rem;
              font-weight: 700;
            }

            span {
              font-size: 0.875rem;
              color: var(--text-secondary);
              font-weight: 500;
            }
          }

          .read-more {
            display: flex;
            align-items: center;
            gap: 0.375rem;
            font-size: 0.9375rem;
            font-weight: 600;
            color: var(--text-light);
            transition: all var(--transition-base);

            .material-icons-outlined {
              font-size: 1.125rem;
              transition: transform var(--transition-base);
            }
          }
        }
      }
    }
  }
}

.coming-soon {
  .coming-soon-content {
    text-align: center;
    background: white;
    padding: 4rem;
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-lg);
    border: 2px dashed rgba(99, 102, 241, 0.2);

    .material-icons-outlined {
      font-size: 3.5rem;
      color: var(--primary);
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 1.75rem;
      font-weight: 800;
      margin-bottom: 1rem;
      color: var(--text-main);
    }

    p {
      font-size: 1.125rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto 2rem;
      line-height: 1.7;
    }
  }
}

.newsletter-section {
  padding: 80px 0;
  background: var(--gradient-main);

  .newsletter-content {
    display: flex;
    align-items: center;
    gap: 4rem;
    color: white;

    .newsletter-text {
      flex: 1;

      .section-badge {
        background: rgba(255, 255, 255, 0.2);
        color: white;
      }

      h2 {
        font-size: 2.5rem;
        font-weight: 900;
        margin-bottom: 1rem;
        color: white;
      }

      p {
        font-size: 1.125rem;
        opacity: 0.9;
        line-height: 1.6;
      }
    }

    .newsletter-form {
      flex: 1;
      max-width: 480px;

      .input-group {
        display: flex;
        align-items: center;
        background: white;
        border-radius: var(--radius-xl);
        overflow: hidden;
        box-shadow: var(--shadow-xl);

        .material-icons-outlined {
          padding-left: 1.25rem;
          color: var(--text-light);
          font-size: 1.375rem;
        }

        input {
          flex: 1;
          padding: 1.25rem 1rem;
          border: none;
          outline: none;
          font-size: 1rem;
          color: var(--text-main);

          &::placeholder {
            color: var(--text-light);
          }
        }

        .btn {
          margin: 0.375rem;
          padding: 0.875rem 1.5rem;
          border-radius: var(--radius-lg);
          white-space: nowrap;
        }
      }

      .newsletter-note {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        margin-top: 0.75rem;
        font-size: 0.8125rem;
        opacity: 0.8;

        .material-icons-outlined {
          font-size: 0.875rem;
        }
      }
    }
  }
}

.topics-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);

  .topics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 1.5rem;

    .topic-card {
      background: white;
      padding: 2rem;
      border-radius: var(--radius-xl);
      text-align: center;
      box-shadow: var(--shadow-md);
      border: 2px solid transparent;
      transition: all var(--transition-base);
      cursor: pointer;

      &:hover {
        transform: translateY(-6px);
        border-color: var(--primary);
        box-shadow: var(--shadow-xl);
      }

      .topic-emoji {
        display: block;
        font-size: 2.5rem;
        margin-bottom: 0.75rem;
      }

      h3 {
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--text-main);
        margin-bottom: 0.375rem;
      }

      .topic-count {
        font-size: 0.8125rem;
        color: var(--text-light);
        font-weight: 500;
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

  .articles-grid {
    grid-template-columns: 1fr !important;
  }

  .coming-soon .coming-soon-content {
    padding: 2.5rem 1.5rem;
  }

  .newsletter-section .newsletter-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    .newsletter-text h2 {
      font-size: 2rem;
    }

    .newsletter-form {
      width: 100%;
      max-width: 100%;

      .input-group {
        flex-direction: column;
        border-radius: var(--radius-xl);

        .material-icons-outlined {
          display: none;
        }

        input {
          width: 100%;
          text-align: center;
        }

        .btn {
          width: calc(100% - 0.75rem);
        }
      }

      .newsletter-note {
        justify-content: center;
      }
    }
  }

  .topics-section .topics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-title {
    font-size: 2.25rem !important;
  }
}
</style>
