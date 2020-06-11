<template>
  <div>
    <v-row class="sortable">
      <v-col cols="6" md="3" v-for="(item,key) in this.items" :key="key"
             draggable="true"
             @dragstart="handleDragStart($event, item)"
             @dragover.prevent="handleDragOver($event, item)"
             @dragenter="handleDragEnter($event, item)"
             @dragend="handleDragEnd($event, item)"
      >
        <div style="position: relative">
          <div style="position: absolute;right: 32px;">
            <v-btn text fab x-small absolute @click="removeFile(key)"><v-icon>mdi-close-circle</v-icon></v-btn>
          </div>
          <v-img contain :src="item.url == undefined? item.src : item.url" :alt="item.name" height="200"></v-img>
        </div>
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
  </div>
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
        items:[],
        dragging: null
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
      },
      removeFile(key) {
        this.items.splice(key,1)
      },
      handleDragStart(e,item){
        this.dragging = item;
      },
      handleDragEnd(e,item){
        this.dragging = null
      },
      //首先把div变成可以放置的元素，即重写dragenter/dragover
      handleDragOver(e) {
        e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
      },
      handleDragEnter(e,item){
        e.dataTransfer.effectAllowed = "move"//为需要移动的元素设置dragstart事件
        if(item === this.dragging){
          return
        }
        const newItems = [...this.items]
        console.log(newItems)
        const src = newItems.indexOf(this.dragging)
        const dst = newItems.indexOf(item)
        newItems.splice(dst, 0, ...newItems.splice(src, 1))
        this.items = newItems
      }
    }
  }
</script>