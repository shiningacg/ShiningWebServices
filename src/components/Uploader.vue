<template>
  <div>
    <v-row class="sortable" v-if="multi">
      <v-col cols="6" md="3" v-for="(item,key) in this.items" :key="key"
             draggable="true"
             @dragstart="handleDragStart($event, item)"
             @dragover.prevent="handleDragOver($event, item)"
             @dragenter="handleDragEnter($event, item)"
             @dragend="handleDragEnd($event, item)"
      >
        <div style="position: relative">
          <div style="position: absolute;right: 32px;">
            <v-btn text fab x-small absolute @click="removeFile(key)">
              <v-icon>mdi-close-circle</v-icon>
            </v-btn>
          </div>
          <v-img :height="getHeight()" contain :src="item.url == undefined? item.src : item.url" :alt="item.name" height="200"></v-img>
        </div>
      </v-col>
      <v-col cols="6" md="3" class="uploader">
        <v-img :height="getHeight()" src="">
          <v-card flat class="d-flex align-center justify-center" height="200" width="100%"
                  style="background-color:transparent;border: 2px dashed grey" @click="activeFileSelector">
            <div class="justify-center">
              <div class="text-center">
                <v-icon size="48">mdi-plus</v-icon>
              </div>
              <div class="pt-2 grey--text">添加图片</div>
            </div>
          </v-card>
        </v-img>
      </v-col>
    </v-row>
    <v-row v-if="!multi">
      <v-col cols="12" class="uploader">
        <v-img :height="getHeight()" :src="getHolder(item)">
          <v-card flat class="d-flex align-center justify-center" height="100%" width="100%"
                  style="background-color: transparent;border: 2px dashed grey" @click="activeFileSelector">
            <div class="justify-center">
              <div class="text-center">
                <v-icon size="48">mdi-plus</v-icon>
              </div>
              <div class="pt-2 grey--text">上传图片</div>
            </div>
          </v-card>
        </v-img>
      </v-col>
    </v-row>
    <div v-show="false">
      <input type="file" ref="file" @change="addFile($event)"/>
    </div>
  </div>
</template>
<script>
import mock from "@/mock/uploader.json"
import is_dev_env from "../utils/is_dev_env";

export default {
  name: "Uploader",
  props: {
    height: {
      type: [Number],
      default: 200,
    },
    full: {
      type: [Boolean],
      default: false
    },
    multi: {
      type: [Boolean],
      default: false
    },
    src: String
  },
  created() {
  },
  data() {
    return {
      item: undefined,
      items: [],
      dragging: null
    }
  },
  methods: {
    getHeight() {
      console.log(this)
      // 返回自动设置
      if (this.full) {
        return undefined
      }
      return this.height
    },
    reset() {
      this.item = undefined
    },
    activeFileSelector() {
      this.$refs.file.click()
    },
    getHolder(item) {
      if (this.item === undefined) {
        return this.src
      }
      return item.url === undefined ? item.src : item.url
    },
    addFile(el) {
      const file = el.target.files[0]
      if (file === undefined) {
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (el) => {
        const f = {name: file.filename, src: el.target.result, file: file}
        if (this.multi) {
          this.items.push(f)
        }
        this.item = f
      }
      this.$emit("selected", file)
    },
    removeFile(key) {
      this.items.splice(key, 1)
    },
    handleDragStart(e, item) {
      this.dragging = item;
    },
    handleDragEnd(e, item) {
      this.dragging = null
    },
    //首先把div变成可以放置的元素，即重写dragenter/dragover
    handleDragOver(e) {
      e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
    },
    handleDragEnter(e, item) {
      e.dataTransfer.effectAllowed = "move"//为需要移动的元素设置dragstart事件
      if (item === this.dragging) {
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