<template>
  <v-col cols="12" class="pt-0">
    <div class="d-flex align-center">
      <div>内容：</div>
      <div class="spacer"></div>
      <!--TODO：按钮的切换：当修改被点击的时候，添加按钮消失，增加重置按钮，保存按钮和取消按钮-->
      <!--TODO：当修改选中的时候，card高度拔高，同时hover时提示修改和删除-->
      <div>
        <v-btn class="ml-2 mr-2" elevation="0" color="green" @click="switchVideo" dark>
          <v-icon class="pr-1" size="16">mdi-pencil</v-icon>
          <span>修改</span>
        </v-btn>
        <v-btn class="ml-2 mr-2" elevation="0" color="green" @click="save" dark>
          <v-icon class="pr-1" size="16">mdi-content-save</v-icon>
          <span>保存</span>
        </v-btn>
        <v-btn class="ma-2 mr-2" elevation="0" color="green" @click="addVideo" dark>
          <v-icon class="pr-1">mdi-plus</v-icon>
          <span>添加</span>
        </v-btn>
        <v-btn class="ma-2 mr-2" elevation="0" color="green" @click="reset" dark>
          <v-icon class="pr-1" size="18">mdi-sync</v-icon>
          <span>重置</span>
        </v-btn>
      </div>
    </div>
    <!--展示内容的地方-->
    <draggable class="row pr-6 pl-6" v-model="items" :draggable="status.edit ? '.item': ''">
      <v-col cols="2" class="item" v-for="(item,key) in items">
        <!--hover的时候展示修改和删除-->
        <v-card :elevation="getVideoElevation" outlined>
          <div class="side-bottom" :class="['side-bottom-'+ (status.edit ? 'active': 'inactive')]" @click="deleteVideo(key)"><v-icon size="16">mdi-close</v-icon></div>
          <v-card-text class="text-center">
            <span>{{ item.title }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </draggable>
    <add-video v-model="add.show"></add-video>
  </v-col>
</template>

<script>
import draggable from 'vuedraggable'
import AddVideo from "@/views/Dashboard/Manage/AddVideo";

export default {
  name: "Content",
  created() {
    this.adapter(this.value)
  },
  components: {
    draggable,
    AddVideo
  },
  props: {
    value: {
      type: Array,
      default: undefined
    }
  },
  data() {
    return {
      items: [],
      status: {
        edit: false,
      },
      add: {
        show: false,
      }
    }
  },
  computed: {
    getVideoElevation() {
      return this.status.edit ? '1' : '0'
    },
  },
  watch: {
    value(newVal) {
      this.adapter(newVal)
    }
  },
  methods: {
    deleteVideo(i) {
      this.items.splice(i,1)
    },
    switchVideo() {
      this.status.edit = true
    },
    addVideo() {
      this.add.show = true
    },
    edit() {

    },
    adapter() {
      this.items = this.value.slice(0)
    },
    isSame() {

    },
    reset() {
      this.items = this.value.slice(0)
    },
    save() {
      console.log(this.items)
      this.$emit('input',this.items)
      this.status.edit = false
    },
  }
}
</script>

<style scoped>
  .side-bottom {
    position: absolute;
    right: 5px;
    top: 0;
    transition-duration: 0.3s;
  }
  .side-bottom-active {
    cursor: pointer;
    opacity: 1;
  }
  .side-bottom-inactive {
    opacity: 0;
  }
</style>
