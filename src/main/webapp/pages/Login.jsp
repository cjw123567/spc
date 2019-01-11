<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<body>
	<h2>Hello World!</h2>
	<h3>${message }</h3>
	<form action="test/test.show" method="get">
		<input type="text" name="username"> <input type="submit"
			value="提交">
	</form>

	<form action="login" method="post">
		账号：<input type="text" name="username"> 
		密码：<input type="password" name="password"> 
		<input type="submit" value="提交">
	</form>
</body>
</html>
