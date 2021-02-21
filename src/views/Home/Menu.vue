<template>
  <div class="white">
    <v-container class="pa-4 pb-0 d-flex justify-center">
      <div :class="'ml-2 mr-2 pb-3'+(isActive(0)?' wrapper':'')">
        <v-btn text :color="isActive(0)?'primary':''" @click="changeActive(0)">
          <span class="menu-text">最新上传</span>
        </v-btn>
      </div>
      <div :class="'ml-2 mr-2 pb-3'+(isActive(2)?' wrapper':'')">
        <v-btn text :color="isActive(2)?'primary':''" @click="changeActive(2)">
          <span class="menu-text">发现</span>
        </v-btn>
      </div>
      <div :class="'ml-2 mr-2 pb-3'+(isActive(1)?' wrapper':'')">
        <v-btn text :color="isActive(1)?'primary':''" @click="changeActive(1)">
          <span class="menu-text">新番计划</span>
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
        switch (index) {
          case 0:
            return this.$route.name == "Latest"
          case 1:
            return this.$route.name == "Project"
          case 2:
            return this.$route.name == "Find"
        }
      },
      changeActive(index) {
        if (this.isActive(index)) {
          return
        }
        switch (index) {
          case 0:
            return this.$router.push("latest")
          case 1:
            return this.$router.push("project")
          case 2:
            return this.$router.push("find")
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
