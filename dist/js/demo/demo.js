/*!  2018 09 07 11:15:35 | tstar | tstar design by blackj | blackj */
$(document).ready(function(){
    // SyncHeight();
    // demoCalc();
    
});

function demoCalc(){

}


(function($){
    $(document).ready(function(){

        $(".passwdbox").each(function(){
            let passout = $(this);
            let passbox = $(this).find('input[type="password"]');
            let prevbox = $(this).find('.preview');
            let clearBtn = $(this).find('.exit');
            clearBtn.on('click',function(){
                passout.removeClass('focus');
                prevbox.find('.text').text('');
                passbox.val('');
            });
            passbox.keyup(function(){
                if(passbox.val()!=''){
                    passout.addClass('focus');
                    prevbox.find('.text').text(passbox.val());
                }else{
                    passout.removeClass('focus');
                }
            });
        });


        
        $('input[type="password"]').focusout(function(){
        //    $(this).parent().removeClass('focus');
        });



        var i = 0;
        $(".next").on("click",function(){    

            let target = $(".sec_login").eq(i);

             target.find('input').keypress(function(){
                target.removeClass('sh_err');
              });

              


            if($(".sec_login").eq(i).find("input").val().trim()!=''){
                if(($(".sec_login").length-1) == i){
                    
                    $("#ex1").modal({
                        fadeDuration: 100
                      });
                    return false;
                }

                $(".sec_login").eq(i).removeClass('sh_err');
                $(".sec_login").eq(i).removeClass("active");
                $(".sec_login").eq(i+1).addClass("active");
                i++;             
            }else{
                $(".sec_login").eq(i).addClass('sh_err');
            }
                        
        });
    });
})(jQuery);