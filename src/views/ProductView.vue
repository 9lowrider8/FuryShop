<template>
    <div class="product-view">
        <div id="up">
            <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/ca65c9fdce4fd3d742c14012cbb853f832cb0eea_1661582505.jpg?x-oss-process=image/quality,q_95"
                alt="">
            <div id="detail">
                <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit aliquam itaque. Ea placeat
                    provident quos qui vitae quidem, magni unde dolorum in ipsa, dolorem sunt laudantium voluptate
                    facilis iusto?
                </P>
            </div>
            <div id="buy">
                <h3>قیمت : 1650000</h3>
                <button class="btn">افزودن به سبد</button>
            </div>
        </div>
        <div id="down">

        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            productId: this.$route.params.id,
        }
    },
}

</script>

<style>
</style>