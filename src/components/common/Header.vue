<template>
    <div class="w-full flex justify-between">
        <h2 class="text-xl">{{ title }}</h2>
        <Button 
            btn_text="Add Assets" 
            color="bg-blue-500"
            @btn-click="$emit('toggle-add')"/>
    </div>
</template>

<script>
import Button from '../shared/Button'

export default {
    name: 'Header',
    props:{
        title: String
    },
    components:{
        Button
    }
}
</script>