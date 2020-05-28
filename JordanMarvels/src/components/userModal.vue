<template>
    <b-modal size="lg" id="modal-1" :hide-footer="true" :hide-header="true" centered title="Add new user">
        <div>
            <div class="modal-title">Add new user</div>
            <div class="modal-subtitle">Please add new user by inviting them via email address</div>
        </div>
        <div class="input-group input-group-lg">
            <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Email Address">
        </div>
        <div>
        <b-button class="modal-confirm" v-on:click="$bvModal.hide('modal-1')">Add user Now</b-button>
            </div>
    </b-modal>
</template>

<script>
    export default {
        props: ['modalShow'],
        name: 'UserModal'
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .modal-title {
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        text-align: center;
        text-transform: uppercase;
        color: #50473C;
    }
    .modal-subtitle {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 25px;
        /* identical to box height */
        text-align: center;
        color: #50473C;
    }
    .modal-confirm {
        background: #FFFFFF;
        border: 1px solid #C7B299;
        box-sizing: border-box;
        border-radius: 6px;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #C7B299;
        width:163px;
        height:44px;
        margin:auto;
        position:relative;
    }
</style>