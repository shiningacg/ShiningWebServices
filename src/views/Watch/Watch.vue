<template>
  <div class="watch grey lighten-4 ma-0">
    <v-content>
      <v-container style="height: 1200px">
        <!--标题-->
        <div>
          <span>{{video.name}}</span>
        </div>
        <!--播放器相关-->
        <div>
          <div ref="dplay"></div>
        </div>
        <!--评论相关-->
        <div class="comments">
          <Comment/>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import is_dev_env from "../../utils/is_dev_env";
  import mock from "../../mock/watch.json"
  import Comment from "./Comments"
  export default {
    name: "Watch",
    components: {
      Comment
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