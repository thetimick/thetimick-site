<template>
  <div class="h-36 text-sm lg:text-xl w-full group gap-6 md:text-start md:text-left items-center px-4 xl:px-12 xl:gap-12">
    <audio
      :src="this.currentBeat.url"
      ref="audio"
      id="myaudio"
      class="bg-blue-400 w-32 h-12">
    </audio>
    <div class="w-full flex flex-col gap-4">
      <div class="flex gap-4">
        <AppIcon
          name="play"
          @click="play"
          v-if="ShowPlay"
          class="social-icon shadow-2xl"
        />
        <AppIcon
          name="pause"
          @click="pause"
          v-if="ShowPause"
          class="social-icon shadow-2xl"
        />
        <div class="">
          <div>{{this.currentBeat.title}}</div>
          <div class="text-sm">{{this.currentBeat.artist}}</div>
        </div>
      </div>
      <div
        ref="audioLength"
        class="w-full h-1 bg-[#A4A4A4]"
      >
        <div
          ref="audioTime"
          class="audioTime h-1 bg-white"
        >
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import AppIcon from "@/components/AppIcon";
export default {
  name: "ProductMusic",
  components: {AppIcon},
  data() {
    return {
      currentBeat:'',
      TrackTime:'',
      ShowPause: false,
      ShowPlay: true,
    }
  },
  methods: {
    play () {

      this.$refs.audio.play()
      this.ShowPause = true
      this.ShowPlay = false
    },
    pause() {
      this.$refs.audio.pause()
      this.ShowPlay = true
      this.ShowPause = false
    }
  },
  props: {
    fetchBeats: {
      Array
    },
    id: {
      Number
    }
  },
  mounted() {
    setInterval( () => {
      let currentTime = Math.round(this.$refs.audio.currentTime)
      let audioDuration = Math.round(this.$refs.audio.duration)
      this.$refs.audioTime.style.width = (currentTime * 100) / audioDuration + '%'
    }, 1000)
  },
  watch: {
    fetchBeats() {
      this.currentBeat = this.fetchBeats.find(item => item.id === this.id)
    }
  }
}


</script>


<style scoped>

</style>