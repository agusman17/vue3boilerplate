<template>
    <div :key="asset.id" v-for="asset in assets">
        <Asset :asset="asset" @click-delete="$emit('action-delete', asset.id)" @click-broken="$emit('action-broken', asset.id)"/>
    </div>
</template>

<script>
import Asset from "./Asset.vue"

export default {
    name: "AssetList",
    props: {
        assets : Array
    },
    components: {
        Asset
    },
    emits: ['action-delete', 'action-broken']
}
</script>

<style>

</style>