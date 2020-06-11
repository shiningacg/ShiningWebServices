<template>
  <v-card class="pa-4">
    <v-row>
      <!--封面配置-->
      <v-col cols="12">
        <div class="grey--text">封面:</div>
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <v-card flat>
              <v-img
                  :src="cover.current"
              ></v-img>
              <div class="text-center pt-2 ">当前封面</div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="6">

          </v-col>
        </v-row>
      </v-col>
      <!--信息修改-->
      <v-col cols="12" class="pb-0">
        <v-row>
          <!--基本信息修改-->
          <v-col cols="12" md="6" lg="6">
            <v-row>
              <v-col cols="12">
                <span class="grey--text">作品信息:</span>
              </v-col>
              <v-col cols="12" class="d-flex justify-center pb-0">
                <v-text-field
                    label="原名称"
                    :placeholder="info.name"
                    outlined
                    color="blue"
                    background-color="white"
                    append-outer-icon="mdi-information"
                    @click:prepend=""
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" class="d-flex justify-center pb-0">
                <v-text-field
                    label="中文译名"
                    :placeholder="info.translate"
                    class="pr-8"
                    outlined
                    color="blue"
                    background-color="white"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" class="d-flex justify-center pb-0 pt-1">
                <v-text-field
                    label="作者名称"
                    :placeholder="info.author"
                    class="pr-8"
                    outlined
                    color="blue"
                    background-color="white"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <!--附加信息修改-->
          <v-col cols="12" md="6" lg="6">
            <v-row>
              <v-col cols="12">
                <span class="grey--text">详细信息:</span>
              </v-col>
              <v-col class="pb-0" cols="12">
                <v-select
                    v-model="info.tags.value"
                    :items="info.tags.items"
                    outlined
                    chips
                    flat
                    label="类型标签"
                    multiple
                    solo
                ></v-select>
              </v-col>
              <v-col cols="12" class="d-flex justify-center pb-0">
                <v-text-field
                    label="萌娘百科"
                    :placeholder="info.sources.moegirl"
                    outlined
                    color="blue"
                    background-color="white"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <!--内容修改-->
      <v-col cols="12" class="pt-0">
        <div class="d-flex">
          <div>内容：</div>
          <div class="spacer"></div>
          <div>
            <v-btn elevation="0" color="green" dark><v-icon>mdi-plus</v-icon>添加</v-btn>
          </div>
        </div>
        <v-row class="pt-4">
          <!--TODO:自动扩大-->
          <v-col md="1" v-for="i in 5" :key="i">
            <v-btn elevation="0" color="primary" @click="$router.push('/dashboard/edit/'+i)"><span class="text-truncate caption font-weight-bold">第193话</span></v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    name:"Editor",
    components: {

    },
    data() {
      return {
        cover: {
          current: "/cover-normal.jpg",
          temp: ""
        },
        info: {
          name: "py",
          translate: "朋友",
          author: "shlande",
          tags: {
            items: ['foo', 'bar', 'fizz', 'buzz'],
            value: [],
          },
          sources: {
            moegirl: "http://"
          }
        }
      }
    },
  }
</script>