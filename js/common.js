/**
 * Created by Administrator on 2015/1/13 0013.
 */
(function(){

    /* 添加用户窗口事件 改变根字号大小 */

    document.body.addEventListener('touchstart',function(){});
    function addEvent(obj,type,fn){
        if(obj.addEventListener){
            obj.addEventListener(type,fn,false);
        } else {
            obj.attachEvent('on'+type,fn);
        }
    }
    function autoSize(){
        var win_W = $(".container").width();
        var win_poW=$(".pagination").width();
        var win_po2W=$(".pagination2").width();
        $(".pagination").css({
            'margin-left':'-' + win_poW/2 + 'px'
        });
        $(".pagination2").css({
            'margin-left':'-' + win_po2W/2 + 'px'
        });
            var font = Math.round(win_W / 16);
            var HTML=document.getElementById('html');
            HTML.style.fontSize = font + 'px';


    }
    addEvent(window,'load',autoSize);
    addEvent(window,'resize',autoSize);
    /*  end 添加用户窗口事件 */



})()
