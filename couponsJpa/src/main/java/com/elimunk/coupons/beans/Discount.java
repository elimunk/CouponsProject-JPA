package com.elimunk.coupons.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "discountes")
public class Discount {

	// Properties

	@Id
	@Column(name = "code", unique = true, nullable = false)
	private String code;

	@Column(name = "discount", unique = false, nullable = false)
	private int discount;

	@Column(name = "expired", unique = false, nullable = true)
	@Temporal(TemporalType.DATE)
	private Date expired;

	@Column(name = "amount", unique = false, nullable = true)
	private Integer amount;

	@Column(name = "amount_of_uses", unique = false, nullable = true)
	private int amountOfUses;

	@Column(name = "amountLeft", unique = false, nullable = true)
	private Integer amountLeft;

	// constructor

	public Discount() {
	}

	// setters & getters

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public Date getExpired() {
		return expired;
	}

	public void setExpired(Date expired) {
		this.expired = expired;
	}

	public int getAmountOfUses() {
		return amountOfUses;
	}

	public void setAmountOfUses(int amountOfUses) {
		this.amountOfUses = amountOfUses;
	}

	public Integer getAmountLeft() {
		return amountLeft;
	}

	public void setAmountLeft(Integer amountLeft) {
		this.amountLeft = amountLeft;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	// methods

	@Override
	public String toString() {
		return " Discount: " + getCode() + " , " + getDiscount() + " , " + getAmount() + " ";
	}

}
