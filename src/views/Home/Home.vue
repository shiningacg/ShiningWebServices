<template>
  <div class="home grey lighten-4 ma-0">
    <Appbar/>
    <top-head/>
    <Menu/>
    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Appbar from "../../components/Appbar"
import TopHead from "./Head"
import Menu from "./Menu"
export default {
  name: 'Home',
  components: {
    TopHead,
    Menu,
    Appbar
  }
}
</script>
