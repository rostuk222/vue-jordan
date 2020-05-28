<template>
    <b-col class="col-5">
        <div class="login-form">
            <Logo />
            <div>
                <div class="login-title">Admin login</div>
                <div class="login-subtitle">Suspendisse feugiat sapien ut ex volutpat facilisis. ut faucibus ligula pellentesque semper</div>
            </div>
            <div class="input-container">
                <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg"><img src="/images/userIcon.svg" /></span>
                    </div>
                    <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Your user name">
                </div>
                <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg"><img src="/images/passIcon.svg" /></span>
                    </div>
                    <input type="password" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="*********">
                </div>
            </div>
            <div class="forgot-div">
                <router-link :to="{ name: 'forgotpass' }">Forgot password?</router-link>
                </div>
                <b-form-checkbox size="lg">Remeber my details</b-form-checkbox>
                <b-button v-on:click="login" class="login-button">Login in</b-button>
                <div class="reg-container">
                    <span class="reg-span-1">New user?</span><b-link class="reg-link" disabled href="#foo">Register here</b-link>
                </div>
                <Copyright />
            </div>
</b-col>
</template>

<script>
    import Logo from '@/components/Logo.vue'
    import Copyright from '@/components/Copyright.vue'
    export default {
        name: 'LoginForm',
        components: {
            Logo,
            Copyright
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
            login() {
                this.$router.push('dashboard');
            }
        },
        mounted() {
            this.toggleBodyClass('removeClass', 'right-fgt');
            this.toggleBodyClass('addClass', 'right');
        },
        destroyed() {
            this.toggleBodyClass('removeClass', 'right');
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .reg-container {
        margin-top: 7%;
        width: 100%;
        text-align: center;
    }
    .reg-span-1 {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        margin-right:5px;
    }
    .reg-link {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        /* identical to box height */
        text-align: right;
        text-decoration-line: underline;
        color: #C7B299;
    }
    .right {
        background: url(/images/rightPanel.png) no-repeat right;
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

    .logo {
        width: 172px;
        height: 90px;
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

    .forgot-div {
        margin-top: 4%;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        /* identical to box height */
        text-align: right;
        text-decoration-line: underline;
    }

        .forgot-div a {
            color: #50473C;
        }

        .custom-control-label {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 38px;
            /* identical to box height */
            color: #50473C;
        }

    .custom-checkbox.b-custom-control-lg .custom-control-label::before,
    .custom-checkbox.b-custom-control-lg .custom-control-label::after {
        border-radius: 0;
        margin-top: 4%;
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
</style>