<template>
  <v-row>
    <v-col lg="4" xs="12" sm="6" md="6" justify="center" v-for="f of favorites" :key="f._id">
      <v-card class="mx-auto" hover>
        <v-img :src="f.photo.urls.regular" height="300px"></v-img>

        <v-card-actions>
          <nuxt-link class="link" :to="`/photo/${f.photo.id}`">
            <v-btn text color="primary">Open</v-btn>
          </nuxt-link>
          <v-form @submit.native.prevent="deleteFavorite(f._id)">
            <v-btn icon color="red" type="submit">
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-form>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: `Favorite`
    };
  },
  async asyncData({ store }) {
    const favorites = await store.dispatch("favorite/getAll");
    return { favorites };
  },
  methods: {
    async deleteFavorite(id) {
      try {
        await this.$store.dispatch("favorite/removeFromFavorite", id);
        this.favorites = this.favorites.filter(f => f._id !== id);
      } catch (e) {}
    }
  }
};
</script>

<style lang="sass" scoped>
.link
  text-decoration: none

</style>