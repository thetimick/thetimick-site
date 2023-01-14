<template >
  <div class="min-h-screen h-1 ">
    <div class="absolute h-full w-full opacity-80 bg-main"></div>
    <img
        src="../assets/img/main-background.jpg"
        height="1080"
        width="1920"
        class="absolute h-full w-full -z-10  object-cover"
    />
    <header class="flex sm:px-16 relative justify-center sm:justify-start h-16 sm:h-24 items-center">
      <div class="absolute left-0 h-full w-full bg-main drop-shadow-black opacity-50"></div>
      <div class="absolute left-0 h-full w-full bg-main blur-xl opacity-50"></div>
      <div class="flex items-center gap-5 z-10">
        <AppIcon name="logo" class="w-10 h-10 sm:w-16 sm:h-16 logo"/>
        <span class="text-2xl sm:text-4xl text-main font-bold">TheTimickRus</span>
      </div>
    </header>
    <div class="container h-full mx-auto">
      <div class="flex items-center h-full justify-center">
        <div class="flex flex-col mb-16 gap-12">
          <div class="flex flex-col gap-3">
            <div class="flex justify-center gap-3">
              <div class="relative drop-shadow-main rounded-full bg-main opacity-50 ">
                <img
                    class="z-100 object-cover h-[140px] rounded-full w-[140px] sm:w-[200px] sm:h-[200px]"
                    src="../assets/img/developer-photo.jpg"
                />
              </div>
            </div>
            <div class="flex flex-col text-center z-10 gap-3">
              <div class="sm:text-4xl text-2xl text-main font-bold">
                Андрей Тимофеев
              </div>
              <div class="text-main text-lg sm:text-2xl ">
                /* почти программист */
              </div>
            </div>
          </div>
          <div class="flex relative rounded-2xl items-center gap-4 sm:gap-12 p-4 sm:p-5">
            <div class="absolute rounded-xl left-0 h-full w-full bg-main drop-shadow-main opacity-50"></div>
            <div class="absolute rounded-xl left-0 h-full w-full bg-main blur-xl opacity-50"></div>
            <a href="https://www.instagram.com/thetimickrus/" target="_blank">
              <div class="social-circle">
                <AppIcon
                    name="instagram"
                    class="social-icon"
                />
              </div>
            </a>
            <a href="https://vk.com/thetimickrus" target="_blank">
              <div class="social-circle">
                <AppIcon
                    name="vk"
                    class="social-icon"
                />
              </div>
            </a>
            <a href="https://github.com/TheTimickRus" target="_blank">
              <div class="social-circle">
                <AppIcon
                    name="github"
                    class="social-icon"
                />
              </div>
            </a>
            <a href="https://t.me/TheTimickRus" target="_blank">
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

export default {
  components: {AppIcon},
  name: "MainPage"
}
</script>
