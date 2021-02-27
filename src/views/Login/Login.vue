<template>
  <v-container fluid class="d-flex justify-end pa-0" style="height:100%;background-size: cover;background-image: url('/genshin-impack.jpeg');">
    <!-- 登陆界面 -->
    <v-card v-show="login" height="100%" width="400" elevation="20" color="rgba(0,0,0,.5)">
        <div class="text-center title-logo col-12 pt-6">ShiningACG</div>
        <div class="form pa-6 pb-0">
          <v-text-field
              outlined
              background-color="rgba(0,0,0,.1)"
              append-icon="mdi-email"
              color="primary"
              v-model="email"
              dark
          ></v-text-field>
          <v-text-field
              outlined
              background-color="rgba(0,0,0,.1)"
              append-icon="mdi-lock"
              color="primary"
              v-model="password.login"
              type="password"
              dark
          ></v-text-field>
        </div>
        <div class="more-action d-flex pr-1 pl-6">
          <div class="spacer"></div>
          <div class="regiter">
            <v-btn
                @click="login=false"
                text
                dark
            >没有账号？</v-btn>
          </div>
        </div>
        <div class="pr-6 pl-6">
          <v-btn
              block
              @click="Login"
          >登录</v-btn>
        </div>
      </v-card>
    <!--  注册界面  -->
    <v-card v-show="!login" height="100%" width="400" elevation="20" color="rgba(0,0,0,.5)">
      <div class="text-center title-logo col-12 pt-6">ShiningACG</div>
      <div class="form pa-6 pb-0">
        <v-text-field
            outlined
            background-color="rgba(0,0,0,.1)"
            append-icon="mdi-account"
            color="primary"
            v-model="user"
            dark
        ></v-text-field>
        <v-text-field
            outlined
            background-color="rgba(0,0,0,.1)"
            append-icon="mdi-email"
            color="primary"
            v-model="email"
            dark
        ></v-text-field>
        <v-text-field
            outlined
            background-color="rgba(0,0,0,.1)"
            append-icon="mdi-lock"
            color="primary"
            v-model="password.register"
            type="password"
            dark
        ></v-text-field>
        <v-text-field
            outlined
            background-color="rgba(0,0,0,.1)"
            append-icon="mdi-share-variant"
            color="primary"
            v-model="activeCode"
            type="text"
            dark
        ></v-text-field>
      </div>
      <div class="more-action d-flex pr-1 pl-6">
        <div class="spacer"></div>
        <div class="regiter">
          <v-btn
              @click="login=true"
              text
              dark
          >已有账号？</v-btn>
        </div>
      </div>
      <div class="pr-6 pl-6">
        <v-btn
            block
            @click="Register"
        >注册</v-btn>
      </div>
    </v-card>
    <!-- 消息提示框 -->
    <v-dialog
        v-model="messageBox"
        width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          错误
        </v-card-title>

        <v-card-text>
          登陆失败：{{error}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="messageBox = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { RegisterRequest, LoginRequest } from "@/utils/proto/user/user_pb"
import cookie from "js-cookie"
export default {
  created() {
    // if (this.$client.Authed()) {
    //   this.$router.push("/dashboard")
    // }
  },
  name: "Login",
  data(){
    return {
      login: true,
      user: "",
      email: "",
      password: {
        login: "",
        register: "",
      },
      activeCode: "",
      messageBox: false,
      error: ""
    }
  },
  methods: {
    Register() {
      const req = new RegisterRequest()
      req.setUsername(this.user)
      req.setPassword(this.password.register)
      req.setEmail(this.email)
      this.$client.register(req,{})
      .then(()=> {
        this.error = "注册成功！"
        this.messageBox = true
      })
      .catch(err => {
        console.log(err)
        this.error = err
        this.messageBox = true
      })
    },
    Login() {
      const req = new LoginRequest()
      req.setEmail(this.email)
      req.setPassword(this.password.login)
      this.$client.login(req,{})
          .then((res)=> {
            console.log(res.getToken())
            cookie.set('token', res.getToken(),{expires: 1})
            this.$store.commit("setToken",res.getToken())
            // TODO: 不止为何...
            this.$router.push("/dashboard")
          })
      .catch(err => {
        this.error = err.message
        this.messageBox = true
      })
    }
  }
}
</script>

<style>
  .more-action {
    position: relative;
    top: -15px;
  }
  .title-logo {
    font-weight: 900;
    font-size: 36px;
    color: white;
    font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
  }
</style>
