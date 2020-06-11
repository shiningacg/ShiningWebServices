<template>
  <v-row>
    <v-col cols="3" class="d-flex justify-center align-center">
      <div>
        <div class="pa-4" v-for="i in 7" :key="i">一</div>
      </div>
    </v-col>
    <v-col cols="9"></v-col>
  </v-row>
</template>

<script>
  export default {
    name: "Project"
  }
</script>

<style scoped>

</style>