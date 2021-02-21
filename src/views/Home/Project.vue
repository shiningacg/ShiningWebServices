<template>
  <v-row>
    <v-col cols="12" class="text-center">正在施工中</v-col>
    <v-row v-show="isDev()">
      <v-col cols="3" class="d-flex justify-center align-center">
        <div>
          <div class="pa-4" v-for="i in 7" :key="i">一</div>
        </div>
      </v-col>
      <v-col cols="9"></v-col>
    </v-row>
  </v-row>
</template>

<script>
import is_dev_env from "@/utils/is_dev_env";
  export default {
    name: "Project",
    methods: {
      isDev() {
        return is_dev_env()
      }
    }
  }
</script>

<style scoped>

</style>
