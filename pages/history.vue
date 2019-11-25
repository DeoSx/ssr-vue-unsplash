<template>
  <v-row>
    <v-col>
      <v-card class="mx-auto" max-width="600" tile>
        <v-form @submit.prevent="removeStory(h._id)" v-for="h of history" :key="h._id">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>
                <b>{{h.text}}</b>
              </v-list-item-title>
              <v-list-item-subtitle>{{h.date}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-btn class="red lighten-2 w-text" type="submit">remove</v-btn>
          </v-list-item>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: "History"
    };
  },
  async asyncData({ store }) {
    const history = await store.dispatch("history/fetchHistory");
    return { history };
  },
  methods: {
    async removeStory(id) {
      try {
        await this.$store.dispatch("history/removeStory", id);
        this.history = this.history.filter(h => h._id !== id);
      } catch (e) {}
    }
  }
};
</script>

<style lang="sass" scoped>
.w-text
  color: #fff !important
</style>