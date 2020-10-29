<template>
  <div class="grey lighten-4" style="height: 100%">
    <div class="top-menu white">
      <v-container class="pa-4 pb-0 d-flex">
        <div :class="'ml-2 mr-2 pb-3'+(isActive(0)?' wrapper':'')">
          <v-btn text :color="isActive(0)?'primary':''" @click="Change(0)">
            <v-icon class="pr-2">mdi-plus-circle-outline</v-icon>
            <span class="menu-text">新建</span>
          </v-btn>
        </div>
        <div :class="'ml-2 mr-2 pb-3'+(isActive(1)?' wrapper':'')">
          <v-btn text :color="isActive(1)?'primary':''" @click="Change(1)">
            <v-icon>mdi-settings</v-icon>
            <span class="menu-text">管理</span>
          </v-btn>
        </div>
        <div :class="'ml-2 mr-2 pb-3'+(isActive(2)?' wrapper':'')">
          <v-btn text :color="isActive(2)?'primary':''" @click="Change(2)">
            <v-icon class="pr-2">mdi-account</v-icon>
            <span class="menu-text">个人信息</span>
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
      <v-container class="pa-0 pt-4">
        <router-view></router-view>
      </v-container>
  </div>
</template>

<script>
// TODO：使用路由参数取代变量检测
  export default {
    name: "Dashboard",
    data() {
      return {
        active: 0,
        avatar: "https://prince.kingthemes.org/wp-content/uploads/2017/01/473990304_1280x720-1-150x150.jpg",
        name: "shlande"
      }
    },
    methods: {
      isActive(index) {
        switch (index) {
          case 0:
            return this.$route.name == "New"
          case 1:
            return this.$route.name == "Manage"
          case 2:
            return this.$route.name == "User"
        }
      },
      Change(index) {
        if (this.isActive(index)) {
          return
        }
        switch (index) {
          case 0 :
            this.$router.push("/dashboard/new")
            return
          case 1:
            this.$router.push("/dashboard/manage")
            return
          case 2:
            this.$router.push("user")
            return
        }
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

<style>
a {
  text-decoration: none;
}
</style>
