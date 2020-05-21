<template>
  <v-container fluid class="pa-0">
    <v-parallax src="/bg.jpg" height="600">
      <v-sheet color="transparent" dark class="d-flex justify-center">
        <div class="display-1 font-weight-bold" style="max-width: 700px">
          <span>想说句骚话但不知道说什么好。。</span>
          <div class="pt-6">
            <v-text-field
                filled
                rounded
                background-color="white"
                v-model="content"
                color="black"
                light
                style="min-height: 96px"
                class="headline"
                append-icon="mdi-magnify"
                @click:append="search"
            ></v-text-field>
          </div>
        </div>
      </v-sheet>
    </v-parallax>
  </v-container>
</template>

<script>
  export default {
    name: "Head",
    data() {
      return {
        content: ""
      }
    },
    methods: {
      search() {
        console.log(this.content)
      }
    }
  }
</script>