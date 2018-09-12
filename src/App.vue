<template>
  <div id="app" ref="app">
    <router-view @addCart="addCart"></router-view>
    <tarbar></tarbar>
  </div>
</template>

<script>
import tarbar from './components/tarbar.vue'
export default {
  name: 'App',
  data() {
    return {
      /*重复点击时存储缩略图的数组*/
      thumbs: [],
      //----------
    }
  },
  components: {
    'tarbar': tarbar
  },
  methods: {
    addCart(target) {
      /*获取图片的URL*/
      let imgPath = target.getAttribute('src')
      console.log('imgPath', imgPath)
      /*获取原图片的位置*/
      let top = target.getBoundingClientRect().top
      let left = target.getBoundingClientRect().left
      // console.log('top', top)
      // console.log('left', left)

      /*创建一个缩略图标签*/
      let copyThumb = document.createElement('img')

      /*为缩略图添加图片路径*/
      copyThumb.setAttribute('src', imgPath)
      copyThumb.setAttribute('style', `position: fixed;left: ${left}px;top:${top}px;width:0px;height:0px;z-index:1000`)
      copyThumb.setAttribute('class', 'copyThumb')

      /*获取购物车图标的位置*/
      let cartIcon = document.getElementById('cartNum')
      let iconTop = cartIcon.getBoundingClientRect().top
      let iconLeft = cartIcon.getBoundingClientRect().left

      /*缩略图下落动画样式*/
     let animation = `
          /*下落动画*/
          @-webkit-keyframes drop {
            0% {
              width: 8.46rem;
              height: 8.46rem;
            }
            100% {
              width: 1.15rem;
              height: 1.15rem;
              left: ${iconLeft}px;
              top: ${iconTop}px;
              border-radius: 50%;
              -webkit-transform: rotate(180deg);
              -moz-transform: rotate(180deg);
              -o-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
            }
          }
          @-moz-keyframes drop {
            0% {
              width: 8.46rem;
              height: 8.46rem;
            }
            100% {
              width: 1.15rem;
              height: 1.15rem;
              left: ${iconLeft}px;
              top: ${iconTop}px;
              border-radius: 50%;
              -webkit-transform: rotate(180deg);
              -moz-transform: rotate(180deg);
              -o-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
            }
          }
          @-o-keyframes drop {
            0% {
              width: 8.46rem;
              height: 8.46rem;
            }
            100% {
              width: 1.15rem;
              height: 1.15rem;
              left: ${iconLeft}px;
              top: ${iconTop}px;
              border-radius: 50%;
              -webkit-transform: rotate(180deg);
              -moz-transform: rotate(180deg);
              -o-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
            }
          }
          @-ms-keyframes drop {
            0% {
              width: 8.46rem;
              height: 8.46rem;
            }
            100% {
              width: 1.15rem;
              height: 1.15rem;
              left: ${iconLeft}px;
              top: ${iconTop}px;
              border-radius: 50%;
              -webkit-transform: rotate(180deg);
              -moz-transform: rotate(180deg);
              -o-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
            }
          }
          /*新建的缩略图节点*/
          .copyThumb {
            -webkit-animation: drop .7s ease-in-out;
            -moz-animation: drop .7s ease-in-out;
            -ms-animation: drop .7s ease-in-out;
            -o-animation: drop .7s ease-in-out;
          }
        `
        /*将下落动画插入根部*/
        document.getElementById('style').innerHTML += animation
         /*获取app的dom节点*/
        let container = this.$refs.app

        /*重复点击时会生成多张缩略图，将其存入thumbs数组中*/
        this.thumbs = document.getElementsByClassName('copyThumb')
        // console.log('缩略图数组长度',this.thumbs.length)

        /*将新建的多余的缩略图从app的dom中移除，避免快速重复点击时重复动画*/
        if (this.thumbs.length > 0) {
          container.removeChild(this.thumbs[0])
          // console.log('移除成功')
        }

        /*将缩略图挂载在app上*/
        container.appendChild(copyThumb)

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
