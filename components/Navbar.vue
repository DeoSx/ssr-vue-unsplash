<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          @click="drawer = false"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" app fixed class="blue darken-2">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="white-color drawer"
      />
      <div class="links">
        <nuxt-link
          v-for="item of items"
          :key="item.to"
          :to="item.to"
          class="link"
          active-class="active"
          exact
          >{{ item.title }}</nuxt-link
        >
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-cards-heart",
          title: "Favorite",
          to: "/favorite"
        },
        {
          icon: "mdi-view-list",
          title: "History",
          to: "/history"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.white-color
  color: #fff !important

.links
  width: 100%
  display: flex
  align-items: center
  justify-content: center

.link
  color: #fff
  text-decoration: none
  margin: 0 10px
  border-bottom: 1px solid transparent

.active
  border-bottom: 1px solid #fff
.drawer
  display: none

@media (max-width: 458px)
  .drawer
    display: block
  .links
    display: none
</style>
