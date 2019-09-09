<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="../resources/jq/jquery-1.11.3.min.js"></script>
 <script src="../resources/echarts.min.js"></script>
 <script type="text/javascript" src="../resources/JS/operate/LKWebChart.js"></script>
<style type="text/css">
        .tabledata
        {
            border-collapse: collapse;
            border: none;
            float: left;
        }
        .tabledata td
        {
            border: solid #000 1px;
			 text-align:center;
			 font-size:1px;
        }
 </style>
</head>
<body>
  <input type="hidden" id="varMoldNO" value="${param.varMoldNO}">
  <input type="hidden" id="varMOLD_CAVITY_NO" value="${param.varMOLD_CAVITY_NO}">
  <input type="hidden" id="varData" value="${param.varData}">
  
</body>
</html>