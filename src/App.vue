<template>
  <div class="br-gray-200 w-full min-h-screen relative bg-zinc-800 "> <!-- Вся ширина-->
    <div class="absolute bg-black z-20 h-screen w-full opacity-50"></div> <!--Закрашивание-->
    <header
      class="header-mobile flex items-center justify-center gap-2 w-full z-50 fixed h-20">
    <!--  :class="{'justify-around':headerDrop}"> -->
      <AppIcon
        name="menu"
        class="w-10 h-10 cursor-pointer absolute left-0 ml-4"
        @click="headerDrop = !headerDrop"
      />
      <div class="">TheTimickRus</div>
      <div
        v-if="headerDrop"
        class="-translate-x-2/3 translate-y-3/4 left-[100px]"
        :class="{'dropdown-body' : headerDrop}"
      >
        <a href="#main" class="active:text-red-400">Главная</a>
        <a href="#about" class="active:text-red-400">Проекты</a>
        <a href="#project" class="active:text-red-400">Placeholder</a>
        <a href="#contacts" class="active:text-red-400">Placeholder</a>
      </div>
    </header>
    <div class="absolute h-screen w-full  opacity-30  "> <!--IMG-->
      <img
        src="./assets/img/main-background.jpg"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="container mx-auto max-w-screen-xl px-4"> <!--Ширина контента-->

      <div id="main" class="section h-screen pt-4 z-30" > <!--секция тут менять прозначность -->
        <div class="flex justify-center items-center h-full">
          <div class="flex flex-col gap-6 items-center">
            <img src="./assets/img/main-avatar.jpg" class="h-40 w-40 rounded-full object-cover" >
            <div class="text-4xl font-bold  whitespace-nowrap">Андрей Тимофеев</div>
            <div class="text-2xl ">Более чем программист</div>
            <div class="flex items-center py-5 px-3 bg-transparent gap-4">
              <AppIcon
                  name="instagram"
                  class="social-icon"
              />
              <AppIcon
                  name="vk"
                  class="social-icon"
              />
              <AppIcon
                name="telegram"
                class="social-icon"
              />
              <AppIcon
                  name="github"
                  class="social-icon"
              />
              <AppIcon
                  name="soundcloud"
                  class="social-icon"
              />
            </div> <!-- SocialNavigation -->
            <div class="button text-2xl w-80 h-12">Обо мне</div>
          </div>
        </div>
      </div>

      <div id="about" class="section mt-8 flex flex-col md:flex-row">  <!--секция-->
        <div class="flex p-6 items-center text-center flex-col gap-4 md:gap-16 flex-initial md:border-r md:p-14 ">
          <div class="text-2xl font-bold">Мои проекты</div>
          <div class="flex gap-10 md:flex-col">
            <div class="text-xl">
              <span
                class="cursor-pointer"
                :class="{'border-b':projectCode}"
                @click="projectCode=!projectCode"
              >
              Программирование
            </span>
            </div>
            <div class="text-xl">
              <span
                class="cursor-pointer"
                :class="{'border-b':projectMusic}"
                @click="projectMusic=!projectMusic"
              >
                Битмейкинг
              </span>
            </div>
          </div>
        </div>
        <div v-if="projectCode" class="flex-initial py-14 flex flex-col gap-4 px-10">
          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>
          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>
          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>
          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>
        </div>
        <div v-if="projectMusic" class="flex-initial text-center py-14 flex flex-col gap-4 px-10">
          <div class="text-lg p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>

            <img src="./assets/img/backend.jpg" width="600" class="object-cover h-auto">
            <img src="./assets/img/backedn2.jpg" width="600"  class="object-cover h-auto ">
        </div>
      </div>

      <div id="project" class="section mt-8">  <!--секция-->
        <div>Placeholder</div>
      </div>

      <div id="contacts" class="section mt-8">  <!--секция-->
        <div>Placeholder</div>
      </div>

    </div>
  </div>
</template>

<script>

import AppIcon from "@/components/AppIcon";
export default {
  name: 'App',
  components: {AppIcon},
  data() {
    return {
    projectCode: true,
    projectMusic: false,
    headerDrop: false,
    }
  }
}
</script>

