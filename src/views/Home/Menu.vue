<template>
  <div class="white">
    <v-container class="pa-4 pb-0 d-flex justify-center">
      <div :class="'ml-2 mr-2 pb-3'+(active==0?' wrapper':'')">
        <v-btn text :color="active==0?'primary':''" @click="active=0">
          <span class="menu-text">最新上传</span>
        </v-btn>
      </div>
      <div :class="'ml-2 mr-2 pb-3'+(active==1?' wrapper':'')">
        <v-btn text :color="active==1?'primary':''" @click="active=1">
          <span class="menu-text">发现</span>
        </v-btn>
      </div>
      <div :class="'ml-2 mr-2 pb-3'+(active==2?' wrapper':'')">
        <v-btn text :color="active==2?'primary':''" @click="active=2">
          <span class="menu-text">加入我们</span>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        active: 0,
      }
    },
    methods: {
      isActive(index) {
        if (this.active == index) {
          return true
        }
        return false
      }
    }
  }
</script>

<style scoped>
  .menu-text {
    font-size: 18px;
    font-weight: 600;
  }
  .menu-text:hover {
    color: #0064f9;
  }
  .wrapper {
    border-bottom: 3px solid #0064f9;
  }
</style>