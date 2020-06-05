/*!  Tue Jul 24 2018 23:55:36 | tstar | tstar design by blackj | blackj */
$(document).ready(function(){

    new WOW().init();
    HamburgerClick();
    HeaderSearch();
    NavSlide();
    FooterSlider();
    KvSlickSlide();
    EmergenceInit();
    header.initianl();
    $(window).scroll(function(){
      header.initianl();
    });

    KvThemeSlide();
    BackToTop();
    AnchorSlide();
    CheckAnchorShow();

    // if($.support.touch){
    //     JqueryTouchRewrite();
    // }
    if($('.ts-header__component').length){
        $('.navbar.ts-header.ts-header--shadow.ts-header--sub').addClass('ts-header--has-component');
        HeaderComponent();
    }

    // ts-all-rate.js function call
    AllRateSlick();
    SkewSlide();
    OffsetScroll();

    // ts-electric.js function call
    ElectricSlickMobile();
    ElectricSlickAll();

    // ts-news.js function call
    TsNewsLinkClick()
    
    // call datepicker
    $('[datepicker]').datepicker({
        format:'yyyy/mm/dd'
    });

    $('[datepicker-duration]').datepicker({
        format:'yyyy/mm/dd'
    });
    $('[datepicker-duration] .input-daterange__start,[datepicker-duration] .input-daterange__end').on('focus',function(){
        $(this).parents(['datepicker-duration']).addClass('is-focus');
    });
    $('[datepicker-duration] .input-daterange__start,[datepicker-duration] .input-daterange__end').on('blur',function(){
        $(this).parents(['datepicker-duration']).removeClass('is-focus');
    });

    // ts-number-input
    TsNumberInput();

    // slick-article
    SlickArticle();

    // youtube
    YoutubeVideoIframe();

     //call modal-pages
     ModalPages();

     // 三欄用
     $('[slick-slider-columns3]').slick({
         mobileFirst: true,
         dots: false,
         infinite: false,
         slidesToShow: 1,
         centerMode: true,
         arrows: false,
         responsive: [
             {
               breakpoint: 992,
               settings: {
                 centerMode: false,
                 slidesToShow: 3,
               }
             },
         ]
     });

});

$(window).resize(function(){
    AnchorSlide();
    CheckAnchorShow();
    FooterSlider();
     /* 頁中頁 */
     ModalPages();

    if($('.ts-header__component').length){
        // $('.navbar.ts-header.ts-header--shadow.ts-header--sub').addClass('ts-header--has-component');
        HeaderComponent();
    }
   
});

// Sun modify
header = {
  $block       : '',
  _scrollTop   : 0,
  initianl : function(){
    header.$block     = $('header.ts-header');
    header._scrollTop = $(window).scrollTop();
    if( header._scrollTop>10 ){
      header.$block.addClass('notStickToTheTop');
      if($('.ts-header__component').length){
          $('.ts-header__component').addClass('stickyTop');
      }
    }else{
      header.$block.removeClass('notStickToTheTop');
      if($('.ts-header__component').length){
        $('.ts-header__component').removeClass('stickyTop');
    }
    }
  },
}

// 漢堡選單
function HamburgerClick(){
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        if($(this).hasClass('is-active')) {

            $('.hamburger').addClass('is-active');
			NavShow(true);
            $('.ts-main, .ts-footer, .ts-footer-new, .ts-adwrap, .ts-header').addClass('blur');
            if( $('.ts-header__component').length){
                $('.ts-header__component').addClass('blur');
            }
			$('body').css('overflow','hidden');
        }
        else {
            $('.hamburger').removeClass('is-active');
			NavShow(false);
            $('.ts-main, .ts-footer, .ts-footer-new, .ts-adwrap, .ts-header').removeClass('blur');
            if( $('.ts-header__component').length){
                $('.ts-header__component').removeClass('blur');
            }
			$('body').css('overflow','');
        }
    });

    $('.ts-navcover').click(function(){
		$('.hamburger').removeClass('is-active');
		$('body').css('overflow','');
        NavShow(false);
    });

    if($('.ts-subnav__cover').length){
        $('.ts-subnav__cover').click(function(){
			$('.hamburger').removeClass('is-active');
			$('body').css('overflow','');
            NavShow(false);
			$('.ts-main, .ts-footer, .ts-footer-new, .ts-adwrap, .ts-header').removeClass('blur');
			if( $('.ts-header__component').length){
                $('.ts-header__component').removeClass('blur');
            }
        });
    }

}

// 控制nav出現
function NavShow(p){
    if($('.ts-nav').length){
        if(p) {
            $('.ts-nav').css('right','0');
            $('.ts-navcover').fadeIn(300);
        }
        else{
            $('.ts-nav').css('right','-320px');
            $('.ts-navcover').fadeOut(300);
        }
    }

    if($('.ts-subnav').length){
        if(p) {
            $('.ts-subnav').addClass('show');
            $('.ts-subnav__cover').show();
        }
        else{
            $('.ts-subnav').removeClass('show');
            $('.ts-subnav__cover').hide();
        }
    }

}

// nav menu slide
function NavSlide(){
    if($('.ts-nav').length){
        $('.ts-nav__list__item__title .ts-icons-plus').click(function(){
            $('.ts-nav__list__item__title .ts-icons-plus').removeClass('active');
            $('.ts-nav__list__item__content').slideUp(200);

            if($(this).parent().next('.ts-nav__list__item__content').css('display') == 'none'){
                $(this).addClass('active');
                $(this).parent().next().slideDown(200);
            }
            else{
                $(this).parent().next().slideUp(200);
                $(this).removeClass('active');
            }

        });
    }

    if($('.ts-subnav').length){
        // $('.ts-subnav__list__item__title .ts-icons-triangle-down').click(function(){
        //     $('.ts-subnav__list__item__title .ts-icons-triangle-down').removeClass('active');
        //     $('.ts-subnav__list__item__content').slideUp(200);

        //     if($(this).parent().next('.ts-subnav__list__item__content').css('display') == 'none'){
        //         $(this).addClass('active');
        //         $(this).parent().next().slideDown(200);
        //     }
        //     else{
        //         $(this).parent().next().slideUp(200);
        //         $(this).removeClass('active');
        //     }

		// });
		$('.ts-subnav__list__item__title--mobile').click(function(){
            $('.ts-subnav__list__item__title .ts-icons-triangle-down').removeClass('active');
            $('.ts-subnav__list__item__content').slideUp(200);

            if($(this).next('.ts-subnav__list__item__content').css('display') == 'none'){
                $(this).addClass('active');
                $(this).next().slideDown(200);
            }
            else{
                $(this).next().slideUp(200);
                $(this).removeClass('active');
            }

        });
    }


}

// 正確的版本
// header input
// function HeaderSearch(){
//     $('.ts-header__wrap__inner__search .ts-icons-search').click(function(){
// 		if($('.ts-header__wrap__inner__search .navbar-form').hasClass('hide')) {
// 			$('.ts-header__wrap__inner__search .navbar-form').removeClass('hide');
// 			$('.ts-header__wrap__inner__search__input').focus();
// 		}
// 		else {
// 			$('.ts-header__wrap__inner__search .navbar-form').addClass('hide');
// 		}
//     });

// 	$(document).click(function(e){
// 		var $target = $(e.target);
// 		if( !($target.hasClass('ts-header__wrap__inner__search__input') || $target.hasClass('ts-header__wrap__inner__search__btn')) ) {
// 			$('.ts-header__wrap__inner__search .navbar-form').addClass('hide');
// 		}
// 	});
// }

// // 暫時用
// header input
function HeaderSearch(){
    $('.ts-header__wrap__inner__search .ts-icons-search').click(function(){
		if($('.ts-header__wrap__inner__search .navbar-form').hasClass('hide')) {
			$('.ts-header__wrap__inner__search .navbar-form').removeClass('hide');
			$('.ts-header__wrap__inner__search .navbar-form .form-control').focus();
		}
		else {
			$('.ts-header__wrap__inner__search .navbar-form').addClass('hide');
		}
    });

	$(document).click(function(e){
		var $target = $(e.target);
		if( !($target.hasClass('form-control') || $target.hasClass('ts-icons-search')) ) {
			$('.ts-header__wrap__inner__search .navbar-form').addClass('hide');
		}
	});
}

// mobile footer
function FooterSlider(){

	// 舊的
	if($(window).width() >= 992){
		$('.ts-footer__sitemap__title').unbind('click');
		$('.ts-footer__sitemap__title').next().show();
	}
	else {
		$('.ts-footer__sitemap__title').unbind().click(function(){
			$(this).next().slideToggle(200);
		});
	}

	// 新的
    if($(window).width() >= 992){
        $('.ts-footer-new__sitemap__title').unbind('click');
        $('.ts-footer-new__sitemap__title').next().show();
        $('.ts-footer-new__sitemap__title').attr('data-click',false);
    }
    else{
        if(!$('.ts-footer-new__sitemap__title').attr('data-click') || $('.ts-footer-new__sitemap__title').attr('data-click')  == 'false'){
            $('.ts-footer-new__sitemap__title').attr('data-click',true);
            $('.ts-footer-new__sitemap__title').click(function(){
                $(this).next().slideToggle(200);
                $(this).parent().siblings('.col-xs-6').find('.ts-footer-new__sitemap__title').next().slideToggle(200);
            });
        }
    }
}

// slider
function KvSlickSlide(){
	// 首頁 slider
    $('.ts-kv >.slick').slick({
        arrows:true,
        autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		dots: true
    });

    /* 次首頁 Slick Slide */
    // $('.ts-subkv >.slick').slick({
    //     arrows:true
    // });

    $('.ts-subsection--plan .slick').slick({
        arrows:true,
        dots:true
    });
}

// 次首頁錨點要不要出現
function CheckAnchorShow(){
    if($('.ts-subkv__bn-anchor .ts-subkv__bn-anchor__wrap a').length){
        if($(window).width() < 768){
            var lastScrollTop = 0;
            $(window).bind('scroll.anchorScroll',function(){
                var st = $(this).scrollTop();
                // console.log(st)
                if (st > lastScrollTop){
                    // downscroll code
                    if(st > $('.ts-subsection').eq(0).offset().top){
                        $('.ts-subkv__bn-anchor').addClass('active');
                        $('.ts-header--sub').hide();
                        $('.hamburger--sub').hide();
                    }
                } else {
                    // upscroll code
                    // console.log(st-lastScrollTop);
                    if(lastScrollTop - st > 10){
                        $('.ts-subkv__bn-anchor').removeClass('active');
                        $('.ts-header--sub').show();
                        $('.hamburger--sub').show();
                    }
                }
                lastScrollTop = st;
            });
            var dgAnchor = $('.draggable .ts-subkv__bn-anchor__wrap'),
            dgWidth = 0;

            
            dgAnchor.draggable({
                axis:'x',
                containment:'draggable'
            })
            dgAnchor.find('a').each(function(index) {
                dgWidth += parseInt($(this).width(), 10);
            });
            dgAnchor.on( "drag", function( event, ui ) {
                if (ui.offset.left > 0) {
                    ui.position.left = 0;
                }

                if (ui.position.left < -(dgWidth - $(window).width())) {
                    ui.position.left = -(dgWidth - $(window).width());
                }
            });
            
            
        }
        else{
            $(window).unbind('.anchorScroll');
            $('.ts-header--sub').show();
            $('.hamburger--sub').show();
        }
    }

}

// 次首頁錨點
function AnchorSlide(){
    if($('.ts-subkv__bn-anchor .ts-subkv__bn-anchor__wrap a').length){
        var anchorHeight;
        $('.ts-subkv__bn-anchor a').on('click touchend',function(){
            var elem = $('*[data-id='+ $(this).data('offset') +']');
            var place = elem.offset().top;
            $('html,body').stop().animate({
                scrollTop: place + 1
            },500);
        });
        if($(window).width() <= 768){
            var anchorLeft = [];
            $('.ts-subkv__bn-anchor a').each(function(){
                anchorLeft.push($(this).offset().left);
            });
            // console.log(anchorLeft)
            $(window).scroll(function(){
                anchorHeight = $('.ts-subkv__bn-anchor').height();
                var winTop = $(window).scrollTop();

                $('*[data-id]').each(function(i){
                    var elem = $('.ts-subkv__bn-anchor a[data-offset='+ $(this).data('id') +']');
                    if(winTop >= $(this).offset().top && winTop < $(this).offset().top + $(this).height()){
                        if(!elem.hasClass('active')){
                            elem.addClass('active');
                            // console.log(anchorLeft[elem.index()])
                            setTimeout(function(){
                                var po = anchorLeft[elem.index()];
                                if(po > 0){
                                    if(po > $('.ts-subkv__bn-anchor__wrap').width() - $(window).width()){
                                        po = '-'+($('.ts-subkv__bn-anchor__wrap').width() - $(window).width());
                                    }
                                    else{
                                        po = '-'+po;
                                    }

                                }
                                $('.ts-subkv__bn-anchor__wrap').css('left', po + 'px');
                            },100)
                        }
                    }
                    else{
                        elem.removeClass('active');
                        // $('.ts-subkv__bn-anchor__wrap').css('left', '-'+ elem.offset().left +'px');
                    }
                });
            });
        }

    }
}

// 出現時出現動態
function EmergenceInit(){
    emergence.init({
        reset:false,
        offsetTop: 100,
        offsetRight: 0,
        offsetBottom: 0,
        offsetLeft: 0,
    });
}

// 回Top
function BackToTop(){
    if($('.ts-subkv').length){
        var kvOffset=$('.ts-subkv').offset().top + $('.ts-subkv').height();
    }
    if($('.ts-kv').length){
        var kvOffset=$('.ts-kv').offset().top + $('.ts-kv').height();
    }

    var wH = $(window).height();
    if($('.ts-backcontain').length){
        $(window).scroll(function(){
            var wTop = $(window).scrollTop();
            var ftOffset= $('.ts-footer .ts-footer__bottom, .ts-footer-new .ts-footer-new__bottom').offset().top;
            if(wTop > kvOffset){
                $('.ts-backcontain').fadeIn(200);
            }
            else{
                $('.ts-backcontain').fadeOut(200);
            }
    
            if((wTop + wH) > ftOffset){
                $('.ts-backcontain').removeClass('fixed');
            }
            else{
                $('.ts-backcontain').addClass('fixed');
            }
        });
        $('.ts-backcontain .backtotop').click(function(){
            $('html,body').stop().animate({
                scrollTop:0
            },500);
        });
    }
}

// 滑動主題 slide
function KvThemeSlide(){
    $('.ts-subsection__skewwords .ts-icons-arrow-right').click(function(){
        $(this).parents('.ts-subsection__skewwords').next('.ts-subsection__skewslide').addClass('show');
    });
    $('.ts-subsection__skewslide .ts-icons-plus').click(function(){
        $(this).parents('.ts-subsection__skewslide').removeClass('show');
    })
    $('.ts-subsection__skewslide .ts-icons-arrow-right').click(function(){
        $(this).parents('.ts-subsection__skewslide').removeClass('show');
    })
}

function HeaderComponent(){

    var status = $('.ts-header__component .ts-header__component__dropdown').data('click');
    // console.log(status)
    if($(window).width() < 768){
        // console.log('768');

        if(!$('.ts-header__component .ts-header__component__dropdown').data('click') ){
            // console.log('asasa')
            $('.ts-header__component .ts-header__component__dropdown').data('click',true);
            // console.log($('.ts-header__component .ts-header__component__dropdown').data('click'))
            $(window).scroll(function(){
                if($(window).scrollTop() === 0){
                    if($('.ts-header__component .ts-header__component__dropdown').hasClass('active')){
                        $('.ts-header').addClass('notStickToTheTop');
                        $('.ts-header__component').addClass('stickyTop');
                    }
                    else{
                        setTimeout(function(){
                            $('.ts-header').removeClass('notStickToTheTop');
                            $('.ts-header__component').removeClass('stickyTop');
                        },300)

                    }
                }
            });
            $('.ts-header__component .ts-header__component__dropdown').click(function(){
                $(this).toggleClass('active');
                $(this).next('.ts-header__component__dropbox').slideToggle(250);
                if($(window).scrollTop() === 0){
                    if($(this).hasClass('active')){
                        $('.ts-header').addClass('notStickToTheTop');
                        $('.ts-header__component').addClass('stickyTop');
                    }
                    else{
                        setTimeout(function(){
                            $('.ts-header').removeClass('notStickToTheTop');
                            $('.ts-header__component').removeClass('stickyTop');
                        },250)

                    }
                }

            });
        }
    }
    else{
		// console.log('> 768');
        $('.ts-header__component .ts-header__component__dropdown').data('click',false);
        $('.ts-header__component .ts-header__component__dropdown').unbind('click');
        // $('.ts-header__component__dropbox').show();
    }

}

// ts-all-rate.js
function AllRateSlick(){
    if($('.ts-allrate .row-slick').length){
        $('.ts-allrate .row-slick').slick({
            slidesToShow:3,
            arrows:false,
            dots:true,
            responsive:[
                {
                    breakpoint:767,
                    settings:{
                        slidesToShow:1
                    }
                }
            ]
        })
    }
}
function OffsetScroll(){
    // $('.offsetScroll').on('click touchend',function(){
	$('.offsetScroll').on('click',function(){
		var elem = $('*[data-id='+ $(this).data('offset') +']');
        var place = elem.offset().top;
        $('html,body').stop().animate({
            scrollTop: place
        },2000);
    });
}

function SkewSlide(){
    $(window).resize(function(){
        if($(window).width() > 767){
            $('body').css('overflow','');
        }
    });
    var fn = {
        init: function(){
            $('.open-skewslide .ts-icons-arrow-right').unbind('click');
            $('.open-skewslide-outer .ts-icons-arrow-right').unbind('click');
            $('.open-skewslide').click(function(){
                var container = $(this).parents('.ts-subsection').get(0);
                fn.windowScroll(container,function(){
                    $(container).find('.ts-subsection__skewslide').addClass('show');
                });

            });
            $('.open-skewslide-outer').click(function(){
                var container = $(this).parents('.ts-subsection').get(0);
                fn.windowScroll(container,function(){
                    $(container).find('.ts-subsection__skewslide').addClass('show');
                });
            });

            // 第二版
            $('.open-skewslide-click').click(function(){
                var container = $(this).parents('.ts-subsection').get(0);
                fn.windowScroll(container,function(){
                    $(container).find('.ts-subsection__skewslide').addClass('show');
                });
            });
            // 第二版

            $('.ts-subsection__skewslide .ts-icons-plus').click(function(){
                if($(window).width() < 768){
                    $('body').css('overflow','');
                }
                $(this).parents('.ts-subsection__skewslide').removeClass('show');
            });
        },
        windowScroll:function(e,callback){
            var offset = $(e).offset().top;
            if($(window).width() < 768){
                $('body').css('overflow','hidden');
            }

            $('html,body').stop().animate({
                scrollTop: offset - $('.ts-header').outerHeight()
            },500,function(){
                callback();
            });
        }
    }
    fn.init();
}

// ts-electric.js
function ElectricSlickAll() {
    if($('.ts-electric-page__slick-all').length){
        $('.ts-electric-page__slick-all').slick({
            arrows:true,
            dots:false,
            infinite:false,
            mobileFirst:true,
            responsive:[
                {
                    breakpoint:768,
                    settings:{
                        slidesToShow:2
                    }
                },
                {
                    breakpoint:992,
                    settings:{
                        slidesToShow:4
                    }
                }
            ]
        });
    }
}
function ElectricSlickMobile(){
    if($('.ts-electric-page__slick-mobile').length){
        if($(window).width() < 768){
            $('.ts-electric-page__slick-mobile').slick({
                arrows:true,
                mobileFirst:true,
                infinite:false,
                responsive:[
                    {
                        breakpoint:768,
                        settings:'unslick'
                    }
                ]
            });
        }
        $(window).on('resize orientationChange',function(){
            if($(window).width() < 768){
                if(!$('.ts-electric-page__slick-mobile').hasClass('slick-initialized')){
                    $('.ts-electric-page__slick-mobile').slick({
                        arrows:true,
                        mobileFirst:true,
                        infinite:false,
                        responsive:[
                            {
                                breakpoint:768,
                                settings:'unslick'
                            }
                        ]
                    });
                }
            }
    
        });
    }
}

// ts-news.js
function TsNewsLinkClick(){
    if($('.ts-news').length){
        $('.ts-news__list__link').click(function(){
            if($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next('.ts-news__contentbox').slideUp();
            }
            else {
                $(this).addClass('active');
                $(this).next('.ts-news__contentbox').slideDown();
                var $otherListLink = $(this).parent().siblings().find('.ts-news__list__link.active')
                $otherListLink.removeClass('active');
                $otherListLink.next('.ts-news__contentbox').slideUp();
            }
        });
    }
}

// number input
function TsNumberInput(){
    if($('.ts-number-input').length){
        $('.ts-number-input__btn').click(function(e){
            e.preventDefault();
            if($(this).parents('.ts-number-input').hasClass('ts-number-input--disabled')){
                return false;
            }
            
            fieldName = $(this).attr('data-field');
            type      = $(this).attr('data-type');

            var input = $(".ts-number-input input[name='"+fieldName+"']");
            var unit = input.attr('data-unit');
            var mount = parseInt(input.attr('data-mount'));
            var container = $(".ts-number-input label[for='"+fieldName+"']");
            var currentVal = parseInt(input.val());
            
            if (!isNaN(currentVal)) {
                if(type == 'minus') {
                    
                    if(currentVal > input.attr('min')) {
                        input.val(currentVal - mount).change();
                        container.html(currentVal - mount + '<span>'+ unit +'</span>').change();
                    } 
                    if(parseInt(input.val()) == input.attr('min')) {
                        $(this).attr('disabled', true);
                    }
        
                } else if(type == 'plus') {
        
                    if(currentVal < input.attr('max')) {
                        input.val(currentVal + mount).change();
                        container.html(currentVal + mount + '<span>'+ unit +'</span>').change();
                    }
                    if(parseInt(input.val()) == input.attr('max')) {
                        $(this).attr('disabled', true);
                    }
        
                }
            } else {
                input.val(0);
            }
        });
        $('.ts-number-input .form-control').focusin(function(){
           $(this).data('oldValue', $(this).val());
        });
        $('.ts-number-input .form-control').change(function() {
            
            minValue =  parseInt($(this).attr('min'));
            maxValue =  parseInt($(this).attr('max'));
            valueCurrent = parseInt($(this).val());
            
            name = $(this).attr('name');
            if(valueCurrent >= minValue) {
                $('.ts-number-input__btn[data-type="minus"][data-field="'+name+'"]').removeAttr('disabled')
            } else {
                // alert('Sorry, the minimum value was reached');
                $(this).val($(this).data('oldValue'));
            }
            if(valueCurrent <= maxValue) {
                $('.ts-number-input__btn[data-type="plus"][data-field="'+name+'"]').removeAttr('disabled')
            } else {
                // alert('Sorry, the maximum value was reached');
                $(this).val($(this).data('oldValue'));
            }
            
            
        });
        $(".input-number").keydown(function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
                    // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) || 
                    // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                        // let it happen, don't do anything
                        return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    }
}

function SlickArticle(){
    if($('[slick-article-3]').length){
        if(!$('[slick-article-3]').hasClass('slick-initialized')){
            $('[slick-article-3]').slick({
                infinite:false,
                slidesToShow:3,
                arrows:true,
                dots:true,
                responsive:[
                    {
                        breakpoint:991,
                        settings:{
                            slidesToShow:1,
                            centerMode:true,
                            centerPadding:'40px',
                            arrows:false,
                            dots:false
                            
                        }
                    }
                    
                ]
            });
        }
        else{
            $('[slick-article-3]').slick('setPosition');
        }
        
    }
    if($('[slick-article-2]').length){
        if(!$('[slick-article-2]').hasClass('slick-initialized')){
            $('[slick-article-2]').slick({
                infinite:false,
                slidesToShow:2,
                arrows:true,
                dots:true,
                responsive:[
                    {
                        breakpoint:991,
                        settings:{
                            slidesToShow:1,
                            centerMode:true,
                            centerPadding:'40px',
                            arrows:false,
                            dots:false
                            
                        }
                    }
                    
                ]
            });
        }
        else{
            $('[slick-article-2]').slick('setPosition');
        }
        
    }
}

function YoutubeVideoIframe() {

    var $fn = this.YoutubeVideoIframe;
    
    if($('.ts-video--youtube').length){
        
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";

        var firstScriptTag = document.getElementsByTagName('script')[0];

        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        $fn.playVideo = function() {
            return ;
        };
        
        $(window).load(function(){
            var dtd = $.Deferred();
            var player = [],playerCover = [];
            
            $('.ts-video--youtube').each(function(i){
                var $this = $(this);
                var number = i+1;
                // var src = $this.find('.ts-video__container iframe').attr('src');
               
                if(number < 10) number = '0'+ number;
                if(!$this.find('.ts-video__container div').attr('data-id')){
                    $this.find('.ts-video__container div').attr('data-id','YoutubeVideo'+ number);
                    $this.find('.ts-video__cover-img img').attr('data-target','YoutubeVideo'+ number);
                    $this.find('.ts-video__cover-img img').attr('data-target-index', i);
                }
                // if(src.indexOf('?') > 0) if(src.indexOf('enablejsapi') < 0) src += '&enablejsapi=1';
                // else src += '?enablejsapi=1';

                // $this.find('.ts-video__container iframe').attr('src',src);
                
                   
                // setTimeout(function(){
                    var srcValue = $('[data-id=YoutubeVideo'+number+']').get(0).attributes.src.value, strs = '', videoId = '';
                    var url = new URL(srcValue);
                    var v = url.searchParams.get("v");
                    if (v != null && v != '' && v != undefined) {
                        videoId = v;
                    } else {
                        strs = srcValue.split('?')[0].split("/");
                        videoId = strs[strs.length-1];
                    }
                    console.log(videoId);
                    player[i] = new YT.Player($('[data-id=YoutubeVideo'+number+']').get(0) ,{
                        videoId: videoId,
                        events: {
                          'onStateChange': onPlayerStateChange
                        }
                    });
                // },250);
                if( $('.ts-video--youtube').length -1 == i) {
                    // console.log('create youtube done.')
                    dtd.resolve();
                }
            });

            $.when(dtd).then(function(){
                // setTimeout(function(){
                $fn.playVideo = function(e){
                    // console.log('play');

                    var $img = $(e);
                    $img.addClass('is-fade');
                    setTimeout(function(){
                        $img.addClass('is-hide');
                    },300);
                    var index =$img.data('target-index');
                    // console.log(player);
                    console.log(player[index]);
                    if(typeof player[index].playVideo == 'function') {
                        player[index].playVideo();
                    }
                    
                }
                   
                // },250);
                $fn.stopAllVideo = function(){
                    for(var i = 0;i < player.length;i++) {
                        console.log(player[i]);
                        player[i].stopVideo();
                        $('.ts-video--youtube').find('.ts-video__cover-img img').removeClass('is-fade is-hide');
                    }
                }
            });
            
            function onPlayerStateChange(event) {
                if (event.data == 0) {
                    $(event.target.a).parents('.ts-video--youtube').find('.ts-video__cover-img img').removeClass('is-fade is-hide');
                }
            };
            
        });
    }
}

function ModalPages(){
    if($('.ts-modal-pages').length){
        $('body').css('height','auto');
        $('[call-modal-pages]').click(function(e){
            e.preventDefault();
            
            var $this = $(this),
            animationEndDefer = $.Deferred(),
            modalTarget = '#' + $this.attr('data-target'),
            modalChild = modalTarget + ' .ts-modal-pages__content',
            modalClose = modalTarget + ' .ts-modal-pages__control__close',
            modalDuration = $this.attr('data-duration') || 800,
            lastScrollTop = $(window).scrollTop(),
            mainHeight = $('.ts-modal-pages__main').outerHeight(),
            durationStyles = {
                '-webkit-animation-duration':modalDuration + 'ms',
                '-moz-animation-duration':modalDuration + 'ms',
                '-ms-animation-duration':modalDuration + 'ms',
                'animation-duration':modalDuration + 'ms'
            },
            delayStyles = {
                '-webkit-transition-delay':modalDuration + 'ms',
                '-moz-transition-delay':modalDuration + 'ms',
                '-ms-transition-delay':modalDuration + 'ms',
                'transition-delay':modalDuration + 'ms'
            };
            // if($(modalTarget).find('.ts-video--youtube').length && window.YoutubeVideoIframe.stopAllVideo) {
            //     window.YoutubeVideoIframe.stopAllVideo();
            // }
            $(modalChild).css(durationStyles);
            $(modalClose).css(durationStyles);
            $(modalChild).prev('.ts-modal-pages__control').css(delayStyles);
            $(modalTarget).addClass('is-ready-active');
            setTimeout(function(){
                $('body').addClass('is-modal-pages');
                $(modalTarget).removeClass('is-ready-active');
                $(modalTarget).addClass('is-active');
                $(window).scrollTop(15);
                animationEndDefer.resolve();
            },modalDuration);

            // lastScrollTop = modalDuration * speed;
            // var speed = window.innerHeight / modalDuration;
            // var speedDuration = lastScrollTop / speed;
            // console.log(speed);
            // console.log(lastScrollTop);
            
            // console.log(speedDuration);
            
            // $('html,body').stop().animate({ scrollTop:0 },speedDuration,'easeOutSine');
            $.when(animationEndDefer).then(function(){
                SlickArticle();
                // $(window).scrollTop(0);
                // $(window).scroll(function(){
                $('.ts-modal-pages').scrollTop(0);
                var scrollSrc = $(window).scrollTop(),
                scrollH =  $(modalChild).outerHeight() - scrollSrc,
                scrollSpace = 80;
                if(scrollH < parseInt(window.innerHeight + scrollSpace)){
                    $(modalChild).prev('.ts-modal-pages__control').find('.ts-modal-pages__control__close').addClass('is-show');
                }
                else{
                    $(modalChild).prev('.ts-modal-pages__control').find('.ts-modal-pages__control__close').removeClass('is-show');
                }
                $('.ts-modal-pages').scroll(function(){
                    var scrollSrc = $(this).scrollTop(),
                    scrollH =  $(modalChild).outerHeight() - scrollSrc,
                    scrollSpace = 80;
                    // console.log(scrollH);
                    // console.log(scrollSrc);
                    
                    if(scrollH < parseInt(window.innerHeight + scrollSpace)){
                        $(modalChild).prev('.ts-modal-pages__control').find('.ts-modal-pages__control__close').addClass('is-show');
                    }
                    else{
                        $(modalChild).prev('.ts-modal-pages__control').find('.ts-modal-pages__control__close').removeClass('is-show');
                    }
                });
            });
            
            $(modalTarget).find('.ts-modal-pages__control__close').click(function(event){
                event.preventDefault();
                if($('.ts-video--youtube').length && window.YoutubeVideoIframe.stopAllVideo) window.YoutubeVideoIframe.stopAllVideo();
                durationStyles = {
                    '-webkit-animation-duration':'',
                    '-moz-animation-duration':'',
                    '-ms-animation-duration':'',
                    'animation-duration':''
                },
                delayStyles = {
                    '-webkit-transition-delay':'',
                    '-moz-transition-delay':'',
                    '-ms-transition-delay':'',
                    'transition-delay':''
                };
                $(modalChild).prev('.ts-modal-pages__control').css(delayStyles);
                $(modalTarget).addClass('is-ready-unactive');
                $('body').removeClass('is-modal-pages');
                $(window).scrollTop(lastScrollTop);
                setTimeout(function(){
                    $(modalChild).css(durationStyles);
                    $(modalClose).css(durationStyles);
                    $(modalChild).prev('.ts-modal-pages__control').find('.ts-modal-pages__control__close').removeClass('is-show');
                    
                    $(modalTarget).removeClass('is-ready-unactive');
                    $(modalTarget).removeClass('is-active');
                },modalDuration);       
            });
        });
    }
}



