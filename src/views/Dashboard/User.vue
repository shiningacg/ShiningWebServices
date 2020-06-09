<template>
    <v-row class="pa-0">
      <!--侧边栏-->
      <v-col cols="3" class="pt-0">
        <!--大致信息-->
        <v-card flat>
          <div>
            <div class="avatar pt-6 pb-4 d-flex justify-center">
              <v-avatar
                  size="64"
              >
                <v-img
                    :src="avatar"
                >
                </v-img>
              </v-avatar>
            </div>
            <div class="uname pb-6 text-center">
              {{name}}
            </div>
          </div>
        </v-card>
        <!--侧边栏-->
        <v-card class="mt-4 pa-0" flat>
              <v-list
                  nav
              >
                <v-list-item-group color="primary">
                  <v-list-item
                  >
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>用户信息</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item
                  >
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>用户信息</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item><v-list-item
                >
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>用户信息</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
              </v-list>
        </v-card>
      </v-col>
      <!--信息展示-->
      <v-col cols="9" class="pa-0">
        <v-card height="100%" width="100%" flat class="pa-4">
          <!--头像展示-->
          <div class="d-flex justify-center">
            <v-avatar
              size="128"
            >
                <v-img
                    :src="avatar"
                >
                  <v-sheet height="100%" width="100%" class="d-flex justify-center align-center" style="background-color: rgba(0,0,0,.5)">
                    <div class="white--text">
                      修改头像
                    </div>
                  </v-sheet>
              </v-img>
            </v-avatar>
          </div>
          <div class="d-flex justify-center">
            <v-card width="600" flat class="pt-4">
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <div style="width: 80px" class="text-end pr-4">用户名：</div>
                  <v-text-field
                      append-outer-icon="mdi-account"
                      placeholder="shlande"
                  >

                  </v-text-field>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <div style="width: 80px" class="text-end pr-4">密码：</div>
                  <v-text-field
                      append-outer-icon="mdi-account"
                      placeholder="shlande"
                  >

                  </v-text-field>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <div style="width: 80px" class="text-end pr-4" >邮箱：</div>
                  <v-text-field
                      append-outer-icon="mdi-account"
                      placeholder="shlande"
                  >

                  </v-text-field>
                </v-col>
              </v-row>
              <div class="d-flex justify-end pt-8 pb-4" >
                <v-btn color="primary">save</v-btn>
              </div>
            </v-card>
          </div>
        </v-card>
      </v-col>
    </v-row>
</template>
<script>
  import is_dev_env from "@/utils/is_dev_env";
  import mock from "@/mock/user.json"
  export default {
    name: "User",
    props: { input: {} },
    created() {
      if (is_dev_env()) {
        this.adapter(mock)
        return
      }
      this.adapter(this.input)
    },
    data() {
      return {
        name: "",
        avatar: "",
        description: "",
        change: {}
      }
    },
    methods: {
      adapter(user) {
        this.name = user.name
        this.avatar = user.avatar
        this.description = user.description
      }
    }
  }
</script>