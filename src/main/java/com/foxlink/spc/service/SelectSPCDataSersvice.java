package com.foxlink.spc.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foxlink.spc.dao.SelectSPCDataDao;
import com.foxlink.spc.pojo.SelectSPCData;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;


@Service("SelectSPCDataSersvice")
@Transactional
public class SelectSPCDataSersvice {
	private SelectSPCDataDao selectSPCDataDao;
	private static Logger logger = Logger.getLogger(SelectSPCDataSersvice.class);
	
	@Autowired
	public SelectSPCDataSersvice(SelectSPCDataDao selectSPCDataDao) {
		this.selectSPCDataDao = selectSPCDataDao;
	}

	public String ShowDataName(String part_No, String start, String end) {
		// TODO Auto-generated method stub
		JsonObject result = new JsonObject();
		List<SelectSPCData>SpecList = selectSPCDataDao.ShowDataName(part_No,start,end);
		//System.out.println("專案號"+strProNumber2V);
		Gson gson = new GsonBuilder().serializeNulls().create();
		if(SpecList.size()==0||SpecList==null) {
			result.addProperty("StatusCode", "500");
			result.addProperty("message", "查無數據");
		}else {
			result.addProperty("StatusCode", "200");
			result.addProperty("message", gson.toJson(SpecList));
		}
		System.out.println(result.toString());
		return result.toString();
	}
}
