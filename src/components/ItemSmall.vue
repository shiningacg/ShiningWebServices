<template>
  <v-hover v-slot:default="{ hover }">
  <v-card
      class=""
      img="/cover-normal.jpg"
      dark
      max-width="370"
      height="200"
      style="overflow:hidden;"
  >
      <div
          :class="(!hover?'hover_before':'hover_after')+' d-flex transition-in-fast-out orange darken-2 v-card--reveal display-3 white--text'"
          style='height: 100%;width: 100%;position:relative;top:150px'
      >
        <div style="height: 60px;width: 100%" class="white"></div>
      </div>
  </v-card>
  </v-hover>
</template>
<style scoped>
  .hover_before {
    transition-duration: 0.1s;
  }
  .hover_after {
    transform: translateY(-150px);
    transition-duration: 0.1s;
  }
</style>