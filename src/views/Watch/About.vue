<template>
  <v-card flat class="pa-4">
    <v-container fluid class="pa-0 d-flex">
      <div class="cover">
        <v-card>
          <v-img
              :src="video.cover"
              height="180px"
              width="130px"
          ></v-img>
        </v-card>
      </div>
      <div class="pl-4 d-flex flex-column">
        <!--标题-->
        <div class="subtitle-1 font-weight-bold pb-2 d-flex">
          <span>{{video.name}}</span>
          <div class="spacer"></div>
          <div class="left-btn pr-6 d-flex align-center">
            <v-btn elevation="0" color="#F06292" dark><v-icon>mdi-star-outline</v-icon><span class="font-weight-bold">订阅</span></v-btn>
          </div>
        </div>
        <div class="grey--text caption text--darken-1 font-weight-bold">
          <span>{{video.watched}} 次播放</span>
        </div>
        <div class="body-2 font-weight-bold">
          <span>{{video.introduction}}</span>
        </div>
        <div class="spacer"></div>
        <!--上传者的狗头-->
        <div class="d-flex justify-end pr-6" v-if="false">
          <v-avatar
              color="orange"
              size="36"
          >aa</v-avatar>
        </div>
        <!--更新时间线-->
        <div>
          <TimeTable/>
        </div>
      </div>
    </v-container>
  </v-card>
</template>
<script>
  import is_dev_env from "../../utils/is_dev_env";
  import TimeTable from './TineTable'
  import mock from "../../mock/video.json"
  export default {
    name:"About",
    components: {
      TimeTable
    },
    props: {
      input: {
        vid: Number,
        cover: String,
        poster: [],
        name: String,
        url: String,
        watched: Number,
        introduction: String
      }
    },
    mounted() {
      if (is_dev_env()) {
        this.video = mock
        console.log(this.video,mock)
        return
      }
      this.video = this.input
    },
    data() {
      return {
        video: {}
      }
    }
  }
</script>