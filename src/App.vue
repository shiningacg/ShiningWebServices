<template>
  <v-app>
    <appbar/>
    <router-view/>
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar"
export default {
  name: 'App',
  components: {
    Appbar
  },
  data: () => ({
    //
  }),
};
</script>
