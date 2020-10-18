<template>
  <div>
    <appbar/>
    <v-container>
      <v-row class="pt-10">
        <v-col cols="2">
          <v-img :src="cover"></v-img>
        </v-col>
        <v-col cols="4">
          <div class="grey--text text--lighten-1 d-flex align-start subtitle-1">
            <span class="pr-4 ">
              <v-icon size="20" class="grey--text text--lighten-1">mdi-eye-outline</v-icon>
              <span>{{view}}</span>
            </span>
            <span>
              <v-icon size="20" class="grey--text text--lighten-1">mdi-eye-outline</v-icon>
              <span>{{like}}</span>
            </span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  import Appbar from "@/components/Appbar";
  import is_dev_env from "@/utils/is_dev_env";
  import mock from "@/mock/info.json"
  export default {
    name: "Info",
    created() {
      if (is_dev_env()) {
        this.adapter(mock)
        return
      }
    },
    components: {
      Appbar
    },
    data(){
      return {
        cover: "",
        view: 0,
        like: 149068,
        author: "",
        raw: "",
        last_update: 0,
        point: 0,
      }
    },
    methods: {
      adapter(mock) {
        this.cover = mock.cover
        this.view = mock.view
        this.like = mock.like
        this.author = mock.author
        this.raw = mock.raw
        this.last_update = mock.last_update
        this.point = mock.point
      }
    }
  }
</script>