<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        <div class="pr-2">使用协议</div>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">
        <div class="">填写信息</div>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">查询结果</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
            flat
            class="mb-12"
            color="grey lighten-4"
            height="200px"
        >
          使用条款
        </v-card>
        <div class="d-flex justify-end">
          <v-btn
              color="primary"
              @click="e1 = 2"
          >
            接受
          </v-btn>
        </div>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card
            flat
            class="mb-12"
        >
          <v-row>
            <v-col cols="12">
              <span class="grey--text">作品信息:</span>
            </v-col>
            <v-col md="6" sm="12" xl="12" cols="12" class="d-flex justify-center pb-0">
              <v-text-field
                  label="原名称"
                  class=""
                  outlined
                  color="blue"
                  background-color="white"
                  append-outer-icon="mdi-information"
                  @click:prepend=""
              >
              </v-text-field>
            </v-col>
            <v-col md="6" sm="12" cols="12" class="d-flex justify-center pb-0">
              <v-text-field
                  label="中文译名"
                  class="pr-8"
                  outlined
                  color="blue"
                  background-color="white"
              >
              </v-text-field>
            </v-col>
            <v-col md="6" sm="12" cols="12" class="d-flex justify-center pb-0 pt-1">
              <v-text-field
                  label="作者名称"
                  class="pr-8"
                  outlined
                  color="blue"
                  background-color="white"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" class="pt-0">
              <span class="grey--text">详细信息:</span>
            </v-col>
            <v-col cols="12">
              <v-select
                  v-model="tags.value"
                  :items="tags.items"
                  outlined
                  chips
                  flat
                  label="类型标签"
                  multiple
                  solo
              ></v-select>
            </v-col>
          </v-row>
        </v-card>
        <div class="d-flex justify-end">
          <v-btn
              color="primary"
              @click="e1 = 3"
          >
            下一步
          </v-btn>
        </div>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card
            class="mb-12"
            flat
            height="200px"
        >
          <!--状态icon-->
          <div class="d-flex justify-center">
            <div><v-icon size="96" color="success">mdi-checkbox-marked-circle</v-icon></div>
          </div>
          <!--信息部分-->
          <div class="text-center font-weight-bold title">
            <div class="pb-4">
              成功
            </div>
            <div>
              词条id：{{result.id}}
            </div>
            <div>
              <v-btn text tile class="text-lowercase primary--text">
                地址：{{result.url}}
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
        tags: {
          items: ['foo', 'bar', 'fizz', 'buzz'],
          value: [],
        },
        result: {
          id:"c195",
          url:"http://localhost:8080/watch",

        }
      }
    },
  }
</script>