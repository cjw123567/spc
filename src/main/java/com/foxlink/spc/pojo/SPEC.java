package com.foxlink.spc.pojo;

public class SPEC {
	private String WorkShop;
	private String Inspection_Item;
	private int Nominal_Dim;
	private int Upper_Dim;
	private int Lower_Dim;
	private String Frequency;
	private String Status;
	private String Remark1;
	public String getWorkShop() {
		return WorkShop;
	}
	public void setWorkShop(String workShop) {
		WorkShop = workShop;
	}
	public String getInspection_Item() {
		return Inspection_Item;
	}
	public void setInspection_Item(String inspection_Item) {
		Inspection_Item = inspection_Item;
	}
	public int getNominal_Dim() {
		return Nominal_Dim;
	}
	public void setNominal_Dim(int nominal_Dim) {
		Nominal_Dim = nominal_Dim;
	}
	public int getUpper_Dim() {
		return Upper_Dim;
	}
	public void setUpper_Dim(int upper_Dim) {
		Upper_Dim = upper_Dim;
	}
	public int getLower_Dim() {
		return Lower_Dim;
	}
	public void setLower_Dim(int lower_Dim) {
		Lower_Dim = lower_Dim;
	}
	public String getFrequency() {
		return Frequency;
	}
	public void setFrequency(String frequency) {
		Frequency = frequency;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	public String getRemark1() {
		return Remark1;
	}
	public void setRemark1(String remark1) {
		Remark1 = remark1;
	}
	
	@Override
	public String toString() {
		return "SPEC [WorkShop=" + WorkShop + ", Inspection_Item=" + Inspection_Item + ", Nominal_Dim=" + Nominal_Dim
				+ ", Upper_Dim=" + Upper_Dim + ", Lower_Dim=" + Lower_Dim + ", Frequency=" + Frequency + ", Status="
				+ Status + ", Remark1=" + Remark1 + "]";
	}
}
