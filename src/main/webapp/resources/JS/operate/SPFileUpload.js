$(document).ready(function(){
	var vaRetrun;
	$('#Submit_Upload').click(function(){
		//1、先判断是否有选择文件。
		if($('#SP-FileUp').val().length!=0){
			//2、先判断文件类型--只能上传excel等文本类型的文件
            var fileName = $("#SP-FileUp").val();
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
	
	function checkPartNumberExist(){
		var strPartNumberAll = $("#SP-FileUp").val();
		/*alert(strPartNumberAll);*/
		var str2V=strPartNumberAll.substr(0,strPartNumberAll.indexOf('.'));
	/*	alert(str2V);*/
		$.ajax({ 
			   url:"../uploadSpec/checkPartNumber.do", 
			   type:'post',
			   async : false,
			   data:{"str2V":str2V},
			   success:function(res){ 
			     vaRetrun=res;
			   }, 
			   error:function(err){ 
			    alert("NG:"+err); 
			   } 
			  
			  })   
	}
	
	function upfileAjax(){
		var form = document.getElementById('form1');
		var formData = new FormData(form);
		/*console.log(formData.get('file'));*/
		  $.ajax({ 
		   url:"../uploadSpec/ajaxUploadSpec.do", 
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