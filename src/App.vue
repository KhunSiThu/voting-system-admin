<template>
<router-view />
</template>

<script>
import getEndDate from './composables/getEndDate';
export default {

    setup() {
        getEndDate()
    }
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
