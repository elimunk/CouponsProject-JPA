package com.elimunk.coupons.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.elimunk.coupons.beans.Coupon;
import com.elimunk.coupons.beans.Customer;
import com.elimunk.coupons.beans.Purchase;

public interface IPurchasesDao extends CrudRepository<Purchase, Long> {

	public void deleteById(long id);

	public void deleteByCoupon(Coupon coupon);

	@Modifying
	@Query(nativeQuery = true , value ="DELETE FROM Purchases WHERE coupon_coupon_id IN (SELECT coupon_id FROM Coupons WHERE company_company_id=:companyId)")
	public void deleteByCompanyId(@Param("companyId") long companyId);

	public void deleteByCustomer(Customer customer);

	public List<Purchase> findAll();

	public Purchase findById(long id);

	public boolean existsById(long id);

	@Query(nativeQuery = true , value ="SELECT * FROM Purchases WHERE coupon_coupon_id IN (SELECT coupon_id FROM coupons WHERE company_company_id=:companyId)")
	public List<Purchase> findByCompanyId(@Param("companyId") long companyId);

	public List<Purchase> findByCustomer(Customer customer);
	

}
