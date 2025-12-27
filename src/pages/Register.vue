<template>
  <div class="register-page">
    <div class="container">
      <div class="header-content" v-if="!successMessage">
        <h1>{{ $t('register.title') }}</h1>
        <p class="subtitle">{{ $t('register.subtitle') }}</p>
      </div>

      <!-- Success Message -->
      <div v-if="successMessage" class="success-container">
        <div class="success-icon">
          <span class="material-icons-outlined">mark_email_read</span>
        </div>
        <h2>Cadastro realizado com sucesso!</h2>
        <p>{{ successMessage }}</p>
        <a href="http://localhost:9002/login" class="btn btn-primary">Ir para o Login</a>
      </div>

      <!-- Step 1: Type Selection -->
      <div v-else-if="step === 1" class="cards-grid">
        <!-- Tutor Card -->
        <div class="register-card tutor" @click="selectType('tutor')">
          <div class="card-badge">Mais Popular</div>
          <div class="icon-wrapper">
            <span class="material-icons-outlined">pets</span>
          </div>
          <h2>Sou Tutor</h2>
          <p>Tenho pets e quero cuidar melhor da saúde deles</p>
          <ul class="card-features">
            <li><span class="material-icons-outlined">check</span> App Gratuito</li>
            <li><span class="material-icons-outlined">check</span> Carteira de Vacinação</li>
            <li><span class="material-icons-outlined">check</span> Clube de Descontos</li>
            <li><span class="material-icons-outlined">check</span> AI Guardian</li>
          </ul>
          <button class="btn btn-primary btn-block">
            Criar Conta Grátis
          </button>
        </div>

        <!-- Professional Card -->
        <div class="register-card professional" @click="selectCategory('professional')">
          <div class="icon-wrapper">
            <span class="material-icons-outlined">medical_services</span>
          </div>
          <h2>Sou Profissional</h2>
          <p>Sou veterinário, clínica, pet shop, banho & tosa ou outro profissional</p>
          <ul class="card-features">
            <li><span class="material-icons-outlined">check</span> Gestão Completa</li>
            <li><span class="material-icons-outlined">check</span> Prontuário Digital</li>
            <li><span class="material-icons-outlined">check</span> Agenda Online</li>
            <li><span class="material-icons-outlined">check</span> AI Business</li>
          </ul>
          <button class="btn btn-outline btn-block">
            Cadastrar Negócio
          </button>
        </div>

        <!-- Company Card -->
        <div class="register-card company" @click="selectType('company')">
          <div class="icon-wrapper">
            <span class="material-icons-outlined">business</span>
          </div>
          <h2>Sou Empresa</h2>
          <p>Quero oferecer benefícios pet para meus colaboradores</p>
          <ul class="card-features">
            <li><span class="material-icons-outlined">check</span> Benefício Corporativo</li>
            <li><span class="material-icons-outlined">check</span> Retenção de Talentos</li>
            <li><span class="material-icons-outlined">check</span> Relatórios de Uso</li>
            <li><span class="material-icons-outlined">check</span> Gestão de RH</li>
          </ul>
          <button class="btn btn-outline btn-block">
            Solicitar Proposta
          </button>
        </div>
      </div>

      <!-- Step 2: Professional Type Selection -->
      <div v-else-if="step === 2" class="business-selection">
        <button class="back-btn" @click="step = 1">
          <span class="material-icons-outlined">arrow_back</span> Voltar
        </button>
        <h2>Que tipo de profissional você é?</h2>
        <div class="business-grid">
          <!-- Individual Professionals -->
          <div class="business-card" @click="selectType('vet')">
            <span class="material-icons-outlined">medical_services</span>
            <h3>Veterinário</h3>
            <p class="card-subtitle">Atendimento individual</p>
          </div>
          <div class="business-card" @click="selectType('grooming')">
            <span class="material-icons-outlined">content_cut</span>
            <h3>Banho e Tosa</h3>
            <p class="card-subtitle">Autônomo</p>
          </div>
          <div class="business-card" @click="selectType('training')">
            <span class="material-icons-outlined">school</span>
            <h3>Adestrador</h3>
            <p class="card-subtitle">Treinamento individual</p>
          </div>
          
          <!-- Business Establishments -->
          <div class="business-card" @click="selectType('clinic')">
            <span class="material-icons-outlined">local_hospital</span>
            <h3>Clínica Veterinária</h3>
            <p class="card-subtitle">Estabelecimento</p>
          </div>
          <div class="business-card" @click="selectType('laboratory')">
            <span class="material-icons-outlined">biotech</span>
            <h3>Laboratório</h3>
            <p class="card-subtitle">Exames e análises</p>
          </div>
          <div class="business-card" @click="selectType('petshop')">
            <span class="material-icons-outlined">storefront</span>
            <h3>Pet Shop</h3>
            <p class="card-subtitle">Comércio de produtos</p>
          </div>
          <div class="business-card" @click="selectType('pet_hotel')">
            <span class="material-icons-outlined">hotel</span>
            <h3>Hotel/Creche</h3>
            <p class="card-subtitle">Hospedagem para pets</p>
          </div>
        </div>
      </div>

      <!-- Step 3: Registration Form -->
      <div v-else-if="step === 3" class="form-container">
        <button class="back-btn" @click="step = 1">
          <span class="material-icons-outlined">arrow_back</span> Voltar
        </button>
        
        <div class="form-card">
          <h2>{{ getFormTitle() }}</h2>
          <p class="form-subtitle" v-if="form.user_type === 'company'">
            Cadastro básico para análise. Nossa equipe entrará em contato em até 24 horas.
          </p>
          
          <form @submit.prevent="register">
            <!-- Common Fields -->
            <div class="form-group">
              <label>{{ form.user_type === 'company' ? 'Nome da Empresa' : 'Nome Completo' }}</label>
              <input type="text" v-model="form.name" required :placeholder="form.user_type === 'company' ? 'Razão Social' : 'Digite seu nome'">
            </div>

            <div class="form-group">
              <label>Email {{ form.user_type === 'company' ? 'Corporativo' : '' }}</label>
              <input type="email" v-model="form.email" required placeholder="seu@email.com">
            </div>

            <div class="form-group">
              <label>Telefone / WhatsApp</label>
              <input type="tel" v-model="form.phone" required placeholder="(00) 00000-0000" v-mask="'(##) #####-####'">
            </div>

            <!-- Company-specific fields -->
            <div v-if="form.user_type === 'company'" class="form-group">
              <label>CNPJ</label>
              <input type="text" v-model="form.cnpj" placeholder="00.000.000/0000-00" v-mask="'##.###.###/####-##'">
            </div>

            <div v-if="form.user_type === 'company'" class="form-group">
              <label>Número de Funcionários</label>
              <select v-model="form.employee_count">
                <option value="">Selecione</option>
                <option value="1-50">1 a 50</option>
                <option value="51-200">51 a 200</option>
                <option value="201-500">201 a 500</option>
                <option value="500+">Mais de 500</option>
              </select>
            </div>

            <div v-if="form.user_type === 'company'" class="form-group">
              <label>Mensagem (Opcional)</label>
              <textarea v-model="form.message" rows="3" placeholder="Conte-nos mais sobre sua empresa e o interesse no benefício..."></textarea>
            </div>

            <!-- Password fields (not for company initial registration) -->
            <div v-if="form.user_type !== 'company'" class="form-group">
              <label>Senha</label>
              <input type="password" v-model="form.password" required placeholder="Mínimo 8 caracteres">
            </div>

            <div v-if="form.user_type !== 'company'" class="form-group">
              <label>Confirmar Senha</label>
              <input type="password" v-model="form.password_confirmation" required placeholder="Confirme sua senha">
            </div>

            <div v-if="error" class="error-message">
              {{ error }}
            </div>

            <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
              {{ getSubmitButtonText() }}
            </button>

            <p v-if="form.user_type === 'company'" class="form-note">
              <span class="material-icons-outlined">info</span>
              Você receberá um email com as instruções para completar o cadastro após análise.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useHead } from '@unhead/vue'
import axios from 'axios'

useHead({
  title: 'Crie sua conta na 2Pets',
  meta: [
    { name: 'description', content: 'Cadastre-se na 2Pets como tutor, veterinário ou empresa e aproveite todos os benefícios.' }
  ]
})

const step = ref(1)
const category = ref('') // 'professional' or 'company' (not used anymore but kept for compatibility)
const loading = ref(false)
const error = ref('')
const successMessage = ref('')

const form = reactive({
  name: '',
  email: '',
  phone: '',
  password: '',
  password_confirmation: '',
  user_type: '',
  cnpj: '',
  employee_count: '',
  message: ''
})

const selectCategory = (cat) => {
  if (cat === 'professional') {
    step.value = 2 // Go to professional type selection
  }
}

const selectType = (type) => {
  form.user_type = type
  step.value = 3 // Go to registration form
}

const getTypeName = (type) => {
  const types = {
    tutor: 'Tutor',
    vet: 'Veterinário',
    clinic: 'Clínica Veterinária',
    laboratory: 'Laboratório',
    petshop: 'Pet Shop',
    pet_hotel: 'Hotel/Creche',
    grooming: 'Banho e Tosa',
    training: 'Adestrador',
    company: 'Empresa'
  }
  return types[type] || type
}

const getFormTitle = () => {
  if (form.user_type === 'company') {
    return 'Solicitar Proposta Comercial'
  }
  return `Criar conta como ${getTypeName(form.user_type)}`
}

const getSubmitButtonText = () => {
  if (loading.value) {
    return form.user_type === 'company' ? 'Enviando solicitação...' : 'Criando conta...'
  }
  return form.user_type === 'company' ? 'Solicitar Contato' : 'Criar Conta'
}

const register = async () => {
  loading.value = true
  error.value = ''
  
  try {
    // For companies, we send a different request (could be to a different endpoint)
    if (form.user_type === 'company') {
      // Company registration - just sends interest, no account creation yet
      const response = await axios.post('http://localhost:8000/api/register', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        user_type: form.user_type,
        // Send a temporary password that will need to be changed
        password: 'temporary' + Date.now(),
        password_confirmation: 'temporary' + Date.now(),
        additional_data: {
          cnpj: form.cnpj,
          employee_count: form.employee_count,
          message: form.message
        }
      })
      successMessage.value = 'Sua solicitação foi enviada! Nossa equipe entrará em contato em até 24 horas para apresentar nossa proposta e concluir o cadastro.'
    } else {
      // Regular tutor/professional registration
      const response = await axios.post('http://localhost:8000/api/register', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        user_type: form.user_type,
        password: form.password,
        password_confirmation: form.password_confirmation
      })
      successMessage.value = 'Sua conta foi criada! Verifique seu email para ativar o acesso e completar seu perfil.'
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.errors) {
      error.value = Object.values(err.response.data.errors).flat().join('\n')
    } else {
      error.value = 'Ocorreu um erro ao processar sua solicitação. Tente novamente.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.register-page {
  padding: 80px 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  text-align: center;
  margin-bottom: 60px;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 15px;
    color: var(--text-main);
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: var(--text-light);
  }
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  
  .register-card {
    background: white;
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    
    .card-badge {
      position: absolute;
      top: 20px;
      right: -30px;
      background: #ef4444;
      color: white;
      padding: 5px 40px;
      transform: rotate(45deg);
      font-size: 0.8rem;
      font-weight: 700;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      border-color: var(--primary);
      
      .icon-wrapper {
        background: var(--primary);
        color: white;
        transform: scale(1.1);
      }
    }
    
    .icon-wrapper {
      width: 80px;
      height: 80px;
      background: #f3f4f6;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      color: var(--primary);
      transition: all 0.3s ease;
      
      span {
        font-size: 40px;
      }
    }
    
    h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: var(--text-main);
      font-weight: 800;
    }
    
    p {
      color: var(--text-light);
      margin-bottom: 20px;
      line-height: 1.6;
      min-height: 60px;
      font-size: 0.95rem;
    }

    .card-features {
      list-style: none;
      padding: 0;
      margin-bottom: 30px;
      text-align: left;
      
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        color: var(--text-secondary);
        font-size: 0.9rem;
        
        .material-icons-outlined {
          color: var(--success);
          font-size: 18px;
        }
      }
    }
    
    .btn-block {
      display: block;
      width: 100%;
      padding: 15px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 700;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
    
    .btn-primary {
      background-color: var(--primary);
      color: white;
      &:hover { background-color: darken(#6366f1, 10%); }
    }

    .btn-outline {
      border: 2px solid var(--primary);
      color: var(--primary);
      background: transparent;
      
      &:hover {
        background: var(--primary);
        color: white;
      }
    }
    
    &.tutor {
      border-top: 5px solid var(--primary);
    }
    
    &.professional {
      border-top: 5px solid #8b5cf6; 
      .icon-wrapper { color: #8b5cf6; }
      &:hover { border-color: #8b5cf6; .icon-wrapper { background: #8b5cf6; color: white; } }
      .btn-outline { border-color: #8b5cf6; color: #8b5cf6; &:hover { background: #8b5cf6; color: white; } }
      .card-features li .material-icons-outlined { color: #8b5cf6; }
    }
    
    &.company {
      border-top: 5px solid #10b981;
      .icon-wrapper { color: #10b981; }
      &:hover { border-color: #10b981; .icon-wrapper { background: #10b981; color: white; } }
      .btn-outline { border-color: #10b981; color: #10b981; &:hover { background: #10b981; color: white; } }
      .card-features li .material-icons-outlined { color: #10b981; }
    }
  }
}

.business-selection {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  
  h2 {
    margin-bottom: 40px;
    color: var(--text-main);
  }
  
  .business-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    
    .business-card {
      background: white;
      padding: 30px 20px;
      border-radius: 15px;
      border: 1px solid #e5e7eb;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: center;
      
      span {
        font-size: 48px;
        color: var(--primary);
        margin-bottom: 15px;
        display: block;
      }
      
      h3 {
        color: var(--text-main);
        font-size: 1.1rem;
        margin-bottom: 5px;
      }
      
      .card-subtitle {
        font-size: 0.85rem;
        color: var(--text-light);
        margin: 0;
      }
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        border-color: var(--primary);
        
        span {
          transform: scale(1.1);
        }
      }
    }
  }
}

.form-container {
  max-width: 550px;
  margin: 0 auto;
  
  .form-card {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    
    h2 {
      text-align: center;
      margin-bottom: 10px;
      color: var(--text-main);
      font-size: 1.75rem;
    }
    
    .form-subtitle {
      text-align: center;
      color: var(--text-secondary);
      margin-bottom: 30px;
      font-size: 0.95rem;
      line-height: 1.5;
    }
    
    .form-group {
      margin-bottom: 20px;
      
      label {
        display: block;
        margin-bottom: 8px;
        color: var(--text-secondary);
        font-weight: 600;
        font-size: 0.95rem;
      }
      
      input, select, textarea {
        width: 100%;
        padding: 12px 15px;
        border: 2px solid #e5e7eb;
        border-radius: 10px;
        font-size: 1rem;
        transition: all 0.3s ease;
        font-family: inherit;
        
        &:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }
      }
      
      select {
        cursor: pointer;
        background-color: white;
      }
      
      textarea {
        resize: vertical;
        min-height: 80px;
      }
    }
    
    .btn-block {
      width: 100%;
      padding: 15px;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      margin-top: 20px;
      transition: all 0.3s ease;
      
      &:hover:not(:disabled) {
        background-color: darken(#6366f1, 10%);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
      }
      
      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
    
    .form-note {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-top: 15px;
      padding: 15px;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 10px;
      color: #1e40af;
      font-size: 0.9rem;
      line-height: 1.5;
      
      .material-icons-outlined {
        font-size: 20px;
        margin-top: 2px;
      }
    }
  }
}

.back-btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--text-secondary);
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: 600;
  
  &:hover {
    color: var(--primary);
  }
}

.error-message {
  background: #fee2e2;
  color: #ef4444;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 0.9rem;
  white-space: pre-line;
}

.success-container {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  
  .success-icon {
    width: 80px;
    height: 80px;
    background: #dcfce7;
    color: #10b981;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 30px;
    
    span {
      font-size: 40px;
    }
  }
  
  h2 {
    color: var(--text-main);
    margin-bottom: 15px;
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 30px;
    line-height: 1.6;
  }
  
  .btn {
    display: inline-block;
    padding: 12px 30px;
    background: var(--primary);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 700;
  }
}
</style>
