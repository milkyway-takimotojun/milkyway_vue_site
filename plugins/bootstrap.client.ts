import BootstrapVue from "bootstrap-vue-next"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BootstrapVue)
})
