package com.foxlink.spc.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.foxlink.spc.pojo.SelectSPCData;


@Repository("SelectSPCDataDao")
public class SelectSPCDataDao {
	private JdbcTemplate jdbcTemplate;
	private static Logger logger = Logger.getLogger(SelectSPCDataDao.class);
	private String projectName;
	@Autowired
	public SelectSPCDataDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	//插入數據
	public int inser(String sql) {
		Integer integer=	jdbcTemplate.update(sql);
		return integer;
	}
	//刪除數據
	public int delete(String sql) {
		Integer integer=	jdbcTemplate.update(sql);
		return integer;
	}
	//查詢數據
	public Integer selectPartNumber(String sql) {

		return jdbcTemplate.queryForObject(sql, Integer.class);
		
	}

	public List<SelectSPCData> ShowDataName(String doc_No,String part_No, String start, String end) {
		// TODO Auto-generated method stub
		String strSQL = "SELECT DISTINCT(Doc_No),Measure_Date from SPC.PRODUCT_SIZE_MEASURE_RECORD where 1=1";
		List<SelectSPCData> SpecList = new ArrayList<>();
		try {
			if(doc_No!=null&&doc_No!=""){
    			strSQL+=" and Doc_No like'"+doc_No+"%'";  
			}
    		if(part_No!=null&&part_No!=""){
    			strSQL+=" and Part_No ='"+part_No+"'";  
			}
			if(start!=null&&start!=""){
				strSQL+=" and Measure_Date >='"+start+"'";  
			}
			if(end!=null&&end!=""){
				strSQL+=" and Measure_Date <='"+end+"'";  
			}
			strSQL+=" order by Measure_Date";  
			System.out.println(strSQL);
			RowMapper<SelectSPCData> mapper = new BeanPropertyRowMapper<>(SelectSPCData.class); 
			SpecList = jdbcTemplate.query(strSQL, mapper);
		} catch (Exception e) { 
			// TODO: handle exception
			e.printStackTrace();
			logger.error("查找SPC档案名稱時發生錯誤："+e);
		}

		return SpecList;
	}
}
