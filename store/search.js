export const state = () => ({
  photos: []
});

export const mutations = {
  setPhotos(state, photos) {
    state.photos = photos;
  }
};

export const actions = {
  async searchPhotos({ commit }, value) {
    try {
      const photos = await this.$axios.$get(
        `https://api.unsplash.com/search/photos?query=${value}&per_page=20&client_id=${accessKey}`
      );
      commit("setPhotos", photos);
      return photos;
    } catch (e) {
      throw e;
    }
  },
  async searchPhotoById({ commit }, id) {
    try {
      return await this.$axios.$get(
        `https://api.unsplash.com/photos/${id}?client_id=${accessKey}&id=${id}`
      );
    } catch (e) {
      throw e;
    }
  }
};

export const getters = {
  photos: state => state.photos
};

const accessKey =
  "60e56e3c35ecef378b508abb28d4a00d823b045f2b52055668065f677f7e4de3";
