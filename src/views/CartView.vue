<template>
    <div class="cart-view">
        <h4 class="H4"> سبد خرید شما</h4>
        <div class="cards">
            <div id="left-card">
                <div id="image">
                    <img :src="product.image" alt="">
                    <!-- <form>
                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                    <input type="number" id="number" value="0" />
                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                </form> -->
                </div>
                <div id="cart-buy">
                    <ul>
                        <li>
                            <b>{{product.title}}</b>
                        </li>
                        <li>
                            {{product.rating.rate}}
                        </li>
                        <li>
                            <P>از {{product.rating.count}} رای</P>
                        </li>
                        <li>
                            <p> دسته بندی : {{product.category}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="right-card">
                <p>جمع سبد</p>
                <p>{{product.price}}</p>
                <button class="btn">ادامه خرید</button>
            </div>
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

<style scoped>

</style>