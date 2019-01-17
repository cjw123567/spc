package com.foxlink.spc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
@RequestMapping("/SelectSpcTOOL")
public class SelectSpcTOOLController {
	@RequestMapping(value="/ShowSelectSpcTOOL",method=RequestMethod.GET)
	public String ShowAllAccountPage(){
		return "TOOLFileSelect";
	}
}
