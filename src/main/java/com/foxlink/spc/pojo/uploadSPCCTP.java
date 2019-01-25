package com.foxlink.spc.pojo;

public class uploadSPCCTP {

	//id號
	private String id;
	//專案名稱
	private String PROJECT_NAME;
	//工站號碼
	private String WORKSHOP;
	//工站名稱
	private String WORKSHOP_NAME;
	//設備名稱
	private String MACHINE_NAME;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPROJECT_NAME() {
		return PROJECT_NAME;
	}
	public void setPROJECT_NAME(String pROJECT_NAME) {
		PROJECT_NAME = pROJECT_NAME;
	}
	public String getWORKSHOP() {
		return WORKSHOP;
	}
	public void setWORKSHOP(String wORKSHOP) {
		WORKSHOP = wORKSHOP;
	}
	public String getWORKSHOP_NAME() {
		return WORKSHOP_NAME;
	}
	public void setWORKSHOP_NAME(String wORKSHOP_NAME) {
		WORKSHOP_NAME = wORKSHOP_NAME;
	}
	public String getMACHINE_NAME() {
		return MACHINE_NAME;
	}
	public void setMACHINE_NAME(String mACHINE_NAME) {
		MACHINE_NAME = mACHINE_NAME;
	}
	
}
