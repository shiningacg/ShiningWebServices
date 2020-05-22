<template>
  <div style="height: 100%;width: 100%" class="grey darken-2">
    <v-container>
      <div class="caption"></div>
      <!--侧栏按钮组-->
      <v-speed-dial
          v-model="fab"
          bottom="100"
          right="100"
          fixed
          :transition="transition"
      >
        <!--主要按钮-->
        <template v-slot:activator>
          <v-btn
              v-model="fab"
              color="blue darken-2"
              dark
              fab
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-dots-horizontal</v-icon>
          </v-btn>
        </template>
        <!--子按钮-->
        <v-btn
            fab
            dark
            small
            color="green"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
            fab
            dark
            small
            color="indigo"
        >
          <v-icon dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
            fab
            dark
            small
            color="red"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-speed-dial>
      <!--图片存放位置-->
      <div>
        <v-row>
          <v-col class="pa-0 d-flex justify-center" cols="12" v-for="i in 9" :key="i">
            <div style="border-bottom: 1px solid grey;position:relative">
              <v-img
                  class="col-12"
                  src="/P0010.jpg"
                  @click="active=i"
                  :width="width"
              >
              </v-img>
              <v-overlay
                  absolute="true"
                  :value="fab"
                  class="d-flex"
                  style="border-bottom: 1px solid white"
              >
                <div class="display-4 font-weight-bold">
                  {{i}}
                </div>
              </v-overlay>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "Comic",
    data() {
      return {
        fab: false,
        active: 0,
        width: 800,
      }
    },
  }
</script>