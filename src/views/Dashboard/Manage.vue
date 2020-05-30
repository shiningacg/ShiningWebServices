<template>
  <v-container class="pt-0">
    <v-breadcrumbs class="pt-0 pl-0" :items="crumbs" large></v-breadcrumbs>
    <Prject v-if="false"/>
    <Project_2 v-if="false"/>
    <Setting v-if="true"/>
  </v-container>
</template>

<script>
  import Prject from "./Project"
  import Setting from "./Setting"
  import Project_2 from "@/views/Dashboard/Project_2";
  export default {
    name:"Manage",
    components: {
      Prject,
      Setting,
      Project_2
    },
    data() {
      return {
        crumbs: [
        {
          text: '管理',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'c196',
          disabled: false,
          href: 'breadcrumbs_link_1',
        }
      ],
      }
    }
  }
</script>