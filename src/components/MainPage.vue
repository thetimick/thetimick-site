<template>
  <div class="h-mobile sm:min-h-screen flex flex-col">
    <div class="absolute h-full w-full opacity-80 bg-main"/>
    <img
      src="../assets/img/main-background.jpg"
      height="1080"
      width="1920"
      class="absolute h-full w-full -z-10 object-cover unselectable"
      alt=""/>

    <div id="circle" ref="circle" class="circle" />

    <header class="sticky top-0 flex sm:px-16 relative justify-center sm:justify-start h-16 sm:h-24 items-center">
      <div class="absolute left-0 h-full w-full bg-main drop-shadow-black opacity-50"></div>
      <div class="absolute left-0 h-full w-full bg-main blur-xl opacity-50"></div>
      <div id="logoAndTitle" class="flex items-center gap-5 z-10">
        <AppIcon name="logo" class="w-10 h-10 sm:w-16 sm:h-16 logo"/>
        <span class="text-2xl sm:text-4xl text-main font-bold unselectable">the_timick</span>
      </div>
    </header>
    <div class="container flex-1 flex justify-center mx-auto">
      <div class="flex items-center justify-center">
        <div class="flex flex-col mt-[60px] sm:mt-0 gap-12">
          <div class="flex flex-col gap-3">
            <div class="flex justify-center gap-3">
              <div class="relative drop-shadow-main rounded-full bg-main opacity-50 ">
                <img
                  class="z-100 object-cover h-[140px] rounded-full w-[140px] sm:w-[200px] sm:h-[200px]"
                  src="../assets/img/developer-photo.jpg"
                  alt=""/>
              </div>
            </div>
            <div class="flex flex-col text-center z-10 gap-3">
              <div class="sm:text-4xl text-2xl text-main font-bold unselectable display: block">
                Andrey Timofeev
              </div>
              <div class="text-main text-lg sm:text-2xl unselectable">
                - mobile dev -
              </div>
            </div>
          </div>
          <div class="flex relative rounded-2xl items-center gap-4 sm:gap-12 p-4 sm:p-5">
            <div class="absolute rounded-xl left-0 h-full w-full bg-main drop-shadow-main opacity-50"></div>
            <div class="absolute rounded-xl left-0 h-full w-full bg-main blur-xl opacity-50"></div>
            <a href="https://www.instagram.com/the_timick" target="_blank">
              <div class="social-circle">
                <AppIcon
                  name="instagram"
                  class="social-icon"
                />
              </div>
            </a>
            <a id="firstIcon" href="https://vk.com/the_timick" target="_blank">
              <div class="social-circle">
                <AppIcon
                  name="vk"
                  class="social-icon"
                />
              </div>
            </a>
            <a href="https://github.com/thetimick" target="_blank">
              <div class="social-circle">
                <AppIcon
                  name="github"
                  class="social-icon"
                />
              </div>
            </a>
            <a href="https://t.me/the_timick" target="_blank">
              <div class="social-circle">
                <AppIcon
                  name="telegram"
                  class="social-icon"
                />
              </div>
            </a>
            <a href="https://soundcloud.com/thetimickrus" target="_blank">
              <div class="social-circle">
                <AppIcon
                  name="soundcloud"
                  class="social-icon"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from "./AppIcon.vue";
import {Circle} from "../circle.js";

export default {
  components: {AppIcon},
  name: "MainPage",
  data() {
    return {
      circle: new Circle()
    }
  },
  methods: {
    configureCircle() {
      this.circleInterval()

      document.addEventListener(`mousemove`, this.mouseMoveEvent)
      document.addEventListener(`mouseover`, this.mouseOverEvent)
      document.addEventListener(`mouseout`, this.mouseOutEvent)
      document.addEventListener('mouseup', this.mouseUpEvent)
      document.addEventListener('mousedown', this.mouseDownEvent)

      document.body.addEventListener("mouseleave", ev => { this.$refs.circle.style.opacity = '0' })
      document.body.addEventListener("mouseenter", ev => { this.$refs.circle.style.opacity = '1' })
    },
    circleInterval() {
      setInterval(_ => {
        this.circle.updatePositionForInterval();

        this.$refs.circle.style.left = `${this.circle.x}px`;
        this.$refs.circle.style.top = `${this.circle.y}px`;
      }, 20)
    },
    checkElements(e) {
      return (
        e.target.classList.contains('social-circle') ||
        e.target.classList.contains('text-main') ||
        e.target.classList.contains('object-cover') ||
        e.target.id === 'logoAndTitle' ||
        e.target.tagName === 'path' ||
        e.target.tagName === 'svg'
      )
    },
    mouseMoveEvent(e) {
      this.circle.updatePositionForEvent(e.pageX, e.pageY)
    },
    mouseOverEvent(e) {
      if (this.checkElements(e)) {
        this.circle.setType(Circle.CircleType.dot, this.$refs.circle)
      }
    },
    mouseOutEvent() {
      this.circle.setType(Circle.CircleType.normal, this.$refs.circle)
    },
    mouseDownEvent() {
      if (this.circle.circleType === Circle.CircleType.dot) {
        return
      }
      this.circle.setType(Circle.CircleType.dot, this.$refs.circle)
    },
    mouseUpEvent(e) {
      if (this.circle.circleType === Circle.CircleType.normal || this.checkElements(e)) {
        return
      }
      this.circle.setType(Circle.CircleType.normal, this.$refs.circle)
    }
  },
  mounted() {
    if (!navigator.userAgent.includes('mobile')) {
      this.configureCircle()
    }
  }
}
</script>
