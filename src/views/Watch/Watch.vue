<template>
  <div class="watch grey lighten-4 ma-0">
    <Appbar type="dark" :opacity="false"/>
    <!-- TODO: 60px不写死，自动根据appbar调整 -->
      <v-container style="margin-top: 60px" class="pt-0">
        <v-card flat>
          <!--标题-->

          <!--播放器相关-->
          <div>
            <Player/>
          </div>
          <v-divider></v-divider>
          <!--视频信息相关-->
          <div>
            <About></About>
            <TimeTable v-if="false"/>
          </div>
        </v-card>
        <v-divider></v-divider>
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
  import TimeTable from './TimeTable'
  import Comment from "./Comments"
  import Send from "./Send"
  import Player from "./Player";
  import About from './About'
  import Appbar from "../../components/Appbar";
  import { CollectionPageRequest } from "@/utils/proto/public_pb"
  export default {
    name: "Watch",
    components: {
      Comment,
      Send,
      Player,
      About,
      TimeTable,
      Appbar
    },
    async created() {
      document.documentElement.scrollTop = 0
      await this.loadCollection(this.currentCollectionId)
      console.log(this.project,"nini",this.currentCollectionId)
    },
    computed: {
      currentCollectionId() {
        return this.$route.params.id
      }
    },
    methods: {
      async loadCollection(collectionId) {
        const req = new CollectionPageRequest()
        req.setUuid(collectionId)
        this.project = await this.$client.collectionPage(req)
      }
    },
    data() {
      return {
        project : undefined,
        video: {},
        comments: [],
      }
    }
  }
</script>
