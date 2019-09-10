package com.elimunk.coupons.logic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.elimunk.coupons.beans.Discount;
import com.elimunk.coupons.beans.PostLoginUserData;
import com.elimunk.coupons.dao.IDiscountDao;
import com.elimunk.coupons.exceptions.ApplicationException;

import java.util.List;

import javax.transaction.Transactional;

@Controller
public class DiscountsController {

	@Autowired
	private IDiscountDao discountDao;

	public void createDiscount(Discount discount, PostLoginUserData userData) throws ApplicationException {
		discountDao.save(discount);
	}

	public Discount getDiscount(String discountCode) throws ApplicationException {
		return discountDao.findByCode(discountCode);
	}

	public List<Discount> getAllDiscounts() throws ApplicationException {
		 List<Discount> allDiscounts = (List<Discount>) discountDao.findAll();
		return allDiscounts;
	}
	
	@Transactional
	public void deleteDiscount(String discountCode, PostLoginUserData userData) throws ApplicationException {
		discountDao.deleteByCode(discountCode);
	}
}
