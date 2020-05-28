<template>
    <b-container class="w-100 h-100">
        <b-row>
            <b-col><div class="tile">
    <div class="tileTop">
        <img src="/images/summarcard.svg" />
        <div class="tileTextContainer">
            <div class="tileTitle">Today Visitors</div>
            <div class="tileVolume">20,000</div>
        </div>
    </div>
    <b-button class="tile-button">View details<img class="buttonArrow" src="/images/arrowRight.svg" /></b-button>
</div></b-col>
            <b-col><div class="tile">
    <div class="tileTop">
        <img src="/images/summarcard-01.svg" />
        <div class="tileTextContainer">
            <div class="tileTitle">Today Earnings</div>
            <div class="tileVolume">10,000</div>
        </div>
    </div>
    <b-button class="tile-button">View details<img class="buttonArrow" src="/images/arrowRight.svg" /></b-button>
</div></b-col>
            <b-col><div class="tile">
    <div class="tileTop">
        <img src="/images/summarcard-02.svg" />
        <div class="tileTextContainer">
            <div class="tileTitle">Today Bookings</div>
            <div class="tileVolume">4,525</div>
        </div>
    </div>
    <b-button class="tile-button">View details<img class="buttonArrow" src="/images/arrowRight.svg" /></b-button>
</div></b-col>
        </b-row>
        <b-row class="lowerRow">
            <b-col><div class="tile">
    <div class="tileTop">
        <img src="/images/summarcard-03.svg" />
        <div class="tileTextContainer">
            <div class="tileTitle">Today Inquires</div>
            <div class="tileVolume">4,300</div>
        </div>
    </div>
    <b-button class="tile-button">View details<img class="buttonArrow" src="/images/arrowRight.svg" /></b-button>
</div></b-col>
            <b-col><div class="tile">
    <div class="tileTop">
        <img src="/images/summarcard-04.svg" />
        <div class="tileTextContainer">
            <div class="tileTitle">Total Users</div>
            <div class="tileVolume">36,000</div>
        </div>
    </div>
    <b-button class="tile-button">View details<img class="buttonArrow" src="/images/arrowRight.svg" /></b-button>
</div></b-col>
            <b-col><div class="tile">
    <div class="tileTop">
        <img src="/images/summarcard-05.svg" />
        <div class="tileTextContainer">
            <div class="tileTitle">New Users</div>
            <div class="tileVolume">2,541</div>
        </div>
    </div>
    <b-button class="tile-button">View details<img class="buttonArrow" src="/images/arrowRight.svg" /></b-button>
</div></b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'Tiles'
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tile {
        min-width: 300px;
        min-height: 185px;
        box-shadow: 3px 3px 4px rgba(212, 212, 212, 0.268985);
        background-color: #ffffff;
    }
    .tileTextContainer {
        padding-top: 38px;
    }
    .tileTop img{
        float:left;
        padding:38px;
    }
    .tileTitle {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #50473C;
    }
    .tileVolume {
        font-style: normal;
        font-weight: 600;
        font-size: 34px;
        line-height: 46px;
        text-transform: uppercase;
        color: #50473C;
    }
    .lowerRow{
        padding-top:30px;
    }
    .tile-button {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #C7B299;
        background: #FFFFFF;
        border: 1px solid #C7B299;
        box-sizing: border-box;
        border-radius: 6px;
        min-width: 142px;
        min-height: 44px;
        margin-top: 17px;
    }
    .buttonArrow {
        margin-left: 10px;
        margin-bottom: 3px;
    }
</style>