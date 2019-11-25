<template>
  <v-app>
    <app-navbar />
    <v-content class="indigo lighten-4">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppNavbar from "@/components/Navbar";

export default {
  components: { AppNavbar }
};
</script>
