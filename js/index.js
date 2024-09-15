// let isMobile = true;
// if($(window).width() <=480){
//     isMobile =true
// }else{
//     isMobile=false
// }

const isMobile = $(window).width() <= 480;
const $slide = $('#Slide')
const $slideGrid = $slide.find('.grid');
const $slideGridItems = $slide.children();
const $nav = $('#Nav');
const $navBtns = $nav.children();
let index = 0
let colume = index % 3;
// index %  求餘數
let row = Math.floor(index / 3);
// Math.floor無條件捨去 / 求商



let dX = -100 * colume;
let dY = -100 * row;

function setGrid() {
    if (isMobile === true) {
        $slideGrid.addClass('grid-2')
        return;
    }
    $slideGrid.addClass('grid-3')


}

function setscroll() {
    $slideGridItems.scroll(function () {
        if (!isMobile) return;

        if ($(this).scrollTop() === 0) {
            $nav.removeClass('nav-active');
            return;
        }
        $nav.addClass('nav-active');
    })
}

function setInit() {
    setGrid();
    $navBtns.eq(index).addClass("nav-btn-active");

    $slide.css('transform', `translate(${dX}vw,${dY}vh)`)
}

function setEvent() {
    setscroll();
    setFancybox();
}

function setFancybox() {
    const $anchors = $slideGrid.find('a');

    $anchors.fancybox({
        protect: true,
        transitionDuration: 1000,
        animationDuration: 1000,
        infobar: true,
        loop: true,
        transitionEffect: 'circular',
        arrows: true,
        keyboard: true,
        slideShow: {
            autoStart: false,
            speed: 2000,
        },
        media: {
            youtube: {
                params: {
                    autoplay: false,
                }
            }
        }
    })
}


// $navBtns.eq(0).click(function(){
//     $slide.css('transform','translate(0,0)')
// })
// $navBtns.eq(1).click(function(){
//     $slide.css('transform','translate(-100vw,0)')
// })
// $navBtns.eq(2).click(function(){
//     $slide.css('transform','translate(-200vw,0)')
// })
// $navBtns.eq(3).click(function(){
//     $slide.css('transform','translate(0,-100vh)')
// })
// $navBtns.eq(4).click(function(){
//     $slide.css('transform','translate(-100vw,-100vh)')
// })
// $navBtns.eq(5).click(function(){
//     $slide.css('transform','translate(-200vw,-100vh)')
// })

$navBtns.click(function () {
    if (index === $(this).index()) return;
    index = $(this).index()

    //     if(index === 0){
    //         $slide.css('transform','translate(0,0)')
    //     }else if(index ===1){
    //         $slide.css('transform','translate(-100vw,0)')
    //     }else if(index ===2){
    //         $slide.css('transform','translate(-200vw,0)')
    //     }else if(index ===3){
    //         $slide.css('transform','translate(0,-100vh)')
    //     }else if(index ===4){
    //         $slide.css('transform','translate(-100vw,-100vh)')
    //     }else if(index ===5){
    //         $slide.css('transform','translate(-200vw,-100vh)')
    //     }

    // switch (index) {
    //     case 0:
    //         $slide.css('transform', 'translate(0,0)')
    //         break;
    //     case 1:
    //         $slide.css('transform','translate(-100vw,0)')
    //         break;
    //     case 2:
    //         $slide.css('transform','translate(-200vw,0)')
    //         break;
    //     case 3:
    //         $slide.css('transform','translate(0,-100vh)')
    //         break;
    //     case 4:
    //         $slide.css('transform','translate(-100vw,-100vh)')
    //         break;
    //     case 5:
    //         $slide.css('transform','translate(-200vw,-100vh)')
    //         break;
    // }

    colume = index % 3;
    // index %  求餘數 
    row = Math.floor(index / 3);
    // Math.floor無條件捨去 / 求商



    dX = -100 * colume;
    dY = -100 * row;

    $slide.css('transform', `translate(${dX}vw,${dY}vh)`)

    $(this).addClass("nav-btn-active").siblings().removeClass('nav-btn-active');
})

setInit();

setEvent();





