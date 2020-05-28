<template>
    <b-row class="h-100">
        <router-view></router-view>
        <b-col id="rightpane" class="right col-7"></b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'Login'
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .right-pane {
        padding-right: 0px;
    }
</style>

