<template>
  <a
   class="w-full"
   target="_blank"
   :href="currentProject.url"
  >
    <div class="group gap-6 py-4 items-center h-36 w-full px-4 xl:px-12 xl:gap-12 sm:justify-start">
      <AppIcon
          name="github"
          class="hidden sm:block h-20 w-20 shrink-0 rounded-full fill-[#A4A4A4] object-cover"
      />
      <div>
        <div class="font-bold lg:text-4xl pb-4">
          {{currentProject.title}}
        </div>
        <div class="text-xs md:text-base">
          {{currentProject.subTitle}}
        </div>
      </div>
    </div>
  </a>
</template>


<script>
import AppIcon from "@/components/AppIcon";
export default {
  name: "ProductCode",
  components: {AppIcon},
  data() {
    return {
    }
  },
  props: {
    currentProject: {
      type: Object
    }
  }
}
</script>

