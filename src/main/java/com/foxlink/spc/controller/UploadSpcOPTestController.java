package com.foxlink.spc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
@RequestMapping("/UploadSpcOPTest")
public class UploadSpcOPTestController {
	@RequestMapping(value="/ShowUploadSpcOPTest",method=RequestMethod.GET)
	public String ShowAllAccountPage(){
		return "OPTestFileUpload";
	}
}
