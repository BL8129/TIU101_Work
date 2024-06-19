$(function(){
    var M = 1020
    console.log(M)

    // 讀取頭尾
    $('.header-page').load('header.html')
    $('.footer-page').load('footer.html')

    // 回頂部
    $('.goHome').click(function(){
        $('html, body').animate({scrollTop: 0},500)
    })

    // 節目介紹選單
    var mov1 = $('.contain').offset().top
    var mov2 = $('.about').offset().top
    var mov3 = $('.star').offset().top
    var mov4 = $('.howToUseTicket').offset().top
    var mov5 = $('.howToBuyTicket').offset().top

    $('.btn1').click(function(){
        $('html, body').animate({scrollTop: mov1 - 80},500)
        return false
    })
    $('.btn2').click(function(){
        $('html, body').animate({scrollTop: mov2 - 80},500)
        return false
    })
    $('.btn3').click(function(){
        $('html, body').animate({scrollTop: mov3 - 80},500)
        return false
    })
    $('.btn4').click(function(){
        $('html, body').animate({scrollTop: mov4 - 80},500)
        return false
    })
    $('.btn5').click(function(){
        $('html, body').animate({scrollTop: mov5 - 80},500)
        return false
    })

})