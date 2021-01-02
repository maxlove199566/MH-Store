<template>
    <footer>
        <p class="background"></p>
        <div class="bottom" style="text-align: center;">
            <a href="#" style="background-color: rgb(255, 255, 255,0);">
                <img src="https://shoplineimg.com/assets/footer/social_facebook.png" style="height: 44px; width: auto; display: inline-block;">
            </a> &nbsp;
            <a href="#" style="background-color: rgb(255, 255, 255,0);">
                <img src="https://shoplineimg.com/assets/footer/social_twitter.png" style="height: 44px; width: auto; display: inline-block;">
            </a>&nbsp;&nbsp;
            <a href="#" style="background-color: rgb(255, 255, 255,0);">
                <img src="https://i.imgur.com/0WQeHV1.png" style="height: 44px; width: auto; display: inline-block;">
            </a>&nbsp;&nbsp;
            <a href="#" style="background-color: rgb(255, 255, 255,0);">
                <img src="https://shoplineimg.com/assets/footer/social_instagram.png" style="height: 44px; width: auto; display: inline-block;">
            </a>
    <div class="bottominfo">
        <div class="info">
            <p>實體店面：新大陸之月辰據點</p>
            <p>營業時間：00:00-24:00</p>
        </div>
        <div>
        <p>作者：max    <br><a href="#" target="_blank">Github</a></p>
        <p>純屬練習作品｜<a href="https://www.monsterhunter.com/world-iceborne/" target="_blank">圖片來源：https://www.monsterhunter.com/world-iceborne/</a></p> 
        </div>
    </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "bottom"
    };
</script>

<style scoped lang="scss">
// footer {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//         }
.background{
    background-image: url(https://i.imgur.com/Nz43kMV.png),url(https://i.imgur.com/giDRHhS.png);
    background-position: right,left;
    background-repeat: no-repeat;
    height: 105px;
}
.bottom{
    border-top: 2px solid #aaa;
    padding-top:10px;
}
.bottominfo{
    display: flex;
    font-size: 15px;
    color: #2b5475;;
    align-items: center;
    justify-content: space-between;
    max-width: 1080px;
    width: 100%;
    padding: 20px 0;
    margin: 0 auto;
    margin-top: 10px;
    border-top: 2px solid #aaa;
    img{
        height: 40px;
    }
    a{
        color: #666;
    }
}       
</style>