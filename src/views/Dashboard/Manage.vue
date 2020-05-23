<template>
  <v-container class="pt-0">
    <v-breadcrumbs class="pt-0 pl-0" :items="crumbs" large></v-breadcrumbs>
    <Prject v-if="false"/>
    <Setting/>
  </v-container>
</template>

<script>
  import Prject from "./Project"
  import Setting from "./Setting"
  export default {
    name:"Manage",
    components: {
      Prject,
      Setting
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