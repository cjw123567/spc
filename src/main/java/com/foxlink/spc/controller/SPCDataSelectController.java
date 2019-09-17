package com.foxlink.spc.controller;

import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.foxlink.spc.service.SelectCTPService;
import com.foxlink.spc.service.SelectSPCDataSersvice;



@Controller
@RequestMapping("/SelectSPCData")
public class SPCDataSelectController {

	private static Logger logger=Logger.getLogger(SPCDataSelectController.class);
	private ApplicationContext context=new ClassPathXmlApplicationContext("/spring/applicationContext.xml");
	private SelectSPCDataSersvice selectSPCDataService;
	
	@RequestMapping(value="/ShowSelectSPCData", method=RequestMethod.GET)
	public String ShowSPCDataPage(){
		return "SPCDataSelect";
	}
	
	@RequestMapping(value="/ShowSPCDataName",method=RequestMethod.POST,produces="application/json;charset=utf-8")
	@ResponseBody
	public String ShowSPCDataName(@RequestParam(value="Part_No")String Part_No,@RequestParam(value="Start")String Start,@RequestParam(value="End")String End){
		selectSPCDataService = (SelectSPCDataSersvice) context.getBean("SelectSPCDataSersvice");
		System.out.println(Part_No);
		System.out.println(Start);
		System.out.println(End);
		return selectSPCDataService.ShowDataName(Part_No,Start,End);
	}
}
