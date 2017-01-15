/**
 * Created by MrKadachigov on 29.11.2016.
 */
// var headPage = $('.curriculum-page').height();
// $('body,html').animate({scrollTop: headPage}, 100);

// $(document).ready(function() {
//     $('a[href^="#"]').click(function(){
//         var el = $(this).attr('href');
//         $('body').animate({
//             scrollTop: $(el).offset().top}, 1000);
//         return false;
//     });
// });

$(document).ready(function() {
    var btnUp = $('.button-up');
    var btnDown = $('.button-down');
    var down = $('#down');
    var up = $('#up');
    var curriculum = $('.curriculum-page');
    var mainPage = $('.main-page');
    var examples = $('.examples-page');

    btnUp.on('click',function (){
        curriculum.addClass('vision');
        mainPage.addClass('clean');
        // var top1 = curriculum.offset().top;
        // $('body').animate({scrollTop: top1}, 1000);
    });
    btnDown.on('click',function () {
        examples.addClass('vision');
        // mainPage.addClass('clean-fast');
        $('body,html').animate({scrollTop: examples.offset().top }, 1000);
        setTimeout(function(){examples.addClass('fix1')},1000);
        setTimeout(function(){mainPage.addClass('clean-fast');},1000);
        setTimeout(function(){examples.removeClass('fix1')},1200);

        // $('body').animate({scrollTop: examples.offset().top }, 1000);
        // var top1 = examples.offset().top;
        // $('body').animate({scrollTop:0});
        // $('body').animate({scrollTop: top1}, 1500);
        // $('body').animate({scrollTop:this.offset().top}, 10000);

    });
    down.on('click',function () {
        $('body,html').animate({scrollTop: examples.offset().top }, 1000);
        setTimeout(function(){examples.addClass('fix')},1000);
        setTimeout(function(){examples.removeClass('fix')},2100);
        setTimeout(function(){curriculum.removeClass('vision')},0);

        // $('body').animate({scrollTop: top1}, 1500);
        // curriculum.removeClass('vision');
        // setTimeout(function(){examples.removeClass('vision')},1000);
        // $('body').animate({scrollTop:0});
    });
    up.on('click',function () {
        setTimeout(function(){examples.removeClass('vision')},1000);

    });

});