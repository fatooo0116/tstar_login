(function($){
    $(document).ready(function(){

        $("#next1").on("click",function(){

            let name = $(".sec_login").eq(0).find("input").val();
            console.log(name);
            alert('ss');

            if($(".sec_login").eq(0).find("input").val()!=''){
                $(".sec_login").eq(0).removeClass("active");
                $(".sec_login").eq(1).addClass("active");
            }
     
        });
    });
})(jQuery);