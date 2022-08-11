<template>
  <div class="justify-center group gap-6 w-full md:text-start md:text-left items-center h-28  px-4 xl:px-12 xl:gap-12">
    <audio id="myaudio" controls  class="block">
      <source  src="../assets/media/test.mp3" type="audio/mpeg">
    </audio>
  </div>
  <div id="player"></div>
</template>


<script>
export default {
  name: "ProductMusic",
  components: {},
  data() {
    return {
    }
  },
  methods: {

  },
  created() {

  }

}


</script>


<style scoped>

</style>