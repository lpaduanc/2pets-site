<template>
  <div class="ai-business-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">
            <span class="material-icons-outlined">business_center</span>
            Para Profissionais
          </span>
          <h1>2Pets Business Insight</h1>
          <p class="subtitle">A primeira Inteligência Artificial focada em fazer o seu negócio pet crescer.</p>
          <div class="actions">
            <router-link to="/register?type=professional" class="btn btn-secondary btn-lg">
              <span class="material-icons-outlined">rocket_launch</span>
              Começar Agora
            </router-link>
          </div>
        </div>
      </div>
      <div class="hero-decoration"></div>
    </section>

    <!-- Features Grid -->
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">trending_up</span>
            </div>
            <h3>Estratégias de Crescimento</h3>
            <p>Receba planos de ação personalizados para atrair mais clientes e aumentar o faturamento da sua clínica ou petshop.</p>
          </div>
          <div class="feature-card">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">campaign</span>
            </div>
            <h3>Marketing Digital</h3>
            <p>Ideias de posts, legendas e campanhas para redes sociais geradas por IA, prontas para usar.</p>
          </div>
          <div class="feature-card">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">inventory_2</span>
            </div>
            <h3>Gestão Inteligente</h3>
            <p>Insights sobre estoque, precificação e otimização de processos para reduzir custos.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Section -->
    <section class="demo-section">
      <div class="container">
        <div class="demo-content">
          <div class="text-col">
            <h2>Seu consultor 24 horas</h2>
            <p>Tire dúvidas sobre gestão, marketing e estratégia a qualquer momento. O 2Pets Business Insight aprende com o seu negócio.</p>
            <ul class="benefits-list">
              <li><span class="material-icons-outlined">check_circle</span> Respostas imediatas</li>
              <li><span class="material-icons-outlined">check_circle</span> Focado no mercado Pet</li>
              <li><span class="material-icons-outlined">check_circle</span> Integrado à sua gestão</li>
            </ul>
          </div>
          <div class="image-col">
            <div class="chat-preview business">
              <div class="chat-header">
                <div class="avatar">
                  <span class="material-icons-outlined">business_center</span>
                </div>
                <div class="info">
                  <h4>Business Insight</h4>
                  <span>Online agora</span>
                </div>
              </div>
              <div class="chat-body">
                <div class="msg user">Como posso divulgar minha campanha de vacinação?</div>
                <div class="msg ai">
                  <strong>Business Insight:</strong> Ótima iniciativa! Aqui estão algumas ideias:
                  <br>1. Crie um "Dia D" da vacinação com brindes.
                  <br>2. Use o Instagram para mostrar a importância da prevenção.
                  <br>3. Ofereça 10% de desconto no banho para quem vacinar na semana.
                </div>
              </div>
              <div class="chat-input">
                <input type="text" placeholder="Digite sua dúvida de gestão..." disabled>
                <button disabled>
                  <span class="material-icons-outlined">send</span>
                </button>
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
          <h2>Pronto para transformar seu negócio?</h2>
          <p>Junte-se a centenas de profissionais que já usam a 2Pets.</p>
          <router-link to="/register?type=professional" class="btn btn-white btn-lg">
            Criar Conta Profissional
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: '2Pets Business Insight - IA para Negócios Pet',
  meta: [
    { name: 'description', content: 'Impulsione sua clínica veterinária ou petshop com o 2Pets Business Insight. Marketing, gestão e estratégia com Inteligência Artificial.' }
  ]
})
</script>

<style lang="scss" scoped>
.ai-business-page {
  padding-bottom: 0;
}

.hero-section {
  padding: 160px 0 120px;
  background: #0f172a;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
  }
  
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.2);
    border-radius: var(--radius-full);
    font-weight: 700;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
    color: #818cf8;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  
  h1 {
    font-size: 4.5rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .subtitle {
    font-size: 1.5rem;
    color: #94a3b8;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }

  .btn-secondary {
    background: #6366f1;
    color: white;
    border: none;
    font-weight: 700;
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
    
    &:hover {
      background: #4f46e5;
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
    }
  }
}

.features-section {
  padding: 120px 0;
  background: #f8fafc;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  
  .feature-card {
    background: white;
    padding: 3.5rem 2.5rem;
    border-radius: var(--radius-2xl);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid #e2e8f0;
    position: relative;
    overflow: hidden;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #6366f1;
      transform: scaleX(0);
      transition: transform 0.4s ease;
      transform-origin: left;
    }
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
      border-color: #6366f1;
      
      &::after {
        transform: scaleX(1);
      }
      
      .icon-wrapper {
        background: #6366f1;
        transform: scale(1.1);
        
        span {
          color: white;
        }
      }
    }
    
    .icon-wrapper {
      width: 90px;
      height: 90px;
      background: #f1f5f9;
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 2rem;
      transition: all 0.4s ease;
      
      span {
        font-size: 44px;
        color: #6366f1;
        transition: color 0.4s ease;
      }
    }
    
    h3 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      font-weight: 800;
      color: #0f172a;
    }
    
    p {
      color: #64748b;
      line-height: 1.7;
      font-size: 1.1rem;
    }
  }
}

.demo-section {
  padding: 120px 0;
  background: white;
  
  .demo-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;
    
    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 4rem;
    }

    h2 {
      font-size: 3rem;
      font-weight: 900;
      color: #0f172a;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    p {
      font-size: 1.2rem;
      color: #64748b;
      margin-bottom: 2.5rem;
      line-height: 1.7;
    }

    .benefits-list {
      list-style: none;
      padding: 0;
      
      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.25rem;
        font-weight: 600;
        color: #334155;
        font-size: 1.1rem;
        
        span {
          color: #6366f1;
          font-size: 1.5rem;
        }
      }
    }
  }
  
  .chat-preview.business {
    background: white;
    border-radius: 24px;
    box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15);
    border: 1px solid #e2e8f0;
    overflow: hidden;
    
    .chat-header {
      padding: 1.5rem;
      background: #0f172a;
      display: flex;
      align-items: center;
      gap: 1rem;
      color: white;
      
      .avatar {
        width: 40px;
        height: 40px;
        background: #6366f1;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      
      .info {
        h4 {
          margin: 0;
          font-weight: 700;
          font-size: 1rem;
        }
        span {
          font-size: 0.8rem;
          color: #94a3b8;
          display: block;
        }
      }
    }

    .chat-body {
      padding: 2rem;
      background: #f8fafc;
      min-height: 350px;
    }
    
    .msg {
      padding: 1.25rem;
      border-radius: 12px;
      margin-bottom: 1.5rem;
      line-height: 1.6;
      max-width: 90%;
      font-size: 1rem;
      
      &.user {
        background: #0f172a;
        color: white;
        margin-left: auto;
        border-bottom-right-radius: 2px;
      }
      
      &.ai {
        background: white;
        color: #334155;
        margin-right: auto;
        border-bottom-left-radius: 2px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        
        strong {
          color: #6366f1;
          display: block;
          margin-bottom: 0.5rem;
        }
      }
    }
    
    .chat-input {
      padding: 1.5rem;
      background: white;
      border-top: 1px solid #e2e8f0;
      display: flex;
      gap: 1rem;
      
      input {
        flex: 1;
        padding: 1rem;
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        background: white;
        outline: none;
        
        &:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
      }
      
      button {
        width: 50px;
        height: 50px;
        border-radius: 8px;
        background: #0f172a;
        color: white;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        
        &:hover {
          background: #1e293b;
        }
      }
    }
  }
}

.cta-section {
  padding: 120px 0;
  background: #0f172a;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }
  
  .cta-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
  }
  
  h2 {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }
  
  p {
    font-size: 1.25rem;
    color: #94a3b8;
    margin-bottom: 3rem;
  }
  
  .btn-white {
    background: white;
    color: #0f172a;
    border: none;
    font-weight: 800;
    padding: 1.25rem 3rem;
    
    &:hover {
      background: #f8fafc;
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
