package com.elimunk.coupons.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.elimunk.coupons.beans.Company;
import com.elimunk.coupons.beans.User;

public interface IUsersDao extends CrudRepository<User, Long> {

	public boolean existsById(long id);

	public boolean existsByUserName(String userName);

	public void deleteById(long id);

	public void deleteByCompany(Company company);

	public User findById(long id);

	public User findByUserName(String userName);

	public User findByUserNameAndPassword(String userName, String password);

	public List<User> findAll();

	public List<User> findByCompany(Company company);

}
