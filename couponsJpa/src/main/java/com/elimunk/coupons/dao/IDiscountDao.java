package com.elimunk.coupons.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.elimunk.coupons.beans.Discount;

public interface IDiscountDao extends CrudRepository<Discount, Long> {

	public void deleteByCode(String code);

	@Modifying
	@Transactional
	@Query("DELETE FROM Discount WHERE expired < CURDATE() OR amountLeft <= 0")
	public void deleteByExpired();
	
	@Modifying
	@Query("UPDATE Discount SET amountOfUses=amountOfUses+1 WHERE code=:code")
	public void updateDiscountAmountOfUses(@Param("code") String code);
	
	@Modifying
	@Query("UPDATE Discount SET amountLeft=amountLeft-1 WHERE code=:code")
	public void updateDiscountAmountLeft(@Param("code") String code);
	
	public Discount findByCode(String code);
	
	
	
}
