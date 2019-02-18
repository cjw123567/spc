package com.foxlink.spc.service;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foxlink.spc.dao.UploadAllDao;
//導入包下的類
import com.foxlink.spc.dao.UploadCTPDao;

@Service("UploadCTPService")
public class UploadCTPService {
	private UploadCTPDao uploadCTPDao;
	private static Logger logger = Logger.getLogger(UploadAllService.class);
	
	@Autowired
	public UploadCTPService(UploadCTPDao uploadCTPDao) {
		this.uploadCTPDao = uploadCTPDao;
	}
	
	public String CheckPartNumber(String strPartNumber2V) {
		String strResult = null;
		String strPartNumber = strPartNumber2V.substring(0, strPartNumber2V.indexOf("_"));
		String strSQL = "SELECT COUNT(*) from spc.spec_ctp where Part_Number_V LIKE '" + strPartNumber + "%'";
		
		//String strSQL = "SELECT COUNT(*) from spc.spec where Part_Number_V LIKE '" + "?" + "%'";
		try {
			Integer iCount = uploadCTPDao.selectPartNumber(strSQL);
			if (iCount > 0) {
				strResult = "Y";
			} else {
				strResult = "N";
			}
		} catch (Exception e) {
			logger.error("UploadALLService_CheckPartNumber_Error", e);
		}
		return strResult;
	}
}
