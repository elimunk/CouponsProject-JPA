package com.elimunk.coupons.beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "customers")
public class Customer implements Serializable{

	private static final long serialVersionUID = 1L;
	
	// Properties
	@Id
	@Column(name = "customer_id")
	private long Id;
	
	@Column(name = "first_name", nullable = false)
	private String firstName;
	
	@Column(name = "last_name", nullable = false)
	private String lastName;
	
	@Column(name = "email", nullable = false, unique=true )
	private String email;
	
	@Column(name = "phone_number", nullable = false, unique=true)
	private String phoneNumber;
	
	@JoinColumn(name = "user", nullable = false, unique=true)
	@OneToOne( cascade=CascadeType.ALL, fetch= FetchType.EAGER)
	private User userCustomer;
	
	@JsonIgnore
	@OneToMany(mappedBy="customer", cascade=CascadeType.REMOVE, fetch = FetchType.LAZY )
	private List <Purchase> purchases = new ArrayList<>();

	
	// constructor

	public Customer(String firstName, String lastName, String email, String phoneNumber, User userCustomer) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.userCustomer = userCustomer;
	}
	
	public Customer(long id, String firstName, String lastName, String email, String phoneNumber) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}

	public Customer() {
	}

	// setters & getters

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		this.Id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public User getUserCustomer() {
		return userCustomer;
	}

	public void setUserCustomer(User userCustomer) {
		this.userCustomer = userCustomer;
	}
	
	// methods

	@Override
	public String toString() {
		return "Cusromer Id: " + getId() + ", First Name: " + getFirstName() + ", Last Name: " + getLastName()
				+ ", Email: " + getEmail()+ ", Phone number: " + getPhoneNumber() /* + "Login details: "+ userCustomer.toString() */+ "\n" ;
	}

}
