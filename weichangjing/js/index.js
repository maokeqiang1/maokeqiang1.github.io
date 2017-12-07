var swiper = new Swiper('.swiper-container', {
    // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
    direction: 'vertical',

    pagination: {
        el: '.swiper-pagination',

        // 使分页器支持点击
        clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next'
    }
});