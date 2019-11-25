export const state = () => ({
  favorites: []
});

export const mutations = {
  setFavorite(state, favorites) {
    state.favorites = favorites;
  }
};

export const actions = {
  async addFavorite({ commit }, data) {
    try {
      await this.$axios.$post("/favorite/", data);
    } catch (e) {
      throw e;
    }
  },
  async getAll({ commit }) {
    try {
      const favorites = await this.$axios.$get("/favorite/list");
      commit("setFavorite", favorites);
      return favorites;
    } catch (e) {
      throw e;
    }
  },
  async removeFromFavorite({ commit }, id) {
    try {
      return await this.$axios.$delete(`/favorite/${id}`);
    } catch (e) {
      throw e;
    }
  }
};
