package com.elimunk.coupons.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "addresses")
public class Address {

	// Properties

	@Id
	@GeneratedValue
	@Column(name = "id", unique = true, nullable = false)
	private long id;
	@Column(name = "country", unique = false, nullable = false)
	private String country;
	@Column(name = "city", unique = false, nullable = false)
	private String city;
	@Column(name = "street", unique = false, nullable = false)
	private String street;
	@Column(name = "number", unique = false, nullable = false)
	private int number;
	@Column(name = "zipCode", unique = false, nullable = false)
	private int zipCode;

	// constructor

	public Address() {
		super();
	}

	// setters & getters

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public int getZipCode() {
		return zipCode;
	}

	public void setZipCode(int zipCode) {
		this.zipCode = zipCode;
	}

	// methods

	@Override
	public String toString() {
		return "Street: " + getStreet() + " Country: " + getCountry() + " City: " + getCity() + " zip code: "
				+ getZipCode() + " \n";
	}

}
