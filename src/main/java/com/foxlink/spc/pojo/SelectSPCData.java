package com.foxlink.spc.pojo;

public class SelectSPCData {
	private String Doc_No;
	private String Part_No;
	private String Mold_No;
	private String Measure_Date;
	public String getDoc_No() {
		return Doc_No;
	}
	public void setDoc_No(String doc_No) {
		Doc_No = doc_No;
	}
	public String getPart_No() {
		return Part_No;
	}
	public void setPart_No(String part_No) {
		Part_No = part_No;
	}
	public String getMold_No() {
		return Mold_No;
	}
	public void setMold_No(String mold_No) {
		Mold_No = mold_No;
	}
	
	public String getMeasure_Date() {
		return Measure_Date;
	}
	public void setMeasure_Date(String measure_Date) {
		Measure_Date = measure_Date;
	}
	@Override
	public String toString() {
		return "SelectSPCData [Doc_No=" + Doc_No + ", Part_No=" + Part_No + ", Mold_No=" + Mold_No + ", Measure_Date="
				+ Measure_Date + "]";
	}
	
	
}
