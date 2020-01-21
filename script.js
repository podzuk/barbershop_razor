$(".content__team").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
      {
      breakpoint: 800,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });

  $(".popup").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000
  });

  //if ($('.content__width').css('width') <= '700px'){
  // $('.content__name').css({'color' : 'rgb(255, 0, 0)'});
  //}
  

  $('.content__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.content__slider_foto'
  });
  $('.content__slider_foto').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.content__slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
      breakpoint: 800,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
    

  function add_menu() {
    if ($('#menu').css('display') == 'none') 
        { 
            $('#menu').animate({width: 'show'}, 400); 
        } 
    else 
        {     
          $('#menu').animate({width: 'hide'}, 400); 
        } 
  }

  function add_menu_mobi() {
    $('#menu').animate({width: 'show'}, 400);
    $('.content').addClass('blue')
    $('.content').addClass('hiden')
    $('.main').addClass('blue')
  }

  function add_menu_main() {
    $('.burger__menu').addClass('show') 
    $('.main').addClass('blue')
    $('.content__logo').addClass('hiden') 
    $('.content__burger').addClass('hiden') 
    $('.content__button').addClass('hiden') 
    $('.content__footer').addClass('hiden') 
  }
  function add_menu_second() {
    $('.burger__menu').addClass('show') 
    $('.main').addClass('blue')
    $('.content__logo').addClass('hiden') 
    $('.content__button').addClass('hiden') 
    $('.content__footer').addClass('hiden')  
    $('.content__width').addClass('hiden') 
    $('.content__data').addClass('hiden') 
    $('.content__popup').addClass('hiden')
  }
  
  function popup_burbers() {
    $('.content__width').addClass('show') 
    $('.content__menu').addClass('blur') 
    $('.content__line').addClass('blur') 
    $('.content__footer').addClass('blur') 
    $('.content__facebook').addClass('blur') 
    $('.content__instagram').addClass('blur') 
    $('.content__main_title_price').addClass('blur') 
    $('.content__button').addClass('blur') 
  }
  function popup_burbers_prise() {
    $('.content__width').addClass('show') 
    $('.content__menu').addClass('blur') 
    $('.content__line').addClass('blur') 
    $('.content__footer').addClass('blur') 
    $('.content__facebook').addClass('blur') 
    $('.content__instagram').addClass('blur') 
    $('.content__main_title_price').addClass('blur') 
    $('.content__button').addClass('blur') 
    $('.content__burger').addClass('blur') 
  }
  function closePopup_burbers() {
    $('.content__width').removeClass('show') 
    $('.content__menu').removeClass('blur') 
    $('.content__line').removeClass('blur') 
    $('.content__footer').removeClass('blur') 
    $('.content__facebook').removeClass('blur') 
    $('.content__instagram').removeClass('blur') 
    $('.content__burger').removeClass('blur') 
    $('.content__main_title_price').removeClass('blur') 
    $('.content__button').removeClass('blur') 
  }

  function popup_enter_andrii(){
    $('.content__width').removeClass('show')
    $('.content__data').addClass('show') 
    $('.content__barbersName').val('Андрій');
  }
  function popup_enter_tania(){
    $('.content__width').removeClass('show')
    $('.content__data').addClass('show') 
    $('.content__barbersName').val('Таня');
  }
  function popup_enter_ivan(){
    $('.content__width').removeClass('show')
    $('.content__data').addClass('show') 
    $('.content__barbersName').val('Іван');
  }

  function close_data() {
    $('.content__data').removeClass('show') 
    $('.content__menu').removeClass('blur') 
    $('.content__line').removeClass('blur') 
    $('.content__footer').removeClass('blur') 
    $('.content__facebook').removeClass('blur') 
    $('.content__instagram').removeClass('blur') 
    $('.content__burger').removeClass('blur') 
    $('.content__main_title_price').removeClass('blur') 
    $('.content__button').removeClass('blur') 

  }
  function close_popup() {
    $('.content__data').removeClass('show') 
    $('.content__width').removeClass('show')
    $('.content__popup').removeClass('show')
    $('.content__menu').removeClass('blur') 
    $('.content__line').removeClass('blur') 
    $('.content__footer').removeClass('blur') 
    $('.content__facebook').removeClass('blur') 
    $('.content__instagram').removeClass('blur') 
    $('.content__burger').removeClass('blur') 
    $('.content__main_title_price').removeClass('blur') 
    $('.content__button').removeClass('blur') 
    $('.content__price').removeClass('blur') 
  }



  function popup_pidtv() {
    if($('.content__phone').val()!=="" && $('.content__time').val()!=="" && $('.content__date').val()!=="" && $('.content__firstName').val()!=="" && $('.content__secondName').val()!==""){
      $('.content__data').removeClass('show') 
      $('.content__width').removeClass('show')
      $('.content__popup').addClass('show') 
      $('.content__price').addClass('blur') 
      $('.content__burger').addClass('blur') 
    } else{
      alert("Для успішного завершення запису, заповніть будь-ласка усі поля!")
    }
  }

 

  Vue.component('burger__menuvue', {
    template: `<div id="menu" class="burger__menu">
    <a href="../index.html"><div class="content__menu_items">головна</div></a>
    <a href="../pages/team_page.html"><div class="content__menu_items">про нас</div></a>
    <a href="../pages/services_page.html"><div class="content__menu_items">послуги</div></a>
    <a href="../pages/gallery_page.html"><div class="content__menu_items">гелерея</div></a>
    <a href="../pages/barbers_page.html"><div class="content__menu_items">барбери</div></a>
    <a href="../pages/price_page.html"><div class="content__menu_items">ціни</div></a>
    <a href="../pages/contacts_page.html"><div class="content__menu_items">контакти</div></a>
    </div>`
  })

  Vue.component('popup_pidtv',{
    template: `<div class="content__popup">
    <h1><img  class="content__close" src="../images/close.svg" alt="" onclick="close_popup()"></h1>
    <img class="content__radio" src="../images/hal.png" alt="">
    <div class="content__popupTitle">ваш запис прийнято, </br> дякуємо</div>
    </div>`
  })

  Vue.component('popup_enter',{
    template:`<div class="content__data">
    <div class="content__calendar">
      <div class="content__left">
      <input class="content__main_calendar" type="date" атрибуты>
        </div>
          <div class="content__right">
            <div class="content__header_title">Оберіть дату<img  class="content__close" src="../images/close.svg" alt="" onclick="close_data()"></div>
              <div class="content__enter">
               <input class="content__barbersName" placeholder="Ім'я барбера" type="text" name="name" value="">
                <input class="content__time" placeholder="Час" type="text">
                <input class="content__phone" placeholder="Телефон" type="text">
                <input class="content__firstName" placeholder="Прізвище" type="text">
                <input class="content__secondName" placeholder="Ім'я" type="text">
              </div>
                <div class="content__rightFooter">
                <button onclick="popup_pidtv()" class="content__buttonData">Записатись</button>
                </div>
        </div>
      </div>
    </div>`
  })

  Vue.component('popup_barber',{
    template:`
    <div class="content__width">
        <h1 class="content__main_title">Оберіть барбера <img onclick="closePopup_burbers()" class="content__close" src="images/close.svg" alt=""></h1>
        <div class="content__team">
            <div class="content__andrii">
                <img onclick="popup_enter_andrii()" class="content__foto" src="images/andrii.jpg" alt="">
                <h2 class="content__name">Андрій</h2>
                <div class="content__title"> Досвід роботи 4 роки,</br> майстер стрижки і бриття</div>
            </div>
            <div onclick="popup_enter_tania()" class="content__tania">
                <img class="content__foto" src="images/tania.jpg" alt="">
                <h2 class="content__name">Таня</h2>
                <div class="content__title">Старший майстер, досвід</br> роботи 10 років, майстер</br> стрижки та бриття</div>
            </div>
            <div onclick="popup_enter_ivan()" class="content__ivan" class="content__foto">
                <img class="content__foto"  src="images/ivan.jpg" alt="">
                <h2 class="content__name">Іван</h2>  
                <div class="content__title">Досвід роботи 5 років,</br> майстер стрижки та бриття</div>
            </div>
        </div>
    </div>`
  })


  Vue.component('popup_main_menu',{
  template:`
  <div id="menu" class="burger__menu">
        <a href="index.html"><div class="content__menu_items1">головна</div></a>
        <a href="pages/team_page.html"><div class="content__menu_items1">про нас</div></a>
        <a href="pages/services_page.html"><div class="content__menu_items1">послуги</div></a>
        <a href="pages/gallery_page.html"><div class="content__menu_items1">гелерея</div></a>
        <a href="pages/barbers_page.html"><div class="content__menu_items1">барбери</div></a>
        <a href="pages/price_page.html"><div class="content__menu_items1">ціни</div></a>
        <a href="pages/contacts_page.html"><div class="content__menu_items1">контакти</div></a>
    </div>`
  })

  var app = new Vue({
    el: '#app',
    data: {
    }
  })
