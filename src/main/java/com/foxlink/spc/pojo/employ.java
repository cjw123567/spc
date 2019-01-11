package com.foxlink.spc.pojo;

public class employ {
	private String name;
	private String id;
	private String costid;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCostid() {
		return costid;
	}
	public void setCostid(String costid) {
		this.costid = costid;
	}
	@Override
	public String toString() {
		return "employ [name=" + name + ", id=" + id + ", costid=" + costid + "]";
	}
	
	
}
