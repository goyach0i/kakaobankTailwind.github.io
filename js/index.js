console.clear();

// 영문사이트 클릭 시 팝업
function Popup__show() {
  $('.ing-pop').addClass('active');
  $('html').addClass('actived');
}

function Popup__hide() {
  $('.ing-pop').removeClass('active');
  $('html').removeClass('actived');
}

function Popup__init() {
  $('.ing').click(function () {
    Popup__show();
  });
  $('.popup__btn-close').click(function () {
    Popup__hide();
  });
  $('.ing-pop_bg').click(function () {
    Popup__hide();
  });
}

Popup__init();

// sub메뉴 hover
function Submenu__show() {
  let $this = $(this);
  $this.addClass('active');

  $('.menu-btn').removeClass('active');
  $('.menu-btn_site').removeClass('active');
}

function Submenu__hide() {
  let $this = $(this);

  $this.removeClass('active');
}

function Submenu__init() {
  $('.nav-list').mouseenter(function () {
    let $this = $(this);
    $this.addClass('active');

    $('.menu-btn').removeClass('active');
    $('.menu-btn_site').removeClass('active');
  });

  $('.nav-list').mouseleave(function () {
    let $this = $(this);

    $this.removeClass('active');
  });
}

Submenu__init();

// 관련사이트

// 관련사이트 클릭 after 회전
$('.menu-btn').click(function () {
  $('.menu-btn').toggleClass('active');

  let isBtn = $('.menu-btn').hasClass('active');
  if (isBtn) {
    $('.menu-btn_site').addClass('active');
  } else {
    $('.menu-btn_site').removeClass('active');
  }
});
