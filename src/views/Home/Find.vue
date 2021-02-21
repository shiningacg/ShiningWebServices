<template>
  <v-row>
    <v-col v-show="!searched" class="text-center">
      在上面搜索些什么把～
    </v-col>
    <v-col v-show="isNoResult()" class="text-center">
      这里什么都没有～
    </v-col>
    <v-col cols="12" v-for="(item,key) in collections" :key="key"><item-big :input="item"/></v-col>
  </v-row>
</template>

<script>
import { SearchCollectionRequest } from "@/utils/proto/watch/watch_pb"
import { DownloadRequest } from "@/utils/proto/file/file.v2_pb"
import ItemBig from "../../components/ItemBig";
export default {
  name: "Find",
  components: {
    ItemBig,
  },
  mounted() {
    this.reload()
  },
  data() {
    return {
      collections: [],
      searched: false,
    }
  },
  computed: {
    keywords() {
      return this.$route.query.v
    }
  },
  watch: {
    keywords() {
      this.reload()
    }
  },
  methods: {
    reload() {
      // 最高优先级是url里面的
      let keyword = this.keywords
      // 如果url没了，则查看store里面的
      if (keyword === undefined || keyword === "") {
        keyword = this.$store.state.search_keywords
      }
      this.searchCollection(keyword)
    },
    isNoResult() {
      return this.searched && (this.collections.length === 0)
    },
    async searchCollection(keywords) {
      if (keywords === undefined || keywords === "") {
        this.searched = false
        return
      }
      const req = new SearchCollectionRequest()
      req.setKeywords(keywords)
      this.$client.searchPage(req,{}).then(async res => {
        this.collections = []
        console.log(res)
        for(const val of res.getCollectionsList()) {
          this.collections.push({
            title: val.getTranslation(),
            cover: await this.getFileUrl(val.cover),
            introduction: val.getProfile(),
            sources: {},
            last_update: 0,
          })
        }
        // console.log(this.collections)
      }).catch(err => console.log(err))
      this.searched = true
    },
    async getFileUrl(fid) {
      const req = new DownloadRequest()
      req.setFid(fid)
      return this.$client.download(req,{}).then(res => {
        return res.getUrl()
      }).catch(err => {
        console.log(err)
        return ""
      })
    }
  }
}
</script>

<style scoped>

</style>
