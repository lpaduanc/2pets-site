<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="brand">
          <span class="logo-text">2Pets</span>
          <p>{{ $t('home.hero.subtitle') }}</p>
        </div>
        
        <div class="links-group">
          <h3>{{ $t('common.menu.home') }}</h3>
          <ul>
            <li><router-link to="/">{{ $t('common.menu.home') }}</router-link></li>
            <li><router-link to="/services">{{ $t('common.menu.services') }}</router-link></li>
          </ul>
        </div>
        
        <div class="links-group">
          <h3>{{ $t('common.menu.professionals') }}</h3>
          <ul>
            <li><router-link to="/professionals">{{ $t('common.menu.professionals') }}</router-link></li>
            <li><router-link to="/register">Cadastre sua Clínica</router-link></li>
          </ul>
        </div>
        
        <div class="links-group">
          <h3>{{ $t('common.menu.companies') }}</h3>
          <ul>
            <li><router-link to="/companies">{{ $t('common.menu.companies') }}</router-link></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} 2Pets. All rights reserved.</p>
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
      }
    }
    
    .links-group {
      h3 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 20px;
        color: var(--text-main);
      }
      
      ul {
        li {
          margin-bottom: 10px;
          
          a {
            color: var(--text-light);
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
    color: var(--text-light);
    font-size: 0.9rem;
  }
}
</style>
