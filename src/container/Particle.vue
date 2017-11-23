<template>
    <div class="wrapper">
        <div class="main-content">
            <h2>ResumeBuilder</h2>
            <a class="btn button is-primary is-large" @click="redirect('login')">Login</a>
            <a class="btn button is-link is-large" @click="redirect('signup')">SignUp</a>
        </div>
        <vue-particles class="particles"
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="2.5"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push">
    </vue-particles>
</div>
</template>

<script>
export default {
    name: 'particle',

    data() {
        return {

        }
    },

    methods: {
        redirect(data) {
            this.$router.push({ name: 'Login', params: { data: data } });
        }
    }
}

</script>

<style lang="scss">

.wrapper {
    position: relative;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100vh;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;


    .particles {
        background-image: url("../assets/back_resume.png");
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .main-content {
        color: #fff;
        z-index: 999;
    }

    .main-content h2 {
        font-size: 5rem;
        font-family: Teko,sans-serif;
        text-shadow: 8px 8px #000;
        text-transform: uppercase;
        margin: 0;
    }

    .btn {
        margin-top: 10px;
        padding: 0px 100px;
        margin-left: 70px;
    }
}
</style>
