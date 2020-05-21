<template>
  <v-hover v-slot:default="{ hover }">
  <v-card
      class="d-flex align-end"
      img="/cover-normal.jpg"
      dark
      max-width="370"
      height="200"
      style="overflow:hidden;"
  >

    <v-row>
      <div style="height: 50px;width: 370px" class="white black--text col-12"><span>ssss</span></div>
      <v-expand-transition>
        <div
            v-if="hover"
            class="col-12 d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text col-12"
            style="height: 150px;width: 370px"
        >
          $14.99
        </div>
      </v-expand-transition>
    </v-row>
  </v-card>
  </v-hover>
</template>
<style scoped>
  .hover {

  }
</style>