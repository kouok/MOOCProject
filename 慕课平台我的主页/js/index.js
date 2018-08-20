
var editor;
        KindEditor.ready(function(K) {
            editor = K.create('#XXX', {
                resizeType : 1,
                allowPreviewEmoticons : false,
                allowImageUpload : false,
                items : [
                    'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
                    'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
                    'insertunorderedlist', '|', 'emoticons', 'image', 'link'],
                afterChange : function() {
                    K('.word_count1').html(this.count());
                    K('.word_count2').html(this.count('text'));
            }
        });
    });



// tab切换
$(".ul li").on({
    mouseover:function(){
         $(this).addClass('hove2').siblings().removeClass('hove2');
    },
    click:function(){
        $(this).find("a").addClass('hove1')
    }
})


$(".ul2 li").mouseover(function(){
        $(this).addClass('act1').siblings().removeClass('act1');
        $(".ul2 li a").removeClass('co act1').addClass('hove2');
   
});
$(".ul2 li a").click(function(){
        $(this).addClass('co act1');
})
