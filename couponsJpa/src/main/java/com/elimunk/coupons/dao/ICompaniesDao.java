package com.elimunk.coupons.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.elimunk.coupons.beans.Company;

public interface ICompaniesDao extends CrudRepository<Company, Long> {
	
	public boolean existsByName(String name);

	public List<Company> findByName(String name);

	@Query("SELECT id FROM Company WHERE name =:name")
	public Long FindIdByCompanyName(@Param("name") String name);

}
