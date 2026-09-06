import { ViteSSG } from 'vite-ssg'
import { createHead } from '@unhead/vue/client'
import './styles/main.scss'
import App from './App.vue'
import { routes } from './router/routes'
import { setupI18n } from './i18n'

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior: (_to, _from, savedPosition) => savedPosition || { top: 0 } },
  ({ app, router, initialState, isClient }) => {
    const head = createHead()
    app.use(head)

    const i18n = setupI18n()
    app.use(i18n)

    if (isClient) {
      // Hydrate i18n/locale from storage on client; stays default during SSG.
      const saved = localStorage.getItem('locale')
      if (saved) i18n.global.locale.value = saved
    }

    // Preserve any future state picked up during SSG build.
    if (import.meta.env.SSR) {
      initialState.locale = i18n.global.locale.value
    }
  }
)
