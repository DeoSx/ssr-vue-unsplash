<template>
  <v-row justify="center">
    <v-col md="9" sm="10" xs="12" class="center">
      <v-img :src="photo.urls.regular"></v-img>
      <div class="photo-content">
        <p>
          <b>Author:</b>
          <a
            :href="`https://unsplash.com/${photo.user.username}`"
            target="_blank"
          >{{photo.user.name}}</a>
          <v-btn icon color="primary">
            <a :href="photo.links.download" target="_blank">
              <v-icon>mdi-download</v-icon>
            </a>
          </v-btn>
        </p>
        <p>
          <b>Descrition:</b>
          <br />
          {{photo.description || photo.alt_description}}
        </p>
      </div>
    </v-col>
    <v-col cols="12">
      <h2>Similar pictures</h2>
    </v-col>
    <v-col v-for="p in samePhotos.results" :key="p.id" lg="4" xs="6" sm="6" md="6">
      <v-card hover shaped>
        <v-img
          :src="p.urls.regular"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="300px"
        ></v-img>

        <v-card-actions class="center">
          <nuxt-link class="link" :to="`/photo/${p.id}`">
            <v-btn text small color="primary">Open</v-btn>
          </nuxt-link>

          <v-form @submit.native.prevent="addToFavorite(p)">
            <v-btn icon color="primary" type="submit">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-form>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    samePhotos: []
  }),
  head() {
    return {
      title: this.photo.tags[0].title
    };
  },
  async asyncData({ store, params }) {
    try {
      const photo = await store.dispatch("search/searchPhotoById", params.id);
      return { photo };
    } catch (e) {}
  },
  async mounted() {
    if (this.photo) {
      console.log(this.photo);
      this.samePhotos = await this.$store.dispatch(
        "search/searchPhotos",
        this.photo.tags[0].title
      );
    }
  },
  methods: {
    async addToFavorite(photo) {
      try {
        await this.$store.dispatch("favorite/addFavorite", photo);
      } catch (e) {}
    }
  }
};
</script>

<style lang="sass" scoped>
.photo-content
  margin: 30px 0 0
  text-align: center
a
  text-decoration: none
</style>