<template>
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide><div class="slide slide-1"></div></swiper-slide>
        <swiper-slide><div class="slide slide-2"></div></swiper-slide>
        <swiper-slide><div class="slide slide-3"></div></swiper-slide>
        <swiper-slide><div class="slide slide-4"></div></swiper-slide>
        <swiper-slide><img src="https://www.monsterhunter.com/world-iceborne/assets/img/common/media/update_02.jpg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
    export default {
        name: 'carrousel',
        data() {
        return {
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                speed:300,
            autoplay:{
                delay:3000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
                    },
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.swiper-container {
    max-width: 1080px;
    width: 100%;
    height: 580px;
}
.swiper-slide {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background-position: center;
    background-size: cover;
    position: relative;
        .slide{
            width: 100%;
            height: 100%;
            background-position: center center;
            background-size: cover;
            &.slide-1{
            background-image: url(https://www.monsterhunter.com/world-iceborne/assets/img/common/media/promo_18.jpg);
            }
            &.slide-2{
            background-image: url(https://www.monsterhunter.com/world-iceborne/assets/img/common/top/hunting_bg.jpg);
            }
            &.slide-3{
            background-image: url(https://www.monsterhunter.com/world-iceborne/assets/img/common/top/base_bg.jpg);
            }
            &.slide-4{
            background-image: url(https://www.monsterhunter.com/world-iceborne/assets/img/common/top/eco_bg.jpg);
            }
        }
    }
</style>