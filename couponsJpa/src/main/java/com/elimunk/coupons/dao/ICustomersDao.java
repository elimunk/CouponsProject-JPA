package com.elimunk.coupons.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.elimunk.coupons.beans.Customer;

public interface ICustomersDao extends CrudRepository<Customer, Long> {

	public boolean existsById(long id);

	public boolean existsByEmail(String email);

	public void deleteById(long id);

	public Customer findById(long id);

	public List<Customer> findAll();

	@Query("SELECT id FROM Customer WHERE email =:email")
	public Long getCustomerIdByEmail(@Param("email") String email);

}
