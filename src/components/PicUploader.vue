<template>
  <v-card width="800px" height="400px">
    <v-card-title>上传图片</v-card-title>
    <v-divider></v-divider>
    <v-container class="d-flex justify-center">
      <v-card flat width="600px">
        <div class="grey--text body-2">当前尺寸：{{0}} x {{0}}，建议尺寸460 x 300以上</div>
        <img ref="cropper" src="/cover.png" style="max-height: 200px"></img>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
  import Cropper from "cropperjs"

  export default {
    name: "PicUploader.vue",
    mounted() {
      const crop = this.cropEvent
      this.cropper = new Cropper(this.$refs.cropper, {
        viewMode: 2,  // 0:无限制; 1:将裁剪框限制为不超过画布的大小, 2:限制最小画布尺寸以适应容器,如果画布和容器的比例不同，则最小画布将在其中一个维度中被额外的空格包围。, 3:限制最小画布尺寸以填充容器。如果画布和容器的比例不同，则容器将无法将整个画布适合其中一个尺寸。
        dragMode: 'move', // 'crop':创建一个新的裁剪框    'move':移动画布  'none':do nothing
        aspectRatio: 16 / 9,  // 设置裁剪框的宽高比。默认情况下，裁剪框是空闲比率。
        data: {}, // 如果您已经存储了以前的裁剪数据，将在构建时自动传递给setData方法。
        preview: '', //添加额外的元素（容器）进行预览。
        autoCropArea: 1,   //介于0和1之间的数字。定义自动裁剪区域大小（百分比）， 1： 完全按照最大宽度后最大高度设置剪切框
        checkCrossOrigin: true,
        movable: true,  //启用移动图像。
        rotatable: true,  //启用旋转图像。
        scalable: true,  //启用缩放图像。
        zoomable: true,  //启用缩放图像。
        zoomOnTouch: true,  //启用通过拖动触摸缩放图像。
        zoomOnWheel: true,  //启用通过滚动鼠标放大图像。。
        cropBoxMovable: true,  // 启用通过拖动来移动裁剪框。
        cropBoxResizable: true,  // 启用通过拖动调整裁剪框的大小。。
        toggleDragModeOnDblclick: false,  //在裁剪器上点击两次时，启用“切割”和“移动”之间切换拖动模式。
        minContainerWidth: 200,  //容器的最小宽度。。
        minContainerHeight: 100,  //容器的最小高度。。。
        ready: function () {
          this.cropper && this.cropper.crop();
          // 可以根据用户参入的比例， 进行更改剪切框比例
          if (this.cropObj) {
            this.cropper && this.cropper.setAspectRatio((this.cropObj.width / this.cropObj.height))
          }
        }, crop
      })
    },
    data() {
      return {
        cropper: null,
        imgInfo: {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          rotate: 0,
          scaleX: 0,
          scaleY: 0
        }
      }
    },
    methods: {
      cropEvent(event) {
        this.imgInfo.x = event.detail.x
        this.imgInfo.y = event.detail.y
        this.imgInfo.width = event.detail.width
        this.imgInfo.height = event.detail.height
        this.imgInfo.rotate = event.detail.rotate
        this.imgInfo.scaleX = event.detail.scaleX
        this.imgInfo.scaleY = event.detail.scaleY
      }
    }
  }
</script>

<style scoped>

</style>