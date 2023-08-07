<template>
  <button class="rounded px-4 py-2 text-white text-xs" :class="color" @click="onClick()">{{ btn_text }}</button>
</template>

<script>
export default {
    name:'Button',
    props:{
        btn_text : String,
        color: String
    },
    methods:{
        onClick(){
            this.$emit('btn-click')
        }
    }
}
</script>

<style>

</style>