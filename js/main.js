$(document).ready(function() {
    // Инициализирует карусель
    $(".start-slide").click(function () {
        $("#myCarousel2").carousel('cycle');
    });
    // Останавливает процесс автоматической смены слайдов карусели
    $(".pause-slide").click(function () {
        $("#myCarousel2").carousel('pause');
    });
    // Осуществляет переход на предыдущий слайд
    $(".prev-slide").click(function () {
        $("#myCarousel2").carousel('prev');
    });
    // Осуществляет переход на следующий слайд
    $(".next-slide").click(function () {
        $("#myCarousel2").carousel('next');
    });
    // Осуществляет переход на 0 слайд карусели
    $(".slide-one").click(function () {
        $("#myCarousel2").carousel(0);
    });
    // Осуществляет переход на 1 слайд карусели
    $(".slide-two").click(function () {
        $("#myCarousel2").carousel(1);
    });
    // Осуществляет переход на 2 слайд карусели
    $(".slide-three").click(function () {
        $("#myCarousel2").carousel(2);
    });
    $('.form-control').popover();

/////////////////////////////////////////////////////////
    ////Img_Gallery
/////////////////////////////////////////////////////////

    var showNav = 1;
    var keyboardNav = 1;
    var showCaption = 1;
    var loop = 1;

//Создание элементов
    var $overlay = $('<div id="overlay"></div>');
    var $image = $('<img>');
    var $holder = $('<div class="holder"></div>');
    var $caption = $('<p></p>');
    var $nav = $('<div class="nav"><a id="close" nohref><span>&times;</span></a><a id="prev" nohref><span>&#8592;</span></a><a id="next" nohref><span>&#8594;</span></a></nav>');
    var glength = $('#imageGallery li').length;
    var imageIndex, imageLocation, captionText, allowKeyboard;

//Добававляем элементы в DOM
    $('#overlay img').before('');
    $holder.append($image);
    $holder.append($nav);
    if (showCaption) {
        $holder.append($caption);
    }
    if (!showNav) {
        $nav.hide();
    }
    $overlay.append($holder);
    $("body").append($overlay);

//обработчик на картинки
    $('#imageGallery a').click(function (event) {
        event.preventDefault();
        imageLocation = $(this).attr("href");

        imageIndex = $('#imageGallery a').index(this) + 1;

        $image.attr("src", imageLocation);

        $(this).addClass('active');
        $('#imageGallery a').not(this).removeClass('active');

        captionText = $(this).children("img").attr("alt");
        $caption.text(captionText);

        allowKeyboard = 1;
        $overlay.show();
    });
    $image.click(function () {
        allowKeyboard = 0;
        $($overlay).hide();
    });

    $overlay.click(function (e) {
        if (e.target != this) return;
        $(this).hide();
    });

    $('#close').click(function () {
        $($overlay).hide();
    });
    $('#next').click(function () {
        //check to see if its the last image
        if (glength != imageIndex) {
            $('.active').closest('li').next().find('img').trigger('click');
        } else if (loop == 1) {
            $('#imageGallery li').first().find('img').trigger('click');
        }
    });
    $("body").keydown(function (e) {
        if (keyboardNav == 1 && allowKeyboard == 1) {
            if (e.which == 37) {
                $('#prev').trigger("click");
            }
            else if (e.which == 39) {
                $('#next').trigger("click");
            }
            else if (e.which == 27) {
                $($overlay).hide();
            }
        }
    });
    $('#prev').click(function () {
        if (imageIndex != 1) {
            $('.active').closest('li').prev().find('img').trigger('click');
        } else if (loop == 1) {
            $('#imageGallery li').last().find('img').trigger('click');
        }
    });

/////////////////////////////////////////////////////////
    ////Ajax Forms
/////////////////////////////////////////////////////////

    $('#confirmsignup1').on('click', ajax_post);
    $('#confirmsignup2').on('click', ajax_post);

    function ajax_post() {
        event.preventDefault();
        var form_data1 = $('#form_1').serialize();
        var form_data2 = $('#form_2').serialize();
        $.ajax(
            {
                type: "POST", //Метод отправки
                url: "http://3d-atelier.com.ua/wp-content/themes/shopkeeper-child/Landing_By_ElSolo/send.php",
                data: form_data1,
                success: function () {
                    $('input').val('');
                    $('#message2').val('');
                    $('.alert_forms > div').removeClass('alert-info');
                    $('.alert_forms > div').addClass('alert-success');
                    $('.alert_forms > div h5').text('Поздравляем!');
                    $('.alert_forms > div p').text('Вы успешно отправили заявку');
                    $('.progress_forms').show();
                    setTimeout(function () {
                        $('.modal').modal('hide');
                        $('.alert_forms > div').removeClass('alert-success');
                        $('.alert_forms > div').addClass('alert-info');
                        $('.alert_forms > div h5').text('Внимание!');
                        $('.alert_forms > div p').text('Все поля обязательны для заполнения');
                        $('.alert_success_for_tel').hide();
                        $('.alert_success_for_email').hide();
                        $('.alert_success_for_name').hide();
                        $('.alert_success_for_userid2').hide();
                        $('.alert_success_for_tel2').hide();
                        $('.progress_forms').hide();
                    }, 2500);


                }
            }
        );
        $.ajax(
            {
                type: "POST", //Метод отправки
                url: "../send.php",
                data: form_data2,
                success: function (result) {

                }
            }
        );
    }
/////////////////////////////////////////////////////////
    //Validator for Forms
/////////////////////////////////////////////////////////
    $('#tel').on('input', validator1);
    $('#userid').on('input', validator1);
    $('#userid2').on('input', validator2);
    $('#email').on('input', validator2);
    $('#tel2').on('input', validator2);
    function validator1(res) {

        function validTel(res) {
            var re = /^([+][3]{1}|)((039|050|063|066|067|068|073|091|092|093|094|095|096|097|098|099)|(8039|8050|8063|8066|8067|8068|8073|8091|8092|8093|8094|8095|8096|8097|8098|8099))\d{7}$/;
            var re2 = /^[+][3]{1}\(((039|050|063|066|067|068|073|091|092|093|094|095|096|097|098|099)|(8039|8050|8063|8066|8067|8068|8073|8091|8092|8093|8094|8095|8096|8097|8098|8099))\)\d{3}-\d{2}-\d{2}$/;
            var re3 = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            var myPhone = $('#tel').val();
            if(myPhone == ''){
                res = false;
                $('.alert_danger_for_tel').hide(1000);
                $('.alert_success_for_tel').hide(1000);
            }else{
                var valid = re.test(myPhone) || re2.test(myPhone) || re3.test(myPhone);
                if (valid) {
                    $('.alert_danger_for_tel').hide(1000);
                    $('.alert_success_for_tel').show(1000);
                    res = true;
                } else {
                    $('.alert_danger_for_tel').show(1000);
                    $('.alert_success_for_tel').hide(1000);
                    res = false;
                }
            }return res;
        }
        function validEmail(res) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var userid = $('#userid').val();
            var valid = re.test(userid);
            if(userid == ''){
                res = false;
                $('.alert_danger_for_email').hide(1000);
                $('.alert_success_for_email').hide(1000);
            }else{
                if (valid) {
                    $('.alert_danger_for_email').hide(1000);
                    $('.alert_success_for_email').show(1000);
                    res = true;
                } else {
                    $('.alert_danger_for_email').show(1000);
                    $('.alert_success_for_email').hide(1000);
                    res = false;


                }
            }

            return res;
        }
        var res1 = validTel(res);
        var res2 = validEmail(res);
        if (res1 === true && res2 === true) {
            $("#confirmsignup1").prop('disabled', false);
        }
        else {
            $("#confirmsignup1").prop('disabled', true);

        }
    };
    function validator2(res) {

        function validName(res) {
            var re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
            var userid = $('#userid2').val();
            if(userid == ''){
                $('.alert_danger_for_name').hide(1000);
                $('.alert_success_for_name').hide(1000);
                res = false;
            }else{
                var valid = re.test(userid);
                if (valid) {
                    $('.alert_danger_for_name').hide(1000);
                    $('.alert_success_for_name').show(1000);
                    res = true;
                } else {
                    $('.alert_danger_for_name').show(1000);
                    $('.alert_success_for_name').hide(1000);
                    res = false;
                }
            }

            return res
        }

        function validEmail2(res) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var userid = $('#email').val();
            if(userid == ''){
                res = false;
                $('.alert_danger_for_userid2').hide(1000);
                $('.alert_success_for_userid2').hide(1000);
            }else{
                var valid = re.test(userid);
                if (valid) {
                    $('.alert_danger_for_userid2').hide(1000);
                    $('.alert_success_for_userid2').show(1000);
                    res = true;
                } else {
                    $('.alert_danger_for_userid2').show(1000);
                    $('.alert_success_for_userid2').hide(1000);
                    res = false;
                }
            }

            return res

        }

        function validTel2(res) {
            var re = /^([+][3]{1}|)((039|050|063|066|067|068|073|091|092|093|094|095|096|097|098|099)|(8039|8050|8063|8066|8067|8068|8073|8091|8092|8093|8094|8095|8096|8097|8098|8099))\d{7}$/;
            var re2 = /^[+][3]{1}\(((039|050|063|066|067|068|073|091|092|093|094|095|096|097|098|099)|(8039|8050|8063|8066|8067|8068|8073|8091|8092|8093|8094|8095|8096|8097|8098|8099))\)\d{3}-\d{2}-\d{2}$/;
            res3 = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            var myPhone = $('#tel2').val();
            if(myPhone == ''){
                res = false;
                $('.alert_danger_for_tel2').hide(1000);
                $('.alert_success_for_tel2').hide(1000);
            }else{
                var valid = re.test(myPhone) || re2.test(myPhone) || res3.test(myPhone);
                if (valid) {
                    $('.alert_danger_for_tel2').hide(1000);
                    $('.alert_success_for_tel2').show(1000);
                    res = true;
                } else {
                    $('.alert_danger_for_tel2').show(1000);
                    $('.alert_success_for_tel2').hide(1000);
                    res = false;
                }
            }

            return res
        }
        var res1 = validName(res);
        var res2 = validEmail2(res);
        var res3 = validTel2(res);
        if (res1 === true && res2 === true && res3 === true) {
            $("#confirmsignup2").prop('disabled', false);
        }
        else {
            $("#confirmsignup2").prop('disabled', true);

        }
    }




});