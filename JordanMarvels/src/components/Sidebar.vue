<template>
    <b-sidebar id="sidebar-1"
               no-slide
               no-header
               no-close-on-esc
               no-close-on-route-change
               visible
               width="300px"
               body-class="sidebar">
        <div>
            <img src="/images/d-logo.png" class="img-fluid d-logo" />
        </div>
        <b-list-group>
            <b-list-group-item>
                <b-button variant="primary"><img class="icon" src="/images/menuHome.svg"/>Home</b-button>
            </b-list-group-item>
            <b-list-group-item>
                <b-button v-b-toggle.collapse-1 variant="primary"><img class="icon" src="/images/menuCustomer.svg" />Customers<img class="ard" src="/images/menuArrowdown.svg" /></b-button>
                <b-collapse id="collapse-1" accordion="nav">
                    <b-list-group>
                        <b-list-group-item class="inner">Add new customers</b-list-group-item>
                        <b-list-group-item class="inner">All customers</b-list-group-item>
                    </b-list-group>
                </b-collapse>
            </b-list-group-item>
            <b-list-group-item>
                <b-button v-b-toggle.collapse-2 variant="primary"><img class="icon" src="/images/menuTourpackages.svg" />Tour Packages<img class="ard" src="/images/menuArrowdown.svg" /></b-button>
                <b-collapse id="collapse-2" accordion="nav">
                    <b-list-group>
                        <b-list-group-item class="inner">View all packages</b-list-group-item>
                        <b-list-group-item class="inner">Add new packages</b-list-group-item>
                        <b-list-group-item class="inner">Packages categories</b-list-group-item>
                        <b-list-group-item class="inner">Add packages category</b-list-group-item>
                    </b-list-group>
                </b-collapse>
            </b-list-group-item>
            <b-list-group-item>
                <b-button variant="primary" ><img  class="icon" src="/images/menuPackageinquary.svg" />Packages Inquiry</b-button>
            </b-list-group-item>
            <b-list-group-item>
                <b-button v-b-toggle.collapse-4 variant="primary"><img class="icon" src="/images/menuDiscount.svg" />Discounts<img class="ard" src="/images/menuArrowdown.svg" /></b-button>
                <b-collapse id="collapse-4" accordion="nav">
                    <b-list-group>
                        <b-list-group-item class="inner">Add new discounts</b-list-group-item>
                        <b-list-group-item class="inner">View all discounts</b-list-group-item>
                    </b-list-group>
                </b-collapse>
            </b-list-group-item>
            <b-list-group-item>
                <b-button v-b-toggle.collapse-5 variant="primary"><img class="icon" src="/images/menuBooking.svg" />Bookings<img class="ard" src="/images/menuArrowdown.svg" /></b-button>
                <b-collapse id="collapse-5" accordion="nav">
                    <b-list-group>
                        <b-list-group-item class="inner">Tour bookings</b-list-group-item>
                        <b-list-group-item class="inner">Car bookings</b-list-group-item>
                        <b-list-group-item class="inner">View all cars</b-list-group-item>
                    </b-list-group>
                </b-collapse>
            </b-list-group-item>
        </b-list-group>
                <Copyright />
</b-sidebar>
</template>

<script>
    import Copyright from '@/components/DashboardCopyright.vue'
    export default {
        name: 'Sidebar',
        components: {
            Copyright
        }, 
        methods: {
            home() {
                this.$router.push('DashboardHome');
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .sidebar {
        background: #50473C;
        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.0524202);
    }
    .d-logo {
        width: 147px;
        height: 77px;
        margin-left: 29px;
        margin-top: 29px;
        margin-bottom: 50px;
    }
    .list-group-item {
        padding: 0;
        border: none;
        border-radius: 0;
        color: #FFFFFF;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.9375px;
        text-transform: uppercase;
    }
    .inner {
        padding: 20px;
        padding-left: 54px;
        background: #AD8E67;
    }
        .inner:hover {
            background: #CCA575;
        }
    .b-sidebar .btn-primary {
        height: 60px;
        width: 100%;
        border: none;
        border-radius: 0;
        background: #50473C;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.9375px;
        text-transform: uppercase;
        color: #FFFFFF;
        text-align: left;
    }

        .b-sidebar .btn-primary:focus {
            box-shadow: none;
        }
    .b-sidebar .btn-primary img.icon {
        float: left;
        margin-right: 18px;
    }

        .b-sidebar .btn-primary img.ard {
            float: right;
            margin-top: 10px;
            margin-right: 10px;
        }
</style>