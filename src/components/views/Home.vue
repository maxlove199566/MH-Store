<template>
    <div class="bgimg">
        <div class="topSlide">
            <navbar></navbar>
            <slide></slide>
            <br>
            <product></product>
            <car></car>
            <bottom></bottom>
        </div>
    </div>    
</template>

<script>
import navbar from '@/components/pages/navbar'
import slide from '@/components/pages/slide'
import product from '@/components/pages/product'
import car from '@/components/pages/car'
import bottom from '@/components/pages/bottom'

import Navbar from '../Navbar.vue'
import Slide from '../pages/slide.vue'
import Product from '../pages/product.vue'

export default {
    data(){
        return{
        }
    },
    name:'Home',
    components:{
        navbar,
        slide,
        product,
        car,
        bottom
        },
}
</script>


<style lang="scss" scoped>
    .bgimg{
    background-repeat:no-repeat;
    background-image:url("https://www.monsterhunter.com/world-iceborne/assets/img/common/common/bg_pattern.jpg");
    background-size: cover;
    background-position: center;
        .topSlide{
        max-width: 1080px;
        width: 100%;
        margin: 0 auto;
        }
    }
    
</style>