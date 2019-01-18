package com.foxlink.spc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
@RequestMapping("/SelectSpec")
public class SelectSpecController {
	@RequestMapping(value="/ShowSelectSpec", method=RequestMethod.GET)
	public String ShowAllAccountPage(){
		return "SPFileSelect";
	}
}
