<template>
  <v-container>
    <uploader v-if="true" :multi="true"/>
    <pic-uploader v-if="false"/>
  </v-container>
</template>

<script>
  import Uploader from "../components/Uploader";
  import PicUploader from "@/components/PicUploader";
  export default {
    name: "test",
    components: {
      Uploader,
      PicUploader
    }
  }
</script>