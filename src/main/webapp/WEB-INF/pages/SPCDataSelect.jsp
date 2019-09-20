<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	<link rel="stylesheet" type="text/css" href="../resources/bootstrap-3.3.7-dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../resources/css/SubPage.css">
    <script  src="../resources/jq/jquery-1.11.3.min.js"></script>
	<script  src="../resources/My97DatePicker/WdatePicker.js"></script>
	<script  src="../resources/JS/AjaxCheckSession.js"></script>
	<script  src="../resources/JS/operate/SPCDataSelect.js"></script>
	

</head>
<body>
	<div class="top">
		<form class="form-horizontal" id="form1" enctype="multipart/form-data" method="post">
			<div class="form-box">
					<h3><span class="span-left">檔案查詢</span></h3>
			</div>
			<div class="form-box">
				<label for="fileName"  class="col-sm-1 control-label">檔案名稱:
				</label>
				<div class="file-main">
					<input id="fileName" name="partNo-bd" class="form-control" type="text">
				</div>	
			</div>
			<div class="form-box">
				<label for="partNo"  class="col-sm-1 control-label">料号名稱:
				</label>
				<div class="file-main">
					<input id="partNo" name="partNo-bd" class="form-control" type="text">
				</div>	
			</div>
			<div class="form-box">
				<label for="start"  class="col-sm-1 control-label">量測起始日期:
				</label>
				<div class="file-time">
					 <input id="start" class="Wdate" type="text" name="start" onclick="WdatePicker({dateFmt:'yyyyMMdd',maxDate:'#F{$dp.$D(\'end\')}'})" autocomplete="off" />  
				</div>	
				
				<label for="end"  class="col-sm-1 control-label">量測结束日期:
				</label>
				<div class="file-time">
					 <input id="end" class="Wdate" type="text" name="end"onclick="WdatePicker({dateFmt:'yyyyMMdd',minDate:'#F{$dp.$D(\'start\')}'})" autocomplete="off" />

				</div>	
				
				<button type="button" class="btn btn-primary file-only" id="SPCData_Select" style="margin-left: 20px">搜尋</button>	
			</div>
			
		</form>
	</div>
	<div class="bottom" style="overflow: auto;">
	</div>
</body>
</html>