<template>
    <div class="bgimg">
    <loading :active.sync="isLoading" ></loading>
    <navbar></navbar>
        <div class="checkout">
            <div class="title">
                <p v-if="!order.is_paid"><img src="static\img\icon\PinClipart.com_clip-art-hunters_2216272.png" alt="" />確認訂單</p>
                <p v-else>付款完成，感謝您的購買！</p>
            </div> 
            <form  @submit.prevent="payOrder">
            <table class="mt-3 col-md-12" v-if="!order.is_paid">
                <thead>
                <th class="item_title">品名</th>
                <th class="item_count">數量</th>
                <th class="item_price">單價</th>
                </thead>
                <tbody>
                <tr v-for="item in order.products" :key="item.id">
                    <td class="align-middle">{{ item.product.title }}</td>
                    <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                    <td class="align-middle text-right">{{ item.final_total }}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="2" class="text-right">總計</td>
                    <td class="text-right">{{ order.total }}</td>
                </tr>
                </tfoot>
            </table>
            <div class="title">
                <p v-if="!order.is_paid"><img src="static\img\icon\ItemIcon058e.png" alt="" />訂單地址</p>
            </div>
            <table>
                <tbody>
                <tr>
                    <td  widtd="10%">Email</td>
                    <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                    <td>姓名</td>
                    <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                    <td>收件人電話:</td>
                    <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                    <td>收件人地址:</td>
                    <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                    <td>付款狀態</td>
                    <td>
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span v-else class="text-success">付款完成</span>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="text-center" v-if="order.is_paid === false">
                <button>確認付款去</button>
            </div>
            </form>
            <bottom></bottom>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/pages/navbar'
import bottom from '@/components/pages/bottom'

export default {

name: "custom_order",
data() {
    return {
        isLoading: false,
        orderId:'',
        order:{
            user:{}
            },
        };
    },
    components: {
    bottom,
    navbar,
},
methods: {
        getOrder() {
        const vm = this;
        const url = `https://vue-course-api.hexschool.io/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
        vm.isLoading = true;
        this.$http.get(url).then((response) => {
            vm.order = response.data.order;
            console.log(response);
            vm.isLoading = false;
        }).catch((e) => {});
        },
        payOrder() {
        const vm = this;
        const url = `https://vue-course-api.hexschool.io/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
        vm.isLoading = true;
        this.$http.post(url).then((response) => {
            console.log(response);
            if (response.data.success) {
            vm.getOrder();
            }
            vm.isLoading = false;
        });
        },
},
created(){
    this.orderId =  this.$route.params.orderId
    this.getOrder();
},
};
</script>

<style scoped lang="scss">
.bgimg{
    background-repeat:no-repeat;
    background-image:url("https://www.monsterhunter.com/world-iceborne/assets/img/common/common/bg_pattern.jpg");
    background-size: cover;
    background-position: center;
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
</style>