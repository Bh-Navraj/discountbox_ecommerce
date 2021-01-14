/*-- Subbafoundation.com Jquery Scripts --*/

$(document).ready(function() {
    var catMenuContainerW = $('.container').width();
    // var catMenuContainerH = $('.category-nav').height();
    $('.category-dropdown-menu').width(catMenuContainerW + 15 - 265);
    $('.category-dropdown-menu').css('min-height', $('.category-nav').height());

    $('body').click(function(event) {
        if (!$(event.target).closest('#navbarCollapse').length && !$(event.target).closest('#navToggler').length) {
            $('#navbarCollapse').removeClass('show');
            $('#navToggler').removeClass('toggle');
        }
        if (!$(event.target).closest('.search-form-wrap').length && !$(event.target).closest('.search-btn').length) {
            $('.search-form-wrap').removeClass('show');
            $('.search-btn i').removeClass('fa-times');
        }
    });
    $('.search-btn').on('click', function() {
        $('.search-form-wrap').toggleClass('show');
        $('.search-btn i').toggleClass('fa-times');
    })
    $('#navToggler').on('click', function() {
        $('#navbarCollapse').toggleClass('show');
        $(this).toggleClass('toggle');
    })
    $('body').on('click', '.dropdown-icon', function() {
        $(this).toggleClass('fa-plus');
        $(this).toggleClass('fa-minus');
        $(this).next('.dropdown-menu').slideToggle();
    })
})

    var sNav = $('.header-top .social-link').clone();
    var topNav = $('.left-menu').clone();

    if( $(window).width() < 992) {
        $(topNav).prependTo('#navbarCollapse');
        $(sNav).prependTo('#navbarCollapse');
    }

$('body').on('click','.aboutBtnMore', function(){
    $('#aboutContent').addClass('show');
    $(this).addClass('btnLess')
    $(this).html("Read Less");
})

$(document).keyup(function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
    $('.search-form-wrap').removeClass('show');
    $('.search-btn i').removeClass('fa-times');
   }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('#site-header').addClass("header-shrink");
    } else {
        $('#site-header').removeClass("header-shrink");
    }
});

$('#client-testimonial').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    // center: true,
    rewind: true,
    autoplay: true,
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

// match height js
$('.event-post .entry-container').matchHeight();

$('.project-post .entry-container').matchHeight();

// PRODUCT DETAILS SLICK
// $('#product-main-view').slick({
//     infinite: true,
//     speed: 300,
//     dots: false,
//     arrows: false,
//     fade: true,
//     asNavFor: '#product-view'
// });
//
// $('#product-view').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: false,
//     centerMode: true,
//     focusOnSelect: true,
//     asNavFor: '#product-main-view'
// });

// // PRODUCT ZOOM
// $('#product-main-view .product-view').zoom();


// Quantity add / minus

$('.add').click(function () {
        $(this).prev().val(+$(this).prev().val() + 1);
});
$('.sub').click(function () {
    if ($(this).next().val() > 1) {
        if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
});