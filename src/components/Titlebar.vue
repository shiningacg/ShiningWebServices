<template>
    <v-alert
        dense
        border="left"
        colored-border
        color="blue accent-1"
        class="grey lighten-4 ma-0"
    >
        {{title}}
    </v-alert>
</template>

<script>
    export default {
        name: "titleBar",
        prop: {
            input: String
        },
        created(){
            if (this.input == null && process.env.NODE_ENV == 'development') {
                this.title = "测试"
                return
            }
            this.title = this.input
        },
        data(){
            return {
                title: "最新更新"
            }
        }
    }
</script>