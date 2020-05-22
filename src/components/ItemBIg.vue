<template>
  <v-container fluid class="pa-0 pt-2 pb-2">
    <v-card height="290" max-width="1160" class="pa-3" style="border-radius: 12px;" flat>
      <v-row class="pa-0">
        <!--图片存放-->
        <v-col class="pa-0 pl-3" cols="5">
          <div style="border-radius: 12px;overflow: hidden;">
            <v-img
                :src="cover"
                height="266"
                :aspect-ratio="2/1"
                cover
            ></v-img>
          </div>
        </v-col>
        <!--信息布局-->
        <v-col class="pa-0 pl-4 d-flex flex-column" cols="7">
          <!--title-->
          <div class="mb-4 mt-4 black--text text--lighten-5 subtitle-1"
               style="font-family: 'Source Han Sans', 'Nunito',sans-serif  !important;">
            {{title}}
          </div>
          <!--introduce-->
          <div class="grey--text body-2 stretch"
               style="font-family: 'Source Han Sans', 'Nunito',sans-serif  !important;">
            {{introduction}}
          </div>
          <!--footer-->
          <div class="mt-auto d-flex" style="font-family: 'Source Han Sans', 'Nunito',sans-serif  !important;">
            <!--TODO:添加多用户显示和工作信息-->
            <div>
              <!--头像及更新信息显示-->
              <v-avatar color="teal" size="44">
                <v-img :src="posters[0].avatar"></v-img>
              </v-avatar>
              <div class="pl-2">
                <div>{{posters[0].name}}</div>
                <div class="grey--text text--lighten-1 caption">{{unix_time()(info.post_time)}}</div>
              </div>
            </div>
            <div class="spacer"></div>
            <!--底部按钮组-->
            <div class="pr-0">
              <div class="d-flex align-end pr-6" v-if="true">
                <div class="pr-6">
                  <v-btn rounded color="green" dark class="mr-2" v-for="(source,key) in sources" :key="key" v-if="sources!=undefined">
                    <v-icon class="pr-1">{{source.icon}}</v-icon>
                    <span>{{source.text}}</span>
                  </v-btn>
                  <v-btn rounded color="primary">
                    <v-icon class="pr-1">mdi-cloud-download</v-icon>
                    <span>下载</span>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  import unix_time from "@/utils/unix_time";
  import mock from "@/mock/collection.json"
  import is_dev_env from "@/utils/is_dev_env";

  export default {
    name: "item-card",
    props: {
      input: {}
    },
    data() {
      return {
        title: "",
        cover: "",
        introduction: "",
        posters: [{
          name: "",
          avatar: "",
          support:""
        }],
        sources: [{
          icon: "",
          text: "",
          url: ""
        }],
        last_update: 0,
        // 配置信息，用于设置按钮组显示
        pre_source: [{
          name: "moegirl",
          icon: "mdi-book-open-variant",
          text: "萌娘百科"
        }]
      }
    },
    created() {
      if (is_dev_env()) {
        this.adapter(mock.video)
        return
      }
      this.adapter(this.input)
    },
    methods: {
      adapter(collection) {
        this.title = collection.name
        this.cover = collection.cover
        this.introduction = collection.introduction
        this.poster = collection.poster
        this.last_update = collection.last_update
        this.sources = []
        for (let source in collection.sources) {
          this.sources.append(this.getSource(source))
          }
      },
      getSource(source) {
        for (let pre in this.pre_source) {
          if (source.name == pre.name) {
            return pre
          }
        }
      },
      unix_time() {
        return unix_time
      },
      goto(path) {
        this.$router.push(path)
      }
    }
  }
</script>