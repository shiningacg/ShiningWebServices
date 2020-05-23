<template>
  <v-card class="pa-4">
    <div class="">
      <span class="grey--text body-2">我参与的项目:</span>
    </div>
    <!--单个项目展示-->
    <div class="pt-2">
      <v-row>
        <v-col cols="12" md="6" lg="6" v-for="(item,key) in myProjects" :key="key">
          <v-card height="290" max-width="1160" class="pa-3" style="border-radius: 12px;" flat>
            <v-row class="pa-0">
              <!--图片存放-->
              <v-col class="pa-0 pl-3">
                <div style="border-radius: 12px;overflow: hidden;">
                  <v-img
                      :src="item.cover"
                      height="266"
                      :aspect-ratio="2/1"
                      cover
                  >
                    <div class="d-flex align-end" style="height: 100%">
                      <v-card dark class="pa-4 d-flex align-center" color="rgba(0,0,0,.5)" width="100%">
                        <div class="text-truncate font-weight-bold" style="max-width: 230px">{{item.title}}</div>
                        <div class="type pl-2"><v-icon>{{item.icon}}</v-icon></div>
                        <div class="spacer"></div>
                        <div class="bottoms">
                          <v-btn fab text small><v-icon>mdi-camera-outline</v-icon></v-btn>
                          <v-btn fab text small><v-icon>mdi-trash-can</v-icon></v-btn>
                        </div>
                      </v-card>
                    </div>
                  </v-img>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
  import mock from "@/mock/collection.json"
  import is_dev_env from "@/utils/is_dev_env";
  export default {
    name:"Project",
    components:{},
    created() {
      if (is_dev_env()) {
        this.adapter([mock.video,mock.comic])
        return
      }
    },
    data() {
      return {
        myProjects : [
          {
            cover: "",
            title: "",
            icon: ""
          }
        ]
      }
    },
    methods: {
      adapter(collections) {
        this.myProjects = []
        for(let collection of collections) {
          let icon
          switch (collection.type) {
            case "comic":
              icon = "mdi-book-open-variant"
              break
            case "video":
              icon = ""
              break
            default:
              icon = "e"
          }
          this.myProjects.push({cover: collection.cover,title: collection.name,icon: icon})
        }
      }
    }
  }
</script>