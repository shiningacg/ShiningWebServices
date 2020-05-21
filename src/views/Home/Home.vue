<template>
  <div class="home grey lighten-4 ma-0">
    <top-head/>
    <Menu/>
    <v-container>
      <div style="height: 1000px;">
        <itemcard></itemcard>
      </div>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Itemcard from "../../components/Itemcard";
import Titlebar from "../../components/Titlebar";
import TopHead from "./Head"
import Menu from "./Menu"
export default {
  name: 'Home',
  components: {
    Itemcard,
    Titlebar,
    TopHead,
    Menu
  }
}
</script>
