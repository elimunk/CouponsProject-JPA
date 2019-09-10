package com.elimunk.coupons.beans;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.elimunk.coupons.enums.ClientType;

@Entity
@Table(name = "users")
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	// Properties

	@Id
	@GeneratedValue
	@Column(name = "user_id")
	private long id;

	@Column(name = "user_name", unique = true, nullable = false)
	private String userName;

	@Column(name = "password", nullable = false)
	private String password;

	@Column(name = "type", nullable = false)
	@Enumerated(EnumType.STRING)
	private ClientType type;

	@JoinColumn(nullable = true)
	@ManyToOne
	private Company company;

	// constructors

	public User() {
	}

	// setters & getters

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company userCompany) {
		this.company = userCompany;
	}

	public ClientType getType() {
		return type;
	}

	public void setType(ClientType type) {
		this.type = type;
	}

	private String printCompanyIdIfExsit() {
		return (this.getCompany() != null && this.getCompany().getId() != 0) ? ", CompanyId: " + getCompany().getId(): "";
	}

	// methods

	@Override
	public String toString() {
		return "User Id: " + getId() + ", Username: " + getUserName() + ", Type: " + getType() + printCompanyIdIfExsit()
				+ "\n";
	}
}
