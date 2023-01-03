(function(){
    var $body = document.querySelector('body');
    $body.classList.remove("no-js")
    $body.classList.add("js")
 
    
    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnables: 1024
    })

    var carouselImgs = new Carousel({
        container: '.laptop-slider .slidershow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
    var carouselQuotes = new Carousel({
        container: '.quote-slider',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()