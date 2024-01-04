export const state = () => ({
  en: true,
})
export const mutations = {
  setLanguage(state, value) {
    state.en = value
  },
}
