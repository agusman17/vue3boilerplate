import axios from "axios";
import { defineStore } from "pinia";

export const UseAssetStore = defineStore("asset", {
    state: () => ({
        assets: [],
    }),
    getters: {
        getAssets(state){
            return state.assets
        }
    },
    actions: {
        async fetchAssets(){
            try{
                const res = await axios.get("http://localhost:5000/assets")
                this.assets = res.data
            }catch(error){
                console.log("Error : ".error)
            }
        },
        async fetchAsset(id){
            try{
                const res = await axios.get(`http://localhost:5000/assets/${id}`)
                return res.data
            }catch(error){
                console.log("Error : ".error)
            }
        },
        async addAsset(newAsset){
            try{
                const res = await axios.post(`api/assets`, newAsset)
                return res
            }catch(error){
                console.log(error)
            }
        },
        async deleteAsset(id){
            try{
                const res = await axios.delete(`api/assets/${id}`)
                return res
            }catch(error){
                console.log(error)
            }
        },
        async updateAsset(id, asset){
            try{
                const res = await axios.put(`api/assets/${id}`, asset)
                return res
            }catch(error){
                console.log(error)
            }
        }
    }
})