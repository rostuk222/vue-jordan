<template>
    <b-row class="w-100 dash-row">
        <Navbar />
        <Sidebar />
        <router-view></router-view>
    </b-row>
</template>

<script>
    import Sidebar from '@/components/Sidebar.vue'
    import Navbar from '@/components/Navbar.vue'
    export default {
        name: 'Dashboard',
        components: {
            Navbar,
            Sidebar
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .main-container {
        padding-right: 0;
        background-color: #f6f6f6;
    }
    .dash-row {
        margin-left: 0;
    }
</style>

