<template>
    <div class="bgimg">
        <loading :active.sync="isLoading"></loading>
        <navbar></navbar>
        <div class="checkout">
            <div class="title">
                <img src="static\img\icon\PinClipart.com_clip-art-hunters_2216272.png" alt="" />
                <p>購物車</p>
            </div>
            <p class="empty" v-if="!cart.carts.length">購物車沒有東西哦！</p>
            <div class="cartlist" v-else>
                <table>
                    <thead>
                        <tr>
                            <td class="item_title">品名</td>
                            <td class="item_count">數量</td>
                            <td class="item_price">單價</td>
                            <td class="item_delete">刪除</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cart.carts" :key="item.id">
                            <td>
                                {{ item.product.title }}
                            </td>
                            <td>
                                {{ item.qty }}/{{ item.product.unit }}
                            </td>
                            <td>
                                <p>NT.{{ item.total}}</p>

                            </td>
                            <td>
                                <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCatItem(item.id)">
                                <p class="far fa-trash-alt">刪除</p>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="total">
                        <td colspan="2" >總計</td>
                        <td colspan="2" >
                            <p>NT.{{ cart.total}}</p>
                        </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="title">
                <img src="static\img\icon\ItemIcon058e.png" alt="" />
                <p>帳單資訊</p>
            </div>

            <div class="my-5 row justify-content-center">
                        <form class="col-md-6" @submit.prevent="createOrder">
                            <div class="form-group">
                            <label for="useremail">Email</label>
                            <input type="email" class="form-control" name="email" id="useremail"
                                v-model="form.user.email" placeholder="請輸入 Email" required>
                            <span class="text-danger"></span>
                            </div>
                        
                            <div class="form-group">
                            <label for="username">收件人姓名</label>
                            <input type="text" class="form-control" name="name" id="username"
                                v-model="form.user.name" placeholder="輸入姓名" >
                            <span class="text-danger"></span>
                            </div>
                        
                            <div class="form-group">
                            <label for="usertel">收件人電話</label>
                            <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話">
                            </div>
                        
                            <div class="form-group">
                            <label for="useraddress">收件人地址</label>
                            <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
                                placeholder="請輸入地址">
                            <span class="text-danger">地址欄位不得留空</span>
                            </div>
                        
                            <div class="form-group">
                            <label for="comment">留言</label>
                            <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                            </div>
                            <div class="text-right">
                            <button class="btn btn-danger" @click="createOrder">送出訂單</button>
                            </div>
                        </form>
                </div>
            <bottom></bottom>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/pages/navbar'
import car from '@/components/pages/car'
import bottom from '@/components/pages/bottom'

export default {
    data(){
        return{
            products:[],
            product:{},
            tempProduct:{},
            isNew:false,
            isLoading: false,
            cart:{},
            form:{
                user:{
                    name:'',
                    email:'',
                    tel:'',
                    address:'',
                },
                message:'',
            },
        };
    },
    components:{
        navbar,
        car,
        bottom,
    },
    methods:{
        getProducts(){
                const vm = this;
                const url = `${process.env.APIPATN}/api/${process.env.CUSTOMPATH}/products?page=:page`;
                vm.isLoading = true ;
                this.$http.get(url).then((response) => {
                console.log(response.data);
                vm.products = response.data.products ;
                vm.isLoading = false ;
                });
                },
        getProduct(id){
                        const vm = this;
                        const url = `${process.env.APIPATN}/api/${process.env.CUSTOMPATH}/product/${id}`;
                        vm.isLoading = true ;
                        this.$http.get(url).then((response) => {
                        vm.product = response.data.product;
                        $('#productModal').modal('show');
                        console.log(response);
                        vm.isLoading = false ;
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
        removeCatItem(id){
                const vm = this;
                const url = `${process.env.APIPATN}/api/${process.env.CUSTOMPATH}/cart/${id}`;
                vm.isLoading = true ;
                this.$http.delete(url).then(() => {
                vm.getCart();
                vm.isLoading = false ;
                });
        },
        createOrder(){
                const vm = this;
                const url = `${process.env.APIPATN}/api/${process.env.CUSTOMPATH}/order`;
                const order = vm.form;
                vm.isLoading = true ;
                this.$http.post(url,{data:order}).then((response) => {
                console.log('建立訂單',response);
                if(response.data.success){
                    vm.$router.push(`/comfirm/${response.data.orderId}`)
                }
                vm.isLoading = false ;
                });
        },
    },
    created(){
        this.getCart()
    },
};
</script> 

<style lang="scss" scoped>
.bgimg{
    background-repeat:no-repeat;
    background-image:url("https://www.monsterhunter.com/world-iceborne/assets/img/common/common/bg_pattern.jpg");
    background-size: cover;
    background-position: center;
}
.empty{
    margin: 20px 0;
    text-align: center;
    padding: 30px 0;
    background: #eee;
    border-radius: 10px;
    font-size: 16px;
    letter-spacing: 2px;
}
.checkout {
    max-width: 1080px;
    padding: 30px;
    box-sizing: border-box;
    margin: auto;
    background-color: whitesmoke;
}
.title {
    display: flex;
    justify-content: center;
    align-items: center;
        img {
        width: 60px;
        }
        p {
        font-size: 30px;
        font-weight: 900;
        padding: 0 20px;
        color: #444;
        letter-spacing: 4px;
        margin: 0;
        }
}
.cartlist {
    margin: 15px 0;
    padding: 20px 10px;
    border-radius: 10px;
        table {
        font-size: 14px;
        width: 100%;
        border-collapse: collapse; //摺疊邊框
        .item_title{
        width: 40%;
        }
        .item_count{
        width: 15%;
        }
        .item_price{
        width: 35%;
        }
        .item_delete{
        width: 10%;
        }
        tr {
        height: 40px;
        padding: 10px 0;
        border-top: 1px solid #ccc;
        }
        td {
        text-align: left;
        padding: 6px;
        font-weight: 200;
        color: #333;
        font-weight: normal;
        span{
            color:  black;
        }
        i {
            cursor: pointer;
        }
        .btn{
            height: 40px;
            width: 50px;
        }
        p{
        font-weight: 600;
        line-height: 30px;
        }
    }
        .total{
        font-size: 14px;
        color: #666;
        .onsale{
        font-size: 16px;
        color: red;
        }
    }
    }
}
</style>