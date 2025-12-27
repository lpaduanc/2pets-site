<template>
  <div class="ai-guardian-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">
            <span class="material-icons-outlined">smart_toy</span>
            Novo Recurso
          </span>
          <h1>2Pets AI Guardian</h1>
          <p class="subtitle">Inteligência Artificial cuidando da saúde do seu melhor amigo 24/7.</p>
          <div class="actions">
            <router-link to="/register" class="btn btn-primary btn-lg">
              <span class="material-icons-outlined">rocket_launch</span>
              Experimentar Agora
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
              <span class="material-icons-outlined">medical_services</span>
            </div>
            <h3>Triagem de Sintomas</h3>
            <p>Descreva o que seu pet está sentindo e receba uma avaliação imediata sobre a urgência.</p>
          </div>
          <div class="feature-card">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">insights</span>
            </div>
            <h3>Insights Preventivos</h3>
            <p>Receba dicas personalizadas baseadas na raça, idade e histórico do seu pet.</p>
          </div>
          <div class="feature-card">
            <div class="icon-wrapper">
              <span class="material-icons-outlined">history_edu</span>
            </div>
            <h3>Análise de Documentos</h3>
            <p>Em breve: Envie fotos de exames e carteirinhas para digitalização automática.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Section -->
    <section class="demo-section">
      <div class="container">
        <div class="demo-content">
          <h2>Como funciona</h2>
          <div class="chat-preview">
            <div class="chat-header">
              <div class="avatar">
                <span class="material-icons-outlined">smart_toy</span>
              </div>
              <div class="info">
                <h4>2Pets Guardian</h4>
                <span>Online agora</span>
              </div>
            </div>
            <div class="chat-body">
              <div class="msg user">Meu cachorro está mancando na pata traseira.</div>
              <div class="msg ai">
                <strong>2Pets Guardian:</strong> Entendo. Para avaliar melhor:
                <br>1. Ele apoia a pata no chão ou evita totalmente?
                <br>2. Houve algum trauma recente (queda, batida)?
                <br>Isso pode indicar desde uma lesão muscular até problemas articulares.
              </div>
            </div>
            <div class="chat-input">
              <input type="text" placeholder="Digite sua mensagem..." disabled>
              <button disabled>
                <span class="material-icons-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: '2Pets AI Guardian - Assistente Veterinário Inteligente',
  meta: [
    { name: 'description', content: 'Conheça o 2Pets AI Guardian, a inteligência artificial que ajuda você a cuidar da saúde do seu pet com triagem de sintomas e dicas preventivas.' }
  ]
})
</script>

<style lang="scss" scoped>
.ai-guardian-page {
  padding-bottom: 0;
}

.hero-section {
  padding: 160px 0 120px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .hero-decoration {
    position: absolute;
    top: -50%;
    right: -20%;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    border-radius: 50%;
    animation: pulse 8s infinite ease-in-out;
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
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-full);
    font-weight: 700;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    
    .material-icons-outlined {
      font-size: 1.2rem;
    }
  }
  
  h1 {
    font-size: 4.5rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    text-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .subtitle {
    font-size: 1.5rem;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.6;
  }

  .btn-primary {
    background: white;
    color: #6366f1;
    font-weight: 800;
    border: none;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.3);
      background: #f8fafc;
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
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0,0,0,0.05);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &:hover {
      transform: translateY(-15px);
      box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
      
      &::before {
        opacity: 1;
      }
      
      .icon-wrapper {
        transform: scale(1.1) rotate(5deg);
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        
        span {
          color: white;
        }
      }
    }
    
    .icon-wrapper {
      width: 90px;
      height: 90px;
      background: #e0e7ff;
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
      color: var(--text-main);
    }
    
    p {
      color: var(--text-secondary);
      line-height: 1.7;
      font-size: 1.1rem;
    }
  }
}

.demo-section {
  padding: 120px 0;
  background: white;
  text-align: center;
  
  h2 {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 4rem;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .chat-preview {
    max-width: 700px;
    margin: 0 auto;
    background: white;
    border-radius: 24px;
    text-align: left;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
    border: 1px solid #e2e8f0;
    overflow: hidden;
    
    .chat-header {
      padding: 1.5rem;
      background: white;
      border-bottom: 1px solid #f1f5f9;
      display: flex;
      align-items: center;
      gap: 1rem;
      
      .avatar {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      
      .info {
        h4 {
          margin: 0;
          font-weight: 700;
          color: var(--text-main);
        }
        span {
          font-size: 0.85rem;
          color: #10b981;
          display: flex;
          align-items: center;
          gap: 4px;
          
          &::before {
            content: '';
            width: 6px;
            height: 6px;
            background: #10b981;
            border-radius: 50%;
          }
        }
      }
    }

    .chat-body {
      padding: 2rem;
      background: #f8fafc;
      min-height: 400px;
    }
    
    .msg {
      padding: 1.25rem;
      border-radius: 16px;
      margin-bottom: 1.5rem;
      line-height: 1.6;
      max-width: 85%;
      position: relative;
      font-size: 1.05rem;
      
      &.user {
        background: #6366f1;
        color: white;
        margin-left: auto;
        border-bottom-right-radius: 4px;
        box-shadow: 0 4px 6px rgba(99, 102, 241, 0.2);
      }
      
      &.ai {
        background: white;
        color: var(--text-main);
        margin-right: auto;
        border-bottom-left-radius: 4px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        border: 1px solid #e2e8f0;
        
        strong {
          color: #6366f1;
        }
      }
    }
    
    .chat-input {
      padding: 1.5rem;
      background: white;
      border-top: 1px solid #f1f5f9;
      display: flex;
      gap: 1rem;
      
      input {
        flex: 1;
        padding: 1rem;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: #f8fafc;
        outline: none;
        
        &:focus {
          border-color: #6366f1;
          background: white;
        }
      }
      
      button {
        width: 50px;
        height: 50px;
        border-radius: 12px;
        background: #6366f1;
        color: white;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        
        &:hover {
          background: #4f46e5;
        }
      }
    }
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.3; }
}

</style>
