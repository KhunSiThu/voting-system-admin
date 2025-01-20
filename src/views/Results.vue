<template>
<SideBar></SideBar>

<div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">

    <CountDown></CountDown>

    

</div>
</template>

    
      
      
    
<script>
import Loading from '../components/Loading'
import SideBar from '../components/SideBar'
import CountDown from '../components/CountDown'
import {
    onMounted,
    onUnmounted,
    ref
} from 'vue';

export default {
    name: 'HomeView',
    components: {
        Loading,
        CountDown,
        SideBar
    },

    mounted() {

    },

    setup() {

    }
}
</script>
      
      
    
<style>

</style>
