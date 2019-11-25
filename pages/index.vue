<template>
  <div class="radius">
    <v-row>
      <v-col cols="12" class="search-list blue lighten-4">
        <ul class="links">
          <li v-for="link of links" :key="link.name" @click="photoList(link.name)">{{ link.name }}</li>
        </ul>
        <v-form class="search-form" @submit.prevent="onSubmit(searchText)">
          <h2>Search</h2>
          <p>
            <small>
              <b>
                Write picture name you want to search. (Example: animals, city,
                nature)
              </b>
            </small>
          </p>
          <v-text-field v-model="searchText" validate-on-blur></v-text-field>
          <v-btn class="mt" type="submit">Search</v-btn>
        </v-form>
      </v-col>
      <v-col v-for="photo in photos.results" :key="photo.id" lg="4" xs="6" sm="6" md="6">
        <v-card hover shaped>
          <v-img
            :src="photo.urls.regular"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          ></v-img>

          <v-card-actions class="center">
            <nuxt-link class="link" :to="`/photo/${photo.id}`">
              <v-btn text small color="primary">Open</v-btn>
            </nuxt-link>

            <v-form @submit.native.prevent="addToFavorite(photo)">
              <v-btn icon color="primary" type="submit">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-form>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  head: {
    title: "Main"
  },
  data: () => ({
    links: [
      { name: "Wallpapers" },
      { name: "Textures & Patterns" },
      { name: "Nature" },
      { name: "Current Events" },
      { name: "Architecture" },
      { name: "Business & Work" },
      { name: "Film" },
      { name: "Animals" },
      { name: "Travel" },
      { name: "Fashion" },
      { name: "Food & Drink" },
      { name: "Spirituality" },
      { name: "Experimental" },
      { name: "People" },
      { name: "Health" },
      { name: "Art & Culture" }
    ],
    searchText: "",
    color: 'red'
  }),
  computed: {
    photos() {
      return this.$store.getters["search/photos"];
    }
  },
  methods: {
    async onSubmit(text) {
      if (this.searchText === "") {
        return;
      }
      const data = {
        text,
        date: new Date().toLocaleString()
      };
      try {
        await this.$store.dispatch("search/searchPhotos", this.searchText);
        await this.$store.dispatch("history/addHistory", data);
        this.searchText = "";
      } catch (e) {}
    },
    async photoList(value) {
      try {
        await this.$store.dispatch("search/searchPhotos", value);
      } catch (e) {}
    },
    async addToFavorite(photo) {
      try {
        await this.$store.dispatch("favorite/addFavorite", photo);
      } catch (e) {}
    }
  }
};
</script>

<style lang="sass" scoped>
.center
  display: flex
  justify-content: center
.img-cards
  display: flex
  justify-content: space-between
  margin: 0 auto
  border: none
.mt
  margin-top: 1rem
.radius
  border-radius: 10px
  overflow: hidden
  padding: 0
  margin: 0 0 0
  & h2
    text-align: center
.link
  text-decoration: none
.links
  display: flex
  justify-content: center
  flex-wrap: wrap
  list-style: none
  & li
    margin: 0 5px
    border-bottom: 2px solid transparent
  & li:hover
    cursor: pointer
    border-bottom: 2px solid #000
.search-form
  margin: 45px auto 0
  width: 80%
</style>
