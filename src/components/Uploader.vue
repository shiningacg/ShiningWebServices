<template>
  <v-row>
    <v-col cols="6" md="3" v-for="(item,key) in this.items" :key="key">
      <v-img contain :src="item.url == undefined? item.src : item.url" :alt="item.name" height="200"></v-img>
    </v-col>
    <v-col cols="6" md="3" class="uploader">
      <v-card flat class="d-flex align-center justify-center" height="200" width="100%" style="border: 2px dashed grey" @click="activeFileSelector">
        <div class="justify-center">
          <div class="text-center"><v-icon size="48">mdi-plus</v-icon></div>
          <div class="pt-2 grey--text">添加图片</div>
        </div>
      </v-card>
    </v-col>
    <div v-show="false">
      <input type="file" ref="file" @change="addFile($event)"/>
    </div>
  </v-row>
</template>
<script>
  import mock from "@/mock/uploader.json"
  import is_dev_env from "../utils/is_dev_env";
  export default {
    name: "Uploader",
    props: {},
    created() {
      if (is_dev_env()) {
        this.items = mock.items
        return
      }
    },
    data() {
      return {
        items:[]
      }
    },
    methods: {
      activeFileSelector() {
        this.$refs.file.click()
      },
      addFile(el) {
        const _this = this
        const file = el.target.files[0]
        if (file == undefined) {
          return
        }
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(e) {
          _this.items.push({name:file.filename,src:this.result,file:file})
        }
      }
    }
  }
</script>