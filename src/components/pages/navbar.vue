<template>
    <div>
        <div class="navbar">
            <div class="logo">
                <router-link to="/"><img src="static\img\LogoMH.png" alt=""></router-link>
            </div>
            <div class="title-1">
                
                <span class="title-2">歡迎來到獵人們的集會所</span> 
            </div>
        </div>    
            <Slide right noOverlay >
                <router-link to="/"><img src="https://www.monsterhunter.com/world-iceborne/assets/img/common/common/icon_patch.png" height="40" width="40"><span>首頁</span></router-link>
                <router-link to="/categories"><img src="static\img\icon\20150903.png" alt="" height="40" width="40"><span class="item_name">補給物資所</span></router-link>
                <router-link to="/categories"><img src="static\img\icon\0003520327_B.png" alt="" height="40" width="40"><span class="item_name">加工屋</span></router-link>
                <router-link to="/categories"><img src="static\img\icon\icon_05.png" alt="" height="40" width="40"><span class="item_name">生態研究所</span></router-link>
                <router-link to="/categories"><img src="static\img\icon\PinClipart.com_done-clipart_414278.png" alt="" height="40" width="40"><span class="item_name">用餐地區</span></router-link>
            </Slide>
            
    </div>
        
</template>

<script>
import { Slide } from 'vue-burger-menu'

    export default {
        name:"navbar",
        data(){
            return{

            }
        },
        components: {
        Slide // Register your component
                    }
    }
</script>


<style scoped>
    .navbar {
    z-index: 10;
    max-width: 1080px;
    margin: 0 auto;
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    }
    .logo{
        width: 240x;
        padding: 10px;
    }
    .title-1{
    margin: 0 auto;
    width: 500px;
    height: 200px;    
    background-repeat: no-repeat;
    background-size:500px;
    background-image: url(https://www.monsterhunter.com/world-iceborne/assets/img/common/common/btn_reservation_base.png);
    
    }
    .title-2{
    width: 500px;
    font-family: "Cardo", serif;
    display: inline-block;
    line-height: 90px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 36px;
    color: #0B263D;
    text-align: center;
    letter-spacing:5px;
    font-weight:900;
    padding-top: 40px;
    text-shadow: 0 0 25px #fff, 0 0 20px #fff, 0 0 10px #fff, 0 0 5px #fff, 0 0 2px #fff;
    }
    .bm-burger-button {
        position: fixed;
        width: 36px;
        height: 30px;
        left: 36px;
        top: 36px;
        cursor: pointer;
        }
        .bm-burger-bars {
        background-color: #373a47;
        }
        .line-style {
        
        position: absolute;
        height: 20%;
        left: 0;
        right: 0;
        }
        .cross-style {
        position: absolute;
        top: 12px;
        right: 2px;
        cursor: pointer;
        }
        .bm-cross {
        background: #bdc3c7;
        }
        .bm-cross-button {
        height: 24px;
        width: 24px;
        }
        .bm-menu {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1000; /* Stay on top */
        top: 0;
        left: 0;
        background-color: rgb(63, 63, 65); /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
        }

        .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
        }
        .bm-item-list {
        color: #b8b7ad;
        margin-left: 10%;
        font-size: 20px;
        }
        .bm-item-list > * {
        display: flex;
        text-decoration: none;
        padding: 0.7em;
        }
        .bm-item-list > * > span {
        margin-left: 10px;
        font-weight: 700;
        color: white;
        }
</style>