package com.foxlink.spc.dao;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.foxlink.spc.pojo.employ;

@Repository("testDAO")
public class testdao {
	
	public void test(){
		System.out.println("进入dao方法了");
	}

	public String getEmp(String id) {
		// 创建Spring对象
	    String config = "/spring/applicationContext.xml";
	    ApplicationContext app = new ClassPathXmlApplicationContext(config);
	    // 创建template
	    JdbcTemplate template = app.getBean("jdbcTemplate", JdbcTemplate.class);
	    
		String sql = "select t.name,t.id,t.costid from csr_employee t where t.id = ?";
		
		// 创建Mapper，BeanPropertyRowMapper传入对象类，将会自动映射结果
        RowMapper<employ> mapper = new BeanPropertyRowMapper<>(employ.class);
        
        Object a[] = new Object[1];
        a[0] = id;
 
        // 查询结果query(sql语句，Mapper对象); 会返回List集合
        List<employ> persons = template.query(sql, a,mapper);
		
		return persons.toString();
	}
}
