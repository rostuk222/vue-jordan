<template>
    <div class="footer">
        <img src="/images/copyright.svg" /><span class="footer-text">Copyright 2020. All Rights Reserved.</span>
    </div>
</template>

<script>
    export default {
        name: 'Copyright'
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer-text {
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: #595959;
        margin-left: 5px;
    }

    .footer {
        position: fixed;
        bottom: 35px;
    }
</style>