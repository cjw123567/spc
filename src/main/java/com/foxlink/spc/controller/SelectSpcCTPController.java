package com.foxlink.spc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
@RequestMapping("/SelectSpcCTP")
public class SelectSpcCTPController {
	@RequestMapping(value="/ShowSelectSpcCTP",method=RequestMethod.GET)
	public String ShowAllAccountPage(){
		return "CTPFileSelect";
	}
}
