import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

const appBase = '/app/'

export default defineConfig({
  base: appBase,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['assets/brand-mark.png', 'assets/course-material.pdf'],
      manifest: {
        name: 'Libras no Comercio',
        short_name: 'Libras HP',
        description:
          'Plataforma mobile-first de cursos, certificacao e inclusao da Heberton Pinheiro Treinamentos.',
        theme_color: '#0a3184',
        background_color: '#f5f8ff',
        display: 'standalone',
        orientation: 'portrait',
        id: appBase,
        start_url: appBase,
        scope: appBase,
        lang: 'pt-BR',
        icons: [
          {
            src: 'assets/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        shortcuts: [
          {
            name: 'Meus cursos',
            short_name: 'Cursos',
            url: `${appBase}cursos`
          },
          {
            name: 'Banco de talentos',
            short_name: 'Talentos',
            url: `${appBase}talentos`
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,pdf}']
      },
      devOptions: {
        enabled: true
      }
    })
  ]
})
