<template>
  <v-container class="pt-0">
    <div class="pb-4 d-flex align-center">
      <v-btn text depressed @click="crumbs.pop()">管理</v-btn>
      <div v-if="crumbs.length !== 0">
        <span class="pr-5">/</span>
        <span class="body-2 grey--text text--darken-2">{{crumbs[0].text}}</span>
      </div>
    </div>
    <Project @manage="manageItem" v-if="crumbs.length === 0"/>
    <Setting  v-if="crumbs.length !== 0"/>
  </v-container>
</template>

<script>
  import Setting from "./Manage/Setting"
  import Project from "@/views/Dashboard/Manage/Project_2";
  export default {
    name:"Manage",
    components: {
      Setting,
      Project
    },
    data() {
      return {
        crumbs: [],
      }
    },
    methods: {
      manageItem(item) {
        console.log(item)
        this.crumbs.push({
          text: item.title,
          disabled: true,
          href: ''
        })
      },
    }
  }
</script>