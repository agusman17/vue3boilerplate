<template>
    
    <AssetForm v-show="showAdd" @action-add="addAsset"/>

    <div class="my-2">
        <AssetList :assets="assets" @action-delete="deleteAsset" @action-broken="brokenAsset"/>
    </div>

</template>

<script>
import AssetForm from '../components/modules/form/AssetForm.vue'
import AssetList from '../components/modules/list/asset/AssetList.vue'
import {UseAssetStore} from '../store/AssetStore'

export default {
    name: "Home",
    props:{
        showAdd: Boolean
    },
    components: {
        AssetForm,
        AssetList,
        UseAssetStore
    },
    data(){
        return {
            assets : [],
            store : UseAssetStore()
        }
    },
    methods:{
        async deleteAsset(id){
            if(confirm("Are you sure ?")){
                const res = await this.store.deleteAsset(id)

                res.status === 200 ? (this.assets = this.assets.filter((asset) => asset.id !== id)) : alert("Error deleting asset")
            }
        },
        async addAsset(newAsset){
            const res = await this.store.addAsset(newAsset)

            if(res.status === 201){
                alert("Data asset has been submit")
                this.assets = [...this.assets, res.data]
            }

        },
        async brokenAsset(id){

            const filterBroken = await this.fetchAsset(id)
            const updBroken = {...filterBroken, broken: !filterBroken.broken}

            const res = await this.store.updateAsset(id, updBroken)
            const data = res.data

            this.assets = this.assets.map( (asset) => asset.id === id ? {...asset, broken : data.broken} : asset)
        },
        async fetchAssets(){
            await this.store.fetchAssets()
            return this.store.getAssets 
        },
        async fetchAsset(id){
            const data = await this.store.fetchAsset(id)
            return data
        }
    },
    async created(){
        this.assets = await this.fetchAssets()
    }
}
</script>

<style>

</style>