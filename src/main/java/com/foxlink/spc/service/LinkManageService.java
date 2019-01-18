package com.foxlink.spc.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foxlink.spc.dao.LinkManageDao;


@Service("linkManageService")
@Transactional
public class LinkManageService {
	private static Logger logger=Logger.getLogger(LinkManageService.class);
	private LinkManageDao inkManageDao;
	@Autowired
	public void setInkManageDao(LinkManageDao inkManageDao) {
		this.inkManageDao = inkManageDao;
	}
	
	

}
