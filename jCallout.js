(function($){
    $.fn.extend({
        //plugin name - jCallout
        jCallout: function(options) {
 
            var defaults = {
                message: "hi",
                position: 'top',
                backgroundColor: '#8F8F8F',
                borderColor: '7992B0',
                textColor: '#fff',
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);
                  var msg = o.message;  
                  var obj_position = obj.position();
                  
                  var containerDiv=$('<div class="callout">').append('<b class="notch"></b>'+msg);
                containerDiv.css({'background-color':o.backgroundColor, 'border-color':o.borderColor,'color':o.textColor});

                //var items = $("li", obj);
                 if(o.position=="bottom") {
                     obj.after(containerDiv);  
                     var setLeft=obj_position.left+(obj.width()/2)-(containerDiv.width()/2)-5;
                     var setTop=obj_position.top+obj.height()-5;                
                     containerDiv.css({'left':setLeft, 'top': setTop});
                     $(".notch", containerDiv).css({'left':(containerDiv.width()/2)-5,'border-bottom-color':o.backgroundColor});
                } else if (o.position=="right") {
                     obj.after(containerDiv);
                     $("b.notch", containerDiv).addClass('notch_right').removeClass('notch');
                     var setLeft=obj_position.left+obj.width()+10;
                     var setTop=obj_position.top+(obj.height()/2)-(containerDiv.height()/2)-10;                
                     containerDiv.css({'left':setLeft, 'top': setTop, 'margin':'0'});
                    $(".notch_right", containerDiv).css({'left':'-10px', 'top':(containerDiv.height()/2)-5, 'border-right-color':o.backgroundColor});
                } else if (o.position=="top") {
                     obj.before(containerDiv);
                     $("b.notch", containerDiv).addClass('notch_top').removeClass('notch');
                     var setLeft=obj_position.left+(obj.width()/2)-(containerDiv.width()/2)-10;
                     var setTop=obj_position.top-(containerDiv.height())-40;                
                     containerDiv.css({'left':setLeft, 'top': setTop});
                    $(".notch_top", containerDiv).css({'left':(containerDiv.width()/2)-5, 'top':containerDiv.height()+10, 'border-top-color':o.backgroundColor});
                } else if (o.position=="left") {
                     obj.before(containerDiv);
                     $("b.notch", containerDiv).addClass('notch_left').removeClass('notch');
                     var setLeft=obj_position.left-containerDiv.width()-20;
                     var setTop=obj_position.top+(obj.height()/2)-(containerDiv.height()/2)-20;                
                     containerDiv.css({'left':setLeft, 'top': setTop});
                    $(".notch_left", containerDiv).css({'right':'-10px', 'top':(containerDiv.height()/2)-5, 'border-left-color':o.backgroundColor});
                }

            });
        }
    });
})(jQuery);

