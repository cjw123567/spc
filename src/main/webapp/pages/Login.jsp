<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8"/>
	<title>FoxLink品質資訊與數位分析 系統</title>
	<link rel="stylesheet" type="text/css" href="bootstrap-3.3.7-dist/css/bootstrap.min.css">
	<style type="text/css">
		*{
			padding: 0;
			margin: 0;
		}
		html,body{
			width: 100%;
			height: 100%;
		}
		body{
			/*background:url('img/loginb.png');*/
			background: linear-gradient(#FFEDD2 , white);
		}
		.container{
			margin: 0 auto;
			width: 60%;
			height: 100%;
			text-align: center;
		}
		.container-head{
			height: 25%;
		}
		.container-content{
			height: 75%;
		}
		.container-footer{
			height: 10%;
		}
		.logo-style{
			width: 100%;
			height:50%;
			background: url('img/logo.gif') no-repeat center;
			
		}
		h1,h2{
			font-size: 30px;
			font-weight: bold;
		}
		.head-first{
			font-size: 40px;
			font-weight: bold;
			color:#c13a3a;
			margin-top:10px;
		}
		.head-second{
			color:#7d5590;
			/*margin-top:10px;*/
		}
		.container-content{
			height:650px;
			padding: 30px 0 0 0 ;
		}
		.tab{
			padding: 30px 50px;
		}
		.content-tab{
			width:500px;
			margin: 0 auto;
			background-color: #fff;
			border-radius: 5px;
			/*background: linear-gradient(#FFEDD2 , white);*/
		}
		.nav>li{
			width: 50%;
		}
		.nav>li>a[aria-controls]{
			color:#768399;
			font-weight: bold;
		}
		.nav-tabs>li.active>a, 
		.content-tab .nav>li.active>a:hover,
		.content-tab .nav>li.active>a:focus{
			border:none;
		}
		.content-tab .nav>li>a:hover,
		.content-tab .nav>li>a:foucs{
			border:none;
		}

		.nav>li>a{
			margin: 0;
/*			background-color: black;*/
			border:none;
			background-color: #f3f5f6;
		}
		/*.btn-default{
			background-color:#75b9e6;
			border:none;
			width:100px; 
		}*/
		.container-footer{
			height: 75px;
		}
	</style>

	<script type="text/javascript" src="jq/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<div class="container-head">
			<div class='logo-style'></div>
			<h1 class='head-first'>品質資訊與數位分析 系統</h1>
			<h2 class='head-second'>Quality Information ＆ Analytics System</h2>
		</div>
		<div class="container-content">
			<div class='content-tab'>
  				<!-- Nav tabs -->
  				<ul class="nav nav-tabs" role="tablist">
  				  <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">登陸</a></li>
  				  <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">忘記密碼</a></li>
  				</ul>
				
  				<!-- Tab panes -->
  				<div class="tab-content">
  				  <div role="tabpanel" class="tab tab-pane active" id="home">
  				  	<div class="login">
  				  		<form>
  							<div class="form-group">
  							  <label for="exampleInputAccount1">賬號Account</label>
  							  <input type="text" class="form-control" id="exampleInputAccount1" placeholder="Account">
  							</div>
  							<div class="form-group">
  							  <label for="exampleInputPassword1">密碼Password</label>
  							  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  							 </div>
  							<button type="submit" class="btn btn-default">登陸</button>
						</form>
					</div>	
  				  </div>
  				  <div role="tabpanel" class="tab tab-pane" id="profile">
  				  	<div class="udPassword">
  				 		<form>
  							<div class="form-group">
  							 <label for="exampleInputAccount1">賬號Account</label>
  							  <input type="text" class="form-control" id="exampleInputAccount1" placeholder="賬號">
  							</div>
  							<div class="form-group">
  							  <label for="exampleInputName1">姓名Name</label>
  							  <input type="text" class="form-control" id="exampleInputName1" placeholder="中文姓名(繁體)">
  							 </div>
  							 <div class="form-group">
  							 <label for="exampleInputDepId1">賬號DepId</label>
  							  <input type="text" class="form-control" id="exampleInputDepId1" placeholder="部門代碼">
  							</div>
  							<div class="form-group">
  							 <label for="exampleInputNewPassWord1">新密碼PassWord</label>
  							  <input type="password" class="form-control" id="exampleInputNewPassWord1" placeholder="新密碼">
  							</div>
  							<div class="form-group">
  							 <label for="exampleInputNewPassWord2">確認新密碼</label>
  							  <input type="password" class="form-control" id="exampleInputNewPassWord2" placeholder="確認新密碼">
  							</div>
  							<!-- 	<div class="form-group">
  							 <label for="exampleInputAccount1">賬號Account</label>
  							  <input type="text" class="form-control" id="exampleInputAccount1" placeholder="Account">
  							</div> -->
  							<button type="submit" class="btn btn-default">重設密碼</button>
						</form>
					</div>
  				  </div>
  				</div>
			</div>
		</div>
		<div class="container-footer">
			※如有問題 , 請聯繫 : XXXXXXXXXXXXXXXXXX
		</div>
	</div>
</body>
</html>