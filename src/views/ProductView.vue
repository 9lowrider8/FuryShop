<template>
    <div class="product-view">
        <div id="up">
            <img :src="product.image" alt="">
            <div id="detail">
                <div id="description">
                    <span><i class="fa fa-sun-o" aria-hidden="true">
                            ویژگی ها
                        </i>
                    </span>
                    <p>{{product.description}}</p>
                    <!-- <ul> 
                        <li>موتور پرقدرت</li>
                        <li>نگهداری شارژ بالا</li>
                        <li>بدنه مقاوم</li>
                        <li>ساخت آلمان</li>
                    </ul> -->
                </div>
                <div id="delivery">
                    <span>ارسال بالای 500هزار تومان به صورت رایگان است.</span>
                    <img src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg"
                        alt="">
                </div>
            </div>
            <div id="buy">
                <ul>
                    <li>
                        <p>نام: {{product.title}}</p>
                    </li>
                    <li>
                        <p>{{product.rating.rate}}</p>
                    </li>
                    <li>
                        <P>از {{product.rating.count}} رای</P>
                    </li>
                    <li>
                        <p>
                        دسته بندی : {{product.category}}
                        </p>
                    </li>
                </ul>
                <h3>قیمت : {{product.price}}</h3>
                <router-link :to="{ path: '/cart/'+ product.id}">
                    <button class="btn">افزودن به سبد</button>
                </router-link>
            </div>
        </div>
        <div id="down">
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            id: this.$route.params.id,
            product: []
        }
    },
    created() {
        axios
            .get('https://fakestoreapi.com/products/' + this.id)
            .then(response => (
                this.product = response.data
            ));
    }
}

</script>

<style>

</style>