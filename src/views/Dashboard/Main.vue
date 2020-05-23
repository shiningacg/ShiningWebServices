<template>
  <div class="grey lighten-4" style="height: 100%">
      <TopMenu/>
      <v-container class="pa-0 pt-4">
        <Upload/>
      </v-container>
  </div>
</template>

<script>
  import Appbar from "@/components/Appbar";
  import TopMenu from "@/views/Dashboard/TopMenu";
  import Upload from "./Upload";
  export default {
    name:"Dashboard",
    components: {
      Appbar,
      TopMenu,
      Upload
    },
    data() {},
  }
</script>