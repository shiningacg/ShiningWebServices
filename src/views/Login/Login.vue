<template>
  <v-container fluid class="d-flex justify-end pa-0" style="height:100%;background-image: linear-gradient(to bottom right,rgb(114,135,254),rgb(130,88,186));">
      <v-card height="100%" width="400" elevation="20" color="rgba(0,0,0,.5)">
        <div class="text-center title-logo col-12 pt-6">ShiningACG</div>
        <div class="form pa-6 pb-0">
          <v-text-field
              outlined
              background-color="rgba(0,0,0,.1)"
              append-icon="mdi-account"
              color="primary"
              dark
          ></v-text-field>
          <v-text-field
              outlined
              background-color="rgba(0,0,0,.1)"
              append-icon="mdi-lock"
              color="primary"
              type="password"
              dark
          ></v-text-field>
        </div>
        <div class="more-action d-flex pr-1 pl-6">
          <div class="spacer"></div>
          <div class="regiter">
            <v-btn
                text
                dark
            >没有账号？</v-btn>
          </div>
        </div>
        <div class="pr-6 pl-6">
          <v-btn
              block
          >登录</v-btn>
        </div>
      </v-card>
  </v-container>
</template>

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