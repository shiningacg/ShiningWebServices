<template>
  <div class="white">
    <v-container class="pa-4 pb-0 d-flex">
      <div :class="'ml-2 mr-2 pb-3'+(active==0?' wrapper':'')">
        <v-btn text :color="active==0?'primary':''" @click="Change(0)">
          <v-icon class="pr-2">mdi-plus-circle-outline</v-icon><span class="menu-text">新建</span>
        </v-btn>
      </div>
      <div :class="'ml-2 mr-2 pb-3'+(active==1?' wrapper':'')">
        <v-btn text :color="active==1?'primary':''" @click="Change(1)">
          <v-icon>mdi-settings</v-icon><span class="menu-text">管理</span>
        </v-btn>
      </div>
      <div :class="'ml-2 mr-2 pb-3'+(active==2?' wrapper':'')">
        <v-btn text :color="active==2?'primary':''" @click="Change(2)">
          <v-icon class="pr-2">mdi-account</v-icon><span class="menu-text">个人信息</span>
        </v-btn>
      </div>
      <div class="spacer"></div>

      <div class="back-to-home">
        <v-btn text>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </div>
      <div class="avatar ml-2 mr-2 d-flex">
        <span class="pt-2 pr-3 body-1" v-if="false">hi,{{name}}</span>
        <v-avatar :size="36">
          <v-img :src="avatar"></v-img>
        </v-avatar>
      </div>
    </v-container>
    <v-divider></v-divider>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        active: 0,
        avatar: "https://prince.kingthemes.org/wp-content/uploads/2017/01/473990304_1280x720-1-150x150.jpg",
        name: "shlande"
      }
    },
    methods: {
      isActive(index) {
        if (this.active == index) {
          return true
        }
        return false
      },
      Change(index) {
        this.active = index
        this.$emit('menu',index)
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