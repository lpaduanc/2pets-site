<template>
  <div class="verify-page">
    <div class="container">
      <div class="verify-card">
        <div v-if="loading" class="loading-state">
          <div class="spinner"></div>
          <h2>Verificando seu email...</h2>
          <p>Por favor, aguarde um momento.</p>
        </div>

        <div v-else-if="success" class="success-state">
          <div class="icon-wrapper success">
            <span class="material-icons-outlined">check_circle</span>
          </div>
          <h2>Email Verificado!</h2>
          <p>Sua conta foi ativada com sucesso. Agora você pode acessar todas as funcionalidades da 2Pets.</p>
          <a href="http://localhost:9000/login" class="btn btn-primary">Ir para o Login</a>
        </div>

        <div v-else class="error-state">
          <div class="icon-wrapper error">
            <span class="material-icons-outlined">error_outline</span>
          </div>
          <h2>Falha na Verificação</h2>
          <p>{{ errorMessage }}</p>
          <button v-if="canResend" @click="resendEmail" class="btn btn-outline" :disabled="resending">
            {{ resending ? 'Enviando...' : 'Reenviar Email de Verificação' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import axios from 'axios'

useHead({
  title: 'Verificação de Email - 2Pets'
})

const route = useRoute()
const loading = ref(true)
const success = ref(false)
const errorMessage = ref('')
const canResend = ref(false)
const resending = ref(false)

onMounted(async () => {
  const token = route.query.token
  
  if (!token) {
    loading.value = false
    errorMessage.value = 'Token de verificação inválido ou ausente.'
    return
  }

  try {
    await axios.post(`http://localhost:8000/api/verify-email/${token}`)
    success.value = true
  } catch (err) {
    success.value = false
    errorMessage.value = err.response?.data?.message || 'Ocorreu um erro ao verificar seu email.'
    // If token expired or invalid, maybe we can ask for email to resend?
    // For now, simple error.
  } finally {
    loading.value = false
  }
})

// TODO: Implement resend logic if we have the user's email context
// Since we don't have the email here (only token), we might need a form to ask for email to resend
// For now, let's keep it simple.
const resendEmail = async () => {
  // Logic to resend would require email input
}
</script>

<style lang="scss" scoped>
.verify-page {
  padding: 100px 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
}

.verify-card {
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  
  span {
    font-size: 40px;
  }
  
  &.success {
    background: #dcfce7;
    color: #10b981;
  }
  
  &.error {
    background: #fee2e2;
    color: #ef4444;
  }
}

h2 {
  color: var(--text-main);
  margin-bottom: 15px;
  font-size: 1.8rem;
}

p {
  color: var(--text-secondary);
  margin-bottom: 30px;
  line-height: 1.6;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--primary);
  color: white;
  &:hover { background: darken(#6366f1, 10%); }
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  &:hover { background: var(--primary); color: white; }
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--primary);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 30px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
