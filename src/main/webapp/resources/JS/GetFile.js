$(document).ready(function(){
	$('input[id=lefile]').change(function() {
		var file = $(this).val();
		var fileName = file.replace(/^.+?\\([^\\]+?)(\.[^\.\\]*?)?$/gi,"$1");  //正则表达式获取文件名，不带后缀
	    var fileExt=file.replace(/.+\./,"");   //正则表达式获取后缀
		$('.file-text').val(fileName+'.'+fileExt);
		/*alert($('#lefile').val());*/
	});
});
