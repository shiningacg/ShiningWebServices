<template>
  <v-container fluid class="pa-0">
    <div class="comment d-flex">
      <!--头像-->
      <div class="avatar pa-4 flex-grow-0">
        <v-avatar
            size="48"
            color="orange"
        >
          <v-img
              :src="comment.avatar"
              v-show="comment.avatar != ''"
          ></v-img>
          <span class="headline" v-show="comment.avatar == ''">{{comment.name[0]}}</span>
        </v-avatar>
      </div>
      <div class="content pt-2 pb-3 align-stretch flex-grow-1" style="border-bottom: 1px solid #E5E9EF">
        <!--用户名-->
        <div class="blue--text lighten-2 caption pb-1">
          {{comment.name}}
        </div>
        <!--内容-->
        <div class="body-2">
          <span>{{comment.content}}</span>
        </div>
        <!--footer-->
        <div class="caption grey--text d-flex align-baseline">
          <div><span>{{timeFormat(comment.sendtime)}}</span></div>
          <div class="pl-6 d-flex align-center" style="height: 12px">
            <v-icon class="pr-1" size="14" color="grey">mdi-thumb-up-outline</v-icon><span>{{comment.liked}}</span>
            <v-icon class="pl-3" size="14" color="grey">mdi-thumb-down-outline</v-icon>
          </div>
          <div class="more-action ml-auto d-flex justify-center">
            <v-icon size="24">mdi-dots-vertical</v-icon>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
  import is_dev_env from "../../utils/is_dev_env";
  import mock from "@/mock/watch.json"
  import unix_time from "../../utils/unix_time";
  export default {
    name: "comments",
    created() {
      if(is_dev_env()) {
        this.comment = mock.comments[0]
      }
    },
    props: {
      input: {
        id : String,
        floor: Number,
        name: String,
        avatar: String,
        content: String,
        liked : Number,
        replyto: String
      }
    },
    data() {
      return {
        comment: {}
      }
    },
    methods: {
      timeFormat() {
        return unix_time(this.comment.sendtime,"minute")
      }
    }
  }
</script>