export const actions = {
  async addHistory({ commit }, data) {
    try {
      await this.$axios.$post("/history/create", data);
    } catch (e) {
      throw e;
    }
  },
  async fetchHistory({ commit }) {
    try {
      return await this.$axios.$get("/history/list");
    } catch (e) {
      throw e;
    }
  },
  async removeStory({}, id) {
    try {
      return await this.$axios.$delete(`/history/${id}`);
    } catch (e) {
      throw e;
    }
  }
};
