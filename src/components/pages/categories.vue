<template>
    <div class="topbgimg">
        <div class="topSlide">
            <loading :active.sync="isLoading" ></loading>
            <navbar></navbar>
            <slide></slide>
            <br>
                <div class="products_box">
                    <div class="categories">
                        <div class="items">
                            <div class="item">
                                <img src="static\img\icon\PinClipart.com_clip-art-hunters_2216272.png">
                                <p class="item_name">所有商品</p>
                            </div>
                            <div class="item">
                                <img src="static\img\icon\20150903.png" alt="">
                                <p class="item_name">補給物資所</p>
                            </div>
                            <div class="item">
                                <img src="static\img\icon\0003520327_B.png" alt="">
                                <p class="item_name">加工屋</p>
                            </div>
                            <div class="item">
                                <img src="static\img\icon\icon_05.png" alt="">
                                <p class="item_name">生態研究所</p>
                            </div>
                            <div class="item">
                                <img src="static\img\icon\PinClipart.com_done-clipart_414278.png" alt="">
                                <p class="item_name">用餐地區</p>
                            </div>
                        </div>
                    </div>    
                <div class="product_list">
                    <div class="product_titel"></div>
                    <div class="list">
                        <div class="item" v-for="item in products" :key="item.id" >
                            <div class="bgimg"><img :src="item.image" alt=""></div>
                            <div class="card-body">
                                <span class="category">{{item.category}}</span>
                                <p class="title">{{item.title}}</p>
                                <div class="sale_price">TWD   {{item.price }}元</div>
                                <div class="cardaction">
                                    <button type="button">
                                        <router-link to="/" >查看更多</router-link> 
                                    </button>
                                    <button type="button" @click="addtoCart(item.id)">加到購物車</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                </div>
        <bottom></bottom> 
        <router-link to="/checkout">
                <div class="carimg">
                        <p>{{cart.carts.length}}</p>
                        <span>購物車</span>
                </div>
        </router-link>     
        </div>   
    </div>    
</template>

<script>
import navbar from '@/components/pages/navbar'
import slide from '@/components/pages/slide'
import car from '@/components/pages/car'
import bottom from '@/components/pages/bottom'

export default {
    name:"categories",
    data(){
        return{
            cart:{},
            products:[],
            categories:'所有商品',
            isLoading: false,
        }
    },
    components:{
        navbar,
        slide,
        car,
        bottom,
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
        },
        created(){
        this.getProducts();
        this.getCart();
        },
    
}
</script>

<style lang="scss" scoped>
    .topbgimg{
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
    .products_box{
        display: flex;
        }
    .categories{
        flex:1;
        margin-right: 10px;
        .items{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-around;
            .item{
            background-color: #fff;
            background-image: url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku1.png),url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku3.png),url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku2.png);
            background-position: center top,center bottom,center top;
            background-repeat: no-repeat,no-repeat,repeat-y;
            background-size: 100% auto;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 180px;
            padding: 5px;
            border-radius: 5px;
            border: 0.5px solid #cccccc;
            margin-bottom:10px;
            transition: .3s all;
            &:hover{
            border: .5px solid rgb(0, 119, 199);
                }
            img{
                position:absolute;left:5px;
                max-width: 50px;
                max-height: 50px;
            }
            .item_name{
                
                color: #333;
                margin-left: 30px;
                font-size: 15px;
                padding-top: 10px;
                font-weight:900;
                letter-spacing:2px;
            }
            }
        }
        }
    .products_list{
    flex:6;
    padding: 10px;
    border: 1px solid #eee;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
                }
    .list{
    display: flex;
    flex-wrap: wrap;
                }
    .item{
    background-color: #fff;
    background-image: url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku1.png),url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku3.png),url(https://www.monsterhunter.com/world-iceborne/assets/img/common/product/product/waku2.png);
    background-position: center top,center bottom,center top;
    background-repeat: no-repeat,no-repeat,repeat-y;
    background-size:100% auto;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 275px;
    padding: 1px;
    box-sizing: border-box;
    margin-bottom: 10px;
    margin-right: 10px;
    border: 1px solid #eee;
    align-items: center ;
    &:hover{
        .cardaction{
        opacity: 1;
        }
    }
        .bgimg{
        img{
            width: 200px;
            height: 200px;
            padding: 1px;
        }
    }
        .category{
        position: absolute;
        top: 0;
        right: 0;
        color: #193f5f;
        font-size: 14px;
        padding: 0 5px;
        background: #68cab3;
        font-weight: 700;
        
    }
        .title{
        font-weight: 400;
        letter-spacing: 3px;
        margin: 5px 0;
        font-size: 18px;
    }
        .text{
        font-size: 14px;
        letter-spacing: 1px;
        color: #666;
    }
        .sale_price{
        font-weight: 600;
        font-size: 16px;
        color: #fb5b5b;
    }
        .origin_price{
        font-size: 14px;
    }
                }   
    .cardaction{
    display: inline-block;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(black,.3);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;
    a{
        color: #fff;
        transition: all .3s;
    }
    button{
        cursor: pointer;
        color: #fff;
        border: 1px solid #fff;
        background: none;
        transition: all .3s;
        &:hover{
        color:#000;
        background: #fff;
        a{
            color: #333;
        }
        }
    }
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