<template>
  <div class="br-gray-200 w-full min-h-screen relative bg-black"> <!-- Вся ширина-->
    <img src="./assets/img/main-background.jpg" class="h-screen max-w-none absolute opacity-30"/> <!--IMG-->
    <div class="container mx-auto max-w-screen-xl px-4"> <!--Ширина контента-->

      <div id="main" class="section pt-4 text-white "> <!--секция-->
        <AppIcon
            name="menu"
            class="w-8 h-8 cursor-pointer"
            @click="headerDrop = !headerDrop"
        />
        <header class="uppercase flex text-lg font-bold gap-2 " :class="{'justify-around':!headerDrop}">
          <div
            v-if="headerDrop"
            class="flex flex-col bg-white rounded-xl  absolute"
            :class="{'dropdown-body' : headerDrop}"
          >
            <a href="#main" class="active:text-red-400">Главная</a>
            <a href="#about" class="active:text-red-400">Обо мне</a>
            <a href="#project" class="active:text-red-400">Мои Проекты</a>
            <a href="#contacts" class="active:text-red-400">Контакты</a>
          </div>
        </header>
        <div class="flex justify-center items-center h-full">
          <div class="flex flex-col gap-4 items-center">
            <img src="./assets/img/main-avatar.jpg" class="h-40 w-40 rounded-full border-4" >
            <div class="text-3xl uppercase font-bold text-red-600 whitespace-nowrap">Андрей Тимофеев</div>
            <div class="text-lg uppercase font-semibold">i am a full stack developer</div>
            <div class="button is-transparent text-white uppercase">Learn More</div>
          </div>
        </div>
      </div>

      <div id="about" class="section border border-red-400 text-white">  <!--секция-->
        <div>ОБО МНЕ</div>
      </div>

      <div id="project" class="section border border-red-400 text-white">  <!--секция-->
        <div>Мои Проекты</div>
      </div>

      <div id="contacts" class="section border border-red-400 text-white">  <!--секция-->
        <div>Контакты</div>
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
    headerDrop: false,
    }
  }
}
</script>

<style>
</style>
