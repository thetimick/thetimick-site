<template>
  <div class="w-full relative full-background min-h-screen"> <!-- Вся ширина-->
    <div class="absolute bg-black z-20 h-screen w-full opacity-50"></div> <!--Закрашивание-->
    <AppIcon class="absolute"/>
    <div class="z-40 blur"></div>
    <header
      class="justify-center lg:justify-end md:px-16 gap-2 px-1 w-full z-50">

      <AppIcon
        name="logo"
        class="w-14 h-14 cursor-pointer absolute logo left-0 md:ml-16 ml-2"
        @click="headerDrop = !headerDrop"
      />
      <div class="m-auto font-bold ml-16  md:ml-0 md:absolute lg:left-0 lg:ml-32 text-4xl">TheTimickRus</div>
      <a href="#main" class="hover:border-b  hidden lg:block">Главная</a>
      <a href="#about" class="hover:border-b hidden lg:block">Проекты</a>
      <a href="#projects" class="hover:border-b hidden lg:block">Placeholder</a>
      <a href="#contacts" class="hover:border-b hidden lg:block">Placeholder</a>
      <div
        v-if="headerDrop"
        class="-translate-x-2/3 translate-y-3/4 left-[100px]"
        :class="{'dropdown-body' : headerDrop}"
      >
        <a href="#main" class="hover:text-white">Главная</a>
        <a href="#about" class="hover:text-white">Проекты</a>
        <a href="#projects" class="hover:text-white">Placeholder</a>
        <a href="#contacts" class="hover:text-white">Placeholder</a>
      </div>
    </header>
    <div class="absolute h-screen w-full opacity-30"> <!--IMG-->
      <img
        src="./assets/img/main-background.jpg"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="container mx-auto max-w-screen-2xl px-4 lg:px-8"> <!--Ширина контента-->

      <div id="main" class="section h-screen pt-4 z-30" > <!--секция тут менять прозначность -->
        <div class="flex justify-center items-center h-full">
          <div class="flex flex-col gap-6 items-center">
            <img src="./assets/img/main-avatar.jpg" class="h-40 w-40 rounded-full object-cover" >
            <div class="text-4xl font-bold  whitespace-nowrap">Андрей Тимофеев</div>
            <div class="text-2xl ">Более чем программист</div>
            <div class="relative group py-5 px-7 bg-transparent gap-4 md:gap-12"> <!-- SocialNavigation -->
              <div class="-z-20 blur"></div>
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
            </div>
            <div class="justify-center relative group dark cursor-pointer text-2xl w-80 h-12">
              Обо мне
              <div class="-z-20 blur"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" class="px-6 mt-8 gap-12 flex flex-col md:flex-row section">  <!--секция-->
        <div class="flex p-6 items-center text-center flex-col gap-4 md:gap-16 flex-initial border-b md:border-b-0  md:border-r lg:p-14 ">
          <div class="font-bold whitespace-nowrap text-xl md:text-4xl">Мои проекты</div>
          <div class="flex  gap-2 w-full justify-around md:gap-10 md:flex-col">
            <div
              class="group  flex-1 justify-center cursor-pointer py-2 px-2 lg:px-12"
              @click="projectSwitchCode"
            >
              <span
                class="text-base font-semibold md:text-lg"
                :class="{'border-b':projectCode}"
              >
              Программирование
              </span>
            </div>
            <div
              class="group font-semibold flex-1 justify-center cursor-pointer py-4 px-2 lg:px-12"
              @click="projectSwitchMusic"
            >
              <span
                class="text-base md:text-lg"
                :class="{'border-b':projectMusic}"
                @click="projectSwitchMusic"
              >
                Битмейкинг
              </span>
            </div>
          </div>
        </div>
        <div v-if="projectMusic" class="flex-initial py-14 flex flex-col gap-4 px-10">
          <ProductMusic/>
          <ProductMusic/>
          <ProductMusic/>
        </div>
        <div v-if="projectCode" class="flex flex-col items-center w-full h-full gap-4 px-2 xl:px-12 md:py-14">
          <ProductCode/>
          <ProductCode/>
          <ProductCode/>
        </div>
      </div>

      <div id="about" class="section px-6 mt-8 flex flex-col">  <!--секция-->
        <div class="flex flex-col">
          <div class="">
            <div class="text-3xl lg:text-5xl">Кто я?</div>
            <div class=" indent-3 text-sm lg:text-2xl">
              Меня, как Вы уже поняли по первой странице, зовут Андрей Тимофеев. Я родился и вырос в небольшом городке Тверской области под названием Удомля. Там же я закончил школу и перебрался в Тверь, где закончил ТвГУ на факультете ПМиК.
            </div>
            <div class="text-sm lg:text-2xl">
              Несмотря на все трудности учебы, это время я считаю лучшим в своей жизни. За время обучения я вырос (и не только физически), нашел много крутых ребят и свою любовь.
            </div>
            <div class="text-sm lg:text-2xl">
              За время учебы я успел поработать в Колл-Центре, на складе Озон’а, сервисном центре. Отдельное упоминание стоит отдать сервису Delivery Club, в который я устроился работать курьером и успешно делал это (работал) около 1.5 лет.
            </div>
            <div class="text-sm lg:text-2xl">
              Когда я закончил университет, то устроился работать уже по специальности: разработчиком IOS приложений в компанию BeApps. Отдельное спасибо Вам, ребята, что взяли меня совсем без опыта, научили многому и ждете (надеюсь) уже 10 месяцев. Надеюсь, я смогу пригодиться, ахахах.
            </div>
          </div>
          <div class="h-64 md:h-[320px] flex-auto shrink-0 w-[460px]  object-cover" >
            <img src="./assets/img/backend.jpg" class="object-cover h-full w-full ">
          </div>
        </div>
      </div>

      <div id="work" class="section mt-8 flex flex-col md:flex-row">  <!--секция-->
        <div class="flex p-6 items-center text-center flex-col gap-4 md:gap-16 flex-initial md:border-r md:p-14 ">
          <div class="font-bold text-lg md:text-2xl">Мои проекты</div>
          <div class="flex gap-10 text-center md:flex-col">
              <span
                  class="text-base cursor-pointer md:text-lg"
                  :class="{'border-b':projectCode}"
                  @click="projectSwitchCode"
              >
              Программирование
              </span>
            <span
                class="text-base  cursor-pointer md:text-lg"
                :class="{'border-b':projectMusic}"
                @click="projectSwitchMusic"
            >
                Битмейкинг
              </span>
          </div>
        </div>
        <div v-if="projectMusic" class="flex-initial py-14 flex flex-col gap-4 px-10">
          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>
          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>
          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>
          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>
        </div>
        <div v-if="projectCode" class="flex flex-col items-center justify-around text-center w-full h-full gap-4 px-10 md:justify-between  md:py-14">
          <div class="text-lg p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>
          <div class="h-64 md:h-[320px] shrink-0 w-full object-cover" >
            <img src="./assets/img/backend.jpg" class="object-cover h-full w-full ">
          </div>
          <div class="text-lg p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>
          <div class="h-64 md:h-[320px]  shrink-0 w-full object-cover">
            <img src="./assets/img/backedn2.jpg" class="object-cover h-full w-full  ">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ProductMusic from "@/components/ProductMusic";
import ProductCode from "@/components/ProductCode";
import AppIcon from "@/components/AppIcon";
export default {
  name: 'App',
  components: {AppIcon,ProductCode,ProductMusic},
  data() {
    return {
    projectCode: true,
    projectMusic: false,
    headerDrop: false,
    }
  },
  methods: {
    projectSwitchCode() {
      if (this.projectCode === false) {
        this.projectCode = !this.projectCode
        this.projectMusic = !this.projectMusic
      }
    },
    projectSwitchMusic() {
      if (this.projectMusic === false) {
        this.projectMusic = !this.projectMusic
        this.projectCode = !this.projectCode
      }
    }
  }
}
</script>

