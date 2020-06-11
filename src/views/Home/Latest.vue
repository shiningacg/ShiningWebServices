<template>
  <v-row>
    <v-col cols="12"><item-b-ig/></v-col>
    <v-col cols="4"><item-small></item-small></v-col>
    <v-col cols="4"><item-small></item-small></v-col>
    <v-col cols="4"><item-small></item-small></v-col>
  </v-row>
</template>

<script>
  import ItemSmall from "../../components/ItemSmall";
  import ItemBIg from "../../components/ItemBIg";
  export default {
    name: "Latest",
    components: {
      ItemBIg,
      ItemSmall
    }
  }
</script>

<style scoped>

</style>