<template>
  <v-container>
    <uploader v-if="false"/>
    <pic-uploader/>
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