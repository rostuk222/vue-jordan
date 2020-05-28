<template>
    <div class="homeMain">
        <Tiles />
        <b-container class="w-100 h-100 country-container">
            <b-row>
                <div class="gridContainer">
                    <CountryGrid class="country-table" />
                    <div class="country-button-container">
                        <b-button class="all-country">View all countries</b-button>
                    </div>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Tiles from '@/components/Tiles.vue'
    import CountryGrid from '@/components/countryGrid.vue'
    export default {
        name: 'DashboardHome',
        components: {
            Tiles,
            CountryGrid
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .homeMain {
        margin-left: 285px;
        margin-top: 60px;
        width: 100%;
        height: 100%;
        background: #F6F6F6;
    }
    .country-container{
        margin-bottom:35px;
    }
    .country-table {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #50473C !important;
    }
        .country-button-container {
            text-align: center;
            padding: 20px 0;
            border-top: 1px solid rgba(204, 165, 117, 0.313839);
            margin-top: -12px;
        }
    .gridContainer {
        background: #FFFFFF;
        box-shadow: 3px 3px 4px rgba(212, 212, 212, 0.268985);
        width: 100%;
        margin: 15px;
        margin-top: 30px;
        margin-bottom: 0px;
    }
    .all-country {
        background: #FFFFFF;
        border: 1px solid #C7B299;
        box-sizing: border-box;
        border-radius: 6px;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #C7B299;
        width: 184px;
        height: 44px;
    }
</style>