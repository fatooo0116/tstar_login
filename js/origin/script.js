  
    
    var didScroll = false;    
    $(window).scroll(function() {
        didScroll = true;     
    });
    
    setInterval(function() {
        if( didScroll ) {
            didScroll = false;

            var scrollVal = $(window).scrollTop();
            console.log(scrollVal);
            if(scrollVal>100){
                $("#header").addClass("fixed");
                if(!$("#header").hasClass("sw")){
                    setTimeout(function(){
                         $("#header").addClass("sw");
                    }, 100);
                }
            }else{
                $("#header").removeClass("fixed");
                $("#header").removeClass("sw");
            }      
        
        }
    }, 250);



    function animateValue(id, start, end, duration) {
        var range = end - start;
        var current = start;
        var increment = end > start? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var obj = document.getElementById(id);
        var timer = setInterval(function() {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
    
    animateValue("c1", 0, 240, 5000);
    animateValue("c2", 0, 10, 5000);
    animateValue("c3", 0, 80, 5000);
    animateValue("c4", 0, 100, 5000);
