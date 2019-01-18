package com.foxlink.spc.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.foxlink.spc.service.LinkManageService;


@Controller
@RequestMapping("/LinkManage")
public class LinkManageController {
	private static Logger logger=Logger.getLogger(LinkManageController.class);
	private ApplicationContext context=new ClassPathXmlApplicationContext("/spring/applicationContext.xml");
	private LinkManageService linkManageService;

	@RequestMapping(value="/ShowLinkManage",method=RequestMethod.GET)
	public String ShowLinkManagePage(){
		return "LinkManage";
	}
	
	@RequestMapping(value="/ShowAllLink",method=RequestMethod.POST)
	public String ShowAllLink(){
		return null;
	}

}
