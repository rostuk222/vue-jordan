<template>
    <b-col class="col-5">
        <div class="login-form">
            <Logo />
            <div>
                <div class="login-title">Password reset</div>
                <div v-if="showForm" class="login-subtitle">Please enter your new password.</div>
                <div v-else class="login-subtitle warning"><div><img class="warning-img" src="/images/success.svg" /></div><div class="email-sent success">Your password has been successfully updated.</div> </div>
            </div>
            <div v-if="showForm">
                <div class="input-container">
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-lg"><img src="/images/passIcon.svg" /></span>
                        </div>
                        <input type="password" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="New password">
                    </div>
                    <div class="input-group input-group-lg">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-lg"><img src="/images/passIcon.svg" /></span>
                        </div>
                        <input type="password" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Confirm New password">
                    </div>
                </div>
                <b-button v-on:click="showForm = !showForm" class="login-button">Reset Password Now</b-button>
            </div>
            <div v-else class="back-to-login-div">
                <router-link :to="{ name: 'LoginForm' }">Login to your account</router-link>
            </div>
            <Copyright />
        </div>
</b-col>
</template>

<script>
    import Logo from '@/components/Logo.vue'
    import Copyright from '@/components/Copyright.vue'
    export default {
        name: 'ResetPass',
        components: {
            Logo,
            Copyright
        },
        data() {
            return {
                showForm: true,
            };
        },
        methods: {
            toggleBodyClass(addRemoveClass, className) {
                const el = document.getElementById("rightpane");

                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
        mounted() {
            this.toggleBodyClass('removeClass', 'right');
            this.toggleBodyClass('addClass', 'right-fgt');
        },
        destroyed() {
            this.toggleBodyClass('removeClass', 'right-fgt');
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    .warning-img {
        padding: 10px;
        float: left;
    }

    .success {
        line-height: 48px;
    }
    .right-fgt {
        background: url(/images/rightPanel-fgt.png) no-repeat right;
    }

    .email-sent {
        margin-left: 5px;
        float: left;
        width: 80%;
    }

    .login-title {
        margin-top: 9%;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 41px;
        /* identical to box height, or 137% */
        letter-spacing: -0.75px;
        text-transform: uppercase;
        color: #50473C;
    }

    .login-subtitle {
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.703125px;
        margin-top: 4%;
    }

    .login-form {
        margin-top: 8%;
        float: right;
        width: 70%;
    }

    .input-container {
        margin-top: 15%;
    }

    .input-group-lg {
        background: #FAF8F6;
        margin-top: 5%;
        border: 1px solid rgba(80, 71, 60, 0.1);
        box-sizing: border-box;
    }

        .input-group-lg > .form-control:not(textarea) {
            height: 60px;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 22px;
        }

    .input-group-text, .form-control {
        background: #FAF8F6;
        border: none;
    }

        .form-control:focus {
            outline: none;
            box-shadow: none;
            background-color: initial;
        }

    .back-to-login-div {
        margin-top: 4%;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 25px;
        /* identical to box height, or 167% */
        letter-spacing: 0.703125px;
        text-decoration-line: underline;
        float: left;
        margin-left: 5px;
    }

        .back-to-login-div a {
            color: #50473C;
        }

    .login-button {
        background: #FFC11F;
        border-radius: 5px;
        border-color: #FFC11F;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.46875px;
        text-transform: uppercase;
        color: #50473C;
        width: 100%;
        height: 50px;
        margin-top: 7%;
    }

    .warning {
        line-height: 25px;
    }
</style>