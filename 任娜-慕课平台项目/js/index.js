
$(function(){
	var editor;
	KindEditor.ready(function(K) {
		editor = K.create('textarea[name="text"]', {
			resizeType: 1,
			allowPreviewEmoticons: false,
			allowImageUpload: false,
			items: [
				'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
				'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
				'insertunorderedlist', '|', 'emoticons', 'image', 'link'
			]
		});
    });
});
