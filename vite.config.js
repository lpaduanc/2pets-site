import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'

const SITE_URL = process.env.VITE_APP_URL || 'https://2pets.com.br'

export default defineConfig({
  plugins: [vue()],

  // vite-ssg reads this config block to decide what to pre-render.
  ssgOptions: {
    script: 'async',
    formatting: 'minify',

    // Generated per-route HTML files also need meta resolved from useHead.
    includedRoutes(paths) {
      return paths.filter((p) => p !== '/verify-email') // token page — no value for SEO
    },

    // After all routes are rendered, write sitemap.xml and robots.txt.
    async onFinished() {
      const routes = [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/how-it-works', changefreq: 'monthly', priority: 0.9 },
        { url: '/for-tutors', changefreq: 'monthly', priority: 0.9 },
        { url: '/professionals', changefreq: 'monthly', priority: 0.9 },
        { url: '/services', changefreq: 'monthly', priority: 0.8 },
        { url: '/marketplace', changefreq: 'daily', priority: 0.9 },
        { url: '/companies', changefreq: 'monthly', priority: 0.7 },
        { url: '/pricing', changefreq: 'monthly', priority: 0.8 },
        { url: '/blog', changefreq: 'weekly', priority: 0.7 },
        { url: '/contact', changefreq: 'yearly', priority: 0.5 },
        { url: '/ai-guardian', changefreq: 'monthly', priority: 0.6 },
        { url: '/ai-business', changefreq: 'monthly', priority: 0.6 },
      ]

      const distDir = resolve(process.cwd(), 'dist')
      const sitemap = new SitemapStream({ hostname: SITE_URL })
      const writeStream = createWriteStream(resolve(distDir, 'sitemap.xml'))
      sitemap.pipe(writeStream)
      routes.forEach((r) => sitemap.write(r))
      sitemap.end()

      // Wait for sitemap to finish before the build task resolves.
      await new Promise((done) => writeStream.on('finish', done))

      const { writeFile } = await import('node:fs/promises')
      await writeFile(
        resolve(distDir, 'robots.txt'),
        [
          'User-agent: *',
          'Allow: /',
          'Disallow: /verify-email',
          '',
          `Sitemap: ${SITE_URL}/sitemap.xml`,
          '',
        ].join('\n')
      )
    },
  },
})
