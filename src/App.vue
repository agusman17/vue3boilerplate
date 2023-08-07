<template>
  <div class="container mx-auto px-4 py-4 flex justify-center">

    <div class="w-6/12 border border-stone-200 p-4">

      <Header title="Asset Management" @toggle-add="toggleAdd()"/>

      <router-view :showAdd = showAdd></router-view>

      <Footer />
      
    </div>

  </div>
</template>

<script>
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      showAdd : false
    }
  },
  methods:{
    toggleAdd(){
      this.showAdd = !this.showAdd
    }
  }
}
</script>
