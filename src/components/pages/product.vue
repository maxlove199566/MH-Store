<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <p class="categories_titel">設施分類</p>
        <div class="categories">
            <div class="items">
                <router-link class="item" to="/categories"><img src="static\img\icon\20150903.png" alt=""><p class="item_name">補給物資所</p></router-link>
                <router-link class="item" to="/categories"><img src="static\img\icon\0003520327_B.png" alt=""><p class="item_name">加工屋</p></router-link>
                <router-link class="item" to="/categories"><img src="static\img\icon\icon_05.png" alt=""><p class="item_name">生態研究所</p></router-link>
                <router-link class="item" to="/categories"><img src="static\img\icon\PinClipart.com_done-clipart_414278.png" alt=""><p class="item_name">用餐地區</p></router-link>
            </div>
        </div>
        <p class="categories_titel">最新商品</p>
        <loading :active.sync="isLoading" ></loading>
        <div class="list">
            <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="item in products" :key="item.id">
                    <div class="categories">{{ item.category }}</div>
                        <img :src="item.image" alt="">
                        <div class="title">{{ item.title }}</div>
                        <p class="intro">{{ item.description }}</p>
                    <div class="price">
                        <div class="onsale_price">TWD   {{item.price }}元</div>
                        <div class="ori_price">原價{{ item.origin_price }}元</div>
                    </div>
                    <div class="more">
                        <div class="read_more">
                            <router-link to="`/`"><span>詳細介紹</span></router-link>
                        </div>
                        <div class="add_cart" @click="addtoCart(item.id)">加入購物車</div>
                    </div>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
        <router-link to="/checkout">
                <div class="carimg">
                        <p>{{cart.carts.length}}</p>
                        <span>購物車</span>
                </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'product',
        data() {
        return {
            cart:{},
            isLoading: false,
            products:[],
            product:{},
            swiperOptions: {
                slidesPerView: 4,
                spaceBetween: 10,
                loop: true,
                speed:300,
                isLoading: false,
            autoplay:{
                delay:5000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 30
            }
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
                    },
                }
            }
        },
        methods:{
            getProducts(){
                const api = `${process.env.APIPATN}/api/${process.env.CUSTOMPATH}/products`;
                const vm = this;
                vm.isLoading = true ;
                this.$http.get(api).then((response) => {
                console.log(response.data);
                vm.isLoading = false ;
                vm.products = response.data.products ;
                });
            },
            addtoCart(id,qty = 1){
                        const vm = this;
                        const url = `${process.env.APIPATN}/api/${process.env.CUSTOMPATH}/cart`;
                        vm.isLoading = true ;
                        const cart = {
                            product_id:id,
                            qty
                        }
                        this.$http.post(url,{data:cart}).then((response) => {
                        console.log(response);
                        vm.isLoading = false ;
                        vm.getCart();
                        });
                },
            getCart(){
                const vm = this;
                const url = `${process.env.APIPATN}/api/${process.env.CUSTOMPATH}/cart`;
                vm.isLoading = true ;
                this.$http.get(url).then((response) => {
                console.log(response.data);
                vm.cart = response.data.data;
                vm.isLoading = false ;
                });
        },
        },
        created(){
        this.getProducts();
        this.getCart();
        },
    }
</script>

<style scoped lang="scss">
    .swiper-container {
    max-width: 1080px;
    width: 100%;
    height: 340px;
    padding-bottom: 20px;
    }
    .swiper-slide{
    background-color: #fff;
    background-image: url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku1.png),url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku3.png),url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku2.png);
    background-position: center top,center bottom,center top;
    background-repeat: no-repeat,no-repeat,repeat-y;
    background-size:100% auto;
    border: 3px solid #ddd;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 5px 15px;
    box-sizing: border-box;
    .categories{
        background: #ff4c4c;
        font-size: 14px;
        display: inline-block;
        color: #fff;
        position: absolute;
        top: 0;
        margin: 0;
        right: 0;
        padding: 3px 5px;
        border-radius: 5px;
        border: 2px solid #fff;
    }
    img{
        max-width: 180px;
        max-height: 180px;
        padding: 1px;
    }
    .title{
        font-size: 18px;
        align-self: flex-start;
    }
    .intro{
        align-self: flex-start;
        font-weight: 400;
        color: #666;
        font-size: 14px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
    }
    .price{
        font-weight: normal;
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        .onsale_price{
        font-size: 16px;
        letter-spacing: 1px;
        color: #48a38e;
        font-weight: 600;
        }
        .ori_price{
        font-size: 12px;
        color: #888;
        }
    }
    }
    .swiper-pagination{
    bottom: 0px;
    }
    .categories_titel{
    z-index: 100;
    background-image: url(https://www.monsterhunter.com/world-iceborne/assets/img/common/top/title_sub_base.png);
    background-repeat: no-repeat;
    background-size: 50% auto;
    width: 49.83333vw;
    height: 3.33333vw;
    text-indent:110px;   
    position: relative;
    font-size: 28px;
    font-weight: 700;
    color: #193f5f;
    padding: 10px;
    text-shadow: 0 0 25px #fff, 0 0 20px #fff, 0 0 10px #fff, 0 0 5px #fff, 0 0 2px #fff;
    
    }
    .categories{
    margin: 10px 0;
    .items{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        .item{
        background-color: #fff;
        background-image: url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku1.png),url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku3.png),url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku2.png);
        background-position: center top,center bottom,center top;
        background-repeat: no-repeat,no-repeat,repeat-y;
        background-size: 100% auto;
        cursor: pointer;
        display: flex;
        flex:1;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 5px;
        border: 2px solid #cccccc;
        margin: 5px;
        transition: .3s all;
        &:hover{
            border: .5px solid rgb(0, 119, 199);
        }
        img{
            max-width: 50px;
            max-height: 50px;
        }
        .item_name{
            color: #333;
            margin-left: 8px;
            font-size: 20px;
            padding-top: 10px;
            font-weight:900;
            letter-spacing:2px;
        }
        }
    }
    }
    .more{
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    .read_more,.add_cart{
        flex:1;
        text-align: center;
        padding: 5px 0;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .read_more{
        background-color: (#9dc5f7);
        opacity: .6;
        margin-right: 5px;
        
        span{
                color: #000;
                font-weight:900;
            }
        &:hover{
        background:#0e9ee3;;
        border: 1px solid#0e9ee3;;
        opacity: .8;
            
        }
    }
    .add_cart{
        &:hover{
        background: #ff4c4c;
        border: 1px solid #ff4c4c;
        color: #fff;
        }
    }
    }
    .products_list{
    padding: 20px 0;
    }
    .carimg{
                cursor: pointer;
                width: 150px;
                height: 150px;
                background-image: url(https://i.imgur.com/st12tzl.png);
                background-size: contain;
                background-repeat: no-repeat;
                position: fixed;
                right: 70px;
                bottom: 70px;
                -webkit-transition: all .3s;
                transition: all .3s;
                z-index: 10;
                -webkit-animation: wave-data-v-0e0ccad6 3s ease-in-out infinite;
                animation: wave-data-v-0e0ccad6 3s ease-in-out infinite;
                    p{
                        position: absolute;
                        border: 2px solid #fff;
                        right: 25px;
                        top: -8px;
                        width: 25px;
                        text-align: center;
                        font-size: 14px;
                        line-height: 16px;
                        border-radius: 50%;
                        color: #fff;
                        background: #fb2424;
                        padding: 1px;
                        display: inline-block;
                    }
                    span{
                        position: absolute;
                        border: 2px solid #0B263D;
                        right: 25px;
                        top: 20px;
                        width: 25px;
                        text-align: center;
                        font-size: 16px;
                        line-height: 18px;
                        color: #0B263D;
                        padding: 1px;
                        font-weight:900;
                    }
            }
</style>