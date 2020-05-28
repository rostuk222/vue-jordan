<template>
    <b-container class="main-container h-100 w-100">
        <router-view></router-view>
    </b-container>
</template>

<script>
    import Home from './views/Login.vue';

    export default {
        name: 'app',
        components: {
            Home
        }
    };
</script>

<style>
    .main-container{
        max-width:100% !important;
    }
    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow-x: hidden;
    }
</style>

