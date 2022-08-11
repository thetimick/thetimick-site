<template>
  <div class="justify-center group gap-6 py-4  md:text-start md:text-left items-center h-36  w-full px-4  xl:px-12 xl:gap-12 sm:justify-start">
    <img src="../assets/img/Github.png" class="hidden sm:block h-24 w-24 rounded-full object-cover">
    <div>
      <div class="font-bold lg:text-4xl pb-4">Image Relize</div>
      <div class="text-xs md:text-base">Уменьшение размера файлов (.jpg), путем изменения разрешения и параметра Quality</div>
    </div>
  </div>
</template>


<script>

export default {
  name: "ProductCode",
  components: {},
  data() {
    return {

    }
  },
  props: {
    id: {
      String
    }
  },
   async created () {
    let fetchApi = await fetch('http://thetimickrus-001-site1.atempurl.com/TheTimickRus/FetchProjects',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }

    )
     let response = fetchApi.json()
     console.log('response',response)
  },

}
</script>

<style scoped>

</style>