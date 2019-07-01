package com.elimunk.coupons.beans;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.elimunk.coupons.enums.Category;
import com.elimunk.coupons.utils.DateUtils;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Coupons")
public class Coupon implements Serializable{

	private static final long serialVersionUID = 1L;
	
//  Properties

	@Id
	@GeneratedValue
	@Column(name = "coupon_Id")
	private long id;
		
	@Column(name = "category", length=50, unique=false, nullable=false)
    @Enumerated(EnumType.STRING)
	private Category category;
	
	@Column(name = "title", length=500, unique=true, nullable=false)
	private String title;
	
	@Column(name = "description", unique=false, nullable=false)
	private String description;
	
	@Column(name = "start_date", nullable=false)
	@Temporal(TemporalType.DATE)
	private Date startDate;
	
	@Column(name = "end_date",unique=false, nullable=false)
	@Temporal(TemporalType.DATE)
	private Date endDate;
	
	@Column(name = "amount",unique=false, nullable=false)
	private int amount;
	
	@Column(name = "price",unique=false, nullable=false)
	private double price;
	
	@Column(name = "image",unique=false, nullable=false)
	private String image;
	
	@Column(name = "in_stock",unique=false, nullable=false)
	private boolean inStock;

	@JoinColumn(unique=false, nullable=false)
	@ManyToOne()
	private Company company;
	
	@OneToMany(mappedBy = "coupon", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Purchase> couponPurchases;
	
	
//  constructor

	public Coupon(Company company, Category category, String title, String description, Date startDate, Date endDate,
			int amount, double price, String image, boolean inStock) {
		this.company = company;
		this.category = category;
		this.title = title;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amount = amount;
		this.price = price;
		this.image = image;
		this.inStock = inStock;
	}

//	Default constructor
	public Coupon() {
	}

//  Setters & Getters

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	public boolean getIsInStock() {
		return inStock;
	}
	
	public void setInStock(boolean inStock) {
		this.inStock = inStock;
	}
	

//  methods  


	@Override
	public String toString() {
		return "Coupon ID: " + getId() + ", Company: " + getCompany() + ", Category: " + getCategory()
				+ "\n Title: " + getTitle() + ", Description: " + getDescription() + "\n Amount: " + getAmount()
				+ ", Price: " + getPrice() + ", Image: " + getImage() + "\n Start Date: "
				+ DateUtils.stringifyDate(getStartDate()) + ", End Date: " + DateUtils.stringifyDate(getEndDate())  + ",In stock:" + getIsInStock()
				+ "\n";
	}
}
