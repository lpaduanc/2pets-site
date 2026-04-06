<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="brand">
          <span class="logo-text">2Pets</span>
          <p>{{ $t('home.hero.subtitle') }}</p>
          <div class="social-links">
            <a href="#" aria-label="Instagram"><span class="material-icons-outlined">photo_camera</span></a>
            <a href="#" aria-label="Facebook"><span class="material-icons-outlined">facebook</span></a>
            <a href="#" aria-label="LinkedIn"><span class="material-icons-outlined">work</span></a>
          </div>
        </div>

        <div class="links-group">
          <h3>Plataforma</h3>
          <ul>
            <li><router-link to="/">{{ $t('common.menu.home') }}</router-link></li>
            <li><router-link to="/services">{{ $t('common.menu.services') }}</router-link></li>
            <li><router-link to="/marketplace">Marketplace</router-link></li>
            <li><router-link to="/pricing">Planos e Precos</router-link></li>
          </ul>
        </div>

        <div class="links-group">
          <h3>Para Profissionais</h3>
          <ul>
            <li><router-link to="/professionals">{{ $t('common.menu.professionals') }}</router-link></li>
            <li><router-link to="/companies">{{ $t('common.menu.companies') }}</router-link></li>
            <li><router-link to="/register">Cadastre-se</router-link></li>
          </ul>
        </div>

        <div class="links-group">
          <h3>Suporte</h3>
          <ul>
            <li><a href="#">Central de Ajuda</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Politica de Privacidade</a></li>
            <li><a href="#">LGPD</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} 2Pets. Todos os direitos reservados.</p>
        <p class="footer-region">Operando em Sao Paulo, Grande SP e Campinas</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: white;
  padding: 60px 0 20px;
  border-top: 1px solid #e5e7eb;

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    .brand {
      .logo-text {
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--primary);
        display: block;
        margin-bottom: 15px;
      }

      p {
        color: var(--text-light);
        max-width: 300px;
        margin-bottom: 20px;
      }

      .social-links {
        display: flex;
        gap: 12px;

        a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-light);
          text-decoration: none;
          transition: all 0.3s ease;

          &:hover {
            background: var(--primary);
            color: white;
            transform: translateY(-2px);
          }

          .material-icons-outlined {
            font-size: 20px;
          }
        }
      }
    }

    .links-group {
      h3 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 20px;
        color: var(--text-main);
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 10px;

          a {
            color: var(--text-light);
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;

            &:hover {
              color: var(--primary);
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #f3f4f6;

    p {
      color: var(--text-light);
      font-size: 0.9rem;
      margin: 0;
    }

    .footer-region {
      font-size: 0.8rem;
      margin-top: 8px;
      opacity: 0.7;
    }
  }
}
</style>
