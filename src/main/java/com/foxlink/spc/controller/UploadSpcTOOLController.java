package com.foxlink.spc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
@RequestMapping("/UploadSpcTOOL")
public class UploadSpcTOOLController {
	@RequestMapping(value="/ShowUploadSpcTOOL",method=RequestMethod.GET)
	public String ShowAllAccountPage(){
		return "TOOLFileUpload";
	}
}
