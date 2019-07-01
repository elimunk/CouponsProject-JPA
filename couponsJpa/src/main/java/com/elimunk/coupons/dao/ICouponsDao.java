package com.elimunk.coupons.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.elimunk.coupons.beans.Company;
import com.elimunk.coupons.beans.Coupon;
import com.elimunk.coupons.enums.Category;

public interface ICouponsDao extends CrudRepository<Coupon, Long> {

	public boolean existsByTitle(String title);
	public boolean existsById(long id);
	public void deleteById(long id);
	public void deleteByCompany(Company company);
	public Coupon findById(long id);
	public Coupon findByTitle(String title);
	public List<Coupon> findAll();
	public List<Coupon> findByCompany(Company company);
	public List<Coupon> findByCategory(Category Category);
	public List<Coupon> findByCompanyAndCategory(Company company, Category Category);

	@Modifying
	@Query("UPDATE Coupon SET amount=amount-:amount WHERE coupon_id=:couponId")
	public void updateCouponAmount(@Param("couponId") long couponId, @Param("amount") int amount);

	@Modifying
	@Query("UPDATE Coupon SET inStock=:inStock WHERE coupon_id=:couponId")
	public void updateCouponInStock(@Param("couponId") long couponId, @Param("inStock") boolean isInStock);
	
	@Query("SELECT c FROM Coupon c WHERE company=:company AND price <=:maxPrice")
	public List<Coupon> findByCompanyAndMaxPrice(@Param("company") Company company, @Param("maxPrice")double maxPrice );

	@Query("SELECT  c FROM Coupon c WHERE price <=:maxPrice")
	public List<Coupon> findByMaxPrice( @Param("maxPrice")double maxPrice );

	@Modifying
	@Transactional
	@Query("DELETE FROM Coupon WHERE endDate < CURDATE()")
	public void deleteByEndDate();
	
	@Query(nativeQuery = true , value ="SELECT * FROM Coupons WHERE coupon_id IN (SELECT coupon_coupon_id FROM Purchases WHERE customer_customer_id=:customerId)")
	public List<Coupon> findByCustomer(@Param("customerId") long customerId);

	@Query(nativeQuery = true , value ="SELECT * FROM Coupons WHERE coupon_id IN (SELECT coupon_coupon_id FROM Purchases WHERE customer_customer_idג=:customerId) AND category=:category")
	public List<Coupon> findByCustomerAndCategory(@Param("customerId")long customerId ,  @Param("category") Category category);

	@Query(nativeQuery = true , value ="SELECT * FROM Coupons WHERE coupon_id IN (SELECT coupon_coupon_id FROM Purchases WHERE customer_customer_id=:customerId) AND price <=:maxPrice")
	public List<Coupon> findByCustomerAndMaxPrice(@Param("customerId")long  customerId, @Param("maxPrice") double maxPrice );
	
//	findByMaxPrice
}