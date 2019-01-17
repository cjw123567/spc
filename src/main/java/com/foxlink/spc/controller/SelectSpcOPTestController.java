package com.foxlink.spc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
@RequestMapping("/SelectSpcOPTest")
public class SelectSpcOPTestController {
	@RequestMapping(value="/ShowSelectSpcOPTest",method=RequestMethod.GET)
	public String ShowAllAccountPage(){
		return "OPTestFileSelect";
	}
}
