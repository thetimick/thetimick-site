<template>
<div>
  <carousel
    class="lg:max-w-[500px]"
    :items-to-show="1"
  >
    <slide v-for="(image,index) in images" :key="image">
      <div class="flex flex-col items-center object-cover h-full w-full">
        <img
          alt="../assets/img/10.jpg"
          :src="image"
          class=" rounded-xl object-cover h-full max-h-[400px] md:h-[400px] w-full"
        >
        <div class="relative text-[#A4A4A4] w-14 lg:w-28 bottom-8 lg:bottom-12 dark rounded-xl">
          {{index + 1}} / {{images.length}}
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation class="h-10 rounded-xl w-6 lg:h-20 lg:w-11 dark mx-4 lg:mx-8"/>
    </template>
  </carousel>
</div>

</template>

<script>
import {Carousel, Navigation, Slide} from "vue3-carousel";

export default {
  name: "CarouselComponent",
  components: {Carousel, Slide, Navigation},
  data() {
    return {
      images: []
    }
  },
  props: {
    fetchAbout: {
      Array
    },
    id: {
      Number
    }
  },
  watch: {
    fetchAbout() {
      this.images = this.fetchAbout.find(item => item.id === this.id).photos
    }
  }
}
</script>
