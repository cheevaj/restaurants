export const state = () => ({
  en: true,
  cart: [], // Initialize cart as an empty array
});

export const mutations = {
  setLanguage(state, value) {
    state.en = value;
  },
  addToCat(state, item) {
    const existingIndex = state.cart.findIndex((catItem) => catItem.id === item.id);
    if (existingIndex !== -1) {
      state.cart[existingIndex].unit = item.unit;
    } else {
      state.cart.push(item);
    }
  },
  removeFromCat(state, id) {
    state.cart = state.cart.filter((item) => item.id !== id);
  }
};
