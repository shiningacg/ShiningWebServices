<template>
  <div class="grey lighten-4" style="height: 100%">
      <TopMenu @menu="activeMenuChange"/>
      <v-container class="pa-0 pt-4">
        <Upload v-show="activeMenu==0"/>
        <Manage v-show="activeMenu==1"/>
      </v-container>
  </div>
</template>

<script>
  import Appbar from "@/components/Appbar";
  import TopMenu from "@/views/Dashboard/TopMenu";
  import Upload from "./Upload";
  import Manage from "./Manage"
  export default {
    name:"Dashboard",
    components: {
      Appbar,
      TopMenu,
      Upload,
      Manage
    },
    data() {
      return {
        activeMenu: 0
      }
    },
    methods: {
      activeMenuChange(index) {
        this.activeMenu = index
      }
    }
  }
</script>