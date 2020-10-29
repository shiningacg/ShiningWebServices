<template ref="container">
  <v-dialog>
    <v-card>
      hi
      <v-card-actions>
        <v-btn color="primary" @click="confirm">确定</v-btn>
        <v-btn color="dangerous" @click="cancel">取消</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "MessageBox",
  data() {
    return {
      show: true,
      callback: {
        confirm: Function,
        cancel: Function,
      }
    }
  },
  methods: {
    confirm() {
      this.callback.confirm()
    },
    cancel() {
      this.callback.cancel()
    }
  },
  error(title,message) {
    this.$createElement('div',"hello")
    return new Promise((resolve, reject) => {
      this.callback.confirm = resolve
      this.callback.cancel = reject
    })
  }
}
</script>

<style scoped>

</style>