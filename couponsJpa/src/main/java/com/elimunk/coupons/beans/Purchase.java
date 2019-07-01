package com.elimunk.coupons.beans;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "purchases")
public class Purchase implements Serializable{

	private static final long serialVersionUID = 1L;
	
	// Properties
	@Id
	@GeneratedValue
	@Column(name = "purchase_id")
	private long purchaseId;
	
	@Column(name = "amount", nullable = false)
	private int amount;
	
	@JoinColumn(nullable = false)
	@ManyToOne()
	private Customer customer;
	
	@JoinColumn(nullable = false)
	@ManyToOne()
	private Coupon coupon;
	

	// constructors

	public Purchase(Customer customer, Coupon coupon, int amount) {
		this.customer = customer;
		this.coupon = coupon;
		this.amount = amount;
	}

	public Purchase() {
	}

	// setters & getters

	public long getId() {
		return purchaseId;
	}

	public void setId(long id) {
		this.purchaseId = id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomerId(Customer customer) {
		this.customer = customer;
	}

	public Coupon getCoupon() {
		return coupon;
	}

	public void setCoupon(Coupon coupon) {
		this.coupon = coupon;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	@Override
	public String toString() {
		return "Purchase Id: " + getId() + " \nCustomer: " + getCustomer()
		+ " \nCoupon: " + getCoupon() + " \nAmount: " + getAmount() +"\n";
	}
	
}
