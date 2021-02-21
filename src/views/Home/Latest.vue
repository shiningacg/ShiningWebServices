<template>
  <v-row >
      <v-col cols="12" class="text-center">正在施工中</v-col>
      <v-row v-show="isDev()">
        <v-col cols="12"><item-big/></v-col>
        <v-col cols="4"><item-small></item-small></v-col>
        <v-col cols="4"><item-small></item-small></v-col>
        <v-col cols="4"><item-small></item-small></v-col>
      </v-row>
  </v-row>
</template>

<script>
  import is_dev_env from "@/utils/is_dev_env";
  import ItemSmall from "../../components/ItemSmall";
  import ItemBig from "../../components/ItemBig";
  export default {
    name: "Latest",
    components: {
      ItemBig,
      ItemSmall
    },
    methods: {
      isDev() {
        return is_dev_env()
      }
    }
  }
</script>

<style scoped>

</style>
