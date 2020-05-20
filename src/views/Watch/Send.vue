<template>
  <v-container fluid class="pa-0 pb-2">
    <div class="d-flex">
      <!--头像部分-->
      <div class="avatar pa-4 flex-grow-0">
        <v-avatar
            size="48"
            color="orange"
        >
          <v-img
              :src="user.avatar"
              v-show="user.avatar != ''"
          ></v-img>
          <span class="headline" v-show="user.avatar == ''">{{user.name[0]}}</span>
        </v-avatar>
      </div>
      <!--textarea-->
      <div class="pt-4 flex-grow-1">
        <v-textarea
            height="125"
            flat
            solo
            background-color="#E5E9EF"
            v-model="content"
            label="说点什么呗~"
        >
        </v-textarea>
      </div>
    </div>
    <div class="pa-0 pb-2 d-flex justify-end">
      <v-btn color="success" class="mr-4">发布</v-btn>
    </div>
  </v-container>
</template>

<script>
  import mock from "@/mock/user.json"
  import is_dev_env from "../../utils/is_dev_env";
  export default {
    name:"Send",
    props: {
      input: {}
    },
    created() {
      if (is_dev_env()) {
        this.user = mock
      }
    },
    data() {
      return {
        user: {},
        content: ""
      }
    }
  }
</script>