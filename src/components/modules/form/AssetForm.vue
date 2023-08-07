<template>
    <div class="my-2 bg-gray-100 rounded p-4 mb-4">
    <form @submit="onSubmit">
        <div class="flex flex-wrap -mx-3 mb-1">

        <div class="w-full md:w-9/12 px-3 md:mb-0">
            <label class="block tracking-wide text-gray-700 text-sm mb-2" for="grid-first-name">
                Asset Name
            </label>
            <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-slite-100 placeholder:text-sm text-sm" id="grid-first-name" type="text"  v-model="name" placeholder="Exp : Table">
        </div>

        <div class="w-full md:w-3/12 px-3">
            <label class="block tracking-wide text-gray-700 text-sm mb-2" for="grid-last-name">
                Qty
            </label>
            <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white placeholder:text-slite-100 placeholder:text-sm text-sm" id="grid-last-name" type="number" v-model="qty" placeholder="1">
        </div>

        </div>

        <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-12/12 px-3 mb-6 md:mb-0">
                <label class="block tracking-wide text-gray-700 text-sm mb-2" for="grid-first-name">
                Detail
                </label>
                <input class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white placeholder:text-slite-100 placeholder:text-sm" id="grid-first-name" type="text" v-model="detail" placeholder="Exp : Kitchen Table with good condition">
            </div>
        </div>

        <div class="flex flex-wrap mb-3 my-2">
            <input type="checkbox" v-model="broken">&nbsp;
            <label class="block tracking-wide text-gray-700 text-sm mb-2 mt-2" for="grid-first-name">
                Broken
            </label>
        </div>

        <div class="flex flex-wrap">
        <button class="rounded bg-green-500 px-4 py-2 text-white text-xs">Save</button>
        </div>

    </form>
    </div>
</template>

<script>
export default {
    name:"AssetForm",
    data(){
        return {
            name : '',
            qty : '',
            detail : '',
            broken : false
        }
    },
    methods:{
        async onSubmit(e){
            e.preventDefault()

            if(!this.name){
                alert('Pls insert name !')
            }

            if(!this.qty){
                alert('Pls insert qty')
            }

            const newAsset = {
                name : this.name,
                qty : this.qty,
                detail : this.detail,
                broken : this.broken
            }     

            
            this.$emit("action-add", newAsset)

            this.name = ''
            this.qty = ''
            this.detail = ''
            this.broken = false

        }
    }
}
</script>

<style>
</style>