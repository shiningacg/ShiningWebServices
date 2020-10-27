<template>
  <v-card flat class="pa-4">
    <v-card class="d-flex mb-3" flat>
      <div style="border-radius: 6px;overflow: hidden">
        <v-img height="200" width="320" :src="cover"></v-img>
      </div>
      <div class="pl-6">
        <div class="d-flex align-center">
          <v-chip>
            <v-icon class="type pr-2 title">{{icon}}</v-icon>
            <span class="subtitle-1">{{type}}</span>
          </v-chip>
          <span class="pl-4">{{title}}</span>
        </div>

        <!--文件展示？-->
        <div class="_info m" style="height: 140px">

        </div>
        <div class="d-flex grey--text">
          <div class="pl-2 d-flex align-center"><v-icon color="grey" class="pr-1">mdi-eye</v-icon><span class="body-2">{{info.view}}</span></div>
          <div class="pl-2 d-flex align-center"><v-icon color="grey" class="pr-1">mdi-heart</v-icon><span class="body-2">{{info.liked}}</span></div>
          <div class="pl-2 d-flex align-center"><v-icon color="grey" class="pr-1">mdi-comment</v-icon><span class="body-2">{{info.comment}}</span></div>
          <div class="pl-2 d-flex align-center"><v-icon color="grey" class="pr-1">mdi-bookmark</v-icon><span class="body-2">{{info.collect}}</span></div>
        </div>
      </div>
      <div class="spacer"></div>
      <div class="d-flex align-end">
        <v-btn color="primary" class="subtitle-1 font-weight-bold" @click="select">编辑</v-btn>
      </div>
    </v-card>
    <v-divider></v-divider>
  </v-card>
</template>

<script>
  import mock from "@/mock/collection.json"
  import is_dev_env from "@/utils/is_dev_env";
  import unix_time from "@/utils/unix_time";
  export default {
    name: "Project",
    created() {
      if(is_dev_env() && this.input==undefined) {
        this.adapter(mock.comic)
      }
      if (this.value !== undefined) {
        this.adapter(this.value)
        return
      }
      this.adapter()
    },
    props: {
      value:undefined
    },
    data() {
      return {
        cover: "",
        title: "",
        icon: "",
        type: "",
        time: "",
        info: {
          view:0,
          liked:0,
          comment:0,
          collect:0,
        }
      }
    },
    methods: {
      adapter(collection) {
        console.log(collection)
        this.cover = collection.cover
        this.title = collection.name === undefined ? collection.title : collection.name
        switch (collection.type) {
          case "comic":
            this.icon = "mdi-book-open-variant"
            this.type = "漫画"
            break
          case "video":
            this.type = "视频"
            this.icon = ""
            break
          default:
            this.type = "视频"
            this.icon = "mdi-book-open-variant"
        }
        this.time = unix_time(collection.create_time,"second")
        this.info = {
          view: collection.view,
          liked: 0,
          comment: 0,
          collect: 0
        }
      },
      select() {
        this.$emit("manage",{
          title: this.title,
        })
      }
    }
  }
</script>