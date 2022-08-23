<template>
  <div class="black-background"> <!-- Вся ширина-->
    <a href="#main">
      <AppIcon
        id="scrollUpButton"
        class="hidden fixed right-0 bottom-0 z-50 p-1 dark rounded-xl mr-3 mb-3 border h-10 w-10"
        name="upArrow"
      />
    </a>
    <div class="absolute bg-black z-20 h-screen w-full opacity-30"></div> <!--Закрашивание-->
    <div class="z-10 blur"></div>
    <header
      class="max-w-screen-2xl md:px-16 w-full gap-12 z-50">
      <div class="flex items-center gap-4 m-auto font-bold md:ml-0 md:absolute lg:left-0 lg:ml-32 text-4xl">
        <AppIcon
          name="logo"
          class="w-14 h-14 cursor-pointer logo"
        />
        The Timick
      </div>
    </header>
    <div class="absolute h-screen w-full opacity-30"> <!--IMG-->
      <img
        src="./assets/img/main-background.jpg"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="container mx-auto max-w-screen-2xl px-4 lg:px-8"> <!--Ширина контента-->
      <div id="main" class="section z-30" > <!--секция тут менять прозначность -->
        <div class="flex justify-center items-center h-full">
          <div class="flex flex-col gap-6 items-center">
            <img src="./assets/img/main-avatar.jpg" class="h-40 w-40 lg:w-52 lg:h-52 rounded-full object-cover" >
            <div class="text-4xl font-bold whitespace-nowrap">Андрей Тимофеев</div>
            <div class="text-2xl">Более чем программист</div>
            <div class="group py-3 px-1 md:px-7 bg-transparent gap-4 md:gap-12"> <!-- SocialNavigation -->
              <div class="-z-10 blur"></div>
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
            <a href="#about">
            <div class="justify-center relative group dark cursor-pointer text-2xl w-80 h-12">
              Обо мне
              <div class="-z-20 blur"></div>
            </div>
            </a>
          </div>
        </div>
      </div>

      <div id="projects" class="px-6 mt-8 gap-12 flex flex-col md:flex-row section">  <!--секция-->
        <div class="flex p-6 text-center flex-col gap-4 md:gap-16 border-b md:border-b-0 md:border-r lg:p-14">
          <div class="font-bold whitespace-nowrap text-xl md:text-4xl">Мои проекты</div>
          <div class="flex gap-2 w-full justify-around md:gap-10 md:flex-col">
            <div
              class="group font-semibold flex-1 justify-center cursor-pointer py-4 px-2 lg:px-12"
              @click="projectSwitchCode"
            >
              <span
                class="text-base font-semibold md:text-xl"
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
                class="text-base font-semibold md:text-xl"
                :class="{'border-b':projectMusic}"
                @click="projectSwitchMusic"
              >
                Битмейкинг
              </span>
            </div>
          </div>
        </div>
        <div
          v-show="projectMusic"
          class="flex flex-col w-full gap-4 px-2 xl:px-12 md:py-14"
        >
          <ProductMusic
            :fetchBeats="this.fetchBeats"
            :id="0"
          />
          <ProductMusic
            :fetchBeats="this.fetchBeats"
            :id="1"
          />
          <ProductMusic
            :fetchBeats="this.fetchBeats"
            :id="2"
          />
        </div>
        <div
          v-show="projectCode"
          class="flex flex-col items-center w-full h-full gap-4 px-2 xl:px-12 md:py-14"
        >
          <ProductCode
            v-for="project in fetchProjects"
            :key="project.id"
            :currentProject="project"
          />
        </div>
      </div>

      <div id="about" class="section px-6 mt-8 flex flex-col">  <!--секция-->
        <div class="flex flex-col items-center lg:flex-row lg:gap-8">
            <div class="">
              <div class="text-3xl mb-6 lg:text-5xl">Кто я?</div>
              <div class="indent-3 text-sm sm:text-base lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Amet, assumenda commodi culpa deserunt dicta dolorem est
                facere illo itaque laboriosam laudantium natus non numquam
                officiis quaerat ratione recusandae similique tenetur, veniam voluptates.
                Distinctio eaque eius, itaque laborum magni perferendis qui. Ad aperiam architecto
                beatae consequuntur deserunt dicta dolores ducimus enim error eum fugiat hic in iste,
                itaque iure laborum magnam minus nesciunt, officia rem repellat, rerum sed? Accusamus
                accusantium commodi culpa ea earum incidunt ipsa, ipsum laboriosam laborum modi totam?
              </div>
            </div>
          <CarouselComponent
            :fetchAbout="this.fetchAbout"
            :id="0"
            class="my-12 lg:my-0"
          />
        </div>
        <div class="flex flex-col items-center lg:flex-row-reverse lg:gap-8">
          <div class="">
            <div class="text-3xl mb-6 lg:text-5xl">Увлечения</div>
            <div class="indent-3 text-sm sm:text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Amet, assumenda commodi culpa deserunt dicta dolorem est
              facere illo itaque laboriosam laudantium natus non numquam
              officiis quaerat ratione recusandae similique tenetur, veniam voluptates.
              Distinctio eaque eius, itaque laborum magni perferendis qui. Ad aperiam architecto
              beatae consequuntur deserunt dicta dolores ducimus enim error eum fugiat hic in iste,
              itaque iure laborum magnam minus nesciunt, officia rem repellat, rerum sed? Accusamus
              accusantium commodi culpa ea earum incidunt ipsa, ipsum laboriosam laborum modi totam?
            </div>
          </div>
          <CarouselComponent
            :fetchAbout="this.fetchAbout"
            :id="1"
            class="my-12 lg:my-0"/>
        </div>
      </div>
<!--      <div id="work" class="section mt-8 flex flex-col md:flex-row">  &lt;!&ndash;секция&ndash;&gt;-->
<!--        <div class="flex p-6 items-center text-center flex-col gap-4 md:gap-16 flex-initial md:border-r md:p-14 ">-->
<!--          <div class="font-bold text-lg md:text-2xl">Мои проекты</div>-->
<!--          <div class="flex gap-10 text-center md:flex-col">-->
<!--              <span-->
<!--                  class="text-base cursor-pointer md:text-lg"-->
<!--                  :class="{'border-b':projectCode}"-->
<!--                  @click="projectSwitchCode"-->
<!--              >-->
<!--              Программирование-->
<!--              </span>-->
<!--            <span-->
<!--                class="text-base  cursor-pointer md:text-lg"-->
<!--                :class="{'border-b':projectMusic}"-->
<!--                @click="projectSwitchMusic"-->
<!--            >-->
<!--                Битмейкинг-->
<!--              </span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div v-if="projectMusic" class="flex-initial py-14 flex flex-col gap-4 px-10">-->
<!--          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>-->
<!--          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>-->
<!--          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>-->
<!--          <div class="text-lg bg-gray-600 p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>-->
<!--        </div>-->
<!--        <div v-if="projectCode" class="flex flex-col items-center justify-around text-center w-full h-full gap-4 px-10 md:justify-between  md:py-14">-->
<!--          <div class="text-lg p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>-->
<!--          <div class="h-64 md:h-[320px] shrink-0 w-full object-cover" >-->
<!--            <img src="https://firebasestorage.googleapis.com/v0/b/thetimickrus-back.appspot.com/o/photos%2F7.webp?alt=media&token=2335ffa7-99e1-4eee-9dd1-adfb2eebde29" class="object-cover h-full w-full ">-->
<!--          </div>-->
<!--          <div class="text-lg p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minima!</div>-->
<!--          <div class="h-64 md:h-[320px]  shrink-0 w-full object-cover">-->
<!--            <img src="./assets/img/backedn2.jpg" class="object-cover h-full w-full  ">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <footer class="px-8 py-2 w-full mt-24">
      ©Andrey Timofeev
    </footer>
  </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css';
import ProductMusic from "@/components/ProductMusic";
import ProductCode from "@/components/ProductCode";
import AppIcon from "@/components/AppIcon";
import CarouselComponent from "@/components/CarouselComponent";
export default {
  name: 'App',
  components: {CarouselComponent, AppIcon,ProductCode,ProductMusic},
  data() {
    return {
      projectCode: false,
      projectMusic: true,
      fetchProjects:[],
      fetchBeats:'',
      fetchAbout:'',
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
  },
  async mounted () {
    let fetchProjects = await fetch(`http://thetimickrus-001-site1.atempurl.com/TheTimickRus/FetchProjects`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
    )
    this.fetchProjects = await fetchProjects.json()
    window.addEventListener('scroll',function () {
      if (scrollY > 400 ) {
        document.getElementById('scrollUpButton').classList.remove('hidden')
      }
      else {
        document.getElementById('scrollUpButton').classList.add('hidden')
      }
    })
    let fetchBeats = await fetch(`http://thetimickrus-001-site1.atempurl.com/TheTimickRus/FetchBeats`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
    )
    this.fetchBeats = await fetchBeats.json()
    let fetchAbout = await fetch(`http://thetimickrus-001-site1.atempurl.com/TheTimickRus/FetchAbout`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
    )
    this.fetchAbout = await fetchAbout.json()
  },
}
</script>

<style> </style>