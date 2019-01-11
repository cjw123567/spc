package com.foxlink.spc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foxlink.spc.dao.testdao;

@Service("testService")
@Transactional
public class testService {
	
	@Value("123456789654879")
	private String test123;
	private testdao testDAO;
	
	
	
	public void setTest123(String test123) {
		this.test123 = test123;
	}

	@Autowired
	@Qualifier("testDAO")
	public void setTestDAO(testdao testDAO) {
		this.testDAO = testDAO;
	}
	
	public void test(){
		System.out.println("进入service方法了:"+this.test123);
		testDAO.test();
	}

	public String getEmp(String id) {
		// TODO Auto-generated method stub
		String result = testDAO.getEmp(id);
		return result;
	}
}
