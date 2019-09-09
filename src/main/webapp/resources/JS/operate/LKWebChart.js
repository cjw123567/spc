$(document).ready(function(){
	var varSubtitle=$('#varMoldNO').val()+'_'+$('#varMOLD_CAVITY_NO').val()+'_'+$('#varData').val();
	var jq = top.jQuery;
	var varUrl= jq('#'+varSubtitle).attr("src");
	varUrl=varUrl.replace('LKWebChart','getData');
	varUrl="../"+varUrl;
	$.ajax({
		   url:varUrl, 
		   type:'get',
		   //data:{varPartNO:varPartNO,varMoldNO:varMoldNO,varMOLD_CAVITY_QTY:varMOLD_CAVITY_QTY,varYearMonth:varYearMonth,varYearMonth2:varYearMonth2,varMOLD_CAVITY_NO:varMOLD_CAVITY_NO},
		   success:function(data){
			if(data == null || data == ''){
				alert("查無料號資料！");
				return;
			}else{
				$.each(data,function(i,result){
					console.log(result);					
					//console.log(result['SIZE_SN']);
					creatChart(i,result);
				});
			}
			
		   }, 
		   error:function(err){ 
		    alert("查詢所有料號失敗，失敗原因："+err); 
		   } 
	})  	                    
       
})

function creatChart(i,result){
	//$('body').append("<table border='1' cellspacing='0' style='margin:auto;'> <tr><th>No.</th><th>Nominal</th><th>+TOL</th><th>-TOL</th><th>USL</th><th>LSL</th><th>Max</th><th>Min</th><th>Std Dev</th><th>Mean</th><th>Cp</th><th>UCPK</th><th>LCPK</th><th>Cpk</th></tr><tr><td id='SIZE_SN"+i+"'></td><td id='STANDARD_VALUE"+i+"'></td><td id='UPPER_TOLERANCE"+i+"'></td><td id='LOWER_TOLERANCE"+i+"'></td><td id='UPPER_SPEC_LIMIT"+i+"'></td><td id='LOWER_SPEC_LIMIT"+i+"'></td><td id='MAX"+i+"'></td><td id='MIN"+i+"'></td><td id='STDEV"+i+"'></td><td id='AVERAGE"+i+"'></td><td id='CP"+i+"'></td><td id='UCPK"+i+"'></td><td id='LCPK"+i+"'></td><td id='CPK"+i+"'></td></tr></table>");
	$('body').append("  <div >\
      <div style=\"width:8%;float:left;\"><table >\
        <tr>\
          <td>\
          	<table class='tabledata'> \
		     <tr><td>No.</td><td id='SIZE_SN"+i+"'></td></tr>\
		     <tr><td>Nominal</td><td id='STANDARD_VALUE"+i+"'></td></tr>\
		     <tr><td>+TOL</td> <td id='UPPER_TOLERANCE"+i+"'>0.080</td></tr>\
		     <tr><td>-TOL</td><td id='LOWER_TOLERANCE"+i+"'></td> </tr>\
		     <tr><td>USL</td><td id='UPPER_SPEC_LIMIT"+i+"'></td> </tr>\
		     <tr><td>LSL</td><td id='LOWER_SPEC_LIMIT"+i+"'></td> </tr>\
		     <tr><td id='MAXX"+i+"'>Max</td><td id='MAX"+i+"'></td> </tr>\
		     <tr><td id='MINN"+i+"'>Min</td> <td id='MIN"+i+"'></td></tr>\
		     <tr><td>Std Dev</td><td id='STDEV"+i+"'></td> </tr>\
		     <tr><td>Mean</td><td id='AVERAGE"+i+"'></td> </tr>\
		     <tr><td>Cp</td><td id='CP"+i+"'></td> </tr>\
		     <tr><td>UCPK</td><td id='UCPK"+i+"'></td> </tr>\
		     <tr><td>LCPK</td><td id='LCPK"+i+"'></td></tr>\
		     <tr><td>Cpk</td><td id='CPK"+i+"'></td></tr>\
		     </table></td>\
		    <td</td>\
        </tr>\
      </table></div>\
      <div  id='main"+i+"' style=\"height:300px;width:92%;float:left;\" ></div>\
  </div>");
	$("#SIZE_SN"+i).text(result['SIZE_SN']);
	$("#STANDARD_VALUE"+i).text(result['STANDARD_VALUE']);
	$("#UPPER_TOLERANCE"+i).text(result['UPPER_TOLERANCE']);
	$("#LOWER_TOLERANCE"+i).text(result['LOWER_TOLERANCE']);
	$("#UPPER_SPEC_LIMIT"+i).text(result['UPPER_SPEC_LIMIT']);
	$("#LOWER_SPEC_LIMIT"+i).text(result['LOWER_SPEC_LIMIT']);
	$("#MAX"+i).text(result['MAX']);
	$("#MIN"+i).text(result['MIN']);
	$("#STDEV"+i).text(result['STDEV']);
	$("#AVERAGE"+i).text(result['AVERAGE']);
	$("#CP"+i).text(result['CP']);
	$("#UCPK"+i).text(result['UCPK']);
	$("#LCPK"+i).text(result['LCPK']);
	$("#CPK"+i).text(result['CPK']);
	if(result['MAX']>result['UPPER_SPEC_LIMIT']){
		$("#MAX"+i).css({"color":"#ff0000","font-weight":"bold"});
		$("#MAXX"+i).css({"color":"#ff0000","font-weight":"bold"});
	}
	if(result['MIN']<result['LOWER_SPEC_LIMIT']){
		$("#MIN"+i).css({"color":"#ff0000","font-weight":"bold"});
		$("#MINN"+i).css({"color":"#ff0000","font-weight":"bold"});
	}
	
/*	$("<div />",{
		id : "main"+i,
		name : "main"+i,
		height : 300,
		click : function() {
			console.log("div");
		}
	}).appendTo($("body"));*/
	var myChart = echarts.init(document.getElementById('main'+i));
	var markArr = [], temObj = null;
	result['xData'].forEach(function(v, i) {
	    if (v > result['UPPER_SPEC_LIMIT']||v < result['LOWER_SPEC_LIMIT']) {
	        temObj = {
	            value: v,
	            xAxis: i,
	            yAxis: v,
	            itemStyle: {
	                color: '#FF0B00'
	            }
	        }
	    }else{
	        temObj = {
	                value: 0,
	                xAxis: -1,
	                yAxis: 0,
	                lable:{show:false}
	        }
	    } 
	    markArr.push(temObj)
	});
	console.log(markArr);
    var option = {
    	    title : {
    	        text: "PART_NO:"+result['PART_NO']+"， MODEL_NO:"+result['MOLD_NO'],
    	        subtext: "MACHINE_NO:"+result['MACHINE_NO']+"， SIZE_SN:"+result['SIZE_SN']+"，MOLD_CAVITY_NO:"+result['MOLD_CAVITY_NO']+"，"+result['CAV']
    	    },
    	    tooltip : {
    	        trigger: 'axis'
    	    },
    	    legend: {
    	        data:['測量數據','USL','SL','LSL']
    	    },
    	    toolbox: {
    	        show : true,
    	        feature : {
    	            mark : {show: true},
    	            dataView : {show: true, readOnly: false},
    	            magicType : {show: true, type: ['line', 'bar']},
    	            restore : {show: true},
    	            saveAsImage : {show: true}
    	        }
    	    },
    	    calculable : true,
    	    xAxis : [
    	        {
    	            type : 'category',
    	            boundaryGap : false,
    	            data : result['sData'],
    	            
                
    	            //scale: true,
    	            //boundaryGap : false,
    	            //axisLine: {onZero: false},
    	            //splitLine: {show: false}
    	        }
    	    ],    grid: {
    	         left: '35',//因旋转导致名字太长的类目造成遮蔽，可以配合这两个属性
    	         bottom:'20%',// 分别表示：距离左边距和底部的距离，具体数值按实际情况调整
    	         containLabel: true
    	    },
    	    dataZoom:{
    	        realtime:true, //拖动滚动条时是否动态的更新图表数据
    	        height:25,//滚动条高度
    	        start:0,//滚动条开始位置（共100等份）
    	        end:100//结束位置（共100等份）
    	     },

    	    yAxis : [
    	        {
    	            type : 'value',
    	            splitLine:{show:false},
    	            boundaryGap:[1,1],
    	            //interval: 5,
    	            splitNumber : 6,
    	            min:(result['LOWER_SPEC_LIMIT']-0.100).toFixed(3),
    	            max:(result['UPPER_SPEC_LIMIT']+0.100).toFixed(3)
    	            

    	        }
    	    ],
    	    series : [
    	        {
    	            name:'測量數據',
    	            type:'line',
    	            data:result['xData'],
    	            symbol: 'circle', //设定为实心点
    	            symbolSize: 5, //设定实心点的大小
    	            lineStyle:{

    	            	color:'rgba(1,139,239,1)', //设置折线的颜色

    	            	},
    	            itemStyle:{
    	            	normal: {
    	            		 label: {show: false},
     	            	color:function (param) { //拐点颜色回调

    	            	    if (param.value >result['UPPER_SPEC_LIMIT']) {

    	            	        return '#ff0000';

    	            	    }else if (param.value <result['LOWER_SPEC_LIMIT']){

    	            	        return '#ff0000';

    	            	    }else {

    	            	        return 'rgba(1,139,239,1)';

    	            	    }
    	            	} 
    	            }
    	            },
     	            markPoint:{
    	           	          	   symbolSize: 40,//控制气泡大小
    	        	          		itemStyle:{
    	        		             color: '#ff0000',
    	        	          		},
    	            	data:markArr
    	            }, 
    	            markLine : {
    	                label:{//显示文本。b就是data的name，c就是yAxis的值
    	                    show:true,
    	                    position:'end',
    	                    formatter: '     {b}: {c}'
    	                    
    	                },
    	                data : [{
    	                	name:'USL',
    	                	yAxis: result['UPPER_SPEC_LIMIT'],
    	                	lineStyle:{               //警戒线的样式  ，虚实  颜色
                                //type:"solid",
    							color:"#87CEFA",
    						}
    	                },{
    	                	name:'LSL',
    	                	yAxis: result['LOWER_SPEC_LIMIT'],
    	                	lineStyle:{               //警戒线的样式  ，虚实  颜色
                                //type:"solid",
    							color:"#87CEFA",
    						}
    	                },{
    	                	name:'SL',
    	                	yAxis: result['STANDARD_VALUE'],
    	                	lineStyle:{               //警戒线的样式  ，虚实  颜色
                                //type:"solid",
    							color:"#008000",
    						}
    	                }]
    	                
    	            }
    	            
    	        }
    	    ]
    	};
    myChart.setOption(option);   
    $(window).resize(function(){
        myChart.resize();

    })
	
}