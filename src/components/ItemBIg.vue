<template>
  <v-container fluid class="pa-0 pt-2 pb-2">
    <v-card height="290" max-width="1160" class="pa-3" style="border-radius: 12px;" flat>
      <v-row class="pa-0">
        <!--图片存放-->
        <v-col class="pa-0 pl-3" cols="5">
          <div style="border-radius: 12px;overflow: hidden;">
            <v-img
                :src="this.pic"
                height="266"
                :aspect-ratio="2/1"
                cover
            ></v-img>
          </div>
        </v-col>
        <!--      信息布局-->
        <v-col class="pa-0 pl-4 d-flex flex-column" cols="7">
          <!--    title-->
          <div class="mb-4 mt-4 black--text text--lighten-5 subtitle-1" style="font-family: 'Source Han Sans', 'Nunito',sans-serif  !important;">
            {{info.title}}
          </div>
          <!--        introduce-->
          <div class="grey--text body-2 stretch" style="font-family: 'Source Han Sans', 'Nunito',sans-serif  !important;">
            {{info.introduction}}
          </div>
          <!--        footer-->
          <div class="mt-auto d-flex" style="font-family: 'Source Han Sans', 'Nunito',sans-serif  !important;">
                <v-avatar color="teal" size="44" >
                  <v-img :src="info.poster.avatar"></v-img>
                </v-avatar>
                <div class="pl-2">
                  <div>{{info.poster.name}}</div>
                  <div class="grey--text text--lighten-1 caption">{{unix_time()(info.post_time)}}</div>
                </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  import unix_time from "@/utils/unix_time";
  import mock from "@/mock/itemcard.json"
  import is_dev_env from "@/utils/is_dev_env";
  export default {
    name: "item-card",
    props: {
      input: {
        pic: String,
        info: {
          title: String,
          introduction: String,
          post_time: Number,
          poster: {
            id: Number,
            avatar: String,
            name: String
          }
        }
      }
    },
    data(){
      return {
        pic: "",
        info: {}
      }
    },
    created(){
      if(is_dev_env()) {
        this.pic = mock.pic
        this.info = mock.info
        return
      }
      this.pic = this.input.pic
      this.info = this.input.info
    },
    methods: {
      unix_time(){
        return unix_time
      }
    }
  }
</script>