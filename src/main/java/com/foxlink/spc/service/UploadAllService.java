package com.foxlink.spc.service;

import java.io.File;
import java.io.InputStream;
import java.util.List;

import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.multipart.MultipartFile;

import com.foxlink.spc.dao.UploadAllDao;

@Service("UploadAllService")
@Transactional
public class UploadAllService {
	private UploadAllDao uploadAllDao;
	private static Logger logger = Logger.getLogger(UploadAllService.class);

	@Autowired
	public UploadAllService(UploadAllDao uploadAllDao) {
		this.uploadAllDao = uploadAllDao;
	}

	
	public String CheckPartNumber(String strPartNumber2V) {
		return uploadAllDao.CheckPartNumber(strPartNumber2V);
	}
	
	public String uploadOK(MultipartFile file,String strUserName) {
		return uploadAllDao.uploadOK(file,strUserName);
	}

	

}
