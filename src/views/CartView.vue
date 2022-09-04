<template>
    <div id="cart-view">
        <h4> سبد خرید شما</h4>
        <div id="left-card">
            <div id="image">
                <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/ca65c9fdce4fd3d742c14012cbb853f832cb0eea_1661582505.jpg?x-oss-process=image/quality,q_95"
                    alt="">
                <form>
                    <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                    <input type="number" id="number" value="0" />
                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                </form>
            </div>
            <div id="details">
                <ul>
                    <li>
                        <h6><b>محصول مورد نظر</b></h6>
                    </li>
                    <li>
                        <h6>گارانتی 20 ماهه شرکت تکنو</h6>
                    </li>
                    <li>
                        <h6>فروشنده نوا مارکت</h6>
                    </li>
                    <li>
                        <h6>موجود در انبار</h6>
                    </li>
                </ul>
            </div>
        </div>
        <div id="right">
            <div id="right-card">
                <p>جمع سبد</p>
                <p>1650000</p>
            </div>

        </div>
    </div>
</template>

<script>
    
export default {

}
</script>

<style>
</style>