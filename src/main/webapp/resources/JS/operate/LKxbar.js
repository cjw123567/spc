$(document).ready(function(){
	var varUrl='http://127.0.0.1:5000/apis_spc_v2/?data=6.64,6.64,6.65,6.63,6.65,6.65,6.64,1';
	$.ajax({
		   url:'../LkTrendChart/getXbarData', 
		   type:'get',
		   //data:{varPartNO:varPartNO,varMoldNO:varMoldNO,varMOLD_CAVITY_QTY:varMOLD_CAVITY_QTY,varYearMonth:varYearMonth,varYearMonth2:varYearMonth2,varMOLD_CAVITY_NO:varMOLD_CAVITY_NO},
		   success:function(json){
			json=JSON.parse(json);
			console.log(json);
			if(json == null || json == ''){
				alert("查無料號資料！");
				return;
			}else{

					creatChart(json);
			}
			
		   }, 
		   error:function(err){ 
		    alert("查詢所有料號失敗，失敗原因："+err); 
		   } 
	})
})

function creatChart(result){
	var myChart = echarts.init(document.getElementById('main'));
	var xdd=new Array();
	for( i=0;i<result['orig_data'].length;i++){
		xdd.push(i);
	}
	var markArr = [], temObj = null;
	var coordkArr = [],coordObj0=null;coordObj1=null;
	coordkArr.push({name:'USL',
    	            yAxis: result['ucl'],
    	            lineStyle:{//警戒线的样式  ，虚实  颜色
                     //type:"solid",
    				color:"#87CEFA",
    			}
    	                });
	coordkArr.push({
    	name:'LSL',
    	yAxis: result['lcl'],
    	lineStyle:{//警戒线的样式  ，虚实  颜色
            //type:"solid",
			color:"#87CEFA",
		}
    });
	coordkArr.push({
    	name:'SL',
    	yAxis: result['center'],
    	lineStyle:{   //警戒线的样式  ，虚实  颜色
            //type:"solid",
			color:"#008000",
		}
    });
	result['orig_data'].forEach(function(v, i) {		
	    if (v > result['ucl']||v < result['lcl']) {
	        temObj = {value: v,xAxis: i,yAxis: v,
	            itemStyle: {  color: '#FF0B00' }
	        };
	        coordObj0={coord:[i,(result['lcl']-0.1).toFixed(3)],
        		valueIndex: 0,
        		symbol:'none',
                lineStyle: {  color: '#FF0000'},
                label: { show: false,}
        	};
	    	var temCoord=[];
	        coordObj1={coord:[i,v],valueIndex: 0,symbol:'none',}
	        temCoord.push(coordObj0);temCoord.push(coordObj1);
	  	  coordkArr.push(temCoord);
	    }else{
	        temObj = { value: 0, xAxis: -1, yAxis: 0, lable:{show:false}};
	    } 
	    markArr.push(temObj);
	});
    var option = {
    	    title : {
    	        text: result['chart_type'],
    	        subtext: 'x'
    	    },
    	    tooltip : {   	    	  
    	    	        trigger: 'axis',
    	    	formatter:function(params){
    	    		console.log(params);
    	    		return params[0].seriesName+':'+params[0].value+'<br/>'+
    	    		       'X軸數據:'+params[0].name
    	    	}

    	    	       
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
    	            data : xdd,
    	            
                
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
    	            scale: true,
    	            boundaryGap:[1,1],
    	            //interval: 5,
    	            splitNumber : 6,
    	            min:(result['lcl']-0.1).toFixed(3),
    	            max:(result['ucl']+0.1).toFixed(3)
    	            

    	        }
    	    ],
    	    series : [
    	        {
    	            name:'測量數據',
    	            type:'line',
    	            data:result['orig_data'],
    	            symbol: 'circle', //设定为实心点
    	            smooth:true,  //这句就是让曲线变平滑的 

    	                    symbolSize:(params) => {    	            	        
    	                        if(params<result['lcl']){return 12;}else{return 6;}    	                        
    	                    }, //设定实心点的大小,大于ucl，或小于lcl设置12，其他的6
    	            lineStyle:{
                        
    	            	color:'rgba(1,139,239,1)', //设置折线的颜色

    	            	},
    	            itemStyle:{
    	            	normal: {
    	            		 label: {show: true}, // 拐點显示数值
     	            	color:function (param) { //拐点颜色回调

    	            	    if (param.value >result['ucl']) {

    	            	        return '#ff0000';

    	            	    }else if (param.value <result['lcl']){

    	            	        return '#ff0000';

    	            	    }else {

    	            	        return 'rgba(1,139,239,1)';

    	            	    }
    	            	},
    	            }
    	            },
/*     	            markPoint:{
    	           	          	   symbolSize: 40,//控制气泡大小
    	        	          		itemStyle:{
    	        		             color: '#ff0000',
    	        	          		},
    	            	data:markArr
    	            },*/ 
    	            markLine : {
    	                label:{//显示文本。b就是data的name，c就是yAxis的值
    	                    show:true,
    	                    position:'end',
    	                    formatter: '     {b}: {c}'
    	                    
    	                },
    	                data : coordkArr
    	                
    	            },
    	            
    	        }
    	    ]
    	};
    myChart.setOption(option);   
    $(window).resize(function(){
        myChart.resize();

    })
    //创建lable
   var varop=result['violating_points'];
    var varjson ={'1 beyond 3*sigma':'一个点远离中心线超过3倍标准差',
    		      '2 of 3 beyond 2*sigma':'连续3个点，有2个点远离中心线2倍标准差',
    		      '4 of 5 beyond 1*sigma':'连续5个点，有4个点远离中心线1倍标准差',
    		      '7 on one side':'连续7个点在同一侧',
    		      '8 on one side':'连续8个点在同一侧',
    		      '9 on one side':'连续9个点在同一侧',
    		      '6 trending':'连续6个点持续上升或下降，可能设备磨损',
    		      '14 up down':'14个点交互升降，如此整齐的数据有没有可能作假？',
    		      '15 below 1*sigma':'连续15点在中心线在1倍标准差之内',
    		      '8 beyond 1*sigma on both sides':'连续8点在中心线的1倍标准差之外'
    		}
    for(var i in varop){
    	var tempValue=varjson[i]+":";
        for(var j =0;j<varop[i].length;j++){
        	tempValue+='['+varop[i][j]+','+result['orig_data'][varop[i][j]]+']';
        	if(j!=varop[i].length-1){tempValue+=';'}
        }
        $('body').append('<label>'+tempValue+'</label></br>');
    }

}





