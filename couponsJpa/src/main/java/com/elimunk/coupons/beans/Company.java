package com.elimunk.coupons.beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "companies")
public class Company implements Serializable {

	private static final long serialVersionUID = 1L;

	// Properties

	@Id
	@GeneratedValue
	@Column(name = "company_id")
	private long id;

	@Column(name = "company_name", unique = true, nullable = false)
	private String name;

	@Column(name = "company_logo", length = 2000, unique = true)
	private String logo;

	@JsonIgnore
	@OneToMany(mappedBy = "company", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
	private List<Coupon> companyCoupons = new ArrayList<>();

	@JsonIgnore
	@OneToMany(mappedBy = "company", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
	private List<User> companyUsers = new ArrayList<>();

	// constructor

	public Company() {
	}

	// setters & getters

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLogo() {
		return this.logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public List<Coupon> getCompanyCoupons() {
		return companyCoupons;
	}

	public void setCompanyCoupons(List<Coupon> companyCoupons) {
		this.companyCoupons = companyCoupons;
	}

	public List<User> getCompanyUsers() {
		return companyUsers;
	}

	public void setCompanyUsers(List<User> companyUsers) {
		this.companyUsers = companyUsers;
	}

	// methods

	@Override
	public String toString() {
		return "Company Id: " + getId() + ", Company Name: " + getName() + ", Logo: " + getLogo() + "\n";
	}

}
