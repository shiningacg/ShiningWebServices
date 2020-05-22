<template>
  <div class="home grey lighten-4 ma-0">
    <Appbar/>
    <top-head/>
    <Menu/>
    <v-container>
      <v-row>
        <v-col cols="12"><item-b-ig/></v-col>
        <v-col cols="4"><item-small></item-small></v-col>
        <v-col cols="4"><item-small></item-small></v-col>
        <v-col cols="4"><item-small></item-small></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Appbar from "../../components/Appbar"
import ItemSmall from "../../components/ItemSmall";
import Titlebar from "../../components/Titlebar";
import ItemBIg from "../../components/ItemBIg";
import TopHead from "./Head"
import Menu from "./Menu"
export default {
  name: 'Home',
  components: {
    ItemSmall,
    Titlebar,
    ItemBIg,
    TopHead,
    Menu,
    Appbar
  }
}
</script>
