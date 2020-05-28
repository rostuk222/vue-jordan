<template>
    <b-navbar toggleable="lg" type="dark">
        <div class="input-group input-group-lg d-input">
            <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Search here...">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg"><img src="/images/search.svg" /></span>
            </div>
        </div>
        <div class="userProfile">
            <b-dropdown right>
                <template slot="button-content">
                    <img src="/images/avatar.svg" />
                    <span>Name</span>
                    <img src="/images/userArrowDown.svg" />
                </template>
                <b-dropdown-text class="profile">
                    <div style="width:250px">
                        <img style="float:left" src="/images/avatar-l.svg" />
                        <div class="profile-info">
                            <div>Name Surname</div>
                            <div class="profile-email">email@gmail.com</div>
                            <div>(Admin)</div>
                        </div>
                    </div>
                </b-dropdown-text>
                <b-dropdown-item href="#" v-on:click="$bvModal.show('modal-1')"><img style="margin-right:20px" src="/images/newUser.svg" />Add new user</b-dropdown-item>
                <b-dropdown-item href="/"><img style="margin-right:20px" src="/images/logOut.svg" />Logout</b-dropdown-item>
            </b-dropdown>
            <div class="userAlert">
                <img src="/images/alert.svg" />
            </div>
        </div>
        <UserModal />
    </b-navbar>
</template>

<script>
    import UserModal from '@/components/userModal.vue'
    export default {
        name: 'Navbar',
        components: {
            UserModal
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .dropdown-menu {
        padding-bottom: 0;
    }
    .dropdown-item {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        /* identical to box height */
        text-transform: uppercase;
        color: #50473C;
        padding: 25px;
        border-top: 0.5px solid #C7B299;
    }
    .b-dropdown-text {
        padding: 25px;
    }
    .profile > div{
        width: 300px;
    }
    .profile-info {
        float: left !important;
        margin-left: 20px;
        width:50%;
    }
        .profile-info div:not(.profile-email) {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            /* identical to box height */
            text-transform: uppercase;
            color: #50473C;
            float:left !important;
        }
        .profile-info .profile-email {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            color: #C7B299;
            float: left !important;
        }
    .navbar {
        width: 100%;
        height: 100px;
        margin-left: 280px;
        box-shadow: 0px 3px 3px rgba(212, 212, 212, 0.155239);
        background-color: #ffffff;
    }
    .navbar-nav{
        width: 100%;
    }
    .d-input {
        width: 30%;
        max-width: 500px;
        min-width: 200px;
        margin: auto !important;
    }
        .d-input .input-group-prepend {
            border-right: 1px solid rgba(80, 71, 60, 0.1);
        }
        .d-input > .form-control:not(textarea) {
            height: 45px;
        }
    .userProfile {
        margin-right: 30px;
    }
    .userProfile,
    .userProfile div {
        float: right;
    }
    .userAlert {
        margin-top: 10px;
        margin-right: 30px;
    }
    .dropdown-toggle::after {
        content: none;
    }
    .btn-secondary {
        background-color: #ffffff;
        border: none;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        /* identical to box height */
        color: #50473C;
    }
        .btn-secondary span{
            margin: 0 12px;
        }

        .btn-secondary:hover,
        .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle,
        .btn-secondary:focus, .btn-secondary.focus {
            color: #50473C;
            background-color: #ffffff;
            border: none;
            box-shadow: none;
        }
</style>

