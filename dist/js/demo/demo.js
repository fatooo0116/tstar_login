/*!  2018 09 07 11:15:35 | tstar | tstar design by blackj | blackj */
$(document).ready(function(){
    // SyncHeight();
    // demoCalc();
    
});

function demoCalc(){

}


(function($){
    $(document).ready(function(){

        $(".sendCode").on("click",function(){
            let me = this;
            var time = 60000;//倒數7秒
            !function MyCounter(){
              if(time<=0){
                //倒數完成
                $(me).find(".timer").text('');
              }else{
                console.log((time/1000) + " sec...");
                setTimeout(MyCounter, 1000);
                $(me).find(".timer").text(time/1000);
              }
              time-=1000; 
              
            }();

        });



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
                    $(".sec_login.active").removeClass("sh_err");
                    passout.addClass('focus');
                    prevbox.find('.text').text(passbox.val());
                }else{
                    passout.removeClass('focus');
                }
            });
        });


        
        $(".sec_login .back").on("click",function(e){
            e.preventDefault();

            let cur_pos = $(this).attr('cur'); 
            let prev_pos = $(this).attr('target'); 



                           
            $(".sec_login").eq(cur_pos).removeClass('sh_err');
            $(".sec_login").eq(cur_pos).addClass('right');

            setTimeout(function(){
                $(".sec_login").eq(cur_pos).removeClass("active");    

                $(".sec_login").eq(cur_pos).addClass("right");                      
                $(".sec_login").eq(prev_pos).addClass("active");
                $(".sec_login").eq(prev_pos).removeClass("left");
            },300);
                    
        });



       
        $(".next").on("click",function(e){
            e.preventDefault();    

            let btn = $(this);
            let cur_pos = $(this).attr('cur'); 
            let next_pos = $(this).attr('target'); 


            if(btn.hasClass('end')){
                if($(".sec_login").eq(cur_pos).find("input").val().trim()!=''){
                    $("#ex1").modal({
                        fadeDuration: 100
                      });
                }else{
                    $(".sec_login").eq(cur_pos).addClass('sh_err');
                }
                
                return false;
            }




            if(next_pos > cur_pos){
                 /* next */                

                let target = $(".sec_login").eq(cur_pos);

                target.find('input').keypress(function(){
                   target.removeClass('sh_err');
                 });
   
   
               if(btn.hasClass('skip') || $(".sec_login").eq(cur_pos).find("input").val().trim()!=''){

   
                   $(".sec_login").eq(cur_pos).removeClass('sh_err');
                   $(".sec_login").eq(cur_pos).removeClass("active");
                   $(".sec_login").eq(cur_pos).removeClass("right");
                   $(".sec_login").eq(cur_pos).addClass("left");
                   $(".sec_login").eq(next_pos).addClass("active");
                   $(".sec_login").eq(next_pos).removeClass("right");
                               
               }else{
                   $(".sec_login").eq(cur_pos).addClass('sh_err');
               }

            }else{
                /* back */
      

                $(".sec_login").eq(cur_pos).removeClass('sh_err');
                $(".sec_login").eq(cur_pos).addClass('right');
    
                setTimeout(function(){
                    $(".sec_login").eq(cur_pos).removeClass("active");    
    
                    $(".sec_login").eq(cur_pos).addClass("right");                      
                    $(".sec_login").eq(next_pos).addClass("active");
                    $(".sec_login").eq(next_pos).removeClass("left");
                },300);
            }
                        
        });
    });
})(jQuery);