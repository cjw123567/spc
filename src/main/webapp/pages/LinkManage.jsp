<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>FoxLink品質資訊與數位分析 系統</title>
	<link rel="stylesheet" type="text/css" href="bootstrap-3.3.7-dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/SubPage.css">
	<script type="text/javascript" src="jq/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
</head>
<body>
	<form class="form-horizontal" action="" method="get" role="form">
		<div class="form-box">
			<label for="fl-Factory"  class="col-sm-1 control-label">廠區:
			</label>
			<div class="col-sm-2">
				<select id="fl-Factory" class="form-control">
					<option>禁止选择</option>
				</select>
			</div>
			<label for="fl-Floor"  class="col-sm-1 control-label">樓層:
			</label>
			<div class="col-sm-2">
				<select id="fl-Floor" class="form-control">
					<option>禁止选择</option>
				</select>
			</div>
			<label for="fl-PrdU"  class="col-sm-1 control-label">生產單位:
			</label>
			<div class="col-sm-2">
				<select id="fl-PrdU" class="form-control">
					<option>禁止选择</option>
				</select>
			</div>
			<label for="fl-Link"  class="col-sm-1 control-label">綫別:
			</label>
			<div class="col-sm-2">
				<input id="fl-Link" type='text' class="form-control"/>
			</div>
		</div>
		<button type="submit" class="btn btn-primary btn-left">新增or修改</button>
		<!-- <button type="button" class="btn btn-primary">点击</button> -->
	</form>
</body>
</html>