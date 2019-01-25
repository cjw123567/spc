$(document).ready(function(){
	var vaRetrun;
	$('#Submit_CTPUpload').click(function(){
		//1、先判断是否有选择文件。
		if($('#CTP-FileUp').val().length!=0){
			//2、先判断文件类型--只能上传excel等文本类型的文件
            var fileName = $("#CTP-FileUp").val();
            var fileNameExtension = fileName.substr(fileName.lastIndexOf("."));//取得文件的扩展名，.xls或者.xlsx
            if(fileNameExtension==".xls" || fileNameExtension==".xlsx"){
            	checkPartNumberExist();
            	if(vaRetrun=='Y'){
            		if(confirm("此料號規格已經存在!!是否要複寫？")) {
            			upfileAjax();
            	    };
            	}else if(vaRetrun=='N'){
            		upfileAjax();
            	}else{
            		alert("NG:上传档案异常！")
            	}
            }else{
            	alert("NG:请选择Excel文件！");
            	return false;
            }
		}else{

			alert("NG:未选择任何Excel文件！");
		
			return false;
		}
	});
	
	
	function upfileAjax(){
		var form = document.getElementById('form1');
		var formData = new FormData(form);
		/*console.log(formData.get('file'));*/
		  $.ajax({ 
		   url:"ajaxUploadSpecCTP.do", 
		   type:'POST', 
		   data:formData,
		   async : false,
		   processData:false, 
		   contentType:false, 
		   success:function(res){ 
			  if(res){ 
			    alert(res); 
			  } 
		   }, 
		   error:function(err){ 
		    alert('错误：'+err); 
		   } 
		  
		  }) 
	}
})