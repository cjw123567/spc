package com.foxlink.spc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
@RequestMapping("/UploadSpcCTP")
public class UploadSpcCTPController {
	@RequestMapping(value="/ShowUploadSpcCTP",method=RequestMethod.GET)
	public String ShowAllAccountPage(){
		return "CTPFileUpload";
	}
}

//SelectSpcCTP