package com.foxlink.spc.pojo;

public class SPECTool {
	private String INSPECTION_ITEM;
	private String INSPECTION_TYPE;
	private String DEVICE_NUM;
	private String INSPECTION_CONTENT;
	private String FREQUENCY;
	
	public String getINSPECTION_ITEM() {
		return INSPECTION_ITEM;
	}
	public void setINSPECTION_ITEM(String iNSPECTION_ITEM) {
		INSPECTION_ITEM = iNSPECTION_ITEM;
	}
	public String getINSPECTION_TYPE() {
		return INSPECTION_TYPE;
	}
	public void setINSPECTION_TYPE(String iNSPECTION_TYPE) {
		INSPECTION_TYPE = iNSPECTION_TYPE;
	}
	public String getDEVICE_NUM() {
		return DEVICE_NUM;
	}
	public void setDEVICE_NUM(String dEVICE_NUM) {
		DEVICE_NUM = dEVICE_NUM;
	}
	public String getINSPECTION_CONTENT() {
		return INSPECTION_CONTENT;
	}
	public void setINSPECTION_CONTENT(String iNSPECTION_CONTENT) {
		INSPECTION_CONTENT = iNSPECTION_CONTENT;
	}
	public String getFREQUENCY() {
		return FREQUENCY;
	}
	public void setFREQUENCY(String fREQUENCY) {
		FREQUENCY = fREQUENCY;
	}
	@Override
	public String toString() {
		return "SPECTool [INSPECTION_ITEM=" + INSPECTION_ITEM + ", INSPECTION_TYPE=" + INSPECTION_TYPE + ", DEVICE_NUM="
				+ DEVICE_NUM + ", INSPECTION_CONTENT=" + INSPECTION_CONTENT + ", FREQUENCY=" + FREQUENCY + "]";
	}
	
}
