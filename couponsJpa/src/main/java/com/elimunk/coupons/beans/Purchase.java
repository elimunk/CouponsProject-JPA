package com.elimunk.coupons.beans;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.elimunk.coupons.utils.DateUtils;

@Entity
@Table(name = "purchases")
public class Purchase implements Serializable {

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

	@Column(name = "note", nullable = true, length = 5000)
	private String note;

	@Column(name = "date", nullable = false)
	@Temporal(TemporalType.DATE)
	private Date date;

	@Column(name = "total_price", unique = false, nullable = false)
	private double totalPrice;

	@Column(name = "discountCode", unique = false, nullable = true)
	private String discountCode;

	// constructors

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

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getDiscountCode() {
		return discountCode;
	}

	public void setDiscountCode(String discountCode) {
		this.discountCode = discountCode;
	}

	// methods

	@Override
	public String toString() {
		return "Purchase Id: " + getId() + " \nCustomer: " + getCustomer() + " \nCoupon: " + getCoupon() + " \nDate: "
				+ DateUtils.stringifyDate(getDate()) + " \nAmount: " + getAmount() + " \nTotal price: "
				+ getTotalPrice() + " , Discount: " + getDiscountCode() + " \nNote: " + getNote() + "\n";
	}

}
