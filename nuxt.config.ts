// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: false },
  css:[
    '@/assets/css/reset.css',
    'bootstrap/dist/css/bootstrap.css',
    '@/assets/css/style.css',
  ],
  app:{
  head: {
    script: [
      // BootstrapのJavaScript (必要な場合はPopperも)
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'    }
    ],
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    // 既存のhead設定がある場合はそれを維持し、上記のscript設定を追加します。
  },
  
  }
})
