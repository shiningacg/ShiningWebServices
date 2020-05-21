<template>
  <div class="watch grey lighten-4 ma-0">
    <top-head/>
      <v-container>
        <!--标题-->
        <div>
          <span>{{video.name}}</span>
        </div>
        <!--播放器相关-->
        <div>
          <Player/>
        </div>
        <!--视频信息相关-->
        <div>
          <About></About>
          <TimeTable v-if="false"/>
        </div>
        <!--评论相关-->
        <v-card color="white" flat class="pa-2 pt-4 pb-4">
          <div class="pt-2 pb-2 pl-5 grey--text font-weight-bold">{{comments.length}} 条评论</div>
          <div class="send" style="border-bottom: 1px solid #E5E9EF">
            <Send/>
          </div>
          <div class="comments">
            <Comment/>
          </div>
        </v-card>
      </v-container>
  </div>
</template>

<script>
  import is_dev_env from "../../utils/is_dev_env";
  import TimeTable from './TimeTable'
  import mock from "../../mock/watch.json"
  import Comment from "./Comments"
  import Send from "./Send"
  import Player from "./Player";
  import TopHead from "./Head";
  import About from './About'
  export default {
    name: "Watch",
    components: {
      Comment,
      Send,
      Player,
      TopHead,
      About,
      TimeTable
    },
    created() {
      if (is_dev_env()) {
        this.video = mock.video
        this.components = mock.comments
      }
    },
    data() {
      return {
        video: {},
        comments: [],
      }
    }
  }
</script>