package com.elimunk.coupons.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.elimunk.coupons.beans.Company;

public interface ICompaniesDao extends CrudRepository<Company, Long> {
	
	public boolean existsById(long id);

	public boolean existsByName(String name);

	public void deleteById(long id);

	public Company findById(long id);

	public List<Company> findByName(String name);

	public List<Company> findAll();

	@Query("SELECT id FROM Company WHERE name =:name")
	public Long FindIdByCompanyName(@Param("name") String name);

}
