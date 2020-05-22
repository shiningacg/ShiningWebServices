<template>
  <div class="pr-0">
    <div class="d-flex align-end pr-6" v-if="true">
      <div class="pr-6">
        <v-btn rounded color="green" dark class="mr-2" v-for="(source,key) in sources" :key="key" v-if="source!=undefined">
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
</template>

<script>
  import is_dev_env from "@/utils/is_dev_env";
  import mock from "@/mock/collection.json"

  export default {
    name: "MoreAction",
    props: {
      input: {}
    },
    created() {
      this.sources = []
      if(is_dev_env() && this.input == undefined) {
        this.adapter(mock.video.source)
        return
      }
      this.adapter(this.input)
    },
    data() {
      return {
        sources: [{
          icon: "",
          text: "",
          url: ""
        }],
        // 配置信息，用于设置按钮组显示
        pre_source: [{
          name: "moegirl",
          icon: "mdi-book-open-variant",
          text: "萌娘百科"
        }]
      }
    },
    methods: {
      adapter(sources) {
        console.log(sources)
        for (let source of sources) {
          this.sources.push(this.getSource(source))
        }
      },
      getSource(source) {
        for (let pre of this.pre_source) {
          if (source.name == pre.name) {
            return pre
          }
          return undefined
        }
      },
      goto(path) {
        this.$router.push(path)
      }
    }
  }
</script>